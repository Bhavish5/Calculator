function inputNum(num){
    var string = document.getElementById("input").value;
    document.getElementById("input").value = string + num;
}
function clear(){
    document.getElementById("input").value = " ";
}