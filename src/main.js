import './style.css'
import gsap from 'gsap';

gsap.from(".make", { 
  rotation: 0, 
  x: -2000, 
  duration: 0.8, 
  ease: "power1.inOut",
  delay: 0.3
});
gsap.from(".it", {
  x: 2000, 
  duration: 0.7,
  ease: "power3.out",
  delay: 1
});

gsap.from(".pop", {
  y: 2000, 
  duration: 0.7,
  ease: "power2.out",
  delay: 1.3,
});