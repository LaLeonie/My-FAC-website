/*-------------------------------------------Highlight menu on click--------------------------------------------------*/
var offset = 0;
function handleLinkClick(linkID) {
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
}

function homeClick(linkID) {
  //remove active from all anchor and add it to the clicked anchor
  var classes = document.getElementsByClassName("active-link");
  var element = document.getElementById(linkID);
  for (let index = 1; index < 5; index++) {
    var list = document.getElementById(`link${index}`);
    if (classes) {
      list.classList.remove("active-link");
    }
  }
}

/*-------------------------------------------highlight menu on scroll--------------------------------------------------*/

function activeHeader() {
  //Get header elements
  var welcome = document.getElementById("welcome");
  var header1 = document.getElementById("find_out");
  var header2 = document.getElementById("philosophie");
  var header3 = document.getElementById("join_FAC");
  var header4 = document.getElementById("thanks");

  //get viewport coordinates
  var pageYOffset = window.pageYOffset;
  var viewportHeight = window.innerHeight;
  var viewportBottom = pageYOffset + viewportHeight;

  //Get element's relative position in document
  var relativeBottom = function(elem) {
    var distance = elem.getBoundingClientRect();
    var pageYOffset = window.pageYOffset;
    var relBot = pageYOffset + distance.bottom;
    return relBot;
  };

  //Get element's relative top position in document
  var positionTop = function(elem) {
    var distance = elem.getBoundingClientRect();
    return distance.top;
  };

  //Get links with active class
  var classes = document.getElementsByClassName("active-link");

  //Header is active if it's relative Bottom is above bottom of viewport && next header's relative Bottom is below bottom of viewport
  //remove all highlights if top position of welcome text is larger than 0
  if (positionTop(welcome) > 0) {
    for (let index = 1; index < 5; index++) {
      var list = document.getElementById(`link${index}`);
      if (classes) {
        list.classList.remove("active-link");
      }
    }
  }
  //Condition for first header
  if (
    relativeBottom(header1) < viewportBottom &&
    relativeBottom(header2) > viewportBottom
  ) {
    //remove active from all anchor and add it to the clicked anchor
    var element1 = document.getElementById("link1");
    for (let index = 1; index < 5; index++) {
      var list = document.getElementById(`link${index}`);
      if (classes) {
        list.classList.remove("active-link");
      }
    }
    element1.classList.add("active-link");
  }
  //Condition for second header
  if (
    relativeBottom(header2) < viewportBottom &&
    relativeBottom(header3) > viewportBottom
  ) {
    //remove active from all anchor and add it to the clicked anchor
    var element2 = document.getElementById("link2");
    for (let index = 1; index < 5; index++) {
      var list = document.getElementById(`link${index}`);
      if (classes) {
        list.classList.remove("active-link");
      }
    }
    element2.classList.add("active-link");
  }
  //Condition for third header
  if (
    relativeBottom(header3) < viewportBottom &&
    relativeBottom(header4) > viewportBottom
  ) {
    //remove active from all anchor and add it to the clicked anchor
    var element3 = document.getElementById("link3");
    for (let index = 1; index < 5; index++) {
      var list = document.getElementById(`link${index}`);
      if (classes) {
        list.classList.remove("active-link");
      }
    }
    element3.classList.add("active-link");
  }
  //Condition for fourth header
  if (
    relativeBottom(header4) < viewportBottom &&
    relativeBottom(header3) < viewportBottom - viewportHeight
  ) {
    //remove active from all anchor and add it to the clicked anchor
    var element4 = document.getElementById("link4");
    for (let index = 1; index < 5; index++) {
      var list = document.getElementById(`link${index}`);
      if (classes) {
        list.classList.remove("active-link");
      }
    }
    element4.classList.add("active-link");
  }
}

window.addEventListener("scroll", activeHeader);
