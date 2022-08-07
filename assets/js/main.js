var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}








$('#ask-a-question').on('click', () => {
    const contactDivPosition = document.getElementById('contact').offsetTop;
    window.scroll({
      top: contactDivPosition + 30,
      left: 0,
      behavior: 'smooth'
    });
  });

  $('#property-image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    infinite: true,
    prevArrow: '<a href="#" class="slick-arrow slick-prev"><span class="fa fa-chevron-left"></span></a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next"><span class="fa fa-chevron-right"></span></a>'
  });

  $('#properties-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
    nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });


  // gallery item filter
  
  const filterButtons = document.querySelector("#filter-btns").children;
  const items = document.querySelector(".portfolio-gallery").children;

  for(let i =0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function(){
      for (let j =0; j < filterButtons.length; j++) {
        filterButtons[j].classList.remove("active2")
      }
      this.classList.add("active2");
      const target = this.getAttribute("data-target")

      for (let k = 0; k < items.length; k++) {
        items[k].style.display = "none";
        if (target == items[k].getAttribute("data-id")) {
          items[k].style.display = "block";
        }
        if (target == "all") {
          items[k].style.display = "block";
        }
      }
    })
  }