document.addEventListener("DOMContentLoaded", function () {

  // !Переменные
  let box = document.querySelector(".box");
  let topleft = document.querySelector(".input-tl");
  let topright = document.querySelector(".input-tr");
  let bottomleft = document.querySelector(".input-bl");
  let bottomright = document.querySelector(".input-br");

  // ! Событие

  // ? Смена свойства

  topleft.addEventListener("input", function (){
   box.style.bordeTopLeftRadius = topleft.value + "px";
   console.log(topleft.value + "px")
  });

  topright.addEventListener("input", function (){
    box.style.bordeTopRightRadius = topright.value + "px";
    console.log(topright.value + "px")
   });

   bottomleft.addEventListener("input", function (){
    box.style.bordeBottomLeftRadius = bottomleft.value + "px";
    console.log(bottomleft.value + "px")
   });
   bottomright.addEventListener("input", function (){
    box.style.bordeBottomRightRadius = bottomright.value + "px";
    console.log(bottomright.value + "px")
   });
   
});