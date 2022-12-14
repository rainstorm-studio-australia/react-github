import React from 'react'

const Menu = ({menuList}) => {
  return (
    <ul>
        {
            menuList.map((menuItem, index) => (
                <li key={`menu-${index}`}>
                    <div>
                        <p>{menuItem.name}</p>
                        <img src={menuItem.image} alt="" />
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default Menu