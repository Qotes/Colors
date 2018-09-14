/**
 * @desc how to compress the fonts ?
 *   // check the commit log, download the simkai.ttf
 *   // change the scss, and make sure colors has been collected
 *   npm run build
 *   node scripts/p.js
 *   cp build/index.html build/kanji.html
 *   // copy the characters in kanji.json to build/kanji.html
 *   font-spider build/kanji.html
 *   // cp build/media/font-spider/simkai.*.woff src/fonts/simkai.woff
 *   // set back the scss
 *   npm run build
 */

const fs = require('fs')
const path = require('path')


const inFile = path.resolve(__dirname, '../src/colors.json')
const outFile = path.resolve(__dirname, 'kanji.json')


fs.readFile(inFile, 'utf8', (err, r) => {
  r = JSON.parse(r)

  ret = {}
  ret.kanji = [
    r.colors.reduce((kanji, c) => kanji + c.kanji, '')
  ]

  fs.writeFile(outFile, JSON.stringify(ret), 'utf8', () => console.log('Written.'))
})
