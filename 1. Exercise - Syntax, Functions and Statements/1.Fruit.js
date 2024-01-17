function buyFruit(type, weight, price){
    let weightInKilograms = Number(weight) / 1000;
    let priceMultipliedByKilos = weightInKilograms * price;

    console.log('I need $' + priceMultipliedByKilos.toFixed(2) + ' to buy ' + weightInKilograms.toFixed(2) + ' kilograms ' + type + '.');
}
buyFruit('orange', 2500, 1.80);