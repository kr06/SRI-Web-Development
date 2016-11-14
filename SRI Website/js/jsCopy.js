var currQuestion = 0;
	
$(function() {
	//display default graph (1st category checked)	
	getQues();
});

function getQues(){
	$('#accessQuestion').html(obj.Data[currQuestion].Question);
	generateRadios();
	dataRetreive(currQuestion, 0);
	$("#option1").attr('checked', true)
}

function generateRadios() {
	//in current dataset, the only category that is ever omitted is Industry
	//so, if the categories array is size < 5, it omits Industry
	if(obj.Data[currQuestion].Categories.length < 5) {
		$("#radioCategories").html(`<label class="btn btn-primary active" style="background-color:#033077">
		<input type="radio" name="options" id="option1" value="upstate" autocomplete="off" checked="true"> Upstate
	  </label>
	  <label class="btn btn-primary" style="background-color:#033077">
		<input type="radio" name="options" id="option2" value="region" autocomplete="off"> Region
	  </label>
	  <label class="btn btn-primary" style="background-color:#033077">
		<input type="radio" name="options" id="option3" value="cluster" autocomplete="off"> Cluster
	  </label>
	  <label class="btn btn-primary" style="background-color:#033077">
		<input type="radio" name="options" id="option4" value="companysize" autocomplete="off"> Company Size
	  </label>`);
	}
	else {
		$("#radioCategories").html(`<label class="btn btn-primary active" style="background-color:#033077">
		<input type="radio" name="options" id="option1" value="upstate" autocomplete="off" checked="true"> Upstate
	  </label>
	  <label class="btn btn-primary" style="background-color:#033077">
		<input type="radio" name="options" id="option2" value="region" autocomplete="off"> Region
	  </label>
	  <label class="btn btn-primary" style="background-color:#033077">
		<input type="radio" name="options" id="option3" value="cluster" autocomplete="off"> Cluster
	  </label>
	  <label class="btn btn-primary" style="background-color:#033077">
		<input type="radio" name="options" id="option4" value="companysize" autocomplete="off"> Company Size
	  </label>
	  <label class="btn btn-primary" style="background-color:#033077">
		<input type="radio" name="options" id="option5" value="industry" autocomplete="off"> Industry
	  </label>`);
	}
}

$('.sharp').click(function() {
	getQues();
});

$('#questionAccord a').click(function() {
	$(".panel-collapse collapse").show();
	var dataNum = $(this).attr('title');
	currQuestion = dataNum - 1;
	console.log(currQuestion);
});

function clearChoices() {
	$("#choices").html("");		
}

//using delegated function, so this works on dynamically generated radio buttons
$('#collapse').on('change', '#radioCategories input', function() {
	console.log("radio clicked");
	if($('input[name=options]:checked', '#radioCategories').val() == "upstate") dataRetreive(currQuestion, 0);
	else if($('input[name=options]:checked', '#radioCategories').val() == "region")dataRetreive(currQuestion, 1);
	else if($('input[name=options]:checked', '#radioCategories').val() == "cluster")dataRetreive(currQuestion, 2);
	else if($('input[name=options]:checked', '#radioCategories').val() == "companysize")dataRetreive(currQuestion, 3);
	else dataRetreive(currQuestion, 4);
});

function dataRetreive(qNum, catNum){
	clearChoices();
	var data = [];
	var answerOptions = [];
	var filters = [];
	for (k = 0; k < 1; k++) {  //k < obj.Data[qNum].Categories[catNum].Filters.length
		filters.push(obj.Data[qNum].Categories[catNum].Filters[k].Filter);
		for (i = 0; i < obj.Data[qNum].Categories[catNum].Filters[k].Answers.length; i++) {
			var info = {};
			//yes, no, maybe
			//answer options -> labels
			info['label'] = obj.Data[qNum].Categories[catNum].Filters[k].Answers[i].Answer;
			//for each set of values within an answer...
			if (obj.Data[qNum].Categories[catNum].Filters[k].Answers[i].Value != -1) {
					info['data'] = obj.Data[qNum].Categories[catNum].Filters[k].Answers[i].Value;
			}
			//at this point, info holds the answer option and corresponding value
			data.push(info);
		}
	}
	
	for(i=0; i < filters.length; i++) {
		$("#choices").append(`<label class="btn btn-primary active" style="background-color:#033077">
			<input type="radio" name="options" id="option1" value="upstate" autocomplete="off" checked="true"> Upstate
		  </label>`);
	}
	
	$.plot('#placeholder', data, {
		series: {
			pie: {
				innerRadius: 0.5,
				show: true
			}
		}
	});
}