import React from "react";
import styles from "./Episodes.module.css";
import { DATA } from "../../../data";
import MyCarousel from "../../MyCarousel/MyCarousel";

const Episodes = () => {
  return (
    <div className={styles.mainEpisodes}>
      <div>
        <img src={DATA[0].logo} alt="" width="200" />
      </div>
      <MyCarousel></MyCarousel>
    </div>
  );
};
export default Episodes;
