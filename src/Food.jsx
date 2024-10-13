function Food() {
  // Make variabel food
  const food1 = "Pizza";
  const food2 = "Pasta";

  return (
    <ul>
      <li>Soto</li>
      <li>{food1}</li>
      <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default Food;
