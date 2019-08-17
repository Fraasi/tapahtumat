import React, { useState, useEffect } from 'react'
import { Preloader, Collapsible, Switch } from 'react-materialize'
import Event from './components/Event'
import NavMenu from './components/NavMenu'
import './App.css'

import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

const client = Stitch.initializeDefaultAppClient('tapahtumat-api-lffsa')
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('tapahtumat')

function App() {

  const [data, setData] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [expanded, setExpanded] = useState(false)
  const [showOnlyPispalaVenues, setShowOnlyPispalaVenues ] = useState(true)

  useEffect(() => {
    document.querySelector('.switch').title = 'Avaa/sulje kaikki'
    client.auth.loginWithCredential(new AnonymousCredential())
      .then(user => {
        return db.collection('pispala').find({}, { data: 1, _id: 0 }).asArray()
      }
      ).then(docs => {
        console.log('docs:', docs)
        const returnData = docs[0].data
        setData(() => returnData)
        console.log('data', returnData)
      }).catch(err => {
        console.error('Data fetch error:', err)
        setErrorMsg(() => err)
      })
  }, [])

  const onSwitchChange = () => {
    setExpanded(prev => !prev)
    if (expanded) document.querySelector('.collapsible.expandable').M_Collapsible.close()
    else document.querySelector('.collapsible.expandable').M_Collapsible.open()
  }

  let downTimer = null

  const handleMouseDown = () => {
    clearTimeout(downTimer);
    downTimer = setTimeout(function() {
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
          offLabel=""
          onLabel=""
          onChange={onSwitchChange}
        />
        <NavMenu />
      </header>
      {
        errorMsg !== null
          ? (<div className="error-loader">{errorMsg.toString()}</div>)
          : data === null
            ? (<div className="error-loader">
              Haetaan tapahtumia...<br /><br />
              <Preloader size="small" flashing />
            </div>)
            : (<Collapsible accordion={false} >
              {
                data.eventsData
                  .sort((first, second) => first.name < second.name ? -1 : 1) .map((el, i) => {
                  return <Event data={el} key={el.name} showOnlyPispalaVenues={showOnlyPispalaVenues}></Event>
                })
              }
            </Collapsible>)
      }
    </div>
  )
}

export default App
