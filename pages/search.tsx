import Head from "next/head";
import { ReactElement } from "react";
import MainLayout from "../components/Layout/Main";
import SearchLayout from "../components/Layout/Search";
import { NextPageWithLayout } from "./_app";

const Search: NextPageWithLayout = () => {
  return (
    <div className="">
      <Head>
        <title>Pencarian | Padi UMKM</title>
      </Head>
      <div>Ini konten Search</div>
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
