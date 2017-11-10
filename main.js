window.addEventListener('keydown', playSound);

function playSound(e){
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0; //currentTime property sets or returns the current position (in seconds) of the audio/video playback - rewind to the start
    audio.play(); //play method starts playing the current audio/video
    key.classList.add('playing')
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeClass))

function removeClass(e){
    // console.log(e)
    if(e.propertyName !== 'stroke') return; // skip it if it's not a stroke - propertyName refers to the css that was applied dynamically when key is press ('.playing')
    // console.log(e.propertyName)
    this.classList.remove('playing')
}


