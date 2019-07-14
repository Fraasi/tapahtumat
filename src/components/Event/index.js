import React from 'react'
import { CollapsibleItem } from 'react-materialize'
import './event.css'

const Event = (props) => {

  let { name, url, events } = props.data
  if (name === 'dogs_home' || name === 'maanalainen') return null

  // onSelect is not a function error without this
  const onTitleClick = () => { }

  if (events.error_msg) {
    return (
      <CollapsibleItem
        header={`${events.error_title} (${name}) *!*!*`}
        onSelect={onTitleClick}
      >
        <span className="sub-header">Käyhän nettisivuilla&nbsp;<a href={url} target="_blank" rel="noopener noreferrer">{url}</a></span><br /><br />
        <ul>
          {
            <li key={'error'}>
              {events.error_msg}
            </li>
          }
        </ul>
      </CollapsibleItem>
    )
  }

  if (name === 'vastavirta') events = events.slice(0, 10)
  const cleanedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(/_/g, ' ')
  const todayTimeStamp = new Date().getTime()
  const today = new Date()
  let isThereEventToday = false

  const sortedEvents = events
    .sort((ev1, ev2) => ev1.startTimeStamp < ev2.startTimeStamp ? -1 : 1)
    .filter(event => {
      const { startTimeStamp, endTimeStamp } = event
      if (endTimeStamp && (endTimeStamp < todayTimeStamp)) return false
      if (!endTimeStamp && (startTimeStamp < todayTimeStamp)) return false
      return true
    })

  const eventRows = sortedEvents.map((event, i) => {
    const { startTimeStamp, endTimeStamp, event: happening } = event
    const startDate = new Date(startTimeStamp)
    let endDateParsed = ''
    if (endTimeStamp) {
      const endDate = new Date(endTimeStamp)
      endDateParsed = `–${endDate.getDate()}.${endDate.getMonth() + 1}`
    }
    const dateParsed = `${startDate.getDate()}.${startDate.getMonth() + 1}${endDateParsed}`
    const eventToday = ( (startDate.getDate() === today.getDate()) && (startDate.getMonth() === today.getMonth()) )
    if (eventToday) isThereEventToday = true
    const todayBGColor = eventToday ? 'rgba(39,169,157,0.7)' : ''

    return (
      <tr key={i} style={{ backgroundColor: todayBGColor }}>
        <td>{dateParsed}</td><td>—</td><td>{happening}</td>
      </tr>
    )
  })

  return (
    <CollapsibleItem
      header={`${cleanedName} (${sortedEvents.length}) ${isThereEventToday ? '!' : ''}`}
      onSelect={onTitleClick}
    >
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
    </CollapsibleItem>
  )
}

export default Event
