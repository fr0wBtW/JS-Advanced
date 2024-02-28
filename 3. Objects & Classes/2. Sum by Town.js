function sumByTown(array){
    var towns = {};

    for(let i = 0; i < array.length; i++){
        let name = array[i++];

    let income = Number(array[i]);

    if(towns.hasOwnProperty(name)){
        towns[name] += income;
    }else{
        towns[name] = income;
    }
    }
    console.log(JSON.stringify(towns));
}
sumByTown(['Sofia','20','Varna','3','Sofia','5','Varna','4'])
