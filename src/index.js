console.log('Hello Webpack Project....');
var i=0;
document.getElementById("btn_clickme").addEventListener("click", function(event) {
  i++;
  document.getElementById("text").innerText=`Button Click ${i} times.`
});