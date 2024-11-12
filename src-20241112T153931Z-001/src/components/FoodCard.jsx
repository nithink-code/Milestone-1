import PropTypes from "prop-types";

const FoodCard = ({ image, name, price }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={image} alt="Food item" className="w-full h-40 object-cover" />

      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-gray-600">Price {`${price}`}</p>
      </div>

      <div className="p-4 flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

// PropTypes validation
FoodCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default FoodCard;
