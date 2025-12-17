//this-keyword
//1.(this)=>inside function
function show(){
    console.log(this);
}
show();//global object

//2.variable 
function show1(){
    const name="gyana";
    console.log(this.name);
}
show1();//undefined=> name is local variable
//this can't access the local variable

//3.(this) inside the object
const user={
    name:"Gyana",
    greet:function(){
        console.log(this.name);
    }
}
user.greet()//Gyana
//if function called through object then this=object

//4.changing the object reference
const user1={
    userName:"Gyana",
    greet:function(){
        console.log("Hello ",this.userName);
    }
}
const temp=user1;
temp.greet();

//5.object inside this
const user3={
    name:"Gyana",
    address:{
        city:"bbsr",
        showCity:function(){
            console.log(this.city);
        }
    }
}
user3.address.showCity();//bbsr

//6.this function with variable

const user4={
    name:"Gyana",
    greet:function(){
        console.log(this.name);
    }
}
const fun=user4.greet;
fun();//undefined here this=global

//7.this with parameter
const user5={
    name:"Gyana",
    greet:function(msg){
        console.log(msg,this.name);
        
    }
}
user5.greet("hello");//hello Gyana

//Arrow function

// syntax: () =>  { }

const addTwo= (num1,num2)=> {
    return num1+num2;

}
console.log(addTwo(10,20));

//implicit return

//const addThree=(num1,num2,num3) =>  num1+num2+num3
const addThree=(num1,num2,num3) =>  (num1+num2+num3)

const obj=(num1,num2) => ({username:"Gyana"})
console.log(obj(20,30));

console.log(addThree(10,20,30));
