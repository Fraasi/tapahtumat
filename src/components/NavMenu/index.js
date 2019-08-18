import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import Map from '../Map'
import pkgJson from '../../../package.json'
import './nav-menu.css'

const useStyles = makeStyles({
  drawer: {
    width: '80vw',
    padding: '20px'
  },
  button: {
    margin: '5px'
  },
})

const NavMenu = ({ mapData }) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)
  const [isMapOpen, setMap] = useState(false)
  const toggleDrawer = (open) => {
    setIsOpen(open)
    if (process.env.NODE_ENV === "production" && !isOpen) {
      window.dataLayer.push({ 'event': 'NavMenu_opened' })
    }
  }

  return (
    <>
      <div id="burger-container" className={`${isOpen ? 'open' : ''}`} onClick={() => toggleDrawer(true)}>
        <div id="burger">
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
      <div className="drawer-container">
        <Drawer open={isOpen} onClose={() => toggleDrawer(false)}>
          <div className={`menu-content ${classes.drawer}`}>
            <h5>
              Pispalan tapahtumat <span className="version">v{pkgJson.version}</span>
            </h5>
            <p>
              Pispalan harjun tapahtumat yhdellä sivustolla.
          </p>
            <p>
              <strong>Vinkki: </strong>
              Tämä nettisivu (<a href="https://fraasi.github.io/pispalan-tapahtumat/" target="_blank" rel="noopener noreferrer">https://fraasi.github.io/pispalan-tapahtumat/</a>) on suunniteltu kännykälle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin lähtöruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin 'äpit'.
          </p>
            <p>
              Jos sivulta löytyy virheitä tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, sähköpostia voi lähettää osoitteeseen <a href="mailto:fraasi.gh@gmail.com">fraasi.gh@gmail.com</a>
            </p>
            <Button
              variant="outlined"
              color="inherit"
              className={classes.button}
              onClick={() => {
                toggleDrawer(false)
                setMap(true)
              }
              }>
              Kartalla
      </Button>
          </div>

        </Drawer>
        <Map mapData={mapData} isMapOpen={isMapOpen} setMap={setMap}/>
      </div>

    </>
  )
}

export default NavMenu