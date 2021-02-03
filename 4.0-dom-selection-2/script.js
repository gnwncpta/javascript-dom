// DOM Selection
// document.getElementById() -> element
// const judul = document.getElementById('judul');
// judul.style.color = 'grey';
// judul.style.backgroundColor = 'pink';
// judul.innerHTML = 'Gunawan Cipta';


// document.getElementsByTagName() -> HTMLCollection
// const p = document.getElementsByTagName('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'grey';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';


// document.getElementsByClassName() -> HTMLCollection
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'ini diubah dari javascript';


// DOM Selection 2

// document.querySelector() -> element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange'; 
// li2.style.color = '#333';



// document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
//     p[i].style.color = '#333';
// }



// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';



const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p')[0];
p4.style.backgroundColor = 'orange';
p4.style.color = '#333';