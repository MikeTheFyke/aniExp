TweenMax.to('#cta', 1, { opacity:1, y:0, delay: 1.4} );
TweenMax.to('h1', 1, { opacity:1, scaleY:1, scaleX:1, delay: 2} );

TweenMax.to('#cta', 1, { scaleX: 0, delay: 2} );
TweenMax.to('#cta', 1, { scaleX: 1, delay: 3} );

TweenMax.to('#cta', 1, { scaleX: 0, delay: 4} );
TweenMax.to('#cta', 1, { scaleX: 1, delay: 5} );

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('h1', 0.5, { opacity:0, scaleY:0, scaleX:0 } );
    TweenMax.to('.main-container', 0, { opacity:1} );
    TweenMax.to('.panel', 0.25, { scaleY:1, scaleX:1, marginTop: 0, width: '100vw', height: '100vh', ease: Circ.easeIn } );
    TweenMax.to('.main-container', 0.25, { background: 'crimson', delay: .25 } );    
    TweenMax.to('#cta', 0.25, { opacity:0, y:'-50vh', delay: .5} );
    TweenMax.to('#stripe1', 3, { opacity:1, x:-200, delay: 2 } );
    TweenMax.to('#stripe2', 3, { opacity:1, x:-400, delay: 2 } );
})