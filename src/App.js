import React, { useState, useEffect } from 'react'
import Switch from '@material-ui/core/Switch'
import CircularProgress from '@material-ui/core/CircularProgress'
import Event from './components/Event'
import Menu from './components/Menu'
import './App.css'

import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

const client = Stitch.initializeDefaultAppClient('tapahtumat-api-lffsa')
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('tapahtumat')

function App() {

  const [events, setEvents] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [isSwitchOn, setSwitch] = useState(false)
  const [showOnlyPispalaVenues, setShowOnlyPispalaVenues] = useState(true)

  useEffect(() => {
    client.auth.loginWithCredential(new AnonymousCredential())
      .then(user => {
        return db.collection('pispala').find({}, { data: 1, _id: 0 }).asArray()
      }
      ).then(docs => {
        const { events_data, map_data } = docs[0].data
        window.map_data = map_data
        setEvents(() => events_data)
        console.log('data', events_data)
      }).catch(err => {
        console.error('Data fetch error:', err)
        setErrorMsg(() => err)
      })
  }, [])

  const onSwitchChange = () => {
    setSwitch(prev => !prev)
  }

  let downTimer = null

  const handleMouseDown = () => {
    clearTimeout(downTimer);
    downTimer = setTimeout(function () {
      setShowOnlyPispalaVenues(prevState => !prevState)
    }, 5000)
  }

  const handleMouseUp = () => {
    clearTimeout(downTimer)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onContextMenu={event => event.preventDefault()}>
          Pispalan Tapahtumat
        </h1>
        <Switch
          className="switch"
          checked={isSwitchOn}
          onClick={onSwitchChange}
          title="Avaa/sulje kaikki"
          color="default"
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Menu />
      </header>
      {
        errorMsg !== null
          ? (<div className="error-loader">{errorMsg.toString()}</div>)
          : events === null
            ? (<div className="error-loader">
              Haetaan tapahtumia...<br /><br />
              <CircularProgress />
            </div>)
            : (<div>
              {
                events
                  .sort((first, second) => first.name < second.name ? -1 : 1).map((el) => {
                    return (
                      <Event
                        data={el}
                        key={el.name}
                        showOnlyPispalaVenues={showOnlyPispalaVenues}
                        isSwitchOn={isSwitchOn}>
                      </Event>
                    )
                  })
              }
            </div>)
      }
    </div>
  )
}

export default App
