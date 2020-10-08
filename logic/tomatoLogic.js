TweenMax.to('.top-panel', 1, { scaleY:1, height: '25vh', ease: Circ.easeIn } );
TweenMax.to('h1', 1, { opacity: 1, scale: 1, delay: 1 } );
TweenMax.to('#cta', 1, { opacity: 1, x:0, delay: 1 } );
TweenMax.to('#cta2', 1, { opacity: 1, x: 0, delay: 1 } );

TweenMax.to('.bottom-panel', 1, { scaleY:1, height: '75vh', ease: Circ.easeOut } );
// Button 1 animations

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('#tomato1', 1, { opacity: 1, y:0, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#tomato2', 1, { opacity: 1, y:0, delay: .25, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#tomato3', 1, { opacity: 1, y:0, delay: .50, ease: Elastic.easeOut.config(1, 0.3) } );
})

document.getElementById('cta').addEventListener('mouseover', function(){
    TweenMax.to('#cta', 1.5, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "white";
    this.style.color = "white";
    this.style.backgroundColor = "black";
    this.style.zIndex = "1";
});

document.getElementById('cta').addEventListener('mouseout', function(){
    TweenMax.to('#cta', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "black";
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
    this.style.zIndex = "0";
});

// Button 2 animations
document.getElementById('cta2').addEventListener('click', function () {
    TweenMax.to('#tomato1', 1, { y:+200, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#tomato2', 1, { y:+200, delay: .25, ease: Elastic.easeOut.config(1, 0.3) } );
    TweenMax.to('#tomato3', 1, { y:+200, delay: .50, ease: Elastic.easeOut.config(1, 0.3) } );
})

document.getElementById('cta2').addEventListener('mouseover', function(){
    TweenMax.to('#cta2', 1.5, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "white";
    this.style.color = "white";
    this.style.backgroundColor = "black";
    this.style.zIndex = "1";
});

document.getElementById('cta2').addEventListener('mouseout', function(){
    TweenMax.to('#cta2', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "black";
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
    this.style.zIndex = "0";
});