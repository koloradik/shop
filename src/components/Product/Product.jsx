import { Link } from "wouter";
import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={styles.prod}>
      <div className={styles.img}></div>
      <div>
        <Link href={`/product/${props.product.id}`}>
          <div className={styles.mod}>{props.product.model}</div>
        </Link>

        <div className={styles.pris}>
          {props.product.discount > 0 ? (
            <div className={styles.full}>
              <div className={styles.skidka}>{props.product.price}₴</div>
              <div className={styles.star}>
                {props.product.price -
                  props.product.price * props.product.discount}
                ₴
              </div>
            </div>
          ) : (
            <div>{props.product.price}₴</div>
          )}
        </div>
        <button
          className={styles.btn}
          onClick={() => props.onBuyButtonClick(props.product)}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

export default Product;
