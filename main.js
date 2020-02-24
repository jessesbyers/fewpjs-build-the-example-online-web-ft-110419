// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
document.getElementById("modal").className = "hidden"

let likeButtons = document.querySelectorAll("li.like")
likeButtons.forEach(likeButton => {
  likeButton.addEventListener('click', function() {
    let heart = likeButton.querySelector("span")
    if (heart.innerHTML === FULL_HEART) {
      heart.innerHTML = EMPTY_HEART
    } else if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART
    }
  })
})











//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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
