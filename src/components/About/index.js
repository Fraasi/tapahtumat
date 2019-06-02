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
        left: '10px',
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
        fraasi
      </p>
    </Modal>
  )
}

export default About