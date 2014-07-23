//hide the text containers
$(".div6,.div7,.div8,.div9,.div10").hide();

//add a click event for each div and call a slideToggle function
//to the target element
$(".div1").click(function(){
    $(".div6").slideToggle();
});

$(".div2").click(function(){
    $(".div7").slideToggle();
});

$(".div3").click(function(){
    $(".div8").slideToggle();
});

$(".div4").click(function(){
    $(".div9").slideToggle();
});

$(".div5").click(function(){
    $(".div10").slideToggle();
});
