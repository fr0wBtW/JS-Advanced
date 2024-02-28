function populationsInTowns(array){
let towns = {};

    for(let townString of array){
        let[name, population] = townString.split(' <-> ');
        population = Number(population);

        if(towns[name] != undefined){
            population += towns[name];
        }
        towns[name] = population;
    }

    for(let town in towns){
        console.log(`${town} : ${towns[town]}`);
        }
    }

    console.log(populationsInTowns(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']));