

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


	   


	// function stopAudio(id) {

	// 	switch(id){
	// 		case "play1":
	// 			var cue = play1;
	// 			break;
	// 		case "play2":
	// 			var cue= play2;
	// 			break;
	// 		default:
	// 			alert("none");

	//         // cue.load();
	//         // cue.play();
	//     };
	// }; 


   

// assign a variable to the id being clicked to play audio -----------
    var play1 = document.getElementById("benFarm"),
        play2 = document.getElementById("benPor"),
        play3 = document.getElementById("benLogo"),
        play4 = document.getElementById("benHouse"),
// assign a variable to stop id to stop audio  -------------------
        stop1 = document.getElementById("benFarmStop"),
        stop2 = document.getElementById("benPorStop"),
        stop3 = document.getElementById("benLogoStop"),
        stop4 = document.getElementById("benHouseStop"),
// assign variable to audio source -------------------------
    	audio1 = document.getElementById("playBenPor"),
        audio2 = document.getElementById("playBenFarm"),
        audio3 = document.getElementById("playBenLogo"),
        audio4 = document.getElementById("playBenHouse");

     



	function showId(the_id) {
			var i = the_id,
				cue;

			switch(i){
				case "benFarm":
					var cue = audio1;
					break;
				case "benPor":
					var cue = audio2;
					break;
				case "benLogo":
					var cue = audio3;
					break;	
				case "benHouse":
					var cue = audio4;
					break;	
				default:
					alert("nothing to play here!");
				};

	        cue.load();
	        cue.play();
			    
			}; 

	function showStop(the_id) {
			var i = the_id,
				cue;

			switch(i){
				case "benFarmStop":
					var cue = audio1;
					break;
				case "benPorStop":
					var cue = audio2;
					break;
				case "benLogoStop":
					var cue = audio3;
					break;	
				case "benHouseStop":
					var cue = audio4;
					break;	
				default:
					alert("nothing to play here!");
				};

	        cue.pause();
			    
			}; 



    //  var audio = [audio1, audio2, audio3, audio4];
    
    

		
	
