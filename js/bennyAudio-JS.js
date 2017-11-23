// bennyAudio-JS


var player1 = document.getElementById("audio1");

function enableControls() {
	player1.controls = true;	
	player1.load();
}

function disableControls() { 
    player1.controls = false;
    player1.load();
} 


// ----- example coding for custom controller

		// html
// <audio id="yourAudio" preload='none'>
//     <source src='the url to the audio' type='audio/wav' />
// </audio>
// <a href="#" id="audioControl">play!</a>


		// js
var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl');

ctrl.onclick = function () {

    // Update the Button
    var pause = ctrl.innerHTML === 'pause!';
    ctrl.innerHTML = pause ? 'play!' : 'pause!';

    // Update the Audio
    var method = pause ? 'pause' : 'play';
    yourAudio[method]();

    // Prevent Default Action
    return false;
};