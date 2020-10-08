TweenMax.to('#cta', 1, { opacity:1, y:0, delay: 1.4} );
TweenMax.to('h1', 1, { opacity:1, scaleY:1, scaleX:1, delay: 2} );

TweenMax.to('#cta', 1, { scaleX: 0, delay: 2} );
TweenMax.to('#cta', 1, { scaleX: 1, delay: 3} );

TweenMax.to('#cta', 1, { scaleX: 0, delay: 4} );
TweenMax.to('#cta', 1, { scaleX: 1, delay: 5} );

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('h1', 0.25, { opacity:0, scaleY:0, scaleX:0 } );
    TweenMax.to('.main-container', 1, { opacity:1} );
    TweenMax.to('.panel', 1, { scaleY:1, scaleX:1, marginTop: 0, width: '100vw', height: '100vh', ease: Circ.easeIn } );
    TweenMax.to('.main-container', 1, { background: 'crimson', delay: 1 } );    
    TweenMax.to('#cta', 0.25, { opacity:0, y:'-50vh', delay: 1} );
})