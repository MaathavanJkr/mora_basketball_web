import {
  Avatar, Typography, Button, Card, List, ListItem, Select, Option, Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import axios from "../../axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import BlogCard from "../cards/blog-card";

const Blog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get(`/blogs?populate=*&sort=createdAt:desc`)
      .then((res) => {
        setBlogs(res.data.data);
        console.log(res.data.data)
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }, []);
  return (
    <>
      <section className="pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Blogs
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p className="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
              {blogs && blogs.slice(0, 3).map(({ id, attributes }) => (<BlogCard
                date={new Date(
                  attributes.createdAt
                ).toLocaleString("en-us", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                CardTitle={attributes.title}
                CardDescription={attributes.content.substring(0, 200) + "..."}
                image={import.meta.env.VITE_STRAPI_URL + attributes.img.data.attributes.formats.medium.url}
                link={"blog?id="+id}
              />))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
