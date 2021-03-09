import { Post } from "./entry/entry.js"
import {getPosts} from "./entry/dataManager.js"

const postElement = document.querySelector(".showPost");

const showPost = () => {
      getPosts().then((journalPosts) => { 
          let postHTML = ""
          journalPosts.forEach(element => {
           postHTML += Post(element)  
          });
          postElement.innerHTML = postHTML;
      })
  }
  showPost()

  document.getElementById("submitButton").addEventListener("click", function() {
    console.log(event.path[0].id)
});



// adding event listener for CTA button
// postElement.addEventListener("click", event => {
//     console.log(event.target)
//     if (event.target.dispatchEvent.startsWith("#submitButton")){

//     }
// })

