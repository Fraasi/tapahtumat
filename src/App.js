import React, { useState, useEffect } from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
// import blue from '@material-ui/core/colors/blue';
// import HUE from '@material-ui/core/colors/HUE'
import Card from './components/Card'
// import Sdata from './scrapedData.js'
import './App.css'
// console.log('indigo:', indigo)

import { Stitch, RemoteMongoClient, AnonymousCredential } from 'mongodb-stitch-browser-sdk'

const client = Stitch.initializeDefaultAppClient('tapahtumat-api-lffsa')
const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('tapahtumat')

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff4400',
      dark: indigo[500]
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      dark: indigo[100]
    }
  },
  type: 'dark', // Switching the dark mode on is a single property value change.
  typography: { useNextVariants: true },
})

function App() {

  const [data, setData] = useState(null)
  
  useEffect(() => {
    
    client.auth.loginWithCredential(new AnonymousCredential())
      .then(user => {
       return db.collection('pispala').find({}, {data: 1, _id: 0}).asArray()
      }
      ).then(docs => {
        console.log("Found docs", docs)
        setData( () => docs[0].data)
        console.log('data', docs[0].data)
      }).catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          Tapahtumat
      </header>
        {
          data === null 
            ? 'Loading...'
            : data.map(pubData => {
            return (
              <Card key={pubData.name} data={pubData} />
            )
          })
        }
      </div>
    </MuiThemeProvider>
  );
}

export default App
