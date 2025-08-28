/*=============== MODERN AUTOMOTIVE GALLERY SWIPER ===============*/

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize thumbnail swiper first
  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    centeredSlides: false,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    grabCursor: true,
    loop: false,
    
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 8
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 12
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 15
      }
    },
    
    // Pagination
    pagination: {
      el: '.gallery-pagination',
      type: 'fraction',
      formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
      },
      formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
      }
    }
  });
  
  // Initialize main gallery swiper
  const galleryMain = new Swiper('.gallery-main', {
    spaceBetween: 10,
    slidesPerView: 1,
    grabCursor: true,
    loop: false,
    centeredSlides: true,
    speed: 800,
    
    // Link with thumbnails
    thumbs: {
      swiper: galleryThumbs
    },
    
    // Autoplay - Enhanced for continuous movement
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      stopOnLastSlide: false,
      reverseDirection: false,
      waitForTransition: true
    },
    
    // Effects
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    
    // Event callbacks
    on: {
      init: function() {
        console.log('Gallery initialized successfully!');
        // Add initial active state to first thumbnail
        const firstThumb = document.querySelector('.gallery-thumbs .swiper-slide');
        if (firstThumb) {
          firstThumb.classList.add('swiper-slide-thumb-active');
        }
      },
      
      slideChange: function() {
        // Update thumbnail active states
        const thumbSlides = document.querySelectorAll('.gallery-thumbs .swiper-slide');
        thumbSlides.forEach((slide, index) => {
          if (index === this.realIndex) {
            slide.classList.add('swiper-slide-thumb-active');
          } else {
            slide.classList.remove('swiper-slide-thumb-active');
          }
        });
      },
      
      transitionStart: function() {
        // Add transition effects
        const slides = this.slides;
        slides.forEach(slide => {
          const image = slide.querySelector('.gallery-image');
          if (image) {
            image.style.transform = 'scale(1)';
          }
        });
      },
      
      transitionEnd: function() {
        // Scale active slide image
        const activeSlide = this.slides[this.activeIndex];
        if (activeSlide) {
          const image = activeSlide.querySelector('.gallery-image');
          if (image) {
            image.style.transform = 'scale(1.05)';
          }
        }
      },
      
      // Handle end of slides for continuous autoplay
      reachEnd: function() {
        if (this.autoplay.running) {
          // When reaching the last slide, go back to first slide
          setTimeout(() => {
            this.slideTo(0, 800);
          }, 4000);
        }
      }
    }
  });
  
  // Add keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!galleryMain) return;
    
    switch(e.key) {
      case 'ArrowLeft':
        galleryMain.slidePrev();
        e.preventDefault();
        break;
      case 'ArrowRight':
        galleryMain.slideNext();
        e.preventDefault();
        break;
      case ' ':
        if (galleryMain.autoplay.running) {
          galleryMain.autoplay.stop();
        } else {
          galleryMain.autoplay.start();
        }
        e.preventDefault();
        break;
    }
  });
  
  // Mouse wheel navigation removed - gallery only moves via autoplay, arrows, and thumbnails
  
  // Add touch gestures for mobile
  if ('ontouchstart' in window) {
    let touchStartX = 0;
    let touchEndX = 0;
    
    galleryContainer?.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    galleryContainer?.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    }, { passive: true });
    
    function handleGesture() {
      const swipeThreshold = 50;
      const diff = touchStartX - touchEndX;
      
      if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
          // Swipe left - next slide
          galleryMain?.slideNext();
        } else {
          // Swipe right - previous slide
          galleryMain?.slidePrev();
        }
      }
    }
  }
  
  // Manual navigation buttons
  const prevBtn = document.querySelector('.gallery-btn-prev');
  const nextBtn = document.querySelector('.gallery-btn-next');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      galleryMain?.slidePrev();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      galleryMain?.slideNext();
    });
  }
  
  // Pause autoplay on hover
  const gallerySection = document.querySelector('.gallery-container');
  if (gallerySection) {
    gallerySection.addEventListener('mouseenter', function() {
      galleryMain?.autoplay?.stop();
    });
    
    gallerySection.addEventListener('mouseleave', function() {
      galleryMain?.autoplay?.start();
    });
  }
});

// Error handling and fallback
window.addEventListener('error', function(e) {
  if (e.message.includes('Swiper')) {
    console.warn('Swiper failed to load, implementing fallback gallery');
    implementFallbackGallery();
  }
});

// Fallback gallery implementation
function implementFallbackGallery() {
  const mainGallery = document.querySelector('.gallery-main .swiper-wrapper');
  const thumbsGallery = document.querySelector('.gallery-thumbs .swiper-wrapper');
  const prevBtn = document.querySelector('.gallery-btn-prev');
  const nextBtn = document.querySelector('.gallery-btn-next');
  
  if (!mainGallery || !thumbsGallery) return;
  
  let currentSlide = 0;
  const slides = mainGallery.querySelectorAll('.swiper-slide');
  const thumbSlides = thumbsGallery.querySelectorAll('.swiper-slide');
  
  // Show first slide
  showSlide(0);
  
  // Navigation functions
  function showSlide(index) {
    // Hide all slides
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? 'block' : 'none';
    });
    
    // Update thumbnails
    thumbSlides.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add('swiper-slide-thumb-active');
      } else {
        thumb.classList.remove('swiper-slide-thumb-active');
      }
    });
    
    currentSlide = index;
  }
  
  function nextSlide() {
    const next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }
  
  function prevSlide() {
    const prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }
  
  // Button events
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }
  
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  
  // Thumbnail clicks
  thumbSlides.forEach((thumb, index) => {
    thumb.addEventListener('click', () => showSlide(index));
  });
  
  // Autoplay
  setInterval(nextSlide, 4000);
  
  console.log('Fallback gallery implemented successfully!');
}

// Additional safety check - if Swiper doesn't exist after 2 seconds, use fallback
setTimeout(function() {
  if (typeof Swiper === 'undefined') {
    console.warn('Swiper library not detected, using fallback gallery');
    implementFallbackGallery();
  }
}, 2000);






