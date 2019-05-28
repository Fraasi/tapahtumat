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
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      backgroundColor: 'gray',
    },
  }
}

const Card = (props) => {
  const [isOpen, toggleIsOpen] = useState(false)

  const handleClick = () => {
    toggleIsOpen(!isOpen)
  }

  return (
    <List
      component="div"
      className={props.classes.root}
    >
      <ListItem button onClick={handleClick} className={props.classes.title}>
        <ListItemText primary={`${props.data.name} (${props.data.events.length})`} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={isOpen} timeout={750} unmountOnExit>
        <List
          component="div"
          subheader={
            <ListSubheader disableSticky>
              Tarkemmat tiedot&nbsp;
              {/* <Link href={props.data.url} target="_blank" rel="noreferrer"> */}
                {/* {props.data.url} */}
              {/* </Link> */}
            </ListSubheader>}
        >
          {props.data.events.map((el, i) => {
            return (
              <ListItem key={i}>
                <ListItemText inset primary={el || el.event} />
              </ListItem>
            )
          })}
        </List>
      </Collapse>
    </List>
  )
}

export default withStyles(styles)(Card)
