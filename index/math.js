//Get annual rate of return on any investment
/*
ci=float(input("Ingrese el capital inicial:"))
cf=float(input("Ingrese el capital final:"))
ti=float(input("Ingrese en días el tiempo que se mantuvo el crédito:"))
print("el rendimiento anual sería de ", ((((cf-ci)/ci)/ti)*365.4)*100, "%") */
function annualperf() {
  ci = document.getElementById("initialCapital").value;
  cf = document.getElementById("finalCapital").value;
  ti = document.getElementById("daysInvested").value;

  document.getElementById("resultannualperf").innerText =
    ((cf - ci) / ci / ti) * 365 * 100 + "%";
}
