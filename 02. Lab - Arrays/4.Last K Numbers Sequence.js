function Numbers(n, k){
    result = [1];

    for(let i =  1; i < n; i++){
       let element = 0;
       for(let j = i - k; j < i;j++){
        element += result[j] ? result[j] : 0;
       }
       result.push(element);
    }
    return result;
}

console.log(Numbers(8, 2));