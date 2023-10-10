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
import ReactMarkdown from "react-markdown";

export function ContactUs() {
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
              <div className="flex flex-wrap justify-center">
                {/* <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="https://i.pinimg.com/1200x/f5/c3/9a/f5c39a98bde8aefe463aeddf343c127f.jpg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div> */}
                <div className="flex w-full justify-center">
                  <Typography variant="h1" color="blue-gray" className="my-4">
                    Contact Us
                  </Typography>
                </div>
              </div>

              <div className="flex flex-wrap justify-center px-2 pb-4">
                <Card className="w-full px-4 shadow-xl shadow-blue-gray-900/5">
                  {/* <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                      <Typography variant="h3" color="blue-gray" className="my-4">
                        Current Team
                      </Typography>
                      <p className="text-base text-gray-700 md:text-lg">
                        Contact Our Team Leaders for more information about the team and future plans
                      </p>
                    </div>
                    <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                      <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                          <img
                            className="absolute object-cover w-full h-full rounded"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt="Person"
                          />
                        </div>
                        <div className="flex flex-col sm:text-center">
                          <p className="text-lg font-bold">Rukshan</p>
                          <p className="mb-5 text-xs text-gray-800">Men's Captain</p>
                          <div className="flex items-center space-x-3 sm:justify-center">
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                          <img
                            className="absolute object-cover w-full h-full rounded"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt="Person"
                          />
                        </div>
                        <div className="flex flex-col sm:text-center">
                          <p className="text-lg font-bold">Gimhan </p>
                          <p className="mb-5 text-xs text-gray-800">Men's Vice Captain</p>
                          <div className="flex items-center space-x-3 sm:justify-center">
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                          <img
                            className="absolute object-cover w-full h-full rounded"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt="Person"
                          />
                        </div>
                        <div className="flex flex-col sm:text-center">
                          <p className="text-lg font-bold">Hiruni</p>
                          <p className="mb-5 text-xs text-gray-800">Women's Captain</p>
                          <div className="flex items-center space-x-3 sm:justify-center">
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                          <img
                            className="absolute object-cover w-full h-full rounded"
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                            alt="Person"
                          />
                        </div>
                        <div className="flex flex-col sm:text-center">
                          <p className="text-lg font-bold">AAAAA</p>
                          <p className="mb-5 text-xs text-gray-800">Women's Vice Captain</p>
                          <div className="flex items-center space-x-3 sm:justify-center">
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                              </svg>
                            </a>
                            <a
                              href="/"
                              className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                            >
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <>
                    {/* component */}
                    <div className="mb-16">
                      {/* Code block starts */}
                      <dh-component>

                        <div className="w-full bg-gray-100 px-10 pt-10">
                          <div className="container flex justify-center mx-auto pb-10">
                            <div>
                              <Typography variant="h3" color="blue-gray">
                                Men's Team
                              </Typography>
                            </div>
                          </div>
                          <div className="container mx-auto">
                            <div
                              role="list"
                              aria-label="Behind the scenes People "
                              className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                            >
                              <div
                                role="listitem"
                                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                              >
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                      <img
                                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                        alt="Display Picture of Andres Berlin"
                                        role="img"
                                        className="rounded-full object-cover h-full w-full shadow-md"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                    <h1 className="font-bold text-3xl text-center mb-1">
                                      Rukshan
                                    </h1>
                                    <p className="text-gray-800 text-sm text-center">
                                      Captain
                                    </p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque eu velit rhoncus pretium. Etiam cursus justo sit amet nibh pharetra, non semper nibh egestas.
                                    </p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Github" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github"
                                          >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Twitter" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter"
                                          >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Instagram" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram"
                                          >
                                            <rect
                                              x={2}
                                              y={2}
                                              width={20}
                                              height={20}
                                              rx={5}
                                              ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                              >
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                      <img
                                        src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                                        alt="Display Picture of Silene Tokyo"
                                        role="img"
                                        className="rounded-full object-cover h-full w-full shadow-md"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                    <h1 className="font-bold text-3xl text-center mb-1">
                                      Gimhan
                                    </h1>
                                    <p className="text-gray-800 text-sm text-center">
                                      Vice Captain
                                    </p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque eu velit rhoncus pretium.
                                     Etiam cursus justo sit amet nibh pharetra, non semper nibh egestas.
                                    </p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Github" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github"
                                          >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Twitter" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter"
                                          >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Instagram" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram"
                                          >
                                            <rect
                                              x={2}
                                              y={2}
                                              width={20}
                                              height={20}
                                              rx={5}
                                              ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                              >
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                      <img
                                        src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                                        alt="Display Picture of Johnson Stone"
                                        role="img"
                                        className="rounded-full object-cover h-full w-full shadow-md"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                    <h1 className="font-bold text-3xl text-center mb-1">
                                      Vinu
                                    </h1>
                                    <p className="text-gray-800 text-sm text-center">
                                      Secretary
                                    </p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque eu velit rhoncus pretium.
                                     Etiam cursus justo sit amet nibh pharetra, non semper nibh egestas.
                                    </p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Github" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github"
                                          >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Twitter" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter"
                                          >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Instagram" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram"
                                          >
                                            <rect
                                              x={2}
                                              y={2}
                                              width={20}
                                              height={20}
                                              rx={5}
                                              ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="container flex justify-center mx-auto pb-10">
                            <div>
                              <Typography variant="h3" color="blue-gray">
                                Women's Team
                              </Typography>
                            </div>
                          </div>
                          <div className="container mx-auto">
                            <div
                              role="list"
                              aria-label="Behind the scenes People "
                              className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
                            >
                              <div
                                role="listitem"
                                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                              >
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                      <img
                                        src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                        alt="Display Picture of Andres Berlin"
                                        role="img"
                                        className="rounded-full object-cover h-full w-full shadow-md"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                    <h1 className="font-bold text-3xl text-center mb-1">
                                      Rukshan
                                    </h1>
                                    <p className="text-gray-800 text-sm text-center">
                                      Captain
                                    </p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque eu velit rhoncus pretium. Etiam cursus justo sit amet nibh pharetra, non semper nibh egestas.
                                    </p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Github" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github"
                                          >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Twitter" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter"
                                          >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Instagram" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram"
                                          >
                                            <rect
                                              x={2}
                                              y={2}
                                              width={20}
                                              height={20}
                                              rx={5}
                                              ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                              >
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                      <img
                                        src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif"
                                        alt="Display Picture of Silene Tokyo"
                                        role="img"
                                        className="rounded-full object-cover h-full w-full shadow-md"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                    <h1 className="font-bold text-3xl text-center mb-1">
                                      Gimhan
                                    </h1>
                                    <p className="text-gray-800 text-sm text-center">
                                      Vice Captain
                                    </p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque eu velit rhoncus pretium.
                                     Etiam cursus justo sit amet nibh pharetra, non semper nibh egestas.
                                    </p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Github" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github"
                                          >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Twitter" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter"
                                          >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Instagram" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram"
                                          >
                                            <rect
                                              x={2}
                                              y={2}
                                              width={20}
                                              height={20}
                                              rx={5}
                                              ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                role="listitem"
                                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                              >
                                <div className="rounded overflow-hidden shadow-md bg-white">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                      <img
                                        src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif"
                                        alt="Display Picture of Johnson Stone"
                                        role="img"
                                        className="rounded-full object-cover h-full w-full shadow-md"
                                      />
                                    </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                    <h1 className="font-bold text-3xl text-center mb-1">
                                      Vinu
                                    </h1>
                                    <p className="text-gray-800 text-sm text-center">
                                      Secretary
                                    </p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque eu velit rhoncus pretium.
                                     Etiam cursus justo sit amet nibh pharetra, non semper nibh egestas.
                                    </p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Github" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-github"
                                          >
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Twitter" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-twitter"
                                          >
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                          </svg>
                                        </div>
                                      </a>
                                      <a href="javascript:void(0)" className="mx-5">
                                        <div aria-label="Instagram" role="img">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#718096"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram"
                                          >
                                            <rect
                                              x={2}
                                              y={2}
                                              width={20}
                                              height={20}
                                              rx={5}
                                              ry={5}
                                            />
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                          </svg>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </dh-component>
                      {/* Code block ends */}
                      {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                    </div>
                  </>

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

export default ContactUs;
