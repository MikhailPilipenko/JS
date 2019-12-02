// function sum(p1, p2){
//     return p1+p2;
// }
// console.log(sum(12, 13));
// let sum1=sum(11, 12);
// console.log(sum1);

// function s(){
//     console.log(arguments);
// }
// s(1);
// s(2);
// s(3);

// function q(){
// let sum=0;
//     for(let i=0; arguments.length>i; i++){
//         sum=sum+arguments[i];
//     }
//         return sum;
// }
// console.log(q(1,2,3));

// function square(radius){
//    // s=2*PI
//     return Math.PI * (radius*radius);
// }
// function v(h){
//     const s = square(17);
//     return Math.ceil(s * h);
// }
// const volume = v(3);
// console.log(volume);



// // Запрос на сервер несовременный

// let xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://randomuser.me/api/', false);

// try {
//   xhr.send();
//   if (xhr.status != 200) {
//     alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
//   } else {
//     alert(xhr.response);
//   }
// } catch(err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
//   alert("Запрос не удался");
// }



// // Запрос на сервер современный

// fetch('https://randomuser.me/api/')
//   .then(function(respons){
//     return respons.json()
// })
// .then(function(a){
//       console.log(a)
//       })
//__________________________________________________________________
//  function httpGet(url){
//   return new Promise(function(resolve, reject){
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);

//     xhr.onload = function(){
//       if (this.status == 200){
//         resolve(this.response)
//       }else{
//         let error = new Error(this.statusText);
//         error.code = this.status;
//         reject(error);
//       }
//     };
    
//     xhr.onerror = function() {
//       reject(new Error("Network Error"));
//     };
//     xhr.send();
//   });

//  }

//  let a = httpGet('https://randomuser.me/api/');
//  a
//  .then(
//   response => alert(`Fulfilled: ${response}`),
//   error => alert(`Rejected: ${error}`)
// );

// const usersArr = [];
// for(let i = 0; i<20; i++){
//   httpGet('https://randomuser.me/api/')
//     .then(function(res){
//       let goodFormat = JSON.parse(res);
//       // console.log(goodFormat)
//       usersArr.push(goodFormat)
//     }
//   )
// }

// console.log(usersArr);

// function viewList(data) {
//   // контейнер для сбора елементов что бы вставлять оин раз
//   let appendElem = document.createDocumentFragment();
 
//   data.forEach(function(item){
     
//      let card = document.createElement("div")
//       card.classList.add('wrap')
     
//       let template = `
//           <img class="avatar" src=${item.img}>
//           <div class="content">
//               <h2>name: ${item.name}</h2>
//               <ul>
//                   <li>surname: ${item.surName}</li>
//                   <li>age:${item.age}</li>
//                   <li>gender:${item.gender}</li>
//               </ul>
//           </div>
 
//       `
//   card.innerHTML = template
//   appendElem.appendChild(card)
//       })
 
//   document.body.append(appendElem)

// }

// viewList(usersArr);s
//_______________________________________________________________________
// function a(){
//   console.log(this);
// }


// function hello() {
//   console.log(this.name + this.surname)
// }
//
//const user = {
//  name:"Igor",
//  surname:"Smith",
//  }
//
//  const user2 = {
//    name:"Igor2",
//    surname:"Smith2",
//    }
//--------------------------------------------111111
// user.sayHello = function(){
//   console.log('Привет я ' + this.name + this.surname)
// };

// user2.sayHello = function(){
//   console.log('Привет я ' + this.name + this.surname)
// };

// user.sayHello();
// user2.sayHello();

//---------------------------------------------222222 call
// function sayHello() {
//   return this.name + " " + this.surname
// }
// const nameUser = sayHello.call(user)

// user2.say = sayHello
// console.log(user);
// console.log(user2);

// function greet (greeting) {
//   console.log(greeting + sayHello.call(user));
// }

// greet("Hello my friend")

//----------------------------------------------33333 apply
// function sayHello(greeting, gender){
//   return greeting + " " + gender + this.name + " " + this.surname
// }
// console.log(sayHello.call(user, "Hi", "girl "));

// console.log(sayHello.apply(user, ['Sensey', '']));

//------------------------------------------------444 bind
//function sayHello(greeting, gender){
//  return this.name + " " + this.surname
//}
//let a = sayHello.bind(user);
//console.log(a());


//---------------------------- new
// function CarFactory(marka1, age2, engine3) {
//   this.marka = marka1;
//   this.age = age2;
//   this.engine = engine3; 
// }
// let bmw = new CarFactory('BMW', '1', '3.0');
// console.log(bmw);
// console.log(bmw.marka);
// console.log(bmw.age);
// console.log(bmw.engine);

//------------------------------------------
//class CarFactory{
//  constructor(model, age){
//    this.model = model;
//    this.age = age
//  }
//
//  getCar(){
//    console.log(this.age + this.model);
//  }
//
//}
//let bmw = new CarFactory('BMW 5', 1);
//console.log(bmw);

//----------------------------------------------
var slides = document.querySelectorAll('#slides .slide');
//console.log(slides);
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,1500);

function nextSlide(){
//    console.log(currentSlide, 'before');
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}   
//function prevSlide(){
//    slides[currentSlide].className = 'slide';
//    if(currentSlide == 0){
//        current
//    }
//}

//$('.one').hide('10000');
//
//
//$('.one').animate({
// 'opacity':'show'
//})

//$('.two').animate({
// 'opacity':0.5,
// 'height':'50px',
// 'width':'250px'
//})

$('.one').on('click', function(){
             $('.one').hide('5000');
             })

$('.two').on('click', function(){
             $('.one').show('2000');
             })
$('.four').on('click', function(){
            $('.three').animate({
            'opacity':'hide',
            'duration':'fast'
            })
       })

$( "div.demo" ).scrollLeft( 500 );

$("div").after("<hr/>")
    

$('.one').height(300); 

$('form').submit(function(){
// чуть позже расскажу подробнее о AJAX
$.post(
$(this).attr('action'), // ссылка куда отправляем данные
$(this).serialize(),// данные формы
);
63
// отключаем действие по умолчанию
return false;
});


//$("#content").load("./index1.html");
// ========
//$.ajax({
//url: "./index1.html", // указываем URL и
//dataType: "html", // тип загружаемых данных
//success: function (data) {
//// вешаем свой обработчик события success
//$("#content").html(data)
//}
//});

$.ajax({
url: "https://randomuser.me/api/", // указываем URL и
dataType: "json", // тип загружаемых данных
success: function (data) {
let imgPath = data.results[0].picture.medium
$('#content').html(`<img src=${imgPath} />`)
}
});






















