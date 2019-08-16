import React from 'react'
import pkgJson from '../../../package.json'
import './menu.css'
console.log('pkgJson:', pkgJson)

const Menu = (props) => {
  const { menuOpen } = props
  return (
    <div className={`menu${menuOpen ? ' open' : ''}`} >
    Menu <br />
    Kartalla <br />
  Lähetä palautetta <br />
  version <br />
      </div >
    )
}

export default Menu
