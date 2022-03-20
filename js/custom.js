
let x=0;
function getfunc() {
    //newvalue=previousvause+1

    
    // add = x + 1;
    x= x + 100;
    document.getElementById('paragraph').innerHTML = x;
    // document.getElementById("paragraph").style.display = "block";
}
   

function resetfunc(){
     x=0;
    document.getElementById('paragraph').innerHTML = x;
}
function decfunc(){
    x = x - 1;
    document.getElementById('paragraph').innerHTML = x;
}


// square function code
function squarefunc(){
    var y,z;
    var y = document.getElementById('number').value;
    z= y*y;
    document.getElementById('result').innerHTML = z;
}
function addvalue(){
    var firstvalue,secondvalue,addresult;
    var firstvalue = document.getElementById('firstbox').value;
    var secondvalue = document.getElementById('secondbox').value;
    
    addresult = firstvalue + secondvalue;
    document.getElementById('finalresult').innerHTML = addresult;
}
function mulvalue(){
    var firstvalue,secondvalue,addresult;
    var firstvalue = document.getElementById('firstbox').value;
    var secondvalue = document.getElementById('secondbox').value;
    addresult = firstvalue * secondvalue;
    document.getElementById('finalresult').innerHTML = addresult;
}
function subvalue(){
    var firstvalue,secondvalue,addresult;
    var firstvalue = document.getElementById('firstbox').value;
    var secondvalue = document.getElementById('secondbox').value;
    addresult = firstvalue - secondvalue;
    document.getElementById('finalresult').innerHTML = addresult;
}
function divvalue(){
    var firstvalue,secondvalue,addresult;
    var firstvalue = document.getElementById('firstbox').value;
    var secondvalue = document.getElementById('secondbox').value;
    addresult = firstvalue / secondvalue;
    document.getElementById('finalresult').innerHTML = addresult;
}