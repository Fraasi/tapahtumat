import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import indigo from '@material-ui/core/colors/indigo'
import blue from '@material-ui/core/colors/blue';
// import HUE from '@material-ui/core/colors/HUE'
import Card from './components/Card'
import data from './scrapedData.js'
import './App.css'
console.log('indigo:', indigo)

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
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          Tapahtumat
      </header>
        {
          Object.keys(data).map(pub => {
            return (
              <Card key={pub} data={data[pub]} />
            )
          })
        }
      </div>
    </MuiThemeProvider>
  );
}

export default App
