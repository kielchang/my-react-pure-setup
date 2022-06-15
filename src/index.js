import calc from "./calc";

console.log("Hello Webpack Project....");
let i = 0;
document.getElementById("btn_clickme").addEventListener("click", () => {
  i += 1;
  document.getElementById("text").innerText = `Button Click ${i} times.`;
});

console.log(calc(20, 5));
