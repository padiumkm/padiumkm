import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/Layout/Main";

const ProductDetail: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  );
};

ProductDetail.getLayout = (page) => {
  return <MainLayout>{page}</MainLayout>;
};

export default ProductDetail;
