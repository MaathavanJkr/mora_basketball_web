import { Avatar, Typography, Button, Card, List, ListItem } from "@material-tailwind/react";
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
    headers: { Authorization: `Bearer 54bcb014d9c764e4c7301a4262a0101ee41d58b718eb0ad2c495329386b1106c49d1f257b106c475c4eb0bb7f0bd2cf2df4afa3f1257f77069a3e5fad9d335d508dc2fe57f3b32d0b9dd7e4a9049bde5095815559b1a8049cc3437bb80b58f8966044394c544f3b015003bcfc7380ca6093cf4198099f7b60540865da86269df` }
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

      <section className="relative bg-blue-gray-50/50 py-2">
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

              <div className="mb-10 border-blue-gray-50 text-center">
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

export default AboutUs;
