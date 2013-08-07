//GEM DESIGN
//BARRY DELANEY
//JULY 2013

//FUCNTIONS//

//SCROLL TO SPECIFIED SECTION
function Scrolling(sectiontogoto){
		$('#Content').fadeIn();
		$('#Landing').css('display','none');
		$('#BtnBack').fadeIn();
		var LogoHeight = parseInt($('#LogoBox').css('height'));
		$('html,body').animate({scrollTop: $(sectiontogoto).offset().top - LogoHeight}, 500);
};
$( document ).ready(function(){
	$('#BtnWho').click(function(){
			Scrolling("#WhoWeAre");
	});
	$('#BtnGraphics').click(function(){
			Scrolling("#GraphicDesign");
	});
	$('#BtnPhoto').click(function(){
			Scrolling("#Photography");
	});
	$('#BtnWeb').click(function(){
			Scrolling("#WebDevelopment");
	});
	$('#BtnPort').click(function(){
			Scrolling("#Portfolio");
	});
	$('#BtnMeet').click(function(){
			Scrolling("#MeetTheTeam");				
	});
	$('#BtnContact').click(function(){
			Scrolling("#GetInTouch");
	});
	
	
$('#BtnBack').click(function(){
		$('#Content').css('display','none');
		$('#Landing').fadeIn();
		$(this).css('display', 'none');
		$('#Logo').css('background', '#faa719');
		
	});
});

//CODE FOR CONTACT FORM
function clearField(field) {
  if (field.value == field.defaultValue) {
    field.value = "";
  }
};
function checkField(field) {
  if (field.value == "") {
    field.value = field.defaultValue;
  }
};
function validate() {
	var Name = $('input[type="text"][name=Name]').val();
	var Email = $('input[type="text"][name=EmailFrom]').val();
	var Comments = $('textarea[name=Comments]').val();
	if (Email == "" || Name == "" || Comments == ""){
		$("#Alert").css('display', 'block');
		$("#Alert").css('background', 'red');
		$("#Alert").text("Please fill out all sections.")
		return false;
		}
		else if(Email == "e-mail" || Name == "name" || Comments == "message")
		{
		$("#Alert").css('display', 'block');
		$("#Alert").css('background', 'red');
		$("#Alert").text("Please fill out all sections.")
		return false;
		}
		else
		{
		$("#Alert").css('background', 'green');
		$("#Alert").text("Message sent!")
		$("#Name").val('name');
		$('#EmailFrom').val('e-mail');
		$('#Comments').val('message');
		return true;
		}
};



//MEET THE TEAM HOVER AND CLICK CODE
$( document ).ready(function(){
	$('#Logo').css('background', '#faa719');
	var icon;
	
	$('.MemberSquare').each(function() {
	
		if($(this).children('.Cover').children('.MemTitle').html() == 'Web Developer')
		{
			$(this).children('.Cover').css('background-color','rgba(201,29,103,0.3)');
			$('#LBContent').css('background','#c91d67');
			icon = 'computer';
			
		}
		else if($(this).children('.Cover').children('.MemTitle').html() == 'Graphic Designer')
		{
			$(this).children('.Cover').css('background-color','rgba(0,166,156,0.3)');
			$('#LBContent').css('background','#00a69c');
			icon = 'pencil';
		}
		else if($(this).children('.Cover').children('.MemTitle').html() == 'Photographer')
		{
			$(this).children('.Cover').css('background-color','rgba(240,90,40,0.3)');
			$('#LBContent').css('background','#f05a28');
			icon = 'camera';
		}
		else if($(this).children('.Cover').children('.MemTitle').html() == 'Creative Director')
		{
			$(this).children('.Cover').css('background-color','rgba(250,167,25,.3)');
			$('#LBContent').css('background','#faa719');
			icon = 'lightbulb';
		}			
	});
$('.Cover').click(function(){
		if($(this).children('.MemTitle').html() == 'Web Developer')
		{
			$('#LBContent').css('background','#c91d67');
			icon = 'computer';	
		}
		else if($(this).children('.MemTitle').html() == 'Graphic Designer')
		{
			$('#LBContent').css('background','#00a69c');
			icon = 'pencil';
		}
		else if($(this).children('.MemTitle').html() == 'Photographer')
		{
			$('#LBContent').css('background','#f05a28');
			icon = 'camera';
		}
		else if($(this).children('.MemTitle').html() == 'Creative Director')
		{
			$('#LBContent').css('background','#faa719');
			icon = 'lightbulb';
		}			
		$('#LightBoxCover').css('display','block');
		$('#LBContent').prepend('<div class = "Picture"><img class = "MemImage" src = "' + $('.Cover').siblings('img').attr('src') + '"/></div><div class = "Name">' + $(this).children('.MemName').text() + '<br />' + $(this).children('.MemTitle').html() + '<div id = "Icon"><img class = "IconImage" src = "Images/' + icon + '.png" /></div></div><div class = "Description">' + $(this).children('.Desc').html() + '</div>');
	});
$('#Exit').click(function(){
		$('.Picture').remove();
		$('.Name').remove();
		$('.Description').remove();
		$('#LightBoxCover').css('display','none');
	});
});

//CHANGES MENU COLOURS AS YOU SCROLL DEPENDING ON WHAT SECTION IS ON TOP
var VisibleSection;

$(window).scroll(function(){
if ($('#Landing').css('display') == 'none')
{
	swapMenuColours('WhoWeAre')
	swapMenuColours('GraphicDesign')
	swapMenuColours('Photography')
	swapMenuColours('WebDevelopment')
	swapMenuColours('Portfolio')
	swapMenuColours('MeetTheTeam')
	swapMenuColours('GetInTouch')
}

	});
	
function swapMenuColours(div)
{
var scrollTop     = $(window).scrollTop(),
    elementOffset = $('#' + div).offset().top,
    distance      = (elementOffset - scrollTop);
	if(distance < 150)
		{
		resetMenuColor();
		VisibleSection = div;
		};
switch (VisibleSection) { 
    case 'WhoWeAre': 
	$('#Logo').css('background', '#faa719');
        break;
    case 'GraphicDesign': 
    $('#Logo').css('background', '#00a69c');
        break;
    case 'Photography': 
    $('#Logo').css('background', '#f05a28');
        break;      
    case 'WebDevelopment': 
    $('#Logo').css('background', '#c91d67');
        break;
    case 'Portfolio': 
    $('#Logo').css('background', '#f05a28');
        break;
	case 'MeetTheTeam': 
    $('#Logo').css('background', '#faa719')
        break;
	case 'GetInTouch': 
    $('#Logo').css('background', '#00a69c');
        break;
}
};
function resetMenuColor()
{
	$('#Logo').css('background', 'silver');

};
 /*SCROLL TO CODE*/
 /**
 * Copyright (c) 2007-2012 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * @author Ariel Flesler
 * @version 1.4.3.1
 */
;(function($){var h=$.scrollTo=function(a,b,c){$(window).scrollTo(a,b,c)};h.defaults={axis:'xy',duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:true};h.window=function(a){return $(window)._scrollable()};$.fn._scrollable=function(){return this.map(function(){var a=this,isWin=!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!isWin)return a;var b=(a.contentWindow||a).document||a.ownerDocument||a;return/webkit/i.test(navigator.userAgent)||b.compatMode=='BackCompat'?b.body:b.documentElement})};$.fn.scrollTo=function(e,f,g){if(typeof f=='object'){g=f;f=0}if(typeof g=='function')g={onAfter:g};if(e=='max')e=9e9;g=$.extend({},h.defaults,g);f=f||g.duration;g.queue=g.queue&&g.axis.length>1;if(g.queue)f/=2;g.offset=both(g.offset);g.over=both(g.over);return this._scrollable().each(function(){if(e==null)return;var d=this,$elem=$(d),targ=e,toff,attr={},win=$elem.is('html,body');switch(typeof targ){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=$(targ,this);if(!targ.length)return;case'object':if(targ.is||targ.style)toff=(targ=$(targ)).offset()}$.each(g.axis.split(''),function(i,a){var b=a=='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,old=d[key],max=h.max(d,a);if(toff){attr[key]=toff[pos]+(win?0:old-$elem.offset()[pos]);if(g.margin){attr[key]-=parseInt(targ.css('margin'+b))||0;attr[key]-=parseInt(targ.css('border'+b+'Width'))||0}attr[key]+=g.offset[pos]||0;if(g.over[pos])attr[key]+=targ[a=='x'?'width':'height']()*g.over[pos]}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)=='%'?parseFloat(c)/100*max:c}if(g.limit&&/^\d+$/.test(attr[key]))attr[key]=attr[key]<=0?0:Math.min(attr[key],max);if(!i&&g.queue){if(old!=attr[key])animate(g.onAfterFirst);delete attr[key]}});animate(g.onAfter);function animate(a){$elem.animate(attr,f,g.easing,a&&function(){a.call(this,e,g)})}}).end()};h.max=function(a,b){var c=b=='x'?'Width':'Height',scroll='scroll'+c;if(!$(a).is('html,body'))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,html=a.ownerDocument.documentElement,body=a.ownerDocument.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);