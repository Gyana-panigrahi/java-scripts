const arr=["js","rb","py","java","cpp"];
arr.forEach( function (value){
    console.log(value);
})
arr.forEach( (item)=>{
    console.log(item);
})

function printMe(item){
    console.log(item);
}



arr.forEach( (item,index,arr) => {
    console.log(item,index,arr);
})

const myCoding=[
    {
        languageName: "javascript",
        languageFile: "js"
    },
    {
        languageName: "java",
        languageFile: "java"
    },
    {
        languageName: "python",
        languageFile: "py"
    }
];

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
})
