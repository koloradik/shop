import { Link } from "wouter";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <h3 className="bg-red-600 font-semibold p-4 text-2xl">
        <Link href="/help">
          <span className=" text-blue-800" >Техподдержка: </span>
        </Link>
        <span className="text-black">Если вас обманули, взломали, купили товар от вашего имени НЕ звоните на
        этот номер - 0983214578</span>
      </h3>
    </div>
  );
};

export default Footer;
