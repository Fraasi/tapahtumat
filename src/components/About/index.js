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
        Pispalassa on paljon pieniä eri yhdistyksiä, jotka järjestävät kaikenlaisia tapahtumia ja tekemisiä.
        Tämä on pieni yritys koota kaikki samalle sivustolle, jotta olisi helpompi löytää mitä harjulla milloinkin tapahtuu.
      </p>
      <p>
        <strong>vinkki: </strong>
        Tämä nettisivu on suunniteltu kännykälle ja toimii parhaiten kun avaa nettisivun luurin selaimessa ja valitsee asetuksista 'Add to home screen', jolloin lähtöruudulle napsahtaa kuvake jota klikkaamalla sivu toimii kuten muutkin 'äpit'.
      </p>
      <p>
        <strong>huom: </strong>
        Päivämäärien kanssa työskentely on kutakuinkin vaikeaa, joten jotain erheitä on odotettavissa. Korjailen niitä sitä mukaa kun niitä ilmenee ja aika antaa myöten.
      </p>
      <p>
        Jos sivulta löytyy virheitä tai on jotain muuta valitettavaa tai haluat ehdottaa jotain paikkaa listalle, sähköpostia voi lähettää osoitteeseen fraasi.gh@gmail.com
      </p>
    </Modal>
  )
}

export default About