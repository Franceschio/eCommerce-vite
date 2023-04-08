import "./index.css";

import { useEffect } from "react";

const CardDetails = ({
  productDetails,
  setCardDetails,
  setCartList,
  cartList,
}) => {
  const closeCardDetails = () => {
    setCardDetails(() => null);
  };

  const openImage = (img) => {
    window.open(img, "_blank");
  };

  const addToCart = () => {
    const newItem = {
      id: productDetails.id,
      title: productDetails.title,
      thumbnail: productDetails.thumbnail,
      price: productDetails.price,
      qnt: 1,
    };

    if (!!cartList.find((item) => item.id === productDetails.id)) {
      alert("Il prodotto è già presente nel carrello");
      return;
    } else {
      alert("Prodotto correttamente aggiunto al carrello");
      localStorage.setItem("cartList", JSON.stringify([...cartList, newItem]));

      setCartList((prev) => [...prev, newItem]);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify([...cartList]));

    setCartList((prev) => [...prev]);
  }, [productDetails.qnt]);

  return (
    <div className="cardDetailsModal">
      <div className="cardDetailsOverflow" onClick={closeCardDetails}></div>
      <div className="CardDetails">
        <div className="closeDetails" onClick={closeCardDetails}>
          X
        </div>
        <div className="addToCart" onClick={addToCart}>
          <img
            src="https://img.icons8.com/dotty/512/shopping-cart.png"
            alt="add to cart"
          />
        </div>
        <h1>{productDetails.title}</h1>
        <div className="images">
          {productDetails.images.map((image) => (
            <img
              src={image}
              alt="Product image"
              onClick={() => openImage(image)}
              key={image}
            />
          ))}
        </div>
        <div className="description">
          <p>{productDetails.description}</p>
          <div className="details">
            <span>Brand: {productDetails.brand}</span>
            <span>Category: {productDetails.category}</span>
            <span>Price: {productDetails.price}$</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
