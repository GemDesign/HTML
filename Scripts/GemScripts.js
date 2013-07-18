function Scrolling(sectiontogoto){
			$('body').scrollTo(sectiontogoto, 500);

};

$( document ).ready(function(){
	$('#BtnWho').css('color', '#faa719');
	var icon;
	
	$('.MemberSquare').hover(function(){
		if($(this).children('.Cover').children('.MemName').children('.MemTitle').html() == 'Web Developer')
		{
			$(this).children('.Cover').css('background-color','rgba(201,29,103,0.6)');
			$('#LBContent').css('background','#c91d67');
			icon = 'computer';
			
		}
		else if($(this).children('.Cover').children('.MemName').children('.MemTitle').html() == 'Graphic Designer')
		{
			$(this).children('.Cover').css('background-color','rgba(0,166,156,0.6)');
			$('#LBContent').css('background','#00a69c');
			icon = 'pencil';
		}
		else if($(this).children('.Cover').children('.MemName').children('.MemTitle').html() == 'Photographer')
		{
			$(this).children('.Cover').css('background-color','rgba(240,90,40,0.6)');
			$('#LBContent').css('background','#f05a28');
			icon = 'camera';
		}				
		
		$(this).children('.Cover').css('display','block');
		$(this).children('.Cover').fadeTo("slow",1);
	},
	function(){
		$(this).children('.Cover').css('opacity','0');
		$('.Cover').css('display','none');
	});
	
$('.Cover').click(function(){
		$('#LightBoxCover').css('display','block');
		$('#LBContent').prepend('<div class = "Picture"><img class = "MemImage" src = "' + $('.Cover').siblings('img').attr('src') + '"/></div><div class = "Name">' + $(this).children('.MemName').html() + '<div id = "Icon"><img class = "IconImage" src = "Images/' + icon + '.png" /></div></div><div class = "Description">' + $(this).children('.Desc').html() + '</div>');
	});
$('.Exit').click(function(){
		$('.Picture').remove();
		$('.Name').remove();
		$('.Description').remove();
		$('#LightBoxCover').css('display','none');
	});
});


var VisibleSection;
$(window).scroll(function(){
swapMenuColours('WhoWeAre')
swapMenuColours('GraphicDesign')
swapMenuColours('Photography')
swapMenuColours('WebDevelopment')
swapMenuColours('Portfolio')
swapMenuColours('MeetTheTeam')
swapMenuColours('GetInTouch')

	});
	
function swapMenuColours(div)
{
var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#' + div).offset().top,
    distance      = (elementOffset - scrollTop);
	if(distance < 100)
		{
		resetMenuColor();
		VisibleSection = div;
		};
switch (VisibleSection) { 
    case 'WhoWeAre': 
	$('#BtnWho').css('color', '#faa719');
        break;
    case 'GraphicDesign': 
    $('#BtnGraphic').css('color', '#00a69c');
        break;
    case 'Photography': 
    $('#BtnPhoto').css('color', '#f05a28');
        break;      
    case 'WebDevelopment': 
    $('#BtnWeb').css('color', '#c91d67');
        break;
    case 'Portfolio': 
    $('#BtnPort').css('color', '#f05a28');
        break;
	case 'MeetTheTeam': 
    $('#BtnMeet').css('color', '#faa719')
        break;
	case 'GetInTouch': 
    $('#BtnGetInTouch').css('color', '#00a69c');
        break;
}
};
function resetMenuColor()
{
	$('#BtnWho').css('color', 'silver');
    $('#BtnGraphic').css('color', 'silver');
    $('#BtnPhoto').css('color', 'silver');
    $('#BtnWeb').css('color', 'silver');
	$('#BtnPort').css('color', 'silver');
    $('#BtnMeet').css('color', 'silver');
    $('#BtnGetInTouch').css('color', 'silver');
};
 /*SCROLL TO CODE*/
 /**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);