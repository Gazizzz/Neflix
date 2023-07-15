import React, { useState } from "react";
import styles from "./Main.module.scss";
import Information from "./Information";
import { DATA } from "../../../data";
import BottomNavigation from "../../UI/BottomNavigation/BottomNavigation";
import Sidebar from "../../UI/Sidebar/Sidebar";
import Episodes from "../Episodes/Episodes";

const Main = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [activeTab, setActiveTab] = useState(false);
  return (
    <div className={styles.wrapper}>
      <Sidebar
        isSidebarShow={isSidebarShow}
        setIsSidebarShow={setIsSidebarShow}
      ></Sidebar>
      <div
        className={styles.main}
        style={{
          backgroundImage: `url(${DATA[0].mainImage})`,
          width: isSidebarShow ? "70%" : "85%",
        }}
      >
        {activeTab === 1 ? (
          <Information movie={DATA[0]} />
        ) : (
          activeTab === 2 && <Episodes />
        )}

        <BottomNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        ></BottomNavigation>
      </div>
    </div>
  );
};
export default Main;
