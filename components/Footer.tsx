import Image from "next/image";
import Link from "next/link";
import { footerList, paymentMethod, socialMedia } from "../data/footer";

const Footer = () => {
  return (
    <>
      <div className="w-full text-center space-y-5 xl:flex xl:text-left xl:space-y-0 py-14 px-5 xl:px-32">
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 text-center md:text-left xl:pr-[100px]">
          {footerList.map((item, index) => (
            <div
              className={`w-full xl:w-fit flex flex-col space-y-5 text-center xl:text-left ${
                index > 0 && "xl:ml-[100px]"
              }`}
              key={index}
            >
              <h3 className="text-xl font-bold text-primaryText">
                {item.title}
              </h3>
              <ul className="text-[#808C92] space-y-3 whitespace-nowrap text-sm">
                {item.list.map((list, index) => (
                  <li
                    className="cursor-pointer hover:text-opacity-70"
                    key={index}
                  >
                    <Link href={list.link}>{list.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col space-y-5 overflow-hidden">
          <h3 className="text-xl font-bold text-primaryText">Butuh Bantuan?</h3>
          <div className="text-[#808C92] space-y-2 text-sm">
            <p>Telkom Landmark Tower</p>
            <p>
              Jl. Jendral Gatot Subroto Kav. 52 RT.06/RW.01, Kuningan Barat,
              Mampang Prapatan, Jakarta Selatan, DKI Jakarta, 12710 Indonesia
            </p>
            <div className="flex divide-x-[1px] divide-[#808C92] justify-center xl:justify-start">
              <p className="pr-4">Senin - Jumat</p>
              <div className="flex items-center pl-4 space-x-4">
                <p>08:00 - 17:00</p>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  className="text-lg"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"></path>
                </svg>
                <p>cs@padiumkm.id</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 justify-center xl:justify-start">
              {socialMedia.map((item, index) => (
                <div className="cursor-pointer" key={index}>
                  <Link href={item.link} target="_blank" rel="noreferrer">
                    <Image
                      src={item.icon}
                      width={24}
                      height={24}
                      alt={item.name}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-5">
        <div className="border-2 py-12 px-3 md:pl-20">
          <h3 className="text-xl font-bold mb-6 text-center lg:text-start">
            Metode Pembayaran
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-7 md:justify-start">
            {paymentMethod.map((item, index) => (
              <Image
                src={item.icon}
                alt={item.name}
                key={index}
                width={24}
                height={24}
                className="w-fit"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="py-6 w-full text-center">
        <p className="text-[#808C92] text-base">
          ©2022-2025 Pasar Digital UMKM Indonesia
        </p>
      </div>
    </>
  );
};

export default Footer;
