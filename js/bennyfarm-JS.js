

	// (function($) {
 //    "use strict"; // Start of use strict

//-------- this is to throttle the window.onscroll function to
//			improve performance.
	
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
   
    // };  // << old version

var nav2 = document.getElementById("nav2");

// this is to check if sticky function is fired once, then stop firing
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

// --------------  scroll on link click -----
// --------------  scroll on link click -----





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
	vetRect = vetWrap.getBoundingClientRect(),
	vetPos = vetRect.top - bodyRect.top;//position of vet section
    // alert('Element is ' + vetPos + ' vertical pixels from <body>');
	 

var decWrap = document.getElementById("declineWrapID"),
	decRect = decWrap.getBoundingClientRect(),
	 decPos = decRect.top - bodyRect.top;//position of decline section
    // alert('Element is ' + decPos + ' vertical pixels from <body>');


    // ---- variables for changeTimeline function below  --------
var vet = document.getElementById("farmWrapID"),
 	timeline = document.getElementsByClassName("timeline"),
 	timelinebox = document.getElementsByClassName("timeline-box"),
	// timeHeader = document.getElementById("topDate"),
	timelist = document.getElementsByClassName("time-list"),
	tiptext = document.getElementsByClassName("tiptext"),
	bubbletext = document.getElementsByClassName("tiptext"),
	chapter = document.getElementsByClassName("chapter"),
	date = document.getElementsByClassName("timeline-dates"),
	timeHeader = document.getElementsByClassName("timeline-header");




 		// ---  on scroll, change content------

    function changeTimeLine() {
    	// var win = winPos;
        var win = window.pageYOffset; // detect window position

	    	// !!make sure initial dates + bubble text here is same as original
        	// html DOC.

        if  (win < farmPos) {  // top of page
        	// this is set to 'hidden' so when you scroll back to top, 
        	// entire timeline hides. dfault CSS visibility is set to hidden.

	    	timeline[0].style.visibility = "hidden",
	    	timelinebox[0].style.visibility = "hidden",
	    	timeHeader[0].style.visibility = "hidden",
	    	timeHeader[1].style.visibility = "hidden";

	    	// topbottomdates[1].style.visibility = "hidden";


        }	else if	(win >= (farmPos - 3) && win < vetPos ) {  // farm section


	    	timeline[0].style.visibility = "visible";
	    	timelinebox[0].style.visibility = "visible";
	    	timeHeader[0].style.visibility = "visible",
	    	timeHeader[1].style.visibility = "visible";

	    	// timelist.style.color = "#000";

			timeHeader[0].style.color = "#000";
			timeHeader[1].style.color = "#000";
        	timeHeader[0].innerHTML = "1883";
        	timeHeader[1].innerHTML = "1913";


        	for (x = 0;x < date.length; x++){
        		date[x].style.color = "#000";
        	}

        	date[0].innerHTML = "1883 -";
			tiptext[0].innerHTML = "The Benny Farm";
			date[1].innerHTML = "1890 -";
			tiptext[1].innerHTML = "blah blah";
			date[2].innerHTML = "Horses!  -";
			tiptext[2].innerHTML = "Horses ate the grass";
         
        }	else if	((win >= vetPos) && (win < decPos))	{ // veterans section


	    	timeline[0].style.visibility = "visible";
	    	timelinebox[0].style.visibility = "visible";
	    	timeHeader[0].style.visibility = "visible",
	    	timeHeader[1].style.visibility = "visible";

			timeHeader[0].style.color = "#fff";
			timeHeader[1].style.color = "#fff";
        	timeHeader[0].innerHTML = "1914";
        	timeHeader[1].innerHTML = "1945";

        	for (x = 0;x < date.length; x++){
        		date[x].style.color = "#fff";
        	}

        	date[0].innerHTML = "1607 -";
			tiptext[0].innerHTML = "golfing in the afternoon";

			date[1].innerHTML = "1201 -";
			tiptext[1].innerHTML = "arf arf";

			date[2].innerHTML = "Cows!  -";
			tiptext[2].innerHTML = "Cows drank the water";

        }	else if (win >= decPos)  { // decline section
			timeline[0].style.visibility = "visible";
	    	timelinebox[0].style.visibility = "visible";
	    	timeHeader[0].style.visibility = "visible",
	    	timeHeader[1].style.visibility = "visible";

	    	
			timeHeader[0].style.color = "#fff";
			timeHeader[1].style.color = "#fff";
        	timeHeader[0].innerHTML = "1945";
        	timeHeader[1].innerHTML = "1989";


        	for (x = 0;x < date.length; x++){
        		date[x].style.color = "#fff";
        	}


			date[0].innerHTML = "1945  -";
			tiptext[0].innerHTML = "Typical country weather";
			date[1].innerHTML = "1933 -";
			tiptext[1].innerHTML = "meoww purr purrrrr";
			date[2].innerHTML = "CHickens!  -";
			tiptext[2].innerHTML = "The Pigs stood in the mud and contemplated their existence while the rain splashed the stinky slop up to their knees";

        }	
   

    };




	// ---------   bubble text appears on hover ----------------
	// ---------   bubble text appears on hover ----------------

	// var bubbletext = document.getElementsByClassName("tiptext"),
	// 	dates = document.getElementsByClassName("timeline-dates");



		
		// dates[2]addEventListener("mouseover", bubbleShow);
		// dates[2].addEventListener("mouseout", bubbleHide);.

		
		// function bubbleShow() {
		// bubbletext[2].style.visibility = "visible";
		// };

		// function bubbleHide() {

		// bubbletext[2].style.visibility = "hidden";
		// };  // << bubble text appears on hover, but only for
		// a single item triggering the event 

		//  vv same as above, but with multiple items of the same class,
			// trigger only the one that is triggering the event  	
var index;

for(var i = 0;i < date.length; i++){
	// Assign 'mouseover' as event listener to each 'dates' index item.
	// 'Mouseover' event also triggers a function.
    date[i].onmouseover = function(){  
    	// On each mouseover event, go through index of 'dates' again.
        for(var j=0;j<date.length;j++){
        	// For each index, see if it matches index of clicked item "this".
             if(date[j]==this) {
             	// For every match, pass through index number on to 
             	// look up index item of 'bubbletext'.  Then, change attribute
             	// value for 'bubbletext' item.
 				bubbletext[j].style.visibility = "visible";
 			// 	pointerRect = pointer.getBoundingClientRect(),
				// pointerPos = pointerRect.top;
 			// 	alert(pointerPos + 'is the pointer position');
                 // index = j; 
                 // alert(index);//console.log(j), etc
                 break;
             }
        }
    }

    //  Do the same but on mouseout event  
     date[i].onmouseout = function(){
        for(var j=0;j<date.length;j++){
             if(date[j]==this) {
 				bubbletext[j].style.visibility = "hidden";
                 // index = j; 
                 // alert(index);//console.log(j), etc
                 break;
             }
        }
    }
};

// vvvvv   example of animating something vvvvvv

// function movePointer(timestamp){
// 	// if (action == 'charge'){
// 	// if (status == 'ready'){
// 		// curcharge += 0.5;
// 		// currentPoint += 1;
// 		// if (curcharge > endPoint){
// 		if (currentPoint < endPoint){
// 			currentPoint += 1;
// 			pointer.style.top = currentPoint + px; 
// 			requestframeref = requestAnimationFrame(movePointer)

// 		} else if (currentPoint > endPoint) {
// 			pointer.style.top = currentPoint - px;
// 			requestframeref = requestAnimationFrame(movePointer)

// 		} else if (currentPoint == endPoint) {
// 			status = 'done';
// 			cancelAnimationFrame(requestframeref);
// 			currentPoint = endPoint;
// 		} else{}
// 	}
// 	// else {
// 	// 	curcharge -= 0.5
// 	// 	if (curcharge < 0){
// 	// 		action = 'charge'
// 	// 	}
// 	// }
// 	// batterystatus.style.width = curcharge + '%'  // attribute which is being affected for the
// 	// 											// for the animated element
// 	// requestframeref = requestAnimationFrame(movePointer)


// // event listener for date clicking!
// for(var i=0; i < date.length; i++){ //parse through all elements with class 'date'
//   date[i].onclick = function(){  // for each parse, assign onclick function
//         for(var j = 0;j < date.length; j++){   //when clicked, parse through 'date' class again
//              if(date[j]==this) {   //  if parsed element matches clicked element
//          		alert(pointerRect.top);
//          		status = 'ready';
//              	currentPoint = pointerRect.top;
//              	movePointer();
//   				break;
//              }
//          }
//      }
// }

// battery.addEventListener('mouseenter', function(){ // event listener assignment
// 	requestAnimationFrame(updatebattery)
// }, false)

// battery.addEventListener('mouseleave', function(){
// 	cancelAnimationFrame(requestframeref)
// }, false)
  //  <<< example taken from web


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


    

		
	
