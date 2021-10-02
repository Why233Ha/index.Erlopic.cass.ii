var toInsert = $('m-tab-item[toInsert]');
var toDesign = $('m-tab-item[toDesign]');
var toLayout = $('m-tab-item[toLayout]');
var toFunction = $('m-tab-item[toFunction]');
var toTool = $('m-tab-item[toTool]');
var toApplication = $('m-tab-item[toApplication]');
var toAuxil = $('m-tab-item[toAuxil]');
var toHelp = $('m-tab-item[toHelp]');

var carousel = $('m-carousel');

var foldToolBar = $('*[foldToolBar]');

var el=document.getElementById('contextMenu');

document.oncontextmenu=function(event){
    event.preventDefault();

    el.style.display='block';
    el.style.left=event.clientX+'px';
    el.style.top=event.clientY+'px';

}
document.onclick=function(event){
    el.style.display='none';
}


toInsert.click(function() {
    var controlTabBar = carousel.attr('select', '0');
});
toDesign.click(function() {
    var controlTabBar = carousel.attr('select', '1');
});
toLayout.click(function() {
    var controlTabBar = carousel.attr('select', '2');
});
toFunction.click(function() {
    var controlTabBar = carousel.attr('select', '3');
});
toTool.click(function() {
    var controlTabBar = carousel.attr('select', '4');
});
toApplication.click(function() {
    var controlTabBar = carousel.attr('select', '5');
});
toAuxil.click(function() {
    var controlTabBar = carousel.attr('select', '6');
});
toHelp.click(function() {
    var controlTabBar = carousel.attr('select', '7');
});

foldToolBar.click(function() {
    if (carousel.height() == 0) {
        foldToolBar.siblings().text('折叠工具栏');
        foldToolBar.children().attr('value', 'expand_less');

        carousel.height(200);
    } else {
        foldToolBar.siblings().text('展开工具栏');
        foldToolBar.children().attr('value', 'expand_more');

        carousel.height(0);
    }
});