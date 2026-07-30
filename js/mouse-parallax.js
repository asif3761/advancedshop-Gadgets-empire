// Mouse controlled depth effect


document.addEventListener(
"mousemove",
(e)=>{


const x =
(e.clientX /
window.innerWidth - .5);


const y =
(e.clientY /
window.innerHeight - .5);



document.querySelectorAll(
".parallax"
)
.forEach(item=>{


item.style.transform =
`
translate(
${x*20}px,
${y*20}px
)
rotateX(${y*5}deg)
rotateY(${x*5}deg)
`;

});


});
