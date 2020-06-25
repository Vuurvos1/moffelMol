let images = 22;

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

let magicNumber = "" + year + month + day;
let magicSeed = Math.floor(random(magicNumber) * images);

function random(seed) {
  var x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

document.querySelector('img').src = 'img/' + magicSeed + '.jpg';
