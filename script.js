var counter=document.querySelector('.actualtext');
var bg=document.querySelector('.bg');
var load=0;
var opacityval=100;
var interval=setInterval(blurring,30);
var blurval=20;

function blurring(){
    load++;
    opacityval--;
    blurval-=0.2;
    counter.innerText=`${load}%`;
    if(load>=100){
        clearInterval(interval);
    }
    counter.style.opacity=opacityval/100;
    if(opacityval<=0){
        counter.style.opacity=0;
    }
    bg.style.filter=`blur(${blurval}px)`;
    if(blurval<=0){
        bg.style.filter="blur(0px)";
    }
}