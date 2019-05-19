
const scrapeCheerios = require('./fetch.js')
const scrapeTwitBook = require('./twitbook.js')
// const startTime = new Date()

scrapeCheerios()
// scrapeTwitBook()

// savea täällä kun scrapit on ohim muista muuttaa Nii, et returnaa datan

// function writeDataToFile(scraper) {
//   console.log('\x1b[33m', "\x1b[45m", `${scraper}Data ready!`, '\x1b[0m')

//   if ((cheerioCount === cheerioCountTo) && (twitCount === twitCountTo)) {
//     fs.writeFileSync('scrapedData.js', 'const twitData = ')
//     fs.appendFile('scrapedData.js', JSON.stringify(twitBookDataToSave, null, 2), err => { if (err) throw err })

//     fs.appendFile('scrapedData.js', '\n\nconst cheerioData = ' + JSON.stringify(cheerioDataToSave, null, 2), (err) => { if (err) throw err })

//     const stopTime = new Date()
//     const scrapeTime = `${(stopTime - startTime) / 1000} s`

//     fs.appendFile('scrapedData.js', `\n\nconst scrapeTime = '${scrapeTime}'`, err => { if (err) throw err })

//     console.log('\x1b[33m', "\x1b[41m", 'ScrapeTime: ', scrapeTime, '- opening browser...', '\x1b[0m')
//   }
// }
