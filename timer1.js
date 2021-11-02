
//console.log(Number(inp));

//const timer = function(inp){

//   if(!Number(inp) === "Nan" || Number(inp) <= 0 || inp === ""){
//     return "exit";
//   } else {
//     setTimeout(() => {
//       process.stdout.write('\007');
//     }, inp);

//   }
// }


// const inp = process.argv.slice(2);
// console.log(timer(inp));
// //process.stdout.write('\x07');
// //console.log('\u0007');

const beep = function() {
  console.log('beep');

}

const scheduleBeep = function(delay) {
  delay = Number(delay);

  if(!isNaN(delay) && delay > 0 ) {
    setTimeout(beep, delay * 1000);
  }

}

const number = process.argv.slice(2);

for(const num of number) {
  scheduleBeep(num);
}