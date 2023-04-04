const mainDiv = document.querySelector('#main-container');
let mainDivWidth = mainDiv.clientWidth;
let mainDivHeight = mainDiv.clientHeight;

for(let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('div-class');
    mainDiv.appendChild(div);
    div.setAttribute('style', `width:${mainDivWidth/16}px; height:${mainDivHeight/16}px`); 
} 
mainDiv.addEventListener('mouseover', gridFunc);

const button = document.querySelector('button');
button.addEventListener('click', setSize);

function hover(){
    this.style.backgroundColor = 'black';
}

function gridFunc(){
    const grid = document.querySelectorAll('.div-class');
    grid.forEach(div => div.addEventListener('mouseover', hover));
}

function setSize(){
    let size = window.prompt("Select a grid size (from 0 to 100)");
    if(size>=0 && size<=100){
        gridSize(size);
    } else {
        window.alert("Please choose a valid value!");
    }   
}

function gridSize(size){
    let totalNumber = size*size;
    let boxSize = mainDivHeight/size;
    if(document.querySelector('.div-class')) {
        const divList = document.querySelectorAll('.div-class');
        divList.forEach(div => mainDiv.removeChild(div));
    }         
    for(let i = 0; i < totalNumber; i++){
        const div = document.createElement('div');
        div.classList.add('div-class');
        mainDiv.appendChild(div);
        div.setAttribute('style', `width:${boxSize}px; height:${boxSize}px`); 
    } 
}

