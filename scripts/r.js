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
