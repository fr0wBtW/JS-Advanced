function GreatestCommonDivisor(num1, num2){
const smallNumber = Math.min(num1, num2);
let gcd = 1;   

        for(let i = 1; i <= smallNumber; i++){
        if(num1 % i == 0 && num2 % i == 0){
        gcd = i;
        }   
    }
    console.log(gcd);
}
GreatestCommonDivisor(15, 3)