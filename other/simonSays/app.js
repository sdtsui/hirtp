
var applyStyle = function(e, styleName) {
    var clickedStar = $(e.target);
    var starWidget = clickedStar.parent();
    var clickedIndex; 
    starWidget.children().each(function(index, target) {
        var selectedTarget = $(target);
        selectedTarget.removeClass(styleName);
        if (target === e.target) {
            clickedIndex = index;
        }
    });
    starWidget.children().each(function(index, star) {
        if (index <= clickedIndex) {
            $(star).toggleClass(styleName);
        }
    });
}
//Click
$('.star').click(function(e) {
    applyStyle(e, 'clicked');
});
//on mousenter: highlight as if I've clicked above
//on mouseleave of a star: 
//Hover:
$('.star').mouseover(function(e) {
    applyStyle(e, 'highlighted');
});

$('.star').mouseleave(function(e) {
    var clickedStar = $(e.target);
    var starWidget = clickedStar.parent();
    starWidget.children().each(function(index, target) {
        $(target).removeClass('highlighted');
    });
});

$('.star').each(function(index, star) {
    $(star).text(String.fromCharCode(9733));
});

