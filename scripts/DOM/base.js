// console.dir(document);
// console.log(document.head);
// console.log(document.body);

//? Obtener elementos

//* getElementById
const contenedor = document.getElementById('mi-id');
console.log(contenedor);

//* getElementsByTagName
const parrafos = document.getElementsByTagName('p');
// console.log(parrafos);

//* getElementsByClassName
const parrafosRojos = document.getElementsByClassName('bg-red');
// console.log(parrafosRojos);


//? Modificar elementos
//* innerText
const primerParrafo = document.getElementById('text-7');
// primerParrafo.innerText = 'Nuevo texto del parrafo';
// console.log(contenedor.innerText);

//* textContent
// console.log(contenedor.textContent);
// contenedor.textContent = 'Nuevo contenido en texto del DIV'

//* innerHTML
contenedor.innerHTML = `
<h2>Mi Perfil</h2>
<img width="200" src="https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/93/aa/93aa8de92702553e21a87ba0b6d53269557b159a.jpg">
<p>Ver mas >>></p>
`;

//* className
primerParrafo.className = 'bg-blue p-2';

//* classList
// primerParrafo.classList.add('text-xl');
// primerParrafo.classList.remove('bg-blue');
// primerParrafo.classList.add('hidden');
// console.log(primerParrafo.classList);

