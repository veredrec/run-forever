
function addTwoLoop(i) {
  console.log(new Date().toLocaleString());
  console.log(i+2);
  i++;
  if (i < 10) {
    setTimeout(function() {
      addTwoLoop(i);
    }, 1000);
  }
}

addTwoLoop(1);
