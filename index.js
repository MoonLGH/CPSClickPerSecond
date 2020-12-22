let startTime;
let duration = document.getElementById("dur").value
let isbruh;
let change = false;
let reseted;

function cps(){
    const cps = document.getElementById("cps")
    let duration = document.getElementById("dur").value

    reset()
    
    const cpst = document.getElementById("cpst")    
    
    var timerTxt = document.getElementById("timer");
if(timerTxt.innerText == "0.000"){
    isbruh = true
}else{
    cpst.innerText++

    var start = document.getElementById("start");

    start.innerText = "Click MEEEE!!"
}
    if(timerTxt.innerText == duration+".000"){
          
        startTime = new Date().getTime();
    
        var timerId = setInterval(function() {
    
            var total = (new Date().getTime() - startTime) / 1000;
        
            if (total < duration) {

              timerTxt.textContent = total.toFixed(3);
    
          cps.textContent = (cpst.innerText / total).toFixed(2);

            }else {

             clearInterval(timerId);
                
             endGame()

              }
    
            }, 1);

    }else{

    }

}


function reset(){

if(reseted === false){
    cpst.innerText = "0"

    reseted = true
}else if(reseted === true){

}}

function sd(){
    let duration = document.getElementById("dur").value

    console.log(duration)

    var timerTxt = document.getElementById("timer");

    var start = document.getElementById("start");
    var sd = document.getElementById("sd");
    const cps = document.getElementById("cps")


if(change === false){
if(duration == "0" || duration == "") return

else{
    timerTxt.innerText = duration+".000"
    let durationtxt = document.getElementById("dur")
    durationtxt.disabled = "disabled"
    start.classList.remove("dis")
    start.classList.add("Buttonin")
    start.disabled = false;
    sd.innerText = "Change"
    sd.style.left = "57.5px"

    change = true;
}}else if(change === true){

    timerTxt.innerText = "0.000"
    let durationtxt = document.getElementById("dur")
    durationtxt.disabled = false;
    start.classList.remove("Buttonin")
    start.classList.add("dis")
    start.disabled = true;
    sd.innerText = "Set Duration"
    sd.style.left = "37.5px"
    cpst.innerText = "0"
    cps.innerText = "0"

change = false;
}
}

function endGame() {
    const cpst = document.getElementById("cpst")


    let duration = document.getElementById("dur").value

    var timerTxt = document.getElementById("timer");

    timerTxt.innerText = duration + ".000" 

    var clicsBySeconds = (cpst.innerText / duration).toFixed(2);

if(timerTxt.innerText == "0.000"){
    return
}else{
    var start = document.getElementById("start");

    start.innerText = "Start"
    alert("cps = "+ clicsBySeconds)


    reseted = false;
}
}   

