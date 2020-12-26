function send(){
    var input=document.getElementById("input").value;
    if (input === "" || input === NaN) {
        alert("enter any number")
    } else {
        navigator.vibrate(`[${input}, 250,300,500,240,340,400]`)  
    }
}

function stop() {
    navigator.vibrate(0);
}