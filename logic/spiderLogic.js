TweenMax.to('#cta', 1, { opacity:1, y:0, delay: 1.4} );

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('.main-container', 1, { opacity:1} );
    TweenMax.to('.panel', 1, { scaleY:1, scaleX:1, marginTop: 0, width: '100vw', height: '100vh', ease: Circ.easeIn } );
    TweenMax.to('.main-container', 1, { background: 'crimson', delay: 1 } );    
})