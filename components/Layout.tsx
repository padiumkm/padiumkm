import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../lib/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const Navbar = dynamic(() => import("./Navbar/Navbar"));
  const Sidebar = dynamic(() => import("./Sidebar/Sidebar"));
  const Footer = dynamic(() => import("./Footer/Footer"));

  const modal = useSelector((state: RootState) => state.ModalReducer);

  const { route } = useRouter();
  const listNotShowNavbar = [
    "/login",
    "/register-as",
    "/register",
    "/forgot-password",
    "/activate-account/[id]",
  ];

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bersama PaDi UMKM, mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang lebih maju."
        />
      </Head>

      {modal.showAlert || modal.showCategory || modal.showProfile ? (
        <div className="fixed inset-0 bg-black h-full w-full z-20 opacity-60" />
      ) : null}

      <header className="sticky top-0 z-30 shadow-md">
        {listNotShowNavbar.includes(route) ? null : (
          <>
            <Navbar />
            <Sidebar />
          </>
        )}
      </header>

      <main>{children}</main>

      <footer className="bg-secondary text-primaryText flex flex-col items-center">
        {listNotShowNavbar.includes(route) ? null : <Footer />}
      </footer>
    </div>
  );
};

export default Layout;
