import React, { useState, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from './components/Header'
import Event from './components/Event'
import './App.css'

import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

const client = Stitch.initializeDefaultAppClient('tapahtumat-api-lffsa')
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('tapahtumat')

function App() {

  const [events, setEvents] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [isSwitchOn, setSwitch] = useState(false)
  const [isDarkMode, setDarkMode] = useState(false)
  const [showOnlyPispalaVenues, setShowOnlyPispalaVenues] = useState(true)

  useEffect(() => {
    const localDarkMode = localStorage.getItem('dark_mode')
    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (localDarkMode === 'false' || (localDarkMode === null && preferDarkMode === false)) {
      setDarkMode(false)
      localStorage.setItem('dark_mode', 'false')
    } else if (localDarkMode === 'true' || preferDarkMode) {
      setDarkMode(true)
      localStorage.setItem('dark_mode', 'true')
    }

    client.auth.loginWithCredential(new AnonymousCredential())
      .then(user => {
        return db.collection('pispala').find({}, { data: 1, _id: 0 }).asArray()
      }).then(docs => {
        const { events_data, map_data } = docs[0].data
        // sort & move hietis last
        const hietisIndex = events_data.findIndex(el => el.name === 'hiedanranta')
        const hietis = events_data.splice(hietisIndex, 1)[0]
        const sortedEvents = events_data.sort((first, second) => first.name < second.name ? -1 : 1)
        sortedEvents.push(hietis)
        if (process.env.NODE_ENV !== "production") console.log('Events:', sortedEvents)
        setEvents(() => sortedEvents)
        // only way to pass data to LMap, 'cos of the way
        // leaflet works, no props no context :(
        window.map_data = map_data
      }).catch(err => {
        console.error('Data fetch error:', err)
        if (err.toString().includes('TRANSPORT_ERROR')) {
          setErrorMsg(() => 'Hupsista. Ei saatu yhteyttä tietokantaan. Tarkista nettiyhteytesi ja kokeile ladata sivu uudestaan.')
        } else {
          setErrorMsg(() => err.toString())
        }
      })
  }, [])

  const onSwitchChange = () => {
    setSwitch(prev => !prev)
  }

  const toggleTheme = () => {
    setDarkMode(prev =>  {
    localStorage.setItem('dark_mode', !prev)
      return !prev
    })
  }

  return (
    <div className={`App ${isDarkMode ? 'theme-dark' : 'theme-light'}`}>
      <Header
        isSwitchOn={isSwitchOn}
        onSwitchChange={onSwitchChange}
        setShowOnlyPispalaVenues={setShowOnlyPispalaVenues}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      >
        Pispalan Tapahtumat
      </ Header>
      {
        errorMsg !== null
          ? (<div className="error-loader">{errorMsg}</div>)
          : events === null
            ? (<div className="error-loader">
              Haetaan tapahtumia...<br /><br />
              <CircularProgress />
            </div>)
            : (<div>
              {
                events.map((el) => {
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
