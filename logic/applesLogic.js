TweenMax.to("#title-nemesis", 0.5, { y: '410px',ease: Elastic.easeOut, delay: 0.5});
TweenMax.to("#title-authors", 0.5, { y: '100px', delay: 1});

TweenMax.to(".cta", 0.5, { scaleX: 1, delay: 1.5});

document.getElementById('cta1').addEventListener('click', function () {
    TweenMax.to("#cta2", 1, { x: '-20vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: '-40vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: '-60vw', opacity:0})
    TweenMax.to("#cta1", 1, { x: window.screen.width / 1.75, delay: 1.5})
    TweenMax.to("#issue1-cover", 1, { opacity: 1, y: -100, scaleX: 2, scaleY: 1.5, delay: 2.5});
    TweenMax.to("#cta1", 1, { opacity: 0, delay: 2.5})
    TweenMax.to(".buttons-container", 1, { zIndex: 0, delay: 2.5})
})

document.getElementById('cta2').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '20vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: '-20vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: '-40vw', opacity:0})
    TweenMax.to("#cta2", 1, { x: window.screen.width / 6, delay: 1.5})
})

document.getElementById('cta3').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '40vw', opacity:0})
    TweenMax.to("#cta2", 1, { x: '20vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: '-20vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: -window.screen.width / 4, delay: 1.5})
})

document.getElementById('cta4').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '60vw', opacity:0})
    TweenMax.to("#cta2", 1, { x: '40vw', opacity:0})
    TweenMax.to("#cta3", 1, { x: '20vw', opacity:0})
    TweenMax.to("#cta4", 1, { x: -window.screen.width/ 1.6, delay: 1.5})
})

document.getElementById('title-nemesis').addEventListener('click', function () {
    TweenMax.to("#cta1", 1, { x: '0', opacity:1, zIndex: 1})
    TweenMax.to("#cta2", 1, { x: '0',opacity:1, zIndex: 1})
    TweenMax.to("#cta3", 1, { x: '0',opacity:1, zIndex: 1})
    TweenMax.to("#cta4", 1, { x: '0',opacity:1, zIndex: 1})
    TweenMax.to("#issue1-cover", 1, { opacity: 0, y: 0, scaleX: 1, scaleY: 1})
})