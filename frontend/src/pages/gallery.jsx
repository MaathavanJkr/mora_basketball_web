import {
  Avatar, Typography, Button, Card, List, ListItem, Select, Option, Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Dialog,
  DialogBody
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import axios from "../axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [galleryData, setGalleryData] = useState({});
  const [open, setOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState();

  let [searchParams, setSearchParams] = useSearchParams();
  let yearParam = searchParams.get("year")
  let nameParam = searchParams.get("name")
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    let galleryDataDup = {}
    axios
      .get("/photos?populate=*")
      .then((res) => {
        res.data.data.forEach(e => {
          galleryDataDup[e.attributes.year] ??= [];
          galleryDataDup[e.attributes.year].push(e.attributes);
        });
        console.log(galleryDataDup)
        setGalleryData(galleryDataDup)
        if (nameParam) {
          let data = []
          data.push(galleryDataDup[yearParam].find(o => o.name == nameParam))
          setPhotos(data);
          console.log(data)
        } else if (yearParam) {
          setPhotos(galleryDataDup[yearParam]);
        } else {
          let data = []
          for (var key in galleryDataDup) {
            data = data.concat(galleryDataDup[key])
          }
          console.log(data)
          setPhotos(data)
        }
        console.log(Object.keys(galleryDataDup))
      })
      .catch((error) => {
        console.log(error);
      });
  }, [nameParam, yearParam]);

  const changeYear = (value) => {
    setPhotos(galleryData[value])
    setSearchParams({ ["year"]: value })
  }
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <section className="relative">
        <div className="mx-auto">
          <div className="relative -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-blue-gray-100 shadow-xl shadow-gray-500/5">
            <div>
              <div className="flex flex-wrap justify-center pb-10 px-6 pt-2">
                <Card className="w-full my-2">
                  <div className="flex w-full justify-center">
                    <Typography variant="h1" color="blue-gray" className="my-4">
                      Gallery
                    </Typography>
                  </div>
                </Card>
                <div className="w-full">
                  <Card className="flex w-full justify-center mb-2">
                    <Select size="lg" label="Select Year" onChange={(e) => changeYear(e)}>
                      {Object.keys(galleryData).map((year) => {
                        return (<Option key={year} value={year}>
                          {year}
                        </Option>)
                      })}
                    </Select>
                  </Card>
                </div>

                <div className="flex flex-wrap justify-center w-full">
                  <Card className="flex w-full justify-center px-4 shadow-xl shadow-blue-gray-900/5">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
                      {(!nameParam && photos) &&
                        photos.map(({ name, img, year }) => (
                          <div key={name} className="flex flex-wrap justify-center">
                            <Card
                              className="h-64 lg:w-[20vw] md:w-[30vw] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                              onClick={() => {
                                // handleOpen();
                                // setPreviewImg(import.meta.env.VITE_STRAPI_URL + img.data[0].attributes.url)
                                setSearchParams({ ["year"]: year, ["name"]: name });
                              }}
                            >
                              <figure className="relative w-full">
                                <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/60 via-black/30" />
                                <img
                                  alt={name}
                                  className="h-64 w-full rounded-xl object-cover object-center"
                                  src={import.meta.env.VITE_STRAPI_URL + img.data[0].attributes.formats.thumbnail.url}
                                />
                                <figcaption className="absolute px-4 text-lg text-white bottom-6">
                                  <div>
                                    <Typography variant="h5" color="white">
                                      {name}
                                    </Typography>
                                  </div>
                                </figcaption>
                              </figure>

                            </Card></div>
                        ))}
                      {nameParam && photos &&
                        photos.map(({ imgs }) => imgs.data.map(({ id, attributes }) => (
                          <Card key={id}
                            className="h-64 lg:w-[20vw] md:w-[30vw] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                            onClick={() => {
                              handleOpen();
                              setPreviewImg(import.meta.env.VITE_STRAPI_URL + attributes.url)
                            }}
                          >
                            <img
                              alt="nature"
                              className="h-full w-full object-cover object-center"
                              src={import.meta.env.VITE_STRAPI_URL + attributes.formats.medium.url}
                              loading="lazy"
                            />
                          </Card>
                        )))}
                      <Dialog size="xl" open={open} handler={handleOpen}>
                        <DialogBody className="p-0">
                          <img
                            alt="nature"
                            className="max-h-[95vh] w-full object-cover object-center"
                            src={previewImg}
                          />
                        </DialogBody>
                      </Dialog>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Gallery;
