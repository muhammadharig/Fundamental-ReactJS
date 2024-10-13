import PropTypes from "prop-types";

const Card = ({
  img = "https://via.placeholder.com/150",
  name = "Belum Ada Nama",
  text = "Belum tahu apa pekerjaannya",
}) => {
  return (
    <div className="card">
      <img className="card-img" src={img} alt={name} />
      <h2 className="card-title">{name}</h2>
      <p className="card-text">{text}</p>
    </div>
  );
};

// Definisikan propTypes
Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
};

export default Card;
