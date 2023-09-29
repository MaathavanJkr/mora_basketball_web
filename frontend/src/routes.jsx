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
    name: "Teams",
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
    name: "Gallery",
    path: "/gallery",
    element: <Gallery />,
  },
  {
    icon: PhoneIcon,
    name: "Contact Us",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
