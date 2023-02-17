import { Button, Input } from "react-daisyui";
import { FaUserAlt } from "react-icons/fa";

const Auth = (props) => {

  const changeAuth = (e) => {
    props.setName(e.target.value)

    localStorage.setItem("name", e.target.value)
  }

  return (
    <Button className="bg-neutral-800 h-16 hover:bg-neutral-800">
      {props.showAuth ? (
        <Input className="bg-neutral-600 text-lg mr-3"
          value={props.name}
          onChange={(e) => changeAuth(e)}
        />
      ) : null}

      <FaUserAlt size={40} onClick={props.toggleShowAuth} />
    </Button>
  );
};

export default Auth;
