function send(){
        var input =document.getElementById("input").value;
       if(input==="" && input=== NaN){
          alert("Enter any number")
}else{
         navigator.vibrate([500, input, 500, 250, 300, 250, 400, 250, input, 250, 500]);
    }
}
function stop() {
    navigator.vibrate(0);
}
