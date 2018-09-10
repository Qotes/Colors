const fs = require('fs')
const path = require('path')


const file = path.resolve(__dirname, '../src/colors.json')
const hex2rgb = hex => (n => [1, 2, 3].map(c => n << (c * 8) >>> 24))((s => Number(s.replace('#', '0x')))(hex))


fs.readFile(file, 'utf8', (err, r) => {
  r = JSON.parse(r)

  r.colors = r.colors.map(c => {
    const { name, kanji, color} = c
    const { cmyk, rgb } = color

    const ret = { name, kanji, cmyk }
    ret.hex = '#' + rgb
    ret.rgb = hex2rgb(ret.hex)

    return ret
  })

  fs.writeFile(file, JSON.stringify(r), 'utf8', () => console.log('Written.'))
})
