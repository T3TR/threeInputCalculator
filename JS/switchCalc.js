
function switchCalc(e){

    e.preventDefault();
    let numOne = document.getElementById("fNum").value;
    let Operator = document.getElementById("Operator").value;
    let numTwo = document.getElementById("sNum").value;
    console.log(numOne)
    console.log(Operator)
    console.log(numTwo)

    switch( Operator){
        case "+" :
            document.getElementById("result").innerHTML = parseInt(numOne) + parseInt(numTwo)
            break;

        case "-" :
            document.getElementById("result").innerHTML = parseInt(numOne) - parseInt(numTwo)
            break;

        case "*" :
            document.getElementById("result").innerHTML = parseInt(numOne) * parseInt(numTwo)
            break;

        case "/" :
            document.getElementById("result").innerHTML = parseInt(numOne) / parseInt(numTwo)
            break;

        default:
            document.getElementById("result").innerHTML = "Invalid inputs, please use whole numbers followed by one of the 4 operators: +, -, *, /."

    }
    return false;

}
