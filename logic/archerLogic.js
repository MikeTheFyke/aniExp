TweenMax.to('#cta', 1, { opacity:1, scaleY:1, scaleX:1, delay: 2} );

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('#cta', 0.25, { opacity:0, scaleY:0, scaleX:0 } );
    TweenMax.to('#dot', 0.25, { scaleY:1, scaleX:1, marginTop: 0, width: '100vw', height: '100vh', ease: Circ.easeIn, delay: 0.50 } );
    TweenMax.to('#dot', 0.25, { borderRadius: '0px', delay: 0.75 } );
    TweenMax.to('#dot', 1, { y: '42vh', x:'-1vw', width: '100px', height: '100px', borderRadius: '50px', delay: 2} );
    TweenMax.to('#hourhand', 2, { opacity:1, rotation:1440, transformOrigin:"center bottom", delay: 2 } );
    TweenMax.to('#rightDiv', 0.25, { opacity:1, delay: 2 } );
    TweenMax.to('#leftDiv', 0.25, { opacity:1, delay: 2 } );
    TweenMax.to('#centerDiv', 0.25, { opacity:1, delay: 2 } );
    TweenMax.to('#clockFace', 0.25, { opacity:1, delay: 2 } );
    TweenMax.to('.clockNum', 0.25, { opacity:1, delay: 2 } );
    TweenMax.to('body', 0.25, { backgroundColor: 'black', delay: 1.75 } );
    TweenMax.to('#minutehand', 2, { opacity:1, rotation:1440, transformOrigin:"center bottom", delay: 2.25 } );
    TweenMax.to('#number3', 0.50, { y:'100vh', delay: 4 } );
    TweenMax.to('#number4', 0.50, { y:'100vh', delay: 4 } );
    TweenMax.to('#number5', 0.50, { y:'100vh', delay: 4 } );
    TweenMax.to('#number6', 0.50, { y:'100vh', delay: 4 } );
    TweenMax.to('#number7', 0.50, { y:'100vh', delay: 4 } );
    TweenMax.to('#number8', 0.50, { y:'100vh', delay: 4 } );
    TweenMax.to('#number10', 0.50, { y:'100vh', delay: 4 } );
    TweenMax.to('#number12', 1, { y:'100vh', delay: 4.25 } );
    TweenMax.to('#number2', 0.50, { y:'100vh', delay: 4.25 } );
    TweenMax.to('#number9', 0.50, { y:'100vh', delay: 4.25 } );
    TweenMax.to('#number1', 1, { y:'100vh', delay: 4.50 } );
    TweenMax.to('#number11', 1, { y:'100vh', delay: 4.50 } );
})
