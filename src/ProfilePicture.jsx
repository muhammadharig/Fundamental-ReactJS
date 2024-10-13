function ProfilePicture() {
  const imageUrl = "./src/assets/bro.jpg";
  //   const handleClick = () => console.log("OUGH!🤕");
  //   return <img onClick={handleClick} src={imageUrl}></img>;

  const handleClick = (e) => (e.target.style.display = "none");
  return <img onClick={(e) => handleClick(e)} src={imageUrl}></img>;
}

export default ProfilePicture;
