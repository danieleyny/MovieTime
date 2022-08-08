var navLinks = document.getElementById("navLinks");

function showMenu(){
    navLinks.style.right = "0";
}

function hideMenu(){
    navLinks.style.right = "-200px";
}




// Type Writter JS Code
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 15);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if(this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 300;

    if(this.isDeleting) {
      typeSpeed /= 3;
    }

    // If word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}


// Init On DOM Load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}


// End of typewriter section






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