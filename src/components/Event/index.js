import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import './event.css'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  secondaryHeading: {
    color: 'rgba(0, 0, 0, 0.6)'
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
}));

const Event = (props) => {
  // console.log('props:', props)
  const classes = useStyles()
  const [isOpen, setOpen] = useState(true)
  useEffect(() => {
    setOpen(() => props.isSwitchOn)
    }, [props.isSwitchOn]
  )

  const onTitleClick = () => setOpen(prev => !prev)
  let { name, url, events } = props.data

  if (props.showOnlyPispalaVenues) {
    const nonPispala = ['dogs_home', 'maanalainen', 'visit_tampere', 'huurupiilo']
    if (nonPispala.includes(name)) return null
  }

  if (events.error_msg) {
    return (
      <ExpansionPanel className={classes.root} expanded={isOpen}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
        >
          <div className="collapsible-header">
            {`${events.error_title} (${name}) *!*!*`}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="collapsible-body">
          <span className="sub-header">Käyhän nettisivuilla&nbsp;<a href={url} target="_blank" rel="noopener noreferrer">{url}</a></span><br /><br />
          <ul>
            {
              <li key={'error'}>
                {events.error_msg}
              </li>
            }
          </ul>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  if (name === 'vastavirta') events = events.slice(0, 10)
  const cleanedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(/_/g, ' ')
  const today = new Date()
  const todayDay = today.getDate()
  const todayMonth = today.getMonth()
  let isThereEventToday = false

  const pastEventsFiltered = events
    .sort((ev1, ev2) => ev1.startTimeStamp < ev2.startTimeStamp ? -1 : 1)
    .filter(event => {
      const { startTimeStamp, endTimeStamp } = event
      if (endTimeStamp) {
        const endDate = new Date(endTimeStamp)
        const endDay = endDate.getDate()
        const endMonth = endDate.getMonth()
        return !(endDay < todayDay && endMonth <= todayMonth)
      }
      const startDate = new Date(startTimeStamp)
      const startDay = startDate.getDate()
      const startMonth = startDate.getMonth()
      if (startDay < todayDay && startMonth <= todayMonth) return false
      return true
    })

  const eventRows = pastEventsFiltered.map((event, i) => {
    const { startTimeStamp, endTimeStamp, event: happening } = event
    const startDate = new Date(startTimeStamp)
    let endDateParsed = ''
    if (endTimeStamp) {
      const endDate = new Date(endTimeStamp)
      endDateParsed = `–${endDate.getDate()}.${endDate.getMonth() + 1}`
    }
    const dateParsed = `${startDate.getDate()}.${startDate.getMonth() + 1}${endDateParsed}`
    const eventToday = ((startDate.getDate() === todayDay) && (startDate.getMonth() === todayMonth))
    if (eventToday) isThereEventToday = true
    const todayBGColor = eventToday ? 'rgba(39,169,157,0.7)' : ''

    return (
      <tr key={i} style={{ backgroundColor: todayBGColor }}>
        <td>{dateParsed}</td><td>—</td><td>{happening}</td>
      </tr>
    )
  })

  return (
    <ExpansionPanel className={classes.root} expanded={isOpen}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
        onClick={onTitleClick}
      >
        <div className="collapsible-header">
          {cleanedName}
          <Typography className={classes.secondaryHeading}>
            &nbsp;{` (${pastEventsFiltered.length}) ${isThereEventToday ? '!' : ''}`}
          </Typography>
        </div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className="collapsible-body">
        <span className="sub-header">Aukioloajat & tarkemmat tiedot <a href={url} target="_blank" rel="noopener noreferrer">{url}</a></span>
        {
          name === 'hirvitalo' &&
          <>
            <br />
            <span className="sub-header">Kansankeittiö lauantaisin <a href="https://www.facebook.com/groups/294496307351291/" target="_blank" rel="noopener noreferrer">https://www.facebook.com/groups/294496307351291/</a></span>
          </>
        }

        <br /><br />
        <table>
          <tbody>
            {
              eventRows
            }
          </tbody>
        </table>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default Event
