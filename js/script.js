$(document).ready(function () {
  //關閉ad
  $(".ad-close").click(function(evt){
    evt.preventDefault();
    $(".ad").fadeOut();
  });
  //rwdNav 
  var navIcon = $('.navicon'),
      navBtn = $ ('ul.topnav li a'),
      navList = $('ul.topnav');
  navIcon.on('click', function(){
    navList.toggleClass('show');
  });
  navBtn.on('click', function(){
    navList.removeClass('show');
  });
  /** -----------------------------------------
     * @TAB URL: http://codepen.io/MightyShaban/pen/zLykK
     -------------------------------------------*/
  (function ($) {
    $('.js-tabs').find('>a:eq(0)').addClass('current');

    $('.js-tabs a').click(function (g) {
      var tab = $(this).closest('.js-tab')
      , index = $(this).closest('a').index();

      tab.find('.js-tabs > a').removeClass('current');
      $(this).closest('a').addClass('current');

      tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item').not('.js-tabs-item:eq(' + index + ')').fadeOut().hide();
      tab.find('.js-tab-content,.js-tab-content2').find('.js-tabs-item:eq(' + index + ')').fadeIn().show();

      g.preventDefault();
    });
  })(jQuery);

  $('.js-fancybox').fancybox({
    maxWidth	: 1024,
    maxHeight	: 728,
    padding : 0,
    fitToView	: false,
    width		: '75%',
    height		: '60%',
    autoSize	: false,
    closeClick	: false,
    openEffect	: 'none',
    closeEffect	: 'none',
  });
  
});

//  if (window.location.hash) $('#'+window.location.hash.split('#')[1]+'a').trigger('click');

//$(function(){
// $('#castAll div').hide();
// $('.castBtn li a').click(function(){
//	 $('.castBtn li a.active').removeClass('active');
//	 $(this).addClass('active');
//	 var _index=$(this).parent().index();
//	 var _name=$(this).find('img').attr('alt');
//	 //alert(_name);
//	  $('#castAll div').eq(_index).show().siblings().hide();
//	  $('#cast_img').attr('src','../images/manPic/'+_name+'.png');
//	 //alert(_index);
//	 return false;
//	 })
//   $('.castBtn li').eq(0).find('a').click();
//});

//    var _showTab = 0;
//		var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
//		$($defaultLi.find('a').attr('href')).siblings().hide();
//		
//		// 當 li 頁籤被點擊時...
//		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
//		$('ul.tabs li:not(.out)').click(function() {
//			// 找出 li 中的超連結 href(#id)
//			var $this = $(this),
//				_clickTab = $this.find('a').attr('href');
//			// 把目前點擊到的 li 頁籤加上 .active
//			// 並把兄弟元素中有 .active 的都移除 class
//			$this.addClass('active').siblings('.active').removeClass('active');
//			// 淡入相對應的內容並隱藏兄弟元素
//			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
//
//			return false;
//		}).find('a').focus(function(){
//			this.blur();
//		});



