const slides = document.querySelectorAll(".Slides");
let positions = ["left", "center", "right"];
let Index = 1;
slides.forEach((slide, i) => {
  slide.classList.add(positions[i]);
});

function rotate(n) {
  let dots = document.getElementsByClassName("dot");
  if (n === "next") {
    positions.unshift(positions.pop());
    Index++;
  } else {
    positions.push(positions.shift());
    Index--;
  }

   if (Index > dots.length) Index = 1;
  if (Index < 1) Index = dots.length;
  slides.forEach(slide => {
    slide.classList.remove("left", "center", "right");
  });

  slides.forEach((slide, i) => {
    slide.classList.add(positions[i]);
  });
  
  for (let i = 0; i < dots.length; i++) {
  dots[i].classList.remove("active");
}
  dots[Index-1].className += " active";
}
  
  document.querySelectorAll(".FAQ-link").forEach(FAQ => {
    FAQ.addEventListener("click", () => {
      const info = FAQ.nextElementSibling;
      info.classList.toggle("active");
    });
  });

  const disclaimerPopup = document.getElementById("disclaimer-popup");
  const disclaimerButton = document.getElementById("disclaimer-ok");

  if (disclaimerButton && disclaimerPopup) {
    disclaimerButton.addEventListener("click", () => {
      disclaimerPopup.remove();
    });
  }
