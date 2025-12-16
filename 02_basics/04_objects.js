const tinderUser= new Object();//singleton object
const tinderUsers={};
tinderUser.id="123abc";
tinderUser.name="Gyana";
tinderUser.isLogin=false;
console.log(tinderUser);


const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Gyanaswarup",
            lastname:"Panigrahi"
        }
    }

};
console.log(regularUser.fullname.userfullname.firstname);
const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj3={5:"a",6:"b"};
const obj4=Object.assign({},obj1,obj2,obj3);
console.log(obj4);

const obj5={...obj1,...obj2,...obj3}
console.log(obj5);

const users=[
      {id:1, email:"something@gmail.com"},
      {id:2, email:"something@gmail.com"},
      {id:3,email:"something@gmail.com"},
];
console.log(users[0].email);

console.log(users);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty("isLogin"));



