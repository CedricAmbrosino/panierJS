var plant0 = document.querySelector('#CadreObjet1 p');
var plant1 = document.querySelector('#CadreObjet2 p');
var plant2 = document.querySelector('#CadreObjet3 p');

var nbPlant0 = document.querySelector('#nbPlant0');
var nbPlant1 = document.querySelector('#nbPlant1');
var nbPlant2 = document.querySelector('#nbPlant2');

var retPlant0 = document.querySelector('#retPlant0');
var retPlant1 = document.querySelector('#retPlant1');
var retPlant2 = document.querySelector('#retPlant2');

var nettoyer = document.querySelector('.boutonNetoyer');

var panier=[0,0,0];

plant0.addEventListener('click', function(){
	panier[0]++;
	nbPlant0.textContent = panier[0];
});

plant1.addEventListener('click', function(){
	panier[1]++;
	nbPlant1.textContent = panier[1];
});

plant2.addEventListener('click', function(){
	panier[2]++;
	nbPlant2.textContent = panier[2];
});

retPlant0.addEventListener('click', function(){
	if(panier[0] > 0 )panier[0]--;
	nbPlant0.textContent = panier[0];
});
retPlant1.addEventListener('click', function(){
	console.table(panier);
	if(panier[1] > 0 )panier[1]--;
	nbPlant1.textContent = panier[1];
	console.table(panier);
});
retPlant2.addEventListener('click', function(){
	if(panier[2] > 0 )panier[2]--;
	nbPlant2.textContent = panier[2];
});

nettoyer.addEventListener('click', function(){
	for(let i=0; i<panier.length; i++){
		panier.splice([i], 1, 0);
	}
	nbPlant0.textContent = panier[0];
	nbPlant1.textContent = panier[1];
	nbPlant2.textContent = panier[2];
});
