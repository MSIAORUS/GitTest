const convert_btn = document.getElementById("btnConvert1");
const clear_btn = document.getElementById("btnClear1");
var result = document.getElementById("result");



function conv(e){
    e.preventDefault();
    let txt = document.getElementById("inTxt").value;
    
    let finaltxt = "";
    if(txt === ""){
        alert("please enter at least two words");
        return false;
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





convert_btn.addEventListener("click", conv);
clear_btn.addEventListener("click", clr);









