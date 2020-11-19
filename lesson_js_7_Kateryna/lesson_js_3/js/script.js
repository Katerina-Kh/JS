$(document).ready(function () {
  
  const box = $(".box");
  let topleft = $(".input-tl");
  let topright = $(".input-tr");
  let bottomleft = $(".input-bl");
  let bottomright = $(".input-br");
  
  
  topleft.change( function (){
    topleftVal = $(topleft).val()
   console.log($(topleft).val())
  box.css("borderTopLeftRadius", (topleftVal) + "%");
 
  $(".vel-tl").text(topleftVal)
  });

  topright.change( function (){
    topRighetVal = $(topright).val()
   console.log($(topright).val())
  box.css("borderTopRightRadius", (topRighetVal) + "%");
 
  $(".vel-tr").text(topRighetVal)
  });

  bottomleft.change( function (){
    bottomleftVal = $(bottomleft).val()
   console.log($(bottomleft).val())
  box.css("borderBottomLeftRadius", (bottomleftVal) + "%");
 
  $(".vel-bl").text(bottomleftVal)
  });

  bottomright.change( function (){
    bottomRighetVal = $(bottomright).val()
   console.log($(bottomright).val())
  box.css("borderBottomRightRadius", (bottomRighetVal) + "%");
 
  $(".vel-br").text(bottomRighetVal)
  });
});

