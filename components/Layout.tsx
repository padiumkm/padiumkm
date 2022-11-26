import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { getCookie, hasCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { saveProfile } from "../lib/slice/sliceProfile";

interface Token {
  username: string;
  name: string;
  sub: string;
  iat: string;
  exp: string;
  iss: string;
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const Navbar = dynamic(() => import("./Navbar/Navbar"));
  const Sidebar = dynamic(() => import("./Sidebar/Sidebar"));
  const Footer = dynamic(() => import("./Footer/Footer"));

  const { route } = useRouter();
  const dispatch = useDispatch();
  const listNotShowNavbar = [
    "/login",
    "/register-as",
    "/register",
    "/forgot-password",
    "/activate-account/[id]",
  ];

  useEffect(() => {
    if (hasCookie("token")) {
      const token = getCookie("token")?.toString() || "";
      const decoded = jwt_decode<Token>(token);
      dispatch(saveProfile({ name: decoded.name, email: decoded.username }));
    }
  }, []);

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
