$(document).ready(function () {
        let arr = {
        "fruitsEng":["Plum", "Peach", "Pineapple", "Cherry", "Pear", "Apple"],
        "fruitsRus": ["Слива", "Персик", "Ананас", "Вишня", "Груша", "Яблоко"],
        }

    let btnEng = $(".button-eng");
    let btnRu = $(".button-rus");

    btnEng.on("click", function () {
        console.log(arr["fruitsEng"]);        
    });

    btnRu.on("click", function () {
        console.log(arr["fruitsRus"]);        
    })

});