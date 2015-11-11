$('button').click(function(){
	var commandText = $(this).html();

	if(commandText === "C"){
		$("#wynik").text("0");
		return;
	}

	var currentText = $('#wynik').text();

	if(commandText === "=") {
		try {
			var result = eval(currentText);
		} catch(err) {
			result = err.message;
		}

		$("#wynik").text(result);
		return;
	}

	if(commandText === "CE"){
		if(!currentText || currentText.length === 1) {
			currentText = "0";
		} else {
			currentText = currentText.substring(0, currentText.length - 1);
		}
	} else {
		if(currentText === "0") {
			currentText = commandText;
		} else {
			currentText += commandText;
		}	
	}

	$('#wynik').text(currentText);
});