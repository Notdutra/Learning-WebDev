function recursiva(num) {
  if (num > 11290) return; //! 11290 é o limite, se colocar 11291 quebra
  console.log(num);
  num++;
  recursiva(num);
}

let num = 1;
recursiva(num);
