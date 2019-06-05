import React from 'react'
import { Modal, Button } from 'react-materialize'

const About = () => {

  return (
    <Modal
      header="Pispalan tapahtumat"
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
        Rajaportin sauna ja pispalan kirjasto työn alla...
      </p>
      <p>
        Jos sivulta löytyy virheitä tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, sähköpostia voi lähettää osoitteeseen fraasi.gh@gmail.com
      </p>
    </Modal>
  )
}

export default About