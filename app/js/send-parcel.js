$('.send-parcel__kind-item').on('click', function(){
  $('.send-parcel__kind-item').not(this).removeClass('active');
  $(this).addClass('active');
});