import React from 'react'
import Menu from './components/Menu/Menu'

const menuList = [
  { text: 'Website', imageUrl: 'https://via.placeholder.com/350x150' },
  { text: 'Blog', imageUrl: 'https://via.placeholder.com/200x200' }
]

const App = () => {
  return (
    <div>
      <h1>Header</h1>
      <Menu menuList={menuList} />
    </div>
  )
}

export default App