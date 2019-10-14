//const users = [
//    {
//    id: 1,
//    name: 'Jone',
//    surName: 'Smith',
//    img: '',
//    age: 18,
//    gender: 'male'
//    },{
//    id: 2,
//    name: 'Adolf',
//    surName: 'Stalin',
//    img: '',
//    age: 88,
//    gender: 'male'
//    },{
//    id: 3,
//    name: 'Iosif',
//    surName: 'Gitler',
//    img: '',
//    age: 8,
//    gender: 'male'
//    },{
//    id: 4,
//    name: 'Yoko',
//    surName: 'Ono',
//    img: '',
//    age: 28,
//    gender: 'female'
//    },{
//    id: 5,
//    name: 'Lola',
//    surName: 'Begi',
//    img: '',
//    age: 24,
//    gender: 'female'
//    },{
//    id: 6,
//    name: 'Garik',
//    surName: 'White',
//    img: '',
//    age: 33,
//    gender: 'male'
//    }
//]
//
//for(let i=0; i<users.length; i++)
//    {
//        console.log(users[i]);
////        console.log(users[i].age);
//    }
//
//
//
//let wrap = document.createElement('div')
//wrap.innerHTML = `   
//  <div class='wrap'>
//      <div class='avatar'>
//        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlmkX_UkGaHPhax-pcVaHDch65_VFr7cwnuts6IvkemXk4hhg9A">
//      </div>
//      <div class='content'>
//         <h2>Name</h2>
//         <ul>
//             <li>surName</li>
//             <li>age</li>
//             <li>gender</li>
//         </ul>
//      </div>
//  </div>
//        `;
//document.body.append(wrap)
//
//function viewList(data){
//    let appendElem = document.createDocumentFragment();
//    
//    data.forEach(function(item)){
//                 
//                 
//    let template =   `   
//  <div class='wrap'>
//      <div class='avatar'>
//        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGlmkX_UkGaHPhax-pcVaHDch65_VFr7cwnuts6IvkemXk4hhg9A">
//      </div>
//      <div class='content'>
//         <h2>Name</h2>
//         <ul>
//             <li>surName</li>
//             <li>age</li>
//             <li>gender</li>
//         </ul>
//      </div>
//  </div>
//        `      
//    }
//}
const users = [
    {
        id: 1,
        name: 'Jone',
        surName: 'Smith',
        img: 'https://trikky.ru/wp-content/blogs.dir/1/files/2019/07/17/images-1-1.jpg',
        age: 18,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Dima',
        surName: 'Travolta', img:'data:image/jpeg;base64,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',
        age: 21,
        gender: 'male'
    },
    {
        id: 3,
        name: 'Ira',
        surName: 'Volk',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmOm-8VTDtMfcSbEKjrfsedGJPTwy2YvwJNWFlgQ1CUlEsxbrb',
        age: 33,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Bro',
        surName: 'brovich',
        img:'https://99px.ru/sstorage/41/2019/05/image_410705192353486217074.jpg',
        age: 11,
        gender: 'male'
    }
]

//const elem = document.createDocumentFragment();
//let wrap = document.createElement("div")
//wrap.classList.add('wrap')
//let template = `
//  
//        <img class="avatar" src="">
//
//        <div class="content">
//            <h2>name: </h2>
//            <ul>
//                <li>surname: </li>
//                <li>age:</li>
//                <li>age:</li>
//                <li>gender:</li>
//            </ul>
//        </div>
//
//`
//wrap.innerHTML = template
//
//document.body.append(wrap)


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

viewList(users)