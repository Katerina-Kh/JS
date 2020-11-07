document.addEventListener("DOMContentLoaded", function () {

  // !Переменные
  let randomColor = document.querySelector(".random--color");
  let randomProperties = document.querySelector(".random--properties");
  let box = document.querySelector(".box");
  let topleft = document.querySelector(".input-tl");
  let topright = document.querySelector(".input-tr");
  let bottomleft = document.querySelector(".input-bl");
  let bottomright = document.querySelector(".input-br");

  // ! Событие

  // ? Смена цвета

  document.addEventListener("keyup", function (evt) {
    if (evt.code == "Space") {
      red = Math.floor(Math.random() * 250 + 0);
      green = Math.floor(Math.random() * 250 + 0);
      blue = Math.floor(Math.random() * 250 + 0);

      rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      document.body.style.backgroundColor = rgbColor;
    }
  })
  randomColor.addEventListener("click", function () {
        red = Math.floor(Math.random() * 250 + 0);
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);
  
        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.backgroundColor = rgbColor;
  });

  // ? Смена свойства

  topleft.addEventListener("input", function (){
   box.style.bordeTopLeftRadius = topleft.value + "px";
   console.log(topleft.value + "px")
  });


});