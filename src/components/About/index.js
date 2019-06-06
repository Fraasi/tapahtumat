import React from 'react'
import { Modal, Button } from 'react-materialize'

const About = () => {

  return (
    <Modal
      header="Pispalan tapahtumista"
      actions={<Button
        waves="green" modal="close"
      >Sulje</Button>}
      trigger={<Button style={{
        top: '10px',
        right: '10px',
        position: 'absolute'
        }}
        title="Info"
        >?</Button>}>
      <p>
        Pispalassa on paljon pieniä eri yhdistyksiä, jotka järjestävät kaikenlaisia mukavia tapahtumia ja tekemisiä.
      </p>
      <p>
        Tämä on pieni yritys koota kaikki samalle sivustolle, jotta olisi helpompi löytää mitä ja missä milloinkin tapahtuu.
        
      </p>
      <p>
        Pispalan kirjasto vielä työn alla...<br/>
        <strong>huom: </strong>
        Päivämäärien kanssa työskentely on kutakuinkin vaikeaa, joten jotain erheitä on odotettavissa. Korjailen niitä sitä mukaa kun niitä ilmenee ja aika antaa myöden.
      </p>
      <p>
        Jos sivulta löytyy virheitä tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, sähköpostia voi lähettää osoitteeseen fraasi.gh@gmail.com
      </p>
    </Modal>
  )
}

export default About