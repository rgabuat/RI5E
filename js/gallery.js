var time = 200;
var galleryBoxWidth = $(".kun-gallery li").width();

//$("body").append(".gallery-container");  <---- places lightbox above all else in DOM so nothing overlaps
$(".kun-gallery li").css("height", galleryBoxWidth);
$(".current-image").css("display", "inline");

/*------------------- gallery functionality ---------------------*/
$(".kun-gallery li a").click(function() {
  var imgClass = $(this).attr("class");
  
  $(".kun-lightbox img." + imgClass).addClass("current-image");
  $(".gallery-container").fadeIn(time);
  $(".kun-lightbox .current-image").fadeIn(time);
});

/*---------------- light box functionality ---------------------*/
$(".gallery-container .right-arrow").click(function() {
  var currentLightboxImage = $(".kun-lightbox img.current-image");
  var nextLightboxImage = currentLightboxImage.next("img");

  if (nextLightboxImage.length) {
    currentLightboxImage
      .fadeOut(time)
      .next(nextLightboxImage)
      .fadeIn(time)
      .toggleClass("current-image")
      .prev("img")
      .toggleClass("current-image");
  } else {
    currentLightboxImage.fadeOut(time).toggleClass("current-image");
    $(".kun-lightbox img:first")
      .fadeIn(time)
      .toggleClass("current-image");
  }
});

$(".gallery-container .left-arrow").click(function() {
  var currentLightboxImage = $(".kun-lightbox img.current-image");
  var nextLightboxImage = currentLightboxImage.prev("img");

  if (nextLightboxImage.length) {
    currentLightboxImage
      .fadeOut(time)
      .prev(nextLightboxImage)
      .fadeIn(time)
      .toggleClass("current-image")
      .next("img")
      .toggleClass("current-image");
  } else {
    currentLightboxImage.fadeOut(time).toggleClass("current-image");
    $(".kun-lightbox img:last")
      .fadeIn(time)
      .toggleClass("current-image");
  }
});

$(".kun-modal, .close-icon").click(function() {
  $(".gallery-container").fadeOut(time);
  $(".kun-lightbox img.current-image")
    .removeClass("current-image")
    .fadeOut(time);
});
