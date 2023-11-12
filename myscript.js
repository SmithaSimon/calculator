var gfirstvalue = "0"
var goperator = ""

function test ()
{
   console.log ("Test worked!");
}

function display(num)
{
	var txtbox = document.getElementById("answerbox")
	var currentval = txtbox.value;
	if (currentval == "0") currentval = ""
	console.log(currentval);
	if (currentval == "" && (num == "0" || num=="00")) {
		console.log("pressing 0 or 00 without anything is of no use")
	} else if (currentval.includes(".") && num == '.') {
		console.log("pressing . when it is already there is of no use")
	} else {
		var newval = currentval + num;
		txtbox.value = newval;
	}
	
}

function minus()
{
	document.getElementById("answerbox").value = (- Number(document.getElementById("answerbox").value)).toString()
}

function percent()
{
	console.log("Came to %");
	console.log("Current operator " + goperator)

	if (goperator == "") {
		console.log("Just % of first number");
		document.getElementById("answerbox").value = (Number(document.getElementById("answerbox").value) / 100).toString();
	} else {
		console.log("First value " + gfirstvalue);
		document.getElementById("answerbox").value =  (Number(document.getElementById("answerbox").value) * Number(gfirstvalue) / 100).toString();
	}
	
}

function operation(operator)
{
	gfirstvalue = document.getElementById("answerbox").value;
	console.log("Saved First value " + gfirstvalue);
	goperator = operator;
	document.getElementById("answerbox").value = "0";
}

function compute()
{
	var val1 = gfirstvalue;
	var val2 = document.getElementById("answerbox").value;
	
	var answer = 0;
	console.log(val1);
	console.log(val2);
	console.log(goperator);
	
	switch(goperator) {
		case "+":
		    console.log("Came to add");
		    answer = Number(val1) + Number(val2);
			break;
			
		case '-':
		    console.log("Came to sub");
		    answer = Number(val1) - Number(val2);
			break;

		case 'x':
			console.log("Came to mul");
			answer = Number(val1) * Number(val2);
			break;

		case '/':
			console.log("Came to div");
			answer = Number(val1) / Number(val2);
			break;
	}
	
	document.getElementById("answerbox").value = answer.toString();
	goperator = ""
	gfirstvalue = "0"
}

function clearme()
{
	console.log("Came to clear");
	document.getElementById("answerbox").value="0";
	gfirstvalue = "0"
	goperator = ""
}
