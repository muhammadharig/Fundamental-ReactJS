import Card from "./Card";
import fotosErni from "./assets/erni.jpg";
import fotoRobot from "./assets/robot.jpg";

function App() {
  return (
    <>
      <Card
        img={fotosErni}
        name="Erni Diah Susanti"
        text="I am a Frontend Developer"
      />
      <Card
        img={fotoRobot}
        name="M. Hari Gunawansyah"
        text="I am a Fullstack Developer"
      />
      <Card />
    </>
  );
}

export default App;
