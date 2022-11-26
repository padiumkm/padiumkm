import Image from "next/image";
import Link from "next/link";
import SearchBar from "../SearchBar/SearchBar";
import { Squash as Hamburger } from "hamburger-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../lib/store";
import { toggleSidebar } from "../../lib/slice/sliceSidebar";
import { navigations } from "../../data/navigation";
import Button from "../button/Button";
import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { getCookie, hasCookie } from "cookies-next";
import { saveProfile } from "../../lib/slice/sliceProfile";
import Profile from "../modal/Profile";
import { hideProfile, showProfile } from "../../lib/slice/sliceModal";

interface Token {
  username: string;
  name: string;
  sub: string;
  iat: string;
  exp: string;
  iss: string;
}

const Navbar = () => {
  const isOpen = useSelector((state: RootState) => state.SidebarReducer.isOpen);
  const user = useSelector((state: RootState) => state.ProfileReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (hasCookie("token")) {
      const token = getCookie("token")?.toString() || "";
      const decoded = jwt_decode<Token>(token);
      dispatch(saveProfile({ name: decoded.name, email: decoded.username }));
    }
  }, []);

  return (
    <>
      <nav className="hidden sm:flex justify-between h-9 bg-tertiery">
        <div className="flex px-[22px] w-full">
          {navigations.map((navigation, index) => (
            <div
              className="flex items-center text-xs font-normal text-[#8D8D97] pr-8 cursor-pointer"
              key={index}
            >
              <Link href={navigation.link}>{navigation.name}</Link>
            </div>
          ))}
        </div>
        <div className="flex px-[22px] space-x-2">
          <div className="flex items-center relative my-2">
            <Image
              src={"/logo-bbi.svg"}
              width={100}
              height={100}
              alt={"logo bbi"}
              className="w-6"
            />
          </div>
          <div className="flex items-center relative my-2">
            <Image
              src={"/logo-bumn.svg"}
              width={100}
              height={100}
              alt={"logo bumn"}
              className="w-[65px] h-3"
            />
          </div>
        </div>
      </nav>
      <div className="w-full flex flex-col bg-white">
        <div className="flex flex-col sm:flex-row items-center justify-around bg-white py-2 pl-[14px] sm:pl-[22px] pr-[22px] w-full h-full divide-x-0 sm:divide-x divide-[#9FA7BC]">
          <div className="flex items-center justify-between w-full space-x-4">
            <div className="relative block sm:hidden">
              <Hamburger
                toggle={() => dispatch(toggleSidebar())}
                toggled={isOpen}
                size={28}
                label="Show menu"
              />
            </div>
            <div className="relative cursor-pointer md:-left-3 w-16 h-8 min-w-max md:w-20 md:h-10">
              <Link href={"/"}>
                <Image
                  src={"/logo.svg"}
                  width={100}
                  height={100}
                  alt="logo"
                  className="w-full h-full"
                />
              </Link>
            </div>
            <SearchBar />
            <div className="sm:pr-5 flex items-center justify-center space-x-5">
              <div className="relative cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-[#808C92] text-2xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
                </svg>
              </div>
              {user.name ? (
                <div className="relative cursor-pointer">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-[#808C92] text-2xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M23,20 L23,6 L12,15 L1,6 L1,20 L23,20 Z M12,12 L22,4 L2,4 L12,12 Z"
                    ></path>
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex items-center w-full sm:w-fit">
            <div className="hidden sm:flex sm:flex-row flex-col sm:pl-6 space-y-2 sm:space-y-0 mt-4 sm:mt-0 sm:space-x-5 w-full sm:w-fit">
              {user.name ? (
                <div
                  className="relative text-left cursor-pointer"
                  onMouseEnter={() => dispatch(showProfile())}
                  onMouseLeave={() => dispatch(hideProfile())}
                >
                  <Profile name={user.name} email={user.email} />
                  <div className="flex items-center justify-center space-x-3">
                    <div className="relative w-10 h-10">
                      <Image
                        src={"/avatar.svg"}
                        alt="profile"
                        fill
                        sizes="16"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="whitespace-nowrap text-sm font-normal text-primaryText">
                        {user.name}
                      </p>
                      <p className="text-[#8D8D97] text-xs">Buyer Retail</p>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link href={"/login"}>
                    <Button size="medium" className="sm:w-fit">
                      Masuk
                    </Button>
                  </Link>
                  <Link href={"/register-as"}>
                    <Button primary size="medium" className="sm:w-fit">
                      Daftar
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="relative items-center border-b bg-white sm:hidden my-2 mx-[22px]">
          <SearchBar layout="mobile" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
