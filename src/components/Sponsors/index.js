import React from 'react'
import './sponsors.css'
import knalli_logo from './images/Knallin_Saluuna_logo.jpg'

// const WEEK_IN_MILLISECS = 604800
// const MONTH_IN_MILISECS = 2629746000
// calculate 3 months from new date
// new Date(2019, 11, 1).getTime() + (MONTH_IN_MILISECS * 3)

const sponsors = [
  {
    name: 'sadfg',
    url: 'www.example.com',
    until: (Date.now() - 173800)
  },
  {
    name: 'Suutari Knallin Saluuna',
    img: knalli_logo,
    url: 'https://FB.com/knallinsaluuna',
    url2: 'https://Instagram.com/knallin_saluuna',
    until: new Date(2020, 11, 30).getTime()
  }
]

const Sponsors = () => {
  const sponsorsToShow = sponsors.filter(sponsor => sponsor.until > Date.now())

  const handleAddClick = (sponsorName) => {
    if (process.env.NODE_ENV === "production") {
      window.gtag('event', 'add_clicked', {
        'event_category': 'sponsor',
        'event_label': sponsorName,
      })
    }
  }

  return (
    Boolean(sponsorsToShow.length) && (
      <ul className="sponsors">
        <h5>Äppiä tyylikkäästi sponsoroi:</h5>
        {
          sponsorsToShow.map(sponsor => {
            return (
              <li key={sponsor.name} className="sponsors">
                <a href={sponsor.url} target="_blank" rel="noopener noreferrer" onClick={() => handleAddClick(sponsor.name)}>
                  <h4>{sponsor.name}</h4>
                  <img src={sponsor.img} alt={sponsor.name} />
                </a>
              </li>
            )
          })
        }
      </ul>
    )
  )
}

export default Sponsors
