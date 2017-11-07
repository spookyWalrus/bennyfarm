

	// (function($) {
 //    "use strict"; // Start of use strict

//-------- this is to throttle the window.onscroll function to
//			improve performance.



	

	// function throttle(func, msWait) {
	// 	var time = Date.now(),
	// 		msWait = 10000,
 //  			func = changeTimeLine();

 //  		return function() {
 //    		if ((time + (msWait) - Date.now()) < 1000) {
	// 			// alert("check time");
 //      			func();
 //      			time = Date.now();

    		
	// 		}
 //  		}
// 	// }

// window.addEventListener('scroll', throttle, false);
window.onscroll = doThisStuffOnScroll;

var didScroll = false;

function doThisStuffOnScroll() {
    didScroll = true;
	}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
        // alert('You scrolled');
        stickyNav();
        changeTimeLine();

    }
},50);


	// };

    // window.onscroll = function() {
    // 	// stickyNav();
    // 	changeTimeLine();
    // }


// ----------------------   this is for a sticky 2nd navbar ------------------
// ----------------------   this is for a sticky 2nd navbar ------------------

    // function stickyNav() {
    //     var win = window.pageYOffset;

/*  The classList.add // remove  methods as desribed in:
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/
    //     if (win > 50) {
    //         nav2.classList.add("stuck");
    //         // offset(div);
    //     } else if (win < ){
    //         nav2.classList.remove("stuck");
    //     }
   
    // };

 var stickyNav = function() {
 	 var win = window.pageYOffset,
	 	 fired = false;

 	if (win >= 50 && fired === false) 
 		{
    	// alert('This will happen only once');
    	nav2.classList.add("stuck");
    	fired = true;
	  	} 
  	else if (win < 50) {
	   		nav2.classList.remove("stuck");
	   		fired = false;
	 	}
	};

// -----------  timeline: dynamically changing content --------
// -----------  timeline: dynamically changing content --------
// -----------  timeline: dynamically changing content --------



		// ---  find position of each chapter top ----------
var farmWrap = document.getElementById("farmWrapID"),
	bodyRect = document.body.getBoundingClientRect(),
	farmRect = farmWrap.getBoundingClientRect(),
    farmPos   = farmRect.top - bodyRect.top; //position of farm section

    // alert('Element is ' + farmPos + ' vertical pixels from <body>');


var vetWrap = document.getElementById("vetLifeWrapID"),
	vetRect = vetWrap.getBoundingClientRect();

var vetPos = vetRect.top - bodyRect.top;
    // alert('Element is ' + vetPos + ' vertical pixels from <body>');

	 //position of vet section

var decWrap = document.getElementById("declineWrapID"),
	decRect = decWrap.getBoundingClientRect();
var decPos = decRect.top - bodyRect.top;
    // alert('Element is ' + decPos + ' vertical pixels from <body>');

	 //position of decline section
var vet = document.getElementById("farmID"),
 	timeline = document.getElementsByClassName("timeline"),
 	timelinebox = document.getElementsByClassName("timeline-box"),
	timeHeader = document.getElementById("topDate"),
	timelist = document.getElementsByClassName("time-list"),
	date = document.getElementsByClassName("timeline-dates"),
	tiptext = document.getElementsByClassName("tiptext");



 		// ---  on scroll, change content------

    function changeTimeLine() {
    	// var win = winPos;
        var win = window.pageYOffset; // detect window position

	    	//make sure initial dates + bubble text here is same as original
        	// html DOC.

        if  (win < farmPos) {  // top of page
        	// this is set to 'hidden' so when you scroll back to top, 
        	// enitre timeline hides

	    	timeline[0].style.visibility = "hidden";
	    	timelinebox[0].style.visibility = "hidden";

        }	else if	(win >= farmPos && win < vetPos ) { 
        	// farm section
	    	timeline[0].style.visibility = "visible";
	    	timelinebox[0].style.visibility = "visible";

			timeHeader.style.color = "#000";

        	timeHeader.innerHTML = "1883 BC"
        	date[0].innerHTML = "1883 -";
			tiptext[0].innerHTML = "Eight threes";
			date[1].innerHTML = "1890 -";
			tiptext[1].innerHTML = "blah blah";
			date[2].innerHTML = "Horses!  -";
			tiptext[2].innerHTML = "Horses ate the grass";
         
        }	else if	(win >= (vetPos - 1) && win < decPos)	{    
        	// veterans section

			timeHeader.style.color = "#fff";
			timelist[0].style.color = "#fff";

        	timeHeader.innerHTML = "2122 BC"
        	date[0].innerHTML = "1607 -";
			tiptext[0].innerHTML = "golfing in the afternoon";
			date[1].innerHTML = "1201 -";
			tiptext[1].innerHTML = "arf arf";
			date[2].innerHTML = "Cows!  -";
			tiptext[2].innerHTML = "Cows drank the water";

        }	else if (win >= decPos)  {
        	// decline section

        	timeHeader.innerHTML = "355 AD"
			date[0].innerHTML = "1945  -";
			tiptext[0].innerHTML = "Typical country weather";
			date[1].innerHTML = "1933 -";
			tiptext[1].innerHTML = "meoww purr purrrrr";
			date[2].innerHTML = "CHickens!  -";
			tiptext[2].innerHTML = "The Pigs stood in the mud and contemplated their existence while the rain splashed the stinky slop up to their knees";

        }	
   //      	else if (win >= 1800 && win < 2000 ) {

   //      	timeHeader.innerHTML = "The Future past"
			// date[0].innerHTML = "4985  -";
			// date[2].innerHTML = "Chickens  -"; 
   //      }	else {

        // }

    };






// ---------   bubble text appears on hover ----------------
// ---------   bubble text appears on hover ----------------



				// - bubble text appears on hover, but only for
				// a single item triggering the event 

	// var bubbletext = document.getElementsByClassName("tiptext"),
	// 	dates = document.getElementsByClassName("timeline-dates");



		
		// dates[2]addEventListener("mouseover", bubbleShow);
		// dates[2].addEventListener("mouseout", bubbleHide);.

		
		// function bubbleShow() {
		// bubbletext[2].style.visibility = "visible";
		// };

		// function bubbleHide() {

		// bubbletext[2].style.visibility = "hidden";
		// };

		//  -- same as above, but with multiple items of the same class,
			// trigger only the one that is triggering the event  	



var bubbletext = document.getElementsByClassName("tiptext"),
		dates = document.getElementsByClassName("timeline-dates"),
		index;


for(var i=0;i<dates.length;i++){
	// Assign 'mouseover' as event listener to each 'dates' index item.
	// 'Mouseover' event also triggers a function.
    dates[i].onmouseover = function(){  
    	// On each mouseover event, go through index of 'dates' again.
        for(var j=0;j<dates.length;j++){
        	// For each index, see if it matches index of clicked item "this".
             if(dates[j]==this) {
             	// For every match, pass through index number on to 
             	// look up index item of 'bubbletext'.  Then, change attribute
             	// value for 'bubbletext' item.
 				bubbletext[j].style.visibility = "visible";
                 // index = j; 
                 // alert(index);//console.log(j), etc
                 break;
             }
        }
    }
    //  Do the same but on mouseout event  
     dates[i].onmouseout = function(){
        for(var j=0;j<dates.length;j++){
             if(dates[j]==this) {
 				bubbletext[j].style.visibility = "hidden";
                 // index = j; 
                 // alert(index);//console.log(j), etc
                 break;
             }
        }
    }
};





// var bodyRect = document.body.getBoundingClientRect(),
//     elemRect = element.getBoundingClientRect(),
//     offset   = elemRect.top - bodyRect.top;

// alert('Element is ' + offset + ' vertical pixels from <body>');




    // function bubbleHide() {

    //         var bubbletext = document.getElementsByClassName("tiptext");
    //         for(var i=0; i<bubbletext.length; i++)
    //          {	// alert(theOddOnes[i].innerHTML);


    //             switch(i){
    //             	case "0":
    //     				bubbletext[0].style.visibility = "hidden";
    //     				break;
    //     			case "1":
    //     				bubbletext[1].style.visibility = "hidden";
    //     				break;
    //     			case "2":
    //     				bubbletext[2].style.visibility = "hidden";
    //     				break;	
	   //             default:
				// 	// alert("nothing to hide here!");
				// }
    //         }
    //     };

	    

	// {
	// tiptext.style.color = "blue";
	// alert("blue!");
	// });


// bubble.addEventListener("onmouseover", function(show) {
	
//    	bubble[0].style.color = "blue";
//    };
// bubble.addEventListener("onmouseout", function(hide) {
// 	bubble[0].style.color = "blue";
 //    };

  
   
    

// function offset(el) {
//     var rect = el.getBoundingClientRect(),
//     scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
//     scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     return { top: rect.top + scrollTop, left: rect.left + scrollLeft },
//     console.log(scrollTop)
// }

// // example use
// var div = document.getElementById('#vetLife');
// var divOffset = offset(div);
// console.log(divOffset.left, divOffset.top);


// ----------------------  for changing background image for each section    

  // var farm = document.getElementById("farmTop");

    // window.onscroll = function() {
    //     var win = window.pageYOffset;

/*  The classList.add // remove  methods as desribed in:
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/
    //     if (win > 559) {
    //     	alert("stuck!");
    //         farm.classList.add("stuck");
    //     } else {
    //         farm.classList.remove("stuck");
    //     }

    // };




// ------------------------------     for audio playback / controls -----------
// ------------------------------     for audio playback / controls -----------
// ------------------------------     for audio playback / controls -----------
//   .loud / .play  etc are methods from html5
   

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


    

		
	
