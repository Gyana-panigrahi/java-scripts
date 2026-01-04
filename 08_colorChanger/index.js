const button= document.querySelectorAll(".button");
const body=document.querySelector("body");

button.forEach(function(button){
  button.addEventListener("click", function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==="grey"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="pink"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="red"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="purple"){
      body.style.backgroundColor=e.target.id;
    }
    if(e.target.id==="yellow"){
      body.style.backgroundColor=e.target.id;
    }
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor="grey";
        break;
         case "pink":
        body.style.backgroundColor="pink";
        break;
         case "red":
        body.style.backgroundColor="red";
        break;
         case "purple":
        body.style.backgroundColor="purple";
        break;
         case "yellow":
        body.style.backgroundColor="yellow";
        break;

    }

  })
})