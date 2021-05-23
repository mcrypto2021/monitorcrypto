
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}




var audio = new Audio(),
    div   = document.getElementById("show");
audio.src = "https://www.soundjay.com/button/sounds/button-3.mp3";

function play(num)
{
    audio.play();
    
    div.innerHTML = "This Is Button " + num;
}


function hide()
{
    div.innerHTML = "";
}