import dynamic from "next/dynamic";
import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const Navbar = dynamic(() => import("../Navbar/Navbar"));
  const Sidebar = dynamic(() => import("../Sidebar/Sidebar"));
  const Footer = dynamic(() => import("../Footer/Footer"));

  const modal = useSelector((state: RootState) => state.ModalReducer);

  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bersama PaDi UMKM, mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang lebih maju."
        />
      </Head>

      <header className="sticky top-0 z-30 shadow-md">
        <Navbar />
        <Sidebar />
      </header>

      {modal.showCategory || modal.showProfile ? (
        <div className="fixed inset-0 bg-black h-full w-full z-20 opacity-60" />
      ) : null}
      <main>{children}</main>

      <footer className="bg-secondary text-primaryText flex flex-col items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
