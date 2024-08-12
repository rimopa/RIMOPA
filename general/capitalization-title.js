function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}

function capitalizationTitle() {
  var title = document.getElementById("pageTitle").innerText;
  setTimeout(() => {
    var capitalizationCode = dec2bin(getRandomInt(2 ** title.length));
    capitalizationCode = ("0".repeat(title.length) + capitalizationCode).slice(
      -title.length
    ); //adding 0 pad so It doesn't make letter N°1 always uppercase (except when number is 0)
    for (let index = 0; index < title.length; index++) {
      if (capitalizationCode[index] == "1") {
        title = setCharAt(title, index, title[index].toUpperCase());
      } else {
        title = setCharAt(title, index, title[index].toLowerCase());
      }
    }
    document.getElementById("pageTitle").innerText = title;
    capitalizationTitle();
  }, "100");
}
capitalizationTitle();
