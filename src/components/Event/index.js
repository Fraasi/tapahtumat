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
  const todayDate = new Date().getDate()
  let isThereEventToday = false

  const sortedEvents = events.sort((ev1, ev2) => ev1.startTimeStamp < ev2.startTimeStamp ? -1 : 1)
  const eventRows = sortedEvents.map((event, i) => {
    const startDate = new Date(event.startTimeStamp)
    const hasEndDate = event.endTimeStamp != undefined
    const hasPreStartTimeStamp = event.preStartTimeStamp != undefined
    const endDate = hasEndDate ? new Date(event.endTimeStamp) : startDate
    const dateParsed = `${event.preStartTimeStamp || ''}${startDate.getDate()}.${startDate.getMonth() + 1}`
    const eventToday = startDate.getDate() === todayDate
    if (eventToday) isThereEventToday = true
    const todayBGColor = eventToday ? 'rgba(39,169,157,0.7)' : ''

    return (
      <tr key={i} style={{ backgroundColor: todayBGColor }}>
        <td>{dateParsed}</td><td>—</td><td>{event.event}</td>
      </tr>
    )
  })

  return (
    <CollapsibleItem
      header={`${cleanedName} (${events.length}) ${isThereEventToday ? '!' : ''}`}
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
