import PropTypes from "prop-types";

const ListWithProps = (props) => {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ol className="list-items">{listItems}</ol>
    </>
  );
};

// declaration of prop types
ListWithProps.propTypes = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};

// handle list if no items
ListWithProps.defaultProps = {
  category: "Category",
  items: [],
};

export default ListWithProps;
