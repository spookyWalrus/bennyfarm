
// ----- block to get pointer triangle to animate -------
// ----- block to get pointer triangle to animate -------

window.requestAnimationFrame = window.requestAnimationFrame
                               || window.mozRequestAnimationFrame
                               || window.webkitRequestAnimationFrame
                               || window.msRequestAnimationFrame
                               || function(f){return setTimeout(f, 1000/60)}; //fall back

window.cancelAnimationFrame = window.cancelAnimationFrame
                              || window.mozCancelAnimationFrame
                              || function(requestID){clearTimeout(requestID)}; //fall back

var scrollBox = document.getElementById('scrollBox'),
	scrollBoxRect = scrollBox.getBoundingClientRect(),
	scrollBoxPos = Math.round(scrollBoxRect.top),  // fixed position of box as constant, rounded to nearest whole number
	pointer = document.getElementById('timeline-pointer'),
	date = document.getElementsByClassName("timeline-dates")  //date you click on
	thisImage = document.getElementsByClassName('thisImage'),
	bodyRect = document.body.getBoundingClientRect();



var requestframeref;
var startPoint;		//  start point of Pointer, gets set 
							// when date is clicked OR when timeline is reset
var endPoint;   // Y-position of destination element, gets set when
					// date is clicked

function movePointer(timestamp){
		
		if (startPoint < endPoint){
			// alert("move pointer down");
			startPoint += 1;
			pointer.style.top = startPoint + 'px'; 
			requestframeref = requestAnimationFrame(movePointer)
			

		} else if (startPoint > endPoint) {
			// alert("move pointer up");
			startPoint -= 1;
			pointer.style.top = startPoint + 'px';
			requestframeref = requestAnimationFrame(movePointer)
		
		}	else if (startPoint == endPoint || startPoint == endPoint) {  //if (startPoint == endPoint)
			// alert('stop animation');
			cancelAnimationFrame(requestframeref);

		}
	}



// ----  scrolling function when timeline link gets clicked, window scrolls to appropriate place 

var scrollHere;

function goScroll(scrollHere) {
	window.scrollBy(0, scrollHere);  //parameter should be Y coordinate
	// alert("scrolling to " + scrollHere);
			
	
}


	

// event listener to trigger timeline animation + scroll window to link location !

for(var i=0; i < date.length; i++){ //parse through all elements with class 'date'
  	date[i].onclick = function(){  // assign click event listener to each class

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

				movePointer();

				// use same matching index so window scrolls to matching image
				// alert([j] + ' is the number')
				thisImageRect = thisImage[j].getBoundingClientRect(),
				thisImagePos = Math.round(thisImageRect.top - 100),  // this gets Y-coordinates as scrolling destination
				// alert(thisImagePos + ' is the position of the farm pic');
				scrollHere = thisImagePos;
		     	
		     	goScroll(scrollHere);

		     	break;
		    }
		}
		
		
    }
 }



     
