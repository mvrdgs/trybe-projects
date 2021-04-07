const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');
const imageContainer = document.querySelector('#meme-image-container');
const fireButton = document.querySelector('#fire');
const waterButton = document.querySelector('#water');
const earthButton = document.querySelector('#earth');
const meme1 = document.querySelector('#meme-1');
const meme2 = document.querySelector('#meme-2');
const meme3 = document.querySelector('#meme-3');
const meme4 = document.querySelector('#meme-4');

function setMeme1() {
  memeImage.setAttribute('src', 'imgs/meme1.png');
}

function setMeme2() {
  memeImage.setAttribute('src', 'imgs/meme2.png');
}

function setMeme3() {
  memeImage.setAttribute('src', 'imgs/meme3.png');
}

function setMeme4() {
  memeImage.setAttribute('src', 'imgs/meme4.png');
}

function waterBorder() {
  imageContainer.style.borderColor = 'rgb(0, 0, 255)';
  imageContainer.style.borderWidth = '5px';
  imageContainer.style.borderStyle = 'double';
}

function fireBorder() {
  imageContainer.style.borderColor = 'rgb(255, 0, 0)';
  imageContainer.style.borderWidth = '3px';
  imageContainer.style.borderStyle = 'dashed';
}

function earthBorder() {
  imageContainer.style.borderColor = 'rgb(0, 128, 0)';
  imageContainer.style.borderWidth = '6px';
  imageContainer.style.borderStyle = 'groove';
}
// https://stackoverflow.com/questions/31710127/javascript-image-upload-and-display
function setImage(input) {
  let reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = (e) => {
      memeImage.setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

memeInsert.addEventListener('change', () => {
  setImage(memeInsert);
});

function setText() {
  memeText.innerText = inputText.value;
}

function getText() {
  inputText.addEventListener('keyup', setText);
}
meme1.addEventListener('click', setMeme1);
meme2.addEventListener('click', setMeme2);
meme3.addEventListener('click', setMeme3);
meme4.addEventListener('click', setMeme4);
earthButton.addEventListener('click', earthBorder);
fireButton.addEventListener('click', fireBorder);
waterButton.addEventListener('click', waterBorder);
getText();
memeInsert.addEventListener('change', () => {
  setImage(memeInsert);
});
