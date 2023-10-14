import {
  Avatar,
  Typography,
  Button,
  Card,
  List,
  ListItem,
  Select,
  Option,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Footer } from "@/widgets/layout";
import axios from "../axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { TeamCard } from "@/widgets/cards";

export function ContactUs() {
  const [team, setTeam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/current-team`)
      .then((res) => {
        setTeam(res.data.data);
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
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
                <Card className="my-2 w-full">
                  <div className="flex w-full justify-center">
                    <Typography variant="h1" color="blue-gray" className="my-4">
                      Contact Us
                    </Typography>
                  </div>
                </Card>
              </div>

              <div className="flex flex-wrap justify-center pb-4">
                <Card className="w-full bg-gray-100 px-4 shadow-xl shadow-blue-gray-900/5">
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
                  {loading ? (
                    <>
                      <div className="container mx-auto flex justify-center pb-10">
                        Loading...
                      </div>
                    </>
                  ) : (
                    <>
                      {/* component */}
                      <div className="mb-16">
                        {/* Code block starts */}
                        <dh-component>
                          <div className="w-full px-10 pt-10">
                            <div className="container mx-auto flex justify-center pb-10">
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
                                className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between"
                              >
                                <TeamCard
                                  img="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                  name={team.attributes.men_captain.name}
                                  position="Captain"
                                  fb={team.attributes.men_captain.fb}
                                  insta={team.attributes.men_captain.insta}
                                  intro={team.attributes.men_captain.intro}
                                />
                                <TeamCard
                                  img="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                  name={team.attributes.men_vice_captain.name}
                                  position="Vice Captain"
                                  fb={team.attributes.men_vice_captain.fb}
                                  insta={team.attributes.men_vice_captain.insta}
                                  intro={team.attributes.men_vice_captain.intro}
                                />
                                <TeamCard
                                  img="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                  name={team.attributes.men_secretary.name}
                                  position="Secretary"
                                  fb={team.attributes.men_secretary.fb}
                                  insta={team.attributes.men_secretary.insta}
                                  intro={team.attributes.men_secretary.intro}
                                />
                              </div>
                            </div>
                            <div className="container mx-auto flex justify-center pb-10">
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
                                className="flex-wrap items-center sm:flex sm:justify-around md:flex md:justify-around lg:flex lg:justify-around xl:justify-between"
                              >
                                <TeamCard
                                  img="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                  name={team.attributes.women_captain.name}
                                  position="Captain"
                                  fb={team.attributes.women_captain.fb}
                                  insta={team.attributes.women_captain.insta}
                                  intro={team.attributes.women_captain.intro}
                                />
                                <TeamCard
                                  img="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                  name={team.attributes.women_vice_captain.name}
                                  position="Vice Captain"
                                  fb={team.attributes.women_vice_captain.fb}
                                  insta={team.attributes.women_vice_captain.insta}
                                  intro={team.attributes.women_vice_captain.intro}
                                />
                                <TeamCard
                                  img="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                                  name={team.attributes.women_secretary.name}
                                  position="Secretary"
                                  fb={team.attributes.women_secretary.fb}
                                  insta={team.attributes.women_secretary.insta}
                                  intro={team.attributes.women_secretary.intro}
                                />
                              </div>
                            </div>
                          </div>
                        </dh-component>
                        {/* Code block ends */}
                        {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
                      </div>
                    </>
                  )}
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
