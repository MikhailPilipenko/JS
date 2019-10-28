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

 function httpGet(url){
  return new Promise(function(resolve, reject){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function(){
      if (this.status == 200){
        resolve(this.response)
      }else{
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };
    
    xhr.onerror = function() {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });

 }

 let a = httpGet('https://randomuser.me/api/');
 a
 .then(
  response => alert(`Fulfilled: ${response}`),
  error => alert(`Rejected: ${error}`)
);

const usersArr = [];
for(let i = 0; i<20; i++){
  httpGet('https://randomuser.me/api/')
    .then(function(res){
      let goodFormat = JSON.parse(res);
      // console.log(goodFormat)
      usersArr.push(goodFormat)
    }
  )
}

console.log(usersArr);

function viewList(data) {
  // контейнер для сбора елементов что бы вставлять оин раз
  let appendElem = document.createDocumentFragment();
 
  data.forEach(function(item){
     
     let card = document.createElement("div")
      card.classList.add('wrap')
     
      let template = `
          <img class="avatar" src=${item.img}>
          <div class="content">
              <h2>name: ${item.name}</h2>
              <ul>
                  <li>surname: ${item.surName}</li>
                  <li>age:${item.age}</li>
                  <li>gender:${item.gender}</li>
              </ul>
          </div>
 
      `
  card.innerHTML = template
  appendElem.appendChild(card)
      })
 
  document.body.append(appendElem)

}

viewList(usersArr);s