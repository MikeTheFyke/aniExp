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
    TweenMax.to('#stripe1T', 1, { opacity:1, scaleX:1, delay: 1 } );
    TweenMax.to('#stripe1B', 1, { opacity:1, scaleX:1, y:150, delay: 1 } );
    TweenMax.to('#stripe2T', 1, { opacity:1, scaleX:1, y:-150, delay: 1 } );
    TweenMax.to('#stripe2B', 1, { opacity:1, scaleX:1, y:300, delay: 1 } );
    TweenMax.to('#stripe3T', 1, { opacity:1, scaleX:1, y:-275, delay: 1 } );
    TweenMax.to('#stripe3B', 1, { opacity:1, scaleX:1, y:425, delay: 1 } );
    TweenMax.to('#stripe4T', 1, { opacity:1, scaleX:1, y:-350, delay: 1 } );
    TweenMax.to('#stripe4B', 1, { opacity:1, scaleX:1, y:500, delay: 1 } );

// Top Vertical Stripes
    TweenMax.to('#stripe1L', 1, { opacity:1, x:'-10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe1R', 1, { opacity:1, x:'10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe2L', 1, { opacity:1, x:'-20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe2R', 1, { opacity:1, x:'20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3L', 1, { opacity:1, x:'-28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3R', 1, { opacity:1, x:'28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe4L', 2, { opacity:1, x:'-35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe4R', 2, { opacity:1, x:'35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5L', 2, { opacity:1, x:'-41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5R', 2, { opacity:1, x:'41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6L', 2, { opacity:1, x:'-46vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6R', 2, { opacity:1, x:'46vw', scaleY:1, delay: 2.50 } );

// Bottom Vertical Stripes
    TweenMax.to('#stripe1BL', 1, { opacity:1, x:'-10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe1BR', 1, { opacity:1, x:'10vw', scaleY:1, delay: 2 } );
    TweenMax.to('#stripe2BL', 1, { opacity:1, x:'-20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe2BR', 1, { opacity:1, x:'20vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3BL', 1, { opacity:1, x:'-28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe3BR', 1, { opacity:1, x:'28vw', scaleY:1, delay: 2.25 } );
    TweenMax.to('#stripe4BL', 2, { opacity:1, x:'-35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe4BR', 2, { opacity:1, x:'35vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5BL', 2, { opacity:1, x:'-41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe5BR', 2, { opacity:1, x:'41vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6BL', 2, { opacity:1, x:'-46vw', scaleY:1, delay: 2.50 } );
    TweenMax.to('#stripe6BR', 2, { opacity:1, x:'46vw', scaleY:1, delay: 2.50 } );
    // Middle Vertical Stripes
    TweenMax.to('#stripeMidT', 1, { opacity:1, scaleY:1, delay: 4 } );
    TweenMax.to('#stripeMidB', 1, { opacity:1, scaleY:1, height: '46vh', delay: 4 } );
    // Top Left Rotate
    TweenMax.to('#stripe1L', 1, { rotation:-15, height:'52vh', transformOrigin:"left top", x:'-10vw', delay: 5 } );
    TweenMax.to('#stripe2L', 1, { rotation:-13, height:'51vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe3L', 1, { rotation:-11, height:'50.5vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe4L', 1, { rotation:-10, height:'51vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe5L', 1, { rotation:-09, height:'51vh', transformOrigin:"left top", delay: 5 } );
    TweenMax.to('#stripe6L', 1, { rotation:-07, height:'51vh', transformOrigin:"left top", delay: 5 } );
    // Bottom Left Rotate
    TweenMax.to('#stripe1BL', 1, { rotation:15, height:'52vh', transformOrigin:"left bottom", x:'-10vw', delay: 5 } );
    TweenMax.to('#stripe2BL', 1, { rotation:12.75, height:'52vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe3BL', 1, { rotation:10.75, height:'51.75vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe4BL', 1, { rotation:10, height:'51vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe5BL', 1, { rotation:09, height:'51vh', transformOrigin:"left bottom", delay: 5 } );
    TweenMax.to('#stripe6BL', 1, { rotation:07, height:'50vh', transformOrigin:"left bottom", delay: 5 } );
    // Top Right Rotate
    TweenMax.to('#stripe1R', 1, { rotation:16, height:'52.25vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe2R', 1, { rotation:13, height:'51vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe3R', 1, { rotation:11, height:'50.5vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe4R', 1, { rotation:10, height:'51vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe5R', 1, { rotation:09, height:'51vh', transformOrigin:"right top", delay: 5 } );
    TweenMax.to('#stripe6R', 1, { rotation:07, height:'51vh', transformOrigin:"right top", delay: 5 } );
    // Bottom Right Rotate
    TweenMax.to('#stripe1BR', 1, { rotation:-16, height:'52.25vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe2BR', 1, { rotation:-12.75, height:'52vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe3BR', 1, { rotation:-10.75, height:'51.75vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe4BR', 1, { rotation:-10, height:'51vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe5BR', 1, { rotation:-09, height:'51vh', transformOrigin:"right bottom", delay: 5 } );
    TweenMax.to('#stripe6BR', 1, { rotation:-07, height:'50vh', transformOrigin:"right bottom", delay: 5 } );
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
    // Middle Vertical Stripes
    TweenMax.to('#stripeMidT', 1, { width:'5px', height:'40vh', y:'8px', transformOrigin:"top", delay: 6 } );
    TweenMax.to('#stripeMidB', 1, { width:'5px', transformOrigin:"bottom", delay: 6 } );
    // Top Vertical Stripes
    TweenMax.to('#stripe1L', 1, { rotation:-15, y:'22px', x:'-7vw', width:'5px', height:'40vh', delay: 6 } );
    TweenMax.to('#stripe1R', 1, { rotation:15, y:'22px', x:'7vw', width:'5px', height:'40vh', delay: 6 } );
    TweenMax.to('#stripe2L', 1, { rotation:-20, y:'47px', x:'-10vw', width:'5px', height:'39vh', delay: 6 } );
    TweenMax.to('#stripe2R', 1, { rotation:20, y:'47px', x:'10vw', width:'5px', height:'39vh', delay: 6 } );
    TweenMax.to('#stripe3L', 1, { rotation:-32, y:'119px', x:'-15vw', width:'5px', height:'45vh', delay: 6 } );
    TweenMax.to('#stripe3R', 1, { rotation:32, y:'120px', x:'15vw', width:'5px', height:'45vh', delay: 6 } );
    TweenMax.to('#stripe4L', 1, { rotation:-36, y:'180px', x:'-17vw', width:'5px', height:'45vh', delay: 6 } );
    TweenMax.to('#stripe4R', 1, { rotation:36, y:'180px', x:'17vw', width:'5px', height:'45vh', delay: 6 } );
    TweenMax.to('#stripe5L', 1, { x:'-22vw', width:'5px', delay: 6 } );
    TweenMax.to('#stripe5R', 1, { x:'22vw', width:'5px', delay: 6 } );
    TweenMax.to('#stripe6L', 1, { x:'-24vw', width:'5px', delay: 6 } );
    TweenMax.to('#stripe6R', 1, { x:'24vw', width:'5px', delay: 6 } );

})