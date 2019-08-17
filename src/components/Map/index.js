import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet'
import { Modal, Button } from 'react-materialize'
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

const Map = ({ mapData }) => {
  tempMapData = mapData
  const onModalOpen = () => {
    if (process.env.NODE_ENV === "production") {
      window.dataLayer.push({ 'event': 'map_modal_opened' })
    }
    ReactDOM.render(<LMap />, document.querySelector('.map'))
  }

  return (
    <Modal
      options={{
        onOpenEnd: onModalOpen
      }}
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
        <p
          title="Kartalla"
          className="map-link"
        >Paikat kartalla (työn alla)</p>
      }
    >
      <div className="map"></div>
    </Modal>
  )
}

export default Map
