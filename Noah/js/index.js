// ----- mouseover -----
const popBox = document.querySelectorAll(".child-box");
popBox.forEach(box => {
  box.addEventListener("mouseover", e => {
    box.classList.toggle("large");
  });
}); 

// ----- mouseout -----
const test = document.querySelector(".parent-container1 h1"); 
test.addEventListener("mouseout", event => {
    test.textContent = "Team Work Makes the Dream Work!"; 
}); 


const team = ["Jake Thomas", "Andrew Brudnak", "Carlos Santana", "Noah Franco", "Michael Baynon"]
const group = team.filter((element) => {
  return element > document.querySelector("#two")
}) 

console.log()



    



