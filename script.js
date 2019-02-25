function getRandom(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArray() {

  var arr = [];
  for (var i=0;i<level;i++) {

    arr.push(getRandom(0, 10));
  }

  return arr;
}

function step2() {
  if (win) {
    level += 1;
    var rndNumber = getRandomArray();
    var alert = alertArray(rndNumber);
    setTimeout(askRandomNumber, 2 * 1000, rndNumber);
  }
  return;
}

function step3() {
  if (win  && level === 3) {
    level += 1;
    var rndNumber = getRandomArray();
    var alert = alertArray(rndNumber);
    setTimeout(askRandomNumber, 2 * 1000, rndNumber);
  }
  return;
}

function alertArray(arr) {

  var str = "";
  for (var i=0;i<arr.length;i++) {

    str += arr[i] + " ";
  }

  alert(str);
}

function isPresent(elem, arr) {

  var finded = false;

  for (var i=0;i<arr.length;i++) {

    if (elem == arr[i]) {

      finded = true;
    }
  }

  return finded;
}

function askRandomNumber(arr) {
  win = false;
  for (var i=0;i<arr.length;i++) {

    var elem = prompt("Dimmi un valore");

    if (!isPresent(elem, arr)) {

      alert("Hai perso");
      return;
    }
  }
  alert("Hai vinto");
  win = true;
  return win;
}

var level = 2;
var win = false;
var rndNumber = getRandomArray();
alertArray(rndNumber);
setTimeout(askRandomNumber, 2 * 1000, rndNumber);
setTimeout(step2, 2 * 1000);
setTimeout(step3, 5 * 1000);
