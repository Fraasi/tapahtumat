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
        const returnData = docs[0].data.sort((first, second) => first.name < second.name ? -1 : 1)
        setData(() => returnData)
        console.log('data', returnData)
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
      <header className="App-header">Pispalan Tapahtumat</header>
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
                  data.map((el, i) => {
                    return <Event data={el} key={el.name}></Event>
                  })
                }
              </Collapsible>)
      }
    </div>
  )
}

export default App
