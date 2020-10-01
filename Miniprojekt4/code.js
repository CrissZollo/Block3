let sendBtn = document.querySelector('.sendBtn');
const messageIn = document.querySelector('.messageIn');
const messageOut = document.querySelector('.messageOut');
const clearLog = document.querySelector('.clearLog');

sendBtn.addEventListener('click', SendMsg);
clearLog.addEventListener('click', ClearLog)

let logItems = 0;
let badWord = false;
let lock = false;

function SendMsg()
{
    if (!lock) 
    {        
        let content = messageIn.value;
    
        for (let i = 0; i < content.length; i++) 
        {
            if(content[i] === 'f' || content[i] === 'F')
            {
                if (content[i+1] === 'u' || content[i+1] === 'U') 
                {
                    if (content[i+2] === 'c' || content[i+2] === 'C') 
                    {
                        if (content[i+3] === 'k' || content[i+3] === 'K') 
                        {
                            badWord = true;
                            sendBtn.style.backgroundColor = "red";
                        }
                    }
                }
            }
        }
    
        if (content === "") 
        {
            alert("Text Box is Empty");    
        }
        else if (badWord) 
        {
            alert("You have been banned and can not send any messages!");
            lock = true;
        }
        else
        {
            
            let h1Element = document.createElement("h1");
            h1Element.className = "messageOut log";
            h1Element.innerHTML = content;      
            
            let myContainer = document.querySelector('.container');
            myContainer.appendChild(h1Element);
            
            messageIn.value = "";
            
            logItems++;
            console.log(logItems);
        }
    }
    else
    {
        alert("You are banned")
    }
}

function ClearLog()
{
    for (let i = 0; i < logItems; i++) 
    {
        document.querySelector(".log").remove();
    }

    logItems = 0;
}