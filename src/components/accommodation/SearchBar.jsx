import { PRODUCTS_API } from "../../constants/productsApi";
import { useState } from "react";

const SearchBar = () => {
  const [searchName, setSearchName] = useState();

  searchName.onkeyup = (event) => {
    const productsToRender = [];
    let newProducts = undefined;
    let searchValue = event.target.value;
    if (isNaN(searchValue)) {
      searchValue = event.target.value.toLowerCase();
      newProducts = { PRODUCTS_API }.filter((product) =>
        product.name.toLowerCase().includes(searchValue)
      );
    } else {
      searchValue = parseInt(searchValue);
      newProducts = { PRODUCTS_API }.filter(
        (product) => product.price <= searchValue
      );
    }
    productsToRender.push(...newProducts)(
      productsToRender.length ? productsToRender : { PRODUCTS_API }
    );
    console.log("SEARCHING:", searchName);
  };

  return (
    <>
      <input
        type="text"
        placeholder=" Search Product.."
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
