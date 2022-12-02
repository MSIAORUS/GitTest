function bmiresult(){
    let w = document.getElementById("weight1").value;
    let height = document.getElementById("height1").value;
    let result1 = w/(height*height)
    let result2 = result1.toPrecision(3)
    document.getElementById("display").innerHTML = result2;
}


function FtToMeter(){
    let ft = document.getElementById("foot").value;
    document.getElementById("displaying-meter").innerHTML = ft *0.304;
}





