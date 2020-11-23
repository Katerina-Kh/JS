document.addEventListener("DOMContentLoaded", function () {

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
    });
});