function playAudio(){
	document.getElementById('spinMeRound').play();
}


function tellEm(){
	var result = confirm("Click the image");
	
	if (result){
		playAudio();
	}else{
		alert("fine, fuck you then");
	}
}

function loadDoc(){
    var xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            document.getElementById("bgs").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "BGContent.html", true);
    xhttp.send();
}
