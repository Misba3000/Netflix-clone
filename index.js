$(document).ready(function(){
    console.log("this is my first jquery code");

    $('.text1').hide();
    $('.text2').hide();
    $('.text3').hide();
    $('.text4').hide();
    $('.text5').hide();
    $('.text6').hide();

// btn class  -> FAQ_title 

$('.FAQ_title1').click(function(){
    //btn click code

    $('.text1').fadeToggle();
});

$('.FAQ_title2').click(function(){
    //btn click code

    $('.text2').fadeToggle();
});

$('.FAQ_title3').click(function(){
    //btn click code

    $('.text3').fadeToggle();
});

$('.FAQ_title4').click(function(){
    //btn click code

    $('.text4').fadeToggle();
});

$('.FAQ_title5').click(function(){
    //btn click code

    $('.text5').fadeToggle();
});
$('.FAQ_title6').click(function(){
    //btn click code

    $('.text6').fadeToggle();
});


});
