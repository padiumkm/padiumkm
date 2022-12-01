import dynamic from "next/dynamic";
import Head from "next/head";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const Navbar = dynamic(() => import("../Navbar/Navbar"));
  const Sidebar = dynamic(() => import("../Sidebar/Sidebar"));
  const Footer = dynamic(() => import("../Footer/Footer"));

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

      <main>{children}</main>

      <footer className="bg-secondary text-primaryText flex flex-col items-center">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
