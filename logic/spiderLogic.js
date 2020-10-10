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
// Horizontal Stripes
    TweenMax.to('#stripe1T', 0.25, { opacity:1, scaleX:1, delay: 1 } );
    TweenMax.to('#stripe1B', 0.25, { opacity:1, scaleX:1, y:150, delay: 1 } );
    TweenMax.to('#stripe2T', 0.25, { opacity:1, scaleX:1, y:-150, delay: 1 } );
    TweenMax.to('#stripe2B', 0.25, { opacity:1, scaleX:1, y:300, delay: 1 } );
    TweenMax.to('#stripe3T', 0.25, { opacity:1, scaleX:1, y:-275, delay: 1 } );
    TweenMax.to('#stripe3B', 0.25, { opacity:1, scaleX:1, y:425, delay: 1 } );
    TweenMax.to('#stripe4T', 0.25, { opacity:1, scaleX:1, y:-350, delay: 1 } );
    TweenMax.to('#stripe4B', 0.25, { opacity:1, scaleX:1, y:500, delay: 1 } );

// Top Vertical Stripes
    TweenMax.to('#stripe1L', 0.25, { opacity:1, x:'-10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe1R', 0.25, { opacity:1, x:'10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe2L', 0.25, { opacity:1, x:'-20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe2R', 0.25, { opacity:1, x:'20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3L', 0.25, { opacity:1, x:'-28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3R', 0.25, { opacity:1, x:'28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe4L', 0.25, { opacity:1, x:'-35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe4R', 0.25, { opacity:1, x:'35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5L', 0.25, { opacity:1, x:'-41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5R', 0.25, { opacity:1, x:'41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6L', 0.25, { opacity:1, x:'-46vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6R', 0.25, { opacity:1, x:'46vw', scaleY:1, delay: 2.50 } );

// Bottom Vertical Stripes
    TweenMax.to('#stripe1BL', 0.25, { opacity:1, x:'-10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe1BR', 0.25, { opacity:1, x:'10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe2BL', 0.25, { opacity:1, x:'-20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe2BR', 0.25, { opacity:1, x:'20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3BL', 0.25, { opacity:1, x:'-28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3BR', 0.25, { opacity:1, x:'28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe4BL', 0.25, { opacity:1, x:'-35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe4BR', 0.25, { opacity:1, x:'35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5BL', 0.25, { opacity:1, x:'-41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5BR', 0.25, { opacity:1, x:'41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6BL', 0.25, { opacity:1, x:'-46vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6BR', 0.25, { opacity:1, x:'46vw', scaleY:1, delay: 2.50 } );
    // Middle Vertical Stripes
    TweenMax.to('#stripeMidT', 0.25, { opacity:1, scaleY:1, delay: 4 } );
    TweenMax.to('#stripeMidB', 0.25, { opacity:1, scaleY:1, height: '46vh', delay: 4 } );
    // Top Left Rotate
    TweenMax.to('#stripe1L', 0.25, { rotation:-15, height:'52vh', transformOrigin:"left top", x:'-10vw', delay: 5 } );
    TweenMax.to('#stripe2L', 0.25, { rotation:-13, height:'51vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe3L', 0.25, { rotation:-11, height:'50.5vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe4L', 0.25, { rotation:-10, height:'51vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe5L', 0.25, { rotation:-09, height:'51vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe6L', 0.25, { rotation:-07, height:'51vh', transformOrigin:"left top", delay: 5 } );
    // Bottom Left Rotate
    TweenMax.to('#stripe1BL', 0.25, { rotation:15, height:'52vh', transformOrigin:"left bottom", x:'-10vw', delay: 5 } );
    TweenMax.to('#stripe2BL', 0.25, { rotation:12.75, height:'52vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe3BL', 0.25, { rotation:10.75, height:'51.75vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe4BL', 0.25, { rotation:10, height:'51vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe5BL', 0.25, { rotation:09, height:'51vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe6BL', 0.25, { rotation:07, height:'50vh', transformOrigin:"left bottom", delay: 5 } );
    // Top Right Rotate
    TweenMax.to('#stripe1R', 0.25, { rotation:16, height:'52.25vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe2R', 0.25, { rotation:13, height:'51vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe3R', 0.25, { rotation:11, height:'50.5vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe4R', 0.25, { rotation:10, height:'51vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe5R', 0.25, { rotation:09, height:'51vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe6R', 0.25, { rotation:07, height:'51vh', transformOrigin:"right top", delay: 5 } );
    // Bottom Right Rotate
    TweenMax.to('#stripe1BR', 0.25, { rotation:-16, height:'52.25vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe2BR', 0.25, { rotation:-12.75, height:'52vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe3BR', 0.25, { rotation:-10.75, height:'51.75vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe4BR', 0.25, { rotation:-10, height:'51vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe5BR', 0.25, { rotation:-09, height:'51vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe6BR', 0.25, { rotation:-07, height:'50vh', transformOrigin:"right bottom", delay: 5 } );
    // Spider Eyes
    TweenMax.to('#spider-lefteye', 1, { opacity: 1, scaleY:1, delay: 5 } );
    TweenMax.to('#spider-righteye', 1, { opacity: 1, scaleY:1, delay: 5 } );
    // Head shape
    TweenMax.to('.main-container', 0.25, { background: 'white', delay: 6 } );    
    TweenMax.to('#spider-head', 0.25, { scaleX: 1, scaleY: 1, delay: 6 } );
    TweenMax.to('#spider-lefteye', .25, { x: '-20px', delay: 6 });
    TweenMax.to('#spider-righteye', .25, { x: '20px', delay: 6 });
    TweenMax.to('.panel', 0.25, { scaleX: 0, scaleY: 0, delay: 6 } );
    // Head Lines
    // Horizontal Stripes
    TweenMax.to('#stripe1T', 0.25, { opacity:1, scaleX:0, transformOrigin:"center", delay: 6 } );
    TweenMax.to('#stripe1B', 0.25, { opacity:1, scaleX:0, y:150, transformOrigin:"center", delay: 6 } );
    TweenMax.to('#stripe2T', 0.25, { opacity:1, scaleX:0, y:-150, transformOrigin:"center", delay: 6 } );
    TweenMax.to('#stripe2B', 0.25, { opacity:1, scaleX:0, y:300, transformOrigin:"center", delay: 6 } );
    TweenMax.to('#stripe3T', 0.25, { opacity:1, scaleX:0, y:-275, transformOrigin:"center", delay: 6 } );
    TweenMax.to('#stripe3B', 0.25, { opacity:1, scaleX:0, y:425, transformOrigin:"center", delay: 6 } );
    TweenMax.to('#stripe4T', 0.25, { opacity:1, scaleX:0, y:-350, transformOrigin:"center", delay: 6 } );
    TweenMax.to('#stripe4B', 0.25, { opacity:1, scaleX:0, y:500, transformOrigin:"center", delay: 6 } );
    // Top Vertical Stripes
    TweenMax.to('#stripe1L', 0.25, { opacity:0, x:0, scaleX:1, scaleY:0, delay: 6 } );
    TweenMax.to('#stripe1R', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe2L', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe2R', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe3L', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe3R', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe4L', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe4R', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe5L', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe5R', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe6L', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe6R', 0.25, { opacity:0, x:0, delay: 6 } );
    // Bottom Vertical Stripes
    TweenMax.to('#stripe1BL', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe1BR', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe2BL', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe2BR', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe3BL', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe3BR', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe4BL', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe4BR', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe5BL', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe5BR', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe6BL', 0.25, { opacity:0, x:0, delay: 6 } );
    TweenMax.to('#stripe6BR', 0.25, { opacity:0, x:0, delay: 6 } );
    // Middle Vertical Stripes
    TweenMax.to('#stripeMidT', 0.25, { opacity:0, scaleX:0, delay: 6 } );
    TweenMax.to('#stripeMidB', 0.25, { opacity:0, scaleX:0, delay: 6 } );

    TweenMax.to('#spider-head', 0.25, { content:'url("../images/spider-head-lines.png")', delay: 6 } );
})