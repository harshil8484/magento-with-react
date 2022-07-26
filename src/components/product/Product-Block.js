import AddToCart from "./AddToCart";

const Products = ({ productsData }) => {
  return (
    <>
      {productsData.map(function ({ id, name, image, price_range, sku }) {
        return (
          <div className="product" key={id}>
            <img src={image.url} alt="name"></img>
            <div className="product-content-details">
              <div>
                {name} <br></br>
                {price_range.maximum_price.regular_price.currency === "USD"
                  ? "$"
                  : price_range.maximum_price.regular_price.currency}
                {price_range.maximum_price.regular_price.value}
              </div>
              <div>
                <AddToCart product_sku={sku} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Products;
