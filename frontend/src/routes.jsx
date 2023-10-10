import { Home, AboutUs, Achievements, Gallery, Blog, ContactUs } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  PencilSquareIcon,
  TrophyIcon,
  PhotoIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Teams",
    path: "/aboutus",
    element: <AboutUs />,
  },
  // {
  //   icon: TrophyIcon,
  //   name: "Acheivements",
  //   path: "/acheivements",
  //   element: <Achievements />,
  // },
  {
    icon: PhotoIcon,
    name: "Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    icon: PencilSquareIcon,
    name: "Blog",
    path: "/blog",
    element: <Blog />,
  },
  {
    icon: PhoneIcon,
    name: "Contact Us",
    path: "/contact",
    element: <ContactUs />,
  },
];

export default routes;
