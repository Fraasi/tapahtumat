import React from 'react'
import './sponsors.css'


const sponsors = [
  {
    name: 'sadfg',
    url: 'www.example.com',
    until: (Date.now() - 173800)
  },
  {
    name: 'suutari',
    url: 'www.example.com',
    until: Date.now() - 173800
  }
]

const Sponsors = () => {
  const sponsorsToShow = sponsors.filter(sponsor => sponsor.until > Date.now())
  return (
    Boolean(sponsorsToShow.length) && (
      <ul className="sponsors">
        Äppiä ylpeästi sponsoroi:
      {
          sponsorsToShow.map(sponsor => {
            return (
              <li key={sponsor.name}>
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer">{sponsor.name}</a>
              </li>
            )
          })
        }
      </ul>
    )
  )
}

export default Sponsors
