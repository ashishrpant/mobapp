class Hamburger {
  var menuStatus;

  initialize () {
    initMenuClickEvent();
    bindClickMenuClose();
    bindSwipeLeftToClose();
    bindSwipeRightToOpen();
  }

  initMenuClickEvent() {
    $("a.showMenu").click(function(){
      if(menuStatus) {
        closeMenu("0px", false);
      } else {
        openMenu();
      }
    });
  }

  openMenu() {
    $('.ui-page-active').animate({
      marginLeft: "165px",
      }, 300, function(){
        menuStatus = true
      });
    return false;
  }

  closeMenu() {
    $('.ui-page-active').animate({
      marginLeft: 0,
      }, 300, function(){
        menuStatus = false
      });

    return false;
  }

  bindClickMenuClose() {
    var listElem = $('#menu li');
    listElem.find('a').click(function(){
      var p = $(this).parent();
      if($(p).hasClass('active')) {
        listElem.removeClass('active');
      } else {
        listElem.removeClass('active');
        $(p).addClass('active');
      }
    });
  }

  bindSwipeLeftToClose() {
    $('.pages').live("swipeleft", function(){
  		if (menuStatus){
  		$(".ui-page-active").animate({
  			marginLeft: "0px",
  		  }, 300, function(){menuStatus = false});
  		  }
  	});
  }

  bindSwipeRightToOpen() {
    $('.pages').live("swiperight", function(){
  		if (!menuStatus){
  		$(".ui-page-active").animate({
  			marginLeft: "165px",
  		  }, 300, function(){menuStatus = true});
  		  }
  	});
  }
}

$(function(){


});
