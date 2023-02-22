import { Button, Input } from "react-daisyui";

const Bucket = (props) => {
  return (
    <div className="m-2">
      <div>
        <div className="space-y-2">
          {props.isAuth ? (
            props.bucket.length > 0 ? (
              props.bucket.map((product) => {
                return (
                  <>
                  
                    <div key={product.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="text-2xl">{product.model}</div>

                        {/* <div>{product.amount}</div> */}
                        <Input className="w-20 ml-6"
                          type="number"
                          min={1}
                          max={20}
                          value={product.amount}
                          onChange={(e) => {
                            const amount = Number(e.target.value)
                            if (amount === 0) { props.removeFromBucketById(product.id) }

                            props.changeAmount(amount, product)
                          }} />
                      </div>


                      <Button
                        size="xs"
                        onClick={() => props.removeFromBucketById(product.id)}
                      >
                        X
                      </Button>
                    </div>
              
                  </>
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
