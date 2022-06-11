//call window object speech recognition
window.SpeechRecoginition = window.SpeechRecoginition ||window.webkitSpeechRecognition 

var recognition = new SpeechRecoginition // 2.creating new object

var p = document.createElement("p");//5 to create element 
						//whenever we speak

var words = document.getElementById('words'); //6 connectiong with html
words.appendChild(p);

//3 adding listner for the recognition var
recognition.addEventListener("result" , e =>{
	console.log(e.results);
	var transcript = [...e.results]
	.map(result=> result[0])
	.map(result => result.transcript).join("");
		

	if(e.results[0].isFinal){
		p = document.createElement('p');
		words.appendChild(p);
		p.innerHTML = transcript;

	}
})
 
recognition.addEventListener('end',recognition.start());
// whenever you end the recognition it should start over again
	// which will asct as a call back function


recognition.start();// starting the recognition