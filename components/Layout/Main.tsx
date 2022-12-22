import { getCookie, hasCookie } from "cookies-next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCart } from "../../lib/slice/sliceCart";
import { saveProfile } from "../../lib/slice/sliceProfile";
import { RootState } from "../../lib/store";
import jwt_decode from "jwt-decode";
import { IProductCard } from "../productCard/IProductCard";

interface Token {
  username: string;
  name: string;
  sub: string;
  iat: string;
  exp: string;
  iss: string;
}

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const Navbar = dynamic(() => import("../Navbar/Navbar"));
  const Sidebar = dynamic(() => import("../Sidebar/Sidebar"));
  const Footer = dynamic(() => import("../Footer/Footer"));

  const modal = useSelector((state: RootState) => state.ModalReducer);
  const dispatch = useDispatch();

  const fetchCart = (token: string) => {
    fetch("http://localhost:9003/api/v1/cart/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          data.data.map((item: any) => {
            fetch(`http://localhost:9002/api/v1/item/${item.itemId}`).then(
              (res) => {
                res.json().then((data) => {
                  dispatch(
                    saveCart({
                      id: item.id,
                      product: {
                        item: {
                          id: data.data[0].id,
                          name: data.data[0].name,
                          price: data.data[0].price,
                          image: [
                            data.data[0].image,
                            "https://picsum.photos/200",
                          ],
                          rating: 4,
                          sold: data.data[0].sold,
                          avail: data.data[0].available_stock,
                          location: data.data[0].location,
                          review: 10,
                        },
                        quantity: item.quantity,
                        notes: item.notes,
                      },
                    })
                  );
                });
              }
            );
          });
        });
      }
    });
  };

  useEffect(() => {
    if (hasCookie("token")) {
      const token = getCookie("token")?.toString() || "";
      const decoded = jwt_decode<Token>(token);
      dispatch(saveProfile({ name: decoded.name, email: decoded.username }));

      fetchCart(token);
    }
  }, []);

  return (
    <div className="relative">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Bersama PaDi UMKM, mari tingkatkan pertumbuhan ekonomi UMKM untuk Indonesia yang lebih maju."
        />
      </Head>

      {modal.showAlert && (
        <div className="fixed inset-0 bg-black h-full w-full z-40 opacity-60" />
      )}

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
