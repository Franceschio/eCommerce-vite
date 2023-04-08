import "./index.css";

const MiniCard = ({ imgSrc, imgAlt }) => {
  const onClick = () => window.open(imgSrc, "_blank");

  return (
    <img onClick={onClick} className="MiniCard" src={imgSrc} alt={imgAlt} />
  );
};

export default MiniCard;
