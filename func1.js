// jQuery sdn-----------------------------------------------

let a = $('.b')
    .css('border', '3px solid red')
    .addClass('some')


console.log(a)

//$('.block')
//.addClass('red')

$('.block').click(function(){
   $(this).css({'backgroundColor' : 'red', 'color':'#fff' , 'padding' : '5px'}); 
});


$('#test').click(function(){
    $(this).css({'backgroundColor' : 'red'});
   $('#menu').css({'display' : 'inline'}); 
});



// jQuery sdn-----------------------------------------------


// Замыкание -------------------------------------------------

//function makeCounter() {
//  let count = 0;
//  return function() {
//    return count++;
////      console.log(count);
//  };
//}
//
//let counter = makeCounter();
//
//console.log(counter());
//console.log(counter());
//console.log(counter());
//console.log(counter());

// Замыкание -------------------------------------------------

// счётчик кликов===========================================

//function makeCounter() {
//  let count = 0;
//  return function() {
//    return count++;
////      console.log(count);
//  };
//}
//
//let counter = makeCounter();
//
//document.body.addEventListener('click', () =>{
//    console.log(counter());
//})

// счётчик кликов===========================================

$('.one').hide('slow');






