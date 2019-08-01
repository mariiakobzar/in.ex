//SCROLLING ANIMATION
var isScrolling = false;

window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
  if (isScrolling == false) {
    window.requestAnimationFrame(function () {
      scrolling(e);
      isScrolling = false;
    });
  }
  isScrolling = true;
}

document.addEventListener("DOMContentLoaded", scrolling, false);

var links = document.querySelectorAll(".article-box a");
var bigArticle = document.querySelector(".big-article-info");
var bigArticleImage = document.querySelector(".big-article-image");

function scrolling(e) {
  if (isFullyVisible(links[0])) {
    links.forEach(box => {
      box.classList.add("active");
    });
  }
  if (isPartiallyVisible(bigArticle)) {
    bigArticle.classList.add("active");
  }
  if (isPartiallyVisible(bigArticleImage)) {
    bigArticleImage.classList.add("active");
  }
};

function isPartiallyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return ((top + height >= 0) && (height + window.innerHeight >= bottom));
};

function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  return ((top >= 0) && (bottom <= window.innerHeight));
};