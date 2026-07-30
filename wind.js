// Gadget's Empire Wind Effect


const wind =
document.createElement("div");


wind.className="wind-layer";


document.body.appendChild(wind);



let strength=0;


document.addEventListener(
"mousemove",
(e)=>{


strength =
(e.clientX /
window.innerWidth)
*30;


wind.style.opacity =
0.3 + strength/100;


});
