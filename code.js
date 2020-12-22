// test lmao


var jscode = `let startTime;
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


`
const ta = document.getElementById("textmirror")

ta.value = jscode


const codehtml = `<!DOCTYPE html>
<html>

<head>

<title>Cps Test</title>
    <link rel="stylesheet" href="index.css">

  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/lib s/animate.css/3.5.2/animate.min.css"> 


    </head>
<header>
    <center>
    <div style="position: relative; left: 150px;">
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xl-3  swing animated mb-4">
                    <div class="card shadow border-left-primary py-2 "style="height: 125px; width: 250px;">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"style="text-align: center; font-size: 25px;"><span>Cps Total</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"style="text-align: center; font-size: 25px;"><span id="cpst">0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 swing animated mb-4">
                    <div class="card shadow border-left-primary py-2"style="height: 125px; width: 250px;">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"style="text-align: center; font-size: 25px;"><span>Timer</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"style="text-align: center; font-size: 25px;"><span id="timer">0.000</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-xl-3 swing animated mb-4">
                    <div class="card shadow border-left-primary py-2"style="height: 125px; width: 250px;">
                        <div class="card-body">
                            <div class="row align-items-center no-gutters">
                                <div class="col mr-2">
                                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1"style="text-align: center; font-size: 25px;"><span>Cps</span></div>
                                    <div class="text-dark font-weight-bold h5 mb-0"><span id="cps">0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </center>
</header>
<br>
<center>
<div class="col-md-6 col-xl-3 mb-4">
    <div class="card shadow border-left-primary  swing animated py-2 "style="height: 150px; width: 250px; " >
        <div class="card-body">
            <div class="row align-items-center no-gutters " style="border: 50px; ">
                <div class="col mr-2">
                    <div class="text-uppercase text-primary font-weight-bold text-xs mb-1">Duration
                    </div><input type="number" placeholder="Duration(Sec)" id="dur" style="font-size: 15px; text-align: center;"class="border" />
                    <div class="text-dark font-weight-bold h5 mb-0"></div>

                </div><center>
        <button class="Buttonsd" id="sd" onclick="sd()"style="position: relative; left:37.5px; top: 10px;">Set Duration</button>
            </center></div>
        </div>
    </div>
</div>

</center>
    <body><center>
        <button class=" swing animated dis" id="start"onclick="cps()" disabled="disabled" style="position: relative; top:10px; width: 500px; height: 250px; font-size: 75px;">Start</button>
    </center></body>

    <script src="index.js"></script>
    </html>
    `
const tah = document.getElementById("textmirrorhtml")
    tah.innerText = codehtml.trim()


    const codecss = `.progress{
        -webkit-appearance: sliderthumb-horizontal;
        width: 500px;
        height: 50px;
      
      }
      
      
      .btn.btn-primary {
        background: white;
        color: black;
        /*border: green;*/
        /*border-radius: 50px;*/
        width: 100px;
        height: 50px;
        border: 1px solid #007bff;
        -webkit-border-radius: 3px;
        border-radius: 3px;
      }
      .Button {
        display: inline-block;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        cursor: pointer;
        padding: 10px 20px;
        border: 1px solid #018dc4;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font: normal 16px/normal Arial Black, Gadget, sans-serif;
        color: rgba(255,255,255,0.9);
        -o-text-overflow: clip;
        text-overflow: clip;
        background: #0199d9;
        -webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
        box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
        text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;
        -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
      }
      .Buttons {
        display: inline-block;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        cursor: pointer;
        padding: 5px 10px;
        border: 1px solid #018dc4;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font: normal 15px/normal Arial Black, Gadget, sans-serif;
        color: rgba(255,255,255,0.9);
        -o-text-overflow: clip;
        text-overflow: clip;
        background: #0199d9;
        -webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
        box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
        text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;
        -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
      }
      .Buttonf {
        display: inline-block;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        cursor: pointer;
        padding: 10px 20px;
        border: 1px solid #018dc4;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font: normal 16px/normal Arial Black, Gadget, sans-serif;
        color: rgba(255,255,255,0.9);
        -o-text-overflow: clip;
        text-overflow: clip;
        background: #80d9ff;
      
      }
      .japanese{
        background: white;
        padding: 10px;
        font-size: 1.5em;
      }
      .goog-trans-section{
        background: #eee;
        padding:1px;
        border-radius: 5px;
        margin:2.5px 0 10px 0; 
      }
      .goog-trans-control{
        border-bottom-left-radius: 21px;
        padding: 5px;
        background: #eee;
        margin: 10;
      }
       
      
      .border{
        border: 10px;
        border-radius: 10px;
      }
      
      .Buttonsd {
        display: inline-block;
        cursor: url;
        padding: 5px 10px;
        border: 1px solid #018dc4;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: rgba(255, 255, 255, 0.9);
        font: normal 15px/normal Arial Black, Gadget, sans-serif;
        background: #00b3ff;
        -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        border: 10px;
        border-radius: 10px;
      }
      
      .dis {
      
        display: inline-block;
        cursor: url;
        padding: 10px 20px;
        border: 1px solid #018dc4;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: rgba(255, 255, 255, 0.9);
        font: normal 20px/normal Arial Black, Gadget, sans-serif;
        background: #4c636d;
        -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        border: 10px;
        border-radius: 10px;
      }
      
      .Buttonin {
        display: inline-block;
        cursor: url;
        padding: 10px 20px;
        border: 1px solid #018dc4;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        color: rgba(255, 255, 255, 0.9);
        font: normal 20px/normal Arial Black, Gadget, sans-serif;
        background: #00b3ff;
        -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        border: 10px;
        border-radius: 10px;
      }
      .Buttoninf {
        display: inline-block;
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        cursor: pointer;
        padding: 10px 20px;
        border: 3px solid #b9b9b9;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font: normal 16px/normal Arial Black, Gadget, sans-serif;
        color: black;
        -o-text-overflow: clip;
        text-overflow: clip;
        background: #ffffff;
        -webkit-box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
        box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2) ;
        text-shadow: -1px -1px 0 rgba(15,73,168,0.66) ;
        -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
      }
      .Buttont {
        cursor: pointer;
        padding: 10px 20px;
        -webkit-border-radius: 3px;
        border-radius: 3px;
        font: normal 20px/normal Arial Black, Gadget, sans-serif;
        color: rgb(7, 6, 6);
        -o-text-overflow: clip;
        text-overflow: clip;
        text-shadow: -1px -1px 0 rgba(0, 0, 0, 0.66) ;
        -webkit-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -moz-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        -o-transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
        transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1);
      }
      .Text {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        border: none;
        font: normal 60px/1 Arial Black, Gadget, sans-serif;
        color: rgb(240, 244, 252);
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        background: rgb(255,255,255);
        text-shadow: 5px 4px 20px rgba(0,150,255,0.91) ;
      
      }
      .Text1 {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        border: none;
        font: normal 45px/1 Arial Black, Gadget, sans-serif;
        color: rgb(70, 70, 75);;
        background: rgb(255,255,255);
      
      }
      
      .text2 {
        -webkit-box-sizing: content-box;
        -moz-box-sizing: content-box;
        box-sizing: content-box;
        width: 230px;
        padding: 20px;
        overflow: hidden;
        border: none;
        font: normal 45px/1 Arial, Helvetica, sans-serif;
        color: rgba(225, 245, 255);
        text-align: center;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        background: #0199d9;
        -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
        box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3) ;
        text-shadow: 1px 1px 20px rgba(0,255,255,1) ;
        -webkit-transition: font-size 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
        -moz-transition: font-size 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
        -o-transition: font-size 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
        transition: font-size 200ms cubic-bezier(0.42, 0, 0.58, 1) 10ms;
      }`

const tac = document.getElementById("textmirrorcss")

tac.innerText = codecss