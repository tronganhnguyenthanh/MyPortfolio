function onsearchByAbbreviation(){
  let value = document.querySelector(".form-control").value
  switch(value){
   case "cd":
    window.location.href="https://candidates-beta.vercel.app"
    break;
   case "nco":
    window.location.href="https://new-courseupdate.surge.sh"
    break;
   case "loq":
    window.location.href="https://quiz-api-call.vercel.app/login.html"
    break;
   default:
    document.querySelector("#errMsg").innerHTML = "<p class='text-center text-danger'>Sorry, not found</p>"
    break
  }
}