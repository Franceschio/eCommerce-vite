import { useState, useEffect } from "react";
import CardsList from "./components/cardsList";
import Navbar from "./components/navbar";
import CartModal from "./components/cartModal/CartModal";
import MiniCardList from "./components/MiniCardList/MiniCardList";
import CardDetails from "./components/cardDetailsModal/CardDetailsModal";
import Footer from "./components/footer/Footer";
import { GET } from "./utils/http";
import "./App.css";

function App() {
  const [miniCards, setMiniCards] = useState([]);

  const [searchedCategory, setSearchedCategory] = useState(null);

  const [cardDetails, setCardDetails] = useState(null);

  const [isCartActive, setCartActive] = useState(false);

  const [cartList, setCartList] = useState(
    JSON.parse(localStorage.getItem("cartList")) || []
  );

  useEffect(() => {
    searchedCategory
      ? GET(`/products/category/${searchedCategory}`).then((data) =>
          setMiniCards(() => data.products)
        )
      : GET("/products").then((data) => setMiniCards(() => data.products));
  }, [searchedCategory]);

  return (
    <div className="App">
      <Navbar
        setSearchedCategory={setSearchedCategory}
        setCartActive={setCartActive}
        cartList={cartList}
      />
      <CartModal
        isCartActive={isCartActive}
        setCartActive={setCartActive}
        cartList={cartList}
        setCartList={setCartList}
      />
      {cardDetails ? (
        <CardDetails
          productDetails={cardDetails}
          setCardDetails={setCardDetails}
          setCartList={setCartList}
          cartList={cartList}
        />
      ) : null}
      <MiniCardList minicards={miniCards} />
      <CardsList
        title="Explore"
        endpoint="/products"
        setCartList={setCartList}
        setCardDetails={setCardDetails}
        cartList={cartList}
      />
      <CardsList
        title="Smartphones"
        endpoint="/products/category/smartphones"
        setCartList={setCartList}
        setCardDetails={setCardDetails}
        cartList={cartList}
      />
      <CardsList
        title="Laptops"
        endpoint="/products/category/laptops"
        setCartList={setCartList}
        setCardDetails={setCardDetails}
        cartList={cartList}
      />
      <CardsList
        title="Fragrances"
        endpoint="/products/category/fragrances"
        setCartList={setCartList}
        setCardDetails={setCardDetails}
        cartList={cartList}
      />
      <CardsList
        title="Skincare"
        endpoint="/products/category/skincare"
        setCartList={setCartList}
        setCardDetails={setCardDetails}
        cartList={cartList}
      />
      <CardsList
        title="Groceries"
        endpoint="/products/category/groceries"
        setCartList={setCartList}
        setCardDetails={setCardDetails}
        cartList={cartList}
      />
      <CardsList
        title="Home decoration"
        endpoint="/products/category/home-decoration"
        setCartList={setCartList}
        setCardDetails={setCardDetails}
        cartList={cartList}
      />
      <Footer />
    </div>
  );
}

export default App;
