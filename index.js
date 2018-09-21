const Hero = require('./steakTimerLogic.js').Hero;

const NavigationLogic = require('./navigationLogic.js').NavigationLogic;

const readline = require('readline');

const nav = new NavigationLogic(0.01,-0.02);

const HINT = 'enter n,s,w or e';

const world = require('./world.js').world;

const State = require('./State.js').State;

const printCoords = () => {
  console.log(`\nlat: ${nav.getLocation().lat.toFixed(7)} \nlng: ${ nav.getLocation().lng.toFixed(7)}\n`)
};

const state = new State({
  details:{userName: null, uuid:'012'}
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

/* not keen on using rl.question like this, issues with left padding - rl.question always starts a newline
// Better to rely on the rl.on listener which evaluates any response and can respond depending on the internal
// state of a singleton state object 
// TODO: create class for state object, have main js check for state object and create one if not exists,
// demonstrate that we can use a simple switch to respond to input depending on state 
*/
/*
rl.question((world.pickName || 'paaaarp'), function(response) {
  process.stdout.write('\033c');
  const hero = new Hero(`${response}`, 2);
  process.stdout.write('\033c');
  padding(15);
  console.log(hero.greet());
  
});*/
/*
rl.question('name pls:  ', function(response){
    console.log(`welcome ${response}`)
  }
)
*/
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
  process.stdout.write(`${lp(7)} :`);
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

rl.on('line', (input) => {
  switch(input){
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

  reDraw();

});

