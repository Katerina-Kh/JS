document.addEventListener("DOMContentLoaded", function () {
    let phoneFielgs = document.querySelectorAll(".phoneInput")
    var im = new Inputmask("+38(099) 999 99 99");
    im.mask(phoneFielgs);

    new JustValidate('.js-form', {
        rules: {
         name: {
             required: true,
             minLength: 2
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

            xhr.open("POST","mail.php", true)

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