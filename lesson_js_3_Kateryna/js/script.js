document.addEventListener("DOMContentLoaded", function(){

    // !Переменные
    let randomColor = document.querySelector(".random--color");
    let randomProperties = document.querySelector(".random--properties");

    // ! Событие

      // ? Смена цвета
    randomColor.addEventListener("click", function(){

        red = Math.floor(Math.random() * 250 + 0 );
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);
    
        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.backgroundColor = rgbColor;

        document.addEventListener("keydown", function (evt){
          if (evt.code == "Space"){
           
        red = Math.floor(Math.random() * 250 + 0 );
        green = Math.floor(Math.random() * 250 + 0);
        blue = Math.floor(Math.random() * 250 + 0);
    
        rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        document.body.style.backgroundColor = rgbColor;
          }
        })
      });
    // ? Смена свойства

});
    

