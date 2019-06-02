import React, { useState, useEffect } from 'react'
import { Preloader, Collapsible, Switch } from 'react-materialize'
import Event from './components/Event'
import About from './components/About'
import './App.css'

import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

const client = Stitch.initializeDefaultAppClient('tapahtumat-api-lffsa')
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('tapahtumat')


function App() {

  const [data, setData] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    document.querySelector('.switch').title = 'Avaa/sulje kaikki'
    client.auth.loginWithCredential(new AnonymousCredential())
      .then(user => {
        return db.collection('pispala').find({}, { data: 1, _id: 0 }).asArray()
      }
      ).then(docs => {
        setData(() => docs[0].data)
        console.log('data', docs[0].data)
      }).catch(err => {
        console.error('error', err)
        setErrorMsg(() => err)
      })
  }, [])

  const onSwitchChange = () => {
    setExpanded(prev => !prev)
    if (expanded) document.querySelector('.collapsible.expandable').M_Collapsible.close()
    else document.querySelector('.collapsible.expandable').M_Collapsible.open()
  }

  return (
    <div className="App">
      <About />
      <Switch
        offLabel=""
        onLabel=""
        onChange={onSwitchChange}
      />
      <header className="App-header">Tapahtumat</header>
      {
        data === null
          ? (
            <div>
              Haetaan aikatauluja...<br />
              <Preloader size="small" flashing />
            </div>
          )
          : errorMsg !== null
            ? (<div>errorMsg</div>)
            : (
              <Collapsible accordion={false} >
                {
                  data.map((el, i) => {
                    return <Event data={el} key={el.name} expanded={expanded}></Event>
                  })
                }
              </Collapsible>
            )
      }
    </div>
  )
}

export default App
