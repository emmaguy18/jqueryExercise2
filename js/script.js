console.log('hi');

$('#para2').hide();
$('.btn-hide').hide();

$('.btn-show').click(function(){
    $('#para2').slideDown(2000);
    $('.btn-hide').show();
    $('.btn-show').hide();
});

$('.btn-show').click(function(){
    $('#para2').slideUp(2000);
    $('.btn-hide').hide();
    $('.btn-show').show();
});

$('.btn-xtra').click(function(){
  $('ul').append('<li>chips<li>')
});

$('.btn-remove').click(function(){
    $('li').last().remove();
});

$('.btn-light').click(function(){
    $('#para1').css("opacity","0.2");
});

$('.btn-dark').click(function(){
    $('#para1').css("opacity","1");
});

$('#user-name').click(function(){
    $('html,body').animate({
      scrollTop:$("#username").offset().top},1000);
});
