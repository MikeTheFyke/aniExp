TweenMax.to('.footer', 1, { opacity: 1, scale: 1 } );

/// Home button animations
document.getElementById('home-link').addEventListener('click', function () {
    this.style.color = "white";
    this.style.backgroundColor = "black";
    this.style.borderColor = "black";
});

document.getElementById('home-link').addEventListener('mouseover', function(){
    TweenMax.to('#home-link', 1.5, { scale: 1.5, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "white";
    this.style.color = "white";
    this.style.backgroundColor = "black";
});

document.getElementById('home-link').addEventListener('mouseout', function(){
    TweenMax.to('#home-link', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "black";
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
});

/// Link1 button animations
document.getElementById('tomato-link').addEventListener('click', function () {
    this.style.color = "white";
    this.style.backgroundColor = "crimson";
});

document.getElementById('tomato-link').addEventListener('mouseover', function(){
    TweenMax.to('#tomato-link', 1.5, { scale: 1.5, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "red";
    this.style.color = "crimson";
    this.style.backgroundColor = "white";
});

document.getElementById('tomato-link').addEventListener('mouseout', function(){
    TweenMax.to('#tomato-link', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "black";
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
});
/// Link2 button animations
document.getElementById('can-link').addEventListener('click', function () {
    this.style.color = "white";
    this.style.backgroundColor = "limegreen";
});

document.getElementById('can-link').addEventListener('mouseover', function(){
    TweenMax.to('#can-link', 1.5, { scale: 1.5, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "green";
    this.style.color = "limegreen";
    this.style.backgroundColor = "white";
});

document.getElementById('can-link').addEventListener('mouseout', function(){
    TweenMax.to('#can-link', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "black";
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
});
/// Link3 button animations
document.getElementById('bottle-link').addEventListener('click', function () {
    this.style.color = "white";
    this.style.backgroundColor = "lightsteelblue";
});

document.getElementById('bottle-link').addEventListener('mouseover', function(){
    TweenMax.to('#bottle-link', 1.5, { scale: 1.5, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "blue";
    this.style.color = "lightsteelblue";
    this.style.backgroundColor = "white";
});

document.getElementById('bottle-link').addEventListener('mouseout', function(){
    TweenMax.to('#bottle-link', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "black";
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
});
/// Link4 button animations
document.getElementById('apple-link').addEventListener('click', function () {
    this.style.color = "white";
    this.style.backgroundColor = "goldenrod";
});

document.getElementById('apple-link').addEventListener('mouseover', function(){
    TweenMax.to('#apple-link', 1.5, { scale: 1.5, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "orange";
    this.style.color = "goldenrod";
    this.style.backgroundColor = "white";
});

document.getElementById('apple-link').addEventListener('mouseout', function(){
    TweenMax.to('#apple-link', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
    this.style.borderColor = "black";
    this.style.color = "black";
    this.style.backgroundColor = "transparent";
});