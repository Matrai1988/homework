
let buttonRainy = document.getElementById("rainy");
let buttonSunny = document.getElementById("sunny");
let buttonWindy = document.getElementById("windy");
let buttonSnowy = document.getElementById("snowy");
let option = "";                                    //which weather
let messageBox = document.getElementById("message");

let messageText = "";   //what you will get back, after the click

function ra() {
    option = "rainy";
    whichWeather();
}
function su() {
    option = "sunny";
    whichWeather();
}
function wi() {
    option = "windy";
    whichWeather();
}
function sn() {
    option = "snowy";
    whichWeather();
}
function de() {
    option = "defy";
    whichWeather();
}

function whichWeather() {
    switch (option) {
        case "rainy": message = "You will be wet, if you don't have an umbrella";
            break;
         case "sunny": message = "You need sunglasses";
            break;
         case "windy": message = "Go by car, it's better for You";
            break;
        case "snowy": message = "Winter is coming, and the night is dark";
            break;
        case "defy": message = "Doesn't matter, just eat something";
            break;
    }
    document.getElementById("message").innerHTML = message;




}