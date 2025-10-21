/* 初始化 Swiper 轮播图 */
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.blog-slider');
  if (!slider) return;

  new Swiper(slider, {
    effect: 'fade',
    loop: true,
    autoplay: { delay: 3000, disableOnInteraction: true },
    pagination: { el: '.blog-slider__pagination', clickable: true }
  });
});