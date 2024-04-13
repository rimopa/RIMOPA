function annualperf() {
  ci = document.getElementById("initialCapital").value;
  cf = document.getElementById("finalCapital").value;
  ti = document.getElementById("daysInvested").value;
  if ((ci && cf && ti) != "") {
    document.getElementById("resultannualperf").innerText =
      ((cf - ci) / ci / ti) * 365 * 100 + "%";
    document.getElementById("resultannualperf").style.color = document.getElementById("body").style.color
  } else {
    document.getElementById("resultannualperf").innerText =
      "Some arguments are missing";
    document.getElementById("resultannualperf").style.color = "#C70039";
  }
}
