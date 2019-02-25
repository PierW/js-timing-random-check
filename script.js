function getRandom(min, max) {

  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomArray() {

  var arr = [];
  for (var i=0;i<2;i++) {

    arr.push(getRandom(0, 100));
  }

  return arr;
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

  for (var i=0;i<arr.length;i++) {

    var elem = prompt("Dimmi un valore");

    if (!isPresent(elem, arr)) {

      alert("Hai perso");
      return;
    }
  }

  alert("Hai vinto");
}

var rndNumber = getRandomArray();
alertArray(rndNumber);

setTimeout(askRandomNumber, 2 * 1000, rndNumber);
