var page = 1;

function nemesis1Forward () {
    TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis01/Nemesis01-page'+ page + '.jpg")'});
    if (page >= 23){
        TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
        page = 1;
    } else {
        page ++;
    }
}

function nemesis1Back () {
    
}

document.getElementById('page-button').addEventListener('mouseover', function(){
    TweenMax.to('#page-button', 1.5, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('page-button').addEventListener('mouseout', function(){
    TweenMax.to('#page-button', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});