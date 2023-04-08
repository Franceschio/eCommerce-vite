import { useState } from "react";
import "./index.css";

const Navbar = ({ setSearchedCategory, setCartActive, cartList }) => {
  const [inputValue, setInputValue] = useState("");

  const onInput = (e) => setInputValue(() => e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setSearchedCategory(inputValue);
  };

  const setCart = () => {
    setCartActive((prev) => !prev);
  };

  return (
    <div className="Navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact us</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <form onSubmit={onSubmit}>
        <input
          className="searcher"
          value={inputValue}
          onChange={onInput}
          type="text"
          placeholder="Cerca categoria..."
          required
        />
        <input type="submit" value="Search" className="searchBtn" />
      </form>
      <div className="cartBtn" onClick={setCart}>
        <span>{cartList.length}</span>
        <img
          src="https://img.icons8.com/dotty/512/shopping-cart.png"
          alt="Cart"
        />
      </div>
    </div>
  );
};

export default Navbar;
