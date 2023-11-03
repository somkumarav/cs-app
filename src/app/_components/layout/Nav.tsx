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
import { useSession } from "next-auth/react";

type Route = {
  name: string;
  link: string;
  icon: JSX.Element;
};

export const Nav = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

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

    session?.user.image
      ? {
          name: "User",
          link: "/user",
          icon: (
            <img
              src={session.user.image}
              alt=""
              className="h-[20px] w-[20px] rounded-full"
            />
          ),
        }
      : {
          name: "User",
          link: "/user",
          icon: <FaUserCircle size={20} />,
        },
  ];

  return (
    <div className="flex h-[5vh] w-full items-center justify-center gap-[50px]">
      {routes.map((route) => {
        const active = pathname === route.link;
        return (
          <Link
            key={route.name}
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
