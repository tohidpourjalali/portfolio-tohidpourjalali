window.addEventListener('scroll', function() {
  const btn = document.getElementById('scrollToTop');
  btn.style.display = (window.scrollY > 400) ? 'block' : 'none';
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}