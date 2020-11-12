document.addEventListener("DOMContentLoaded", function () {

    // ! Вкладки
    let tabsContent = document.querySelectorAll(".tab-content");
    let tabsControl = document.querySelectorAll(".tab__item");

    tabsControl.forEach( function (elem) {
        elem.addEventListener("click",function () {
            showTabContent(elem.dataset.tabnumber);
            tabsControl.forEach(elem => {
                elem.classList.remove("tab__item--active")
            });
            this.classList.add("tab__item--active")
        });
    });

    function hideTabsContent () {
        for (let i = 1; i < tabsContent.length; i++) {
            tabsContent[i].classList.add("tab--hidden");   
        }
    };

    hideTabsContent ()

    function showTabContent(tabnumber) {
        for (let i = 0; i < tabsContent.length; i++) {
            tabsContent[i].classList.add("tab--hidden");   
        }
        tabsContent[tabnumber -1] .classList.remove("tab--hidden");
        
    };

    // !  Смена цвета
  let randomColor = document.querySelector(".random--color");
  let boxRandom = document.getElementsByClassName(".box_random")
  let nameColor = document.querySelector(".color-name")

  document.addEventListener("keyup", function (evt) {
    if (evt.code == "Space") {
      red = Math.floor(Math.random() * 250 + 0);
      green = Math.floor(Math.random() * 250 + 0);
      blue = Math.floor(Math.random() * 250 + 0);

      rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      boxRandom.style.backgroundColor = rgbColor;
    }
  });
  randomColor.addEventListener("click", function () {
    red = Math.floor(Math.random() * 250 + 0);
    green = Math.floor(Math.random() * 250 + 0);
    blue = Math.floor(Math.random() * 250 + 0);

    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    boxRandom.style.backgroundColor = rgbColor;
  });
  

 // ! Смена свойства
 let box = document.querySelector(".box");
 let topleft = document.querySelector(".input-tl");
 let topright = document.querySelector(".input-tr");
 let bottomleft = document.querySelector(".input-bl");
 let bottomright = document.querySelector(".input-br");

 topleft.addEventListener("input", function (){
  box.style.borderTopLeftRadius = topleft.value + "px";
  console.log(topleft.value + "px")
 });

 topright.addEventListener("input", function (){
   box.style.borderTopRightRadius = topright.value + "px";
   console.log(topright.value + "px")
  });

  bottomleft.addEventListener("input", function (){
   box.style.borderBottomLeftRadius = bottomleft.value + "px";
   console.log(bottomleft.value + "px")
  });
  bottomright.addEventListener("input", function (){
   box.style.borderBottomRightRadius = bottomright.value + "px";
   console.log(bottomright.value + "px")
  });
  








});