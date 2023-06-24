import "./styles.css";

"use strict";

var app=document.getElementById('app');
var heading=document.getElementById('heading');
var toggleEvent=document.getElementById('toggle-icon');
var toggleChange=document.getElementById('toggle-icon-circle');
var count=0; 
toggleEvent.addEventListener('click',function(event){    
    if(count%2===0){
      toggleChange.style.right="0";
      app.style.backgroundColor="black"
      heading.style.color="white";
      console.log(count);
      count++;
    }
    else{
      toggleChange.style.removeProperty("right");
      app.style.backgroundColor="white";
      heading.style.color="black";
      console.log(count);
      count++;
    }
});