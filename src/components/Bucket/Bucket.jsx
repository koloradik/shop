import { Button } from "react-daisyui";

const Bucket = (props) => {
  return (
    <div className="m-2">
      <div>
        <div>
          {props.isAuth ? (
            props.bucket.length > 0 ? (
              props.bucket.map((product) => {
                return (
                  <div className="flex justify-between">
                    <div className="flex">
                      <div className="text-2xl">{product.model}</div>

                      <div>{product.amount}</div>
                    </div>
                    <div className="items-center flex">
                      <Button
                        size="xs"
                        onClick={() => props.removeFromBucketById(product.id)}
                      >
                        X
                      </Button>
                    </div>
                  </div>
                );
              })
            ) : (
              <h2 className="">Тут пусто</h2>
            )
          ) : (
            <h1 className="text-xl">
              Авторизуйтесь чтобы использовать корзину
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bucket;
