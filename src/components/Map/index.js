import React from 'react'
import { Modal, Button } from 'react-materialize'
import './map.css'

const Map = () => {
  const onModalOpen = () => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer.push({ 'event': 'map_modal_opened' })
    }
  }

  return (
    <Modal
      options={{
        onOpenEnd: onModalOpen
      }}
      // header="Pispalan tapahtumista"
      actions={
        <Button waves="green" modal="close" style={{
          position: 'absolute',
          top: '5px',
          right: '5px'
        }}>
          X
        </Button>
      }
      trigger={
        <a
          href="#"
          title="Kartalla"
          style={{}}
        >Paikat kartalla (työn alla)</a>
      }
    >
      <div id="map"></div>

    </Modal>
  )
}

export default Map
