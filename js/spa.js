"use strict";

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}

// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "flex";
}


// navigate to a new view/page by changing href
function navigateTo(pageId) {
  location.href = `#${pageId}`;
}

function reload(){
  location.reload();
}

// set default page or given page by the hash url
// function is called 'onhashchange'
function pageChange() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}

pageChange(); // called by default when the app is loaded for the first time

// to shoe and hide the loader
function showLoader(show) {
  let loader = document.getElementById('loader');
  if (show) {
    loader.classList.remove("hide");
  } else {
    loader.classList.add("hide");
  }
}


function reload(){
  let link = document.querySelectorAll("a");
  for (let a of link) {
    a.classList.remove("pop")     
    }
    let divs = document.querySelectorAll("div");
    for (let div of divs) {
      div.classList.remove("pop");
      div.classList.remove("slide");
          
      }

      document.querySelector(".dropdown").classList.remove("active");
      let panel = document.querySelector(".panel");
      panel.style.maxHeight = null;


      
}