var imageUrls = [
  'https://i.kym-cdn.com/entries/icons/original/000/013/564/doge.jpg',
  'https://etcanada.com/wp-content/uploads/2016/06/58c0500b2ac4c342c6fc4ab096ada150.jpg?quality=80&strip=all&crop=0px%2C21px%2C500px%2C333px&resize=720%2C480',
  'https://wiki.godvillegame.com/images/thumb/7/76/Prap.jpg/298px-Prap.jpg',
  'https://www.dictionary.com/e/wp-content/uploads/2018/03/This-is-Fine-300x300.jpg',
  'http://pbs.twimg.com/media/E3Ujmi0XEAUsweD.jpg',
  'https://i.kym-cdn.com/entries/icons/original/000/030/157/womanyellingcat.jpg',
  'https://i.kym-cdn.com/entries/icons/original/000/005/848/Aliens.jpg',
  'https://static.stacker.com/s3fs-public/styles/slide_tablet/s3/72_4.jpg',
  'https://static.stacker.com/s3fs-public/styles/slide_tablet/s3/2019-03/Screen%20Shot%202019-03-14%20at%2010.53.38%20AM.png'
];
var gallery = document.querySelector("main");
var imageUrlInput = document.querySelector("input");
var addImageButton = document.querySelector("button");

addImageButton.addEventListener("click", function () {
  if (imageUrlInput.value !== '') {
    imageUrls.push(imageUrlInput.value)
  }
  imageUrlInput.value = '';
  updateGallery();
});

function updateGallery() {
  gallery.innerHTML = '';
  for (var i = 0; i < imageUrls.length; i++) {
    var imageElement = document.createElement("img");
    imageElement.className = "gallery-image";
    imageElement.src = imageUrls[i];
    gallery.appendChild(imageElement);
  }
}

updateGallery();
