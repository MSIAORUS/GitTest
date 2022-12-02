const btnConvert = document.getElementById("btnConvert");
const btnClear = document.getElementById("btnClear");
let result = document.getElementById("result");

let finalnum = ""
function conv(){
    let num = document.getElementById("inNum").value;

    if(num === ""){
        document.getElementById("error").innerHTML = "please input number.";
    }
    else if(!(num>="0" && num<="9")){
        document.getElementById("error").innerHTML = "please input a positive number.";
    }
    else{
        finalnum = Number(num).toString(2);
    }
    result.style.visibility = "visible";
    result.innerHTML = finalnum;
}


function clr(){
    const num = document.getElementById("inNum").value;
    const res = document.getElementById("result").value;

    if(num != "" || res != ""){
        document.getElementById("inNum").value = "";
        document.getElementById("result").innerHTML = "";
    }
}


btnConvert.addEventListener("click", conv);
btnClear.addEventListener("click", clr);



















