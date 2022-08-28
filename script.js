//Inspiration from https://accordionslider.com/
//floating and bounce animation credits to https://gist.github.com/roachhd/5d1b9ed970b90b3abb18

// Wrap every letter in a span - by animejs
var textWrapper = document.querySelector('#intro');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '#intro .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '#intro',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  //move right animation for skills-cont on hover
  function moveRight(){
    document.querySelector('#skills-cont').classList.append('slideRight');
  }