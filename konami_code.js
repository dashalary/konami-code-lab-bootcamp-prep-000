const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener("keydown", (event) => {
    
debugger
let index = 0;
 const key = event.key;
 if (key === codes[index]) {
   index++;
   
    if (index === codes.length) {
      alert("Hurray!");
 
      index = 0;
    
  } else {
    index = 0;
  }
}
)
}