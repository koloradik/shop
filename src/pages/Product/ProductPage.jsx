import { Button } from "react-daisyui";
import styles from "./ProductPage.module.css";

const ProductPage = (props) => {
  const product = props.products
    .filter((prod) => prod.id === Number(props.id))
    .pop();

  return (
    <div>
      <div className={styles.prodid}>
        <div>ID этого товара: {product.id}</div>
      </div>

      <div className={styles.tow}>
        <div className={styles.nem}> {product.model} </div>
        <Button className="bg-green-700 w-24 h-14 hover:bg-green-400">Buy</Button>
      </div>

      <div>
        <img src="" alt="" />
      </div>

      <hr className={styles.hr} />

      <div className={styles.op}>
        <h2>Описание:</h2>
      </div>

      <div className={styles.t}>
        <div className={styles.mo}>Жанр Игры:</div> {product.type}
      </div>

      <div className={styles.o}>
        <div className={styles.no}>Год выпуска:</div> {product.old}
      </div>
    </div>
  );
};

export default ProductPage;
