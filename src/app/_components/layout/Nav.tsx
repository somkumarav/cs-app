"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  FaTh,
  FaAward,
  FaInfoCircle,
  FaCog,
  FaUserCircle,
} from "react-icons/fa";

type Route = {
  name: string;
  link: string;
  icon: JSX.Element;
};

const routes: Route[] = [
  {
    name: "Home",
    link: "/",
    icon: <FaTh size={20} />,
  },

  {
    name: "Leaderboard",
    link: "/leaderboard",
    icon: <FaAward size={20} />,
  },

  {
    name: "About",
    link: "/about",
    icon: <FaInfoCircle size={20} />,
  },

  {
    name: "Setting",
    link: "/settings",
    icon: <FaCog size={20} />,
  },

  {
    name: "User",
    link: "/user",
    icon: <FaUserCircle size={20} />,
  },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-[5vh] w-full items-center justify-center gap-[50px]">
      {routes.map((route) => {
        const active = pathname === route.link;
        return (
          <Link
            key={route.name}
            // className={`${pathname === route.link && "active"}`}
            className={`${
              active ? "text-skin-secondaryColor" : "text-skin-primaryColor"
            } cursor-pointer`}
            href={route.link}
          >
            {route.icon}
          </Link>
        );
      })}
    </div>
  );
};
