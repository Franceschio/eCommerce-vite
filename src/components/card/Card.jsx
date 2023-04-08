import "./index.css";

import { useEffect } from "react";

const Card = ({ productData, setCartList, setCardDetails, cartList }) => {
  const addToCart = () => {
    const newItem = {
      id: productData.id,
      title: productData.title,
      thumbnail: productData.thumbnail,
      price: productData.price,
      qnt: 1,
    };

    if (!!cartList.find((item) => item.id === productData.id)) {
      alert("Il prodotto è già presente nel carrello");
      return;
    } else {
      alert("Prodotto correttamente aggiunto al carrello");
      localStorage.setItem("cartList", JSON.stringify([...cartList, newItem]));

      setCartList((prev) => [...prev, newItem]);
    }
  };

  const giveCardDetails = () => {
    setCardDetails(() => productData);
  };

  const openImage = () => {
    window.open(productData.thumbnail, "_self");
  };

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify([...cartList]));

    setCartList((prev) => [...prev]);
  }, [productData.qnt]);

  return (
    <div className="Card">
      <img
        className="CardImage"
        src={productData.thumbnail}
        alt={productData.title}
        onClick={openImage}
      />
      <div className="addToCartOver">
        <img
          src="https://img.icons8.com/external-nawicon-mixed-nawicon/512/external-Add-To-Cart-ecommerce-nawicon-mixed-nawicon.png"
          onClick={addToCart}
        />
      </div>
      <div className="CardText">
        <h3 className="CardTitle" onClick={giveCardDetails}>
          {productData.title.slice(0, 30)}
        </h3>
      </div>
      <div className="cardDetails">
        <span className="CardCategory">{productData.category}</span>
        <span className="CardPrice">{productData.price}$</span>
      </div>
    </div>
  );
};

export default Card;
