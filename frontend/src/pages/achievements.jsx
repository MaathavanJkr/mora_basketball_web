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

export function Achievements() {
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
                      Achievements
                    </Typography>
                  </div>
                </Card>
              </div>

              <div className="flex flex-wrap justify-center pb-4">
                <Card className="w-full px-4 bg-gray-100 shadow-xl shadow-blue-gray-900/5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies neque eu velit rhoncus pretium. Etiam cursus justo sit amet nibh pharetra, non semper nibh egestas. Mauris lobortis finibus leo vitae suscipit. Praesent venenatis odio nec egestas malesuada. In viverra odio ac odio tristique lacinia. Duis cursus lectus in dictum ultrices. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque tincidunt, massa ac accumsan pharetra, nisi velit semper tortor, ac dictum nisi purus ac lectus. Mauris sed fermentum arcu, id tincidunt odio. Sed blandit lacus et arcu gravida ornare. Morbi in massa ac leo luctus cursus. Vivamus ornare libero lorem, id consectetur nulla iaculis id. Integer volutpat ex id felis interdum porttitor id sit amet leo. Curabitur euismod leo metus. Vestibulum interdum leo et feugiat efficitur. Sed sagittis tellus rhoncus eros dapibus, vel varius ligula viverra.

                  Suspendisse sollicitudin, mi ut ullamcorper rutrum, orci ipsum hendrerit ipsum, id volutpat justo ante quis elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus facilisis et ligula eget euismod. Aenean ut nisl sem. In hac habitasse platea dictumst. Maecenas id luctus risus. Phasellus suscipit velit non est eleifend, ut malesuada est pellentesque. Sed pharetra nulla sit amet mauris convallis, vel varius ex consequat.

                  Pellentesque urna diam, consequat nec turpis eget, congue tincidunt lorem. Nunc a mi erat. Cras aliquam, enim ut ultricies sodales, erat libero mollis quam, eget rhoncus metus purus sagittis diam. Duis leo mauris, hendrerit nec ultricies a, ultrices sit amet est. Praesent tellus sapien, facilisis ac lacus id, pellentesque condimentum nisl. Aenean consectetur nisl sed laoreet eleifend. Pellentesque fermentum, magna quis pulvinar mattis, nunc tellus ultricies lacus, sit amet eleifend risus augue vel tellus. Phasellus dapibus id nisl at mollis. Nullam in sodales neque. Nulla suscipit odio at erat pellentesque, eu commodo mauris sollicitudin. Aliquam lorem nisi, rutrum id nunc vel, condimentum scelerisque ligula.
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

export default Achievements;
