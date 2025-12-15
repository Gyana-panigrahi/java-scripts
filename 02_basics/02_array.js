const marvel_heros=["thor","Ironman","spiderman"];
const dc_heros=["superman","batman","flash"]

marvel_heros.push(dc_heros);
console.log(marvel_heros);
console.log(marvel_heros[3][1]);

const allHeros=marvel_heros.concat(dc_heros);
console.log(allHeros);

const allNewHeros=[...marvel_heros,...dc_heros];
console.log(allNewHeros);

const arr=[1, 2, 3, [ 4, 5, 6 ], 7, [6, 7, [ 4, 5 ]]];
const real_anoter_array=arr.flat(Infinity);
console.log(real_anoter_array);

console.log(Array.isArray("Gyana"));
console.log(Array.from("Gyana"));
console.log(Array.from({name:"Gayna"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));

