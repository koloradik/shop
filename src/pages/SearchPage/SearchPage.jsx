import Product from "../../components/Product/Product";

const SearchPage = (props) => {
  const results = props.products.filter(
    (prod) => prod.model.toLowerCase() === props.query.toLowerCase()
  );

  return (
    <div>
      {results.map((prod) => {
        return <Product product={prod} />;
      })}
    </div>
  );
};

export default SearchPage;
