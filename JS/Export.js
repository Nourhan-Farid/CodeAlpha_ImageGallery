let imgs = document.querySelectorAll(".box img");
let modalContainer = document.querySelector(".Modal-container");
let myModal = document.querySelector(".my-Modal");
let closeBtn = document.querySelector(".closeBtn");
let scrollingTop = document.querySelector(".scrollingTop");

for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    console.log(e.target.getAttribute("src"));
    modalContainer.style.display = "flex";
    let imgSrc = e.target.getAttribute("src");
    myModal.style.backgroundImage = `url(${imgSrc})`;
    myModal.style.backgroundSize = "contain";
    myModal.classList.add("animate__animated");
    myModal.classList.add("animate__fadeIn");
  });
}

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

modalContainer.addEventListener("click", close);

function close(e) {
  if (
    e.target == modalContainer ||
    e.target == closeBtn ||
    e.code == "Escape"
  ) {
    modalContainer.style.display = "none";
  }
}

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 500) {
    scrollingTop.style.display = "inline-flex";
  } else {
    scrollingTop.style.display = "none";
  }
}
