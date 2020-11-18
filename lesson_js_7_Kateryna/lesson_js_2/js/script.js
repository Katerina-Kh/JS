$(document).ready(function () {
        let arr = {
        "fruitsEng":["Plum", "Peach", "Pineapple", "Cherry", "Pear", "Apple"],
        "fruitsRus": ["Слива", "Персик", "Ананас", "Вишня", "Груша", "Яблоко"],
        }

    let btnEng = $(".button-eng");
    let btnRu = $(".button-rus");

    btnEng.on("click", function () { 
         $(arr["fruitsEng"]).each(function(index, value){
        console.log(value)
    })     
    });

    btnRu.on("click", function () { 
        $(arr["fruitsRus"]).each(function(index, value){
        console.log(value)    
    })
    });

});