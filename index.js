onst yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que ibas a decir que si <3')
    alert("Te quiero")
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
});

const SIZES = [
    'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--s',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--m',
	'rainDrop--l',
	'rainDrop--xl'
];

const EMOJI = [
    '💗',
    '❣️',
    '💛',
    '💜',
    '🖤',
    '❤️',
    '💙',
    '💚',
    '💕',
    '💖',
    '💓',
    '💘',
    '❤️',
    '❤️'
];

const rainContainer = document.querySelector('.rain-container');

const genRainDrop = (size, xStart, xEnd, yStart, emoji)=>{
    const r = document.createElement('div');
    r.innerText = emoji;
    r.classList.add('rainDrop', size);
    r.style.setProperty('--x-start', xStart + 'vw');
    r.style.setProperty('--x-end', xEnd + 'vw');
    r.style.setProperty('--y-start', yStart + 'vh');
    r.style.setProperty('--y-end', yStart + 200 + 'vh');

    return r;
};

for(let i=0; i<COUNT; i++){
    const size = randFromList(SIZES);
    const xStart = getRamdomArbitrary(0,100);
    const xEnd = getRamdomArbitrary(xStart - 20, xStart + 20);  
    const emoji = randFromList(EMOJI);
    const yStart = getRamdomArbitrary(-100,0);
    rainContainer.appendChild(genRainDrop(size, xStart, xEnd, yStart, emoji));  
};

function randFromList(items){
    // math.floor nos devolvera un numero entero de lo que saldra del math.ramdom
    return items[Math.floor(Math.random()*items.length)];
};

function getRamdomArbitrary(min,max) {
    return Math.random() * (max - min) + min;
};
