function ifCalc(e){
    e.preventDefault();
    let numOne = document.querySelector('#fNum').value;
    let Operator = document.querySelector('#Operator').value;
    let numTwo = document.querySelector('#sNum').value;
    console.log(numOne)
    console.log(Operator)
    console.log(numTwo)

    if(Operator == "+"){
        document.getElementById("result").innerHTML = parseInt(numOne) + parseInt(numTwo)
    }

    else if(Operator == "-"){
        document.getElementById("result").innerHTML = parseInt(numOne) - parseInt(numTwo)
    }

    else if(Operator == "*"){
        document.getElementById("result").innerHTML = parseInt(numOne) * parseInt(numTwo)
    }

    else if(Operator == "/"){
        document.getElementById("result").innerHTML = parseInt(numOne) / parseInt(numTwo)
    }
    return false;
}