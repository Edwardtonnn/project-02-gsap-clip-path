import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'; 
import { gsap } from  'gsap';


// import splt from 'spltjs'; 
// import anime from 'animejs';
import * as bootstrap from 'bootstrap';

document.querySelector('#app').innerHTML = /*html*/`
<div>

 <!-- Navigation Bar -->
 <nav class="navbar navbar-expand-lg navbar-light bg-dark">
 <div class="container">
   <a class="navbar-brand text-white text-primary" href="#">Edwardtonnn</a>
   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav ms-auto">
       
       <li class="nav-item">
         <a class="nav-link text-white" href="#">Create</a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white" href="#">Improve</a>
       </li>
       <li class="nav-item">
         <a class="nav-link text-white" href="#">Iterate</a>
       </li>
     </ul>
   </div>
 </div>
</nav>

<!-- Hero Slider -->
<div id="heroCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
 <div class="carousel-inner">
   <div class="carousel-item active">
     <img src="/project-02-img-01.jpg" class="d-block w-100" alt="Slide 1">
     <div class="carousel-caption  d-md-block">
     <img class="subject" src="reg-subject.jpg" alt="primary subject image">


       <h5 class="text-primary">Amor Fati</h5>
       <p>Embrace your fate. Accept every event as part of life’s journey.</p>
     </div>
   </div>
   <div class="carousel-item">
     <img src="/project-02-img-02.jpg" class="d-block w-100" alt="Slide 2">
     <div class="carousel-caption  d-md-block">
     <img class="subject" src="reg-subject-01.jpg" alt="primary subject image">


       <h5 class="text-primary">Memento Mori</h5>
       <p>Remember you will die. Let this awareness guide your actions.</p>
     </div>
   </div>
   <div class="carousel-item">
     <img src="/project-02-img-03.jpg" class="d-block w-100" alt="Slide 3">
     <div class="carousel-caption  d-md-block">
     <img class="subject" src="reg-subject-02.jpg" alt="primary subject image">


       <h5 class="text-primary">Opportunities</h5>
       <p>Challenges are opportunities. Find strength through adversity.</p>
     </div>
   </div>
 </div>

 <!-- Carousel Controls -->
 <button class="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
   <span class="carousel-control-prev-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Previous</span>
 </button>
 <button class="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
   <span class="visually-hidden">Next</span>
 </button>
</div>
</div>
`


document.addEventListener("DOMContentLoaded", () => {
  // Fade in logo
   // Create a timeline
   const tl = gsap.timeline();

   // Add both the logo and navigation to the timeline to animate together
   tl.from(".navbar-brand", { opacity: 0, y: -20, duration: 1, ease: "power2.out" })
     .from(".navbar-nav, .carousel-control-next-icon, .carousel-control-prev-icon ", { opacity: 0, y: -20, duration: 1, ease: "power2.out" }, 0)
    
     .to(".subject", {
      clipPath: "inset(0 0% 0 0)", // Reveal entire image
      duration: 0.5, 
      ease: "power2.out"
    })
     .to("h5, p", { 
      clipPath: "inset(0% 0 0 0)", // Reveals the text from bottom to top
      duration: 0.5, 
      ease: "power2.out",
      stagger: 0.3     // Adds a slight delay between each h5 if there are multiple on the page
  })
  

 });
