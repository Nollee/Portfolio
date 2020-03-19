

// ======================= Profile ===============================/
function addPop(){
    document.querySelector(".profile-btn div").classList.toggle("pop")
    document.querySelector(".profile-info div").classList.toggle("pop")
    let elements = document.querySelectorAll('.info-icon')
    for (let element of elements) {
    element.classList.toggle("pop")
        
    }

}



// ================= DROPDOWN ============================= 
let acc = document.getElementsByClassName("dropdown");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
};


// ======================= burger menu ================================

function slideBar(){
    let divs = document.querySelectorAll('.burger div')

    for (let div of divs) {
        div.classList.toggle("slide")        
        }
    
    document.querySelector(".burger-menu").classList.toggle("slide")
    document.querySelector(".overlay").classList.toggle("slide")

    }




