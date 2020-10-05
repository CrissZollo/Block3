const randomButton = document.querySelector('#randomButton');
const resetButton = document.querySelector('#resetButton');
const defualtColor = document.body.style.backgroundColor;
const timerText = document.querySelector('.timer');
let timer = 5;
timerText.innerHTML = timer;
let clicked = false;
let timesClicked = 0;
let interval; 

randomButton.addEventListener('click', Timer);
resetButton.addEventListener('click', Reset);


function Timer()
{
    if (!clicked && timesClicked == 0) 
    {
        timesClicked++;
        if (timer > 0) 
        {
            interval = setInterval(RandomColor, 1000);
        }
    }
}

function RandomColor()
{
    timer--;
    timerText.innerHTML = timer;
    let random1 = Math.floor(Math.random() * 256);
    let random2 = Math.floor(Math.random() * 256);
    let random3 = Math.floor(Math.random() * 256);
    let color = `rgb(${random1}, ${random2}, ${random3})`;
    
    document.body.style.backgroundColor = color;
    if (timer <= 0) 
    {
        Reset();  
    }
}

function Reset()
{
    clicked = false
    timesClicked = 0;
    timer = 5;
    timerText.innerHTML = timer;
    clearInterval(interval);
    document.body.style.backgroundColor = defualtColor;
}
