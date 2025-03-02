const minusBtn = document.getElementById("btn-");
const resetBtn = document.getElementById("btn0");
const plusBtn = document.getElementById("btn+");

const num = document.getElementById("num");

var x = 0;

minusBtn.addEventListener("click", function (e) {
  x--;
  num.innerHTML = x;
});

resetBtn.addEventListener("click", function (e) {
    x=0;
  num.innerHTML = 0;
});

plusBtn.addEventListener("click", function (e) {
  x++;
  num.innerHTML = x;
});
