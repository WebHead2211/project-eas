function gridSize(size){
    let totalNumber = size*size;
    let boxSize = 960/size;
    const mainDiv = document.querySelector('#main-container');
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