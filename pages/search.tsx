import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainLayout from "../components/Layout/Main";
import SearchLayout from "../components/Layout/Search";
import Pagination from "../components/pagination/Pagination";
import { IProductCard } from "../components/productCard/IProductCard";
import ProductCard from "../components/productCard/ProductCard";
import { searchProductSuccess } from "../lib/slice/sliceSearch";
import { RootState } from "../lib/store";
import { NextPageWithLayout } from "./_app";

const Search: NextPageWithLayout = () => {
  const history = useRouter();
  const dispatch = useDispatch();
  const sorting = useSelector((state: RootState) => state.SortingReducer.sort);

  const [initialProducts, setInitialProducts] = useState<IProductCard[]>([]);
  const [products, setProducts] = useState<IProductCard[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [url, setUrl] = useState<string>("");

  const translateBreadCrumb = (label: string) => {
    const temp = label.replaceAll("-", " ").replaceAll("and", "&");
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  };

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
    history.replace(
      `${history.asPath.split("?page=")[0]}?page=${selected + 1}`
    );
  };

  useEffect(() => {
    const path = history.asPath.split("?");

    const category =
      path.length > 1 ? path[1].split("&page=")[0].split("=") : [];

    const URI = `http://localhost:9002/api/v1/item/${
      category.includes("category") ? "category" : "all"
    }${
      category.includes("category")
        ? `/${translateBreadCrumb(category[category.length - 1])}`
        : ""
    }`;

    setUrl(URI);

    fetch(`${URI}/${page}`).then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          const products: IProductCard[] = data.data.data.map((item: any) => {
            return {
              id: item.id,
              name: item.name,
              price: item.price,
              image: [item.image],
              location: item.location,
              review: 4,
              rating: 4,
              sold: 100,
            };
          });

          setProducts(products);
          setInitialProducts(products);
          setPageCount(data.data.pagination.allPage);
          dispatch(
            searchProductSuccess({
              products: products,
              pagination: {
                page: data.data.pagination.page,
                total: data.data.pagination.allItems,
                limit: data.data.pagination.limit,
              },
            })
          );
        });
      }
    });

    return () => {
      setPage(1);
    };
  }, [history.asPath.split("&page=")[0]]);

  useEffect(() => {
    if (sorting === "Harga Tertinggi") {
      setProducts([...initialProducts].sort((a, b) => b.price - a.price));
    } else if (sorting === "Harga Terendah") {
      setProducts([...initialProducts].sort((a, b) => a.price - b.price));
    } else if (sorting === "Ulasan") {
      setProducts([...initialProducts].sort((a, b) => b.rating - a.rating));
    } else if (sorting === "") {
      setProducts(initialProducts);
    }
  }, [sorting]);

  return (
    <div className="">
      <Head>
        <title>Pencarian | Padi UMKM</title>
      </Head>
      <div className="overflow-hidden">
        <div className="grid grid-cols-2 md:px-[10px] gap-y-4 gap-x-4 py-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, index) => (
            <Link href={`/product/${product.id}`} key={index}>
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-10">
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </div>
    </div>
  );
};

Search.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <SearchLayout>{page}</SearchLayout>
    </MainLayout>
  );
};

export default Search;
