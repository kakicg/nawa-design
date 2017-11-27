function html5_load(){
	if(navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPod") != -1||navigator.userAgent.indexOf("iPad") != -1){
		window.open("../HTML5/sd.html");
	}else if(navigator.userAgent.indexOf("Android") != -1){ 
		window.open("../HTML5/sd.html");
	}else{
		window.open("../HTML5/pc.html");
	}   
}