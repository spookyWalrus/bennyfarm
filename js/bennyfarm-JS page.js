bennyfarm-JS page

<script>

	// (function($) {
 //    "use strict"; // Start of use strict


// ----------------------   this is for a sticky 2nd navbar ------------------
 
    var nav2 = document.getElementById("nav2");

    window.onscroll = function() {
        var win = window.pageYOffset;

/*  The classList.add // remove  methods as desribed in:
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/
        if (win > 50) {
            nav2.classList.add("stuck");
        } else {
            nav2.classList.remove("stuck");
        }

    };


// ------------------------------     for audio playback / controls -----------
//   .loud / .play  etc are methods from html5

     // var benFarm= document.getElementById("benFarm"),
     //    cue = document.getElementById("playBenFarm"),
     //    stopCue = document.getElementById("benFarmStop");

    

    // benFarm.addEventListener("click", playAudio, false);
    // stopCue.addEventListener("click", stopAudio, false);

   
    var play1 = document.getElementById("benFarm"),
        play2 = document.getElementById("benPor"),
        play3 = document.getElementById("benLogo"),
        play4 = document.getElementById("benHouse"),
        i,
        stop1 = document.getElementById("benFarmStop"),
        stop2 = document.getElementById("benPorStop"),
        stop3 = document.getElementById("benLogoStop"),
        stop4 = document.getElementById("benHouseStop"),
        audio1 = document.getElementById("playBenPor"),
        audio2 = document.getElementById("playBenFarm"),
        audio3 = document.getElementById("playBenLog"),
        audio4 = document.getElementById("playHouse");

        play1.addEventListener("click", playAudio, false);
	    play2.addEventListener("click", playAudio, false);
	    play3.addEventListener("click", playAudio, false);
        play4.addEventListener("click", playAudio, false);

	    stop1.addEventListener("click", stopAudio, false);
	    stop2.addEventListener("click", stopAudio, false);
	    stop3.addEventListener("click", stopAudio, false);
	    stop4.addEventListener("click", stopAudio, false);



function playAudio(this) {

	alert(this);
	
        cue.load();
        cue.play();
    };

    function stopAudio() {
        cue.pause();

    };

    switch



    //  var audio = [audio1, audio2, audio3, audio4];
    
    

		
	

</script>