//顶部购物车
var buy=$('.buy');
var gwc=$('.gwc');
buy.hover(function() {
	gwc.css({display:'block'});
	gwc.stop().animate({
		height:'90px' },
		500);
	gwc.css({marginTop:'10px'});
}, function() {
gwc.stop().animate({
height:'0px'},
	500, function() {
	gwc.css({display:'none'});
});
});

// //导航特效
// var navul=$('.navul')
// var acta=$('.acta')
// var navact=$('.navact')
// acta.hover(function() {
// 	navact.stop().slideToggle(500);//鼠标滑过动画效果.slideToggle
// });
// var acta=$('.navul li');
// var navact=$('.navul div');
// acta.mouseover(function() {
// $(this).children('div').show();
// });
// acta.mouseout(function() {
// $(this).children('div').hide();
// });



//banner选项卡

var act=$('.act');
var act1=$('.act1');
act.hover(function() {
	var index = $(this).index();
	act1.eq(index).css({display:'block'});
	act.eq(index).siblings().find('.act1').css({display:'none'});
}, function() {
	act1.css({display:'none'});
});



