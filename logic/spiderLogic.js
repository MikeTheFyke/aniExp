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
    TweenMax.to('#stripe1L', 1, { opacity:1, x:'-10vw', delay: 2 } );
    TweenMax.to('#stripe1R', 1, { opacity:1, x:'10vw', delay: 2 } );
    TweenMax.to('#stripe2L', 2, { opacity:1, x:'-20vw', delay: 2.25 } );
    TweenMax.to('#stripe2R', 2, { opacity:1, x:'20vw', delay: 2.25 } );
    TweenMax.to('#stripe3L', 2, { opacity:1, x:'-28vw', delay: 2.50 } );
    TweenMax.to('#stripe3R', 2, { opacity:1, x:'28vw', delay: 2.50 } );
    TweenMax.to('#stripe4L', 3, { opacity:1, x:'-35vw', delay: 2.75 } );
    TweenMax.to('#stripe4R', 3, { opacity:1, x:'35vw', delay: 2.75 } );
    TweenMax.to('#stripe5L', 3, { opacity:1, x:'-41vw', delay: 3 } );
    TweenMax.to('#stripe5R', 3, { opacity:1, x:'41vw', delay: 3 } );
    TweenMax.to('#stripe6L', 3, { opacity:1, x:'-46vw', delay: 3.25 } );
    TweenMax.to('#stripe6R', 3, { opacity:1, x:'46vw', delay: 3.25 } );

    TweenMax.to('#stripe1T', 2, { opacity:1, scaleX:1, delay: 3.25 } );
    TweenMax.to('#stripe1B', 2, { opacity:1, scaleX:1, y:150, delay: 3.25 } );
    TweenMax.to('#stripe2T', 2, { opacity:1, scaleX:1, y:-150, delay: 3.50 } );
    TweenMax.to('#stripe2B', 2, { opacity:1, scaleX:1, y:300, delay: 3.50 } );
    TweenMax.to('#stripe3T', 2, { opacity:1, scaleX:1, y:-275, delay: 3.75 } );
    TweenMax.to('#stripe3B', 2, { opacity:1, scaleX:1, y:425, delay: 3.75 } );
    TweenMax.to('#stripe4T', 2, { opacity:1, scaleX:'100vw', y:-350, delay: 4 } );
    TweenMax.to('#stripe4B', 2, { opacity:1, scaleX:'100vw', y:500, delay: 4 } );

    TweenMax.to('#stripeMidT', 1, { opacity:1, scaleY:1, delay: 4.25 } );
    TweenMax.to('#stripeMidB', 1, { opacity:1, scaleY:1, height: '46vh', delay: 4.25 } );

    TweenMax.to('#stripe1L', 1, { rotation:-15, height:'42vh', transformOrigin:"left top", x:'-10vw', delay: 5 } );
    TweenMax.to('#stripe2L', 1, { rotation:-13, height:'42vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe3L', 1, { rotation:-11, height:'41vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe4L', 1, { rotation:-10, height:'41vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe5L', 1, { rotation:-09, height:'41vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe6L', 1, { rotation:-07, height:'41vh', transformOrigin:"left top", delay: 5 } );
})