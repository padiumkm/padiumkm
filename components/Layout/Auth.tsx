import Head from "next/head";
import { useSelector } from "react-redux";
import { RootState } from "../../lib/store";

const AuthLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
      {modal.showAlert || modal.showCategory || modal.showProfile ? (
        <div className="fixed inset-0 bg-black h-full w-full z-20 opacity-60" />
      ) : null}
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
