// switch syntax:
/*
switch(key){
    case value:
        break;
    default:
        break;
}
*/

// using if-else
const month = 1;
if(month === 1){
    console.log("January");
}else if(month === 2){
    console.log("February");
}else if(month === 3){
    console.log("March");  
}else{
    console.log("Invalid month");
}

// using switch
const months = 3;
switch(months){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    default:
        console.log("Invalid month");
}

// using String
const day = "sat";
switch(day){
    case "mon":
        console.log("Monday");
        break;
    case "tues":
        console.log("Tuesday");
        break;
    case "wed":
        console.log("Wednesday");
        break;
    case "thu":
        console.log("Thursday");
        break;
    case "fri":
        console.log("Friday");
        break;
    case "sat":
    case "sun":
        console.log("Holiday");
        break;
    default:
        console.log("Invalid day");
}
