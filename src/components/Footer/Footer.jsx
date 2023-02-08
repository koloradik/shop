import { Link } from "wouter";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.con}>
      <h3>
        <Link href="/help">
          <span className={styles.th}>Техподдержка: </span>
        </Link>
        Если вас обманули, взломали, купили товар от вашего имени НЕ звоните на
        этот номер - 0983214578
      </h3>
    </div>
  );
};

export default Footer;
