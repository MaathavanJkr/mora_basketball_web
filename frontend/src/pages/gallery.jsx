import {
  Avatar, Typography, Button, Card, List, ListItem, Select, Option, Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import axios from "../axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

export function Gallery() {
  const [photos, setPhotos] = useState([]);
  const [open, setOpen] = useState(false);
 
  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    axios
      .get(`/photos?populate=*`)
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
            <div className="px-6">
              <div className="flex flex-wrap justify-center">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {photos &&
                    photos.map(({ id, attributes }) => (
                      <Card key={id}
                        className="h-64 w-96 cursor-pointer overflow-hidden transition-opacity hover:opacity-90"
                        onClick={handleOpen}
                      >
                        <img
                          alt="nature"
                          className="h-full w-full object-cover object-center"
                          src={import.meta.env.VITE_STRAPI_URL + attributes.img.data[0].attributes.formats.thumbnail.url}
                        />
                      </Card>
                    ))}
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
