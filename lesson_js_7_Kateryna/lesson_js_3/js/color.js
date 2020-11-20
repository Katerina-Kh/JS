$(document).ready(function () {

    const nameBox = $(".color-name")

    function randomColor(){
      red = Math.floor(Math.random() * 250 + 0);
      green = Math.floor(Math.random() * 250 + 0);
      blue = Math.floor(Math.random() * 250 + 0);
     
      rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      $("body").css("backgroundColor", (rgbColor));

      $(nameBox).text(rgbColor)      
    }

    $(".random--color").on("click", randomColor);

    $(document).on("keyup", function (evt){
      if (evt.code == "Space") {
        randomColor()
      }
    });

});