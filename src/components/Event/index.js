import React from 'react'
import { CollapsibleItem } from 'react-materialize'
import './event.css'

const Event = (props) => {

  let { name, url, events } = props.data

  // onSelect is not a function error without this
  const onTitleClick = (e) => { }

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
  if (name === 'dogs_home' || name === 'maanalainen') return null
  const cleanedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(/_/g, ' ')

  return (
    <CollapsibleItem
      header={`${cleanedName} (${events.length})`}
      onSelect={onTitleClick}
    >
      <span className="sub-header">Aukioloajat & Tarkemmat tiedot<br /><a href={url} target="_blank" rel="noopener noreferrer">{url}</a></span><br /><br />
      <table>
        <tbody>
        {events.map((event, i) => {
          const date = new Date(event.startTimeStamp)
          const dateParsed = `${event.preStartTimeStamp || ''}${date.getDate()}.${date.getMonth() + 1}`
          // const emdash = '—'.padStart(10 - dateParsed.length) //.padEnd(15 - dateParsed.length)
          return (
                <tr key={i}>
                  <td>{dateParsed}</td><td>—</td><td>{event.event}</td>
                </tr>
          )
        }
        )}
        </tbody>
              </table>
    </CollapsibleItem>
  )
}

export default Event
