$('.tracking__info-status-item-dropdown-trigger').on('click', function(){
  $('.tracking__info-status-item-dropdown-trigger').not(this).removeClass('open');
  $(this).addClass('open')
});



jQuery(function ($) {
  $(document).mouseup(function (e) {
    var div = $(".tracking__info-status-item-dropdown-trigger");
    if (!div.is(e.target)
      && div.has(e.target).length === 0) {
      div.removeClass('open');
    }
  });
});