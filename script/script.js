     //menu hamburger
     const menuBtn = document.querySelector(".menu-btn");
     const navigation = document.querySelector(".navigation");
     menuBtn.addEventListener("click", () => {
       menuBtn.classList.toggle("active");
       navigation.classList.toggle("active");
     });

     //Navegação dos slides
     const btns = document.querySelectorAll(".nav-btn");
     const slides = document.querySelectorAll(".video-slide");
     const content = document.querySelectorAll(".content");

     let sliderNav = function (manual) {
       btns.forEach((btn) => {
         btn.classList.remove("active");
       });

       slides.forEach((slide) => {
         slide.classList.remove("active");
       });

       content.forEach((content) => {
         content.classList.remove("active");
       });

       btns[manual].classList.add("active");
       slides[manual].classList.add("active");
       content[manual].classList.add("active");
     };

     btns.forEach((btn, i) => {
       btn.addEventListener("click", () => {
         sliderNav(i);
       });
     });

     // Scripts do modal de login
const openModalBtn = document.getElementById('openModalBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.getElementsByClassName('close')[0];

openModalBtn.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});