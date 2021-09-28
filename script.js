window.addEventListener('mousemove', (e)=>{
    document.querySelector('#x-value').innerText = e.x;
    document.querySelector('#y-value').innerText = e.y;
});