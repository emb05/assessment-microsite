document.addEventListener("DOMContentLoaded", function () {
  const quoteBtn = document.getElementById("quoteBtn");
  if (quoteBtn) {
    quoteBtn.addEventListener("click", function () {
      alert("Thank you! Our team will contact you soon.");
    });
  }

  const featureBoxes = document.querySelectorAll('.feature-box');
  const displayTitle = document.querySelector('.display-title');
  const displayDescription = document.querySelector('.display-description');

  featureBoxes.forEach(box => {
    box.addEventListener('click', () => {
      featureBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');

      displayTitle.textContent = box.dataset.title;
      displayDescription.textContent = box.dataset.content;
    });
  });
});
