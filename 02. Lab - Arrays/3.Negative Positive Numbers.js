function NegativePositiveNumbers(arr){
const result = [];

for(const num of arr){
    if(Number(num) < 0){
        result.unshift(num);
    }
    else
    {
        result.push(num);
    }
}
return result.join('\n');
}

console.log(NegativePositiveNumbers([3, -2, 0, -1]));