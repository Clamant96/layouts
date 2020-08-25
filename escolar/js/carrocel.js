onload  = start;

function start(){	
var i = 1;
function Move(){ 	
	i = (i%4)+1; // 4 is the Number of image in slider
	document.getElementById('i'+i).checked = true;
}
setInterval(Move,3000); //change img in 3 sec
}

//Its completed. ( may be )
//Watch me codeing this at: https://youtu.be/z74ExMz-cWU
// A Image Slider by Mayur Birle

//See Updated Version at  https://codepen.io/mayurbirle/details/NvXKPq/