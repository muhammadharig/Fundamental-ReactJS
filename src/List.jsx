const List = () => {
  //   const fruits = ["apple", "orange", "coconut", "pineapple"];
  //   fruits.sort();

  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 37 },
  ];

  //   method for filtering list :
  //   const listItems = fruits.map((fruit) => <li>{fruit}</li>);

  //   fruits.sort((a, b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
  //   fruits.sort((a, b) => b.name.localeCompare(a.name)); //REVERSE ORDER

  //   fruits.sort((a, b) => a.calories - b.calories); //NUMERIC
  //   fruits.sort((a, b) => b.calories - a.calories); //REVERSE NUMERIC

  //   const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
  //   const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);

  const listItems = fruits.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
  ));

  //   const listItems = highCalFruits.map((highCalFruits) => (
  //     <li key={highCalFruits.id}>
  //       {highCalFruits.name}: {highCalFruits.calories}
  //     </li>
  //   ));

  return <ol>{listItems}</ol>;
};

export default List;
