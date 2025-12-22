const arr=["js","rb","py","java","cpp"];
const values=arr.forEach( (item) =>{
    //console.log(item);
    return item;
})
console.log(values);//undefined: forEach never returned value

//filter() : return values
//sort arrow notation: 
const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNums1=myNums.filter( (item)=> item>5);
console.log(newNums1);

// Using filter: when curly braces {} are used in an arrow function,
// the return keyword is mandatory
const newNums = myNums.filter((num) => {
    return num > 4;
});
//console.log(newNums);

//using forEach
const myNum=[10,20,30,40,50,60];
const arrs=[];

myNum.forEach( (num) =>{
    if(num >20){
        arrs.push(num); 
    }
})
//console.log(arrs);
const books = [
    { title: "Book One", genre: "fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "non-fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "history", publish: 1999, edition: 2015 },
    { title: "Book Four", genre: "science", publish: 2005, edition: 2019 },
    { title: "Book Five", genre: "fiction", publish: 2010, edition: 2020 },
    { title: "Book Six", genre: "fantasy", publish: 1987, edition: 2011 },
    { title: "Book Seven", genre: "biography", publish: 1995, edition: 2012 },
    { title: "Book Eight", genre: "technology", publish: 2018, edition: 2023 },
    { title: "Book Nine", genre: "history", publish: 2001, edition: 2016 }
];


let userBooks=books.filter( (bk) =>bk.genre === "history");
let userBooks1=books.filter( (bk) =>{
    return bk.publish >= 1995 && bk.genre === "history"
});
// console.log(userBooks);
console.log(userBooks1);

// example: 
const number=[1,2,3,4,5,6];

const eveNums= number.filter( (nums) => {
    return nums % 2 === 0;
})
console.log(eveNums);

// using forEach()

const numbers=[1,2,3,4,5,6];
numbers.forEach( (element) => {
    if(element % 2 === 0){
        console.log(element);
    }
})

const num1=[1,2,3,4];
const result= num1.filter( (nums) => nums>10);
console.log(result);// [] => filter always return new array
console.log(num1);// [1, 2, 3, 4] (original unchanged)








