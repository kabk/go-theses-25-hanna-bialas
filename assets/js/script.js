// we make sure the JavaScript file loads after our HTML by using a function test if the HTML is loaded

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}   



docReady(function() {

	// functions
	// go
	// here
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-btn');
  if(mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      const nav = document.querySelector('header nav');
      if(nav) {
        nav.classList.toggle('active');
        const isActive = nav.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isActive);
      }
    });
  }
  
  // Footnote tap trigger on mobile
  const footnoteWrappers = document.querySelectorAll('.footnote-wrapper');
  footnoteWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function(e) {
      if(window.innerWidth <= 960) {
        const content = this.querySelector('.footnote-content');
        if(content) {
          // Toggle display on tap
          if(content.style.display === 'block'){
            content.style.display = 'none';
          } else {
            content.style.display = 'block';
          }
        }
        e.preventDefault();
      }
    });
  });

  // Select all markers and attach both click and touchstart event listeners
  const markers = document.querySelectorAll('.marker');
  markers.forEach(marker => {
    marker.addEventListener('click', toggleImage);
    marker.addEventListener('touchstart', toggleImage);
  });
  
  // Log all markers for debugging
  console.log('All markers:', markers);
  markers.forEach((marker, index) => {
    console.log(`Marker ${index}:`, marker);
  });
});

function toggleImage(e) {
  console.log('toggleImage triggered by event:', e.type);
  e.preventDefault(); // Prevent potential duplicate event triggers on mobile
  // Find the nearest .media-figure and its child .image
  const mediaFigure = this.closest('.media-figure');
  if(mediaFigure) {
    const image = mediaFigure.querySelector('.image');
    if(image) {
      image.classList.toggle('hidden');
      const isVisible = !image.classList.contains('hidden');
      this.setAttribute('aria-expanded', isVisible);
      console.debug('Image toggled, isVisible:', isVisible);
    } else {
      console.error('No .image element found in the media-figure');
    }
  } else {
    console.error('No media-figure container found');
  }
}


