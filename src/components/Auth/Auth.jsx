import { GrUserManager } from "react-icons/gr";
import styles from "./Auth.module.css";

const Auth = (props) => {
  return (
    <button className={styles.avt}>
      {props.name}
      <div>
        {props.showAuth ? (
          <input
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          ></input>
        ) : null}
        <GrUserManager size={40} onClick={props.toggleShowAuth} />
      </div>
    </button>
  );
};

export default Auth;
