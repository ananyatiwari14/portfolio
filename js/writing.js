// Load the PDF file
pdfjsLib.getDocument('./clips/writingclips.pdf').promise.then(function(pdf) {

  // Set up the canvas and context for rendering the pages
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  var viewport = null;

  // Set the number of pages in the PDF file
  var numPages = pdf.numPages;

  // Set the dimensions of the canvas to match the first page of the PDF
  pdf.getPage(1).then(function(page) {
    viewport = page.getViewport({scale: 1});
    canvas.width = viewport.width;
    canvas.height = viewport.height;
  });

  // Create an array to hold the images of each page of the PDF
  var images = [];

  // Render each page of the PDF to an image and add it to the array
  for(var i = 1; i <= numPages; i++) {
    pdf.getPage(i).then(function(page) {
      viewport = page.getViewport({scale: 1});
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      page.render({canvasContext: context, viewport: viewport}).promise.then(function() {
        images.push(canvas.toDataURL());
      });
    });
  }

  // Once all images have been loaded, create the flipbook
  Promise.all(images).then(function() {

    // Create the flipbook container element
    var flipbook = document.createElement('div');
    flipbook.classList.add('flipbook');

    // Create the page elements and add the images
    for(var i = 0; i < numPages; i++) {
      var page = document.createElement('div');
      page.classList.add('page');
      page.style.backgroundImage = 'url(' + images[i] + ')';
      flipbook.appendChild(page);
    }

    // Add the flipbook to the page
    var container = document.getElementById('flipbook-container');
    container.appendChild(flipbook);

    // Initialize the flipbook
    $('.flipbook').turn({
      width: 900,
      height: 600,
      autoCenter: true
    });

  });

});
