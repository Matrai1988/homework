//console.log("hello world")

let color = "";  //nap
let ranger = ""; //uzenet
const messageBox = document.getElementById("message");

function red() {
    color = "red";
    whichRanger();
    messageBox.style.color = "red";
}
function yellow() {
    color = "yellow";
    whichRanger();
    messageBox.style.color = "yellow";
}
function blue() {
    color = "blue";
    whichRanger();
    messageBox.style.color = "blue";
}
function pink() {
    color = "pink";
    whichRanger();
    messageBox.style.color = "pink";
}
function black() {
    color = "black";
    whichRanger();
    messageBox.style.color = "black";
}
function green() {
    color = "green";
    whichRanger();
    messageBox.style.color = "green";
}
function rita() {
    color = "rita";
    whichRanger();
    messageBox.style.color = "brown";
}
function empty() {
    color = "empty";
    whichRanger();
   messageBox.style.color = "white";
}


function whichRanger() {
    switch (color) {
        case "red":
            message = "You are the Red Ranger";
            break;
        case "yellow":
            message = "You are the Yellow Ranger";
                    break;
        case "blue":
            message = "You are the Blue Ranger";
                    break;
        case "pink":
            message = "You are the Pink Ranger";
                    break;
        case "black":
            message = "You are the Black Ranger";
                    break;
        case "green":
            message = "You are the Green Ranger";
            break;
        case "rita":
            message = " You are Rita, the Best";
            break;
        default:
            message = " "
    }
    document.getElementById("message").innerHTML = message;
    
}











// document.getElementById("valasz").innerHTML = uzenet;