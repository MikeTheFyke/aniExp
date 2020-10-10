TweenMax.to('#cta', 1, { opacity:1, scaleY:1, scaleX:1, delay: 2} );

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('#cta', 0.25, { opacity:0, scaleY:0, scaleX:0 } );
    TweenMax.to('#dot', 0.25, { scaleY:1, scaleX:1, marginTop: 0, width: '100vw', height: '100vh', ease: Circ.easeIn, delay: 0.50 } );
    TweenMax.to('#dot', 0.25, { borderRadius: '0px', delay: 0.75 } );
    TweenMax.to('#dot', 1, { y: '42vh', x:'-3vw', width: '100px', height: '100px', borderRadius: '50px', delay: 2} );
    TweenMax.to('#hourhand', 2, { opacity:1, rotation:1440, transformOrigin:"center bottom", delay: 2 } );
})
