(function(e,t,n,r){e.fn.sss=function(r){var i=e.extend({slideShow:true,startOn:0,speed:3500,transition:400,arrows:true},r);return this.each(function(){function y(e){return s.eq(e).height()/o.width()*100+"%"}function b(e){if(!c){c=true;var t=s.eq(e);t.fadeIn(a);s.not(t).fadeOut(a);o.animate({paddingBottom:y(e)},a,function(){c=false});g()}}function w(){l=l===u-1?0:l+1;b(l)}function E(){l=l===0?u-1:l-1;b(l)}var r=e(this),s=r.children().wrapAll('<div class="sss"/>').addClass("ssslide"),o=r.find(".sss"),u=s.length,a=i.transition,f=i.startOn,l=f>u-1?0:f,c=false,h,p,d,v,m,g=i.slideShow?function(){clearTimeout(p);p=setTimeout(w,i.speed)}:e.noop;if(i.arrows){o.append('<div class="sssprev"/>','<div class="sssnext"/>')}m=o.find(".sssnext"),v=o.find(".sssprev");e(t).load(function(){o.css({paddingBottom:y(l)}).click(function(t){h=e(t.target);if(h.is(m)){w()}else if(h.is(v)){E()}});b(l);e(n).keydown(function(e){d=e.keyCode;if(d===39){w()}else if(d===37){E()}})})})}})(jQuery,window,document)


jQuery(function($) {
	$('.hallslider').sss({
slideShow : true, // Set to false to prevent from auto animation
startOn : 0, 
transition : 400, 
speed : 3500, 
showNav : true 
});
	
});

jQuery(function ($) {
    $('.noautoslider').sss({
        slideShow: false, // Set to false to prevent from auto animation
        startOn: 0,
        transition: 400,
        speed: 3500,
        showNav: true
    });

});