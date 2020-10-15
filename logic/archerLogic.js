TweenMax.to('#cta', 1, { opacity:1, scaleY:1, scaleX:1, delay: 2} );

document.getElementById('cta').addEventListener('click', function () {
    TweenMax.to('#cta', 0.25, { opacity:0, scaleY:0, scaleX:0 } );

    TweenMax.to('#dot', 0.25, { opacity: 1, scaleY:40, scaleX:40, delay: 0.50 } );
    TweenMax.to('#dot', 0.50, { scaleX: 1, scaleY: 1, y:'40px', x:'40px;', delay: 1} );
    TweenMax.to('#hourhand', 2, { opacity:1, rotation:1440, transformOrigin:"center bottom", delay: 1 } );
    TweenMax.to('#centerDiv', 0.25, { opacity:1, delay: 1 } );
    TweenMax.to('#clockFace', 0.25, { opacity:1, delay: 1 } );
    TweenMax.to('.clockNum', 0.25, { opacity:1, delay: 1 } );
    TweenMax.to('body', 0.25, { backgroundColor: 'black', delay: 1 } );
    TweenMax.to('#minutehand', 2, { opacity:1, rotation:2520, transformOrigin:"center bottom", delay: 1.15 } );

    TweenMax.to('#rightDiv', 0.25, { opacity:1, delay: 1 } );
    TweenMax.to("#leftFoot", 0.5, { x:'-750px', y:'-90px', delay: 1 } );
    TweenMax.to("#leftFoot", 0.5, { x:'0px', y:'0px', delay: 1.5 } );
    TweenMax.to("#leftFoot", 0.5, { x:'-750px', y:'-90px', delay: 2 } );
    TweenMax.to("#leftFoot", 0.5, { x:'0px', y:'0px', delay: 2.5 } );
    TweenMax.to("#leftFoot", 0.5, { x:'-750px', y:'-90px', delay: 3 } );
    TweenMax.to("#leftFoot", 0.5, { x:'0px', y:'0px', delay: 3.5 } );
    TweenMax.to("#leftFoot", 0.5, { x:'-750px', y:'-90px', delay: 4 } );


    TweenMax.to('#leftDiv', 0.25, { opacity:1, delay: 1 } );
    TweenMax.to("#rightFoot", 0.5, { x:'700px', y:'-90px', delay: 1 } );
    TweenMax.to("#rightFoot", 0.5, { x:'0px', y:'0px', delay: 1.5 } );
    TweenMax.to("#rightFoot", 0.5, { x:'700px', y:'-90px', delay: 2 } );
    TweenMax.to("#rightFoot", 0.5, { x:'0px', y:'0px', delay: 2.5 } );
    TweenMax.to("#rightFoot", 0.5, { x:'700px', y:'-90px', delay: 3 } );
    TweenMax.to("#rightFoot", 0.5, { x:'0px', y:'0px', delay: 3.5 } );
    TweenMax.to("#rightFoot", 0.5, { x:'700px', y:'-90px', delay: 4 } );

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
    TweenMax.to('#leaf', 0.25, { opacity: 1, scaleX: 1, delay: 5.5 } );

    TweenMax.to('#dot', 0.25, { opacity:0, delay: 5.5 } );
    TweenMax.to('#leaf', 1, { y: '-100vh', delay: 6.5 } );
    TweenMax.to('#clockFace', 1, { zIndex: 3, scaleX: 1.5, scaleY: 1.5, delay: 7.5 } );

    TweenMax.to("#scanner00", 0.05, { opacity: 1, delay: 7.75 } );
    TweenMax.to("#scanner01", 0.04, { opacity: 1, delay: 10.14 } );
        TweenMax.to("#scanner00", 0.04, { opacity: 0, delay: 10.14 } );
    TweenMax.to("#scanner02", 0.04, { opacity: 1, delay: 10.18 } );
        TweenMax.to("#scanner01", 0.04, { opacity: 0, delay: 10.18 } );
    TweenMax.to("#scanner03", 0.04, { opacity: 1, delay: 10.22 } );
        TweenMax.to("#scanner02", 0.04, { opacity: 0, delay: 10.22 } );
    TweenMax.to("#scanner04", 0.04, { opacity: 1, delay: 10.26 } );
        TweenMax.to("#scanner03", 0.04, { opacity: 0, delay: 10.26 } );
    TweenMax.to("#scanner05", 0.04, { opacity: 1, delay: 10.30 } );
        TweenMax.to("#scanner04", 0.04, { opacity: 0, delay: 10.30 } );
    TweenMax.to("#scanner06", 0.04, { opacity: 1, delay: 10.34 } );
        TweenMax.to("#scanner05", 0.04, { opacity: 0, delay: 10.34 } );
    TweenMax.to("#scanner07", 0.04, { opacity: 1, delay: 10.38 } );
        TweenMax.to("#scanner06", 0.04, { opacity: 0, delay: 10.38 } );
    TweenMax.to("#scanner08", 0.04, { opacity: 1, delay: 10.42 } );
        TweenMax.to("#scanner07", 0.04, { opacity: 0, delay: 10.42 } );
    TweenMax.to("#scanner09", 0.04, { opacity: 1, delay: 10.46 } );
        TweenMax.to("#scanner08", 0.04, { opacity: 0, delay: 10.46 } );
    TweenMax.to("#scanner10", 0.04, { opacity: 1, delay: 10.50 } );
        TweenMax.to("#scanner09", 0.04, { opacity: 0, delay: 10.50 } );
    TweenMax.to("#scanner11", 0.04, { opacity: 1, delay: 10.85 } );
        TweenMax.to("#scanner10", 0.04, { opacity: 0, delay: 10.85 } );
        TweenMax.to("#scanner11", 0.04, { opacity: 0, delay: 10.89 } );

    TweenMax.to("#mikefyke-text", 1, { zIndex: 2, scaleX: 1.5, scaleY: 1.5, opacity: 1, delay: 8 } );
    TweenMax.to('#clockFace', 1, { scaleX:.03, scaleY:.03, y:'16vh', x:'-24.5vw', delay: 8.5 } );

    TweenMax.to('#clockFace', 1, { x:'-575px', y:'15px', delay: 9.5 } );
    TweenMax.to("#mikefyke-text", 1, { x:'-50px', y:'-180px', delay: 9.5 } );

    TweenMax.to("#scanner11", 1, { x:'100vw', delay: 10.5 } );
    TweenMax.to("#mikefyke-text", 1, { x:'100vw', delay: 10.5 } );

    TweenMax.to(".bulletDivs", 2, { x: '450vw', delay: 11 } );
    TweenMax.to("#bulletStreak", 0.5, { opacity: 1, delay: 11 } );
    
    TweenMax.to("#clockFace", 1, { x:'25px', y:'-350px', delay: 11.25 } );
    TweenMax.to("#bulletStreak", 1, { opacity: 0, x:'725px', y:'-200px', delay: 11.25 } );
    TweenMax.to("#blueKickDiv", 0.5, { opacity: 1, scaleX: 1, scaleY: 1, delay: 11.5 } );
    TweenMax.to("#blueKickDiv", 0.5, { scaleX:0, scaleY:0, delay: 12.5 } );
    TweenMax.to("#clockFace", 0.5, { x:'-465px', y:'85px', scaleY: 0.75, scaleX: 0.75, delay: 12.5 } );
    
    TweenMax.to("#mikyung-text", 0.5, { opacity: 1, y:'-450px', scaleX: 1.5, scaleY: 1.5, delay: 12.75} );
    TweenMax.to("#heart", 0.5, { opacity: 1, delay: 12.75 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1.5, scaleY: 1.5, delay: 13.25 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1, scaleY: 1, delay: 13.75 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1.5, scaleY: 1.5, delay: 14.25 } );
    TweenMax.to("#heart", 0.5, { scaleX: 1, scaleY: 1, delay: 14.75 } );
    TweenMax.to("#necklaceDiv", 0.5, { opacity: 1, scaleX: 1, scaleY: 1, transformOrigin:"center", delay: 12.75} );
    TweenMax.to("#clockFace", 0.5, { scaleY: 0.05, scaleX: 0.05, delay: 13 } );
    TweenMax.to("#heart", 1, { y:'100vh', rotation: -45, delay: 15.25} );
    TweenMax.to("#mikyung-text", 0.5, { rotation: 90, delay: 15.50 } );
    TweenMax.to("#clockFace", 1, { x:'150px', y:'-400px', delay: 15.50 });
    TweenMax.to("#necklaceDiv", 0.75, { x:'-100vw', delay: 15.75 } );
    TweenMax.to("#mikyung-text", 0.5, { y:'100vh', delay: 15.75 } );
    
    TweenMax.to("#buildingsDiv", 3, { opacity: 1, x:'-150vw', y:'-150vh', delay: 15.75} );

    TweenMax.to("#signal-pulse", 0.5, { opacity: 1, scaleX: 3, scaleY: 3, delay: 17.75 } );
    TweenMax.to("#signal-pulse", 0.5, { scaleX: 2, scaleY: 2, delay: 18.25 } );
    TweenMax.to("#signal-pulse", 0.5, { scaleX: 3, scaleY: 3, delay: 18.75 } );
    TweenMax.to("#signal-pulse", 0.5, { scaleX: 2, scaleY: 2, delay: 19.25 } );
    TweenMax.to("#signal-pulse", 0.5, { opacity:0, scaleX: 1, scaleY: 1, delay: 19.75 } );

    TweenMax.to("#clockFace", 1, { x:'-150px', y:'-175px', scaleX: 0.05, scaleY: 0.05, delay: 16.5 });
    TweenMax.to("#parnell-text", 1, { opacity: 1, y: '-750px', scaleX: 1.5, scaleY: 1.5, delay: 17.5} );

    TweenMax.to("#parnellDiv", 1, { opacity: 1, x:'-600px', y:'-450px', delay: 17.5} ) ;
    
    TweenMax.to("#parnell-text", 0.5, { x:'-625px', y: '-775px', delay: 20.25} );
    TweenMax.to("#clockFace", 0.5, { x:'-775px', y:'-200px', delay: 20.25 });
    TweenMax.to("#parnellDiv", 0.5, { x:'-1125px', y:'-475', delay: 20.25});

    TweenMax.to("#clockFace", 0.5, { x:'-600px', y:'-50px', delay: 20.75 });
    TweenMax.to("#parnell-text", 1, { x:'-425px', y: '-150vh', delay: 20.75} );
    TweenMax.to("#parnellDiv", 1, { x:'-925px', y:'-150vh', delay: 20.75});

    TweenMax.to(".yellowDivs", 2, { y:'-200vh', delay: 21} );

    TweenMax.to("#clockFace", 1, { x:'-650px', y:'350px', delay: 21.5 });
    TweenMax.to(".orangeDivs", 2, { y:'-1100px', delay: 21 });
    TweenMax.to("#taylor-text", 1, { x:'1000px', delay: 22});

    TweenMax.to("#clockFace", 1, { x:'-350px', y:'275px', scaleX: 0.15, scaleY: 0.15, delay: 23 });
    TweenMax.to("#taylor-text", 1, {x:'1400px', scaleX: 2, scaleY: 2, delay: 23});

    TweenMax.to(".orangeDivs", 0.5, { x:'100vw', delay: 24 });
    TweenMax.to("#taylor-text", 0.5, {x:'200vw', delay: 24});
    TweenMax.to("#clockFace", 1, { x:'-450px', y:'-50px', scaleX: 1, scaleY: 1, delay: 24});
    TweenMax.to("#clockFace", 1, { x:'-450px', y:'-50px', scaleX: 0.1, scaleY: 0.1, delay: 25});

    TweenMax.to(".runDiv3", 3, {x:'250vw', delay: 25});
    TweenMax.to(".runDiv2", 3, {x:'250vw', delay: 25.25});
    TweenMax.to(".runDiv1", 3, {x:'250vw', delay: 25.50});

    TweenMax.to("#bulletStreak", 0.25, { x:'110px', y:'-70px', scaleY:3.75, opacity: 1, delay: 25 } );

    TweenMax.to("#clockFace", 1, {x:'225px', delay: 26.5});
    TweenMax.to("#bulletStreak", 0.75, { x:'300px', scaleY: 2, delay: 26.5})

    TweenMax.to("#glassDiv", 1, { x:'2200px', y:'-400px', scaleX:0.5, scaleY: 0.5, delay: 26.5})
    TweenMax.to("#clockFace", 1, {x:'-800px', scaleX: 0.05, scaleY: 0.05, delay: 26.5});
    TweenMax.to("#walter-text", 1, { y:'-775px', scaleX: 1.5, scaleY: 1.5, delay: 26.5})
    TweenMax.to("#and-text", 1, { y:'250px', scaleX: 1.5, scaleY: 1.5, delay:26.5})

    TweenMax.to("#bulletStreak", 0.25, {opacity: 0, delay: 28})
    TweenMax.to("#clockFace", .75, { x:'-850px', delay: 27.5})
    TweenMax.to("#glassDiv", 1, { y:'-150vh', delay: 28.25});

    TweenMax.to("#and-text", 1, { y:'-250px', delay:28.25})
    TweenMax.to("#walter-text", 1, { y:'-150vh', delay: 28.25});

    TweenMax.to("#clockFace", 1, { x:'-775px', delay: 28.5});

    TweenMax.to(".finalRedDivs", 1, { y:'-1000px', delay: 29})

    TweenMax.to("#clockFace", 1, { opacity:0, delay: 29.5});
    TweenMax.to("#jason-fish", 0.5, { scaleY: 2.75, scaleX: 2.75, delay: 29.5});

    TweenMax.to("#j-text", 0.5, { y:'1200px', delay: 30});
    TweenMax.to("#a-text", 0.5, { y:'1200px', delay: 30.25});
    TweenMax.to("#s-text", 0.5, { y:'1200px', delay: 30.5});
    TweenMax.to("#o-text", 0.5, { y:'1200px', delay: 30.75});
    TweenMax.to("#n-text", 0.5, { y:'1200px', delay: 31});

    TweenMax.to("#happy-text", 0.5, { scaleY: 1, delay: 32});

    TweenMax.to(".finalRedDivs", 1, { backgroundColor:'#e9ed6d', delay: 32})
    TweenMax.to(".finalRedDivs", 1, { backgroundColor:'#92ed61', delay: 35})
    TweenMax.to(".finalRedDivs", 1, { backgroundColor:'#63ebeb', delay: 38})
    TweenMax.to(".finalRedDivs", 1, { backgroundColor:'#c06ded', delay: 41})
})
