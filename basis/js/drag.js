/**
 Implement drag function by javaScript 
*/

/* Native javaScript */
function drag(el){
	var self=this;
	el.style.left=el.offsetLeft+"px";
	el.style.top=el.offsetTop+"px";
	var temp=null,
		mouseX,
		mouseY,
		clientX,
		clientY,
		dragging=false;
	
	//Initialize parameters when the mouse is down
	el.onmousedown=function(event){
		el.style.position="absolute";
		event=event||window.event;
		dragging=true;
		mouseX=event.clientX; 
		mouseY=event.clientY;
		clientX=parseInt(el.style.left);
		clientY=parseInt(el.style.top);
	}
	
	//Reset the coordinate of element when the mouse is moving
	document.onmousemove=function(event){
		event=event||window.event;
		if(dragging){
			el.style.left=parseInt(event.clientX-mouseX+clientX)+"px";
			el.style.top=parseInt(event.clientY-mouseY+clientY)+"px";
		}
		
	}
	document.onmouseup=function(){
		dragging=false;
	}
}
