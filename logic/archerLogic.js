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
    TweenMax.to('#rightDiv', 2, { y:'-100vh', x:'50vw', delay: 5 } );
    TweenMax.to('#leftDiv', 2, { y:'-100vh', x:'-50vw', delay: 5 } );
    TweenMax.to('#hourhand', 0.5, { opacity:0, delay: 5.5 } );
    TweenMax.to('#minutehand', 0.5, { opacity:0, delay: 5.5 } );
    TweenMax.to('#jet', 0.5, { opacity: 1, scaleX: 1, delay: 5.5 } );
    TweenMax.to('#dot', 0.5, { opacity:0, delay: 6 } );
    TweenMax.to('#jet', 1, { y: '-100vh', delay: 6.5 } );
    TweenMax.to('#clockFace', 1, { zIndex: 3, scaleX: 1.5, scaleY: 1.5, delay: 7.5 } );
    TweenMax.to("#blueLeft1", 1, { opacity: 1, delay: 7.5 } );
    TweenMax.to("#blueLeft2", 1, { opacity: 1, delay: 7.5 } );
    TweenMax.to("#blueRight1", 1, { opacity: 1, delay: 7.5 } );
    TweenMax.to("#blueRight2", 1, { opacity: 1, delay: 7.5 } );
    TweenMax.to("#blueRight3", 1, { opacity: 1, delay: 7.5 } );
    TweenMax.to("#blueRight4", 1, { opacity: 1, delay: 7.5 } );
    TweenMax.to("#mikefyke-text", 1, { zIndex: 2, opacity: 1, delay: 8 } );
    TweenMax.to('#clockFace', 1, { scaleX:.03, scaleY:.03, y:'16vh', x:'-24.5vw', delay: 8.5 } );

    TweenMax.to('#clockFace', 1, { x:'-575px', y:'15px', delay: 9.5 } );
    TweenMax.to("#mikefyke-text", 1, { x:'-50px', y:'-180px', delay: 9.5 } );

    TweenMax.to("#blueLeft1",  1, { x:'100vw', delay: 10.5 } );
    TweenMax.to("#blueLeft2",  1, { x:'100vw', delay: 10.5 } );
    TweenMax.to("#blueRight1", 1, { x:'100vw', delay: 10.5 } );
    TweenMax.to("#blueRight2", 1, { x:'100vw', delay: 10.5 } );
    TweenMax.to("#blueRight3", 1, { x:'100vw', delay: 10.5 } );
    TweenMax.to("#blueRight4", 1, { x:'100vw', delay: 10.5 } );
    TweenMax.to("#mikefyke-text", 1, { x:'100vw', delay: 10.5 } );

    TweenMax.to(".bulletDivs", 2, { x: '450vw', delay: 11 } );
    TweenMax.to("#bulletStreak", 0.5, { opacity: 1, delay: 11 } );
    
    TweenMax.to("#clockFace", 1, { x:'25px', y:'-350px', delay: 11.25 } );
    TweenMax.to("#bulletStreak", 1, { opacity: 0, x:'725px', y:'-200px', delay: 11.25 } );
    TweenMax.to("#blueKickDiv", 0.5, { opacity: 1, scaleX: 1, scaleY: 1, delay: 11.5 } );
    TweenMax.to("#blueKickDiv", 0.5, { scaleX:0, scaleY:0, delay: 12.5 } );
    TweenMax.to("#clockFace", 0.5, { x:'-465px', y:'85px', scaleY: 0.75, scaleX: 0.75, delay: 12.5 } );
    
    TweenMax.to("#mikyung-text", 0.5, { opacity: 1, y:'-450px', delay: 12.75} );
    TweenMax.to("#heart", 0.5, { opacity: 1, delay: 12.75 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1.5, scaleY: 1.5, delay: 13.25 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1, scaleY: 1, delay: 13.75 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1.5, scaleY: 1.5, delay: 14.25 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1, scaleY: 1, delay: 14.75 } );
    TweenMax.to("#necklaceDiv", 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin:"center", delay: 12.75} );
    TweenMax.to("#clockFace", 0.5, { scaleY: 0.05, scaleX: 0.05, delay: 13 } );
    TweenMax.to("#heart", 1, { y:'100vh', rotation: -45, delay: 15.25} );
})
