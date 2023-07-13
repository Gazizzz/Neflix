import styles from "./Main.module.scss";
import Button from "../../UI/Button/Button";
const Information = ({ movie }) => {
  const addToFavorites = (movieName) => {
    let favorites = localStorage.getItem("favMovies");
    if (favorites) {
      favorites = JSON.parse(favorites);
      localStorage.setItem("favMovies", [...favorites, movieName]);
      alert(`${movieName} теперь в избранном`);
    }
  };
  return (
    <div className={styles.info}>
      <div className={styles.additional}>
        <img src={movie.logo} alt="" width="200" />
        <span>{movie.year}</span>
        <span>{movie.limitAge}</span>
        <span>{movie.rating}</span>
        <span>{movie.duration}</span>
      </div>
      <div className={styles.description}> {move.description} </div>
      <div className={styles.buttons}>
        <Button cb={() => console.log("video is open")}>
          <i className="bx bx-play"></i>
          <span>Play</span>
        </Button>
        <Button cb={addToFavorites}>
          <i className="bx bx-play"></i>
          <span>My list</span>
        </Button>
      </div>
    </div>
  );
};
export default Information;
