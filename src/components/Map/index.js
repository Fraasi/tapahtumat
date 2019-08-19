import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import Modal from '@material-ui/core/Modal'
import Button from '@material-ui/core/Button'

import './map.css'

let tempMapData = []

class LMap extends Component {
  constructor() {
    super()
    this.mapData = tempMapData
  }
  render() {
    return (
      <LeafletMap center={[61.50238, 23.71477]} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {
          this.mapData.map(({ title, latLong }) => (
            <Marker position={latLong} key={title}>
              <Popup>
                {title}
              </Popup>
            </Marker>
          ))
        }
      </LeafletMap>
    )
  }
}

const Map = ({ mapData, isMapOpen, setMap }) => {
  tempMapData = mapData
  const onModalOpen = () => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer.push({ 'event': 'map_modal_opened' })
    }
    const mapDiv = document.querySelector('.map')
    const button = document.querySelector('.map-close-button')
    ReactDOM.render(<LMap />, mapDiv)
    mapDiv.appendChild(button)
  }

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isMapOpen}
      onRendered={onModalOpen}
      onClose={() => setMap(false)}
      onBackdropClick={() => setMap(false)}
    >
      <div className="modal-content">
        <Button
          className="map-close-button"
          onClick={() => setMap(false)}
          variant="outlined"
          color="inherit"
        >X</Button>
        <div className="map"></div>
      </div>
    </Modal>
  )
}

export default Map
