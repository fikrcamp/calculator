function calculator(number1,number2,operator){
    if(operator =="+"){
        return`${number1+number2}`
    }else if (operator =="-") {
        return`${number1-number2}`
    }else if (operator =="*") {
        return`${number1*number2}`
    }else if (operator =="/") {
        return`${number1/number2}`
    }else if (operator =="%") {
        return`Invalid operator`
    }
    else {
        return`there is no operator`
    }
}
addition = calculator(2,3,"+");
console.log(addition)
substraction= calculator(5,3,"-");
console.log(substraction)
multiplication = calculator(2,3,"*");
console.log(multiplication)
division = calculator(3,3,"/");
console.log(division)
out_of = calculator(3,3,"%");
console.log(out_of)

