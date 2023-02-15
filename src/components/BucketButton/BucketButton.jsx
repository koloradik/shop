import { Button } from "react-daisyui";
import { BsFillBucketFill } from "react-icons/bs";

const BucketButton = (props) => {
  return (
    <Button className="bg-neutral-800 h-1 hover:bg-neutral-800" onClick={props.toggleShowBucket}>
      <BsFillBucketFill size={36} />
    </Button>
  );
};

export default BucketButton;
