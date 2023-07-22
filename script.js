function inputNum(num){
    var string = document.getElementById("input").value;
    document.getElementById("input").value = string + num;
}
function clearInput(){
    document.getElementById("input").value = " ";
}
function equalsTo(){
    var ans = eval(document.getElementById("input").value);
    document.getElementById("input").value = ans;
}
function isNumber(evt){
    var inputChar = (evt.which) ? evt.which : evt.keyCode;
    if(inputChar>=40&&inputChar<=57)
        return true;
    else if(inputChar=='13')
        equalsTo();
    return false;
}