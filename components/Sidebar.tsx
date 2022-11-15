import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { navigations } from "../data/navigation";
import { RootState } from "../lib/store";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.SidebarReducer.isOpen);
  return (
    <div
      className={`absolute flex flex-col sm:hidden justify-between min-h-screen w-full bg-white py-4 px-[22px] top-[120px] transition-all duration-500 ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <Link href={"/login"}>
            <button className="h-10 px-16 border border-primaryBlue rounded-lg text-primary font-medium hover:bg-primaryBlue hover:text-white">
              Masuk
            </button>
          </Link>
          <Link href={"/register-as"}>
            <button className="h-10 px-16 bg-primaryBlue rounded-lg text-white font-medium hover:bg-opacity-70">
              Daftar
            </button>
          </Link>
        </div>
        <ul className="mt-4 space-y-2">
          {navigations.map((navigation, index) => (
            <li className="hover:text-primaryBlue" key={index}>
              <Link href={navigation.link}>
                <span className="font-semibold">{navigation.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative flex items-center justify-end space-x-4 bottom-36">
        <div className="flex items-center relative">
          <Image
            src={"/logo-bbi.svg"}
            width={100}
            height={100}
            alt={"logo bbi"}
            className="w-14"
          />
        </div>
        <div className="flex items-center relative">
          <Image
            src={"/logo-bumn.svg"}
            width={100}
            height={100}
            alt={"logo bumn"}
            className="w-40 h-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
