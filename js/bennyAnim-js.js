// variables for timeline scrolling triangle animation

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){return setTimeout(f, 1000/60)}; //fall back

window.cancelAnimationFrame = window.cancelAnimationFrame
                              || window.mozCancelAnimationFrame
                              || function(requestID){clearTimeout(requestID)}; //fall back

// variables for pointer
var requestframeref; // variable for animating pointer
var startPoint;		//  start point of Pointer, gets set 
							// when date is clicked OR when timeline is reset
var endPoint;   // Y-position of destination element in timeline, gets set when
					// date is clicked

// variables for timeline, scrolling to images, scrolling to chapters
var scrollBox = document.getElementById('scrollBox'),
	scrollBoxRect = scrollBox.getBoundingClientRect(),
	scrollBoxPos = Math.round(scrollBoxRect.top),  // fixed position of box as constant, rounded to nearest whole number
	pointer = document.getElementById('timeline-pointer'),
	date = document.getElementsByClassName("timeline-dates"),  //date you click on
	thisImage = document.getElementsByClassName('thisImage'), // class for ALL the images in main content
	bodyRect = document.body.getBoundingClientRect(),
	bodyPos = bodyRect.top, //position of document body
	arrowUp = document.getElementById('goUp'),
	arrowDown = document.getElementById('goDown'),
	nav2chapter = document.getElementsByClassName("nav2chapter"),
	contentChapter = document.getElementsByClassName("contentWrap")



// function to animate pointer
function movePointer(timestamp){
		
		if (startPoint < endPoint){
			// alert("move pointer down");
			startPoint += 1;
			pointer.style.top = startPoint + 'px'; 
			requestframeref = requestAnimationFrame(movePointer);

		} else if (startPoint > endPoint) {
			// alert("move pointer up");
			startPoint -= 1;
			pointer.style.top = startPoint + 'px';
			requestframeref = requestAnimationFrame(movePointer);
		
		}	else if (startPoint == endPoint || startPoint == endPoint) {  //if (startPoint == endPoint)
			cancelAnimationFrame(requestframeref);

		}
	}



//  variables to scroll window when timeline date is clicked
var	windowY ; // variable to calculate position of window at time of click
var windowNow; // variable to calculate current position of window

var scrollHere;  // target value for window to scroll to

var y; // px increment by which window scrolls by.
		
var startLoop;  // used to check value of window to stop scrolling loop


// -----------  destination image glows when timeline gets clicked	
var num;

function turnOffGlow(num){
	thisImage[num].classList.remove("glow");
	// alert(num + " is the image now glowing off");
}

function turnOnGlow(num){
	// alert(num + " is the image now glowing")
	thisImage[num].classList.add("glow");
	setTimeout(function() {
		turnOffGlow(num);
		}, 1700);
}


//  ---- functions to scroll window on timeline click
function windowScrollDown() {

		if (windowNow < scrollHere) {
			y = 30;  //scroll down 3 pixels, 
			window.scrollBy(0, y);  // scroll window down by y pixels
			var Ypos = window.pageYOffset;
			windowNow = Math.round(Ypos); // check position of window
		} else if (  (windowNow == scrollHere) ||  (windowNow >= scrollHere) ){   // if current window position is same as target value, stop loopScroll
			clearInterval(startLoop);

			// alert("Stopping the loop");
		}	
}

function windowScrollUp() {

		if (windowNow > scrollHere) {
			y = -30;  //scroll up 3 pixels
			window.scrollBy(0, y); 
			var Ypos = window.pageYOffset;
			windowNow = Math.round(Ypos); // check position of window
		}	else if (  (windowNow == scrollHere) ||  (windowNow <= scrollHere) ){   // if current window position is same as target value, stop loopScroll
			clearInterval(startLoop);
			// alert("Stopping the loop");
		}	
}



// event listener to trigger timeline animation + scroll window to link location !

for(var i=0; i < date.length; i++){ //parse through all elements with class 'date'
  	date[i].onclick = function(event){  // assign click event listener to each class
  		event.preventDefault(); // this kills default action of clicking on a link
  		// alert("date click # is: " + [i]);

  		// on any click on 'date' element, execute this function:
  		for(var j = 0;j < date.length; j++){   // parse through 'date' class again
  				if(date[j]==this) {   //  if parsed element matches clicked element do this:

	 			// this retrieves the position of element that was clicked
	 			dateRect = date[j].getBoundingClientRect(),
				datePos = dateRect.top;
				endPoint = Math.round(datePos - scrollBoxPos + 14);
									 // clicked element set as destination point
									// 14px is added to offset the pointer a little bit
				pointerRect = pointer.getBoundingClientRect(),
				pointerPos = Math.round(pointerRect.top);
				startPoint = Math.round(pointerPos - scrollBoxPos + 14); //position of pointer
				// pointerPosition();

				movePointer();  // function to animate pointer

				 // turn on glow for selected image
				num = parseInt([j]) + parseInt(sectionNum);  // calculate timeline index, accounting for current section 
				turnOnGlow(num);

				// scroll to image
				thisImageRect = thisImage[num].getBoundingClientRect(),
				thisImagePos = Math.round(thisImageRect.top);  // this gets Y-coordinates as scrolling destination
				// imageY = thisImagePos;
				// alert("image index is " + num);
				// alert(thisImagePos + " is the image position relative to viewport top");
				windowY = Math.round(window.pageYOffset);
				scrollHere = windowY + (thisImagePos - 87); // target value  window must move to, with offset for sticky nav
				windowNow = windowY;
				
				// alert(windowY + " is position of window relative to document top");
				// alert("scrolling to absolute position of image: " + scrollHere);
					if (windowNow < scrollHere){
						startLoop = setInterval(windowScrollDown, 20);
					} else if (windowNow > scrollHere) {
						startLoop = setInterval(windowScrollUp, 20);
					}

				break;
				}
		}	
	}
}





// variables for timeline up/down arrow


// --------  functions to scroll window when clicking 
//    			timeline up/down arrow 

//  ---- functions to scroll window on timeline click
// function windowScrollDown() {

// 		if (windowNow < scrollHere) {
// 			y = 30;  //scroll down 3 pixels, 
// 			window.scrollBy(0, y);  // scroll window down by y pixels
// 			var Ypos = window.pageYOffset;
// 			windowNow = Math.round(Ypos); // check position of window
// 		} else if (  (windowNow == scrollHere) ||  (windowNow >= scrollHere) ){   // if current window position is same as target value, stop loopScroll
// 			clearInterval(startLoop);

// 			// alert("Stopping the loop");
// 		}	
// }
	
//  ------- variables for section scrolling from nav2
var chapy; // window y position
var	z; // pixel increment to scroll window by
var	chapterLoop; // global variable to start/stop loop
var	thisNum; // global variable to check if 'this' got clicked
var	chapterPos; // variable to set Y position of chapter
var scrollToChapter;

		//  functions to scroll on nav2 click buttons
function chapterScrollDown() {
	// if (chapy < scrollToChapter) {
		z = 45;  //scroll down 3 pixels
		window.scrollBy(0, z); 
		var winy = window.pageYOffset,
		chapy = Math.round(winy);
		// alert("window is no at: " + chapy);
	  
	    if  ((chapy == scrollToChapter) ||  (chapy >= scrollToChapter) ){   // if current window position is same as target value, stop loopScroll
		// if (chapy >= scrollToChapter) {
		clearInterval(chapterLoop);
	}
		
		
}

function chapterScrollUp() {
	// if (chappY > chapterPos) {
		y = -45;  //scroll up 3 pixels
		window.scrollBy(0, y); 
		var winy = window.pageYOffset,
		chapY = Math.round(winy);
	 if ( (chapY <= scrollToChapter) || (chapy == scrollToChapter)){   // if current window position is same as target value, stop loopScroll
		clearInterval(chapterLoop);
	}	
		// alert("Stopping the up loop");
		
}


// ------  event listener for nav2 section buttons, call scrolling functions
for (n = 0; n < nav2chapter.length; n++) {
	nav2chapter[n].onclick = function(event) {
		event.preventDefault();
		for (v = 0; v < nav2chapter.length; v++){
			if(nav2chapter[v] == this) {
				// alert([v] + " is the chapter #");
				var chapter = contentChapter[v].getBoundingClientRect(),
					chapterPos = Math.round(chapter.top),
					chapy = Math.round(window.pageYOffset);
					scrollToChapter = (chapterPos - 45) + chapy;
				

				// chapterLoop = setInterval(scrollDown, 10);
				if (chapy < scrollToChapter) {
					chapterLoop = setInterval(chapterScrollDown, 10);
					// alert("going down");
					// alert("going to: " + chapterPos);
				} else if (chapy > scrollToChapter) {
					y = -30;
					chapterLoop = setInterval(chapterScrollUp, 10);
					// alert("going up");
				}
				break;
			}
		}
	
	}
}

