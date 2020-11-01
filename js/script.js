 let neme = prompt ("Как вас зовут?");
 let age = prompt ("Сколько вам лет?");

 if (age<16){
     console.log(`Привет ${neme}! Вы подросток!`)
 } else if (age>16 && age<40){
    console.log(`Привeт ${neme}! Вы молодой человек!`)
} else if (age>40){
    console.log(`Привeт ${neme}! Вы старичок!`)
}



