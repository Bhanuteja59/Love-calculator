
var final = document.querySelector(".btn");

function fun() {
  var first = document.querySelector(".input1").value;
  var second = document.querySelector(".input2").value;
  var loader = document.querySelector("custom-loader");
  
  if (first.trim() == "") {
    alert("Enter Your Name ");
  } 
  else if (second.trim() == "" ){
     alert("Enter your partner  ")
  }
  
  else {
    let x = Math.floor(Math.random() * 60 + 15);
    var ele = document.querySelector(".para"),
      one = document.querySelector(".div3"),
      start = 0;
    var progress = setInterval(() => {
      start++;
      console.log(start);
      document.querySelector(".inside").innerHTML = start + " %";
      one.style.background = `conic-gradient(deeppink ${start * 3.6}deg, pink 0deg)`;

      if (start == x) {
        clearInterval(progress);
      }
    }, 50);
  }
}
