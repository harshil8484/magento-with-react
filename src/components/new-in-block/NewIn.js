import { useEffect, useState } from "react";
import fetchData from "../api-call/fetchData";
import { allQueries } from "../api-call/allQueries";
import ProductBlock from "../product/Product-Block";

const Newin = () => {
  const [newInProduct, setNewInProduct] = useState([]);
  useEffect(() => {
    fetchData(allQueries.newInProduct).then((result) => {
      if (!result) {
        return;
      }
      setNewInProduct([...result.data.categoryList[0].products.items]);
    });
  }, []);

  return (
    <div className="new-in-block">
      <h1>NewIn</h1>
      <div className="new-inproduct-container">
        <ProductBlock productsData={newInProduct} />
      </div>
    </div>
  );
};
export default Newin;
