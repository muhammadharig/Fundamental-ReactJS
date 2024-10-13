import fotoSaya from "./assets/hari.jpg";

function Card() {
  return (
    <div className="card">
      <img className="card-img" src={fotoSaya} alt="My Profile Picture"></img>
      <h2 className="card-title">Hari Code</h2>
      <p className="card-text">I am a Full Stack Developer</p>
    </div>
  );
}

export default Card;
