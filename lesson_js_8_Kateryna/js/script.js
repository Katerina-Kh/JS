$(document).ready(function () {
    let phoneFielgs = $(".phoneInput")

    var im = new Inputmask("+38(099) 999 99 99");
    im.mask(phoneFielgs);

    $(".form").on("submit", function (evt) {
            evt.preventDefault();
            const formData = $(this).serialize();
            $.ajax({
                type: "POST",
                url: "../php/mail.php",
                data: formData,
                success: function (response) {
                   alert("Заявка відправлена");  
                }
            });
        });
});