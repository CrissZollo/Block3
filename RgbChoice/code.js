let redText = document.querySelector('.red');
let greenText = document.querySelector('.green');
let blueText = document.querySelector('.blue');

const redPlus = document.querySelector('.redPlus');
const redPlusTen = document.querySelector('.redPlus10');
const redMinus = document.querySelector('.redMinus');
const redMinusTen = document.querySelector('.redMinus10');

const greenPlus = document.querySelector('.greenPlus');
const greenPlusTen = document.querySelector('.greenPlus10');
const greenMinus = document.querySelector('.greenMinus');
const greenMinusTen = document.querySelector('.greenMinus10');

const bluePlusTen = document.querySelector('.bluePlus');
const bluePlus = document.querySelector('.bluePlus10');
const blueMinusTen = document.querySelector('.blueMinus');
const blueMinus = document.querySelector('.blueMinus10');


redPlus.addEventListener('click', () => AddRemove("red", true, false));
redPlusTen.addEventListener('click', () => AddRemove("red", true, true));
redMinus.addEventListener('click', () => AddRemove("red", false, false));
redMinusTen.addEventListener('click', () => AddRemove("red", false, true));

greenPlus.addEventListener('click', () => AddRemove("green", true, false));
greenPlusTen.addEventListener('click', () => AddRemove("green", true, true));
greenMinus.addEventListener('click', () => AddRemove("green", false, false));
greenMinusTen.addEventListener('click', () => AddRemove("green", false, true));

bluePlus.addEventListener('click', () => AddRemove("blue", true, false));
bluePlusTen.addEventListener('click', () => AddRemove("blue", true, true));
blueMinus.addEventListener('click', () => AddRemove("blue", false, false));
blueMinusTen.addEventListener('click', () => AddRemove("blue", false, true));


let redValue = 0;
let greenValue = 0;
let blueValue = 0;

redText.innerHTML = redText.innerHTML + " " + redValue; 
greenText.innerHTML = greenText.innerHTML + " " + greenValue; 
blueText.innerHTML = blueText.innerHTML + " " + blueValue; 


function AddRemove(text, add, ten)
{
    if (text == "red") 
    {
        if (ten) 
        {
            if (add) 
            {
                redValue += 10;
            }
            else
            {
                redValue -= 10;
            }
        }
        else
        {
            if (add) 
            {
                redValue++;
            }
            else
            {
                redValue--;
            }
        }
        redText.innerHTML = "Red " + redValue; 
    }
    else if (text == "green") 
    {
        if (ten) 
        {
            if (add) 
            {
                greenValue += 10;
            }
            else
            {
                greenValue -= 10;
            }
        }
        else
        {
            if (add) 
            {
                greenValue++;
            }
            else
            {
                greenValue--;
            }
        }
        greenText.innerHTML = "Green " + greenValue; 
    }
    else if (text == "blue") 
    {
        if (ten) 
        {
            if (add) 
            {
                blueValue += 10;
            }
            else
            {
                blueValue -= 10;
            }
        }
        else
        {
            if (add) 
            {
                blueValue++;
            }
            else
            {
                blueValue--;
            }
        }
        blueText.innerHTML = "Blue " + blueValue; 
    }
}