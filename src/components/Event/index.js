import React from 'react'
import { CollapsibleItem } from 'react-materialize'
import './event.css'

const Event = (props) => {

  const { name, url, events } = props.data
  const cleanedName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`.replace(/_/g, ' ')

  // onSelect is not a function error without this
  const onTitleClick = (e) => {}

  return (
    <CollapsibleItem
      header={`${cleanedName} (${events.length})`}
      onSelect={onTitleClick}
      expanded={props.expanded}
    >
      <span className="sub-header">Tarkemmat tiedot&nbsp;<a href={url} target="_blank" rel="noopener noreferrer">{url}</a></span><br /><br />
      <ul>
        {events.map((event, i) => (
          <li key={i}>
            {`${event.startingDateTime} - ${event.event}`}
          </li>
        )
        )}
      </ul>
    </CollapsibleItem>
  )
}

export default Event
