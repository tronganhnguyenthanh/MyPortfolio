function displayColorInput(){
 document.querySelector(".input_color").innerHTML = `
  <input 
    type="color"
    id="input_value"
  >
  <input 
    type="button"
    class="btn btn-primary"
    value="Apply"
    onclick="getInputValue()"
   >
 `
}

displayColorInput()

function getInputValue(){
  let value = document.querySelector("#input_value").value
  document.querySelector(".section-objective > h2").style.color = "#fff"
  document.querySelector(".section-objective > p").style.color = "#fff"
  document.querySelector(".workExp").style.color = value
  document.querySelector(".section-skills > h2").style.color = "#fff"
  document.querySelector("body").style.backgroundColor = value
  document.querySelector(".about-me").style.color = "#fff"
  document.querySelector(".aboutMe").style.color = "#fff"
  document.querySelector(".introduction").style.color = "#fff"
  document.querySelector(".project-content").style.color = "#fff"
  document.querySelector("#project-content-second").style.color = "#fff"
}
