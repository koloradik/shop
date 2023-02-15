import { Button, Card } from "react-daisyui";
import { Link } from "wouter";
import styles from "./Product.module.css";

const Product = (props) => {
  return (
    <Card className="bg-white m-8 w-96 ">
      <Card.Image src={props.product.src} />

      <Card.Body>
        <Card.Title>
          <Link href={`/product/${props.product.id}`}>
            <span className="text-black">{props.product.model}</span>
          </Link>
        </Card.Title>

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

        <Card.Actions>
          <Button
            className="w-36"
            onClick={() => props.onBuyButtonClick(props.product)}
          >
            Buy
          </Button>
        </Card.Actions>
      </Card.Body>
    </Card>
  );
};

export default Product;
