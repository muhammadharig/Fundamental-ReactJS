// click event = An interaction when a user clicks on an element
//               We can respond to clicks by passing
//               a callback to the onClick event handler.

function Button() {
  // step 1 basic
  //   const handleClick = () => console.log("OUGH!");
  //   const handleClick2 = (name) => console.log(`${name} stop clicking me`);

  //   step 2 conditional
  //   let count = 0;

  //   const handleClick = (name) => {
  //     if (count < 3) {
  //       count++;
  //       console.log(`${name} you clicked me ${count} times`);
  //     } else {
  //       console.log(`${name} stop clicking me!`);
  //     }
  //   };

  //   return <button onClick={() => handleClick("Bro")}>Click me 😃</button>;

  const handleClick = (e) => (e.target.textContent = "OUGH! 🤕");

  //   return <button onClick={(e) => handleClick(e)}>Click me 😃</button>;
  return <button onDoubleClick={(e) => handleClick(e)}>Click me 😃</button>;
}

export default Button;
