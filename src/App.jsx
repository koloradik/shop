import { useState } from "react";
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
import { Button, Input, Modal, Table } from "react-daisyui";

const App = () => {
  // bucket states
  const [balans, setBalans] = useState(0);
  const [bucket, setBucket] = useState([]);
  const [showBucket, setShowBucket] = useState(false);

  const onBuyButtonClick = (product) => {
    const productInBucket = bucket.filter((el) => el.id === product.id).pop();

    if (productInBucket) {
      productInBucket.amount += 1;
      setBucket((prev) => [...prev]);
    } else {
      setBucket((prev) => [...prev, { ...product, amount: 1 }]);
    }
  };

  const removeFromBucketById = (productId) => {
    setBucket((prev) => prev.filter((p) => p.id !== productId));
  };

  // auth states
  const [name, setName] = useState("");
  const [showAuth, setShowAuth] = useState(false);

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
          <h1 className="text-6xl font-semibold ml-2 text-black">GORA</h1>
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

        <Auth
          name={name}
          setName={setName}
          showAuth={showAuth}
          toggleShowAuth={toggleShowAuth}
        />
      </div>

      <div>
        {location !== "/profile" ? (
          <div className={styles.bap}>
            <Link href="/profile">
              <Button className="ml-4 mt-4 bg-blue-700 hover:bg-blue-600">
                Profile
              </Button>
            </Link>
            <div>
              <Link href="/profile">
                <div className="ml-4 mt-4 text-2xl mr-4">Баланс: {balans}</div>
              </Link>
              {location !== "/" ? null : (
                <BucketButton toggleShowBucket={toggleShowBucket} />
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
            {(params) => <ProductPage id={params.id} products={products} />}
          </Route>
          <Route path="/search/:query">
            {(params) => <SearchPage query={search} products={products} />}
          </Route>

          <Route
            path="/profile"
            component={() => (
              <ProfilePage balans={balans} setBalans={setBalans} name={name} />
            )}
          />
        </Switch>
      </div>

      <Footer />

      <Modal open={showBucket} onClickBackdrop={toggleShowBucket}>
        <Modal.Header className="font-bold">Корзина:</Modal.Header>

        <Modal.Body>
          <Bucket
            bucket={bucket}
            isAuth={Boolean(name)}
            removeFromBucketById={removeFromBucketById}
          />
        </Modal.Body>
        <Modal.Actions>
          <Button onClick={toggleShowBucket}>Закрыть</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default App;
