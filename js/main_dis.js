const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function ( ) {
  console.log(window.scrollY);
  if (window,scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션); -> 애니메이션
    gsap.to(badgeEl, .6, {
      opactiy: 0
    });
    // 애니메이셔 (요소, 지속시간, 옵션)
  } else {
    //배지 보이기

  }
}, 300));
// _.throttle(사용하려는 함수, 시간) *시간은 ms의 단위로 300 = 0.3초