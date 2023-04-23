const btn = document.querySelector(".btn");
const block = document.querySelector(".block");

cnt = 0;

// colorBlock.innerHTML = "Blue";

// btn.addEventListener("click", () => {
//   cnt++;
//   colorBlock.innerHTML = "Red";

//   colorBlock.classList.remove("blue");
//   colorBlock.classList.add("red");

//   if (cnt > 1) {
//     cnt = 0;
//     colorBlock.innerHTML = "Blue";
//     colorBlock.classList.remove("red");
//     colorBlock.classList.add("blue");
//   }
// });

// colorBlock.innerHTML = "Blue";

btn.addEventListener("click", () => {
  const a = '"';

  cnt++;
  if (cnt === 1) {
    block.innerHTML = a + "I am lovingful and blissful being" + a;
  } else if (cnt === 2) {
    block.innerHTML = a + "Me being master ocean of Knowledge" + a;
  } else if (cnt === 3) {
    block.innerHTML = a + "I am master almighty" + a;
  } else if (cnt === 4) {
    block.innerHTML = a + "We are children of Almighty God. " + a;
  } else if (cnt === 5) {
    block.innerHTML = a + "Truth can not be destroyed. One day it emerges." + a;
  } else if (cnt === 6) {
    block.innerHTML = a + "Nothing is impossible in this world." + a;
  } else if (cnt === 7) {
    block.innerHTML = a + "Meditaion means All attention without tension" + a;
  } else if (cnt === 8) {
    block.innerHTML = a + "Healthy mind is powerful than a healthy body" + a;
  } else if (cnt === 9) {
    block.innerHTML = a + "As we think, so we become" + a;
  } else if (cnt > 9) {
    cnt = 0;
    block.innerHTML = a + "I am a peaceful soul" + a;
  }

  // colorBlock.innerHTML = "Red";

  // colorBlock.classList.remove("blue");
  // colorBlock.classList.add("red");

  // if (cnt > 1) {
  //   cnt = 0;
  //   colorBlock.innerHTML = "Blue";
  //   colorBlock.classList.remove("red");
  //   colorBlock.classList.add("blue");
  // }
});
