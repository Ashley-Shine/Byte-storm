const slides = document.getElementById("sliderTrack");
    const slideCount = slides.children.length;
    let currentIndex = 0;

   function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 700}px)`;
    }

    function nextMotive() {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlide();
    }

    function prevMotive() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateSlide();
    }