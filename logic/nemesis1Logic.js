var page = 0;

// Forward Button Logic
function nemesis1Forward () {
    TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis01/Nemesis01-page'+ page + '.jpg")'});
    document.getElementById('page-icon-number').innerHTML = page;
    console.log(" Page # " + page);
    if (page >=24 ){
        TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
        document.getElementById('page-icon-number').innerHTML = "";
        page = 1;
        console.log(" Page # " + page);
    } 
    else if (page == 0){
        TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
        console.log(" Page # " + page);
        document.getElementById('page-icon-number').innerHTML = "";
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
    document.getElementById('page-icon-number').innerHTML = page;
    console.log(" Page # " + page);
    if (page < 1){
        TweenMax.to("#issue1-cover", 0, { content:'url("../images/Nemesis/Nemesis1TextLessCover.png")'});
        document.getElementById('page-icon-number').innerHTML = "";
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

// Panel 01

document.getElementById('Panel01-Build').addEventListener('mouseover', function(){
    TweenMax.to('#Panel01-Build', 1.5, { x:'25px' } );
    TweenMax.to('#Panel01-Back', 1.5, { scaleX:'1.05', transformOrigin: 'right' } );
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "L", delay: 0.05})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LO", delay: 0.10})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOA", delay: 0.15})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOAD", delay: 0.20})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADI", delay: 0.25})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADIN", delay: 0.30})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING", delay: 0.35})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING ", delay: 0.40})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING P", delay: 0.45})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PL", delay: 0.50})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLA", delay: 0.55})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAY", delay: 0.60})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYE", delay: 0.65})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER", delay: 0.70})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER ", delay: 0.75})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER O", delay: 0.80})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER ON", delay: 0.85})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER ONE", delay: 0.90})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER ONE ", delay: 0.95})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER ONE .", delay: 1.00})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER ONE ..", delay: 1.05})
    TweenMax.to('#Panel01-Text', 0.05, { innerHTML: "LOADING PLAYER ONE ...", delay: 1.10})
});

document.getElementById('Panel01-Build').addEventListener('mouseout', function(){
    TweenMax.to('#Panel01-Build', 1.5, { x:'0px' } );
    TweenMax.to('#Panel01-Back', 1.5, { scaleX:'1', transformOrigin: 'right' } );
});

// Panel 02

document.getElementById('Panel02-04').addEventListener('mouseover', function(){
    TweenMax.to("#Page02", 0, { zIndex: 4 })
    TweenMax.to('#Panel02-Back', 1.5, { scaleX:'1.05', transformOrigin: 'right' } );
    TweenMax.to('#Panel02-02', 1.5, { x:'45px' } );
    TweenMax.to('#Panel02-03', 1.5, { x:'35px' } );
    TweenMax.to('#Panel02-04', .5, { x:'25px' } );
});

document.getElementById('Panel02-04').addEventListener('mouseout', function(){
    TweenMax.to('#Panel02-Back', 1.5, { scaleX:'1', transformOrigin: 'right' } );
    TweenMax.to('#Panel02-02', 1.5, { x:'0px' } );
    TweenMax.to('#Panel02-03', 1.5, { x:'0px' } );
    TweenMax.to('#Panel02-04', .5, { x:'0px' } );
});

// Panel 03

document.getElementById('Panel03-06').addEventListener('mouseover', function(){
    TweenMax.to('#Panel03-02', 1.5, { x:'25px' } );
    TweenMax.to('#Panel03-03', 1.5, { x:'-25px' } );
    TweenMax.to('#Panel03-04', 1.5, { x:'25px' } );
    TweenMax.to('#Panel03-05', 1.5, { x:'-25px' } );
    TweenMax.to('#Panel03-06', 1.5, { x:'25px', opacity: 1 } );
});

document.getElementById('Panel03-06').addEventListener('mouseout', function(){
    TweenMax.to('#Panel03-02', 1.5, { x:'0px' } );
    TweenMax.to('#Panel03-03', 1.5, { x:'0px' } );
    TweenMax.to('#Panel03-04', .5, { x:'0px' } );
    TweenMax.to('#Panel03-05', 1.5, { x:'0px' } );
    TweenMax.to('#Panel03-06', 1.5, { x:'0px', opacity: 0 } );
});