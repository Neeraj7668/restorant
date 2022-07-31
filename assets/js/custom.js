$(document).ready(function () {
  simpleCarousel($(".simple-carousel"), 5000);
});

function simpleCarousel(carousel, intervalTime = 5000) {
  var slideCount = $(carousel).find("ul li.slide").length;
  var activeSlide = 0;

  function showSlide() {
    $(carousel)
      .find("ul li.slide")
      .each(function (index) {
        if (index == activeSlide) {
          $(this).fadeIn();
        } else {
          $(this).fadeOut();
        }
      });
  }

  setInterval(function () {
    moveRight();
  }, intervalTime);

  function moveLeft() {
    activeSlide -= 1;
    if (activeSlide < 0) {
      activeSlide = slideCount - 1;
    }
    showSlide();
  }

  function moveRight() {
    activeSlide += 1;
    if (activeSlide >= slideCount) {
      activeSlide = 0;
    }
    showSlide();
  }

  $(carousel)
    .find("a.control_prev")
    .click(function () {
      moveLeft();
    });

  $(carousel)
    .find("a.control_next")
    .click(function () {
      moveRight();
    });
}

var selector = ".navbar-nav li a";

$(selector).on("click", function () {
  $(selector).removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function ($) {
  "use strict";
  $("#customers-testimonials").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 30,
    autoplay: false,
    dots: true,
    nav: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    navText: [
      '<i class="fa fa-angle-left"></i>',
      '<i class="fa fa-angle-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 3,
      },
    },
  });
});

const openEmail = () => {
  window.location.href = "mailto:restaurant@salvador.co.nz";
};

$(document).ready(function () {
  $("#pizza").click(function () {
    localStorage.setItem("menuName", "menu_pizza");
  });

  $("#antipasti").click(function () {
    localStorage.setItem("menuName", "menu_antipasti");
  });

  $("#pasta").click(function () {
    localStorage.setItem("menuName", "menu_pasta");
  });

  $("#secondi").click(function () {
    localStorage.setItem("menuName", "menu_secondi");
  });

  $("#dolci").click(function () {
    localStorage.setItem("menuName", "menu_dolci");
  });

  // Handler for .ready() called.

  var menuName = localStorage.getItem("menuName");
  $("html, body").animate(
    {
      scrollTop: $("#" + menuName).offset().top,
    },
    "slow"
  );
});

const clearLocalStorage = () => {
  localStorage.clear();
};

const sendMail = () => {
  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const phoneNumber = document.getElementById("phoneNumber").value;
  const message = document.getElementById("message").value;

  Email.send({
    SecureToken: "4f0ab8d3-759c-4f9b-8582-e467a1468b50",
    To: "Salvador.Italian@gmail.com",
    From: "Salvador.Italian@gmail.com",
    Subject: `New Mail on contact form from ${name} ${lastName}`,
    Body: `I'm ${name} ${lastName}. <br> My phone number is: ${phoneNumber}. Email is: ${email}.<br> ${message}`,
  }).then((message) => {
    if (message == "OK") {
      alert("Your email has been send. Thank you!");
      window.location.reload();
    } else {
      console.log(message);
      alert("There was an error sending your email. Please try again later.");
    }
  });
};
