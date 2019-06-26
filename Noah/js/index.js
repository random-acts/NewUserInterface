// mouseover
const popBox = document.querySelector(".child-box");
popBox.addEventListener("mouseover", function (e) {
  popBox.classList.toggle("large"); 
});

// const popBox = document.querySelector(".shelby");
// popBox.addEventListener('mouseover', function (e) {
//   popBox.classList.toggle('large');
// });

// ----- Click -----
const test = document.querySelector(".parent-container1 h1"); 
test.addEventListener("click", event => {
    test.textContent = "TeamWork Makes the DreamWork!"
}); 
    


