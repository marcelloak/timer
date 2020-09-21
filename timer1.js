const timer = function() {
  let timers = process.argv.slice(2);
  if (timers.length < 1) return;
  for (let i = 0; i < timers.length; i++) {
    if(!Number.isNaN(timers[i]) && timers[i] >= 0) setTimeout(() => process.stdout.write('.'), timers[i] * 1000);
  }
  setTimeout(() => console.log(""), timers.length * 1000);
}

timer();