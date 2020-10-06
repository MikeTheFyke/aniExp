document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('.panel', 1.5, { scaleY: 1, height: '100vh', ease: Circ.easeOut } );
    TweenMax.to('#bullseye', 1, { opacity: 1, y: 0, delay: 1, ease: Bounce.easeOut } );

})


// TweenMax.to('SELECTOR', DURATION, { CSS TAG ELEMENTS TO ANIMATE } )
// https://greensock.com/docs/v3/Eases