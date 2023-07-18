function inputNum(num){
    var string = document.getElementById("input").value;
    document.getElementById("input").value = string + num;
}
function clearField(){
    document.getElementById("input").value = "";
}
function equalsAns(){
    var ans = document.getElementById("input").value;
    var printAns = eval(ans);
    document.getElementById("input").value = printAns;
}