$('.btn').click(function(){
	$("#blad").text('');
});

$('.cyfra').click(function(){
	var cyfra = $(this).text();
	var aktualnyTekst = $('#wynik').text();

	if(aktualnyTekst === "0") {
		aktualnyTekst = cyfra;
	} else {
		aktualnyTekst += cyfra;
	}

	$('#wynik').text(aktualnyTekst);
});

$('.polecenie').click(function(){
	var tekstPolecenia = $(this).text();
	var aktualnyTekst = $('#wynik').text();

	if(aktualnyTekst === "0" && tekstPolecenia === "-") {
		aktualnyTekst = "-";
	} else {
		var wyrazenie = /[\d,]+$/m;
		var jestLiczba = wyrazenie.test(aktualnyTekst);

		if(!jestLiczba) {
			aktualnyTekst = aktualnyTekst.slice(0, -1);
		}
		aktualnyTekst += tekstPolecenia;
	}

	$('#wynik').text(aktualnyTekst);
});

$('#przyciskCzysc').click(function(){
	$("#wynik").text("0");
});

$('#przyciskCofnij').click(function(){
	var aktualnyTekst = $('#wynik').text();

	if(!aktualnyTekst || aktualnyTekst.length === 1) {
		aktualnyTekst = "0";
	} else {
		aktualnyTekst = aktualnyTekst.slice(0, -1);
	}

	$('#wynik').text(aktualnyTekst);
});

$('#przecinek').click(function(){
		var aktualnyTekst = $('#wynik').text();
		var wyrazenie = /,\d*$/m;
		var jestPrzecinek = wyrazenie.test(aktualnyTekst);

		if(!jestPrzecinek){
			$('#wynik').text(aktualnyTekst + ",");
		}
});

$('#przyciskRownaSie').click(function(){
	var aktualnyTekst = $('#wynik').text();

	aktualnyTekst = zamienWszystkie(aktualnyTekst, '%', '/100');
	aktualnyTekst = zamienWszystkie(aktualnyTekst, ',', '.');
	aktualnyTekst = zamienPotegowanie(aktualnyTekst);

	try {
		var wynik = eval(aktualnyTekst);
		wynik = wynik.toString().replace('.', ',');
		$("#wynik").text(wynik);
	} catch(err) {
		$("#blad").text(err.message);
	}
});

function zamienPotegowanie(tekst){
	var wyrazenie = /(-?[\d\.]+)\^(-?[\d\.]+)/g;
	return tekst.replace(wyrazenie, "Math.pow($1,$2)");
}

function zamienWszystkie(tekst, co, naCo){
	return tekst.split(co).join(naCo);
}
