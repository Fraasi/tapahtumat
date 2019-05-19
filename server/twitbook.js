const fs = require('fs')
const fetch = require('node-fetch')
const apiOptions = require('./apiOptions.js')
const startTime = new Date()

const twitBookDataToSave = {}
let twitCount = 0
const twitCountTo = Object.keys(apiOptions).length

function scrapeTwitApi(pub) {
  fetch("https://www.facebook.com/api/graphql/", apiOptions[pub])
    .then(blob => blob.json())
    .then(json => {
      const tempArr = []
      if (json.data.page.upcoming_events === undefined) {
        tempArr.push(`Ei tulevia tapahtumia (${pub})`)
      } else {
        const data = json.data.page.upcoming_events.edges
        data.forEach(event => {
          const result = {
            event: event.node.name,
            startingDateTime: new Date(event.node.startTimestampForDisplay * 1000).toLocaleString('en-GB').slice(0, -3),
            guests: event.node.suggested_event_context_sentence.text,
            shortTime: event.node.shortTimeLabel,
          }
          tempArr.push(result)
        })
      }

      twitBookDataToSave[pub] = tempArr
      twitCount++
      console.log('\x1b[33m', `Twitbook'd ${pub} ${twitCount}/${twitCountTo}`, '\x1b[0m')
      if (twitCount === twitCountTo) writeDataToFile('Twitbook')
    })
    .catch(err => {
      console.log('scrapeTwitApi err', err.toString())
    })
}

function writeDataToFile(scraper) {
  console.log('\x1b[33m', "\x1b[45m", `${scraper}Data ready!`, '\x1b[0m')

    fs.writeFileSync('scrapedData.js', 'const twitData = ')
    fs.appendFile('scrapedData.js', JSON.stringify(twitBookDataToSave, null, 2), err => { if (err) throw err })


    const stopTime = new Date()
    const scrapeTime = `${(stopTime - startTime) / 1000} s`

    fs.appendFile('scrapedData.js', `\n\nconst scrapeTime = '${scrapeTime}'`, err => { if (err) throw err })

    console.log('\x1b[33m', "\x1b[41m", 'ScrapeTime: ', scrapeTime, '- opening browser...', '\x1b[0m')

}

function scrapeTwitBook() {
  Object.keys(apiOptions).forEach(pub => { scrapeTwitApi(pub) })
}

module.exports = scrapeTwitBook