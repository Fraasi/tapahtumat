import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

const theme = createMuiTheme({
  custom: {
    primary: '#1d7d74',
    onhover: '#1b7068'
  },
  themeDark: {
    eventFontColor: 'rgb(233, 233, 233)',
    eventBgColor: 'rgb(44, 44, 44)',
    subHeaderColor: 'rgba(255, 255, 255, 0.6)',
    linkColor: '#29aea0',
  },
  themeLight: {
    eventFontColor: 'rgb(40, 40, 40)',
    eventBgColor: 'rgb(233, 233, 233)',
    subHeaderColor: 'rgba(0, 0, 0, 0.6)',
    linkColor: 'rgb(0, 0, 238)',
  }
})

function Themed() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  )
}

ReactDOM.render(<Themed />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
