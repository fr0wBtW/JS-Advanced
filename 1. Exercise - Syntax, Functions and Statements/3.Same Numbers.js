function SameNumbers(numbers){
    const numAsText = numbers.toString();    
    let same = true;
    let sum = 0;

    for(let i = 0; i < numAsText.length; i++){
        if(i < numAsText.length - 1){
            if(numAsText[i] != numAsText[i + 1]){
                same = false;
            }
        }
        sum += Number(numAsText[i]);
    }
    console.log(same);
    console.log(sum);
}
SameNumbers(2222222);