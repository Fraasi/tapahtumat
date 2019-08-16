import React, { useState } from 'react'
import pkgJson from '../../../package.json'
import './nav-menu.css'

const Nav = () => {

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(prev => !prev)
  }

  return (
    <>
      <div id="burger-container" className={`${open ? 'open' : ''}`} onClick={handleClick}>
        <div id="burger">
          <span>&nbsp;</span>
          <span>&nbsp;</span>
          <span>&nbsp;</span>
        </div>
      </div>
      <div className={`menu${open ? ' open' : ''}`} >
        <div className="menu-content">
          <h5>
            Pispalan tapahtumat (v{pkgJson.version})
          </h5>
          <p>
            Pispalan harjun tapahtumat yhdellä sivustolla.
          </p>
          <p>
            <strong>vinkki: </strong>
            Tämä nettisivu (<a href="https://fraasi.github.io/pispalan-tapahtumat/" target="_blank" rel="noopener noreferrer">https://fraasi.github.io/pispalan-tapahtumat/</a>) on suunniteltu kännykälle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin lähtöruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin 'äpit'.
          </p>
          <p>
            <strong>huom: </strong>
            Päivämäärien kanssa työskentely on kutakuinkin vaikeaa, joten jotain erheitä on odotettavissa. Korjailen niitä sitä mukaa kun niitä ilmenee ja aika antaa myöten.
          </p>
          <p>
            Jos sivulta löytyy virheitä tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, sähköpostia voi lähettää osoitteeseen <a href="mailto:fraasi.gh@gmail.com">fraasi.gh@gmail.com</a>
          </p>
          <p>
            Paikat kartalla (työn alla)<br />
          </p>
        </div>


      </div>
    </>
  )
}

export default Nav