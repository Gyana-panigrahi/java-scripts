# project related to DOM

## project link
 [Click here] (https://stackbliz.com/edit/dom-project-chaiaurcode?file=index.html)

 # Solution code

 ## project 1

 ```javascript
 console.log("Gyana");
           
                            SOLUTION-CODE
 -------------------------------------------------------------------------

 const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach(function(button) {
  button.addEventListener("click", function(e) {

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }

  });
});
 ```
 ## project 2 solution :

 ```javascript

const  form=document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const result=document.querySelector(".result");
  if(isNaN(height) || height < 0){
    result.innerHTML=`please input a valid ${height}`
  }else if(isNaN(weight) || weight< 0){
    result.innerHTML=`please inut valid ${weight}`;
  }else{
     const bmi = (weight / ((height*height)/10000)).toFixed(2);
    result.innerHTML=`<span>${bmi}</span>`;
  }
})
  
 
 
 
 ```
