// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", function(){
  let myModal = document.getElementById("modal");
  myModal.classList.add("hidden");
  likeButton();
})

function likeButton(){
  let likeBtn = document.querySelectorAll('.like-glyph');

  likeBtn.forEach(trigger => trigger.addEventListener('click', function(event){
    mimicServerCall()
      .then(displayLikes(event)
      )
      .catch(error => {
        let myModal = document.getElementById("modal");
        myModal.classList.remove("hidden");

        let myModalMessage = document.getElementById("modal-message");
        myModalMessage.innerText = error;
        setTimeout(() => myModal.classList.add("hidden"), 3000);
      })
  }))
}

function displayLikes(event){
  if (event.target.innerText == '♡'){
    event.target.innerText = FULL_HEART;
    event.target.classList.add("activated-heart");
  } else if (event.target.innerText == '♥'){
    event.target.innerText = EMPTY_HEART;
    event.target.classList.remove("activated-heart");
  }
}



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
