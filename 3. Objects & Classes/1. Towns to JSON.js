const input = ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'];

function townsToJson(input){
   let towns = [];

   for(let i = 1; i < input.length; i++){
    let[town, latitude, longtitude] = input[i].split('|').filter(e => e !== '').map(e => e.trim());
   

   towns.push({
    Town: town,
Latitude: Number(latitude),
Longtitude: Number(longtitude)
});
   }
console.log(JSON.stringify(towns));
}

townsToJson(input);