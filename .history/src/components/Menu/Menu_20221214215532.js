import React from "react";
import CustomButton from "../button/Button";
import "./Menu.scss";

const Menu = ({ menuList }) => {
  return (
    <div className="menu-wrapper">
      <ul className="menu-container">
        {menuList.map((menuItem, index) => (
          <li key={`menu-${index}`} className="menu-item">
              <p>{menuItem.text}</p>
              <img src={menuItem.imageUrl} alt="" />
              <CustomButton />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
