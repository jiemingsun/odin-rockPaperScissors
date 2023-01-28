const container = document.querySelector('#container');

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey I\'m red!';
para.setAttribute('style', 'color: red');
container.appendChild(para);

const header3 = document.createElement('h3');
header3.classList.add('header3');
header3.textContent = 'I\'m a blue h3!';
header3.setAttribute('style', 'color: blue');
container.appendChild(header3);

const section = document.createElement('div');
section.classList.add('section');
section.textContent = 'tests';
section.setAttribute('style', 'border: 2px black solid; background-color: pink;');
container.appendChild(section);

const section_h1 = document.createElement('h1');
section_h1.classList.add('section_h1');
section_h1.textContent = 'I\'m in a div';
section.appendChild(section_h1);

const section_para = document.createElement('p');
section_para.classList.add('section_para');
section_para.textContent = 'ME TOO!';
section.appendChild(section_para);

// container.appendChild(section);