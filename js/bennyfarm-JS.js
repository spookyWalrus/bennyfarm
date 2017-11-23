

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

// -------  reset pointer only once ----
// -------  reset pointer only once ----

var section1, section2, section3 = true;  //default state for all sections

var resetPointer = function() {
 	 var win = window.pageYOffset;


	if  ((win >= farmPos && win < vetPos) && (section1 == true)) {
		endPoint = 0;
		movePointer();
		section1 = false;
		section2 = true;
		section3 = true;
	} else if ((win >= vetPos && win < decPos) && (section2 == true)) {
		endPoint = 0;
		movePointer();
		section1 = true;
		section2 = false;
		section3 = true;
	} else if ((win > decPos) && (section3 == true)) {
		endPoint = 0;
		movePointer();
		section1 = true;
		section2 = true;
		section3 = false;
	}
}





// -----------  timeline: dynamically changing content --------
// -----------  timeline: dynamically changing content --------
// -----------  timeline: dynamically changing content --------


		// ---  find position of each chapter top ----------
var farmWrap = document.getElementById("farmWrapID"),
	bodyRect = document.body.getBoundingClientRect(),
	farmRect = farmWrap.getBoundingClientRect(),
    farmPos   = farmRect.top - bodyRect.top - 51; //position of farm section with offset for nav2
    // alert('Element is ' + farmPos + ' vertical pixels from <body>');
var vetWrap = document.getElementById("vetLifeWrapID"),
	vetRect = vetWrap.getBoundingClientRect(),
	vetPos = vetRect.top - bodyRect.top - 51;//position of vet section
    // alert('Element is ' + vetPos + ' vertical pixels from <body>');
	 

var decWrap = document.getElementById("declineWrapID"),
	decRect = decWrap.getBoundingClientRect(),
	 decPos = decRect.top - bodyRect.top - 51;//position of decline section
    // alert('Element is ' + decPos + ' vertical pixels from <body>');


    // ---- variables for changeTimeline function below  --------
var timeline = document.getElementsByClassName("timeline"),
 	timelinebox = document.getElementsByClassName("timeline-box"),
	
	tiptext = document.getElementsByClassName("tiptext"),
	// tiptext2 = document.getElementsByClassName("tiptext2"),

	// bubbletext = document.getElementsByClassName("tiptext"),
	pointer = document.getElementById('timeline-pointer'),
	chapter = document.getElementsByClassName("chapter"),
	date = document.getElementsByClassName("timeline-dates"),
	date2 = document.getElementsByClassName("timeline-dates2"),
	timeHeader = document.getElementsByClassName("timeline-header");

var	sectionNum; // variable to offset image scrolling function 
				// The offset always corresponds to the # of imagse that are present in the HTML Doc
	// e.g. farm section = 3 images, offset is 0
	//  vet section = 4 images, offset is 3
	// decline section = 5 images, offset is 7

// variables to set timeline pointer up/down arrows
var pointerUp = document.getElementById("timeline-goUp"),
	 pointerDown = document.getElementById("timeline-goDown"),
	section = document.getElementsByClassName("contentWrap");


 		// ---  on scroll, change content------

    function changeTimeLine() {
    	// var win = winPos;
        var win = window.pageYOffset; // detect window position
        var imageNum;  //set variable so each anchor has corresponding image href reference

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
	    	section1 = true;
			section2 = true;
			section3 = true;

			pointerUp.style.visibility = "hidden",
			pointerDown.style.visibility = "hidden";


        }	else if	(win >= (farmPos) && win < vetPos ) {  // farm section

        	sectionNum = 0;
        	// section1 = true;

        	// this matches each timeline date link with corresponding image id
        	// need it so timeline links actually scrolls to where you want to go.
        	// * REMEMBER to make sure your images set in the HTML.DOC has 
        	// startic image id in sequential order
        	// ** need this for-Loop for each section in your content area below 
        	for (n = 0; n < date.length; n++){
        	imageNum = parseInt([n]) + parseInt(sectionNum);
        	date[n].setAttribute("href", "#image" + imageNum);
        	}

			pointerUp.style.visibility="visible",
			pointerDown.style.visibility = "visible";
			pointerUp.setAttribute("href", "#")
			pointerDown.setAttribute("href", "#vetLifeWrapID")
        	// for (n = 0; n < section.length; n++){
        	// section[n].style.visibility = "visible";
        	// }


	    	timeline[0].style.visibility = "visible";
	    	timelinebox[0].style.visibility = "visible";
	    	timeHeader[0].style.visibility = "visible",
	    	timeHeader[1].style.visibility = "visible";

	    	// timelist.style.color = "#000";

	    	// makeDateFarm();

			timeHeader[0].style.color = "#000";
			timeHeader[1].style.color = "#000";
        	timeHeader[0].innerHTML = "1883";
        	timeHeader[1].innerHTML = "1913";

			

        	date[0].innerHTML = "1883 -";
			tiptext[0].innerHTML = "The Benny Farm";
			date[1].innerHTML = "1890 -";
			tiptext[1].innerHTML = "blah blah";
			date[2].innerHTML = "Horses!  -";
			// date[2].setAttribute("href", "#declineWrapID");
			tiptext[2].innerHTML = "Horses ate the grass";

			for (x = 0;x < date.length; x++){
        		date[x].style.color = "#000";
        	}

        	resetPointer();
         
        }	else if	((win >= vetPos) && (win < decPos))	{ // veterans section

        	sectionNum = 3;
        	// section2 = true;

        	// this matches each timeline date link with corresponding image id
        	for (n = 0; n < date.length; n++){
        	imageNum = parseInt([n]) + parseInt(sectionNum);
        	date[n].setAttribute("href", "#image" + imageNum);
        	}

			pointerUp.setAttribute("href", "#farmWrapID")
			pointerDown.setAttribute("href", "#declineWrapID")

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

        	resetPointer();


        }	else if (win >= decPos)  { // decline section

        	// section3 = true;
        	sectionNum = 6;
        	for (n = 0; n < date.length; n++){
        	imageNum = parseInt([n]) + parseInt(sectionNum);
        	date[n].setAttribute("href", "#image" + imageNum);
        	}

			pointerUp.setAttribute("href", "#vetLifeWrapID")
			pointerDown.setAttribute("href", "#declineWrapID")

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

			resetPointer();

        }	
   

    };

// ---------- vvvvvv attempt at dynamically changing cntent 
// ---------- vvvvvv attempt at dynamically changing cntent 
// ---------- vvvvvv attempt at dynamically changing cntent 




// var timeParent = document.getElementById("time-listId");


// function makeDateFarm() {



// 	var list = document.createElement("li");  // create list element
// 	var anchor = document.createElement("a"); // create anchor element
// 	var nuDate = document.createTextNode("2018  -"); //create date 

// 	anchor.appendChild(nuDate); //append nuDate as text for anchor

// 	var nuTipTextDiv = document.createElement("div");
// 	var nuTipText = document.createTextNode("twenty eighteen");

// 	nuTipTextDiv.appendChild(nuTipText); //append TipText as text for TipTextDiv

// 	list.appendChild(anchor); // add anchor inside list
// 	list.appendChild(nuTipTextDiv); // add tiptext


// 	anchor.className = "timeline-dates";
// 	nuTipTextDiv.className = "tiptext";

// 	timeParent.appendChild(list);


// }

// function makeDateVet() {

// 	timeParent.removeChild(list);

// 	var list = document.createElement("li");  // create list element
// 	var anchor = document.createElement("a"); // create anchor element
// 	var nuDate = document.createTextNode("2018  -"); //create date 
// 	anchor.classList.add("timeline-dates");

// 	anchor.appendChild(nuDate); //append nuDate as text for anchor

// 	var nuTipTextDiv = document.createElement("div");
// 	var nuTipText = document.createTextNode("twenty eighteen");


// 	nuTipTextDiv.appendChild(nuTipText); //append TipText as text for TipTextDiv

// 	list.appendChild(anchor); // add anchor inside list
// 	list.appendChild(nuTipTextDiv); // add tiptext

// 	timeParent.appendChild(list);

// 	anchor.classList.add("timeline-dates");
// 	nuTipTextDiv.classList.add("tiptext");

// }

// document.body.onload = addElement;

// function addElement () { 
//   // create a new div element 
//   // and give it some content 
//   var newDiv = document.createElement("div"); 
//   var newContent = document.createTextNode("Hi there and greetings!"); 
//   newDiv.appendChild(newContent); //add the text node to the newly created div. 

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("div1"); 
//   document.body.insertBefore(newDiv, currentDiv); 
// }






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
 				tiptext[j].style.visibility = "visible";
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
 				tiptext[j].style.visibility = "hidden";
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


    

		
	
