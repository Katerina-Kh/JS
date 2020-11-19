
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

    const nameBox = $(".color-name")

    $(document).on("click", function color(){
      red = Math.floor(Math.random() * 250 + 0);
      green = Math.floor(Math.random() * 250 + 0);
      blue = Math.floor(Math.random() * 250 + 0);
     
      rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      $("body").css("backgroundColor", (rgbColor));

      $(nameBox).html(rgbColor)
  });

    $(document).on("keyup", function color(){
        red = Math.floor(Math.random() * 250 + 0);
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);
       
        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        $("body").css("backgroundColor", (rgbColor));

        $(nameBox).html(rgbColor)
    });


  });