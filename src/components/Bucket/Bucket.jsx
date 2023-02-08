import { TiDeleteOutline } from "react-icons/ti";
import styles from "./Bucket.module.css";

const Bucket = (props) => {
  return (
    <div className={styles.buc}>
      <div>
        <div>
          <h2>Корзина:</h2>
          {props.isAuth ? (
            props.bucket.length > 0 ? (
              props.bucket.map((product) => {
                return (
                  <div className={styles.fullbk}>
                    <div className={styles.pr}>{product.model}---</div>
                    <button
                      onClick={() => props.removeFromBucketById(product.id)}
                    >
                      <TiDeleteOutline size={20} />
                    </button>
                  </div>
                );
              })
            ) : (
              <div>
                <h2>Тут пусто</h2>
              </div>
            )
          ) : (
            <div>
              <h1>Авторизуйтесь чтобы использовать корзину</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bucket;
