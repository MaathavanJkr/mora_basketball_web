import {
  Avatar, Typography, Button, Card, List, ListItem, Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import axios from "../axios";
import { useEffect, useState } from "react";


export function AboutUs() {
  const [teamDetails, setTeamDetails] = useState([]);
  const config = {
    headers: { Authorization: `Bearer ${import.meta.env.VITE_STRAPI_API_TOKEN}` }
  };
  useEffect(() => {
    axios
      .get(`/team-details`, config)
      .then((res) => {
        setTeamDetails(res.data.data);
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

      <section className="relative bg-blue-gray-50/50 pt-20">
        <div className="mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <Avatar
                        src="/img/favicon.jpeg"
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button className="bg-blue-400">View Gallery</Button>
                </div>
                <div className="w-full px-4 lg:order-1 lg:w-4/12">
                  <div className="flex justify-center py-4 pt-8 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        22
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Friends
                      </Typography>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        10
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Photos
                      </Typography>
                    </div>
                    <div className="p-3 text-center lg:mr-4">
                      <Typography
                        variant="lead"
                        color="blue-gray"
                        className="font-bold uppercase"
                      >
                        89
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        Comments
                      </Typography>
                    </div>
                  </div>
                </div>
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

              {/* <div className="mb-10 border-blue-gray-50 text-center">
                <div className="flex flex-row">
                  <div>
                    <Card className="w-full max-w-[20rem] h-[50vh] p-4 shadow-xl shadow-blue-gray-900/5">
                      <List>
                        {teamDetails.map((item, i) => {
                          return (<ListItem>
                            {item.attributes.year}
                          </ListItem>)
                        })}
                      </List>
                    </Card>
                  </div>
                  <div className="w-full pl-2">
                    <Card className="w-full h-[50vh] p-4 shadow-xl shadow-blue-gray-900/5">
                      Hello
                    </Card>
                  </div>
                </div>

              </div> */}

              <Tabs value="html" orientation="vertical" className="py-4">
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
                        <div className="mb-2">
                          <Typography className="font-medium text-blue-gray-700">
                            {attributes.description}
                          </Typography>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
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
