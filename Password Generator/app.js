const gen = document.getElementById("btnGen");
const clr = document.getElementById("btnClr");
let result = document.getElementById("result");

function generate(e) {
  e.preventDefault();

  const len = document.getElementById("inNum").value;
  
  let finaltxt = "";

  if (finaltxt != "") {
    finaltxt = "";
  }
  let char ="0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*+-";
  let leng = char.length;

  

  for(let i = 0; i<len; i++)
    {
        let formula = Math.floor(Math.random() * (leng - 1))
        finaltxt +=char[formula]
    }
    result.style.visibility = "visible";
    result.innerHTML = finaltxt;
}

function clear() {
    const res = document.getElementById("result").innerHTML;
    const len = document.getElementById("inNum").value;
    if(res != "" || len != "")
        {
            document.getElementById("result").innerHTML = "";
            document.getElementById("inNum").value = "";
        }
}

gen.addEventListener("click", generate);
clr.addEventListener("click", clear);
