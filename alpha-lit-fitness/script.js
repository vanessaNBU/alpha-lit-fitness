/*------Gallery------*/

const current = document.querySelector('#current'); /*we are grabing the current picture which has an ID of current*/
const imgs = document.querySelectorAll('.imgs img'); /*returns a node list*/ /*we are grabbing all the images; since we are using querySelectorAll we want to take all of them, not only the current one*/
const opacity = 0.6;
imgs[0].style.opacity = opacity; //Set 1st img opacity

/*this chanages the images*/
imgs.forEach(img => img.addEventListener('click', imgClick)); /*it's like a loop traversing each image and is waiting for a click... we'll later pass it to an equal event*/

function imgClick(e) {
    imgs.forEach(img => (img.style.opacity = 1)); //Reset the opacity with each click

    current.src = e.target.src; /*Change current image to src of clicked image*/

    current.classList.add('fade-in'); // Add fading class

    setTimeout(() => current.classList.remove('fade-in'), 500); //Remove fade-in class after .5s 

    e.target.style.opacity = opacity; //Change the opacity to var
}