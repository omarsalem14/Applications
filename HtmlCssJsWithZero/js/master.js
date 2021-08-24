//Select Landing Page Element
let landingPage = document.querySelector(".landing-page");

//Get Array Of Images
let imgsArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];


setInterval(() => {
    //Get random Number
let randomNumber = Math.floor(Math.random() * imgsArray.length);

//Change Background Image Url
landingPage.style.backgroundImage = 'url("images/' + imgsArray[randomNumber]+ '")';

}, 10000);