import React, { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import './notification.css'

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

const Notification = (props) => {

  const classes = useStyles(props)
  const [isNotifOpen, setNotif] = useState(true)

  const toggleDrawer = () => {
    setNotif(prev => !prev)
  }

  return (
    <>
      <div className="drawer-container">
        <Drawer
          open={isNotifOpen}
          onClose={() => toggleDrawer(false)}
          className={classes.darkOrLightMode}
          anchor="bottom"
        >
          <div className="menu-content">
            <p>
              <strong>Vinkki: </strong>
            </p>

            <Button
              variant="outlined"
              color="inherit"
              className="button kartalla"
              onClick={() => { toggleDrawer(false) }
              }>
              Älä näytä uudelleen
            </Button>

          </div>
        </Drawer>
      </div>
    </>
  )
}

export default Notification
