//initial execution
distance2points();
annualperf();
//Get annual performance of any investment
function annualperf() {
  ci = document.getElementById("anperf.initialCapital").value;
  cf = document.getElementById("anperf.finalCapital").value;
  ti = document.getElementById("anperf.daysInvested").value;
  if ((ci && cf && ti) != "") {
    document.getElementById("anperf.result").innerText =
      ((cf - ci) / ci / ti) * 365 * 100 + "%";
    document.getElementById("anperf.result").style.color =
      document.getElementById("body").style.color;
  } else {
    document.getElementById("anperf.result").innerText =
      "Some arguments are missing";
    document.getElementById("anperf.result").style.color = "#C70039";
  }
}
//Get different kinds of distance between two points on a plane
function distance2points() {
  p = document.getElementById("d2p.p").value;
  x1 = document.getElementById("d2p.x1").value;
  y1 = document.getElementById("d2p.y1").value;
  x2 = document.getElementById("d2p.x2").value;
  y2 = document.getElementById("d2p.y2").value;
  if ((p && x1 && y1 && x2 && y2) != "") {
    document.getElementById("d2p.result").innerText = Math.pow(
      Math.pow(Math.abs(x2 - x1), p) + Math.pow(Math.abs(y2 - y1), p),
      1 / p
    );
    document.getElementById("d2p.result").style.color =
      document.getElementById("body").style.color;
    document.getElementById("d2p.result").title =
      document.getElementById("d2p.result").innerText + " mandarinas";
  } else {
    document.getElementById("d2p.result").innerText =
      "Some arguments are missing";
    document.getElementById("d2p.result").style.color = "#C70039";
  }
}
