'use strict';

const theContainer = document.querySelector('body');

window.addEventListener('keydown', (e) => {
    theContainer.innerHTML = `<div class="container">
        <div class="box"><small>title1</small>${e.code}</div>
        <div class="box"><small>title2</small>${e.keyCode}</div>
        <div class="box"><small>title3</small>${e.key === ' '? "Space": e.key}</div>
    </div>`
    
})