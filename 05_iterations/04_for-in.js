
//for...of => Key/Index
// 1.object
const myObject={
    js: "javascript",
    cpp: "c++",
    rb: "rubby",
    swift: "swift by apple"
}

for (const key in myObject) { 
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

//2.Array
const arr=["js","rb","py","java","cpp"];

for(const key in arr){
    // console.log(arr[key]);  
}

const map=new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "france");
map.set("IN", "India");

// for(const [key,value]  in map){
//     console.log([key, ":-", value]);//maps are not iteratable
// }