const Hero = require('./steakTimerLogic.js').Hero;

const NavigationLogic = require('./NavigationLogic/NavigationLogic.js').NavigationLogic;

const readline = require('readline');

const nav = new NavigationLogic(0.01,-0.02);

const HINT = 'enter n,s,w or e';

const world = require('./World/World.js').world;

const State = require('./State/State.js').State;

const View = require('./View/View').View;

const printCoords = () => {
  console.log(`\nlat: ${nav.getLocation().lat.toFixed(7)} \nlng: ${ nav.getLocation().lng.toFixed(7)}\n`)
};

let state = new State({
  userName: 'testo', 
  uuid:'012'
});


/*
console.log(nav.getLocation());
nav.moveNorth();
nav.moveNorth();
console.log(nav.getLocation());
*/

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

process.stdout.write('\033c');
padding(15);
lp(15);

const optionsArray = ['n: go north','s: go south','e: go east','w: go west'];

const displayMenu = (optionsArray) => {
  
  for (let i=0; i<optionsArray.length; i++){
    try {
     console.log(lp(8)+optionsArray[i])
  } catch(err) {
    console.log(err)
  }
  }
};

//displayMenu(optionsArray);



console.reset = function () {
  return process.stdout.write('\033c');
}



const reDraw = () => {
  console.reset();
  a = nav.lat;
  b = nav.lng;
  padding(17);
  process.stdout.write(`${lp(4)}you are at lat: ${a.toFixed(7)}, lng: ${b.toFixed(7)}\n\n`);
  displayMenu(optionsArray);
  padding(7);
  process.stdout.write(`${lp(7)} :${View(state.getState())}`);
}
 
function lp(n){
  let str = '';
  for (let i = 0; i<n; i++){
    str = str+' ';
  }
  return str
}

function padding(n) {
  let str = '';
  for(let i = 0; i<n; i++){
   str = str+'\n';
    }
    console.log(str)
}



/*
const setFlash = (msg) => {
  let On = false;
  function swapFlag(){
    On = !On;
  }
  function draw(msg){
    console.log(msg);
  }
  function flash(){
    if (On == true){draw(msg)}
    if (On == false){console.reset()}
    swapFlag()
  }
  const start = setInterval(flash, 500);
  function stop(){start.clearInterval};
  setTimeout(
}

setFlash('bbb')
*/

const movement = (s) => {
  switch(s){
    case('n'):
      nav.moveNorth();
      break;
    case('s'):
      nav.moveSouth();
      break;
    case('e'):
      nav.moveEast();
      break;
    case('w'):
      nav.moveWest();
      break;
    default:
        break;
  }
}

/* TODO: 
// 1: sanitize input, 2: update state based on input,
// 3: generate a view string based on state and a template
// selected based on state, 4: clear screen and render view
*/
rl.on('line', (input) => {
  let cleanString = input.replace(/[^0-9a-z]/g, '')
  //console.log(cleanString)
  let inputArray = cleanString.split('');
  movement(inputArray[0]);
  reDraw();
});

