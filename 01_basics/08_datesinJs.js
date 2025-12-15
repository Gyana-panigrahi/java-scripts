let myDate=new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString);
console.log(myDate.toJSON());
console.log(myDate.toString);

console.log(typeof(myDate));//object

let myCreatedDate=new Date(2025,11,15);//in js month starts with 0
console.log(myCreatedDate.toString());
console.log(myCreatedDate.toDateString());

let myCreatedDates=new Date(2025,11,15,8,57);
console.log(myCreatedDates.toLocaleString());

let myCreatedYaer=new Date("2025-12-15")//yy-mm-dd
console.log(myCreatedYaer.toLocaleString());

let myCreatedYaers=new Date("12-15-2025")//mm-dd-yy
console.log(myCreatedYaers.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

//methods
let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString("default",{weekday:"long"});












