
//console.log(Number(inp));

const timer = function(inp){

  if(Number(inp) === "Nan" || Number(inp) <= 0 || inp === ""){
    return exit;
  } else {
    setTimeout(() => {
      process.stdout.write('\007');
    }, inp);

  }
}


const inp = process.argv.slice(2);
console.log(timer(inp));
//process.stdout.write('\u0007');
//console.log('\u0007');

