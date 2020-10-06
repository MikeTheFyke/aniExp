TweenMax.to('h1', 1, { opacity: 1, scale: 1 } );
TweenMax.to('button', 1, { opacity: 1, scale: 1 } );

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('.panel', 1.5, { scaleY: 1, height: '100vh', ease: Circ.easeOut } );
    TweenMax.to('#bullseye', 1, { opacity: 1, y: 0, delay: 1, ease: Bounce.easeOut } );
    TweenMax.to('p', 1, { opacity: 1, y: 20, delay: 1.4 } );
    TweenMax.to('.box', 3, { opacity: 1, scale: 1, ease: Elastic.easeOut.config(1, 0.3) });
})

document.getElementById('cta').addEventListener('mouseover', function(){
    TweenMax.to('#cta', 1.5, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('cta').addEventListener('mouseout', function(){
    TweenMax.to('#cta', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});


// TweenMax.to('SELECTOR', DURATION, { CSS TAG ELEMENTS TO ANIMATE } )
// https://greensock.com/docs/v3/Eases