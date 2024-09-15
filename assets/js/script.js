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
  document.querySelector(".aboutMe").style.backgroundColor = value
  document.querySelector(".aboutMe").style.padding = "4px"
  document.querySelector(".aboutMe").style.textAlign = "center"
  document.querySelector(".aboutMe").style.color = "#fff"
  document.querySelector(".section-objective > h2").style.backgroundColor = value
  document.querySelector(".section-objective > h2").style.color = "#fff"
  document.querySelector(".section-objective > p").style.textAlign = "center"
  document.querySelector(".section-objective > h2").style.textAlign = "center"
  document.querySelector(".section-skills > h2").style.backgroundColor = value
  document.querySelector(".workExp").style.backgroundColor = value
  document.querySelector(".workExp").style.color = "#fff"
  document.querySelector(".project-name").style.backgroundColor = value
  document.querySelector(".project-name").style.textAlign = "center"
  document.querySelector(".project-name").style.color = "#fff"
  document.querySelector(".section-skills > h2").style.color = "#fff"
}
