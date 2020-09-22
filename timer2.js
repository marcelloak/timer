const timer = function() {
  var readline = require('readline');
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.on('line', function(timer) {
    if (timer === "b") process.stdout.write('.');
    else if(!Number.isNaN(timer) && timer > 0 && timer < 10) {
      console.log(`setting timer for ${timer} seconds`);
      setTimeout(() => process.stdout.write('.'), timer * 1000);
    }
  }).on('close',function(){
      console.log("Thanks for using me, ciao!");
      process.exit(0);
  });
}

timer();