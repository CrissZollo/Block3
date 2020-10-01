const quotesArray = [
    `"I don't want to talk to you no more, you empty headed animal food trough wiper. I fart in your general direction. Your mother was a hamster and your father smelt of elderberries."`,
    `"This guy had the right idea! He wore the brown pants!"`,
    `"It's not a man purse. It's called a satchel. Indiana Jones wears one."`,
    `"I am your father's brother's nephew's cousin's former roommate."`,
    `"I hope that someday you'll know the indescribable joy of having children and of paying someone else to raise them."`,
    `"Earth is amazing! There are these things called farms. They put seeds in the ground, pour water on them, and they grow into food, like pizzas!"`,
    `"Nothing goes over my head. My reflexes are too fast. I would catch it."`,
    `"What... How... Oh, look at this! Sons of the pharaohs! Give me frogs! Flies! Locusts! Anything but *you*! Compared to you, the other plagues were a joy!"`,
    `"Fourth wall break inside of a fourth wall break? That's like... 16 walls!"`,
    `"Are you insane? Of course I want to leave the Dursleys! Have you got a house? When can I move in?"`

]

const personMoviesArray = [
    `― Graham Chapman in Monty Python and the Holy Grail`,
    `― Deadpool in Deadpool`,
    `— Alan Garner in Hangover`,
    `— Lord Dark Helmet in Spaceballs`,
    `— Gomez Addams in The Addams Family`,
    `— The Captain in Wall-E`,
    `— Drax in Guardians of the Galaxy`,
    `— Dr. Bey in The Mummy`,
    `— Deadpool in Deadpool`,
    `— Harry Potter in Harry Potter and the Prisoner of Azkaban`

]


let newQuoteBtn = document.querySelector('.newQuote');
let showAllBtn = document.querySelector('.showAll');

let quote = document.querySelector('.quote');
let personMovie = document.querySelector('.personMovie');
NewQuote();

newQuoteBtn.addEventListener('click', NewQuote);
showAllBtn.addEventListener('click', ShowAll);


let pressed = false;

function NewQuote()
{
    let random = Math.floor(Math.random() * quotesArray.length);

    quote.innerHTML = quotesArray[random].italics();
    personMovie.innerHTML = personMoviesArray[random].bold();
}

function ShowAll()
{
    if (!pressed) 
    {   
        quote.style.display = "none"; 
        personMovie.style.display = "none";
        newQuoteBtn.style.visibility = "hidden";
        showAllBtn.innerHTML = "hide all quotes";
        pressed = true;
        for (let i = 0; i < quotesArray.length; i++) 
        {        
            let newP1 = document.createElement("p");
            let newP2 = document.createElement("p");        

            newP1.className = "quote new";
            newP2.className = "personMovie new";

            let italic = document.createElement("i");
            let bold = document.createElement("b");

            
            
            let newQuoteText = document.createTextNode(quotesArray[i]);
            let newPersonMovieText = document.createTextNode(personMoviesArray[i]);
            italic.appendChild(newQuoteText);
            bold.appendChild(newPersonMovieText);
        
            let element = document.querySelector(".movieQuotes");
            element.appendChild(newP1).appendChild(italic);
            element.appendChild(newP2).appendChild(bold);   
        }
    }
    else
    {
        quote.style.display = "block"; 
        personMovie.style.display = "block";
        newQuoteBtn.style.visibility = "visible";
        showAllBtn.innerHTML = "show all quotes";
        pressed = false;
        for (let i = 0; i < quotesArray.length + personMoviesArray.length; i++) 
        {    
            document.querySelector(".new").remove();   
        }
    }
}