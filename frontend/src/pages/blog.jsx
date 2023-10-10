import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import ReactMarkdown from "react-markdown";
import axios from "../axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import BlogCard from "@/widgets/cards/blog-card";

export function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);

  let [searchParams, setSearchParams] = useSearchParams();
  let idParam = searchParams.get("id")

  useEffect(() => {
    if (idParam) {
      axios
        .get(`/blogs/${idParam}?populate=*`)
        .then((res) => {
          setBlog(res.data.data);
          console.log(res.data.data)
        })
        .catch((error) => {
          console.log(error.response.data);
        }).finally(()=> {
          setLoading(false)
        });
    } else {
      axios
        .get(`/blogs?populate=*&sort=createdAt:desc`)
        .then((res) => {
          setBlogs(res.data.data);
          console.log(res.data.data)
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  }, [idParam]);
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>

      <section className="relative">
        <div className="mx-auto">
          <div className="relative -mt-64 flex w-full min-w-0 flex-col break-words rounded-3xl bg-blue-gray-100 shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center pt-2">
                <Card className="w-full my-2">
                  <div className="flex w-full justify-center">
                    <Typography variant="h1" color="blue-gray" className="my-4">
                      Blogs
                    </Typography>
                  </div>
                </Card>
              </div>
              <div className="flex flex-wrap justify-center pb-4">
                <Card className="w-full p-8 bg-gray-100 shadow-xl shadow-blue-gray-900/5">

                  {idParam ? <>
                    {loading ? <>Loading</>: <div className="my-0">
                      <div className="flex flex-wrap mb-4">
                        <Typography variant="h3" color="blue-gray" className="mb-2">
                          {blog.attributes.title}
                        </Typography>
                      </div>
                      <img
                        className="rounded-lg"
                        src={import.meta.env.VITE_STRAPI_URL + blog.attributes.img.data.attributes.formats.medium.url}
                        alt="sss"
                      />
                      <div className="mt-6 mb-2">
                        <ReactMarkdown className="markdown">{blog.attributes.content}</ReactMarkdown>
                      </div>
                    </div>}
                  </> : <div class="flex w-full justify-center px-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-5">
                      {blogs && blogs.map(({ id, attributes }) => (<BlogCard
                        date={attributes.createdAt}
                        CardTitle={attributes.title}
                        CardDescription={attributes.content.substring(0, 200) + "..."}
                        image={import.meta.env.VITE_STRAPI_URL + attributes.img.data.attributes.formats.medium.url}
                        link={"blog?id=" + id}
                      />))}
                    </div>
                  </div>}

                </Card>

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

export default Blog;
