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
  let boxRandom = document.querySelector(".box_random")
  let nameColor = document.querySelector(".color-name")

  document.addEventListener("keyup", function (evt) {
    if (evt.code == "Space") {
      red = Math.floor(Math.random() * 250 + 0);
      green = Math.floor(Math.random() * 250 + 0);
      blue = Math.floor(Math.random() * 250 + 0);

      rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
      boxRandom.style.backgroundColor = rgbColor;
    };

    nameColor.textContent = rgbColor
  });
  randomColor.addEventListener("click", function () {
    red = Math.floor(Math.random() * 250 + 0);
    green = Math.floor(Math.random() * 250 + 0);
    blue = Math.floor(Math.random() * 250 + 0);

    rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    boxRandom.style.backgroundColor = rgbColor;

        nameColor.textContent = rgbColor
  });
  

 // ! Смена свойства
 let box = document.querySelector(".box_radius");
 let topleft = document.querySelector(".input-tl");
 let topright = document.querySelector(".input-tr");
 let bottomleft = document.querySelector(".input-bl");
 let bottomright = document.querySelector(".input-br");

 topleft.addEventListener("input", function (){
  box.style.borderTopLeftRadius = topleft.value + "%";
  console.log(topleft.value + "%")
 });

 topright.addEventListener("input", function (){
   box.style.borderTopRightRadius = topright.value + "%";
   console.log(topright.value + "%")
  });

  bottomleft.addEventListener("input", function (){
   box.style.borderBottomLeftRadius = bottomleft.value + "%";
   console.log(bottomleft.value + "%")
  });
  bottomright.addEventListener("input", function (){
   box.style.borderBottomRightRadius = bottomright.value + "%";
   console.log(bottomright.value + "%")
  });
  
  // ! Форма
  let phoneFielgs = document.querySelectorAll(".phoneInput")
  var im = new Inputmask("+38(099) 999 99 99");
  im.mask(phoneFielgs);

  new JustValidate('.js-form', {
      rules: {
      name: {
          required: true,
          minLength: 5
      },
      email:{
          required:true,
          email: true
      },
      phone:{
          required:true
      }
      },
      messages: {
          name: {
              minLength: "Введіть ваше ім'я"
          },
          phone:{
              required:"Вкажіть ваш номере телефону"
          }
      },

      submitHandler: function (form) {
          let xhr = new XMLHttpRequest();

          xhr.open("POST","php/mail.php", true)

          let formData = new FormData(form);

          xhr.addEventListener("load", function(){
              if(xhr.readyState === 4){
                  switch (xhr.status){
                      case 200:
                          console.log ("Форма відправлена");
                          form.reset();
                          break;
                      case 404:
                          console.log ("Не вийшло");
                          form.reset();
                          break;
                      default:
                          console.log ("Помилка");
                          break;
                  }
              }
          })
          xhr.send(formData)

      },
  });
});