import { useParams } from "react-router-dom";
import productData from "../data";

const SingleProduct = () => {
  const { id } = useParams();

  const productFetch = productData.find((product) => product.id === id);
  const { image, name } = productFetch;

  return (
    <section className="section product">
      <img src="{image}" alt={name} />
      <h5>{name}</h5>
    </section>
  );
};

export default SingleProduct;
