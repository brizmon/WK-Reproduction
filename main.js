window.onload = function(){
// playAnimations();
window.addEventListener('keydown', playSound);

// function playAnimations(){
//     const circles = document.querySelectorAll('circle')
//     let cat = $('circle:nth-child(2)');
//     console.log(cat)
//     let animeCircles = anime({
//         targets: '.key',
//         opacity: .5,
//         easing: 'easeOutExpo',
//         direction: 'alternate',
//         duration: 6000,
//         loop: true
//     })
    
//     animeCircles.play();
//     // circles.forEach(circle => animeCircles.play())
    
// }

function playSound(e){
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; //currentTime property sets or returns the current position (in seconds) of the audio/video playback - rewind to the start
    audio.play(); //play method starts playing the current audio/video
    key.classList.add('playing')
}



}

