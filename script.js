document.addEventListener('DOMContentLoaded', () => {
    const kitten = document.getElementById('kitten-widget');
  
    // Function to trigger the wave animation
    function triggerWave() {
      kitten.classList.add('animate-wave');
      // Remove the animation class after 1 second so it can be triggered again later
      setTimeout(() => kitten.classList.remove('animate-wave'), 1000);
    }
  
    // Randomly trigger the wave every 15-30 seconds for an unexpected pop-up effect
    setInterval(() => {
      // Choose a random delay between 10,000 and 30,000 milliseconds
      const randomDelay = Math.floor(Math.random() * 20000) + 10000;
      setTimeout(triggerWave, randomDelay);
    }, 15000);
  
    // Also trigger the wave immediately upon hovering for added interactivity
    kitten.addEventListener('mouseenter', triggerWave);
  });
  