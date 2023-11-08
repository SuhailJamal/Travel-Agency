var signbtn = document.getElementById("sign-btn");
var signuppop = document.getElementById("signuppopup");
var slideImage = document.querySelectorAll(".slide-image");
var aboutlogo = document.getElementById("aboutlogo");
var popup = document.getElementById("thankyoupopup");
var body = document.querySelector("body");

signbtn.addEventListener("click", function () {
 signuppop.style.display="flex";
});
slideImage.forEach((slideImage) => {
  slideImage.addEventListener("mouseover", () => {
    slideImage.style.transform = "scale(1.1)";
  });

  slideImage.addEventListener("mouseout", () => {
    slideImage.style.transform = "scale(1)";
  });
});
aboutlogo.addEventListener("mouseover", () => {
  aboutlogo.style.transform = "scale(1.1)";
});
aboutlogo.addEventListener("mouseout", () => {
  aboutlogo.style.transform = "scale(1)";
});
function thankyoupopup() {
  popup.style.display = "flex";
  popup.style.position = "fixed";

}
function nopopup() {
  popup.style.display = "none";
}
function disappearpopup(){
  signuppop.style.display= "none";
}