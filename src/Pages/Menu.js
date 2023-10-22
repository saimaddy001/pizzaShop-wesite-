import React from "react";
import { menuList } from "../Helper/menuLIst";
import MenuItem from "../Compo/Menuitem";
import "../Style/Menu.css";
import Footer from "../Compo/Footer";
import Navbar from "../Compo/Navbar";


function Menu() {
  return (
  <>
  <Navbar />
     <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {menuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.Image}
              name={menuItem.name}
              price={menuItem.price}
            />
          );
        })}
        <Footer/>
      </div>
    </div>
    </>
  );
}

export default Menu;
