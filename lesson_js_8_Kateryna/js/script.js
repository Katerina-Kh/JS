$(document).ready(function () {
    let phoneFielgs = $(".phoneInput")
    const btn = $(".button-primary")

    $(btn).click(
        function () {
            sendAjaxForm();
            return false;
        }
    );


    function sendAjaxForm() {
        $.ajax({
            type: "POST",
            url: "../php/mail.php",
            data: "$data",
            dataType: "json",
            beforeSend(xhr) {
                var im = new Inputmask("+38(099) 999 99 99");
                im.mask(phoneFielgs);

                new JustValidate('.js-form', {
                    rules: {
                        name: {
                            required: true,
                            minLength: 5
                        },
                        email: {
                            required: true,
                            email: true
                        },
                        phone: {
                            required: true
                        }
                    },
                    messages: {
                        name: {
                            minLength: "Введіть ваше ім'я"
                        },
                        phone: {
                            required: "Вкажіть ваш номере телефону"
                        }
                    },
                });
            },

            statusCode: {
                404: function () {
                    alert("Спробуй ще.");
                },
                default: function () {
                    alert("Помилка.");
                }
            },
            success: function () {
                alert("Заявка відправлена");
            }
        });
    };

});