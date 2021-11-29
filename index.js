function appendOperation(operation) {
    if (document.getElementById("inputOutput").innerHTML.length <= 18) {
        document.getElementById("inputOutput").style.fontSize = "76px";
        document.getElementById("inputOutput").innerHTML += operation;
    } 
    else if (document.getElementById("inputOutput").innerHTML.length > 18 && document.getElementById("inputOutput").innerHTML.length < 38 ) {
        document.getElementById("inputOutput").style.fontSize = "55px";
        document.getElementById("inputOutput").innerHTML += operation;
    }
}
function deleteAllInput() {
    document.getElementById("inputOutput").innerHTML = "";
}
function deleteLastInput() {
    let container = document.getElementById("inputOutput");
    if (container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3);
    } else {
        container.innerHTML = container.innerHTML.slice(0, -1);
    }
}
function evaluateAndOutput(evaluation) {
    let container =  document.getElementById("inputOutput");
    container.innerHTML = eval(container.innerHTML).toFixed(2);
}