import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { route } = useRouter();
  const listNotShowNavbar = [
    "/login",
    "/register-as",
    "/register",
    "/forgot-password",
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

      <header className="sticky top-0 z-10 shadow-md">
        {listNotShowNavbar.includes(route) ? null : <Navbar />}
      </header>

      <main>{children}</main>

      <footer className="bg-secondary text-primaryText flex flex-col items-center">
        {listNotShowNavbar.includes(route) ? null : <Footer />}
      </footer>
    </div>
  );
};

export default Layout;
