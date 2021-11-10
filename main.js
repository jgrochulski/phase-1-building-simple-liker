// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorBanner = document.querySelector('#modal');
const errorText = errorBanner.querySelector('#modal-message');
errorBanner.className = "hidden";

document.addEventListener('DOMContentLoaded', () => {
  let likesArray = document.querySelectorAll('.like-glyph');
  likesArray.forEach(heart => heart.addEventListener('click', () => {
    if (heart.textContent == EMPTY_HEART) {
      mimicServerCall()
      .then(() => {
        heart.textContent = FULL_HEART;
        heart.className = 'activated-heart';
      })
      .catch(error => {
      errorText.textContent = error;
      errorBanner.id
      errorBanner.classList.remove('hidden');
      setTimeout(() => {errorBanner.className = 'hidden'}, 3000);
      });
    }
    else {
      heart.textContent = EMPTY_HEART;
      heart.className = 'like-glyph';
    }  
  }))
});




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
