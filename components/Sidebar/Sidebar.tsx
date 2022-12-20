import { deleteCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { navigations } from "../../data/navigation";
import { toggleSidebar } from "../../lib/slice/sliceSidebar";
import { deleteProfile } from "../../lib/slice/sliceProfile";
import { RootState } from "../../lib/store";
import Button from "../button/Button";

const Sidebar = () => {
  const isOpen = useSelector((state: RootState) => state.SidebarReducer.isOpen);
  const user = useSelector((state: RootState) => state.ProfileReducer.user);
  const router = useRouter();
  const dispatch = useDispatch();

  const list = [
    {
      name: "Pembayaran",
      link: "/transaction/payment",
      icon: "/credit-card.svg",
    },
    {
      name: "Daftar Transaksi",
      link: "/transaction",
      icon: "/transaction.svg",
    },
    {
      name: "Alamat Pengiriman",
      link: "/dashboard/address",
      icon: "/map.svg",
    },
  ];

  const handleLogout = () => {
    deleteCookie("token");
    dispatch(deleteProfile());
    dispatch(toggleSidebar());
    router.replace("/login");
  };

  return (
    <div
      className={`absolute flex flex-col sm:hidden justify-between min-h-screen w-full bg-white py-4 px-[22px] top-[120px] transition-all duration-500 ${
        isOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex flex-col">
        {user.name ? (
          <div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <Image src={"/avatar.svg"} alt="profile" fill sizes="16" />
                </div>
                <div className="flex flex-col">
                  <p className="whitespace-nowrap font-semibold text-primaryText">
                    {user.name}
                  </p>
                  <p className="text-[#8D8D97] text-sm">Buyer Retail</p>
                </div>
              </div>
              <Button
                primary
                size="small"
                className="text-sm whitespace-nowrap font-semibold"
                onClick={() => router.push("/dashboard/profile")}
              >
                Lihat Profile
              </Button>
            </div>
            {list.map((item, index) => (
              <div key={index}>
                <div className="border-t-2 w-full my-4" />
                <Link href={item.link}>
                  <div className="flex items-center space-x-4 py-2 cursor-pointer hover:bg-tertiery">
                    <div className="relative w-6 h-6">
                      <Image src={item.icon} alt={item.name} fill />
                    </div>
                    <p className="font-semibold">{item.name}</p>
                  </div>
                </Link>
              </div>
            ))}
            <div className="border-t-2 w-full mt-4" />
          </div>
        ) : (
          <div className="flex flex-row justify-between items-center">
            <Link href={"/login"}>
              <Button className="px-10 xs:px-12" size="large">
                Masuk
              </Button>
            </Link>
            <Link href={"/register-as"}>
              <Button className="px-10 xs:px-12" size="large" primary>
                Daftar
              </Button>
            </Link>
          </div>
        )}
        <ul className="my-4 space-y-2">
          {navigations.map((navigation, index) => (
            <li className="hover:text-primaryBlue" key={index}>
              <Link href={navigation.link}>
                <span className="font-semibold">{navigation.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        {user.name ? (
          <>
            <div className="border-t-2 w-full mb-4" />
            <div
              className="flex items-center space-x-4  cursor-pointer hover:bg-tertiery"
              onClick={handleLogout}
            >
              <div className="relative w-6 h-6">
                <Image src={"/logout.svg"} alt="logout" fill />
              </div>
              <p className="font-semibold">Keluar</p>
            </div>
          </>
        ) : null}
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
