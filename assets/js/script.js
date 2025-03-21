


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

});


document.querySelector('.marker').addEventListener('click', function() {
  const image = document.getElementById('toggleImage');
  image.classList.toggle('hidden');

  const isExpanded = !image.classList.contains('hidden');
  this.setAttribute('aria-expanded', isExpanded);
});