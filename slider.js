const slider = document.getElementById("ad-slider");
const slides = slider.querySelectorAll(".slide");
const indicators = slider.querySelectorAll(".indicator-segment");

let currentIndex = 0;

function updateSlides(index) {
  currentIndex = index;

  //Update active slide image
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  //Update indicator pills
  indicators.forEach((indicator, i) => {
    indicator.classList.remove("active", "passed");
    const fill = indicator.querySelector(".indicator-fill");

    // Remove existing animation end listener
    fill.onanimationend = null;

    if (i < index) {
      indicator.classList.add("passed");
      fill.style.width = "";
    } else if (i === index) {
      // Reset keyframe animation
      fill.style.animation = "none";
      void fill.offsetWidth; // Force DOM reflow
      fill.style.animation = "";

      indicator.classList.add("active");

      // Automatically advance to the next slide ONLY when the CSS animation finishes
      fill.onanimationend = () => {
        nextSlide();
      };
    } else {
      fill.style.width = "0%";
    }
  });
}

function nextSlide() {
  const newIndex = (currentIndex + 1) % slides.length;
  updateSlides(newIndex);
}

// Attach click listeners to pills
indicators.forEach((indicator) => {
  indicator.addEventListener("click", () => {
    const targetIndex = parseInt(indicator.dataset.slide, 10);
    updateSlides(targetIndex);
  });
});

// Initialize slider on load
updateSlides(0);