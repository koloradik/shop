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
        <button className={styles.bb}>Buy</button>
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
