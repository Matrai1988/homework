function result() {
  const euro = 403;
  const dollar = 393;
  const forint = Number(document.getElementById("huf").value);
  const forintEuro = Math.round(forint / euro);
  const forintDollar = Math.round(forint / dollar);
  document.getElementById("result-message").innerHTML =
    " Ennyi eurot kapsz " +
    forintEuro +
    "€ <br> Ennyi dollart kapsz " +
    forintDollar +
    "$";
}

//const currencyEuro = document.getElementById("eu");
//const currencyDollar = document.getElementById("usa");
//const currencyHuf = document.getElementById("hu");
//const resultMessage = document.getElementById("result-message");
//const convert = document.getElementById("click");
