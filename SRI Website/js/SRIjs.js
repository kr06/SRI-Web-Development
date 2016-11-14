var currQuestion = 0;
var sideBySide = true;
	
$(function() {
	//display default graph (1st category checked)	
	getQues();
	atLeastOneFilter();
});

function getQues(){
	$('#accessQuestion').html(obj.Data[currQuestion].Question);
	generateRadios();
	dataRetreive(currQuestion, 0);
	$("#option1").attr('checked', true)
}


/* $('#increase').mouseenter(function () {
	$(obj.Data[currQuestion].Question).fadeIn();
});
$('#increase').mouseleave(function () {
    $(obj.Data[currQuestion].Question).fadeOut();
}); */

//$('div.sharp').hover(function(){
  //  $('div.well').text("" + obj.Data[currQuestion].Question);//here shows the title of hovered dialog
//}, function(){
  //  $('div.well').text("");
//});

function myOverFunction(currQ){
	$('#demo').html(obj.Data[currQ].Question);
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

$("#sideBySideButton").click(function() {
	sideBySide = !sideBySide;
	checkCategoryButtons();
});

//using delegated function, so this works on dynamically generated radio buttons
$('#collapse').on('change', '#radioCategories input', function() {
	console.log("radio clicked");
	checkCategoryButtons();
});

function atLeastOneFilter() {
	var checkboxes = $("#choices > :checkbox");
	var countChecked = 0;
	for (i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
			countChecked++;
		}
	}
	if (countChecked > 0) {
		console.log('true');
		return true;
	}
	else {
		console.log('false');
		return false;
	}
}

$('#choices').click(function() {
	if (!atLeastOneFilter()) {
		event.preventDefault();
	}
});

function checkCategoryButtons() {
	if($('input[name=options]:checked', '#radioCategories').val() == "upstate") dataRetreive(currQuestion, 0);
	else if($('input[name=options]:checked', '#radioCategories').val() == "region")dataRetreive(currQuestion, 1);
	else if($('input[name=options]:checked', '#radioCategories').val() == "cluster")dataRetreive(currQuestion, 2);
	else if($('input[name=options]:checked', '#radioCategories').val() == "companysize")dataRetreive(currQuestion, 3);
	else dataRetreive(currQuestion, 4);
}

function dataRetreive(qNum, catNum){
		clearChoices();
		var labels = [];
		var datasets = {};
		
		for (i = 0; i < obj.Data[qNum].Categories[catNum].Filters.length; i++) {
			var info = {};
			//upstate 2015, 2014, 2013, 2012
			//filters -> labels
			labels.push(obj.Data[qNum].Categories[catNum].Filters[i].Filter);
			//for each set of answers within a filter...
			var curr = obj.Data[qNum].Categories[catNum].Filters[i].Answers;
			var data = [];
			for (j = 0; j < curr.length; j++) {	
				//omits NA values by skipping anything marked as -1
				if (curr[j].Value != -1) {
					data.push([curr[j].Answer, curr[j].Value]);
				}
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
		choiceContainer.append('<p style="font-size:14px;">Note: At least one checkbox must be selected at all times</p>');

		choiceContainer.find("input").click(plotAccordingToChoices);
		
		function plotAccordingToChoices() {
				if (sideBySide) {
					var orderVar = 1;
					var barWidthVar = 0.12;
				}
				else {
					var orderVar = null;   //1
					var barWidthVar = 0.6; //0.12
				}
				
				var data = [];

				choiceContainer.find("input:checked").each(function () {
					var key = $(this).attr("name");
					if (key && datasets[key]) {
						data.push(datasets[key]);
					}
				});

				$(".demo-container").resizable({
					maxWidth: 675,
					maxHeight: 500,
					minWidth: 675,
					minHeight: 500
				});

				if (data.length > 0) {
					$.plot("#placeholder", data, {
						series: {
							bars: {
								show: true,
								barWidth: barWidthVar,
								align: "center",
								order: orderVar  //order: 1 turns on side by side bars, order: null -> off
							}
						},
						xaxis: {
							mode: "categories",
							tickLength: 0//,
							//labelWidth: 60,
							//labelHeight: 90
						},
						grid: {
							clickable: true,
							hoverable: true,
							margin: 10
						},
						valueLabels: {
							show: true
						}
					});
					
					$("<div id='tooltip'></div>").css({
						position: "absolute",
						display: "none",
						border: "1px solid #fdd",
						padding: "2px",
						"background-color": "#fee",
						opacity: 0.80
					}).appendTo("body");
					
					$("#placeholder").bind("plothover", function (event, pos, item) {

						if ($("#enablePosition:checked").length > 0) {
							var str = "(" + pos.x.toFixed(2) + ", " + pos.y.toFixed(2) + ")";
							$("#hoverdata").text(str);
						}

						if ($("#option1:checked").length > 0 || $("#option2:checked").length > 0 || $("#option3:checked").length > 0 
							|| $("#option4:checked").length > 0 ||	$("#option5:checked").length > 0) {
							if (item) {
								var x = item.datapoint[0].toFixed(2),
									y = item.datapoint[1].toFixed(2);

								$("#tooltip").html(item.series.label + " has " + parseFloat(y) )
									.css({top: item.pageY+5, left: item.pageX+5})
									.fadeIn(200);
							} else {
								$("#tooltip").hide();
							}
						}
					});

					
				}
			}

		plotAccordingToChoices();
		
		// Add the Flot version string to the footer

		$("#footer").prepend("Flot " + $.plot.version + " &ndash; ");
	
	}