import Image from "next/image";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const navigations = [
    "Mitra PaDi UMKM",
    "Menjadi Penjual",
    "Info",
    "Pusat Bantuan",
  ];

  return (
    <>
      <nav className="hidden md:flex justify-between h-9 bg-tertiery">
        <div className="flex px-[22px] w-full">
          {navigations.map((navigation, index) => (
            <div className="flex items-center text-xs font-normal text-[#8D8D97] pr-8 cursor-pointer" key={index}>
              {navigation}
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
        <div className="flex flex-col sm:flex-row items-center justify-around bg-white py-2 px-[22px] w-full h-full divide-x-0 sm:divide-x divide-[#9FA7BC]">
          <div className="flex items-center justify-between w-full space-x-4">
            <div className="relative block md:hidden">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                color="#444B55"
                className="cursor-pointer"
                height="28"
                width="28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
              </svg>
            </div>
            <div className="relative cursor-pointer md:-left-3 w-16 h-8 min-w-max md:w-20 md:h-10">
              <Image
                src={"/logo.svg"}
                width={100}
                height={100}
                alt="logo"
                className="w-full h-full"
              />
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
            </div>
          </div>
          <div className="flex items-center w-full sm:w-fit">
            <div className="hidden sm:flex sm:flex-row flex-col sm:pl-6 space-y-2 sm:space-y-0 mt-4 sm:mt-0 sm:space-x-5 w-full sm:w-fit">
              <button className="w-full sm:w-fit h-10 px-6 border border-primary rounded-lg text-primary font-medium hover:bg-primary hover:text-white">
                Masuk
              </button>
              <button className="w-full sm:w-fit h-10 px-6 bg-primary rounded-lg text-white font-medium hover:bg-opacity-70">
                Daftar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
