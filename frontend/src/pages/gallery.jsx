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
  const [open, setOpen] = useState(false);
  const [previewImg, setPreviewImg] = useState();

  let [searchParams, setSearchParams] = useSearchParams();
  const year = searchParams.get("year")

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    let query = year ? `&filters\[year\][$eq]=${year}` : ""
    axios
      .get(`/photos?populate=*` + query)
      .then((res) => {
        setPhotos(res.data.data);
        console.log(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <section className="relative bg-blue-gray-50/50 pt-10">
        <div className="mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div>
              <div className="flex flex-wrap justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
                  {photos &&
                    photos.map(({ id, attributes }) => (
                      <Card key={id}
                        className="h-64 lg:w-[20vw] md:w-[30vw] cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                        onClick={() => {
                          handleOpen();
                          setPreviewImg(import.meta.env.VITE_STRAPI_URL + attributes.img.data[0].attributes.url)
                        }}
                      >
                        <img
                          alt="nature"
                          className="h-full w-full object-cover object-center"
                          src={import.meta.env.VITE_STRAPI_URL + attributes.img.data[0].attributes.formats.thumbnail.url}
                        />
                      </Card>
                    ))}

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
