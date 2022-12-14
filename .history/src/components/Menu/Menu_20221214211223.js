import React from "react";
import "./MenuStyles.scss";

const Menu = ({ menuList }) => {
  return (
    <div className="menu-wrapper">
      <ul className="menu-container">
        {menuList.map((menuItem, index) => (
          <li key={`menu-${index}`}>
            <div>
              <p>{menuItem.text}</p>
              <img src={menuItem.imageUrl} alt="" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
