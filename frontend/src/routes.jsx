import { Home, AboutUs, SignIn, Gallery } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
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
    name: "About Us",
    path: "/aboutus",
    element: <AboutUs />,
  },
  {
    icon: TrophyIcon,
    name: "Acheivements",
    path: "/Acheivements",
    element: <SignIn />,
  },
  {
    icon: PhotoIcon,
    name: "View Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    icon: PhoneIcon,
    name: "Blogs",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
