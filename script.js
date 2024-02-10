// JavaScript for shrinking header on scroll
window.addEventListener('scroll', function() {
    var image=this.document.querySelector('.logo img');
    var header = document.querySelector('.header');
    if (window.scrollY > 50) { // Change 50 to your desired scroll position
      header.classList.add('shrink');
      image.classList.add('remove');
    } else {
      header.classList.remove('shrink');
      image.classList.remove('remove');
    }
  });
  