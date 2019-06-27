// mouseover
const popBox = document.querySelectorAll(".child-box");
popBox.forEach(box => {
  box.addEventListener("mouseover", e => {
    box.classList.toggle("large");
  });
})


// ----- Click -----
const test = document.querySelector(".parent-container1 h1"); 
test.addEventListener("click", event => {
    test.textContent = "TeamWork Makes the DreamWork!"
}); 
    


