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
