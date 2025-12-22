//for of
// ["", "", ""]
// [{},{},{}]

//for...of =>array/String/map

//1.Array
const arr=[10,20,30,40,50];
for(const item of arr){
    // console.log(item);
}

//2.String
const greetings="Hello Gyana";
for (const greet of greetings) {
    //console.log(`Each char is:${greet}`);
}

//3.Maps:unique key and values
const map=new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "france");
map.set("IN", "India");//duplicate value not added

// console.log(map);

for(const item of map){
    console.log(item);
}
//de-structuring method
for(const [key,value] of map){
    console.log(key, "=>" , value);
}




