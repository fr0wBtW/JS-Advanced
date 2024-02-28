function lowestPriceInCities(data){
let prices = {};

    data.forEach(element => {
        let [town, product, price] = element.split('|');
        if(!prices[product]){
            prices[product] = {};
        }
        prices[product][town] = Number(price);
    });

    Object.entries(prices).forEach(([product, towns]) => {
        let [town, price] = Object.entries(towns).sort((a, b) => a[1] - b[1])[0];
        console.log(`${product} -> ${price} (${town})`);
    })
}
console.log(lowestPriceInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
));