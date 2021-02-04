// DOM Manipulation
// Manipulation Node

// Memungkinkan kita untuk bisa menambahkan node baru
// atau kita juga bisa menghapus elemen yang ada pada DOM
// dan bahkan mengganti sebuah elemen menggunakan elemen yang baru

// 
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('paragraf baru');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan PBaru di akhir section a
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


// 
const h1Baru = document.createElement('h1');
const textH1Baru = document.createTextNode('Judul 2');
h1Baru.appendChild(textH1Baru);
const body = document.getElementsByTagName('body')[0];
const container = body.getElementsByClassName('container')[0];
body.insertBefore(h1Baru, container);


// insert before
const liBaru = document.createElement('li');
const textLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(textLiBaru); // ->  <li> Item Baru </li>
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);


// remove func
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// replace func
const sectionB = document.getElementById('b');
const par4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, par4);


// insert before func
const p0 = document.createElement('p');
const textP0 = document.createTextNode('paragraf 0');
p0.appendChild(textP0);
const p1 = sectionA.querySelector('p:first-child');
sectionA.insertBefore(p0, p1);

// 
const li4 = document.createElement('li');
const textLi4 = document.createTextNode('Item 4');
li4.appendChild(textLi4);
ul.appendChild(li4);

//
const item2 = ul.querySelector('li:nth-child(2)');
const li2New = document.createElement('li');
const li2NewText = document.createTextNode('Item 2 baru');
li2New.appendChild(li2NewText);
ul.replaceChild(li2New, item2); 

p0.style.backgroundColor = 'lightgreen';
p0.style.color = '#333';

li2New.style.backgroundColor = 'lightgreen';
li2New.style.color = '#333';

li4.style.backgroundColor = 'lightgreen';
li4.style.color = '#333';

pBaru.style.backgroundColor = 'lightgreen';
pBaru.style.color = '#333';

liBaru.style.backgroundColor = 'lightgreen';
liBaru.style.color = '#333';

h2Baru.style.backgroundColor = 'lightgreen';
h2Baru.style.color = '#333';

h1Baru.style.backgroundColor = 'lightgreen';
h1Baru.style.color = '#333';