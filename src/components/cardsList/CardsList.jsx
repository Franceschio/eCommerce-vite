import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card/Card";
import "./index.css";

const CardsList = ({
  title,
  endpoint,
  setCartList,
  cartList,
  setCardDetails,
}) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    GET(endpoint).then((data) => setProductsList(() => data.products));
  }, []);

  return (
    <div className="CardList">
      <h2>{title}</h2>
      <div className="CardListProducts">
        {productsList.map((product) => (
          <Card
            productData={product}
            setCartList={setCartList}
            key={product.id}
            cartList={cartList}
            setCardDetails={setCardDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
