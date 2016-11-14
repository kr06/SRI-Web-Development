var currQuestion = 0;
	
function clearChoices() {
	$("#choices").html("");		
}

function clearAccordions() {
	$("#questionAccord > div.panel-default > div.collapse > div.panel-body").html("");
}

function plotInAccordion(num) {
	clearAccordions();
	$("#collapse"+num).html(`<div class="panel-body"><form id="radioCategories" class="btn-group">
		  <label class="btn btn-primary active" style="background-color:#033077">
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
		  </label>
	</form>
	<div class="demo-container">
		<div id="placeholder" class="demo-placeholder" style="float:left; width:675px; height:450px"></div>
		<p id="choices" style="float:right; width:135px;"></p>
	</div></div>`);
	currQuestion = num - 1;
	console.log(currQuestion);
	
	//display default graph (1st category checked)	
	dataRetreive(currQuestion, 0);


	//using delegated function, so this works on dynamically generated radio buttons
	$('#collapse' + num).on('change', '#radioCategories input', function() {
		console.log("radio clicked");
		if($('input[name=options]:checked', '#radioCategories').val() == "upstate") dataRetreive(currQuestion, 0);
		else if($('input[name=options]:checked', '#radioCategories').val() == "region")dataRetreive(currQuestion, 1);
		else if($('input[name=options]:checked', '#radioCategories').val() == "cluster")dataRetreive(currQuestion, 2);
		else if($('input[name=options]:checked', '#radioCategories').val() == "companysize")dataRetreive(currQuestion, 3);
		else dataRetreive(currQuestion, 4);
	});
}

/*
HTML for a plot within an accordion
<div class="panel-body">
	<form id="radioCategories" class="btn-group">
		  <label class="btn btn-primary active" style="background-color:#033077">
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
		  </label>
	</form>
	<div class="demo-container">
		<div id="placeholder" class="demo-placeholder" style="float:left; width:675px; height:450px"></div>
		<p id="choices" style="float:right; width:135px;"></p>
	</div>
</div>
*/

function dataRetreive(qNum, catNum){
	
	clearChoices();
	var labels = [];
	var datasets = {};
	
	for (i = 0; i < obj.Data[qNum].Categories[catNum].Filters.length; i++) {
		var info = {};
		//filters -> labels
		labels.push(obj.Data[qNum].Categories[catNum].Filters[i].Filter);
		//for each set of answers within a filter...
		var curr = obj.Data[qNum].Categories[catNum].Filters[i].Answers;
		var data = [];
		for (j = 0; j < curr.length; j++) {				
			data.push([curr[j].Answer, curr[j].Value]);
		}
		info['label'] = labels[i];
		info['data'] = data;
		
		datasets[labels[i]] = info;
	}
	
	var i = 0;
	$.each(datasets, function(key, val) {
		val.color = i;
		++i;
	});

	// insert checkboxes 
	var choiceContainer = $("#choices");
	$.each(datasets, function(key, val) {
		choiceContainer.append("<br/><input type='checkbox' name='" + key +
			"' checked='checked' id='id" + key + "'></input>" +
			"<label for='id" + key + "'>"
			+ val.label + "</label>");
	});

	choiceContainer.find("input").click(plotAccordingToChoices);
	
	function plotAccordingToChoices() {

		var data = [];

		choiceContainer.find("input:checked").each(function () {
			var key = $(this).attr("name");
			if (key && datasets[key]) {
				data.push(datasets[key]);
			}
		});

		if (data.length > 0) {
			$.plot("#placeholder", data, {
				series: {
					bars: {
						show: true,
						barWidth: 0.6,
						align: "center"
					}
				},
				xaxis: {
					mode: "categories",
					tickLength: 0
				},
				grid: {
					clickable: true,
					hoverable: true
				}
			});
		}
	}

	plotAccordingToChoices();

	// Add the Flot version string to the footer

	$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");

}