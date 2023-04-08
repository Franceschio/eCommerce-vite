import "./index.css";

import { useEffect, useState } from "react";

const CartItem = ({ productData, setCartList, cartList }) => {
  const deleteItem = () => {
    localStorage.setItem(
      "cartList",
      JSON.stringify([...cartList.filter((item) => item !== productData)])
    );

    setCartList([...cartList.filter((item) => item !== productData)]);
  };

  const [qnt, setQnt] = useState(productData.qnt);

  const removeQnt = () => {
    setQnt((prev) => prev - 1);
    // productData.qnt = qnt;
  };

  const addQnt = () => {
    setQnt((prev) => prev + 1);
    // productData.qnt = qnt;
  };

  useEffect(() => {
    if (qnt <= 0) {
      deleteItem();
    }
  }, [qnt]);

  useEffect(() => {
    productData.qnt = qnt;
    localStorage.setItem("cartList", JSON.stringify([...cartList]));

    setCartList((prev) => [...prev]);
  }, [qnt]);

  return (
    <div className="CartItem">
      <img src={productData.thumbnail} alt={productData.title} />
      <div className="qntRemove" onClick={removeQnt}>
        -
      </div>
      <h3>{qnt}</h3>
      <div className="qntAdd" onClick={addQnt}>
        +
      </div>
      <h4>{productData.title}</h4>
      <h6>{productData.price * qnt}$</h6>
      <button className="cartItemDeleteBtn" onClick={deleteItem}>
        <img
          src="https://img.icons8.com/ios-glyphs/512/trash.png"
          alt="deleteBtn"
        />
      </button>
    </div>
  );
};

export default CartItem;
