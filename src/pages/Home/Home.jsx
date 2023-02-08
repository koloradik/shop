import Product from "../../components/Product/Product";
import styles from "./Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.wrapper}>
      {props.products.map((product) => {
        return (
          <Product
            key={product.id}
            product={product}
            onBuyButtonClick={props.onBuyButtonClick}
          />
        );
      })}
    </div>
  );
};

export default Home;
