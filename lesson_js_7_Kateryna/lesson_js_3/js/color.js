// document.addEventListener("DOMContentLoaded", function () {

//     // !Переменные
//     let randomColor = document.querySelector(".random--color");
  
//     // ! Событие
  
//     // ? Смена цвета
  
//     document.addEventListener("keyup", function (evt) {
//       if (evt.code == "Space") {
//         red = Math.floor(Math.random() * 250 + 0);
//         green = Math.floor(Math.random() * 250 + 0);
//         blue = Math.floor(Math.random() * 250 + 0);
  
//         rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//         document.body.style.backgroundColor = rgbColor;
//       }
//     })
//     randomColor.addEventListener("click", function () {
//           red = Math.floor(Math.random() * 250 + 0);
//           green = Math.floor(Math.random() * 250 + 0);
//           blue = Math.floor(Math.random() * 250 + 0);
    
//           rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//           document.body.style.backgroundColor = rgbColor;
//     });
  
//   });

  $(document).ready(function () {

    let randomColor = $(".random--color")

    function color() {
        red = Math.floor(Math.random() * 250 + 0);
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);
    }

    $(document).on("keyup", function color(){

    });


  });