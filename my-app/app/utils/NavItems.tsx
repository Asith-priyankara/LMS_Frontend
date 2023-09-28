import React from "react";
import Link from "next/link";

export const navItemsData = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Courses",
    url: "/courses",
  },
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Policy",
    url: "/policy",
  },
  {
    name: "FAQ",
    url: "/faq",
  },
];

type Props = {
  activeItem: number;
  isMobile: boolean;
};

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
  return (
    <>
      <div className="hidden md:flex">
        {" "}
        {/* Use 'md' for medium screens */}
        {navItemsData &&
          navItemsData.map((item, index) => (
            <Link href={item.url} key={index} passHref>
              <span
                className={
                  activeItem === index
                    ? "dark:text-[#37a39a] text-[crimson] text-[18px] px-6 font-Poppins font-[400]"
                    : "dark:text-white text-black text-[18px] px-6 font-Poppins font-[400]"
                }
              >
                {item.name}
              </span>
            </Link>
          ))}
      </div>
      {isMobile && (
        <div className="md:hidden mt-5">
          {" "}
          {/* Use 'md' for medium screens */}
          {/* <div className="w-full text-center py-6"> */}
          {navItemsData &&
            navItemsData.map((item, index) => (
              <Link href={item.url} key={index} passHref>
                <div className="my-2">
                  {" "}
                  {/* Add this div to create a column layout */}
                  <span
                    className={
                      activeItem === index
                        ? "dark:text-[#37a39a] text-[crimson] text-[18px] px-6 font-Poppins font-[400]"
                        : "dark:text-white text-black text-[18px] px-6 font-Poppins font-[400]"
                    }
                  >
                    {item.name}
                  </span>
                </div>
              </Link>
            ))}
        </div>
      )}
    </>
  );
};

export default NavItems;
