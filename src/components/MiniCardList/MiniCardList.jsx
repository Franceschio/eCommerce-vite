import "./index.css";

import MiniCard from "../miniCard/MiniCard";

const MiniCardList = ({ minicards }) => {
  return (
    <div className="MiniCardList">
      {minicards.map((card) => (
        <MiniCard imgSrc={card.thumbnail} imgAlt={card.title} key={card.id} />
      ))}
    </div>
  );
};

export default MiniCardList;
