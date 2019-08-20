import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import Map from '../Map'
import pkgJson from '../../../package.json'
import './menu.css'

const useStyles = makeStyles({
  drawer: {
    width: '80vw',
    maxWidth: '300px',
    padding: '20px'
  },
  button: {
    width: '50%',
    margin: '5px 25%',
  },
})

const Menu = () => {
  const classes = useStyles()
  const [isNavOpen, setNav] = useState(false)
  const [isMapOpen, setMap] = useState(false)
  const toggleDrawer = (open) => {
    setNav(open)
    if (process.env.NODE_ENV === "production" && !isNavOpen) {
      window.dataLayer.push({ 'event': 'Menu_opened' })
    }
  }

  return (
    <>
      <div
        id="burger-container"
        className={`${isNavOpen ? 'open' : ''}`}
        onClick={() => toggleDrawer(true)}
        title="Menu">
        <div id="burger">
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
      <div className="drawer-container">
        <Drawer open={isNavOpen} onClose={() => toggleDrawer(false)}>
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
        <Map isMapOpen={isMapOpen} setMap={setMap}/>
      </div>

    </>
  )
}

export default Menu