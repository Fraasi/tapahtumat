import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import Map from '../Map'
import Sponsors from '../Sponsors'
import pkgJson from '../../../package.json'
import './menu.css'

// drawer is 'out' of #app, css vars dont work, darkmode with material-ui
const useStyles = makeStyles(theme => ({
  darkOrLightMode: ({ isDarkMode }) => {
    const css = isDarkMode ? theme.themeDark : theme.themeLight
    return {
      '& .MuiPaper-root': {
        backgroundColor: css.eventBgColor,
        color: css.eventFontColor,
        '& a': {
          color: css.linkColor
        },
        '& span.version': {
          color: css.subHeaderColor
        },
      }
    }
  },
}))

const Menu = (props) => {

  const classes = useStyles(props)
  const [isNavOpen, setNav] = useState(false)
  const [isMapOpen, setMap] = useState(false)

  const toggleDrawer = () => {
    setNav(prev => !prev)
    if (process.env.NODE_ENV === "production" && !isNavOpen) {
      window.gtag('event', 'menu_opened', {
        'event_category': 'user',
        'event_label': 'menu',
      })
    }
  }

  return (
    <>
      <div
        id="burger-container"
        className={`${isNavOpen ? 'open' : ''}`}
        onClick={toggleDrawer}
        title="Menu">
        <div id="burger">
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
      <div className="drawer-container">
        <Drawer
          open={isNavOpen}
          onClose={() => toggleDrawer(false)}
          className={classes.darkOrLightMode}
        >
          <div className="menu-content">
            <h3>
              Pispalan tapahtumat&nbsp;
              <span className="version">
                v{pkgJson.version} &copy;Fraasi
              </span>
            </h3>
            <p>
              Pispalan harjun tapahtumat yhdellä sivustolla.
          </p>
            <p>
              <strong>Vinkki: </strong>
              Tämä nettisivu (<a href="https://pispala.events/" target="_blank" rel="noopener noreferrer">https://pispala.events/</a>) on suunniteltu kännykälle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin lähtöruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin 'äpit'.
          </p>
            <p>
              Jos sivulta löytyy virheitä tai haluat ehdottaa jotain paikkaa listalle, palautetta voi lähettää osoitteeseen <a href="mailto:fraasi.gh@gmail.com">fraasi.gh@gmail.com</a>
            </p>
            <Button
              variant="outlined"
              color="inherit"
              className="button kartalla"
              onClick={() => {
                toggleDrawer(false)
                setMap(true)
              }
              }>
              Kartalla
            </Button>
            <Sponsors />
          </div>

        </Drawer>
        <Map isMapOpen={isMapOpen} setMap={setMap} />
      </div>

    </>
  )
}

export default Menu
