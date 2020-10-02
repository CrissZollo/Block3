const quessNumber = document.querySelector('.guessNumber');
const quessBtn = document.querySelector('.quessBtn');
const newNumberBtn = document.querySelector('.newNumberBtn');

let statusText = document.querySelector('.status');

let pickedNumber = Math.floor(Math.random() * 1000) + 1;

let highScoreArray = [];

let gotNewNumber = true;

console.log(pickedNumber);
quessBtn.addEventListener('click', checkNumber);
newNumberBtn.addEventListener('click', newNumber);


let quesses = 0;

function checkNumber()
{
    if (gotNewNumber) 
    {
        let number = quessNumber.value;
        console.log(number);
        if (number <= 1000 && number >= 1)
        {        
            quesses++;
        
            if (number < pickedNumber)
            {
                statusText.innerHTML = "Higher";
            }
            else if(number > pickedNumber)
            {
                statusText.innerHTML = "Lower";
            }
            else
            {
                statusText.innerHTML = "You quessed right";
                statusText.style.color = "seagreen"

                
                if (document.querySelector(".highScore") != null) 
                {
                    for (let i = 0; i < highScoreArray.length; i++) 
                    {
                        document.querySelector(".highScore").remove();
                    }
                    
                }
                
                highScoreArray.push(quesses);
                highScoreArray.sort(function(a, b){return a - b});
                console.log(highScoreArray);
                quesses = 0;
                
                for (let i = 0; i < highScoreArray.length; i++) 
                {
                    let h3Element = document.createElement("h3");
                    h3Element.className = "highScore";
                    h3Element.innerHTML = '#' + (i+1) + ": " + highScoreArray[i];
                    
                    let myContainer = document.querySelector('.container');
                    myContainer.appendChild(h3Element);
                }

                gotNewNumber = false;
            }

        }
    }
}


function newNumber()
{
    quesses = 0;
    statusText.innerHTML = "";
    statusText.style.color = "rgb(255, 73, 73)"
    gotNewNumber = true;
    pickedNumber = Math.floor(Math.random() * 1000) + 1;
    console.log(pickedNumber);
}