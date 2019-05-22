const fs = require('fs')
const fetch = require('node-fetch')
const cheerio = require('cheerio')

const startTime = new Date()

const cheerioScrapeInfo = {
  kujakolli: {
    name: 'Kujakolli',
    data: [],
    url: 'https://www.kujakolli.fi/',
    selector: '.showtime h6',
  },
  vastavirta: {
    name: 'Vastavirta',
    data: [],
    url: 'http://vastavirta.net/en/',
    selector: '.event',
  },
  hirvitalo: {
    name: 'Hirvitalo',
    data: [],
    url: 'http://www.hirvikatu10.net/wordpress.1/',
    selector: '#extras > ul:first-of-type > li'
  },
  mahdollisuuksienTila: {
    name: 'Mahdollisuuksien tila',
    data: [],
    url: 'https://www.mahdollisuuksientila.fi/tapahtumat',
    selector: 'div[id*="_default"] .flex_vbox'
    // Selector: 'div[id*="_def_"] .flex_display.flex_vbox'
  },
}

let cheerioCount = 0
const cheerioCountTo = Object.keys(cheerioScrapeInfo).length


async function getCheerioEvents(url, selector, pub) {
  const result = await fetch(url)
    .then(data => data.text())
    .then(html => {
      const $ = cheerio.load(html)
      if (url.includes('kujakolli')) {
        const eventArray = $(selector).map((i, el) => {
          const filteredGigs = $(el).text().split('\n')
            .filter((el, i, arr) => {
              // 9.2 bändi
              const date = el.match(/\d+/g)
              // skip no date or 22-24.6
              return (date === null || date[1] > 12)
                ? false
                : (new Date(startTime.getFullYear(), date[1] - 1, date[0]) > Date.now())
            })
          return filteredGigs
        }).get()
        return eventArray
      }
      if (url.includes('vastavirta')) {
        const eventArray = $(selector).map((i, el) => {
          const title = $(el).find('.event-title').text()
          const day = $(el).find('.event-day').text()
          const month = $(el).find('.event-month').text()
          const year = $(el).find('.event-year').text()
          const date = new Date(`${day}${month}${year}`)
          // same day happening
          let parsedDate = '-'
          if (!isNaN(date.getDate())) parsedDate = `${date.getDate() || ''}/${date.getMonth() + 1}`
          return `${parsedDate} ${title}`
        }).get()
        return eventArray
      }
      if (url.includes('hiedanranta')) {
        const eventArray = $(selector).map((i, el) => $(el).text()).get().filter(string => !(isNaN(string[0]) || string[0] === '\n'))
        return eventArray
      }
      if (url.includes('hirvikatu10')) {
        const cheerioArray = $(selector).map((i, el) => {
          const innertext = $(el).text()
          return innertext
        })
        // (\d{1,2}\.(\d{1,2}\.)?\s?-?–?\s?)([0-9.]+)?
        const getFullDates = new RegExp(/(\d{1,2}\.(\d{1,2}\.)?\s?-?–?\s?)([0-9.]+)?/)
        const getDayMonth = new RegExp(/(\d+)\.(\d+)/g)

        const eventArray = Array.from(cheerioArray)
          .map(el => {
            const date = el.match(getFullDates)[0].replace(/\s/g, '')
            const stripped = el.replace(getFullDates, '')
            return `${date} ${stripped}`
          })
          .filter(el => {
            const dates = el.match(getDayMonth)
            const [day, month] = dates[dates.length - 1].split('.')
            const inFuture = new Date(startTime.getFullYear(), month - 1, day) > Date.now()
            return inFuture
          })
        return eventArray
      }
      if (url.includes('mahdollisuuksientila')) {
        // 'div[id$="_Left"]'
        // p[class*="font_7"] em u'

        const eventDates = $(selector)
          .find('div[id$="_Left"]')
          .map((i, el) => $(el).text()).get()

        const events = $(selector)
          .find('p[class*="font_7"] em u')
          .map((i, el) => $(el).text()).get()

        return events.map((event, i) => {
          // \d+\.\d+\.\d{4}
          const date = eventDates[i].match(/\d+\.\d+\.\d{4}/)[0]
          return `${date} - ${eventDates[i].substring(date.length)}  -  ${event}`
        })
      }
    }).catch(err => {
      console.log('scrapeCheerioData err', err.toString())
      return [`Jotain män ${pub}:ssa piäleen`, err.toString()]
    })

  cheerioScrapeInfo[pub].data = result
  cheerioCount++
  console.log('\x1b[33m', `Cheerio'ed ${pub}, ${cheerioCount}/${cheerioCountTo}`);
  if (cheerioCount === cheerioCountTo) writeDataToFile('Cheerio')
}

function writeDataToFile(scraper) {
  console.log('\x1b[33m', "\x1b[45m", `${scraper}Data ready!`, '\x1b[0m')
  const stopTime = new Date()
  const scrapeTime = (stopTime - startTime) / 1000
  cheerioScrapeInfo.scrapeTime = scrapeTime
  fs.writeFileSync('scrapedData.js', 'export default ' + JSON.stringify(cheerioScrapeInfo, null, 2), (err) => { if (err) throw err })
  console.log('\x1b[33m', "\x1b[41m", 'ScrapeTime: ', scrapeTime, '\x1b[0m')
}

function scrapeCheerios() {
  Object.keys(cheerioScrapeInfo)
    .forEach(pub => {
      const url = cheerioScrapeInfo[pub].url
      const selector = cheerioScrapeInfo[pub].selector
      getCheerioEvents(url, selector, pub)
    })
}

module.exports = scrapeCheerios