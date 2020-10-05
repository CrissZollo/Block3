const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let imgText = document.querySelector('.imgText');

let counter = 0;

let img = [
    "egg.jpg",
    "fish.jpg",
    "house.jpg",
    "moth.jpg",
    "squares.jpg",
    "tiles.jpg",
    "windmill.jpg",
];

imgText.innerHTML = img[0];

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide()
{

    if (counter == img.length-1) 
    {
        counter = 0;
    }
    else
    {
        counter++;
    }


    console.log(counter);
    container.style.backgroundImage = `url(img/${img[counter]})`;
    imgText.innerHTML = img[counter];
}

function prevSlide()
{

    if (counter == 0) 
    {
        counter = img.length-1;
    }
    else
    {
        counter--;
    }


    console.log(counter);
    container.style.backgroundImage = `url(img/${img[counter]})`;
    imgText.innerHTML = img[counter];
}