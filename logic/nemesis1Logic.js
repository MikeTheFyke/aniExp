var page = 1;

// Forward Button Logic
function nemesis1Forward () {
    TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis01/Nemesis01-page'+ page + '.jpg")'});
    document.getElementById('page-icon-number').innerHTML = page + 1;
    document.getElementById('pageback-icon-number').innerHTML = page - 1;
    console.log(" Page # " + page);
    if (page >= 23){
        TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
        page = 1;
        console.log(" Page # " + page);
    } 
    else if (page == 0){
        TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
        console.log(" Page # " + page);
        page = 1;
    } else {
        page ++;
    }
}

document.getElementById('page-button').addEventListener('mouseover', function(){
    TweenMax.to('#page-button', 1.5, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('page-button').addEventListener('mouseout', function(){
    TweenMax.to('#page-button', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});

// Back Button Logic
function nemesis1Back () {
    TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis01/Nemesis01-page'+ page + '.jpg")'});
    document.getElementById('page-icon-number').innerHTML = page + 1;
    document.getElementById('pageback-icon-number').innerHTML = page - 1;
    console.log(" Page # " + page);
    if (page < 1){
        TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
        document.getElementById('pageback-icon-number').innerHTML = ("Cover");
        console.log(" Page # " + page);
        page = 0;
    } else {
        page --;
    }
}

document.getElementById('pageback-button').addEventListener('mouseover', function(){
    TweenMax.to('#pageback-button', 1.5, { scale: 2, ease: Elastic.easeOut.config(1, 0.3) } );
});

document.getElementById('pageback-button').addEventListener('mouseout', function(){
    TweenMax.to('#pageback-button', 1.5, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) } );
});