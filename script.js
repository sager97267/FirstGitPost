function colorChange(){
let r= Math.floor(Math.random()*256);
let g= Math.floor(Math.random()*256);
let b= Math.floor(Math.random()*256);
return `rgb(${r},${g},${b})`
}


let letters=document.querySelectorAll(".letter");

setInterval(function(){
    for(let letter of letters){
        letter.style.color=colorChange();
    }
},1000)

