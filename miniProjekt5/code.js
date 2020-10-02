let time = document.querySelector('.time');

startTime();




function startTime() 
{
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    time.innerHTML = h + ":" + m + ":" + s
    time.animate([{opacity:'0.1'}, {opacity:'1.0'}], {duration:500, fill:'forwards'});
    setTimeout(startTime, 1000);
}


function checkTime(i) 
{
    if (i < 10) 
    {
        i = "0" + i;
    }
    
    return i;
}