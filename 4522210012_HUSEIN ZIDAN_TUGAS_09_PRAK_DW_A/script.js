window.addEventListener('DOMContentLoaded', (event) => {
  let current = 0;
  const images = document.querySelectorAll('#slider img');
  const controls = document.querySelectorAll('.slider-controls');
  const totalImages = images.length;
  let autoSlideTimeout;

  // Function to show the image and mark the active control
  const showImage = (index) => {
    images.forEach((img) => img.classList.remove('active'));
    images[index].classList.add('active');
    controls.forEach((control) => control.classList.remove('active'));
    controls[index].classList.add('active');
  };

  // Function to start automatic slider
  const startAutoSlide = () => {
    stopAutoSlide();
    autoSlideTimeout = setInterval(() => {
      current = (current + 1) % totalImages;
      showImage(current);
    }, 3000);
  };

  // Function to stop automatic slider
  const stopAutoSlide = () => {
    clearTimeout(autoSlideTimeout);
  };

  // Event listener for control slider
  controls.forEach((control, index) => {
    control.addEventListener('click', () => {
      current = index;
      showImage(current);
      stopAutoSlide();
    });
  });

  // Start automatic slider on page load
  startAutoSlide();
});
