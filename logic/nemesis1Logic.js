var page = 1;

function nemesis1 () {
    TweenMax.to("#issue1-cover", 0.5, { content:'url("../images/Nemesis/Nemesis01/Nemesis01-page'+ page + '.jpg")'});
    page ++;
}