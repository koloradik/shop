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

const App = () => {
  // bucket states
  const [bucket, setBucket] = useState([]);
  const [showBucket, setShowBucket] = useState(false);

  const onBuyButtonClick = (product) => {
    setBucket((prev) => [...prev, { ...product }]);
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
      <div className={styles.header}>
        <Link href="/"><h1 className={styles.magazname}>GORA</h1></Link>
        <input
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

        <BucketButton toggleShowBucket={toggleShowBucket} />
      </div>

      {showBucket ? (
        <Bucket
          bucket={bucket}
          isAuth={Boolean(name)}
          removeFromBucketById={removeFromBucketById}
        />
      ) : null}
      {location !== "/profile" ?
        <Link href="/profile" >
          <button className={styles.profilebutton}>Profile</button>
        </Link> : null}


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
        <Route path="/profile" component={() => <ProfilePage name={name}/>} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
