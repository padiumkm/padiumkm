import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MainLayout from "../components/Layout/Main";
import SearchLayout from "../components/Layout/Search";
import Pagination from "../components/pagination/Pagination";
import { IProductCard } from "../components/productCard/IProductCard";
import ProductCard from "../components/productCard/ProductCard";
import { searchProductSuccess } from "../lib/slice/sliceSearch";
import { NextPageWithLayout } from "./_app";

const Search: NextPageWithLayout = () => {
  const history = useRouter();
  const dispatch = useDispatch();
  const [products, setProducts] = useState<IProductCard[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);

  const handlePageClick = ({ selected }: { selected: number }) => {
    fetch(`http://localhost:9002/api/v1/item/all/${selected+1}`).then((res) => {
      res.json().then((data) => {
        const products: IProductCard[] = data.data.data.map((item: any) => {
          return {
            name: item.name,
            price: item.price,
            image: item.image,
            location: item.location,
            review: 4,
            rating: 4,
            sold: 100,
          };
        });
        setProducts(products);
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
    });
    
    history.push(
      `${history.asPath.split("&page=")[0]}&page=${selected + 1}`
    );
  };

  useEffect(() => {
    fetch("http://localhost:9002/api/v1/item/all/1").then((res) => {
      res.json().then((data) => {
        const products: IProductCard[] = data.data.data.map((item: any) => {
          return {
            name: item.name,
            price: item.price,
            image: item.image,
            location: item.location,
            review: 4,
            rating: 4,
            sold: 100,
          };
        });
        setProducts(products);
        setPageCount(data.data.pagination.allPage);
        dispatch(searchProductSuccess({
          products: products,
          pagination: {
            page: data.data.pagination.page,
            total: data.data.pagination.allItems,
            limit: data.data.pagination.limit,
          }
        }))
      });
    });
  }, []);

  return (
    <div className="">
      <Head>
        <title>Pencarian | Padi UMKM</title>
      </Head>
      <div className="overflow-hidden">
        
        <div className="grid grid-cols-2 md:px-[10px] gap-y-4 gap-x-4 py-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
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
