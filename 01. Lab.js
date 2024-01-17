//1.String Length
function stringLength(arg1, arg2, arg3){
    let sumLength;
    let averageLength;

   let firstArgumentLength = arg1.length;
   let secondArgumentLength = arg2.length;
   let thirgArgumentLength = arg3.length;

   sumLength = firstArgumentLength + secondArgumentLength + thirgArgumentLength;
   averageLength = Math.floor(sumLength /3);

   console.log(sumLength);
   console.log(averageLength);
}

//2.Math Operations
function solve(number1, number2, operator){
    const cases = {
        '+': function(a, b) { return a + b;},
        '-':function(a, b) {return a - b;},
        '*':function(a, b) {return a * b;},
        '/':function(a, b) {return a / b;},
        '**':function(a, b) {return a ** b;},
    };
    console.log(cases[operator] (number1, number2));
}

//3.Sum of numbers from n to m
function sumOfNumbers(n, m){
    let num1 = Number(n);
    let num2 = Number(m);
    let result = 0;

    for(let i = num1; i <= num2; i++){
    result += i;
    }
    return result;
}


//Largest Number
function largestNumber(... largestNumber){
    return `The largest number is ${Math.max(...largestNumber)}.`
}


//Circle Area
function circleArea(circleInput){
   let circleInputType = typeof(circleInput)

 if(circleInputType === 'number'){
    result = Math.pow(circleInput, 2) * Math.PI;
    console.log(result.toFixed(2));
 }
 else{
    console.log(`We can not calculate the circle area, because we receive a ${circleInputType}.`)
 }
}

//Day Of Week
function dayOfWeek(day){
    const days = {
        'Monday': 1,
        'Tuesday': 2,
        'Wednesday': 3,
        'Thursday': 4,
        'Friday': 5,
        'Saturday': 6,
        'Sunday': 7
    }
    return days[day] || 'error'
}

//Aggregate Elements
function aggregateElements(elemenets){
    const sum = elemenets.reduce((a, b) => Number(a) + Number(b));
    const sumInverseValues = elemenets.reduce((a, b) => Number(a) + 1 / Number(b), 0);
    const concat = elemenets.join('');

    console.log(sum);
    console.log(sumInverseValues);
    console.log(concat);
}
aggregateElements([5,10,20])
