// const p3 = document.querySelector('.p3');


// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
//     p2.style.color = '#333';
// }

// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
//     p3.style.color = '#333';

// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;


// const p4 = document.querySelector('section#b p');
// p4.addEventListener('click', function(){
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('Item 4');
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });

const p3 = document.querySelector('.p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightblue';
// }

// p3.onclick = function(){
//     p3.style.color = '#333';
// // }
// p3.addEventListener('mouseover', function(){
//     p3.style.backgroundColor = '#ff00ff';
// });

p3.addEventListener('mouseenter', function(){
    p3.style.backgroundColor = 'lightblue';
    p3.style.color = '#333';
    p3.style.border = '1px solid lightblue';
});
p3.addEventListener('mouseleave', function(){
    p3.style.backgroundColor = 'rgb(20, 20, 20)';
    p3.style.color = 'white';
    p3.style.border = '1px solid #dedede';
});


const h1 = document.getElementById('judul');
h1.addEventListener('click', function(){
    const body = document.querySelector('body')
    // yang bawah proses bikin node baru
    const h1Ganti = document.createElement('h1');
    const texth1Ganti = document.createTextNode('Keganti kan?');
    h1Ganti.appendChild(texth1Ganti);
    body.replaceChild(h1Ganti, h1); 
});