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

export function AboutUs() {
  const [teamDetails, setTeamDetails] = useState([]);
  const [openTab, setOpenTab] = useState();

  useEffect(() => {
    axios
      .get(`/team-details?sort=year:desc`)
      .then((res) => {
        setTeamDetails(res.data.data);
        console.log(res.data.data)
        setOpenTab(res.data.data[0].attributes.year.toString())
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

                <Card className="w-full my-2">
                  <div className="flex w-full justify-center">
                    <Typography variant="h1" color="blue-gray" className="my-4">
                      Our Teams
                    </Typography>

                  </div>
                </Card>
              </div>
              {/* <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  2022 Basketball
                </Typography>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BriefcaseIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    Champions of 22 Inter UNI
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <BuildingLibraryIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    SLUG Champions
                  </Typography>
                </div>
              </div> */}

              <div className="mb-10 border-blue-gray-50">
                <Card className="block md:hidden mb-4">
                  <Select size="lg" label="Select Year" onChange={(e) => setOpenTab(e)}>
                    {teamDetails.map(({ attributes }) => {
                      return (<Option key={attributes.year} value={attributes.year}>
                        {attributes.year}
                      </Option>)
                    })}
                  </Select>
                </Card>
                <div className="flex flex-row">
                  <div className="hidden md:block">
                    <Card className="w-full max-w-[20rem] md:h-[75vh] p-4 shadow-xl shadow-blue-gray-900/5">
                      <List>
                        {teamDetails.map(({ attributes }) => {
                          return (<ListItem key={attributes.year} onClick={() => setOpenTab(attributes.year)}>
                            {attributes.year}
                          </ListItem>)
                        })}
                      </List>
                    </Card>
                  </div>
                  <div className="w-full md:pl-2">
                    {teamDetails.map(({ attributes }) => {
                      let show = attributes.year == openTab ? "block" : "hidden";
                      return (<Card key={attributes.year} className={"w-full md:h-[75vh] p-4 shadow-xl shadow-blue-gray-900/5 " + show}>
                        <div className="my-2 p-2 md:h-[70vh] overflow-y-scroll">
                          <div className="my-0">
                            <div className="flex flex-wrap">
                              <div className="w-full lg:order-1 lg:w-8/12">
                                <Typography variant="h2" color="blue-gray" className="mb-2">
                                  {attributes.year} Basketball
                                </Typography>
                              </div>
                              <div className="flex w-full justify-center lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end">
                                <a href={"gallery?year=" + attributes.year}>
                                  <Button color="blue" size="sm">View Gallery</Button>
                                </a>
                              </div>
                            </div>
                            <img
                              className="h-100 w-full rounded-lg object-cover object-center mt-4"
                              src={attributes.main_image}
                              alt={attributes.year}
                            />
                            <div className="mt-6 mb-2">
                              <ReactMarkdown className="markdown">{attributes.description}</ReactMarkdown>
                            </div>
                          </div>
                        </div>
                      </Card>)
                    })}
                  </div>
                </div>

              </div>

              {/* <Tabs value="html" orientation="vertical" className="py-4">
                <TabsHeader className="w-32">
                  {teamDetails.map(({ id, attributes }) => (
                    <Tab key={id} value={id}>
                      {attributes.year}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody>
                  {teamDetails.map(({ id, attributes }) => (
                    <TabPanel key={id} value={id} className="pl-6 py-0">
                      <div className="my-0">
                        <Typography variant="h2" color="blue-gray" className="mb-2">
                          {attributes.year} Basketball
                        </Typography>
                        <img
                          className="h-100 w-full rounded-lg object-cover object-center"
                          src={attributes.main_image}
                          alt={attributes.year}
                        />
                        <div className="mb-2 font-medium">
                            <ReactMarkdown>{attributes.description}</ReactMarkdown>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs> */}

              {/* <div>
                <div className="container mx-auto">
                  <div className="flex flex-col items-center justify-center max-w-xl">
                    <ul className="flex space-x-2">
                      {tabs.map((tab) => (
                        <li key={tab.name}>
                          <a
                            href={tab.link}
                            onClick={() => setOpenTab(tab.name)}
                            className="inline-block px-4 py-2 text-gray-600 bg-white rounded shadow"
                          >
                            {tab.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="p-3 mt-6 bg-white border">
                      {tabs.map((tab) => (
                        <div
                          key={tab.name}
                          className={
                            tab.name === openTab ? "block" : "hidden"
                          }
                        >
                          {tab.content}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div> */}

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

export default AboutUs;
