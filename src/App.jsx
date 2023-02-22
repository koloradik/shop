import { useEffect, useState } from "react";
import products from "./database/products.json";
import { Link, Route, Switch, useLocation } from "wouter";
import Footer from "./components/Footer/Footer";
import Help from "./pages/Help/Help";
import Home from "./pages/Home/Home";
import Auth from "./components/Auth/Auth";
import BucketButton from "./components/BucketButton/BucketButton";
import Bucket from "./components/Bucket/Bucket";
import styles from "./App.module.css";
import ProductPage from "./pages/Product/ProductPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Button, Input, Modal, Tooltip } from "react-daisyui";
import { FaUserAlt } from "react-icons/fa";
import users from "./database/users.json";

const App = () => {
  // bucket states
  const [surname, setSurname] = useState("")

  const [email, setEmail] = useState("")

  const [balans, setBalans] = useState(0);

  const [showOf, setShowOf] = useState(false)

  const toggleShowOf = () => {
    setShowOf((prev) => !prev);
  };

  const [bucket, setBucket] = useState([]);
  const [showBucket, setShowBucket] = useState(false);
  let totalAmount = 0

  for (let i = 0; i < bucket.length; i++) {
    totalAmount += bucket[i].price * bucket[i].amount
  }

  const changeAmount = (amount, product) => {
    const productInBucket = bucket.filter((el) => el.id === product.id).pop();

    if (productInBucket) {
      productInBucket.amount = amount;
      setBucket((prev) => [...prev]);
    }
    localStorage.setItem("bucket", JSON.stringify(bucket))
  }

  const onBuyButtonClick = (product) => {
    const productInBucket = bucket.filter((el) => el.id === product.id).pop();

    if (productInBucket) {
      productInBucket.amount += 1;
      setBucket((prev) => [...prev]);
    } else {
      setBucket((prev) => [...prev, { ...product, amount: 1 }]);
    }
    localStorage.setItem("bucket", JSON.stringify(bucket))
  };

  const removeFromBucketById = (productId) => {
    setBucket((prev) => {
      const newBucket = prev.filter((p) => p.id !== productId)
      localStorage.setItem("bucket", JSON.stringify(newBucket))
      return newBucket
    });
  };

  // auth states
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

  const [inputName, setInputName] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    const n = localStorage.getItem("name")
    const b = Number(localStorage.getItem("balans"))
    const s = localStorage.getItem("status")
    const c = JSON.parse(localStorage.getItem("bucket"))

    if (b) {
      setBalans(b)
    }

    if (n) {
      setName(n)
    }

    if (s) {
      setStatus(s)
    }

    if (c) {
      setBucket(c)
    }
  }, [])

  const auth = () => {

    const user = users.filter(u => {
      return u.name === inputName &&
        u.password === inputPassword
    }).pop()

    if (user) {
      setName(user.name)
      localStorage.setItem("name", user.name)
      setBalans(user.balans)
      localStorage.setItem("balans", user.balans)
      setStatus(user.status)
      localStorage.setItem("status", user.status)

      toggleShowAuth()
    }


  };

  const toggleShowAuth = () => {
    setShowAuth((prev) => !prev);
  };

  const toggleShowBucket = () => {
    setShowBucket((prev) => !prev);
  };

  // search states
  const [search, setSearch] = useState("");
  const [location, setLocation] = useLocation();

  return (
    <div>
      <div className="bg-red-600 flex flex-wrap justify-between p-5">
        <Link href="/">
          <h1 className="text-6xl font-semibold ml-2 text-black hover:cursor-pointer">GORA</h1>
        </Link>
        <Input
          className="bg-neutral-800 text-lg"
          type="text"
          placeholder="Введите ваш запрос"
          value={search}
          onChange={(event) => {
            setSearch(event.target.value);

            if (event.target.value === "") {
              setLocation(`/`);
            } else {
              setLocation(`/search/${event.target.value}`);
            }
          }}
        />

        {/* <Auth
          name={name}
          setName={setName}
          showAuth={showAuth}
          toggleShowAuth={toggleShowAuth}
        /> */}

        <Button onClick={toggleShowAuth}
          className="h-16 bg-neutral-800 hover:bg-neutral-800">
          <FaUserAlt size={40} />
        </Button>

        <Modal open={showAuth}>
          <Modal.Header className="font-bold">
            Авторизация
          </Modal.Header>

          <Modal.Body>
            <div className="flex flex-col space-y-4 items-center text-xl">
              <div>
                <div>Имя:</div>
                <Input className="focus:text-xl" placeholder="Введите ваше имя"
                  value={inputName} onChange={e => setInputName(e.target.value)} />
              </div>

              <div>
                <div>Пароль:</div>
                <Input type={"password"} className="focus:text-xl" placeholder="Введите ваш пароль"
                  value={inputPassword} onChange={e => setInputPassword(e.target.value)} />
              </div>
            </div>
          </Modal.Body>

          <Modal.Actions>
            <Button onClick={auth}>Войти</Button>
            <Button onClick={toggleShowAuth}>Закрыть</Button>
          </Modal.Actions>
        </Modal>

      </div>

      <div>
        {location !== "/profile" ? (
          <div className={styles.bap}>

            <Button className="ml-4 mt-4 bg-blue-700 hover:bg-blue-600">
              <Link href="/profile">
                Profile
              </Link>
            </Button>

            <div>
              <Link href="/profile">
                <div className="ml-4 mt-4 text-2xl mr-4">Баланс: {balans}₴</div>
              </Link>
              {location !== "/" ? null : (
                <div className="flex justify-center">
                  <BucketButton toggleShowBucket={toggleShowBucket} />
                </div>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <div className="min-h-screen">
        <Switch>
          <Route
            path="/"
            component={() => (
              <Home products={products} onBuyButtonClick={onBuyButtonClick} />
            )}
          />
          <Route path="/help" component={Help} />
          <Route path="/product/:id">
            {(params) => <ProductPage id={params.id} products={products} onBuyButtonClick={onBuyButtonClick} />}
          </Route>
          <Route path="/search/:query">
            {(params) => <SearchPage query={search} products={products} />}
          </Route>

          <Route
            path="/profile"
            component={() => (
              <ProfilePage balans={balans} setBalans={setBalans} name={name} status={status} />
            )}
          />
        </Switch>
      </div>

      <Footer />

      <Modal className="" open={showBucket} onClickBackdrop={toggleShowBucket}>
        <Modal.Header className="font-bold">Корзина:</Modal.Header>

        <Modal.Body>
          <Bucket
            bucket={bucket}
            isAuth={Boolean(name)}
            removeFromBucketById={removeFromBucketById}
            changeAmount={changeAmount}
          />
        </Modal.Body>
        <Modal.Actions className="flex justify-between items-center">
          <div>{bucket.length > 0 ?
            <p className="text-xl">
              Итого: {totalAmount}₴
            </p> : null}</div>

          <div className="space-x-2">
            <Button disabled={balans < totalAmount || totalAmount === 0}
              onClick={() => {
                toggleShowBucket()
                toggleShowOf()
              }}>
              Оформить заказ
            </Button>
            <Button onClick={toggleShowBucket}>Закрыть</Button>
          </div>
        </Modal.Actions>
      </Modal>

      {/* <Modal
        className="w-11/12 max-w-5xl bg-white text-black"
        open={showOf}
        onClickBackdrop={toggleShowOf}>

        <Modal.Header className="font-bold flex justify-between items-center text-2xl">
          <div>Оформление вашего заказа:</div>
          <Button onClick={toggleShowOf} className="w-12 bg-black">X</Button>
        </Modal.Header>
        <Modal.Body>
          <div className="text-xl">
            Контрактная информация:
            <div>Имя: <Input value={name} className="bg-neutral-300" /></div>
            <div>Фамилия: <Input

              placeholder="Oбязательно*"
              className="bg-neutral-300"
              onChange={e => setSurname(e.target.value)} /></div>
          </div>
          <div><Tooltip message="Чтобы прислать вам чек">Email</Tooltip>:
            <Input
            type={email}
              placeholder="Oбязательно*"
              className="bg-neutral-300"
              onChange={e => setEmail(e.target.value)} /></div>
        </Modal.Body>
        <Modal.Actions>

        </Modal.Actions>
      </Modal> */}
    </div>
  );
};

export default App;
