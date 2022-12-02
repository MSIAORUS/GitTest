const btnConvert = document.getElementById("btnConvert");
const btnClear = document.getElementById("btnClear");
let result = document.getElementById("result");


function conv(){
    let txt = document.getElementById("inTxt").value;
    let finaltxt = "";
    if(txt === ""){
        alert("at least two words required");
    }
    else{
        txt = txt.toLowerCase();
        for(let i = 0; i < txt.length; i++){
            if(txt[i] === " "){
                finaltxt += txt[i + 1].toUpperCase();
                i++;
            }
            else{  
                finaltxt += txt[i];
            }
        }
        
        result.style.visibility = "visible";
        result.innerHTML = finaltxt;
    }
}


function clr(){
    const txt = document.getElementById("inTxt").value;
    const res = document.getElementById("result").value;

    if(txt != "" || res != ""){
        document.getElementById("inTxt").value = "";
        document.getElementById("result").innerHTML = "";
    }
}

btnConvert.addEventListener("click",conv);
btnClear.addEventListener("click", clr);







