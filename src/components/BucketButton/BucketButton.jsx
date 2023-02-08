import { BsFillBucketFill } from "react-icons/bs";
import styles from "./BucketButton.module.css";

const BucketButton = (props) => {
  return (
    <button className={styles.buk} onClick={props.toggleShowBucket}>
      <div>
        <BsFillBucketFill size={40} />
      </div>
    </button>
  );
};

export default BucketButton;
