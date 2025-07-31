document.addEventListener("DOMContentLoaded", function () {
  // Get feature boxes and text elements
  const featureBoxes = document.querySelectorAll('.feature-box');
  const displayTitle = document.querySelector('.display-title');
  const displayDescription = document.querySelector('.display-description');
  const shortDetails = document.querySelectorAll('.short-detail');

  // Clear all short details inside feature boxes
  function clearDetails() {
    shortDetails.forEach(el => el.textContent = '');
  }

  // Handle when a feature box is clicked
  function setActiveBox(box) {
    // Remove active state from all, then set for clicked box
    featureBoxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');

    // Show short detail inside the clicked box
    clearDetails();
    const shortDetail = box.querySelector('.short-detail');
    if (shortDetail) {
      shortDetail.textContent = box.dataset.content;
    }

    // Update the big display text
    displayTitle.innerHTML = box.dataset.title;
    displayDescription.innerHTML = box.dataset.content;

    // Restart animation on text
    [displayTitle, displayDescription].forEach(el => {
      el.classList.remove("animate");
      void el.offsetWidth;
      el.classList.add("animate");
    });
  }

  // Add click listeners to each box
  featureBoxes.forEach(box => {
    box.addEventListener('click', () => setActiveBox(box));
  });

  // Set a default active box if one is marked as active
  const initiallyActive = document.querySelector('.feature-box.active');
  if (initiallyActive) {
    setActiveBox(initiallyActive);
  }

  // ===== Modal =====
  const modal = document.getElementById('quoteModal');
  const closeBtn = document.getElementById('closeModal');

  // Open modal when any "quote" button is clicked
  document.querySelectorAll('.openQuoteModal').forEach(btn => {
    btn.addEventListener('click', () => {
      modal.classList.remove('hidden');
    });
  });

  // Close modal when clicking close button
  closeBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  // ===== Form Submission =====
  document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Quote request submitted successfully!');
    modal.classList.add('hidden');
    this.reset();
  });
});
