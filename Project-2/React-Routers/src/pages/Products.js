import { Link } from "react-router-dom";
import productData from "../data";
const Products = () => {
  return (
    <section className="section">
      <h2>All Inventory Products</h2>
      <div className="products">
        {productData.map((product) => {
          return (
            <article key={product.id}>
              <h4>{product.name}</h4>
              <Link to={`/products/${product.id}`}>More Info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Products;
