TweenMax.to("#title-nemesis", 0.5, { y: '410px',ease: Elastic.easeOut, delay: 0.5});
TweenMax.to("#title-authors", 0.5, { y: '100px', delay: 1});

TweenMax.to(".cta", 0.5, { scaleX: 1, delay: 1.5});

document.getElementById('cta1').addEventListener('click', function () {
    TweenMax.to("#cta2", 1, { opacity:0})
    TweenMax.to("#cta3", 1, { opacity:0})
    TweenMax.to("#cta4", 1, { opacity:0})
})