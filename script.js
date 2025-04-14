// text animation

gsap.to(".quote-text", {
    text: "“Food brings people together on many different levels. It's nourishment of the soul and body; it's truly love.” –  Giada De Laurentiis.",
    duration: 5,
    repeat: -1,
    repeatDelay: 3,
    ease: "power1.in",
    yoyo: true
})

gsap.from(".content", {x:-50, duration:3, opacity:0, delay:.7})
gsap.from(".image", {x:50, duration:3, opacity:0, delay:.7})
gsap.from('.aboutImage', {
    scrollTrigger: '.aboutImage', // start the animation when ".box" enters the viewport (once)
    x: -150, duration:3, delay:1, opacity:0
});
gsap.from('.contentAbout', {
    scrollTrigger: '.aboutImage', // start the animation when ".box" enters the viewport (once)
    x: 50, duration:2, delay:1, opacity:0
});
gsap.from('.aboutItemsDetails', {
    scrollTrigger: '.aboutImage', // start the animation when ".box" enters the viewport (once)
    x: 150, duration:2, delay:2, opacity:0
});

gsap.from('.imgMenu', {
    scrollTrigger: '.imgMenu', // start the animation when ".box" enters the viewport (once)
    y: -50, duration:2, delay:1, opacity:0
});
gsap.from('form', {
    scrollTrigger: 'form', // start the animation when ".box" enters the viewport (once)
    x: -50, duration:2, delay:0.1, opacity:0
});


//gallery animation
// gallery script

document.querySelectorAll(".imgContainer img").forEach(image =>{
    image.addEventListener('click',() =>{
        document.querySelector(".popup-image").style.display = "block";
        document.querySelector(".popup-image img").src = image.getAttribute("src");
    }) 
});

document.querySelector(".popup-image span").addEventListener('click', ()=>{
    document.querySelector(".popup-image").style.display = "none";
}) 