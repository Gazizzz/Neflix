import styles from "./Sidebar.module.scss";
const menu = ["Popular", "TV Shows", "Films", "My list"];
const Sidebar = ({ isSidebarShow, setIsSidebarShow }) => {
  return (
    <div
      className={styles.sidebar}
      style={{ width: isSidebarShow ? "15%" : "5%" }}
    >
      <button onClick={() => setIsSidebarShow(!isSidebarShow)}>
        <i className={`bx bx-${isSidebarShow ? "x" : "horizontal-right"}`}> </i>
      </button>
      <ul className={isSidebarShow ? styles.show : ""}>
        {menu.map((title) => (
          <li key={title}>
            <a href="/">{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
{
  /* <i class='bx bx-horizontal-right'></i> */
}
