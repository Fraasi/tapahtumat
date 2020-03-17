import React, { useState, useEffect } from 'react'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton'
import MoonIcon from '@material-ui/icons/Brightness4Outlined'
import SunIcon from '@material-ui/icons/Brightness7Outlined'
import Menu from '../Menu'
import './header.css'


function Header({ onSwitchChange, isSwitchOn, setShowOnlyPispalaVenues, children, toggleTheme, isDarkMode }) {

  let downTimer = null

  const handleMouseDown = () => {
    clearTimeout(downTimer);
    downTimer = setTimeout(function () {
      setShowOnlyPispalaVenues(prevState => !prevState)
    }, 5000)
  }

  const handleMouseUp = () => {
    clearTimeout(downTimer)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1
          className="title"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onContextMenu={event => event.preventDefault()}
        >
          {children}
        </h1>
        <IconButton
          className="theme-button"
          size="medium"
          arial-label="päivä/yö-värit"
          title="päivä/yö-värit"
          onClick={toggleTheme}
        >
          {
            isDarkMode ? <MoonIcon /> : <SunIcon />
          }
        </IconButton>

        <Switch
          className="switch"
          checked={isSwitchOn}
          onClick={onSwitchChange}
          title="Avaa/sulje kaikki"
          color="default"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Menu />
      </header>
    </div>
  )
}

export default Header
