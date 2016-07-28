var fs = require('fs')
var path = require('path')
var Canvas = require('..')

function fontFile (name) {
  return path.join(__dirname, '/pfennigFont/', name)
}

// Pass each font, including all of its individual variants if there are any, to
// `registerFont`. When you set `ctx.font`, refer to the styles and the family
// name as it is embedded in the TTF. If you aren't sure, open the font in
// FontForge and visit Element -> Font Information and copy the Family Name
Canvas.registerFont('c:/Users/chearon/Desktop/Montserrat-Regular.ttf', {family: 'A'});
Canvas.registerFont('c:/Users/chearon/Desktop/NotoSansThai-Regular.ttf', {family: 'B'});

var canvas = new Canvas(900, 320)
var ctx = canvas.getContext('2d')

ctx.font = '40px A'
ctx.fillText('Montserrat only - ประเทศไทย', 0, 100)

ctx.font = '40px A,B'
ctx.fillText('Montserrat, then Noto Thai: ประเทศไทย', 0, 140)

ctx.font = '40px A'
ctx.fillText('Montserrat only without Thai characters', 0, 210)

ctx.font = '40px B'
ctx.fillText('Noto Thai only - ประเทศไทย', 0, 280)

canvas.createPNGStream().pipe(fs.createWriteStream(path.join(__dirname, 'font.png')))

