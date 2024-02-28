biggestElement = (matrix = []) => {
    return Math.max(...matrix.map((row) => Math.max(...row)));
}
console.log(biggestElement(
    [[20, 50, 10],
    [8, 33, 145]]
   ));