import { Button, Carousel } from "react-daisyui";
import styles from "./ProductPage.module.css";

const ProductPage = (props) => {
  const product = props.products
    .filter((prod) => prod.id === Number(props.id))
    .pop();

  return (
    <div>
      <div>
        <div>ID этого товара: {product.id}</div>
      </div>

<div>
          <Carousel className="rounded-box">
            <Carousel.Item
              src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
            />
            <Carousel.Item
              src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            />
            <Carousel.Item
              src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            />
            <Carousel.Item
              src=""
            />
          </Carousel>
        </div>

      <div className={styles.tow}>
        <div className={styles.nem}> {product.model} </div>
        <Button className="bg-green-700 w-24 h-14 hover:bg-green-400">Buy</Button>
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
