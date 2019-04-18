//Remove active from all anchor and add it to the clicked anchor

// window.onscroll = function() {
//   handleScroll();
// };

// function handleScroll() {
//   var all = document.getElementsByTagName("section");
//   for (let index = 0; index < all.length; index++) {
//     const element = all[index].offsetTop;
//     var link = document.getElementById(`link${index + 1}`);
//     var offsetHeight = all[index].offsetHeight;
//     if (element < window.pageYOffset ) {
//       link.classList.add("active-link");
//       if (element + offsetHeight < window.pageYOffset) {
//         link.classList.remove("active-link");
//       }
//     }
//   }
// }
var offset = 0;
function handleLinkClick(linkID) {
  // Prevent the link from updating the URL
  event.preventDefault();
  //remove active from all anchor and add it to the clicked anchor
  var classes = document.getElementsByClassName("active-link");
  var element = document.getElementById(linkID);
  for (let index = 1; index < 5; index++) {
    var list = document.getElementById(`link${index}`);
    if (classes) {
      list.classList.remove("active-link");
    }
  }
  element.classList.add("active-link");

  // The id of the section we want to go to
  var anchorId = element.getAttribute("href").substr(1);
  //get the element
  var target = document.getElementById(anchorId);
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

function homeClick(linkID) {
  // Prevent the link from updating the URL
  event.preventDefault();
  //remove active from all anchor and add it to the clicked anchor
  var classes = document.getElementsByClassName("active-link");
  var element = document.getElementById(linkID);
  for (let index = 1; index < 5; index++) {
    var list = document.getElementById(`link${index}`);
    if (classes) {
      list.classList.remove("active-link");
    }
  }
  //get the element
  var target = document.getElementById("home");
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

window.onscroll = function() {
  handleScroll();
};

function handleScroll() {
  // Get the current vertical position of the scroll bar
  var position = document.body.scrollTop;
  var elems = document.getElementsByClassName("nav-elem");
  console.log(elems);
  for (let index = 0; index < elems.length; index++) {
    var anchorId = elems[index].getAttribute("href").substr(1);
    var target = document.getElementById(anchorId).offsetTop;
    console.log(position, target);
    if (position >= target) {
      for (let j = 1; j < 5; j++) {
        var list = document.getElementById(`link${j}`);
        if (classes) {
          list.classList.remove("active-link");
        }
      }
      elems[index].classList.add("active-link");
    }
  }
}
//     })
// })
// $(function(){
//     //set our scroll state after dom ready
//     $(window).scroll();
// })
