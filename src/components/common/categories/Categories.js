import { allQueries } from "../../api-call/allQueries";
import { useState, useEffect } from "react";
import fetchData from "../../api-call/fetchData";
const Categories = () => {
  const [categories, updateCategories] = useState([]);

  useEffect(() => {
    fetchData(allQueries.categoryListQuery).then((result) => {
      if (!result) {
        return;
      }
      updateCategories([...result.data.categoryList[0].children]);
    });
  }, []);

  return (
    <ul>
      {categories.map(({ name, id }) => {
        return (
          <li key={id}>
            {/* <a href="#">{name}</a> */}
            {name}
          </li>
        );
      })}
    </ul>
  );
};

export default Categories;
