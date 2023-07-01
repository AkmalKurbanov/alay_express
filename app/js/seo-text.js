let text = $(".seo-text__desc").text();
let len = text.length;

if (len > 321) {
  $(".seo-text__desc").text($(".seo-text__desc").text().substr(0, 321) + '...');
}


$('.seo-text__btn .open-text').on('click', function () {
  $(".seo-text__desc").text(text);
  $(this).hide();
  $('.close-text').show();
});
$('.seo-text__btn .close-text').on('click', function () {
  $(".seo-text__desc").text($(".seo-text__desc").text().substr(0, 321) + '...');
  $(this).hide();
  $('.open-text').show();
});


$('.seo-text__btn').on('click', function(){
  $(this).toggleClass('open')
});