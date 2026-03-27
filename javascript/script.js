var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


//   phone slider

var swiper = new Swiper(".mySwiper-phone", {
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });   


  // testimonial

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 40,
      },
    },
  });

// document.addEventListener("DOMContentLoaded", function () {
//   const locationSwiper = new Swiper(".locationSwiper", {
//     loop: true,
//     spaceBetween: 20,
//     slidesPerView: 4,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       576: {
//         slidesPerView: 2,
//       },
//       992: {
//         slidesPerView: 3,
//       },
//       1200: {
//         slidesPerView: 4,
//       },
//     },
//   });
// });


// form validation

const form = document.getElementById("newsletterForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // 🚫 stops page reload / submit

  const email = document.getElementById("newsletterEmail").value.trim();

  if (email === "") {
    form.style.border = "2px solid red";
  } else {
    form.style.border = "none";
    // here you can send data to server later
    form.reset();
  }
});
