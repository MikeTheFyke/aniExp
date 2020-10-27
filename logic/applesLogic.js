// Onload

TweenMax.to("#title-nemesis", 0.5, { y: '410px',ease: Elastic.easeOut, delay: 0.5});
TweenMax.to("#title-authors", 0.5, { y: '100px', delay: 1});
TweenMax.to(".cta", 0.5, { scaleX: 1, delay: 1.5});

// cta1
document.getElementById('cta1').addEventListener('click', function () {
    TweenMax.to("#cta2", 1, { x: '-20vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: '-40vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: '-60vw', opacity:0})
    TweenMax.to("#cta1", 1, { x: window.screen.width / 1.75, delay: 1.5})
    TweenMax.to("#cover1-container", 1, { opacity: 1, y: -100, scaleX: 2, scaleY: 1.5, delay: 2.5});

    TweenMax.to("#title-nemesis", 1, {fontSize: '10em', y: '394px', transformOrign: "bottom right", delay: 2.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.5em', y: '394px', transformOrign: "bottom right", delay: 3.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.75em', y: '394px', transformOrign: "bottom right", delay: 4})
    TweenMax.to("#title-authors", 1, {fontSize: '2em', delay: 2.5})
    TweenMax.to("#title", 1, {height: '200px', delay: 2.5})

    TweenMax.to("#cta1", 1, { opacity: 0, delay: 2.5})
    TweenMax.to(".buttons-container", 1, { zIndex: 0, delay: 2.5})
})

document.getElementById('cta1').addEventListener('mouseover', function(){
    TweenMax.to('#cta1', 1.5, { y: '200px', scale: 3, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('cta1').addEventListener('mouseout', function(){
    TweenMax.to('#cta1', 1.5, { y: '0px', scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});

// cta2
document.getElementById('cta2').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '20vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: '-20vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: '-40vw', opacity:0})
    TweenMax.to("#cta2", 1, { x: window.screen.width / 6, delay: 1.5})
    TweenMax.to("#cover2-container", 1, { opacity: 1, y: -100, scaleX: 2, scaleY: 1.5, delay: 2.5});
    
    TweenMax.to("#title-nemesis", 1, {fontSize: '10em', y: '394px', delay: 2.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.5em', y: '394px', transformOrign: "bottom right", delay: 3.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.75em', y: '394px', transformOrign: "bottom right", delay: 4})
    TweenMax.to("#title-authors", 1, {fontSize: '2em', delay: 2.5})
    TweenMax.to("#title", 1, {height: '200px', delay: 2.5})

    TweenMax.to("#cta2", 1, { opacity: 0, delay: 2.5})
    TweenMax.to(".buttons-container", 1, { zIndex: 0, delay: 2.5})
})

document.getElementById('cta2').addEventListener('mouseover', function(){
    TweenMax.to('#cta2', 1.5, { y: '200px', scale: 3, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('cta2').addEventListener('mouseout', function(){
    TweenMax.to('#cta2', 1.5, { y: '0px', scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});

// cta3
document.getElementById('cta3').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '40vw', opacity:0})
    TweenMax.to("#cta2", 1, { x: '20vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: '-20vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: -window.screen.width / 4, delay: 1.5})
    TweenMax.to("#cover3-container", 1, { opacity: 1, y: -100, scaleX: 2, scaleY: 1.5, delay: 2.5});

    TweenMax.to("#title-nemesis", 1, {fontSize: '10em', y: '394px', delay: 2.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.5em', y: '394px', transformOrign: "bottom right", delay: 3.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.75em', y: '394px', transformOrign: "bottom right", delay: 4})
    TweenMax.to("#title-authors", 1, {fontSize: '2em', delay: 2.5})
    TweenMax.to("#title", 1, {height: '200px', delay: 2.5})

    TweenMax.to("#cta3", 1, { opacity: 0, delay: 2.5})
    TweenMax.to(".buttons-container", 1, { zIndex: 0, delay: 2.5})
})

document.getElementById('cta3').addEventListener('mouseover', function(){
    TweenMax.to('#cta3', 1.5, { y: '200px', scale: 3, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('cta3').addEventListener('mouseout', function(){
    TweenMax.to('#cta3', 1.5, { y: '0px', scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});

// cta4
document.getElementById('cta4').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '60vw', opacity:0})
    TweenMax.to("#cta2", 1, { x: '40vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: '20vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: -window.screen.width/ 1.6, delay: 1.5})
    TweenMax.to("#cover4-container", 1, { opacity: 1, y: -100, scaleX: 2, scaleY: 1.5, delay: 2.5});

    TweenMax.to("#title-nemesis", 1, {fontSize: '10em', y: '394px', delay: 2.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.5em', y: '394px', transformOrign: "bottom right", delay: 3.5})
    TweenMax.to("#title-nemesis", 0.5, {fontSize: '9.75em', y: '394px', transformOrign: "bottom right", delay: 4})
    TweenMax.to("#title-authors", 1, {fontSize: '2em', delay: 2.5})
    TweenMax.to("#title", 1, {height: '200px', delay: 2.5})
    
    TweenMax.to("#cta4", 1, { opacity: 0, delay: 2.5})
    TweenMax.to(".buttons-container", 1, { zIndex: 0, delay: 2.5})
})

document.getElementById('cta4').addEventListener('mouseover', function(){
    TweenMax.to('#cta4', 1.5, { y: '200px', scale: 3, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('cta4').addEventListener('mouseout', function(){
    TweenMax.to('#cta4', 1.5, { y: '0px', scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});

// Reset by title click
document.getElementById('title-nemesis').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '0', opacity:1, zIndex: 1})
    TweenMax.to("#cta2", 1, { x: '0',opacity:1, zIndex: 1})
    TweenMax.to("#cta3", 1, { x: '0',opacity:1, zIndex: 1})
    TweenMax.to("#cta4", 1, { x: '0',opacity:1, zIndex: 1})
    TweenMax.to("#cover1-container", 1, { opacity: 0, y: 0, scaleX: 1, scaleY: 1})
    TweenMax.to("#issue1-cover", 1.5, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
    TweenMax.to("#cover2-container", 1, { opacity: 0, y: 0, scaleX: 1, scaleY: 1})
    TweenMax.to("#issue2-cover", 1.5, { content:'url("../images/Nemesis/Nemesis2TextLessCover.png")'});
    TweenMax.to("#cover3-container", 1, { opacity: 0, y: 0, scaleX: 1, scaleY: 1})
    TweenMax.to("#issue3-cover", 1.5, { content:'url("../images/Nemesis/Nemesis3TextLessCover.png")'});
    TweenMax.to("#cover4-container", 1, { opacity: 0, y: 0, scaleX: 1, scaleY: 1})
    TweenMax.to("#issue4-cover", 1.5, { content:'url("../images/Nemesis/Nemesis4TextlessCover.png")'});
    TweenMax.to("#title-nemesis", 1, {fontSize: '15em', y: '400px', delay: 1})
    TweenMax.to("#title-authors", 1, {fontSize: '4em', delay: 1})
    TweenMax.to("#title", 1, {height: '300px', delay: 1})
})