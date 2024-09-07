// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



const myvideoSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
];

const myvideoTiming = {
    duration: 200,
    iterations: 1,
};

const songvideo = document.querySelector(".myvideo");

mybutton.addEventListener("click", () => {
    songvideo.animate(myvideoSpinning, myvideoTiming);
});