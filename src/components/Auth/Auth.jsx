import { Button, Input } from "react-daisyui";
import { FaUserAlt } from "react-icons/fa";

const Auth = (props) => {
  return (
    <Button className="bg-neutral-800 h-16 hover:bg-neutral-800">
        {props.showAuth ? (
          <Input className="bg-neutral-600 text-lg mr-3"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
          />
        ) : null}
        
        <FaUserAlt size={40} onClick={props.toggleShowAuth} />
    </Button>
  );
};

export default Auth;
