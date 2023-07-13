import React from "react";
import styles from "./Main.module.scss";
import Information from "./Information";
import { DATA } from "../../../data";
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";

const Main = () => {
  return (
    <div>
      <Sidebar> </Sidebar>
      <div style={{}}>
        <Information movie={DATA[0]}> </Information>
        <BottomNavigation></BottomNavigation>
      </div>
    </div>
  );
};
export default Main;
