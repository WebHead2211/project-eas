//INITIAL VARIABLES
const mainDiv = document.querySelector('#main-container');
let mainDivWidth = mainDiv.clientWidth;
let mainDivHeight = mainDiv.clientHeight;
let color = randomColor();
const safeColor = color;
const sizeButton = document.querySelector('#size-button');
const colorButton = document.querySelector('#color-button');


//INITIAL GRID SETUP
for(let i = 0; i < 512; i++){
    const div = document.createElement('div');
    div.classList.add('div-class');
    mainDiv.appendChild(div);
    div.setAttribute('style', `width:${mainDivHeight/16}px; height:${mainDivHeight/16}px`);
    div.style.backgroundColor = 'white'; 
} 


//EVENT LISTENERS FOR MAIN DIV CONTAINER AND THE BUTTONS
mainDiv.addEventListener('mouseover', gridFunc);
sizeButton.addEventListener('click', setSize);
colorButton.addEventListener('click', newColor);


//FUNCTIONS TO ADD COLOR ON FIRST PASS AND SUBSEQUENT PASSES
function firstPass(){
    // let color = randomColor();
    let red = color[0];
    let green = color[1];
    let blue = color[2];
    this.style.backgroundColor = `rgb(${color})`;
}

function morePass(){
    const thisColor = colorToArray(this.style.backgroundColor);
    let toColor = [];
    toColor[0] = darken(thisColor[0]);
    toColor[1] = darken(thisColor[1]);
    toColor[2] = darken(thisColor[2]);
    if(toColor[0]<1){
        toColor[0] = 0;
    }
    if(toColor[1]<1){
        toColor[1] = 0;
    }
    if(toColor[2]<1){
        toColor[2] = 0;
    }
    this.style.backgroundColor = `rgb(${toColor[0]}, ${toColor[1]}, ${toColor[2]})`;    
}


//FUNCTION TO ADD EVENT LISTENER TO GRID ITEMS
function gridFunc(){
    const grid = document.querySelectorAll('.div-class');
    grid.forEach(div => {
        if(div.style.backgroundColor === 'white'){
            div.addEventListener('mouseover', firstPass);
        } else {
            div.removeEventListener('mouseover', firstPass);
            div.addEventListener('mouseover', morePass);
        }
    });
}


//FUNCTION TO SET CUSTOM SIZE
function setSize(){
    let size = window.prompt("Select a grid size (from 1 to 100)");
    if(size>0 && size<=100){
        gridSize(size);
    } else {
        window.alert("Please choose a valid value!");
    }   
}

function gridSize(size){
    let totalNumber = size*size*2;
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
        div.style.backgroundColor = 'white'; 
    } 
}


//FUNCTION TO SET RANDOM COLOR
function newColor(){
    color = randomColor();
    const divList = document.querySelectorAll('.div-class');
    divList.forEach(div => div.style.backgroundColor = 'white');
}

function randomColor(){
    let red = Math.floor((Math.random() * 55)+200);
    let green = Math.floor((Math.random() * 55)+200);
    let blue = Math.floor((Math.random() * 55)+200);
    let color = [red, green, blue];
    return color;
}


//SMALL FUNCTIONS
function colorToArray(rgbValue){
    let output = rgbValue.replace('rgb(', '');
    output = output.replace(')', '');
    output = output.replace(/\s/g,'');
    output = output.split(',');
    return output;
}

function darken(colorInput){
    return colorInput - 25;
}