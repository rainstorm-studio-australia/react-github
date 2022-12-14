import React from 'react'
import './MenuStyles.scss'

const Menu = ({menuList}) => {
  return (
    <ul>
        {
            menuList.map((menuItem, index) => (
                <li key={`menu-${index}`}>
                    <div>
                        <p>{menuItem.text}</p>
                        <img src={menuItem.imageUrl} alt="" />
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default Menu