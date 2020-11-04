
    let btnEng = document.querySelector(".button-eng");
    let btnRus = document.querySelector(".button-rus");

    let arr = {
    "fruitsEng":["Plum", "Peach", "Pineapple", "Cherry", "Pear", "Apple"],
    "fruitsRus": ["Слива", "Персик", "Ананас", "Вишня", "Груша", "Яблоко"],
}

btnEng.addEventListener("click", function (){
    arr["fruitsEng"].forEach(function(elem){
        console.log(elem)
    })
});
btnRus.addEventListener("click", function (){
    arr["fruitsRus"].forEach(function(elem){
        console.log(elem)
    })
});