	var pages=0;
	
	function changeNow(){
		document.getElementById("box").style.backgroundImage="url('slend.jpeg')";
	}
	function collectPage(){
		pages++;
		updatePages();
	}
	function updatePages(){
	document.getElementById("collectedPages").innerHTML="You have "+pages+" pages!!!";
	if(pages>=8){
		document.getElementById("box").style.backgroundImage="url('slender.jpg')";
	}
	else if(pages<8){
		document.getElementById("box").style.backgroundImage="url('slend.jpeg')";
	}
	}
updatePages();