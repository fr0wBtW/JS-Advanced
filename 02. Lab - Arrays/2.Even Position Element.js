function EvenPositionElement(arr){
let myArr = [];

    for(let i = 0; i < arr.length; i++){
        if(i % 2 == 0){
           myArr = myArr + arr[i] + ' ';
        }
    }
    return myArr;
}
console.log(EvenPositionElement(['20', '30', '40']));
console.log(EvenPositionElement(['5', '10']));