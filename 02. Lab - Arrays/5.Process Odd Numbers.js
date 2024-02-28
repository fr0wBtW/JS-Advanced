const arr = [10, 15, 20, 25];
const arr1 = [3, 0, 10, 4, 7, 3];

function OddNumbers(arr){
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            result.push(arr[i] * 2); 
        }
    }
    return result.reverse();
}
console.log(OddNumbers(arr));
console.log(OddNumbers(arr1));