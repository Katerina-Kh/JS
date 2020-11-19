  $(document).ready(function () {

    const nameBox = $(".color-name")

    $(document).on("click", function color(){
      red = Math.floor(Math.random() * 250 + 0);
      green = Math.floor(Math.random() * 250 + 0);
      blue = Math.floor(Math.random() * 250 + 0);
     
      rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      $("body").css("backgroundColor", (rgbColor));

      $(nameBox).text(rgbColor)
  });

    $(document).on("keyup", function color(){
        red = Math.floor(Math.random() * 250 + 0);
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);
       
        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        $("body").css("backgroundColor", (rgbColor));

        $(nameBox).text(rgbColor)
    });


  });