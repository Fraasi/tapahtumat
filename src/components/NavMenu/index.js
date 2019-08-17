import React, { useState } from 'react'
import Map from '../Map'
import pkgJson from '../../../package.json'
import './nav-menu.css'

const NavMenu = ({mapData}) => {

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    if (process.env.NODE_ENV === "production" && !isOpen) {
      window.dataLayer.push({ 'event': 'NavMenu_opened' })
    }
    setIsOpen(prev => !prev)   
  }

  return (
    <>
      <div id="burger-container" className={`${isOpen ? 'open' : ''}`} onClick={handleClick}>
        <div id="burger">
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
      <div className={`menu${isOpen ? ' open' : ''}`} >
        <div className="menu-content">
          <h5>
            Pispalan tapahtumat <span className="version">v{pkgJson.version}</span>
          </h5>
          <p>
            Pispalan harjun tapahtumat yhdellä sivustolla.
          </p>
          <p>
            <strong>Vinkki: </strong>
            Tämä nettisivu (<a href="https://fraasi.github.io/pispalan-tapahtumat/" target="_blank" rel="noopener noreferrer">https://fraasi.github.io/pispalan-tapahtumat/</a>) on suunniteltu kännykälle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin lähtöruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin 'äpit'.
          </p>
          <p>
            <strong>Huom: </strong>
            Päivämäärien kanssa työskentely on kutakuinkin vaikeaa, joten jotain erheitä on odotettavissa. Korjailen niitä sitä mukaa kun niitä ilmenee ja aika antaa myöten.
          </p>
          <p>
            Jos sivulta löytyy virheitä tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, sähköpostia voi lähettää osoitteeseen <a href="mailto:fraasi.gh@gmail.com">fraasi.gh@gmail.com</a>
          </p>
          <Map mapData={mapData}/>
        </div>


      </div>
    </>
  )
}

export default NavMenu