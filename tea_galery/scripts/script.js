const galleryImg = document.getElementById('galleryImg');
  const imageCaption = document.getElementById('imageCaption');
  const prevBtn = document.getElementById('previusButton');
  const nextBtn = document.getElementById('nextButton');

  const images = ['img/comfy_tea.jpg', 'img/green_tea.jpg', 'img/macha_tea.jpg'];
  const captions = ['A cozy and inviting scene at home.', 'The image portrays the essence of green tea in all its glory.', ' A traditional Japanese tea'];
  let currentImageIndex = 0;

  function updateImage() {
    galleryImg.src = images[currentImageIndex];
    imageCaption.textContent = captions[currentImageIndex];
  }

  prevBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });

  nextBtn.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });

  updateImage();    