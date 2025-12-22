//using map

const myNumbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums=myNumbers
.map( (nums) => nums * 10)
.map( (nums) => nums + 1)
.filter( (nums) => nums >= 40);
console.log(newNums);

//using forEach
const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
myNums.forEach( (nums) => {
   console.log(nums + 10);
})

// map() with objects
const users=[
    {name:"Gyana",age:23},
    {name:"Ram",age:20}
];
const names= users.map( (user) => user.name);
console.log(names);
