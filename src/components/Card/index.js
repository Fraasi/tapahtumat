import React, { useState } from 'react'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => {
  console.log('theme:', theme)
  return {
    root: {
      width: '100%',
      maxWidth: 360,
    },
    titleBG: {
      color: 'white',
      backgroundColor: 'green',
    },
    titleText: {
      color: 'white',
      fontWeight: 600,
    },
    wrapper: {
      backgroundColor: theme.palette.background.default,
    }
  }
}

const Card = (props) => {
  // console.log('props:', props)
  const [isOpen, toggleIsOpen] = useState(false)

  const handleClick = () => {
    toggleIsOpen(!isOpen)
  }

  const { classes } = props
  console.log('classes:', classes)
  const { name, url, events } = props.data
  const cleanedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(/_/g, ' ')
  return (
    <List
      component="div"
      className={classes.root}
    >
      <ListItem
        button onClick={handleClick}
        className={classes.titleBG}
        >
        <ListItemText primary={`${cleanedName} (${events.length})`}
          disableTypography={true}
          className={classes.titleText}
        />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={isOpen} timeout={500} unmountOnExit className={classes.wrapper}>
        <List
          component="div"
          subheader={
            <ListSubheader disableSticky>
              Tarkemmat tiedot&nbsp;
              <Link href={url} target="_blank" rel="noreferrer">
                {url}
               </Link>
            </ListSubheader>
          }
        >
          {events.map((event, i) => {
            return (
              <ListItem key={i}>
                <ListItemText 
                  primary={`${event.startingDateTime} - ${event.event}`}
                />
              </ListItem>
            )
          })}
        </List>
      </Collapse>
    </List>
  )
}

export default withStyles(styles)(Card)
