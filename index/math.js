//initial execution
distance2points();
annualperf();
makeCmInRelations();
//Get annual performance of any investment
function getMaxDivinCommon(a, b) {
  if (b === 0) {
    return a;
  }
  return getMaxDivinCommon(b, a % b);
}
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
function distance2points() {
  //Get different kinds of distance between two points on a plane
  p = document.getElementById("d2p.p").value;
  x1 = document.getElementById("d2p.x1").value;
  y1 = document.getElementById("d2p.y1").value;
  x2 = document.getElementById("d2p.x2").value;
  y2 = document.getElementById("d2p.y2").value;
  if ((p && x1 && y1 && x2 && y2) != "") {
    document.getElementById("d2p.result").innerText =
      (Math.abs(x2 - x1) ** p + Math.abs(y2 - y1) ** p) ** (1 / p);
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
function makeCmInRelations() {
  //check it's possible
  if (
    (document.getElementById("cmin.ratio.v").value != 0 &&
      document.getElementById("cmin.ratio.h").value != 0) +
      (document.getElementById("cmin.diag").value != 0) +
      (document.getElementById("cmin.height").value != 0) +
      (document.getElementById("cmin.wide").value != 0) <
    2
  ) {
    document.getElementById("cmin.warning").style.display = "contents";
    document.getElementById("cmin.results").style.display = "none";
    //contents-none
    console.log("Not enough values to run");
    return;
  } else {
    document.getElementById("cmin.warning").style.display = "none";
    document.getElementById("cmin.results").style.display = "contents";
  }
  //get wide in cm
  if (document.getElementById("cmin.wide.type").value == "in") {
    wide = +document.getElementById("cmin.wide").value * 2.54;
  } else {
    wide = +document.getElementById("cmin.wide").value;
  }
  //get height in cm
  if (document.getElementById("cmin.height.type").value == "in") {
    height = +document.getElementById("cmin.height").value * 2.54;
  } else {
    height = +document.getElementById("cmin.height").value;
  }
  //get diagonal in cm
  if (document.getElementById("cmin.diag.type").value == "in") {
    diag = +document.getElementById("cmin.diag").value * 2.54;
  } else {
    diag = +document.getElementById("cmin.diag").value;
  }
  hRatio = +document.getElementById("cmin.ratio.h").value;
  vRatio = +document.getElementById("cmin.ratio.v").value;

  //a=the value that, multiplicated by the radio, gives the height and wide
  newHRatio = 0;
  newVRatio = 0;
  newHeight = 0;
  newWide = 0;
  newDiag = 0;
  a = 0;
  method1 = "patata";
  method2 = "mandarina";
  if (hRatio != 0 && vRatio != 0) {
    method1 = "ratio";
    newHRatio = hRatio;
    newVRatio = vRatio;
    if (diag != 0) {
      method2 = "diagonal";
      a = Math.sqrt(diag ** 2 / (hRatio ** 2 + vRatio ** 2));
    } else {
      if (wide != 0) {
        method2 = "wide";
        a = wide / hRatio;
      } else {
        if (height != 0) {
          method2 = "height";
          a = height / vRatio;
        }
      }
    }
    newWide = a * newHRatio;
    newHeight = a * newVRatio;
  } else {
    if (wide != 0) {
      newWide = wide;
      method1 = "wide";
      if (height != 0) {
        method2 = "height";
        newHeight = height;
        a = getMaxDivinCommon(wide, height);
      } else {
        if (diag !== 0) {
          method2 = "diagonal";
          a = getMaxDivinCommon(
            (newHeight = Math.sqrt(diag ** 2 - wide ** 2)),
            wide
          );
        }
      }
    } else {
      if (height != 0) {
        method1 = "height";
        newHeight = height;
        if (diag != 0) {
          method2 = "diag";
          a = getMaxDivinCommon(
            (newWide = Math.sqrt(diag ** 2 - height ** 2)),
            height
          );
        }
      }
    }
    newVRatio = newHeight / a;
    newHRatio = newWide / a;
  }
  /*
  cmin.result.method
  cmin.result.ratio
  cmin.result.wide
  cmin.result.height
  cmin.result.diag
  */
  newDiag = Math.sqrt((a * newHRatio) ** 2 + (a * newVRatio) ** 2);
  console.log("a:", a);
  document.getElementById("cmin.result.method").innerText =
    "Using the the " + method1 + " and  " + method2 + " inputs.";
  document.getElementById("cmin.result.ratio").innerText =
    newHRatio + ":" + newVRatio;
  if (document.getElementById("cmin.result.type").value == "in") {
    document.getElementById("cmin.result.wide").innerText =
      newWide / 2.54 + "in";
    document.getElementById("cmin.result.height").innerText =
      newHeight / 2.54 + "in";
    document.getElementById("cmin.result.diag").innerText =
      newDiag / 2.54 + "in";
  } else {
    document.getElementById("cmin.result.wide").innerText = newWide + "cm";
    document.getElementById("cmin.result.height").innerText = newHeight + "cm";
    document.getElementById("cmin.result.diag").innerText = newDiag + "cm";
  }
}
