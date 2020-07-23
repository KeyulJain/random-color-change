setInterval(function(){
    let x = Math.round( Math.random() * 255 );
    let y = Math.round( Math.random() * 255 );
    let z = Math.round( Math.random() * 255 );
    let bg = "background:rgb("+x+", "+y+", "+z+");";
    let element = document.querySelector("body");
    element.style = bg;
}, 1000);