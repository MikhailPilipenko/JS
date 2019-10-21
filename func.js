function sum(p1, p2){
    return p1+p2;
}
console.log(sum(12, 13));
let sum1=sum(11, 12);
console.log(sum1);

function s(){
    console.log(arguments);
}
s(1);
s(2);
s(3);

function q(){
let sum=0;
    for(let i=0; arguments.length>i; i++){
        sum=sum+arguments[i];
    }
        return sum;
}
console.log(q(1,2,3));

function square(radius){
   // s=2*PI
    return Math.PI * (radius*radius);
}
function v(h){
    const s = square(17);
    return Math.ceil(s * h);
}
const volume = v(3);
console.log(volume);



// Запрос на сервер несовременный

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://randomuser.me/api/', false);

try {
  xhr.send();
  if (xhr.status != 200) {
    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`);
  } else {
    alert(xhr.response);
  }
} catch(err) { // для отлова ошибок используем конструкцию try...catch вместо onerror
  alert("Запрос не удался");
}



// Запрос на сервер современный

fetch('https://randomuser.me/api/')
  .then(function(respons){
    return respons.json()
})
.then(function(a){
      console.log(a)
      })
