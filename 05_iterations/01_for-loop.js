//for
for(let i=0;i<=10;i++){
    const element = i;
    if(element == 5){
        console.log("5 is best number");
    }
    //console.log(i);
}

for(let i=1; i<=10;i++){
    console.log(`Outer loop: ${i}`);
    for(let j=1;j<= 10;j++){
       // console.log(`Inner loop: ${j} and Outer loop: ${i} `);
       console.log(i + "x"+ j + "=" + (i*j)); //print table 1 to 10
    }
}

let myArr=["Flash","Bat Man","Super MAn"];
for(let i =0; i < myArr.length;i++){
      console.log(myArr[i]); 
}

//break and continue
for(let i=1;i<=20;i++){
     console.log(`value of i is ${i}`);
    if(i == 5){
      console.log("Detected 5");
      break; // break rest of the loop
    }
}
//continue
for(let i=1;i<=10;i++){
    console.log(`value of i is: ${i}`);
    if(i == 5){
        console.log("Detected 5");
        continue;//skip the 5
    }

}


