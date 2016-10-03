//use back tick ` for multi lined strings
var text = `{"Data" : [{ "Question" : "Q1. Which of the following industry categories best describes the type of business your company is engaged in?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "16"},
			{"Answer" : "Food and Beverage", "Value" : "5"},
			{"Answer" : "Financial", "Value" : "5"},
			{"Answer" : "Manufacturing", "Value" : "24"},
			{"Answer" : "Retail", "Value" : "12"},
			{"Answer" : "Service", "Value" : "25"},
			{"Answer" : "Wholesale and Distribution", "Value" : "11"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "17"},
			{"Answer" : "Food and Beverage", "Value" : "3"},
			{"Answer" : "Financial", "Value" : "8"},
			{"Answer" : "Manufacturing", "Value" : "21"},
			{"Answer" : "Retail", "Value" : "12"},
			{"Answer" : "Service", "Value" : "23"},
			{"Answer" : "Wholesale and Distribution", "Value" : "15"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "17"},
			{"Answer" : "Food and Beverage", "Value" : "3"},
			{"Answer" : "Financial", "Value" : "6"},
			{"Answer" : "Manufacturing", "Value" : "19"},
			{"Answer" : "Retail", "Value" : "12"},
			{"Answer" : "Service", "Value" : "27"},
			{"Answer" : "Wholesale and Distribution", "Value" : "15"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "15"},
			{"Answer" : "Food and Beverage", "Value" : "5"},
			{"Answer" : "Financial", "Value" : "8"},
			{"Answer" : "Manufacturing", "Value" : "19"},
			{"Answer" : "Retail", "Value" : "14"},
			{"Answer" : "Service", "Value" : "26"},
			{"Answer" : "Wholesale and Distribution", "Value" : "14"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "24"},
			{"Answer" : "Food and Beverage", "Value" : "1"},
			{"Answer" : "Financial", "Value" : "8"},
			{"Answer" : "Manufacturing", "Value" : "15"},
			{"Answer" : "Retail", "Value" : "11"},
			{"Answer" : "Service", "Value" : "30"},
			{"Answer" : "Wholesale and Distribution", "Value" : "11"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "11"},
			{"Answer" : "Food and Beverage", "Value" : "9"},
			{"Answer" : "Financial", "Value" : "3"},
			{"Answer" : "Manufacturing", "Value" : "30"},
			{"Answer" : "Retail", "Value" : "9"},
			{"Answer" : "Service", "Value" : "24"},
			{"Answer" : "Wholesale and Distribution", "Value" : "10"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "16"},
			{"Answer" : "Food and Beverage", "Value" : "5"},
			{"Answer" : "Financial", "Value" : "3"},
			{"Answer" : "Manufacturing", "Value" : "26"},
			{"Answer" : "Retail", "Value" : "15"},
			{"Answer" : "Service", "Value" : "21"},
			{"Answer" : "Wholesale and Distribution", "Value" : "12"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "14"},
			{"Answer" : "Food and Beverage", "Value" : "4"},
			{"Answer" : "Financial", "Value" : "5"},
			{"Answer" : "Manufacturing", "Value" : "22"},
			{"Answer" : "Retail", "Value" : "14"},
			{"Answer" : "Service", "Value" : "29"},
			{"Answer" : "Wholesale and Distribution", "Value" : "13"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "28"},
			{"Answer" : "Food and Beverage", "Value" : "3"},
			{"Answer" : "Financial", "Value" : "5"},
			{"Answer" : "Manufacturing", "Value" : "22"},
			{"Answer" : "Retail", "Value" : "11"},
			{"Answer" : "Service", "Value" : "20"},
			{"Answer" : "Wholesale and Distribution", "Value" : "9"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "12"},
			{"Answer" : "Food and Beverage", "Value" : "4"},
			{"Answer" : "Financial", "Value" : "5"},
			{"Answer" : "Manufacturing", "Value" : "26"},
			{"Answer" : "Retail", "Value" : "11"},
			{"Answer" : "Service", "Value" : "29"},
			{"Answer" : "Wholesale and Distribution", "Value" : "11"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "11"},
			{"Answer" : "Food and Beverage", "Value" : "8"},
			{"Answer" : "Financial", "Value" : "3"},
			{"Answer" : "Manufacturing", "Value" : "21"},
			{"Answer" : "Retail", "Value" : "16"},
			{"Answer" : "Service", "Value" : "25"},
			{"Answer" : "Wholesale and Distribution", "Value" : "15"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "17"},
			{"Answer" : "Food and Beverage", "Value" : "4"},
			{"Answer" : "Financial", "Value" : "4"},
			{"Answer" : "Manufacturing", "Value" : "25"},
			{"Answer" : "Retail", "Value" : "14"},
			{"Answer" : "Service", "Value" : "20"},
			{"Answer" : "Wholesale and Distribution", "Value" : "15"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "23"},
			{"Answer" : "Food and Beverage", "Value" : "6"},
			{"Answer" : "Financial", "Value" : "2"},
			{"Answer" : "Manufacturing", "Value" : "28"},
			{"Answer" : "Retail", "Value" : "11"},
			{"Answer" : "Service", "Value" : "22"},
			{"Answer" : "Wholesale and Distribution", "Value" : "8"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Engineering and Construction", "Value" : "11"},
			{"Answer" : "Food and Beverage", "Value" : "6"},
			{"Answer" : "Financial", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "17"},
			{"Answer" : "Retail", "Value" : "11"},
			{"Answer" : "Service", "Value" : "36"},
			{"Answer" : "Wholesale and Distribution", "Value" : "7"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q2. As you think about the current business or economic conditions in New York State as compared to six months ago, would you say they are considerably better, a little better, about the same, a little worse, or considerably worse?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "24"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "A little worse", "Value" : "22"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "4"},
			{"Answer" : "A little better", "Value" : "32"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "A little worse", "Value" : "16"},
			{"Answer" : "Considerably worse", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "24"},
			{"Answer" : "About the same", "Value" : "46"},
			{"Answer" : "A little worse", "Value" : "22"},
			{"Answer" : "Considerably worse", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "21"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "A little worse", "Value" : "28"},
			{"Answer" : "Considerably worse", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "51"},
			{"Answer" : "A little worse", "Value" : "17"},
			{"Answer" : "Considerably worse", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "4"},
			{"Answer" : "A little better", "Value" : "22"},
			{"Answer" : "About the same", "Value" : "46"},
			{"Answer" : "A little worse", "Value" : "20"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "24"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "26"},
			{"Answer" : "Considerably worse", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "7"},
			{"Answer" : "A little better", "Value" : "65"},
			{"Answer" : "About the same", "Value" : "28"},
			{"Answer" : "A little worse", "Value" : "0"},
			{"Answer" : "Considerably worse", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "0"},
			{"Answer" : "A little better", "Value" : "12"},
			{"Answer" : "About the same", "Value" : "70"},
			{"Answer" : "A little worse", "Value" : "17"},
			{"Answer" : "Considerably worse", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "0"},
			{"Answer" : "A little better", "Value" : "0"},
			{"Answer" : "About the same", "Value" : "12"},
			{"Answer" : "A little worse", "Value" : "59"},
			{"Answer" : "Considerably worse", "Value" : "29"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "23"},
			{"Answer" : "About the same", "Value" : "45"},
			{"Answer" : "A little worse", "Value" : "22"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "49"},
			{"Answer" : "A little worse", "Value" : "17"},
			{"Answer" : "Considerably worse", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "25"},
			{"Answer" : "About the same", "Value" : "39"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "39"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "15"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "26"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "18"},
			{"Answer" : "About the same", "Value" : "42"},
			{"Answer" : "A little worse", "Value" : "32"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "22"},
			{"Answer" : "About the same", "Value" : "48"},
			{"Answer" : "A little worse", "Value" : "21"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "17"},
			{"Answer" : "About the same", "Value" : "42"},
			{"Answer" : "A little worse", "Value" : "20"},
			{"Answer" : "Considerably worse", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q3. Looking forward from today through next year, that is, the entire 2016 year, how would you describe your expectations for the economy in New York State?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "40"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "37"},
			{"Answer" : "About the same", "Value" : "39"},
			{"Answer" : "A little worse", "Value" : "15"},
			{"Answer" : "Considerably worse", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "28"},
			{"Answer" : "About the same", "Value" : "40"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "31"},
			{"Answer" : "About the same", "Value" : "32"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "33"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "A little worse", "Value" : "20"},
			{"Answer" : "Considerably worse", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "4"},
			{"Answer" : "A little better", "Value" : "26"},
			{"Answer" : "About the same", "Value" : "39"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "25"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "25"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "8"},
			{"Answer" : "A little better", "Value" : "70"},
			{"Answer" : "About the same", "Value" : "22"},
			{"Answer" : "A little worse", "Value" : "0"},
			{"Answer" : "Considerably worse", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "0"},
			{"Answer" : "A little better", "Value" : "14"},
			{"Answer" : "About the same", "Value" : "66"},
			{"Answer" : "A little worse", "Value" : "19"},
			{"Answer" : "Considerably worse", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "0"},
			{"Answer" : "A little better", "Value" : "2"},
			{"Answer" : "About the same", "Value" : "12"},
			{"Answer" : "A little worse", "Value" : "62"},
			{"Answer" : "Considerably worse", "Value" : "25"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "41"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "30"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "28"},
			{"Answer" : "Considerably worse", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "28"},
			{"Answer" : "About the same", "Value" : "42"},
			{"Answer" : "A little worse", "Value" : "19"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "39"},
			{"Answer" : "About the same", "Value" : "34"},
			{"Answer" : "A little worse", "Value" : "16"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "26"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "29"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "26"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "28"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "26"},
			{"Answer" : "About the same", "Value" : "47"},
			{"Answer" : "A little worse", "Value" : "18"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "32"},
			{"Answer" : "A little worse", "Value" : "32"},
			{"Answer" : "Considerably worse", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q4. Now thinking specifically about your industry, how would you describe the current business or economic conditions in New York State as compared with six months ago?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "21"},
			{"Answer" : "About the same", "Value" : "39"},
			{"Answer" : "A little worse", "Value" : "29"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "4"},
			{"Answer" : "A little better", "Value" : "24"},
			{"Answer" : "About the same", "Value" : "42"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "20"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "17"},
			{"Answer" : "About the same", "Value" : "41"},
			{"Answer" : "A little worse", "Value" : "31"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "22"},
			{"Answer" : "About the same", "Value" : "47"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "19"},
			{"Answer" : "About the same", "Value" : "40"},
			{"Answer" : "A little worse", "Value" : "29"},
			{"Answer" : "Considerably worse", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "20"},
			{"Answer" : "About the same", "Value" : "35"},
			{"Answer" : "A little worse", "Value" : "32"},
			{"Answer" : "Considerably worse", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "4"},
			{"Answer" : "A little better", "Value" : "23"},
			{"Answer" : "About the same", "Value" : "35"},
			{"Answer" : "A little worse", "Value" : "33"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "10"},
			{"Answer" : "A little better", "Value" : "61"},
			{"Answer" : "About the same", "Value" : "26"},
			{"Answer" : "A little worse", "Value" : "4"},
			{"Answer" : "Considerably worse", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "0"},
			{"Answer" : "A little better", "Value" : "6"},
			{"Answer" : "About the same", "Value" : "64"},
			{"Answer" : "A little worse", "Value" : "27"},
			{"Answer" : "Considerably worse", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "0"},
			{"Answer" : "About the same", "Value" : "8"},
			{"Answer" : "A little worse", "Value" : "63"},
			{"Answer" : "Considerably worse", "Value" : "28"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "21"},
			{"Answer" : "About the same", "Value" : "39"},
			{"Answer" : "A little worse", "Value" : "31"},
			{"Answer" : "Considerably worse", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "26"},
			{"Answer" : "About the same", "Value" : "43"},
			{"Answer" : "A little worse", "Value" : "22"},
			{"Answer" : "Considerably worse", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "17"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "31"},
			{"Answer" : "Considerably worse", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "9"},
			{"Answer" : "A little better", "Value" : "32"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "18"},
			{"Answer" : "Considerably worse", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "16"},
			{"Answer" : "About the same", "Value" : "46"},
			{"Answer" : "A little worse", "Value" : "31"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "25"},
			{"Answer" : "About the same", "Value" : "32"},
			{"Answer" : "A little worse", "Value" : "35"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "19"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "32"},
			{"Answer" : "Considerably worse", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "17"},
			{"Answer" : "About the same", "Value" : "33"},
			{"Answer" : "A little worse", "Value" : "30"},
			{"Answer" : "Considerably worse", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q5. And looking forward from today through the next year, how would you describe your expectations for your industry here in New York?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "24"},
			{"Answer" : "About the same", "Value" : "41"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "30"},
			{"Answer" : "About the same", "Value" : "36"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "25"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "33"},
			{"Answer" : "A little worse", "Value" : "27"},
			{"Answer" : "Considerably worse", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "47"},
			{"Answer" : "A little worse", "Value" : "19"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "4"},
			{"Answer" : "A little better", "Value" : "22"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "31"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "23"},
			{"Answer" : "About the same", "Value" : "42"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "4"},
			{"Answer" : "A little better", "Value" : "24"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "9"},
			{"Answer" : "A little better", "Value" : "68"},
			{"Answer" : "About the same", "Value" : "23"},
			{"Answer" : "A little worse", "Value" : "0"},
			{"Answer" : "Considerably worse", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "0"},
			{"Answer" : "A little better", "Value" : "9"},
			{"Answer" : "About the same", "Value" : "67"},
			{"Answer" : "A little worse", "Value" : "23"},
			{"Answer" : "Considerably worse", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "0"},
			{"Answer" : "A little better", "Value" : "0"},
			{"Answer" : "About the same", "Value" : "11"},
			{"Answer" : "A little worse", "Value" : "60"},
			{"Answer" : "Considerably worse", "Value" : "29"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "23"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "A little worse", "Value" : "24"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "29"},
			{"Answer" : "About the same", "Value" : "41"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "3"},
			{"Answer" : "A little better", "Value" : "21"},
			{"Answer" : "About the same", "Value" : "38"},
			{"Answer" : "A little worse", "Value" : "25"},
			{"Answer" : "Considerably worse", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "9"},
			{"Answer" : "A little better", "Value" : "31"},
			{"Answer" : "About the same", "Value" : "39"},
			{"Answer" : "A little worse", "Value" : "16"},
			{"Answer" : "Considerably worse", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "21"},
			{"Answer" : "About the same", "Value" : "45"},
			{"Answer" : "A little worse", "Value" : "27"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "5"},
			{"Answer" : "A little better", "Value" : "23"},
			{"Answer" : "About the same", "Value" : "35"},
			{"Answer" : "A little worse", "Value" : "31"},
			{"Answer" : "Considerably worse", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "1"},
			{"Answer" : "A little better", "Value" : "23"},
			{"Answer" : "About the same", "Value" : "37"},
			{"Answer" : "A little worse", "Value" : "28"},
			{"Answer" : "Considerably worse", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Considerably better", "Value" : "2"},
			{"Answer" : "A little better", "Value" : "27"},
			{"Answer" : "About the same", "Value" : "42"},
			{"Answer" : "A little worse", "Value" : "22"},
			{"Answer" : "Considerably worse", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q6. Now thinking specifically about your company, what are your expectations for revenue through the year 2016?  Do you believe your revenue will…?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "42"},
			{"Answer" : "Stay about the same", "Value" : "36"},
			{"Answer" : "Decrease moderately", "Value" : "17"},
			{"Answer" : "Decrease substantially", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "4"},
			{"Answer" : "Grow moderately", "Value" : "45"},
			{"Answer" : "Stay about the same", "Value" : "33"},
			{"Answer" : "Decrease moderately", "Value" : "16"},
			{"Answer" : "Decrease substantially", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "39"},
			{"Answer" : "Stay about the same", "Value" : "36"},
			{"Answer" : "Decrease moderately", "Value" : "18"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "36"},
			{"Answer" : "Stay about the same", "Value" : "35"},
			{"Answer" : "Decrease moderately", "Value" : "23"},
			{"Answer" : "Decrease substantially", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "48"},
			{"Answer" : "Stay about the same", "Value" : "33"},
			{"Answer" : "Decrease moderately", "Value" : "13"},
			{"Answer" : "Decrease substantially", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "39"},
			{"Answer" : "Stay about the same", "Value" : "38"},
			{"Answer" : "Decrease moderately", "Value" : "18"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "40"},
			{"Answer" : "Stay about the same", "Value" : "37"},
			{"Answer" : "Decrease moderately", "Value" : "18"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "0"},
			{"Answer" : "Grow moderately", "Value" : "44"},
			{"Answer" : "Stay about the same", "Value" : "34"},
			{"Answer" : "Decrease moderately", "Value" : "20"},
			{"Answer" : "Decrease substantially", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "6"},
			{"Answer" : "Grow moderately", "Value" : "68"},
			{"Answer" : "Stay about the same", "Value" : "24"},
			{"Answer" : "Decrease moderately", "Value" : "3"},
			{"Answer" : "Decrease substantially", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "43"},
			{"Answer" : "Stay about the same", "Value" : "43"},
			{"Answer" : "Decrease moderately", "Value" : "12"},
			{"Answer" : "Decrease substantially", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "9"},
			{"Answer" : "Stay about the same", "Value" : "36"},
			{"Answer" : "Decrease moderately", "Value" : "45"},
			{"Answer" : "Decrease substantially", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "40"},
			{"Answer" : "Stay about the same", "Value" : "39"},
			{"Answer" : "Decrease moderately", "Value" : "17"},
			{"Answer" : "Decrease substantially", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "47"},
			{"Answer" : "Stay about the same", "Value" : "33"},
			{"Answer" : "Decrease moderately", "Value" : "17"},
			{"Answer" : "Decrease substantially", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "43"},
			{"Answer" : "Stay about the same", "Value" : "32"},
			{"Answer" : "Decrease moderately", "Value" : "16"},
			{"Answer" : "Decrease substantially", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "5"},
			{"Answer" : "Grow moderately", "Value" : "36"},
			{"Answer" : "Stay about the same", "Value" : "46"},
			{"Answer" : "Decrease moderately", "Value" : "11"},
			{"Answer" : "Decrease substantially", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "52"},
			{"Answer" : "Stay about the same", "Value" : "30"},
			{"Answer" : "Decrease moderately", "Value" : "14"},
			{"Answer" : "Decrease substantially", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "5"},
			{"Answer" : "Grow moderately", "Value" : "38"},
			{"Answer" : "Stay about the same", "Value" : "31"},
			{"Answer" : "Decrease moderately", "Value" : "23"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "40"},
			{"Answer" : "Stay about the same", "Value" : "39"},
			{"Answer" : "Decrease moderately", "Value" : "18"},
			{"Answer" : "Decrease substantially", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "0"},
			{"Answer" : "Grow moderately", "Value" : "40"},
			{"Answer" : "Stay about the same", "Value" : "28"},
			{"Answer" : "Decrease moderately", "Value" : "25"},
			{"Answer" : "Decrease substantially", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q7. Continuing to focus on your company, please think quickly about profitability. Between today and the end of the calendar year 2016 do you expect your profits to…?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "33"},
			{"Answer" : "Stay about the same", "Value" : "36"},
			{"Answer" : "Decrease moderately", "Value" : "25"},
			{"Answer" : "Decrease substantially", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "38"},
			{"Answer" : "Stay about the same", "Value" : "35"},
			{"Answer" : "Decrease moderately", "Value" : "22"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "29"},
			{"Answer" : "Stay about the same", "Value" : "38"},
			{"Answer" : "Decrease moderately", "Value" : "26"},
			{"Answer" : "Decrease substantially", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "28"},
			{"Answer" : "Stay about the same", "Value" : "32"},
			{"Answer" : "Decrease moderately", "Value" : "33"},
			{"Answer" : "Decrease substantially", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "40"},
			{"Answer" : "Stay about the same", "Value" : "38"},
			{"Answer" : "Decrease moderately", "Value" : "18"},
			{"Answer" : "Decrease substantially", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "31"},
			{"Answer" : "Stay about the same", "Value" : "34"},
			{"Answer" : "Decrease moderately", "Value" : "26"},
			{"Answer" : "Decrease substantially", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "29"},
			{"Answer" : "Stay about the same", "Value" : "40"},
			{"Answer" : "Decrease moderately", "Value" : "25"},
			{"Answer" : "Decrease substantially", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "29"},
			{"Answer" : "Stay about the same", "Value" : "30"},
			{"Answer" : "Decrease moderately", "Value" : "35"},
			{"Answer" : "Decrease substantially", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "3"},
			{"Answer" : "Grow moderately", "Value" : "56"},
			{"Answer" : "Stay about the same", "Value" : "33"},
			{"Answer" : "Decrease moderately", "Value" : "8"},
			{"Answer" : "Decrease substantially", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "33"},
			{"Answer" : "Stay about the same", "Value" : "42"},
			{"Answer" : "Decrease moderately", "Value" : "21"},
			{"Answer" : "Decrease substantially", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "4"},
			{"Answer" : "Stay about the same", "Value" : "30"},
			{"Answer" : "Decrease moderately", "Value" : "53"},
			{"Answer" : "Decrease substantially", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "31"},
			{"Answer" : "Stay about the same", "Value" : "39"},
			{"Answer" : "Decrease moderately", "Value" : "24"},
			{"Answer" : "Decrease substantially", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "37"},
			{"Answer" : "Stay about the same", "Value" : "39"},
			{"Answer" : "Decrease moderately", "Value" : "22"},
			{"Answer" : "Decrease substantially", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "32"},
			{"Answer" : "Stay about the same", "Value" : "31"},
			{"Answer" : "Decrease moderately", "Value" : "28"},
			{"Answer" : "Decrease substantially", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "32"},
			{"Answer" : "Stay about the same", "Value" : "41"},
			{"Answer" : "Decrease moderately", "Value" : "21"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "2"},
			{"Answer" : "Grow moderately", "Value" : "40"},
			{"Answer" : "Stay about the same", "Value" : "33"},
			{"Answer" : "Decrease moderately", "Value" : "21"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "0"},
			{"Answer" : "Grow moderately", "Value" : "29"},
			{"Answer" : "Stay about the same", "Value" : "32"},
			{"Answer" : "Decrease moderately", "Value" : "35"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "1"},
			{"Answer" : "Grow moderately", "Value" : "30"},
			{"Answer" : "Stay about the same", "Value" : "40"},
			{"Answer" : "Decrease moderately", "Value" : "25"},
			{"Answer" : "Decrease substantially", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Grow substantially", "Value" : "0"},
			{"Answer" : "Grow moderately", "Value" : "33"},
			{"Answer" : "Stay about the same", "Value" : "33"},
			{"Answer" : "Decrease moderately", "Value" : "27"},
			{"Answer" : "Decrease substantially", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q8. Businesses and the executives that direct them strive to enhance profitability in many ways. Through which of the following strategies do you plan to MOST enhance your company’s profitability over the next year?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "39"},
			{"Answer" : "Cost reduction", "Value" : "31"},
			{"Answer" : "Price increase", "Value" : "12"},
			{"Answer" : "New technology", "Value" : "9"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "43"},
			{"Answer" : "Cost reduction", "Value" : "29"},
			{"Answer" : "Price increase", "Value" : "15"},
			{"Answer" : "New technology", "Value" : "7"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "40"},
			{"Answer" : "Cost reduction", "Value" : "34"},
			{"Answer" : "Price increase", "Value" : "13"},
			{"Answer" : "New technology", "Value" : "10"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "38"},
			{"Answer" : "Cost reduction", "Value" : "34"},
			{"Answer" : "Price increase", "Value" : "12"},
			{"Answer" : "New technology", "Value" : "9"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "47"},
			{"Answer" : "Cost reduction", "Value" : "26"},
			{"Answer" : "Price increase", "Value" : "10"},
			{"Answer" : "New technology", "Value" : "8"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "34"},
			{"Answer" : "Cost reduction", "Value" : "33"},
			{"Answer" : "Price increase", "Value" : "16"},
			{"Answer" : "New technology", "Value" : "9"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "36"},
			{"Answer" : "Cost reduction", "Value" : "31"},
			{"Answer" : "Price increase", "Value" : "11"},
			{"Answer" : "New technology", "Value" : "12"},
			{"Answer" : "Other", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "41"},
			{"Answer" : "Cost reduction", "Value" : "37"},
			{"Answer" : "Price increase", "Value" : "11"},
			{"Answer" : "New technology", "Value" : "6"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "55"},
			{"Answer" : "Cost reduction", "Value" : "17"},
			{"Answer" : "Price increase", "Value" : "8"},
			{"Answer" : "New technology", "Value" : "12"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "38"},
			{"Answer" : "Cost reduction", "Value" : "32"},
			{"Answer" : "Price increase", "Value" : "12"},
			{"Answer" : "New technology", "Value" : "9"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "23"},
			{"Answer" : "Cost reduction", "Value" : "46"},
			{"Answer" : "Price increase", "Value" : "16"},
			{"Answer" : "New technology", "Value" : "6"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "38"},
			{"Answer" : "Cost reduction", "Value" : "31"},
			{"Answer" : "Price increase", "Value" : "14"},
			{"Answer" : "New technology", "Value" : "9"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "40"},
			{"Answer" : "Cost reduction", "Value" : "33"},
			{"Answer" : "Price increase", "Value" : "8"},
			{"Answer" : "New technology", "Value" : "10"},
			{"Answer" : "Other", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "41"},
			{"Answer" : "Cost reduction", "Value" : "30"},
			{"Answer" : "Price increase", "Value" : "12"},
			{"Answer" : "New technology", "Value" : "8"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "51"},
			{"Answer" : "Cost reduction", "Value" : "24"},
			{"Answer" : "Price increase", "Value" : "17"},
			{"Answer" : "New technology", "Value" : "3"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "39"},
			{"Answer" : "Cost reduction", "Value" : "31"},
			{"Answer" : "Price increase", "Value" : "6"},
			{"Answer" : "New technology", "Value" : "16"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "34"},
			{"Answer" : "Cost reduction", "Value" : "43"},
			{"Answer" : "Price increase", "Value" : "8"},
			{"Answer" : "New technology", "Value" : "6"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "39"},
			{"Answer" : "Cost reduction", "Value" : "28"},
			{"Answer" : "Price increase", "Value" : "14"},
			{"Answer" : "New technology", "Value" : "10"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Market/demand growth", "Value" : "28"},
			{"Answer" : "Cost reduction", "Value" : "40"},
			{"Answer" : "Price increase", "Value" : "15"},
			{"Answer" : "New technology", "Value" : "10"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q9. Please indicate which of the following are major areas of concentration for your company now and through 2016.", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "54"},
			{"Answer" : "Growth in existing products", "Value" : "52"},
			{"Answer" : "Entry into new markets", "Value" : "30"},
			{"Answer" : "New product lines", "Value" : "27"},
			{"Answer" : "Acquisition of new businesses", "Value" : "15"},
			{"Answer" : "Technology innovation", "Value" : "27"},
			{"Answer" : "Construction of new locations", "Value" : "9"},
			{"Answer" : "Internal restructuring", "Value" : "28"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "56"},
			{"Answer" : "Growth in existing products", "Value" : "54"},
			{"Answer" : "Entry into new markets", "Value" : "33"},
			{"Answer" : "New product lines", "Value" : "25"},
			{"Answer" : "Acquisition of new businesses", "Value" : "14"},
			{"Answer" : "Technology innovation", "Value" : "26"},
			{"Answer" : "Construction of new locations", "Value" : "10"},
			{"Answer" : "Internal restructuring", "Value" : "25"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "61"},
			{"Answer" : "Growth in existing products", "Value" : "53"},
			{"Answer" : "Entry into new markets", "Value" : "37"},
			{"Answer" : "New product lines", "Value" : "31"},
			{"Answer" : "Acquisition of new businesses", "Value" : "11"},
			{"Answer" : "Technology innovation", "Value" : "28"},
			{"Answer" : "Construction of new locations", "Value" : "10"},
			{"Answer" : "Internal restructuring", "Value" : "28"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "58"},
			{"Answer" : "Growth in existing products", "Value" : "50"},
			{"Answer" : "Entry into new markets", "Value" : "33"},
			{"Answer" : "New product lines", "Value" : "31"},
			{"Answer" : "Acquisition of new businesses", "Value" : "13"},
			{"Answer" : "Technology innovation", "Value" : "27"},
			{"Answer" : "Construction of new locations", "Value" : "8"},
			{"Answer" : "Internal restructuring", "Value" : "33"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "56"},
			{"Answer" : "Growth in existing products", "Value" : "53"},
			{"Answer" : "Entry into new markets", "Value" : "28"},
			{"Answer" : "New product lines", "Value" : "26"},
			{"Answer" : "Acquisition of new businesses", "Value" : "20"},
			{"Answer" : "Technology innovation", "Value" : "31"},
			{"Answer" : "Construction of new locations", "Value" : "12"},
			{"Answer" : "Internal restructuring", "Value" : "31"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "57"},
			{"Answer" : "Growth in existing products", "Value" : "53"},
			{"Answer" : "Entry into new markets", "Value" : "30"},
			{"Answer" : "New product lines", "Value" : "30"},
			{"Answer" : "Acquisition of new businesses", "Value" : "11"},
			{"Answer" : "Technology innovation", "Value" : "25"},
			{"Answer" : "Construction of new locations", "Value" : "10"},
			{"Answer" : "Internal restructuring", "Value" : "24"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "50"},
			{"Answer" : "Growth in existing products", "Value" : "49"},
			{"Answer" : "Entry into new markets", "Value" : "31"},
			{"Answer" : "New product lines", "Value" : "27"},
			{"Answer" : "Acquisition of new businesses", "Value" : "13"},
			{"Answer" : "Technology innovation", "Value" : "28"},
			{"Answer" : "Construction of new locations", "Value" : "9"},
			{"Answer" : "Internal restructuring", "Value" : "30"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "53"},
			{"Answer" : "Growth in existing products", "Value" : "56"},
			{"Answer" : "Entry into new markets", "Value" : "34"},
			{"Answer" : "New product lines", "Value" : "20"},
			{"Answer" : "Acquisition of new businesses", "Value" : "15"},
			{"Answer" : "Technology innovation", "Value" : "24"},
			{"Answer" : "Construction of new locations", "Value" : "4"},
			{"Answer" : "Internal restructuring", "Value" : "28"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "63"},
			{"Answer" : "Growth in existing products", "Value" : "55"},
			{"Answer" : "Entry into new markets", "Value" : "29"},
			{"Answer" : "New product lines", "Value" : "27"},
			{"Answer" : "Acquisition of new businesses", "Value" : "18"},
			{"Answer" : "Technology innovation", "Value" : "28"},
			{"Answer" : "Construction of new locations", "Value" : "13"},
			{"Answer" : "Internal restructuring", "Value" : "26"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "53"},
			{"Answer" : "Growth in existing products", "Value" : "52"},
			{"Answer" : "Entry into new markets", "Value" : "34"},
			{"Answer" : "New product lines", "Value" : "27"},
			{"Answer" : "Acquisition of new businesses", "Value" : "16"},
			{"Answer" : "Technology innovation", "Value" : "30"},
			{"Answer" : "Construction of new locations", "Value" : "9"},
			{"Answer" : "Internal restructuring", "Value" : "24"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "44"},
			{"Answer" : "Growth in existing products", "Value" : "50"},
			{"Answer" : "Entry into new markets", "Value" : "25"},
			{"Answer" : "New product lines", "Value" : "25"},
			{"Answer" : "Acquisition of new businesses", "Value" : "8"},
			{"Answer" : "Technology innovation", "Value" : "21"},
			{"Answer" : "Construction of new locations", "Value" : "6"},
			{"Answer" : "Internal restructuring", "Value" : "39"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "55"},
			{"Answer" : "Growth in existing products", "Value" : "54"},
			{"Answer" : "Entry into new markets", "Value" : "29"},
			{"Answer" : "New product lines", "Value" : "26"},
			{"Answer" : "Acquisition of new businesses", "Value" : "9"},
			{"Answer" : "Technology innovation", "Value" : "22"},
			{"Answer" : "Construction of new locations", "Value" : "6"},
			{"Answer" : "Internal restructuring", "Value" : "30"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "57"},
			{"Answer" : "Growth in existing products", "Value" : "53"},
			{"Answer" : "Entry into new markets", "Value" : "34"},
			{"Answer" : "New product lines", "Value" : "26"},
			{"Answer" : "Acquisition of new businesses", "Value" : "20"},
			{"Answer" : "Technology innovation", "Value" : "26"},
			{"Answer" : "Construction of new locations", "Value" : "8"},
			{"Answer" : "Internal restructuring", "Value" : "35"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "50"},
			{"Answer" : "Growth in existing products", "Value" : "48"},
			{"Answer" : "Entry into new markets", "Value" : "30"},
			{"Answer" : "New product lines", "Value" : "27"},
			{"Answer" : "Acquisition of new businesses", "Value" : "22"},
			{"Answer" : "Technology innovation", "Value" : "37"},
			{"Answer" : "Construction of new locations", "Value" : "16"},
			{"Answer" : "Internal restructuring", "Value" : "20"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "60"},
			{"Answer" : "Growth in existing products", "Value" : "41"},
			{"Answer" : "Entry into new markets", "Value" : "30"},
			{"Answer" : "New product lines", "Value" : "11"},
			{"Answer" : "Acquisition of new businesses", "Value" : "9"},
			{"Answer" : "Technology innovation", "Value" : "18"},
			{"Answer" : "Construction of new locations", "Value" : "18"},
			{"Answer" : "Internal restructuring", "Value" : "29"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "64"},
			{"Answer" : "Growth in existing products", "Value" : "60"},
			{"Answer" : "Entry into new markets", "Value" : "42"},
			{"Answer" : "New product lines", "Value" : "39"},
			{"Answer" : "Acquisition of new businesses", "Value" : "14"},
			{"Answer" : "Technology innovation", "Value" : "33"},
			{"Answer" : "Construction of new locations", "Value" : "4"},
			{"Answer" : "Internal restructuring", "Value" : "26"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "37"},
			{"Answer" : "Growth in existing products", "Value" : "57"},
			{"Answer" : "Entry into new markets", "Value" : "23"},
			{"Answer" : "New product lines", "Value" : "26"},
			{"Answer" : "Acquisition of new businesses", "Value" : "9"},
			{"Answer" : "Technology innovation", "Value" : "22"},
			{"Answer" : "Construction of new locations", "Value" : "12"},
			{"Answer" : "Internal restructuring", "Value" : "29"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "44"},
			{"Answer" : "Growth in existing products", "Value" : "46"},
			{"Answer" : "Entry into new markets", "Value" : "25"},
			{"Answer" : "New product lines", "Value" : "22"},
			{"Answer" : "Acquisition of new businesses", "Value" : "16"},
			{"Answer" : "Technology innovation", "Value" : "31"},
			{"Answer" : "Construction of new locations", "Value" : "11"},
			{"Answer" : "Internal restructuring", "Value" : "31"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Expansion of existing markets", "Value" : "65"},
			{"Answer" : "Growth in existing products", "Value" : "65"},
			{"Answer" : "Entry into new markets", "Value" : "32"},
			{"Answer" : "New product lines", "Value" : "33"},
			{"Answer" : "Acquisition of new businesses", "Value" : "22"},
			{"Answer" : "Technology innovation", "Value" : "23"},
			{"Answer" : "Construction of new locations", "Value" : "5"},
			{"Answer" : "Internal restructuring", "Value" : "22"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q10. Do you intend to invest between today through 2016 in any fixed assets for your company designed to meet growing demand, reduce costs or enhance productivity?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "55"},
			{"Answer" : "No", "Value" : "34"},
			{"Answer" : "Not sure", "Value" : "11"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "58"},
			{"Answer" : "No", "Value" : "31"},
			{"Answer" : "Not sure", "Value" : "11"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Yes", "Value" : "52"},
			{"Answer" : "No", "Value" : "36"},
			{"Answer" : "Not sure", "Value" : "12"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Yes", "Value" : "52"},
			{"Answer" : "No", "Value" : "38"},
			{"Answer" : "Not sure", "Value" : "11"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "58"},
			{"Answer" : "No", "Value" : "33"},
			{"Answer" : "Not sure", "Value" : "10"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "54"},
			{"Answer" : "No", "Value" : "36"},
			{"Answer" : "Not sure", "Value" : "10"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "54"},
			{"Answer" : "No", "Value" : "33"},
			{"Answer" : "Not sure", "Value" : "13"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "53"},
			{"Answer" : "No", "Value" : "37"},
			{"Answer" : "Not sure", "Value" : "10"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "64"},
			{"Answer" : "No", "Value" : "25"},
			{"Answer" : "Not sure", "Value" : "12"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "56"},
			{"Answer" : "No", "Value" : "34"},
			{"Answer" : "Not sure", "Value" : "10"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "42"},
			{"Answer" : "No", "Value" : "47"},
			{"Answer" : "Not sure", "Value" : "11"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "46"},
			{"Answer" : "No", "Value" : "43"},
			{"Answer" : "Not sure", "Value" : "10"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "63"},
			{"Answer" : "No", "Value" : "28"},
			{"Answer" : "Not sure", "Value" : "9"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "67"},
			{"Answer" : "No", "Value" : "20"},
			{"Answer" : "Not sure", "Value" : "13"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "61"},
			{"Answer" : "No", "Value" : "26"},
			{"Answer" : "Not sure", "Value" : "13"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "63"},
			{"Answer" : "No", "Value" : "27"},
			{"Answer" : "Not sure", "Value" : "10"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "48"},
			{"Answer" : "No", "Value" : "38"},
			{"Answer" : "Not sure", "Value" : "14"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "52"},
			{"Answer" : "No", "Value" : "38"},
			{"Answer" : "Not sure", "Value" : "10"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "48"},
			{"Answer" : "No", "Value" : "45"},
			{"Answer" : "Not sure", "Value" : "7"}
		]}
	]}
]},
{ "Question" : "Q11. (If investing in fixed assets) What is the main way you expect to finance those assets? ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "60"},
			{"Answer" : "Borrow from a financial institution", "Value" : "31"},
			{"Answer" : "Private equity", "Value" : "4"},
			{"Answer" : "Not sure", "Value" : "5"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "63"},
			{"Answer" : "Borrow from a financial institution", "Value" : "31"},
			{"Answer" : "Private equity", "Value" : "2"},
			{"Answer" : "Not sure", "Value" : "4"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "57"},
			{"Answer" : "Borrow from a financial institution", "Value" : "34"},
			{"Answer" : "Private equity", "Value" : "2"},
			{"Answer" : "Not sure", "Value" : "7"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "58"},
			{"Answer" : "Borrow from a financial institution", "Value" : "33"},
			{"Answer" : "Private equity", "Value" : "3"},
			{"Answer" : "Not sure", "Value" : "6"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "59"},
			{"Answer" : "Borrow from a financial institution", "Value" : "36"},
			{"Answer" : "Private equity", "Value" : "2"},
			{"Answer" : "Not sure", "Value" : "2"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "66"},
			{"Answer" : "Borrow from a financial institution", "Value" : "23"},
			{"Answer" : "Private equity", "Value" : "5"},
			{"Answer" : "Not sure", "Value" : "6"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "58"},
			{"Answer" : "Borrow from a financial institution", "Value" : "34"},
			{"Answer" : "Private equity", "Value" : "6"},
			{"Answer" : "Not sure", "Value" : "2"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "50"},
			{"Answer" : "Borrow from a financial institution", "Value" : "36"},
			{"Answer" : "Private equity", "Value" : "2"},
			{"Answer" : "Not sure", "Value" : "12"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "61"},
			{"Answer" : "Borrow from a financial institution", "Value" : "30"},
			{"Answer" : "Private equity", "Value" : "5"},
			{"Answer" : "Not sure", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "60"},
			{"Answer" : "Borrow from a financial institution", "Value" : "30"},
			{"Answer" : "Private equity", "Value" : "3"},
			{"Answer" : "Not sure", "Value" : "6"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "57"},
			{"Answer" : "Borrow from a financial institution", "Value" : "36"},
			{"Answer" : "Private equity", "Value" : "6"},
			{"Answer" : "Not sure", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "62"},
			{"Answer" : "Borrow from a financial institution", "Value" : "26"},
			{"Answer" : "Private equity", "Value" : "4"},
			{"Answer" : "Not sure", "Value" : "9"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "53"},
			{"Answer" : "Borrow from a financial institution", "Value" : "41"},
			{"Answer" : "Private equity", "Value" : "5"},
			{"Answer" : "Not sure", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "59"},
			{"Answer" : "Borrow from a financial institution", "Value" : "34"},
			{"Answer" : "Private equity", "Value" : "4"},
			{"Answer" : "Not sure", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "58"},
			{"Answer" : "Borrow from a financial institution", "Value" : "26"},
			{"Answer" : "Private equity", "Value" : "8"},
			{"Answer" : "Not sure", "Value" : "8"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "58"},
			{"Answer" : "Borrow from a financial institution", "Value" : "34"},
			{"Answer" : "Private equity", "Value" : "0"},
			{"Answer" : "Not sure", "Value" : "8"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "58"},
			{"Answer" : "Borrow from a financial institution", "Value" : "29"},
			{"Answer" : "Private equity", "Value" : "0"},
			{"Answer" : "Not sure", "Value" : "13"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "64"},
			{"Answer" : "Borrow from a financial institution", "Value" : "31"},
			{"Answer" : "Private equity", "Value" : "4"},
			{"Answer" : "Not sure", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Internally generated funds", "Value" : "59"},
			{"Answer" : "Borrow from a financial institution", "Value" : "38"},
			{"Answer" : "Private equity", "Value" : "3"},
			{"Answer" : "Not sure", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q12. Now thinking about the people that work for your company, between today and the end of 2016, do you plan to…?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "1"},
			{"Answer" : "Moderately increase your workforce", "Value" : "32"},
			{"Answer" : "Remain about the same", "Value" : "57"},
			{"Answer" : "Decrease your workforce", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "2"},
			{"Answer" : "Moderately increase your workforce", "Value" : "30"},
			{"Answer" : "Remain about the same", "Value" : "59"},
			{"Answer" : "Decrease your workforce", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "1"},
			{"Answer" : "Moderately increase your workforce", "Value" : "27"},
			{"Answer" : "Remain about the same", "Value" : "59"},
			{"Answer" : "Decrease your workforce", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "1"},
			{"Answer" : "Moderately increase your workforce", "Value" : "26"},
			{"Answer" : "Remain about the same", "Value" : "58"},
			{"Answer" : "Decrease your workforce", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "2"},
			{"Answer" : "Moderately increase your workforce", "Value" : "39"},
			{"Answer" : "Remain about the same", "Value" : "54"},
			{"Answer" : "Decrease your workforce", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "1"},
			{"Answer" : "Moderately increase your workforce", "Value" : "32"},
			{"Answer" : "Remain about the same", "Value" : "53"},
			{"Answer" : "Decrease your workforce", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "0"},
			{"Answer" : "Moderately increase your workforce", "Value" : "28"},
			{"Answer" : "Remain about the same", "Value" : "64"},
			{"Answer" : "Decrease your workforce", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "0"},
			{"Answer" : "Moderately increase your workforce", "Value" : "27"},
			{"Answer" : "Remain about the same", "Value" : "58"},
			{"Answer" : "Decrease your workforce", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "2"},
			{"Answer" : "Moderately increase your workforce", "Value" : "46"},
			{"Answer" : "Remain about the same", "Value" : "50"},
			{"Answer" : "Decrease your workforce", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "0"},
			{"Answer" : "Moderately increase your workforce", "Value" : "32"},
			{"Answer" : "Remain about the same", "Value" : "59"},
			{"Answer" : "Decrease your workforce", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "1"},
			{"Answer" : "Moderately increase your workforce", "Value" : "15"},
			{"Answer" : "Remain about the same", "Value" : "63"},
			{"Answer" : "Decrease your workforce", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "0"},
			{"Answer" : "Moderately increase your workforce", "Value" : "29"},
			{"Answer" : "Remain about the same", "Value" : "61"},
			{"Answer" : "Decrease your workforce", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "2"},
			{"Answer" : "Moderately increase your workforce", "Value" : "37"},
			{"Answer" : "Remain about the same", "Value" : "54"},
			{"Answer" : "Decrease your workforce", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "1"},
			{"Answer" : "Moderately increase your workforce", "Value" : "36"},
			{"Answer" : "Remain about the same", "Value" : "50"},
			{"Answer" : "Decrease your workforce", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "1"},
			{"Answer" : "Moderately increase your workforce", "Value" : "46"},
			{"Answer" : "Remain about the same", "Value" : "48"},
			{"Answer" : "Decrease your workforce", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "2"},
			{"Answer" : "Moderately increase your workforce", "Value" : "36"},
			{"Answer" : "Remain about the same", "Value" : "52"},
			{"Answer" : "Decrease your workforce", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "0"},
			{"Answer" : "Moderately increase your workforce", "Value" : "26"},
			{"Answer" : "Remain about the same", "Value" : "57"},
			{"Answer" : "Decrease your workforce", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "0"},
			{"Answer" : "Moderately increase your workforce", "Value" : "33"},
			{"Answer" : "Remain about the same", "Value" : "58"},
			{"Answer" : "Decrease your workforce", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Substantially increase your workforce", "Value" : "0"},
			{"Answer" : "Moderately increase your workforce", "Value" : "20"},
			{"Answer" : "Remain about the same", "Value" : "70"},
			{"Answer" : "Decrease your workforce", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q13. Now thinking about other challenges that your company faces, which of the following are you concerned with?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "25"},
			{"Answer" : "Governmental regulation", "Value" : "68"},
			{"Answer" : "Taxation", "Value" : "65"},
			{"Answer" : "Foreign competition", "Value" : "11"},
			{"Answer" : "Energy costs", "Value" : "19"},
			{"Answer" : "Risk management", "Value" : "26"},
			{"Answer" : "Adverse economic conditions", "Value" : "48"},
			{"Answer" : "Health care costs", "Value" : "78"},
			{"Answer" : "Global political instability", "Value" : "15"},
			{"Answer" : "Rising supplier costs", "Value" : "25"},
			{"Answer" : "Human resources", "Value" : "38"},
			{"Answer" : "Cash flow", "Value" : "26"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "8"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "29"},
			{"Answer" : "Governmental regulation", "Value" : "69"},
			{"Answer" : "Taxation", "Value" : "65"},
			{"Answer" : "Foreign competition", "Value" : "12"},
			{"Answer" : "Energy costs", "Value" : "30"},
			{"Answer" : "Risk management", "Value" : "22"},
			{"Answer" : "Adverse economic conditions", "Value" : "46"},
			{"Answer" : "Health care costs", "Value" : "77"},
			{"Answer" : "Global political instability", "Value" : "16"},
			{"Answer" : "Rising supplier costs", "Value" : "35"},
			{"Answer" : "Human resources", "Value" : "30"},
			{"Answer" : "Cash flow", "Value" : "29"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "8"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "25"},
			{"Answer" : "Governmental regulation", "Value" : "70"},
			{"Answer" : "Taxation", "Value" : "67"},
			{"Answer" : "Foreign competition", "Value" : "12"},
			{"Answer" : "Energy costs", "Value" : "31"},
			{"Answer" : "Risk management", "Value" : "21"},
			{"Answer" : "Adverse economic conditions", "Value" : "55"},
			{"Answer" : "Health care costs", "Value" : "80"},
			{"Answer" : "Global political instability", "Value" : "15"},
			{"Answer" : "Rising supplier costs", "Value" : "39"},
			{"Answer" : "Human resources", "Value" : "27"},
			{"Answer" : "Cash flow", "Value" : "35"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "10"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "27"},
			{"Answer" : "Governmental regulation", "Value" : "69"},
			{"Answer" : "Taxation", "Value" : "67"},
			{"Answer" : "Foreign competition", "Value" : "12"},
			{"Answer" : "Energy costs", "Value" : "44"},
			{"Answer" : "Risk management", "Value" : "22"},
			{"Answer" : "Adverse economic conditions", "Value" : "65"},
			{"Answer" : "Health care costs", "Value" : "79"},
			{"Answer" : "Global political instability", "Value" : "22"},
			{"Answer" : "Rising supplier costs", "Value" : "42"},
			{"Answer" : "Human resources", "Value" : "24"},
			{"Answer" : "Cash flow", "Value" : "35"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "13"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "31"},
			{"Answer" : "Governmental regulation", "Value" : "66"},
			{"Answer" : "Taxation", "Value" : "54"},
			{"Answer" : "Foreign competition", "Value" : "5"},
			{"Answer" : "Energy costs", "Value" : "19"},
			{"Answer" : "Risk management", "Value" : "29"},
			{"Answer" : "Adverse economic conditions", "Value" : "44"},
			{"Answer" : "Health care costs", "Value" : "74"},
			{"Answer" : "Global political instability", "Value" : "17"},
			{"Answer" : "Rising supplier costs", "Value" : "23"},
			{"Answer" : "Human resources", "Value" : "44"},
			{"Answer" : "Cash flow", "Value" : "26"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "8"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "19"},
			{"Answer" : "Governmental regulation", "Value" : "72"},
			{"Answer" : "Taxation", "Value" : "72"},
			{"Answer" : "Foreign competition", "Value" : "12"},
			{"Answer" : "Energy costs", "Value" : "18"},
			{"Answer" : "Risk management", "Value" : "28"},
			{"Answer" : "Adverse economic conditions", "Value" : "43"},
			{"Answer" : "Health care costs", "Value" : "77"},
			{"Answer" : "Global political instability", "Value" : "15"},
			{"Answer" : "Rising supplier costs", "Value" : "28"},
			{"Answer" : "Human resources", "Value" : "45"},
			{"Answer" : "Cash flow", "Value" : "27"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "7"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "25"},
			{"Answer" : "Governmental regulation", "Value" : "65"},
			{"Answer" : "Taxation", "Value" : "67"},
			{"Answer" : "Foreign competition", "Value" : "17"},
			{"Answer" : "Energy costs", "Value" : "19"},
			{"Answer" : "Risk management", "Value" : "24"},
			{"Answer" : "Adverse economic conditions", "Value" : "54"},
			{"Answer" : "Health care costs", "Value" : "83"},
			{"Answer" : "Global political instability", "Value" : "15"},
			{"Answer" : "Rising supplier costs", "Value" : "27"},
			{"Answer" : "Human resources", "Value" : "31"},
			{"Answer" : "Cash flow", "Value" : "26"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "8"},
			{"Answer" : "Other", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "23"},
			{"Answer" : "Governmental regulation", "Value" : "71"},
			{"Answer" : "Taxation", "Value" : "66"},
			{"Answer" : "Foreign competition", "Value" : "8"},
			{"Answer" : "Energy costs", "Value" : "24"},
			{"Answer" : "Risk management", "Value" : "19"},
			{"Answer" : "Adverse economic conditions", "Value" : "53"},
			{"Answer" : "Health care costs", "Value" : "76"},
			{"Answer" : "Global political instability", "Value" : "10"},
			{"Answer" : "Rising supplier costs", "Value" : "22"},
			{"Answer" : "Human resources", "Value" : "28"},
			{"Answer" : "Cash flow", "Value" : "27"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "10"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "30"},
			{"Answer" : "Governmental regulation", "Value" : "61"},
			{"Answer" : "Taxation", "Value" : "58"},
			{"Answer" : "Foreign competition", "Value" : "12"},
			{"Answer" : "Energy costs", "Value" : "14"},
			{"Answer" : "Risk management", "Value" : "37"},
			{"Answer" : "Adverse economic conditions", "Value" : "37"},
			{"Answer" : "Health care costs", "Value" : "77"},
			{"Answer" : "Global political instability", "Value" : "15"},
			{"Answer" : "Rising supplier costs", "Value" : "25"},
			{"Answer" : "Human resources", "Value" : "40"},
			{"Answer" : "Cash flow", "Value" : "25"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "8"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "26"},
			{"Answer" : "Governmental regulation", "Value" : "67"},
			{"Answer" : "Taxation", "Value" : "64"},
			{"Answer" : "Foreign competition", "Value" : "10"},
			{"Answer" : "Energy costs", "Value" : "20"},
			{"Answer" : "Risk management", "Value" : "23"},
			{"Answer" : "Adverse economic conditions", "Value" : "48"},
			{"Answer" : "Health care costs", "Value" : "74"},
			{"Answer" : "Global political instability", "Value" : "16"},
			{"Answer" : "Rising supplier costs", "Value" : "22"},
			{"Answer" : "Human resources", "Value" : "41"},
			{"Answer" : "Cash flow", "Value" : "28"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "7"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "17"},
			{"Answer" : "Governmental regulation", "Value" : "78"},
			{"Answer" : "Taxation", "Value" : "75"},
			{"Answer" : "Foreign competition", "Value" : "13"},
			{"Answer" : "Energy costs", "Value" : "25"},
			{"Answer" : "Risk management", "Value" : "17"},
			{"Answer" : "Adverse economic conditions", "Value" : "60"},
			{"Answer" : "Health care costs", "Value" : "86"},
			{"Answer" : "Global political instability", "Value" : "13"},
			{"Answer" : "Rising supplier costs", "Value" : "33"},
			{"Answer" : "Human resources", "Value" : "31"},
			{"Answer" : "Cash flow", "Value" : "25"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "11"},
			{"Answer" : "Other", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "23"},
			{"Answer" : "Governmental regulation", "Value" : "65"},
			{"Answer" : "Taxation", "Value" : "70"},
			{"Answer" : "Foreign competition", "Value" : "13"},
			{"Answer" : "Energy costs", "Value" : "22"},
			{"Answer" : "Risk management", "Value" : "22"},
			{"Answer" : "Adverse economic conditions", "Value" : "51"},
			{"Answer" : "Health care costs", "Value" : "77"},
			{"Answer" : "Global political instability", "Value" : "15"},
			{"Answer" : "Rising supplier costs", "Value" : "27"},
			{"Answer" : "Human resources", "Value" : "32"},
			{"Answer" : "Cash flow", "Value" : "29"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "10"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "30"},
			{"Answer" : "Governmental regulation", "Value" : "64"},
			{"Answer" : "Taxation", "Value" : "66"},
			{"Answer" : "Foreign competition", "Value" : "15"},
			{"Answer" : "Energy costs", "Value" : "14"},
			{"Answer" : "Risk management", "Value" : "28"},
			{"Answer" : "Adverse economic conditions", "Value" : "48"},
			{"Answer" : "Health care costs", "Value" : "77"},
			{"Answer" : "Global political instability", "Value" : "22"},
			{"Answer" : "Rising supplier costs", "Value" : "25"},
			{"Answer" : "Human resources", "Value" : "41"},
			{"Answer" : "Cash flow", "Value" : "25"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "7"},
			{"Answer" : "Other", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "24"},
			{"Answer" : "Governmental regulation", "Value" : "76"},
			{"Answer" : "Taxation", "Value" : "53"},
			{"Answer" : "Foreign competition", "Value" : "6"},
			{"Answer" : "Energy costs", "Value" : "18"},
			{"Answer" : "Risk management", "Value" : "32"},
			{"Answer" : "Adverse economic conditions", "Value" : "42"},
			{"Answer" : "Health care costs", "Value" : "80"},
			{"Answer" : "Global political instability", "Value" : "8"},
			{"Answer" : "Rising supplier costs", "Value" : "22"},
			{"Answer" : "Human resources", "Value" : "48"},
			{"Answer" : "Cash flow", "Value" : "24"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "7"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "25"},
			{"Answer" : "Governmental regulation", "Value" : "72"},
			{"Answer" : "Taxation", "Value" : "70"},
			{"Answer" : "Foreign competition", "Value" : "0"},
			{"Answer" : "Energy costs", "Value" : "16"},
			{"Answer" : "Risk management", "Value" : "39"},
			{"Answer" : "Adverse economic conditions", "Value" : "51"},
			{"Answer" : "Health care costs", "Value" : "77"},
			{"Answer" : "Global political instability", "Value" : "14"},
			{"Answer" : "Rising supplier costs", "Value" : "28"},
			{"Answer" : "Human resources", "Value" : "44"},
			{"Answer" : "Cash flow", "Value" : "31"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "7"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "23"},
			{"Answer" : "Governmental regulation", "Value" : "63"},
			{"Answer" : "Taxation", "Value" : "67"},
			{"Answer" : "Foreign competition", "Value" : "34"},
			{"Answer" : "Energy costs", "Value" : "25"},
			{"Answer" : "Risk management", "Value" : "13"},
			{"Answer" : "Adverse economic conditions", "Value" : "58"},
			{"Answer" : "Health care costs", "Value" : "80"},
			{"Answer" : "Global political instability", "Value" : "19"},
			{"Answer" : "Rising supplier costs", "Value" : "27"},
			{"Answer" : "Human resources", "Value" : "32"},
			{"Answer" : "Cash flow", "Value" : "21"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "10"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "20"},
			{"Answer" : "Governmental regulation", "Value" : "69"},
			{"Answer" : "Taxation", "Value" : "72"},
			{"Answer" : "Foreign competition", "Value" : "2"},
			{"Answer" : "Energy costs", "Value" : "14"},
			{"Answer" : "Risk management", "Value" : "23"},
			{"Answer" : "Adverse economic conditions", "Value" : "46"},
			{"Answer" : "Health care costs", "Value" : "82"},
			{"Answer" : "Global political instability", "Value" : "14"},
			{"Answer" : "Rising supplier costs", "Value" : "26"},
			{"Answer" : "Human resources", "Value" : "34"},
			{"Answer" : "Cash flow", "Value" : "26"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "6"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "25"},
			{"Answer" : "Governmental regulation", "Value" : "71"},
			{"Answer" : "Taxation", "Value" : "57"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "16"},
			{"Answer" : "Risk management", "Value" : "29"},
			{"Answer" : "Adverse economic conditions", "Value" : "36"},
			{"Answer" : "Health care costs", "Value" : "81"},
			{"Answer" : "Global political instability", "Value" : "13"},
			{"Answer" : "Rising supplier costs", "Value" : "21"},
			{"Answer" : "Human resources", "Value" : "48"},
			{"Answer" : "Cash flow", "Value" : "29"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "10"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "37"},
			{"Answer" : "Governmental regulation", "Value" : "53"},
			{"Answer" : "Taxation", "Value" : "75"},
			{"Answer" : "Foreign competition", "Value" : "13"},
			{"Answer" : "Energy costs", "Value" : "35"},
			{"Answer" : "Risk management", "Value" : "12"},
			{"Answer" : "Adverse economic conditions", "Value" : "58"},
			{"Answer" : "Health care costs", "Value" : "78"},
			{"Answer" : "Global political instability", "Value" : "20"},
			{"Answer" : "Rising supplier costs", "Value" : "30"},
			{"Answer" : "Human resources", "Value" : "37"},
			{"Answer" : "Cash flow", "Value" : "35"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "8"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q14. Which of the challenges you selected are you MOST concerned with? ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "7"},
			{"Answer" : "Governmental regulation", "Value" : "26"},
			{"Answer" : "Taxation", "Value" : "11"},
			{"Answer" : "Foreign competition", "Value" : "2"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "2"},
			{"Answer" : "Adverse economic conditions", "Value" : "14"},
			{"Answer" : "Health care costs", "Value" : "17"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "8"},
			{"Answer" : "Cash flow", "Value" : "4"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "7"},
			{"Answer" : "Governmental regulation", "Value" : "25"},
			{"Answer" : "Taxation", "Value" : "14"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "2"},
			{"Answer" : "Adverse economic conditions", "Value" : "13"},
			{"Answer" : "Health care costs", "Value" : "15"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "3"},
			{"Answer" : "Human resources", "Value" : "5"},
			{"Answer" : "Cash flow", "Value" : "7"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "0"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "8"},
			{"Answer" : "Governmental regulation", "Value" : "23"},
			{"Answer" : "Taxation", "Value" : "14"},
			{"Answer" : "Foreign competition", "Value" : "4"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "2"},
			{"Answer" : "Adverse economic conditions", "Value" : "15"},
			{"Answer" : "Health care costs", "Value" : "18"},
			{"Answer" : "Global political instability", "Value" : "1"},
			{"Answer" : "Rising supplier costs", "Value" : "3"},
			{"Answer" : "Human resources", "Value" : "3"},
			{"Answer" : "Cash flow", "Value" : "6"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "6"},
			{"Answer" : "Governmental regulation", "Value" : "24"},
			{"Answer" : "Taxation", "Value" : "12"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "3"},
			{"Answer" : "Risk management", "Value" : "1"},
			{"Answer" : "Adverse economic conditions", "Value" : "24"},
			{"Answer" : "Health care costs", "Value" : "11"},
			{"Answer" : "Global political instability", "Value" : "1"},
			{"Answer" : "Rising supplier costs", "Value" : "2"},
			{"Answer" : "Human resources", "Value" : "2"},
			{"Answer" : "Cash flow", "Value" : "6"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "2"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "8"},
			{"Answer" : "Governmental regulation", "Value" : "19"},
			{"Answer" : "Taxation", "Value" : "10"},
			{"Answer" : "Foreign competition", "Value" : "0"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "1"},
			{"Answer" : "Adverse economic conditions", "Value" : "18"},
			{"Answer" : "Health care costs", "Value" : "19"},
			{"Answer" : "Global political instability", "Value" : "3"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "13"},
			{"Answer" : "Cash flow", "Value" : "5"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "2"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "4"},
			{"Answer" : "Governmental regulation", "Value" : "30"},
			{"Answer" : "Taxation", "Value" : "9"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "3"},
			{"Answer" : "Risk management", "Value" : "2"},
			{"Answer" : "Adverse economic conditions", "Value" : "12"},
			{"Answer" : "Health care costs", "Value" : "15"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "2"},
			{"Answer" : "Human resources", "Value" : "9"},
			{"Answer" : "Cash flow", "Value" : "3"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "6"},
			{"Answer" : "Governmental regulation", "Value" : "26"},
			{"Answer" : "Taxation", "Value" : "12"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "3"},
			{"Answer" : "Adverse economic conditions", "Value" : "13"},
			{"Answer" : "Health care costs", "Value" : "21"},
			{"Answer" : "Global political instability", "Value" : "1"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "5"},
			{"Answer" : "Cash flow", "Value" : "3"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "9"},
			{"Answer" : "Governmental regulation", "Value" : "33"},
			{"Answer" : "Taxation", "Value" : "15"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "0"},
			{"Answer" : "Risk management", "Value" : "4"},
			{"Answer" : "Adverse economic conditions", "Value" : "11"},
			{"Answer" : "Health care costs", "Value" : "13"},
			{"Answer" : "Global political instability", "Value" : "0"},
			{"Answer" : "Rising supplier costs", "Value" : "0"},
			{"Answer" : "Human resources", "Value" : "4"},
			{"Answer" : "Cash flow", "Value" : "5"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "0"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "7"},
			{"Answer" : "Governmental regulation", "Value" : "25"},
			{"Answer" : "Taxation", "Value" : "6"},
			{"Answer" : "Foreign competition", "Value" : "1"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "6"},
			{"Answer" : "Adverse economic conditions", "Value" : "12"},
			{"Answer" : "Health care costs", "Value" : "19"},
			{"Answer" : "Global political instability", "Value" : "3"},
			{"Answer" : "Rising supplier costs", "Value" : "2"},
			{"Answer" : "Human resources", "Value" : "12"},
			{"Answer" : "Cash flow", "Value" : "3"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "9"},
			{"Answer" : "Governmental regulation", "Value" : "23"},
			{"Answer" : "Taxation", "Value" : "12"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "1"},
			{"Answer" : "Adverse economic conditions", "Value" : "14"},
			{"Answer" : "Health care costs", "Value" : "14"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "8"},
			{"Answer" : "Cash flow", "Value" : "6"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "2"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "2"},
			{"Answer" : "Governmental regulation", "Value" : "33"},
			{"Answer" : "Taxation", "Value" : "14"},
			{"Answer" : "Foreign competition", "Value" : "2"},
			{"Answer" : "Energy costs", "Value" : "2"},
			{"Answer" : "Risk management", "Value" : "1"},
			{"Answer" : "Adverse economic conditions", "Value" : "15"},
			{"Answer" : "Health care costs", "Value" : "22"},
			{"Answer" : "Global political instability", "Value" : "0"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "4"},
			{"Answer" : "Cash flow", "Value" : "2"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "0"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "6"},
			{"Answer" : "Governmental regulation", "Value" : "23"},
			{"Answer" : "Taxation", "Value" : "13"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "3"},
			{"Answer" : "Adverse economic conditions", "Value" : "16"},
			{"Answer" : "Health care costs", "Value" : "17"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "2"},
			{"Answer" : "Human resources", "Value" : "6"},
			{"Answer" : "Cash flow", "Value" : "4"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "12"},
			{"Answer" : "Governmental regulation", "Value" : "20"},
			{"Answer" : "Taxation", "Value" : "10"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "3"},
			{"Answer" : "Adverse economic conditions", "Value" : "12"},
			{"Answer" : "Health care costs", "Value" : "19"},
			{"Answer" : "Global political instability", "Value" : "1"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "10"},
			{"Answer" : "Cash flow", "Value" : "4"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "2"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "4"},
			{"Answer" : "Governmental regulation", "Value" : "36"},
			{"Answer" : "Taxation", "Value" : "8"},
			{"Answer" : "Foreign competition", "Value" : "1"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "1"},
			{"Answer" : "Adverse economic conditions", "Value" : "10"},
			{"Answer" : "Health care costs", "Value" : "16"},
			{"Answer" : "Global political instability", "Value" : "1"},
			{"Answer" : "Rising supplier costs", "Value" : "0"},
			{"Answer" : "Human resources", "Value" : "12"},
			{"Answer" : "Cash flow", "Value" : "3"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "6"},
			{"Answer" : "Governmental regulation", "Value" : "24"},
			{"Answer" : "Taxation", "Value" : "9"},
			{"Answer" : "Foreign competition", "Value" : "0"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "7"},
			{"Answer" : "Adverse economic conditions", "Value" : "17"},
			{"Answer" : "Health care costs", "Value" : "15"},
			{"Answer" : "Global political instability", "Value" : "1"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "11"},
			{"Answer" : "Cash flow", "Value" : "2"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "0"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "6"},
			{"Answer" : "Governmental regulation", "Value" : "20"},
			{"Answer" : "Taxation", "Value" : "12"},
			{"Answer" : "Foreign competition", "Value" : "8"},
			{"Answer" : "Energy costs", "Value" : "1"},
			{"Answer" : "Risk management", "Value" : "1"},
			{"Answer" : "Adverse economic conditions", "Value" : "18"},
			{"Answer" : "Health care costs", "Value" : "19"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "0"},
			{"Answer" : "Human resources", "Value" : "6"},
			{"Answer" : "Cash flow", "Value" : "4"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "6"},
			{"Answer" : "Governmental regulation", "Value" : "23"},
			{"Answer" : "Taxation", "Value" : "9"},
			{"Answer" : "Foreign competition", "Value" : "0"},
			{"Answer" : "Energy costs", "Value" : "3"},
			{"Answer" : "Risk management", "Value" : "2"},
			{"Answer" : "Adverse economic conditions", "Value" : "14"},
			{"Answer" : "Health care costs", "Value" : "20"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "5"},
			{"Answer" : "Human resources", "Value" : "8"},
			{"Answer" : "Cash flow", "Value" : "5"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "2"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "7"},
			{"Answer" : "Governmental regulation", "Value" : "36"},
			{"Answer" : "Taxation", "Value" : "10"},
			{"Answer" : "Foreign competition", "Value" : "1"},
			{"Answer" : "Energy costs", "Value" : "0"},
			{"Answer" : "Risk management", "Value" : "1"},
			{"Answer" : "Adverse economic conditions", "Value" : "6"},
			{"Answer" : "Health care costs", "Value" : "16"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "1"},
			{"Answer" : "Human resources", "Value" : "11"},
			{"Answer" : "Cash flow", "Value" : "4"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "1"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Existing U.S. competition", "Value" : "15"},
			{"Answer" : "Governmental regulation", "Value" : "17"},
			{"Answer" : "Taxation", "Value" : "18"},
			{"Answer" : "Foreign competition", "Value" : "3"},
			{"Answer" : "Energy costs", "Value" : "2"},
			{"Answer" : "Risk management", "Value" : "0"},
			{"Answer" : "Adverse economic conditions", "Value" : "17"},
			{"Answer" : "Health care costs", "Value" : "17"},
			{"Answer" : "Global political instability", "Value" : "2"},
			{"Answer" : "Rising supplier costs", "Value" : "0"},
			{"Answer" : "Human resources", "Value" : "3"},
			{"Answer" : "Cash flow", "Value" : "3"},
			{"Answer" : "Ability to obtain suitable financing", "Value" : "2"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q15. Thinking specifically about New York and the relationship between the state government and businesses like yours, overall would you say the government of the State of New York is doing an excellent, good, fair or poor job of creating a business climate in which companies like yours will succeed?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "29"},
			{"Answer" : "Poor", "Value" : "64"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "30"},
			{"Answer" : "Poor", "Value" : "63"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "7"},
			{"Answer" : "Fair", "Value" : "26"},
			{"Answer" : "Poor", "Value" : "65"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "9"},
			{"Answer" : "Fair", "Value" : "34"},
			{"Answer" : "Poor", "Value" : "55"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "62"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "6"},
			{"Answer" : "Fair", "Value" : "26"},
			{"Answer" : "Poor", "Value" : "62"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "24"},
			{"Answer" : "Poor", "Value" : "70"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "58"},
			{"Answer" : "Don't know", "Value" : "5"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "6"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "45"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "32"},
			{"Answer" : "Poor", "Value" : "61"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "5"},
			{"Answer" : "Poor", "Value" : "92"},
			{"Answer" : "Don't know", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "28"},
			{"Answer" : "Poor", "Value" : "63"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "60"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "5"},
			{"Answer" : "Fair", "Value" : "27"},
			{"Answer" : "Poor", "Value" : "66"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "38"},
			{"Answer" : "Poor", "Value" : "57"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "7"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "56"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "28"},
			{"Answer" : "Poor", "Value" : "65"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "21"},
			{"Answer" : "Poor", "Value" : "72"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "27"},
			{"Answer" : "Poor", "Value" : "70"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q16. Of the following, what would you like to see the Governor and Legislature of New York focus on?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "54"},
			{"Answer" : "Business Income Tax Reform", "Value" : "63"},
			{"Answer" : "Estate Tax Reform", "Value" : "34"},
			{"Answer" : "Spending Cuts", "Value" : "58"},
			{"Answer" : "Infrastructure Development", "Value" : "42"},
			{"Answer" : "Business Development Incentives", "Value" : "36"},
			{"Answer" : "Ethics Reform", "Value" : "42"},
			{"Answer" : "Sales Tax Reform", "Value" : "25"},
			{"Answer" : "Other", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "0"},
			{"Answer" : "Business Income Tax Reform", "Value" : "0"},
			{"Answer" : "Estate Tax Reform", "Value" : "0"},
			{"Answer" : "Spending Cuts", "Value" : "64"},
			{"Answer" : "Infrastructure Development", "Value" : "42"},
			{"Answer" : "Business Development Incentives", "Value" : "38"},
			{"Answer" : "Ethics Reform", "Value" : "40"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "0"},
			{"Answer" : "Business Income Tax Reform", "Value" : "0"},
			{"Answer" : "Estate Tax Reform", "Value" : "0"},
			{"Answer" : "Spending Cuts", "Value" : "72"},
			{"Answer" : "Infrastructure Development", "Value" : "32"},
			{"Answer" : "Business Development Incentives", "Value" : "43"},
			{"Answer" : "Ethics Reform", "Value" : "39"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "0"},
			{"Answer" : "Business Income Tax Reform", "Value" : "0"},
			{"Answer" : "Estate Tax Reform", "Value" : "0"},
			{"Answer" : "Spending Cuts", "Value" : "74"},
			{"Answer" : "Infrastructure Development", "Value" : "37"},
			{"Answer" : "Business Development Incentives", "Value" : "47"},
			{"Answer" : "Ethics Reform", "Value" : "35"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "49"},
			{"Answer" : "Business Income Tax Reform", "Value" : "59"},
			{"Answer" : "Estate Tax Reform", "Value" : "32"},
			{"Answer" : "Spending Cuts", "Value" : "50"},
			{"Answer" : "Infrastructure Development", "Value" : "48"},
			{"Answer" : "Business Development Incentives", "Value" : "34"},
			{"Answer" : "Ethics Reform", "Value" : "46"},
			{"Answer" : "Sales Tax Reform", "Value" : "23"},
			{"Answer" : "Other", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "58"},
			{"Answer" : "Business Income Tax Reform", "Value" : "68"},
			{"Answer" : "Estate Tax Reform", "Value" : "34"},
			{"Answer" : "Spending Cuts", "Value" : "65"},
			{"Answer" : "Infrastructure Development", "Value" : "35"},
			{"Answer" : "Business Development Incentives", "Value" : "32"},
			{"Answer" : "Ethics Reform", "Value" : "41"},
			{"Answer" : "Sales Tax Reform", "Value" : "32"},
			{"Answer" : "Other", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "57"},
			{"Answer" : "Business Income Tax Reform", "Value" : "63"},
			{"Answer" : "Estate Tax Reform", "Value" : "33"},
			{"Answer" : "Spending Cuts", "Value" : "62"},
			{"Answer" : "Infrastructure Development", "Value" : "40"},
			{"Answer" : "Business Development Incentives", "Value" : "38"},
			{"Answer" : "Ethics Reform", "Value" : "40"},
			{"Answer" : "Sales Tax Reform", "Value" : "25"},
			{"Answer" : "Other", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "52"},
			{"Answer" : "Business Income Tax Reform", "Value" : "63"},
			{"Answer" : "Estate Tax Reform", "Value" : "37"},
			{"Answer" : "Spending Cuts", "Value" : "54"},
			{"Answer" : "Infrastructure Development", "Value" : "49"},
			{"Answer" : "Business Development Incentives", "Value" : "43"},
			{"Answer" : "Ethics Reform", "Value" : "42"},
			{"Answer" : "Sales Tax Reform", "Value" : "20"},
			{"Answer" : "Other", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "54"},
			{"Answer" : "Business Income Tax Reform", "Value" : "54"},
			{"Answer" : "Estate Tax Reform", "Value" : "27"},
			{"Answer" : "Spending Cuts", "Value" : "48"},
			{"Answer" : "Infrastructure Development", "Value" : "52"},
			{"Answer" : "Business Development Incentives", "Value" : "41"},
			{"Answer" : "Ethics Reform", "Value" : "35"},
			{"Answer" : "Sales Tax Reform", "Value" : "21"},
			{"Answer" : "Other", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "54"},
			{"Answer" : "Business Income Tax Reform", "Value" : "68"},
			{"Answer" : "Estate Tax Reform", "Value" : "35"},
			{"Answer" : "Spending Cuts", "Value" : "59"},
			{"Answer" : "Infrastructure Development", "Value" : "40"},
			{"Answer" : "Business Development Incentives", "Value" : "38"},
			{"Answer" : "Ethics Reform", "Value" : "42"},
			{"Answer" : "Sales Tax Reform", "Value" : "22"},
			{"Answer" : "Other", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "56"},
			{"Answer" : "Business Income Tax Reform", "Value" : "67"},
			{"Answer" : "Estate Tax Reform", "Value" : "39"},
			{"Answer" : "Spending Cuts", "Value" : "69"},
			{"Answer" : "Infrastructure Development", "Value" : "33"},
			{"Answer" : "Business Development Incentives", "Value" : "25"},
			{"Answer" : "Ethics Reform", "Value" : "51"},
			{"Answer" : "Sales Tax Reform", "Value" : "37"},
			{"Answer" : "Other", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "57"},
			{"Answer" : "Business Income Tax Reform", "Value" : "68"},
			{"Answer" : "Estate Tax Reform", "Value" : "33"},
			{"Answer" : "Spending Cuts", "Value" : "59"},
			{"Answer" : "Infrastructure Development", "Value" : "44"},
			{"Answer" : "Business Development Incentives", "Value" : "36"},
			{"Answer" : "Ethics Reform", "Value" : "47"},
			{"Answer" : "Sales Tax Reform", "Value" : "26"},
			{"Answer" : "Other", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "54"},
			{"Answer" : "Business Income Tax Reform", "Value" : "64"},
			{"Answer" : "Estate Tax Reform", "Value" : "37"},
			{"Answer" : "Spending Cuts", "Value" : "59"},
			{"Answer" : "Infrastructure Development", "Value" : "45"},
			{"Answer" : "Business Development Incentives", "Value" : "37"},
			{"Answer" : "Ethics Reform", "Value" : "40"},
			{"Answer" : "Sales Tax Reform", "Value" : "26"},
			{"Answer" : "Other", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "50"},
			{"Answer" : "Business Income Tax Reform", "Value" : "54"},
			{"Answer" : "Estate Tax Reform", "Value" : "31"},
			{"Answer" : "Spending Cuts", "Value" : "56"},
			{"Answer" : "Infrastructure Development", "Value" : "37"},
			{"Answer" : "Business Development Incentives", "Value" : "36"},
			{"Answer" : "Ethics Reform", "Value" : "34"},
			{"Answer" : "Sales Tax Reform", "Value" : "23"},
			{"Answer" : "Other", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "52"},
			{"Answer" : "Business Income Tax Reform", "Value" : "57"},
			{"Answer" : "Estate Tax Reform", "Value" : "34"},
			{"Answer" : "Spending Cuts", "Value" : "49"},
			{"Answer" : "Infrastructure Development", "Value" : "62"},
			{"Answer" : "Business Development Incentives", "Value" : "38"},
			{"Answer" : "Ethics Reform", "Value" : "38"},
			{"Answer" : "Sales Tax Reform", "Value" : "23"},
			{"Answer" : "Other", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "53"},
			{"Answer" : "Business Income Tax Reform", "Value" : "62"},
			{"Answer" : "Estate Tax Reform", "Value" : "37"},
			{"Answer" : "Spending Cuts", "Value" : "62"},
			{"Answer" : "Infrastructure Development", "Value" : "37"},
			{"Answer" : "Business Development Incentives", "Value" : "42"},
			{"Answer" : "Ethics Reform", "Value" : "48"},
			{"Answer" : "Sales Tax Reform", "Value" : "26"},
			{"Answer" : "Other", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "65"},
			{"Answer" : "Business Income Tax Reform", "Value" : "63"},
			{"Answer" : "Estate Tax Reform", "Value" : "34"},
			{"Answer" : "Spending Cuts", "Value" : "62"},
			{"Answer" : "Infrastructure Development", "Value" : "37"},
			{"Answer" : "Business Development Incentives", "Value" : "20"},
			{"Answer" : "Ethics Reform", "Value" : "40"},
			{"Answer" : "Sales Tax Reform", "Value" : "32"},
			{"Answer" : "Other", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "50"},
			{"Answer" : "Business Income Tax Reform", "Value" : "61"},
			{"Answer" : "Estate Tax Reform", "Value" : "31"},
			{"Answer" : "Spending Cuts", "Value" : "57"},
			{"Answer" : "Infrastructure Development", "Value" : "41"},
			{"Answer" : "Business Development Incentives", "Value" : "35"},
			{"Answer" : "Ethics Reform", "Value" : "44"},
			{"Answer" : "Sales Tax Reform", "Value" : "26"},
			{"Answer" : "Other", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "67"},
			{"Answer" : "Business Income Tax Reform", "Value" : "78"},
			{"Answer" : "Estate Tax Reform", "Value" : "42"},
			{"Answer" : "Spending Cuts", "Value" : "65"},
			{"Answer" : "Infrastructure Development", "Value" : "45"},
			{"Answer" : "Business Development Incentives", "Value" : "38"},
			{"Answer" : "Ethics Reform", "Value" : "38"},
			{"Answer" : "Sales Tax Reform", "Value" : "22"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q17. Of those, which SINGLE area would you most like to see the Governor and Legislature focus on? ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "12"},
			{"Answer" : "Business Income Tax Reform", "Value" : "18"},
			{"Answer" : "Estate Tax Reform", "Value" : "2"},
			{"Answer" : "Spending Cuts", "Value" : "21"},
			{"Answer" : "Infrastructure Development", "Value" : "14"},
			{"Answer" : "Business Development Incentives", "Value" : "10"},
			{"Answer" : "Ethics Reform", "Value" : "11"},
			{"Answer" : "Sales Tax Reform", "Value" : "3"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "0"},
			{"Answer" : "Business Income Tax Reform", "Value" : "0"},
			{"Answer" : "Estate Tax Reform", "Value" : "0"},
			{"Answer" : "Spending Cuts", "Value" : "31"},
			{"Answer" : "Infrastructure Development", "Value" : "15"},
			{"Answer" : "Business Development Incentives", "Value" : "11"},
			{"Answer" : "Ethics Reform", "Value" : "9"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "0"},
			{"Answer" : "Business Income Tax Reform", "Value" : "0"},
			{"Answer" : "Estate Tax Reform", "Value" : "0"},
			{"Answer" : "Spending Cuts", "Value" : "35"},
			{"Answer" : "Infrastructure Development", "Value" : "9"},
			{"Answer" : "Business Development Incentives", "Value" : "15"},
			{"Answer" : "Ethics Reform", "Value" : "6"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "0"},
			{"Answer" : "Business Income Tax Reform", "Value" : "0"},
			{"Answer" : "Estate Tax Reform", "Value" : "0"},
			{"Answer" : "Spending Cuts", "Value" : "40"},
			{"Answer" : "Infrastructure Development", "Value" : "10"},
			{"Answer" : "Business Development Incentives", "Value" : "13"},
			{"Answer" : "Ethics Reform", "Value" : "5"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "13"},
			{"Answer" : "Business Income Tax Reform", "Value" : "15"},
			{"Answer" : "Estate Tax Reform", "Value" : "1"},
			{"Answer" : "Spending Cuts", "Value" : "18"},
			{"Answer" : "Infrastructure Development", "Value" : "22"},
			{"Answer" : "Business Development Incentives", "Value" : "8"},
			{"Answer" : "Ethics Reform", "Value" : "14"},
			{"Answer" : "Sales Tax Reform", "Value" : "3"},
			{"Answer" : "Other", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "11"},
			{"Answer" : "Business Income Tax Reform", "Value" : "19"},
			{"Answer" : "Estate Tax Reform", "Value" : "5"},
			{"Answer" : "Spending Cuts", "Value" : "24"},
			{"Answer" : "Infrastructure Development", "Value" : "9"},
			{"Answer" : "Business Development Incentives", "Value" : "7"},
			{"Answer" : "Ethics Reform", "Value" : "10"},
			{"Answer" : "Sales Tax Reform", "Value" : "3"},
			{"Answer" : "Other", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "11"},
			{"Answer" : "Business Income Tax Reform", "Value" : "22"},
			{"Answer" : "Estate Tax Reform", "Value" : "3"},
			{"Answer" : "Spending Cuts", "Value" : "22"},
			{"Answer" : "Infrastructure Development", "Value" : "10"},
			{"Answer" : "Business Development Incentives", "Value" : "10"},
			{"Answer" : "Ethics Reform", "Value" : "12"},
			{"Answer" : "Sales Tax Reform", "Value" : "2"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "13"},
			{"Answer" : "Business Income Tax Reform", "Value" : "16"},
			{"Answer" : "Estate Tax Reform", "Value" : "1"},
			{"Answer" : "Spending Cuts", "Value" : "20"},
			{"Answer" : "Infrastructure Development", "Value" : "15"},
			{"Answer" : "Business Development Incentives", "Value" : "18"},
			{"Answer" : "Ethics Reform", "Value" : "4"},
			{"Answer" : "Sales Tax Reform", "Value" : "1"},
			{"Answer" : "Other", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "14"},
			{"Answer" : "Business Income Tax Reform", "Value" : "12"},
			{"Answer" : "Estate Tax Reform", "Value" : "3"},
			{"Answer" : "Spending Cuts", "Value" : "18"},
			{"Answer" : "Infrastructure Development", "Value" : "22"},
			{"Answer" : "Business Development Incentives", "Value" : "11"},
			{"Answer" : "Ethics Reform", "Value" : "11"},
			{"Answer" : "Sales Tax Reform", "Value" : "2"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "12"},
			{"Answer" : "Business Income Tax Reform", "Value" : "20"},
			{"Answer" : "Estate Tax Reform", "Value" : "2"},
			{"Answer" : "Spending Cuts", "Value" : "20"},
			{"Answer" : "Infrastructure Development", "Value" : "14"},
			{"Answer" : "Business Development Incentives", "Value" : "10"},
			{"Answer" : "Ethics Reform", "Value" : "10"},
			{"Answer" : "Sales Tax Reform", "Value" : "3"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "9"},
			{"Answer" : "Business Income Tax Reform", "Value" : "23"},
			{"Answer" : "Estate Tax Reform", "Value" : "4"},
			{"Answer" : "Spending Cuts", "Value" : "28"},
			{"Answer" : "Infrastructure Development", "Value" : "4"},
			{"Answer" : "Business Development Incentives", "Value" : "8"},
			{"Answer" : "Ethics Reform", "Value" : "11"},
			{"Answer" : "Sales Tax Reform", "Value" : "3"},
			{"Answer" : "Other", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "10"},
			{"Answer" : "Business Income Tax Reform", "Value" : "21"},
			{"Answer" : "Estate Tax Reform", "Value" : "1"},
			{"Answer" : "Spending Cuts", "Value" : "23"},
			{"Answer" : "Infrastructure Development", "Value" : "12"},
			{"Answer" : "Business Development Incentives", "Value" : "9"},
			{"Answer" : "Ethics Reform", "Value" : "12"},
			{"Answer" : "Sales Tax Reform", "Value" : "4"},
			{"Answer" : "Other", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "12"},
			{"Answer" : "Business Income Tax Reform", "Value" : "17"},
			{"Answer" : "Estate Tax Reform", "Value" : "5"},
			{"Answer" : "Spending Cuts", "Value" : "19"},
			{"Answer" : "Infrastructure Development", "Value" : "19"},
			{"Answer" : "Business Development Incentives", "Value" : "11"},
			{"Answer" : "Ethics Reform", "Value" : "11"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "15"},
			{"Answer" : "Business Income Tax Reform", "Value" : "15"},
			{"Answer" : "Estate Tax Reform", "Value" : "3"},
			{"Answer" : "Spending Cuts", "Value" : "21"},
			{"Answer" : "Infrastructure Development", "Value" : "14"},
			{"Answer" : "Business Development Incentives", "Value" : "12"},
			{"Answer" : "Ethics Reform", "Value" : "7"},
			{"Answer" : "Sales Tax Reform", "Value" : "1"},
			{"Answer" : "Other", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "11"},
			{"Answer" : "Business Income Tax Reform", "Value" : "7"},
			{"Answer" : "Estate Tax Reform", "Value" : "2"},
			{"Answer" : "Spending Cuts", "Value" : "21"},
			{"Answer" : "Infrastructure Development", "Value" : "33"},
			{"Answer" : "Business Development Incentives", "Value" : "9"},
			{"Answer" : "Ethics Reform", "Value" : "6"},
			{"Answer" : "Sales Tax Reform", "Value" : "1"},
			{"Answer" : "Other", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "10"},
			{"Answer" : "Business Income Tax Reform", "Value" : "18"},
			{"Answer" : "Estate Tax Reform", "Value" : "3"},
			{"Answer" : "Spending Cuts", "Value" : "21"},
			{"Answer" : "Infrastructure Development", "Value" : "12"},
			{"Answer" : "Business Development Incentives", "Value" : "13"},
			{"Answer" : "Ethics Reform", "Value" : "12"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "11"},
			{"Answer" : "Business Income Tax Reform", "Value" : "20"},
			{"Answer" : "Estate Tax Reform", "Value" : "3"},
			{"Answer" : "Spending Cuts", "Value" : "28"},
			{"Answer" : "Infrastructure Development", "Value" : "9"},
			{"Answer" : "Business Development Incentives", "Value" : "5"},
			{"Answer" : "Ethics Reform", "Value" : "11"},
			{"Answer" : "Sales Tax Reform", "Value" : "9"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "10"},
			{"Answer" : "Business Income Tax Reform", "Value" : "18"},
			{"Answer" : "Estate Tax Reform", "Value" : "1"},
			{"Answer" : "Spending Cuts", "Value" : "17"},
			{"Answer" : "Infrastructure Development", "Value" : "10"},
			{"Answer" : "Business Development Incentives", "Value" : "11"},
			{"Answer" : "Ethics Reform", "Value" : "16"},
			{"Answer" : "Sales Tax Reform", "Value" : "4"},
			{"Answer" : "Other", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Personal Income Tax Reform", "Value" : "18"},
			{"Answer" : "Business Income Tax Reform", "Value" : "37"},
			{"Answer" : "Estate Tax Reform", "Value" : "5"},
			{"Answer" : "Spending Cuts", "Value" : "20"},
			{"Answer" : "Infrastructure Development", "Value" : "8"},
			{"Answer" : "Business Development Incentives", "Value" : "5"},
			{"Answer" : "Ethics Reform", "Value" : "5"},
			{"Answer" : "Sales Tax Reform", "Value" : "0"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q18. How confident are you in the ability of the government of the State of New York to improve the  business climate for businesses like yours here in New York over the next year?  Are you…?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "12"},
			{"Answer" : "Not very confident", "Value" : "50"},
			{"Answer" : "Not at all confident", "Value" : "37"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "12"},
			{"Answer" : "Not very confident", "Value" : "47"},
			{"Answer" : "Not at all confident", "Value" : "38"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "15"},
			{"Answer" : "Not very confident", "Value" : "48"},
			{"Answer" : "Not at all confident", "Value" : "37"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Very confident", "Value" : "2"},
			{"Answer" : "Somewhat confident", "Value" : "23"},
			{"Answer" : "Not very confident", "Value" : "44"},
			{"Answer" : "Not at all confident", "Value" : "31"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "13"},
			{"Answer" : "Not very confident", "Value" : "52"},
			{"Answer" : "Not at all confident", "Value" : "34"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "14"},
			{"Answer" : "Not very confident", "Value" : "50"},
			{"Answer" : "Not at all confident", "Value" : "33"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "8"},
			{"Answer" : "Not very confident", "Value" : "46"},
			{"Answer" : "Not at all confident", "Value" : "46"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "13"},
			{"Answer" : "Not very confident", "Value" : "53"},
			{"Answer" : "Not at all confident", "Value" : "32"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very confident", "Value" : "2"},
			{"Answer" : "Somewhat confident", "Value" : "24"},
			{"Answer" : "Not very confident", "Value" : "54"},
			{"Answer" : "Not at all confident", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "9"},
			{"Answer" : "Not very confident", "Value" : "54"},
			{"Answer" : "Not at all confident", "Value" : "35"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "3"},
			{"Answer" : "Not very confident", "Value" : "36"},
			{"Answer" : "Not at all confident", "Value" : "60"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "13"},
			{"Answer" : "Not very confident", "Value" : "50"},
			{"Answer" : "Not at all confident", "Value" : "36"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "10"},
			{"Answer" : "Not very confident", "Value" : "53"},
			{"Answer" : "Not at all confident", "Value" : "37"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "12"},
			{"Answer" : "Not very confident", "Value" : "47"},
			{"Answer" : "Not at all confident", "Value" : "38"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "16"},
			{"Answer" : "Not very confident", "Value" : "57"},
			{"Answer" : "Not at all confident", "Value" : "26"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "14"},
			{"Answer" : "Not very confident", "Value" : "46"},
			{"Answer" : "Not at all confident", "Value" : "39"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very confident", "Value" : "3"},
			{"Answer" : "Somewhat confident", "Value" : "9"},
			{"Answer" : "Not very confident", "Value" : "55"},
			{"Answer" : "Not at all confident", "Value" : "32"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "9"},
			{"Answer" : "Not very confident", "Value" : "46"},
			{"Answer" : "Not at all confident", "Value" : "43"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very confident", "Value" : "2"},
			{"Answer" : "Somewhat confident", "Value" : "10"},
			{"Answer" : "Not very confident", "Value" : "45"},
			{"Answer" : "Not at all confident", "Value" : "42"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q19. And thinking about the efforts of the federal government, overall would you say the federal government is doing an excellent, good, fair or poor job of creating a business climate in which companies like yours will succeed?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "22"},
			{"Answer" : "Poor", "Value" : "73"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "21"},
			{"Answer" : "Poor", "Value" : "72"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "18"},
			{"Answer" : "Poor", "Value" : "76"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "6"},
			{"Answer" : "Fair", "Value" : "21"},
			{"Answer" : "Poor", "Value" : "71"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "31"},
			{"Answer" : "Poor", "Value" : "65"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "17"},
			{"Answer" : "Poor", "Value" : "78"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "22"},
			{"Answer" : "Poor", "Value" : "74"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "19"},
			{"Answer" : "Poor", "Value" : "77"},
			{"Answer" : "Don't know", "Value" : "4"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "61"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "23"},
			{"Answer" : "Poor", "Value" : "72"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "6"},
			{"Answer" : "Poor", "Value" : "90"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "23"},
			{"Answer" : "Poor", "Value" : "74"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "4"},
			{"Answer" : "Fair", "Value" : "26"},
			{"Answer" : "Poor", "Value" : "68"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "1"},
			{"Answer" : "Fair", "Value" : "20"},
			{"Answer" : "Poor", "Value" : "76"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "30"},
			{"Answer" : "Poor", "Value" : "63"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "21"},
			{"Answer" : "Poor", "Value" : "76"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "2"},
			{"Answer" : "Fair", "Value" : "15"},
			{"Answer" : "Poor", "Value" : "83"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "3"},
			{"Answer" : "Fair", "Value" : "20"},
			{"Answer" : "Poor", "Value" : "74"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "18"},
			{"Answer" : "Poor", "Value" : "78"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q20. How confident are you in the ability of the federal government to improve the business climate for businesses like yours here in New York over the next year?  Are you:", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "7"},
			{"Answer" : "Not very confident", "Value" : "50"},
			{"Answer" : "Not at all confident", "Value" : "41"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "8"},
			{"Answer" : "Not very confident", "Value" : "45"},
			{"Answer" : "Not at all confident", "Value" : "44"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "7"},
			{"Answer" : "Not very confident", "Value" : "46"},
			{"Answer" : "Not at all confident", "Value" : "46"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "13"},
			{"Answer" : "Not very confident", "Value" : "42"},
			{"Answer" : "Not at all confident", "Value" : "43"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "8"},
			{"Answer" : "Not very confident", "Value" : "56"},
			{"Answer" : "Not at all confident", "Value" : "35"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "5"},
			{"Answer" : "Not very confident", "Value" : "47"},
			{"Answer" : "Not at all confident", "Value" : "47"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "10"},
			{"Answer" : "Not very confident", "Value" : "47"},
			{"Answer" : "Not at all confident", "Value" : "43"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "4"},
			{"Answer" : "Not very confident", "Value" : "53"},
			{"Answer" : "Not at all confident", "Value" : "41"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very confident", "Value" : "1"},
			{"Answer" : "Somewhat confident", "Value" : "13"},
			{"Answer" : "Not very confident", "Value" : "58"},
			{"Answer" : "Not at all confident", "Value" : "28"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "6"},
			{"Answer" : "Not very confident", "Value" : "56"},
			{"Answer" : "Not at all confident", "Value" : "37"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "2"},
			{"Answer" : "Not very confident", "Value" : "30"},
			{"Answer" : "Not at all confident", "Value" : "66"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "8"},
			{"Answer" : "Not very confident", "Value" : "49"},
			{"Answer" : "Not at all confident", "Value" : "42"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "6"},
			{"Answer" : "Not very confident", "Value" : "52"},
			{"Answer" : "Not at all confident", "Value" : "42"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "5"},
			{"Answer" : "Not very confident", "Value" : "52"},
			{"Answer" : "Not at all confident", "Value" : "39"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "13"},
			{"Answer" : "Not very confident", "Value" : "53"},
			{"Answer" : "Not at all confident", "Value" : "33"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "7"},
			{"Answer" : "Not very confident", "Value" : "46"},
			{"Answer" : "Not at all confident", "Value" : "47"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "5"},
			{"Answer" : "Not very confident", "Value" : "57"},
			{"Answer" : "Not at all confident", "Value" : "38"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very confident", "Value" : "0"},
			{"Answer" : "Somewhat confident", "Value" : "6"},
			{"Answer" : "Not very confident", "Value" : "48"},
			{"Answer" : "Not at all confident", "Value" : "44"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very confident", "Value" : "2"},
			{"Answer" : "Somewhat confident", "Value" : "2"},
			{"Answer" : "Not very confident", "Value" : "50"},
			{"Answer" : "Not at all confident", "Value" : "43"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q21A. For each of the following national proposals please indicate whether you support it or oppose it.-Pass Comprehensive Immigration Reform that both secures the borders and provides a path to citizenship for those already in the United States ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "78"},
			{"Answer" : "Oppose", "Value" : "22"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "77"},
			{"Answer" : "Oppose", "Value" : "23"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "72"},
			{"Answer" : "Oppose", "Value" : "28"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "83"},
			{"Answer" : "Oppose", "Value" : "17"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "80"},
			{"Answer" : "Oppose", "Value" : "20"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "79"},
			{"Answer" : "Oppose", "Value" : "21"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "79"},
			{"Answer" : "Oppose", "Value" : "21"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "75"},
			{"Answer" : "Oppose", "Value" : "25"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "74"},
			{"Answer" : "Oppose", "Value" : "26"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "83"},
			{"Answer" : "Oppose", "Value" : "17"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "81"},
			{"Answer" : "Oppose", "Value" : "19"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "77"},
			{"Answer" : "Oppose", "Value" : "23"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "75"},
			{"Answer" : "Oppose", "Value" : "25"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21B. For each of the following national proposals please indicate whether you support it or oppose it.-Pass a Balanced Budget Constitutional Amendment ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "78"},
			{"Answer" : "Oppose", "Value" : "22"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Support", "Value" : "77"},
			{"Answer" : "Oppose", "Value" : "10"},
			{"Answer" : "No opinion", "Value" : "13"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Support", "Value" : "78"},
			{"Answer" : "Oppose", "Value" : "9"},
			{"Answer" : "No opinion", "Value" : "13"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Support", "Value" : "80"},
			{"Answer" : "Oppose", "Value" : "11"},
			{"Answer" : "No opinion", "Value" : "9"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "75"},
			{"Answer" : "Oppose", "Value" : "25"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "76"},
			{"Answer" : "Oppose", "Value" : "24"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "80"},
			{"Answer" : "Oppose", "Value" : "20"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "86"},
			{"Answer" : "Oppose", "Value" : "14"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "77"},
			{"Answer" : "Oppose", "Value" : "23"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "77"},
			{"Answer" : "Oppose", "Value" : "23"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "81"},
			{"Answer" : "Oppose", "Value" : "19"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "80"},
			{"Answer" : "Oppose", "Value" : "20"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "74"},
			{"Answer" : "Oppose", "Value" : "26"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "77"},
			{"Answer" : "Oppose", "Value" : "23"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "79"},
			{"Answer" : "Oppose", "Value" : "21"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "78"},
			{"Answer" : "Oppose", "Value" : "22"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "83"},
			{"Answer" : "Oppose", "Value" : "17"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "72"},
			{"Answer" : "Oppose", "Value" : "28"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "87"},
			{"Answer" : "Oppose", "Value" : "13"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21C. For each of the following national proposals please indicate whether you support it or oppose it.-Increase Federal Spending on Infrastructure ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "63"},
			{"Answer" : "Oppose", "Value" : "37"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Support", "Value" : "62"},
			{"Answer" : "Oppose", "Value" : "18"},
			{"Answer" : "No opinion", "Value" : "19"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Support", "Value" : "47"},
			{"Answer" : "Oppose", "Value" : "30"},
			{"Answer" : "No opinion", "Value" : "23"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Support", "Value" : "49"},
			{"Answer" : "Oppose", "Value" : "35"},
			{"Answer" : "No opinion", "Value" : "17"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "69"},
			{"Answer" : "Oppose", "Value" : "31"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "66"},
			{"Answer" : "Oppose", "Value" : "34"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "55"},
			{"Answer" : "Oppose", "Value" : "45"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "58"},
			{"Answer" : "Oppose", "Value" : "42"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "74"},
			{"Answer" : "Oppose", "Value" : "26"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "64"},
			{"Answer" : "Oppose", "Value" : "36"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "46"},
			{"Answer" : "Oppose", "Value" : "54"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "62"},
			{"Answer" : "Oppose", "Value" : "38"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "65"},
			{"Answer" : "Oppose", "Value" : "35"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "64"},
			{"Answer" : "Oppose", "Value" : "36"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "79"},
			{"Answer" : "Oppose", "Value" : "21"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "64"},
			{"Answer" : "Oppose", "Value" : "36"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "62"},
			{"Answer" : "Oppose", "Value" : "38"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "54"},
			{"Answer" : "Oppose", "Value" : "46"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "60"},
			{"Answer" : "Oppose", "Value" : "40"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21D. For each of the following national proposals please indicate whether you support it or oppose it.-Reduce the Corporate Income Tax Rates ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "82"},
			{"Answer" : "Oppose", "Value" : "18"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Support", "Value" : "82"},
			{"Answer" : "Oppose", "Value" : "8"},
			{"Answer" : "No opinion", "Value" : "10"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Support", "Value" : "79"},
			{"Answer" : "Oppose", "Value" : "12"},
			{"Answer" : "No opinion", "Value" : "9"}
		]},
		{"Filter" : "Upstate 2012", "Answers" : [
			{"Answer" : "Support", "Value" : "72"},
			{"Answer" : "Oppose", "Value" : "16"},
			{"Answer" : "No opinion", "Value" : "12"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "75"},
			{"Answer" : "Oppose", "Value" : "25"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "89"},
			{"Answer" : "Oppose", "Value" : "11"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "85"},
			{"Answer" : "Oppose", "Value" : "15"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "78"},
			{"Answer" : "Oppose", "Value" : "22"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "75"},
			{"Answer" : "Oppose", "Value" : "25"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "82"},
			{"Answer" : "Oppose", "Value" : "18"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "91"},
			{"Answer" : "Oppose", "Value" : "9"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "87"},
			{"Answer" : "Oppose", "Value" : "13"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "78"},
			{"Answer" : "Oppose", "Value" : "22"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "74"},
			{"Answer" : "Oppose", "Value" : "26"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "79"},
			{"Answer" : "Oppose", "Value" : "21"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "87"},
			{"Answer" : "Oppose", "Value" : "13"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "83"},
			{"Answer" : "Oppose", "Value" : "17"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "75"},
			{"Answer" : "Oppose", "Value" : "25"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "87"},
			{"Answer" : "Oppose", "Value" : "13"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21E. For each of the following national proposals please indicate whether you support it or oppose it.-Reduce the Corporate Income Tax on Overseas Earnings ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "33"},
			{"Answer" : "Oppose", "Value" : "67"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "31"},
			{"Answer" : "Oppose", "Value" : "69"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "36"},
			{"Answer" : "Oppose", "Value" : "64"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "33"},
			{"Answer" : "Oppose", "Value" : "67"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "30"},
			{"Answer" : "Oppose", "Value" : "70"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "30"},
			{"Answer" : "Oppose", "Value" : "70"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "28"},
			{"Answer" : "Oppose", "Value" : "72"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "48"},
			{"Answer" : "Oppose", "Value" : "52"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "30"},
			{"Answer" : "Oppose", "Value" : "70"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "36"},
			{"Answer" : "Oppose", "Value" : "64"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "36"},
			{"Answer" : "Oppose", "Value" : "64"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "28"},
			{"Answer" : "Oppose", "Value" : "72"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "35"},
			{"Answer" : "Oppose", "Value" : "65"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21F. For each of the following national proposals please indicate whether you support it or oppose it.-Increase the federal minimum wage from $7.25 to $10.10 per hour ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "32"},
			{"Answer" : "Oppose", "Value" : "68"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Support", "Value" : "24"},
			{"Answer" : "Oppose", "Value" : "61"},
			{"Answer" : "No opinion", "Value" : "15"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "42"},
			{"Answer" : "Oppose", "Value" : "58"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "23"},
			{"Answer" : "Oppose", "Value" : "77"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "31"},
			{"Answer" : "Oppose", "Value" : "69"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "30"},
			{"Answer" : "Oppose", "Value" : "70"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "46"},
			{"Answer" : "Oppose", "Value" : "54"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "30"},
			{"Answer" : "Oppose", "Value" : "70"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "18"},
			{"Answer" : "Oppose", "Value" : "82"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "29"},
			{"Answer" : "Oppose", "Value" : "71"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "44"},
			{"Answer" : "Oppose", "Value" : "56"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "28"},
			{"Answer" : "Oppose", "Value" : "72"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "47"},
			{"Answer" : "Oppose", "Value" : "53"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "30"},
			{"Answer" : "Oppose", "Value" : "70"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "25"},
			{"Answer" : "Oppose", "Value" : "75"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21G. For each of the following national proposals please indicate whether you support it or oppose it.-Increase personal federal income tax rates on those earning over $1 million a year ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "38"},
			{"Answer" : "Oppose", "Value" : "62"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "39"},
			{"Answer" : "Oppose", "Value" : "61"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "37"},
			{"Answer" : "Oppose", "Value" : "63"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "36"},
			{"Answer" : "Oppose", "Value" : "64"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "41"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "46"},
			{"Answer" : "Oppose", "Value" : "54"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "36"},
			{"Answer" : "Oppose", "Value" : "64"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "29"},
			{"Answer" : "Oppose", "Value" : "71"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "40"},
			{"Answer" : "Oppose", "Value" : "60"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "36"},
			{"Answer" : "Oppose", "Value" : "64"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "34"},
			{"Answer" : "Oppose", "Value" : "66"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "32"},
			{"Answer" : "Oppose", "Value" : "68"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "37"},
			{"Answer" : "Oppose", "Value" : "63"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21H. For each of the following national proposals please indicate whether you support it or oppose it.-Increase trade restrictions, like tariffs, on goods imported from foreign countries ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "42"},
			{"Answer" : "Oppose", "Value" : "58"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "42"},
			{"Answer" : "Oppose", "Value" : "58"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "43"},
			{"Answer" : "Oppose", "Value" : "57"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "43"},
			{"Answer" : "Oppose", "Value" : "57"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "38"},
			{"Answer" : "Oppose", "Value" : "62"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "41"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "41"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "44"},
			{"Answer" : "Oppose", "Value" : "56"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "45"},
			{"Answer" : "Oppose", "Value" : "55"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "38"},
			{"Answer" : "Oppose", "Value" : "62"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "38"},
			{"Answer" : "Oppose", "Value" : "62"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "45"},
			{"Answer" : "Oppose", "Value" : "55"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "39"},
			{"Answer" : "Oppose", "Value" : "61"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q21I. For each of the following national proposals please indicate whether you support it or oppose it.-Adopt additional free trade agreements with foreign nations ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "42"},
			{"Answer" : "Oppose", "Value" : "58"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "42"},
			{"Answer" : "Oppose", "Value" : "58"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "41"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "38"},
			{"Answer" : "Oppose", "Value" : "62"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "48"},
			{"Answer" : "Oppose", "Value" : "52"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "48"},
			{"Answer" : "Oppose", "Value" : "52"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "41"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "34"},
			{"Answer" : "Oppose", "Value" : "66"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "40"},
			{"Answer" : "Oppose", "Value" : "60"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "47"},
			{"Answer" : "Oppose", "Value" : "53"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "41"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "39"},
			{"Answer" : "Oppose", "Value" : "61"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "46"},
			{"Answer" : "Oppose", "Value" : "54"},
			{"Answer" : "No opinion", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q22. Thinking specifically about your immediate geographic area, including yours and adjacent counties, is the general business climate…?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Improving", "Value" : "21"},
			{"Answer" : "Staying the same", "Value" : "56"},
			{"Answer" : "Worsening", "Value" : "23"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Improving", "Value" : "24"},
			{"Answer" : "Staying the same", "Value" : "56"},
			{"Answer" : "Worsening", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Improving", "Value" : "15"},
			{"Answer" : "Staying the same", "Value" : "55"},
			{"Answer" : "Worsening", "Value" : "28"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Improving", "Value" : "0"},
			{"Answer" : "Staying the same", "Value" : "0"},
			{"Answer" : "Worsening", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Improving", "Value" : "25"},
			{"Answer" : "Staying the same", "Value" : "64"},
			{"Answer" : "Worsening", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Improving", "Value" : "30"},
			{"Answer" : "Staying the same", "Value" : "51"},
			{"Answer" : "Worsening", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Improving", "Value" : "13"},
			{"Answer" : "Staying the same", "Value" : "60"},
			{"Answer" : "Worsening", "Value" : "26"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Improving", "Value" : "8"},
			{"Answer" : "Staying the same", "Value" : "48"},
			{"Answer" : "Worsening", "Value" : "43"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Improving", "Value" : "43"},
			{"Answer" : "Staying the same", "Value" : "52"},
			{"Answer" : "Worsening", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Improving", "Value" : "14"},
			{"Answer" : "Staying the same", "Value" : "72"},
			{"Answer" : "Worsening", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Improving", "Value" : "5"},
			{"Answer" : "Staying the same", "Value" : "31"},
			{"Answer" : "Worsening", "Value" : "63"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Improving", "Value" : "18"},
			{"Answer" : "Staying the same", "Value" : "57"},
			{"Answer" : "Worsening", "Value" : "25"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Improving", "Value" : "20"},
			{"Answer" : "Staying the same", "Value" : "60"},
			{"Answer" : "Worsening", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Improving", "Value" : "25"},
			{"Answer" : "Staying the same", "Value" : "55"},
			{"Answer" : "Worsening", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Improving", "Value" : "32"},
			{"Answer" : "Staying the same", "Value" : "54"},
			{"Answer" : "Worsening", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Improving", "Value" : "18"},
			{"Answer" : "Staying the same", "Value" : "57"},
			{"Answer" : "Worsening", "Value" : "24"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Improving", "Value" : "20"},
			{"Answer" : "Staying the same", "Value" : "49"},
			{"Answer" : "Worsening", "Value" : "31"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Improving", "Value" : "20"},
			{"Answer" : "Staying the same", "Value" : "57"},
			{"Answer" : "Worsening", "Value" : "22"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q23. And continuing to consider the local market, are conditions locally improving, staying the same or worsening for businesses in your industry?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Improving", "Value" : "14"},
			{"Answer" : "Staying the same", "Value" : "57"},
			{"Answer" : "Worsening", "Value" : "29"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Improving", "Value" : "18"},
			{"Answer" : "Staying the same", "Value" : "55"},
			{"Answer" : "Worsening", "Value" : "25"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Improving", "Value" : "13"},
			{"Answer" : "Staying the same", "Value" : "56"},
			{"Answer" : "Worsening", "Value" : "30"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Improving", "Value" : "0"},
			{"Answer" : "Staying the same", "Value" : "0"},
			{"Answer" : "Worsening", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Improving", "Value" : "18"},
			{"Answer" : "Staying the same", "Value" : "65"},
			{"Answer" : "Worsening", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Improving", "Value" : "15"},
			{"Answer" : "Staying the same", "Value" : "51"},
			{"Answer" : "Worsening", "Value" : "34"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Improving", "Value" : "11"},
			{"Answer" : "Staying the same", "Value" : "59"},
			{"Answer" : "Worsening", "Value" : "30"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Improving", "Value" : "8"},
			{"Answer" : "Staying the same", "Value" : "53"},
			{"Answer" : "Worsening", "Value" : "38"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Improving", "Value" : "35"},
			{"Answer" : "Staying the same", "Value" : "57"},
			{"Answer" : "Worsening", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Improving", "Value" : "6"},
			{"Answer" : "Staying the same", "Value" : "72"},
			{"Answer" : "Worsening", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Improving", "Value" : "2"},
			{"Answer" : "Staying the same", "Value" : "28"},
			{"Answer" : "Worsening", "Value" : "71"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Improving", "Value" : "12"},
			{"Answer" : "Staying the same", "Value" : "58"},
			{"Answer" : "Worsening", "Value" : "31"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Improving", "Value" : "15"},
			{"Answer" : "Staying the same", "Value" : "68"},
			{"Answer" : "Worsening", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Improving", "Value" : "17"},
			{"Answer" : "Staying the same", "Value" : "49"},
			{"Answer" : "Worsening", "Value" : "34"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Improving", "Value" : "25"},
			{"Answer" : "Staying the same", "Value" : "59"},
			{"Answer" : "Worsening", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Improving", "Value" : "9"},
			{"Answer" : "Staying the same", "Value" : "59"},
			{"Answer" : "Worsening", "Value" : "33"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Improving", "Value" : "17"},
			{"Answer" : "Staying the same", "Value" : "52"},
			{"Answer" : "Worsening", "Value" : "31"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Improving", "Value" : "9"},
			{"Answer" : "Staying the same", "Value" : "57"},
			{"Answer" : "Worsening", "Value" : "33"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q24. Which of the following industry sectors do you think will have a positive impact on the economic vitality of your geographic area in the next three to five years?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Education", "Value" : "45"},
			{"Answer" : "Tourism", "Value" : "35"},
			{"Answer" : "Technology", "Value" : "63"},
			{"Answer" : "Transportation", "Value" : "14"},
			{"Answer" : "Medical", "Value" : "58"},
			{"Answer" : "Green and sustainable energy", "Value" : "30"},
			{"Answer" : "Manufacturing", "Value" : "40"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "6"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Education", "Value" : "45"},
			{"Answer" : "Tourism", "Value" : "32"},
			{"Answer" : "Technology", "Value" : "59"},
			{"Answer" : "Transportation", "Value" : "16"},
			{"Answer" : "Medical", "Value" : "60"},
			{"Answer" : "Green and sustainable energy", "Value" : "26"},
			{"Answer" : "Manufacturing", "Value" : "37"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "None of the above", "Value" : "7"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Education", "Value" : "43"},
			{"Answer" : "Tourism", "Value" : "33"},
			{"Answer" : "Technology", "Value" : "57"},
			{"Answer" : "Transportation", "Value" : "12"},
			{"Answer" : "Medical", "Value" : "56"},
			{"Answer" : "Green and sustainable energy", "Value" : "24"},
			{"Answer" : "Manufacturing", "Value" : "38"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "None of the above", "Value" : "6"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Education", "Value" : "0"},
			{"Answer" : "Tourism", "Value" : "0"},
			{"Answer" : "Technology", "Value" : "0"},
			{"Answer" : "Transportation", "Value" : "0"},
			{"Answer" : "Medical", "Value" : "0"},
			{"Answer" : "Green and sustainable energy", "Value" : "0"},
			{"Answer" : "Manufacturing", "Value" : "0"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Education", "Value" : "52"},
			{"Answer" : "Tourism", "Value" : "24"},
			{"Answer" : "Technology", "Value" : "73"},
			{"Answer" : "Transportation", "Value" : "20"},
			{"Answer" : "Medical", "Value" : "49"},
			{"Answer" : "Green and sustainable energy", "Value" : "29"},
			{"Answer" : "Manufacturing", "Value" : "39"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "6"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Education", "Value" : "35"},
			{"Answer" : "Tourism", "Value" : "47"},
			{"Answer" : "Technology", "Value" : "55"},
			{"Answer" : "Transportation", "Value" : "14"},
			{"Answer" : "Medical", "Value" : "70"},
			{"Answer" : "Green and sustainable energy", "Value" : "43"},
			{"Answer" : "Manufacturing", "Value" : "45"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "3"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Education", "Value" : "49"},
			{"Answer" : "Tourism", "Value" : "33"},
			{"Answer" : "Technology", "Value" : "67"},
			{"Answer" : "Transportation", "Value" : "8"},
			{"Answer" : "Medical", "Value" : "62"},
			{"Answer" : "Green and sustainable energy", "Value" : "21"},
			{"Answer" : "Manufacturing", "Value" : "40"},
			{"Answer" : "Other", "Value" : "4"},
			{"Answer" : "None of the above", "Value" : "4"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Education", "Value" : "44"},
			{"Answer" : "Tourism", "Value" : "33"},
			{"Answer" : "Technology", "Value" : "49"},
			{"Answer" : "Transportation", "Value" : "15"},
			{"Answer" : "Medical", "Value" : "46"},
			{"Answer" : "Green and sustainable energy", "Value" : "27"},
			{"Answer" : "Manufacturing", "Value" : "33"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "15"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Education", "Value" : "57"},
			{"Answer" : "Tourism", "Value" : "34"},
			{"Answer" : "Technology", "Value" : "75"},
			{"Answer" : "Transportation", "Value" : "19"},
			{"Answer" : "Medical", "Value" : "61"},
			{"Answer" : "Green and sustainable energy", "Value" : "39"},
			{"Answer" : "Manufacturing", "Value" : "43"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "None of the above", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Education", "Value" : "40"},
			{"Answer" : "Tourism", "Value" : "40"},
			{"Answer" : "Technology", "Value" : "60"},
			{"Answer" : "Transportation", "Value" : "10"},
			{"Answer" : "Medical", "Value" : "58"},
			{"Answer" : "Green and sustainable energy", "Value" : "28"},
			{"Answer" : "Manufacturing", "Value" : "42"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "7"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Education", "Value" : "42"},
			{"Answer" : "Tourism", "Value" : "25"},
			{"Answer" : "Technology", "Value" : "51"},
			{"Answer" : "Transportation", "Value" : "15"},
			{"Answer" : "Medical", "Value" : "54"},
			{"Answer" : "Green and sustainable energy", "Value" : "24"},
			{"Answer" : "Manufacturing", "Value" : "33"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "11"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Education", "Value" : "44"},
			{"Answer" : "Tourism", "Value" : "39"},
			{"Answer" : "Technology", "Value" : "58"},
			{"Answer" : "Transportation", "Value" : "13"},
			{"Answer" : "Medical", "Value" : "57"},
			{"Answer" : "Green and sustainable energy", "Value" : "28"},
			{"Answer" : "Manufacturing", "Value" : "40"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "8"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Education", "Value" : "51"},
			{"Answer" : "Tourism", "Value" : "30"},
			{"Answer" : "Technology", "Value" : "69"},
			{"Answer" : "Transportation", "Value" : "14"},
			{"Answer" : "Medical", "Value" : "61"},
			{"Answer" : "Green and sustainable energy", "Value" : "31"},
			{"Answer" : "Manufacturing", "Value" : "39"},
			{"Answer" : "Other", "Value" : "5"},
			{"Answer" : "None of the above", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Education", "Value" : "44"},
			{"Answer" : "Tourism", "Value" : "31"},
			{"Answer" : "Technology", "Value" : "67"},
			{"Answer" : "Transportation", "Value" : "17"},
			{"Answer" : "Medical", "Value" : "58"},
			{"Answer" : "Green and sustainable energy", "Value" : "34"},
			{"Answer" : "Manufacturing", "Value" : "42"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "5"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Education", "Value" : "43"},
			{"Answer" : "Tourism", "Value" : "26"},
			{"Answer" : "Technology", "Value" : "71"},
			{"Answer" : "Transportation", "Value" : "21"},
			{"Answer" : "Medical", "Value" : "60"},
			{"Answer" : "Green and sustainable energy", "Value" : "32"},
			{"Answer" : "Manufacturing", "Value" : "46"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "None of the above", "Value" : "7"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Education", "Value" : "42"},
			{"Answer" : "Tourism", "Value" : "40"},
			{"Answer" : "Technology", "Value" : "57"},
			{"Answer" : "Transportation", "Value" : "15"},
			{"Answer" : "Medical", "Value" : "52"},
			{"Answer" : "Green and sustainable energy", "Value" : "26"},
			{"Answer" : "Manufacturing", "Value" : "57"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "6"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Education", "Value" : "48"},
			{"Answer" : "Tourism", "Value" : "46"},
			{"Answer" : "Technology", "Value" : "66"},
			{"Answer" : "Transportation", "Value" : "11"},
			{"Answer" : "Medical", "Value" : "45"},
			{"Answer" : "Green and sustainable energy", "Value" : "37"},
			{"Answer" : "Manufacturing", "Value" : "31"},
			{"Answer" : "Other", "Value" : "3"},
			{"Answer" : "None of the above", "Value" : "11"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Education", "Value" : "49"},
			{"Answer" : "Tourism", "Value" : "27"},
			{"Answer" : "Technology", "Value" : "65"},
			{"Answer" : "Transportation", "Value" : "13"},
			{"Answer" : "Medical", "Value" : "69"},
			{"Answer" : "Green and sustainable energy", "Value" : "34"},
			{"Answer" : "Manufacturing", "Value" : "33"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "4"}
		]}
	]}
]},
{ "Question" : "Q25. Of those, which SINGLE industry sector do you think will have the greatest positive impact on the economic vitality of your geographic area in the next three to five years. ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Education", "Value" : "10"},
			{"Answer" : "Tourism", "Value" : "8"},
			{"Answer" : "Technology", "Value" : "31"},
			{"Answer" : "Transportation", "Value" : "3"},
			{"Answer" : "Medical", "Value" : "24"},
			{"Answer" : "Green and sustainable energy", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "15"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Education", "Value" : "14"},
			{"Answer" : "Tourism", "Value" : "6"},
			{"Answer" : "Technology", "Value" : "30"},
			{"Answer" : "Transportation", "Value" : "2"},
			{"Answer" : "Medical", "Value" : "26"},
			{"Answer" : "Green and sustainable energy", "Value" : "4"},
			{"Answer" : "Manufacturing", "Value" : "16"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Education", "Value" : "8"},
			{"Answer" : "Tourism", "Value" : "7"},
			{"Answer" : "Technology", "Value" : "26"},
			{"Answer" : "Transportation", "Value" : "1"},
			{"Answer" : "Medical", "Value" : "29"},
			{"Answer" : "Green and sustainable energy", "Value" : "3"},
			{"Answer" : "Manufacturing", "Value" : "16"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "7"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Education", "Value" : "0"},
			{"Answer" : "Tourism", "Value" : "0"},
			{"Answer" : "Technology", "Value" : "0"},
			{"Answer" : "Transportation", "Value" : "0"},
			{"Answer" : "Medical", "Value" : "0"},
			{"Answer" : "Green and sustainable energy", "Value" : "0"},
			{"Answer" : "Manufacturing", "Value" : "0"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Education", "Value" : "10"},
			{"Answer" : "Tourism", "Value" : "5"},
			{"Answer" : "Technology", "Value" : "54"},
			{"Answer" : "Transportation", "Value" : "7"},
			{"Answer" : "Medical", "Value" : "8"},
			{"Answer" : "Green and sustainable energy", "Value" : "2"},
			{"Answer" : "Manufacturing", "Value" : "13"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Education", "Value" : "8"},
			{"Answer" : "Tourism", "Value" : "10"},
			{"Answer" : "Technology", "Value" : "10"},
			{"Answer" : "Transportation", "Value" : "1"},
			{"Answer" : "Medical", "Value" : "44"},
			{"Answer" : "Green and sustainable energy", "Value" : "13"},
			{"Answer" : "Manufacturing", "Value" : "13"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Education", "Value" : "10"},
			{"Answer" : "Tourism", "Value" : "9"},
			{"Answer" : "Technology", "Value" : "31"},
			{"Answer" : "Transportation", "Value" : "1"},
			{"Answer" : "Medical", "Value" : "25"},
			{"Answer" : "Green and sustainable energy", "Value" : "6"},
			{"Answer" : "Manufacturing", "Value" : "17"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Education", "Value" : "18"},
			{"Answer" : "Tourism", "Value" : "6"},
			{"Answer" : "Technology", "Value" : "30"},
			{"Answer" : "Transportation", "Value" : "3"},
			{"Answer" : "Medical", "Value" : "13"},
			{"Answer" : "Green and sustainable energy", "Value" : "6"},
			{"Answer" : "Manufacturing", "Value" : "22"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Education", "Value" : "11"},
			{"Answer" : "Tourism", "Value" : "6"},
			{"Answer" : "Technology", "Value" : "39"},
			{"Answer" : "Transportation", "Value" : "5"},
			{"Answer" : "Medical", "Value" : "19"},
			{"Answer" : "Green and sustainable energy", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "13"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Education", "Value" : "8"},
			{"Answer" : "Tourism", "Value" : "10"},
			{"Answer" : "Technology", "Value" : "27"},
			{"Answer" : "Transportation", "Value" : "2"},
			{"Answer" : "Medical", "Value" : "28"},
			{"Answer" : "Green and sustainable energy", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "16"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Education", "Value" : "14"},
			{"Answer" : "Tourism", "Value" : "5"},
			{"Answer" : "Technology", "Value" : "30"},
			{"Answer" : "Transportation", "Value" : "1"},
			{"Answer" : "Medical", "Value" : "23"},
			{"Answer" : "Green and sustainable energy", "Value" : "8"},
			{"Answer" : "Manufacturing", "Value" : "16"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Education", "Value" : "9"},
			{"Answer" : "Tourism", "Value" : "11"},
			{"Answer" : "Technology", "Value" : "28"},
			{"Answer" : "Transportation", "Value" : "2"},
			{"Answer" : "Medical", "Value" : "23"},
			{"Answer" : "Green and sustainable energy", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "18"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Education", "Value" : "14"},
			{"Answer" : "Tourism", "Value" : "1"},
			{"Answer" : "Technology", "Value" : "34"},
			{"Answer" : "Transportation", "Value" : "2"},
			{"Answer" : "Medical", "Value" : "27"},
			{"Answer" : "Green and sustainable energy", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "13"},
			{"Answer" : "Other", "Value" : "2"},
			{"Answer" : "None of the above", "Value" : "0"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Education", "Value" : "10"},
			{"Answer" : "Tourism", "Value" : "7"},
			{"Answer" : "Technology", "Value" : "35"},
			{"Answer" : "Transportation", "Value" : "4"},
			{"Answer" : "Medical", "Value" : "24"},
			{"Answer" : "Green and sustainable energy", "Value" : "8"},
			{"Answer" : "Manufacturing", "Value" : "12"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Education", "Value" : "11"},
			{"Answer" : "Tourism", "Value" : "7"},
			{"Answer" : "Technology", "Value" : "37"},
			{"Answer" : "Transportation", "Value" : "5"},
			{"Answer" : "Medical", "Value" : "19"},
			{"Answer" : "Green and sustainable energy", "Value" : "6"},
			{"Answer" : "Manufacturing", "Value" : "14"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Education", "Value" : "10"},
			{"Answer" : "Tourism", "Value" : "10"},
			{"Answer" : "Technology", "Value" : "22"},
			{"Answer" : "Transportation", "Value" : "1"},
			{"Answer" : "Medical", "Value" : "24"},
			{"Answer" : "Green and sustainable energy", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "25"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Education", "Value" : "9"},
			{"Answer" : "Tourism", "Value" : "10"},
			{"Answer" : "Technology", "Value" : "40"},
			{"Answer" : "Transportation", "Value" : "2"},
			{"Answer" : "Medical", "Value" : "16"},
			{"Answer" : "Green and sustainable energy", "Value" : "7"},
			{"Answer" : "Manufacturing", "Value" : "17"},
			{"Answer" : "Other", "Value" : "0"},
			{"Answer" : "None of the above", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Education", "Value" : "12"},
			{"Answer" : "Tourism", "Value" : "2"},
			{"Answer" : "Technology", "Value" : "33"},
			{"Answer" : "Transportation", "Value" : "3"},
			{"Answer" : "Medical", "Value" : "29"},
			{"Answer" : "Green and sustainable energy", "Value" : "9"},
			{"Answer" : "Manufacturing", "Value" : "12"},
			{"Answer" : "Other", "Value" : "1"},
			{"Answer" : "None of the above", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q26A. How would you rate your local area on each of the following:-Suitable workforce ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "34"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "50"},
			{"Answer" : "Fair", "Value" : "29"},
			{"Answer" : "Poor", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Excellent", "Value" : "15"},
			{"Answer" : "Good", "Value" : "50"},
			{"Answer" : "Fair", "Value" : "26"},
			{"Answer" : "Poor", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "8"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "37"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "15"},
			{"Answer" : "Good", "Value" : "44"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "14"},
			{"Answer" : "Good", "Value" : "48"},
			{"Answer" : "Fair", "Value" : "28"},
			{"Answer" : "Poor", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "17"},
			{"Answer" : "Good", "Value" : "41"},
			{"Answer" : "Fair", "Value" : "30"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "9"},
			{"Answer" : "Good", "Value" : "45"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "11"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "37"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "13"},
			{"Answer" : "Good", "Value" : "44"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "10"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "18"},
			{"Answer" : "Good", "Value" : "34"},
			{"Answer" : "Fair", "Value" : "32"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "6"},
			{"Answer" : "Good", "Value" : "36"},
			{"Answer" : "Fair", "Value" : "44"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "10"},
			{"Answer" : "Good", "Value" : "46"},
			{"Answer" : "Fair", "Value" : "31"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q26B. How would you rate your local area on each of the following:-Consumer confidence ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "49"},
			{"Answer" : "Poor", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "32"},
			{"Answer" : "Fair", "Value" : "54"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "27"},
			{"Answer" : "Fair", "Value" : "54"},
			{"Answer" : "Poor", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "48"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "35"},
			{"Answer" : "Fair", "Value" : "51"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "19"},
			{"Answer" : "Fair", "Value" : "59"},
			{"Answer" : "Poor", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "46"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "40"},
			{"Answer" : "Fair", "Value" : "49"},
			{"Answer" : "Poor", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "25"},
			{"Answer" : "Fair", "Value" : "53"},
			{"Answer" : "Poor", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "48"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "54"},
			{"Answer" : "Poor", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "40"},
			{"Answer" : "Fair", "Value" : "46"},
			{"Answer" : "Poor", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "36"},
			{"Answer" : "Fair", "Value" : "53"},
			{"Answer" : "Poor", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "36"},
			{"Answer" : "Fair", "Value" : "49"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "46"},
			{"Answer" : "Fair", "Value" : "38"},
			{"Answer" : "Poor", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "40"},
			{"Answer" : "Fair", "Value" : "49"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q26C. How would you rate your local area on each of the following:-Transportation infrastructure ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "40"},
			{"Answer" : "Fair", "Value" : "40"},
			{"Answer" : "Poor", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "44"},
			{"Answer" : "Fair", "Value" : "38"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "47"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "40"},
			{"Answer" : "Fair", "Value" : "40"},
			{"Answer" : "Poor", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "47"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "44"},
			{"Answer" : "Fair", "Value" : "37"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "19"},
			{"Answer" : "Fair", "Value" : "54"},
			{"Answer" : "Poor", "Value" : "22"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "40"},
			{"Answer" : "Fair", "Value" : "40"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "36"},
			{"Answer" : "Fair", "Value" : "44"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "41"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "45"},
			{"Answer" : "Fair", "Value" : "40"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "33"},
			{"Answer" : "Fair", "Value" : "48"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "39"},
			{"Answer" : "Poor", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "6"},
			{"Answer" : "Good", "Value" : "44"},
			{"Answer" : "Fair", "Value" : "34"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "52"},
			{"Answer" : "Fair", "Value" : "32"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "28"},
			{"Answer" : "Fair", "Value" : "53"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q26D. How would you rate your local area on each of the following:-As an area where businesses can succeed ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "27"},
			{"Answer" : "Fair", "Value" : "49"},
			{"Answer" : "Poor", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "25"},
			{"Answer" : "Fair", "Value" : "49"},
			{"Answer" : "Poor", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "24"},
			{"Answer" : "Fair", "Value" : "51"},
			{"Answer" : "Poor", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "31"},
			{"Answer" : "Fair", "Value" : "53"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "24"},
			{"Answer" : "Fair", "Value" : "47"},
			{"Answer" : "Poor", "Value" : "23"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "27"},
			{"Answer" : "Fair", "Value" : "50"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "19"},
			{"Answer" : "Fair", "Value" : "47"},
			{"Answer" : "Poor", "Value" : "30"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "6"},
			{"Answer" : "Good", "Value" : "40"},
			{"Answer" : "Fair", "Value" : "43"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "28"},
			{"Answer" : "Fair", "Value" : "50"},
			{"Answer" : "Poor", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "8"},
			{"Answer" : "Fair", "Value" : "55"},
			{"Answer" : "Poor", "Value" : "33"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "27"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "23"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "22"},
			{"Answer" : "Fair", "Value" : "61"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "29"},
			{"Answer" : "Fair", "Value" : "50"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "32"},
			{"Answer" : "Fair", "Value" : "48"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "21"},
			{"Answer" : "Fair", "Value" : "43"},
			{"Answer" : "Poor", "Value" : "29"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "35"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "25"},
			{"Answer" : "Fair", "Value" : "51"},
			{"Answer" : "Poor", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q26E. How would you rate your local area on each of the following:-As a place where consumers want to live ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "10"},
			{"Answer" : "Good", "Value" : "43"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "45"},
			{"Answer" : "Fair", "Value" : "30"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Excellent", "Value" : "14"},
			{"Answer" : "Good", "Value" : "44"},
			{"Answer" : "Fair", "Value" : "30"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "9"},
			{"Answer" : "Good", "Value" : "49"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "11"},
			{"Answer" : "Good", "Value" : "47"},
			{"Answer" : "Fair", "Value" : "28"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "37"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "11"},
			{"Answer" : "Good", "Value" : "53"},
			{"Answer" : "Fair", "Value" : "26"},
			{"Answer" : "Poor", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "10"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "8"},
			{"Answer" : "Good", "Value" : "34"},
			{"Answer" : "Fair", "Value" : "37"},
			{"Answer" : "Poor", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "10"},
			{"Answer" : "Good", "Value" : "43"},
			{"Answer" : "Fair", "Value" : "29"},
			{"Answer" : "Poor", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "6"},
			{"Answer" : "Good", "Value" : "47"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "12"},
			{"Answer" : "Good", "Value" : "41"},
			{"Answer" : "Fair", "Value" : "39"},
			{"Answer" : "Poor", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "13"},
			{"Answer" : "Good", "Value" : "47"},
			{"Answer" : "Fair", "Value" : "31"},
			{"Answer" : "Poor", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "10"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "9"},
			{"Answer" : "Good", "Value" : "46"},
			{"Answer" : "Fair", "Value" : "29"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "9"},
			{"Answer" : "Good", "Value" : "39"},
			{"Answer" : "Fair", "Value" : "38"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q26F. How would you rate your local area on each of the following:-Airline service ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "8"},
			{"Answer" : "Good", "Value" : "47"},
			{"Answer" : "Fair", "Value" : "31"},
			{"Answer" : "Poor", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "38"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "16"},
			{"Answer" : "Good", "Value" : "66"},
			{"Answer" : "Fair", "Value" : "16"},
			{"Answer" : "Poor", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "46"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "30"},
			{"Answer" : "Fair", "Value" : "25"},
			{"Answer" : "Poor", "Value" : "37"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "10"},
			{"Answer" : "Good", "Value" : "43"},
			{"Answer" : "Fair", "Value" : "32"},
			{"Answer" : "Poor", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "7"},
			{"Answer" : "Good", "Value" : "48"},
			{"Answer" : "Fair", "Value" : "32"},
			{"Answer" : "Poor", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "6"},
			{"Answer" : "Good", "Value" : "48"},
			{"Answer" : "Fair", "Value" : "27"},
			{"Answer" : "Poor", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "8"},
			{"Answer" : "Good", "Value" : "50"},
			{"Answer" : "Fair", "Value" : "27"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "7"},
			{"Answer" : "Good", "Value" : "44"},
			{"Answer" : "Fair", "Value" : "33"},
			{"Answer" : "Poor", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "6"},
			{"Answer" : "Good", "Value" : "42"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "48"},
			{"Answer" : "Fair", "Value" : "30"},
			{"Answer" : "Poor", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "8"},
			{"Answer" : "Good", "Value" : "46"},
			{"Answer" : "Fair", "Value" : "28"},
			{"Answer" : "Poor", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q26G. How would you rate your local area on each of the following:-Taxi/car service ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "27"},
			{"Answer" : "Fair", "Value" : "38"},
			{"Answer" : "Poor", "Value" : "26"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "17"},
			{"Answer" : "Fair", "Value" : "35"},
			{"Answer" : "Poor", "Value" : "42"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "39"},
			{"Answer" : "Fair", "Value" : "37"},
			{"Answer" : "Poor", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "27"},
			{"Answer" : "Fair", "Value" : "44"},
			{"Answer" : "Poor", "Value" : "22"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "25"},
			{"Answer" : "Fair", "Value" : "38"},
			{"Answer" : "Poor", "Value" : "28"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "27"},
			{"Answer" : "Fair", "Value" : "41"},
			{"Answer" : "Poor", "Value" : "26"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "25"},
			{"Answer" : "Fair", "Value" : "37"},
			{"Answer" : "Poor", "Value" : "29"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "6"},
			{"Answer" : "Good", "Value" : "32"},
			{"Answer" : "Fair", "Value" : "38"},
			{"Answer" : "Poor", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "32"},
			{"Answer" : "Fair", "Value" : "36"},
			{"Answer" : "Poor", "Value" : "24"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "25"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "7"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "18"},
			{"Answer" : "Fair", "Value" : "41"},
			{"Answer" : "Poor", "Value" : "35"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "29"},
			{"Answer" : "Fair", "Value" : "40"},
			{"Answer" : "Poor", "Value" : "25"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "29"},
			{"Answer" : "Fair", "Value" : "40"},
			{"Answer" : "Poor", "Value" : "24"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]}
]},
{ "Question" : "Q26H. How would you rate your local area on each of the following:-Local governmental support for business ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "17"},
			{"Answer" : "Fair", "Value" : "48"},
			{"Answer" : "Poor", "Value" : "31"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Excellent", "Value" : "0"},
			{"Answer" : "Good", "Value" : "0"},
			{"Answer" : "Fair", "Value" : "0"},
			{"Answer" : "Poor", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "17"},
			{"Answer" : "Fair", "Value" : "49"},
			{"Answer" : "Poor", "Value" : "31"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "18"},
			{"Answer" : "Fair", "Value" : "48"},
			{"Answer" : "Poor", "Value" : "30"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Excellent", "Value" : "3"},
			{"Answer" : "Good", "Value" : "18"},
			{"Answer" : "Fair", "Value" : "47"},
			{"Answer" : "Poor", "Value" : "28"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "14"},
			{"Answer" : "Fair", "Value" : "48"},
			{"Answer" : "Poor", "Value" : "35"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "23"},
			{"Answer" : "Fair", "Value" : "52"},
			{"Answer" : "Poor", "Value" : "22"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "17"},
			{"Answer" : "Fair", "Value" : "47"},
			{"Answer" : "Poor", "Value" : "31"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "10"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "40"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "2"},
			{"Answer" : "Good", "Value" : "17"},
			{"Answer" : "Fair", "Value" : "47"},
			{"Answer" : "Poor", "Value" : "32"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "18"},
			{"Answer" : "Fair", "Value" : "51"},
			{"Answer" : "Poor", "Value" : "27"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Excellent", "Value" : "4"},
			{"Answer" : "Good", "Value" : "16"},
			{"Answer" : "Fair", "Value" : "50"},
			{"Answer" : "Poor", "Value" : "28"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Excellent", "Value" : "1"},
			{"Answer" : "Good", "Value" : "25"},
			{"Answer" : "Fair", "Value" : "45"},
			{"Answer" : "Poor", "Value" : "26"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Excellent", "Value" : "5"},
			{"Answer" : "Good", "Value" : "15"},
			{"Answer" : "Fair", "Value" : "44"},
			{"Answer" : "Poor", "Value" : "33"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]}
]},
{ "Question" : "Q27. Thinking specifically about health care and the Affordable Care Act (ACA), known as Obamacare, and its impact on your business.  Do you think it is having a…? (2013: Do you expect it to have a positive impact on your business, a negative impact or no real impact?)", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "6"},
			{"Answer" : "Negative impact", "Value" : "74"},
			{"Answer" : "No impact", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "7"},
			{"Answer" : "Negative impact", "Value" : "71"},
			{"Answer" : "No impact", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "6"},
			{"Answer" : "Negative impact", "Value" : "69"},
			{"Answer" : "No impact", "Value" : "22"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "0"},
			{"Answer" : "Negative impact", "Value" : "0"},
			{"Answer" : "No impact", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "4"},
			{"Answer" : "Negative impact", "Value" : "76"},
			{"Answer" : "No impact", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "5"},
			{"Answer" : "Negative impact", "Value" : "76"},
			{"Answer" : "No impact", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "8"},
			{"Answer" : "Negative impact", "Value" : "71"},
			{"Answer" : "No impact", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "10"},
			{"Answer" : "Negative impact", "Value" : "71"},
			{"Answer" : "No impact", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "9"},
			{"Answer" : "Negative impact", "Value" : "65"},
			{"Answer" : "No impact", "Value" : "25"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "8"},
			{"Answer" : "Negative impact", "Value" : "74"},
			{"Answer" : "No impact", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "1"},
			{"Answer" : "Negative impact", "Value" : "85"},
			{"Answer" : "No impact", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "8"},
			{"Answer" : "Negative impact", "Value" : "68"},
			{"Answer" : "No impact", "Value" : "24"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "2"},
			{"Answer" : "Negative impact", "Value" : "79"},
			{"Answer" : "No impact", "Value" : "18"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "8"},
			{"Answer" : "Negative impact", "Value" : "79"},
			{"Answer" : "No impact", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "5"},
			{"Answer" : "Negative impact", "Value" : "74"},
			{"Answer" : "No impact", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "6"},
			{"Answer" : "Negative impact", "Value" : "75"},
			{"Answer" : "No impact", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "8"},
			{"Answer" : "Negative impact", "Value" : "75"},
			{"Answer" : "No impact", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Positive impact", "Value" : "10"},
			{"Answer" : "Negative impact", "Value" : "75"},
			{"Answer" : "No impact", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]}
]},
{ "Question" : "Q28A. Have you made any of the following adjustments due to the Affordable Care Act?-Increasing benefits to retain employees ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "14"},
			{"Answer" : "No", "Value" : "84"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "15"},
			{"Answer" : "No", "Value" : "82"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Yes", "Value" : "7"},
			{"Answer" : "No", "Value" : "87"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "17"},
			{"Answer" : "No", "Value" : "81"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "16"},
			{"Answer" : "No", "Value" : "82"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "11"},
			{"Answer" : "No", "Value" : "88"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "11"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "18"},
			{"Answer" : "No", "Value" : "79"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "13"},
			{"Answer" : "No", "Value" : "85"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "10"},
			{"Answer" : "No", "Value" : "88"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "15"},
			{"Answer" : "No", "Value" : "84"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "14"},
			{"Answer" : "No", "Value" : "83"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "12"},
			{"Answer" : "No", "Value" : "85"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "17"},
			{"Answer" : "No", "Value" : "82"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "16"},
			{"Answer" : "No", "Value" : "81"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "12"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "13"},
			{"Answer" : "No", "Value" : "85"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q28B. Have you made any of the following adjustments due to the Affordable Care Act?-Decreasing benefits to cut costs ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "40"},
			{"Answer" : "No", "Value" : "58"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "40"},
			{"Answer" : "No", "Value" : "56"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Yes", "Value" : "32"},
			{"Answer" : "No", "Value" : "64"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "39"},
			{"Answer" : "No", "Value" : "60"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "42"},
			{"Answer" : "No", "Value" : "55"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "38"},
			{"Answer" : "No", "Value" : "59"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "42"},
			{"Answer" : "No", "Value" : "57"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "25"},
			{"Answer" : "No", "Value" : "71"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "42"},
			{"Answer" : "No", "Value" : "56"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "53"},
			{"Answer" : "No", "Value" : "46"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "36"},
			{"Answer" : "No", "Value" : "62"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "45"},
			{"Answer" : "No", "Value" : "53"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "45"},
			{"Answer" : "No", "Value" : "52"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "44"},
			{"Answer" : "No", "Value" : "54"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "40"},
			{"Answer" : "No", "Value" : "56"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "40"},
			{"Answer" : "No", "Value" : "58"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "40"},
			{"Answer" : "No", "Value" : "60"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q28C. Have you made any of the following adjustments due to the Affordable Care Act?-Offering defined contribution health insurance ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "37"},
			{"Answer" : "No", "Value" : "60"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "36"},
			{"Answer" : "No", "Value" : "58"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Yes", "Value" : "28"},
			{"Answer" : "No", "Value" : "66"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "30"},
			{"Answer" : "No", "Value" : "67"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "41"},
			{"Answer" : "No", "Value" : "55"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "41"},
			{"Answer" : "No", "Value" : "56"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "35"},
			{"Answer" : "No", "Value" : "59"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "33"},
			{"Answer" : "No", "Value" : "64"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "39"},
			{"Answer" : "No", "Value" : "57"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "39"},
			{"Answer" : "No", "Value" : "59"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "35"},
			{"Answer" : "No", "Value" : "62"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "43"},
			{"Answer" : "No", "Value" : "54"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "36"},
			{"Answer" : "No", "Value" : "60"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "39"},
			{"Answer" : "No", "Value" : "57"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "37"},
			{"Answer" : "No", "Value" : "57"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "32"},
			{"Answer" : "No", "Value" : "62"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "40"},
			{"Answer" : "No", "Value" : "60"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q28D. Have you made any of the following adjustments due to the Affordable Care Act?-Hiring more part-time employees ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "25"},
			{"Answer" : "No", "Value" : "73"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "28"},
			{"Answer" : "No", "Value" : "68"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Yes", "Value" : "24"},
			{"Answer" : "No", "Value" : "71"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "13"},
			{"Answer" : "No", "Value" : "85"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "36"},
			{"Answer" : "No", "Value" : "62"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "28"},
			{"Answer" : "No", "Value" : "71"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "23"},
			{"Answer" : "No", "Value" : "75"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "17"},
			{"Answer" : "No", "Value" : "80"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "21"},
			{"Answer" : "No", "Value" : "77"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "43"},
			{"Answer" : "No", "Value" : "56"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "24"},
			{"Answer" : "No", "Value" : "73"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "16"},
			{"Answer" : "No", "Value" : "83"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "34"},
			{"Answer" : "No", "Value" : "64"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "16"},
			{"Answer" : "No", "Value" : "84"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "21"},
			{"Answer" : "No", "Value" : "75"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "42"},
			{"Answer" : "No", "Value" : "55"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "28"},
			{"Answer" : "No", "Value" : "72"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q28E. Have you made any of the following adjustments due to the Affordable Care Act?-Reducing the number of hours current employees work ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "17"},
			{"Answer" : "No", "Value" : "82"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "20"},
			{"Answer" : "No", "Value" : "76"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "Yes", "Value" : "18"},
			{"Answer" : "No", "Value" : "78"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "13"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "22"},
			{"Answer" : "No", "Value" : "76"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "19"},
			{"Answer" : "No", "Value" : "79"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "9"},
			{"Answer" : "No", "Value" : "89"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "10"},
			{"Answer" : "No", "Value" : "87"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "12"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "33"},
			{"Answer" : "No", "Value" : "66"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "15"},
			{"Answer" : "No", "Value" : "83"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "12"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "22"},
			{"Answer" : "No", "Value" : "75"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "8"},
			{"Answer" : "No", "Value" : "91"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "11"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "34"},
			{"Answer" : "No", "Value" : "65"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "19"},
			{"Answer" : "No", "Value" : "80"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q28F. Have you made any of the following adjustments due to the Affordable Care Act?-Terminating benefits for current employees ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "9"},
			{"Answer" : "No", "Value" : "89"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "9"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "5"},
			{"Answer" : "No", "Value" : "93"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "10"},
			{"Answer" : "No", "Value" : "87"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "12"},
			{"Answer" : "No", "Value" : "85"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "5"},
			{"Answer" : "No", "Value" : "91"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "7"},
			{"Answer" : "No", "Value" : "90"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "6"},
			{"Answer" : "No", "Value" : "91"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "16"},
			{"Answer" : "No", "Value" : "81"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "9"},
			{"Answer" : "No", "Value" : "88"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "4"},
			{"Answer" : "No", "Value" : "93"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "11"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "8"},
			{"Answer" : "No", "Value" : "91"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "8"},
			{"Answer" : "No", "Value" : "89"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "8"},
			{"Answer" : "No", "Value" : "89"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q28G. Have you made any of the following adjustments due to the Affordable Care Act?-Terminating benefits for retired employees ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Yes", "Value" : "6"},
			{"Answer" : "No", "Value" : "89"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "Yes", "Value" : "7"},
			{"Answer" : "No", "Value" : "86"},
			{"Answer" : "Refused", "Value" : "7"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Yes", "Value" : "0"},
			{"Answer" : "No", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Yes", "Value" : "3"},
			{"Answer" : "No", "Value" : "93"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Yes", "Value" : "7"},
			{"Answer" : "No", "Value" : "89"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Yes", "Value" : "10"},
			{"Answer" : "No", "Value" : "83"},
			{"Answer" : "Refused", "Value" : "7"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Yes", "Value" : "3"},
			{"Answer" : "No", "Value" : "91"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Yes", "Value" : "3"},
			{"Answer" : "No", "Value" : "94"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Yes", "Value" : "5"},
			{"Answer" : "No", "Value" : "90"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "13"},
			{"Answer" : "No", "Value" : "79"},
			{"Answer" : "Refused", "Value" : "8"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Yes", "Value" : "4"},
			{"Answer" : "No", "Value" : "91"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Yes", "Value" : "8"},
			{"Answer" : "No", "Value" : "89"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Yes", "Value" : "10"},
			{"Answer" : "No", "Value" : "83"},
			{"Answer" : "Refused", "Value" : "7"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Yes", "Value" : "6"},
			{"Answer" : "No", "Value" : "92"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Yes", "Value" : "8"},
			{"Answer" : "No", "Value" : "87"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Yes", "Value" : "11"},
			{"Answer" : "No", "Value" : "80"},
			{"Answer" : "Refused", "Value" : "9"}
		]}
	]}
]},
{ "Question" : "Q29. Do you agree more with the supporters of the ACA that the law requires only minor tinkering in order to be successful, or with ACA’s critics that seek to repeal the law and replace it with a better health care system?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "16"},
			{"Answer" : "Agree more with the Critics", "Value" : "69"},
			{"Answer" : "Don't know", "Value" : "16"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "0"},
			{"Answer" : "Agree more with the Critics", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "0"},
			{"Answer" : "Agree more with the Critics", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "0"},
			{"Answer" : "Agree more with the Critics", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "17"},
			{"Answer" : "Agree more with the Critics", "Value" : "67"},
			{"Answer" : "Don't know", "Value" : "16"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "11"},
			{"Answer" : "Agree more with the Critics", "Value" : "74"},
			{"Answer" : "Don't know", "Value" : "15"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "17"},
			{"Answer" : "Agree more with the Critics", "Value" : "68"},
			{"Answer" : "Don't know", "Value" : "15"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "20"},
			{"Answer" : "Agree more with the Critics", "Value" : "63"},
			{"Answer" : "Don't know", "Value" : "16"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "23"},
			{"Answer" : "Agree more with the Critics", "Value" : "53"},
			{"Answer" : "Don't know", "Value" : "25"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "15"},
			{"Answer" : "Agree more with the Critics", "Value" : "71"},
			{"Answer" : "Don't know", "Value" : "14"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "9"},
			{"Answer" : "Agree more with the Critics", "Value" : "83"},
			{"Answer" : "Don't know", "Value" : "9"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "17"},
			{"Answer" : "Agree more with the Critics", "Value" : "68"},
			{"Answer" : "Don't know", "Value" : "15"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "18"},
			{"Answer" : "Agree more with the Critics", "Value" : "68"},
			{"Answer" : "Don't know", "Value" : "15"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "14"},
			{"Answer" : "Agree more with the Critics", "Value" : "69"},
			{"Answer" : "Don't know", "Value" : "17"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "15"},
			{"Answer" : "Agree more with the Critics", "Value" : "63"},
			{"Answer" : "Don't know", "Value" : "22"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Agree more with the Supporters", "Value" : "17"},
			{"Answer" : "Agree more with the Critics", "Value" : "67"},
			{"Answer" : "Don't know", "Value" : "16"}
		]}
	]}
]},
{ "Question" : "Q30A. Increasing the minimum wage to $15 per hour for fast food workers ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "7"},
			{"Answer" : "Oppose", "Value" : "89"},
			{"Answer" : "No opinion", "Value" : "4"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "13"},
			{"Answer" : "Oppose", "Value" : "81"},
			{"Answer" : "No opinion", "Value" : "6"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "1"},
			{"Answer" : "Oppose", "Value" : "95"},
			{"Answer" : "No opinion", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "7"},
			{"Answer" : "Oppose", "Value" : "90"},
			{"Answer" : "No opinion", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "8"},
			{"Answer" : "Oppose", "Value" : "90"},
			{"Answer" : "No opinion", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "12"},
			{"Answer" : "Oppose", "Value" : "81"},
			{"Answer" : "No opinion", "Value" : "8"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "7"},
			{"Answer" : "Oppose", "Value" : "90"},
			{"Answer" : "No opinion", "Value" : "4"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "2"},
			{"Answer" : "Oppose", "Value" : "97"},
			{"Answer" : "No opinion", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "7"},
			{"Answer" : "Oppose", "Value" : "89"},
			{"Answer" : "No opinion", "Value" : "4"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "8"},
			{"Answer" : "Oppose", "Value" : "90"},
			{"Answer" : "No opinion", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "7"},
			{"Answer" : "Oppose", "Value" : "87"},
			{"Answer" : "No opinion", "Value" : "6"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "11"},
			{"Answer" : "Oppose", "Value" : "84"},
			{"Answer" : "No opinion", "Value" : "5"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "4"},
			{"Answer" : "Oppose", "Value" : "92"},
			{"Answer" : "No opinion", "Value" : "4"}
		]}
	]}
]},
{ "Question" : "Q30B. Increasing the minimum wage for all workers to $15 per hour ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "8"},
			{"Answer" : "Oppose", "Value" : "87"},
			{"Answer" : "No opinion", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "15"},
			{"Answer" : "Oppose", "Value" : "78"},
			{"Answer" : "No opinion", "Value" : "8"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "3"},
			{"Answer" : "Oppose", "Value" : "91"},
			{"Answer" : "No opinion", "Value" : "5"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "7"},
			{"Answer" : "Oppose", "Value" : "90"},
			{"Answer" : "No opinion", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "8"},
			{"Answer" : "Oppose", "Value" : "90"},
			{"Answer" : "No opinion", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "13"},
			{"Answer" : "Oppose", "Value" : "80"},
			{"Answer" : "No opinion", "Value" : "7"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "8"},
			{"Answer" : "Oppose", "Value" : "88"},
			{"Answer" : "No opinion", "Value" : "4"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "2"},
			{"Answer" : "Oppose", "Value" : "95"},
			{"Answer" : "No opinion", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "9"},
			{"Answer" : "Oppose", "Value" : "87"},
			{"Answer" : "No opinion", "Value" : "4"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "9"},
			{"Answer" : "Oppose", "Value" : "87"},
			{"Answer" : "No opinion", "Value" : "4"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "6"},
			{"Answer" : "Oppose", "Value" : "87"},
			{"Answer" : "No opinion", "Value" : "7"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "11"},
			{"Answer" : "Oppose", "Value" : "83"},
			{"Answer" : "No opinion", "Value" : "6"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "6"},
			{"Answer" : "Oppose", "Value" : "89"},
			{"Answer" : "No opinion", "Value" : "5"}
		]}
	]}
]},
{ "Question" : "Q30C. Adopt public (i.e., taxpayer) funding for statewide and state legislative elections ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "21"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "21"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "22"},
			{"Answer" : "Oppose", "Value" : "56"},
			{"Answer" : "No opinion", "Value" : "22"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "19"},
			{"Answer" : "Oppose", "Value" : "64"},
			{"Answer" : "No opinion", "Value" : "17"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "21"},
			{"Answer" : "Oppose", "Value" : "56"},
			{"Answer" : "No opinion", "Value" : "22"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "22"},
			{"Answer" : "Oppose", "Value" : "58"},
			{"Answer" : "No opinion", "Value" : "20"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "23"},
			{"Answer" : "Oppose", "Value" : "51"},
			{"Answer" : "No opinion", "Value" : "26"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "18"},
			{"Answer" : "Oppose", "Value" : "59"},
			{"Answer" : "No opinion", "Value" : "22"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "21"},
			{"Answer" : "Oppose", "Value" : "67"},
			{"Answer" : "No opinion", "Value" : "11"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "22"},
			{"Answer" : "Oppose", "Value" : "60"},
			{"Answer" : "No opinion", "Value" : "18"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "18"},
			{"Answer" : "Oppose", "Value" : "62"},
			{"Answer" : "No opinion", "Value" : "21"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "20"},
			{"Answer" : "Oppose", "Value" : "53"},
			{"Answer" : "No opinion", "Value" : "27"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "22"},
			{"Answer" : "Oppose", "Value" : "55"},
			{"Answer" : "No opinion", "Value" : "23"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "19"},
			{"Answer" : "Oppose", "Value" : "66"},
			{"Answer" : "No opinion", "Value" : "15"}
		]}
	]}
]},
{ "Question" : "Q30D. Reduce the cost of providing workers' compensation insurance ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "92"},
			{"Answer" : "Oppose", "Value" : "2"},
			{"Answer" : "No opinion", "Value" : "6"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "92"},
			{"Answer" : "Oppose", "Value" : "1"},
			{"Answer" : "No opinion", "Value" : "6"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "91"},
			{"Answer" : "Oppose", "Value" : "4"},
			{"Answer" : "No opinion", "Value" : "5"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "93"},
			{"Answer" : "Oppose", "Value" : "2"},
			{"Answer" : "No opinion", "Value" : "5"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "91"},
			{"Answer" : "Oppose", "Value" : "1"},
			{"Answer" : "No opinion", "Value" : "8"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "93"},
			{"Answer" : "Oppose", "Value" : "2"},
			{"Answer" : "No opinion", "Value" : "5"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "89"},
			{"Answer" : "Oppose", "Value" : "3"},
			{"Answer" : "No opinion", "Value" : "8"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "97"},
			{"Answer" : "Oppose", "Value" : "1"},
			{"Answer" : "No opinion", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "95"},
			{"Answer" : "Oppose", "Value" : "1"},
			{"Answer" : "No opinion", "Value" : "4"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "90"},
			{"Answer" : "Oppose", "Value" : "4"},
			{"Answer" : "No opinion", "Value" : "6"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "88"},
			{"Answer" : "Oppose", "Value" : "3"},
			{"Answer" : "No opinion", "Value" : "8"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "97"},
			{"Answer" : "Oppose", "Value" : "1"},
			{"Answer" : "No opinion", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "89"},
			{"Answer" : "Oppose", "Value" : "5"},
			{"Answer" : "No opinion", "Value" : "6"}
		]}
	]}
]},
{ "Question" : "Q30E. Require that employers provide paid family leave to employees ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Support", "Value" : "11"},
			{"Answer" : "Oppose", "Value" : "78"},
			{"Answer" : "No opinion", "Value" : "11"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Support", "Value" : "0"},
			{"Answer" : "Oppose", "Value" : "0"},
			{"Answer" : "No opinion", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Support", "Value" : "14"},
			{"Answer" : "Oppose", "Value" : "74"},
			{"Answer" : "No opinion", "Value" : "13"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Support", "Value" : "5"},
			{"Answer" : "Oppose", "Value" : "83"},
			{"Answer" : "No opinion", "Value" : "11"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Support", "Value" : "12"},
			{"Answer" : "Oppose", "Value" : "78"},
			{"Answer" : "No opinion", "Value" : "11"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Support", "Value" : "16"},
			{"Answer" : "Oppose", "Value" : "76"},
			{"Answer" : "No opinion", "Value" : "8"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Support", "Value" : "17"},
			{"Answer" : "Oppose", "Value" : "74"},
			{"Answer" : "No opinion", "Value" : "9"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Support", "Value" : "11"},
			{"Answer" : "Oppose", "Value" : "75"},
			{"Answer" : "No opinion", "Value" : "14"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Support", "Value" : "5"},
			{"Answer" : "Oppose", "Value" : "88"},
			{"Answer" : "No opinion", "Value" : "7"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Support", "Value" : "11"},
			{"Answer" : "Oppose", "Value" : "79"},
			{"Answer" : "No opinion", "Value" : "10"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Support", "Value" : "11"},
			{"Answer" : "Oppose", "Value" : "81"},
			{"Answer" : "No opinion", "Value" : "8"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Support", "Value" : "12"},
			{"Answer" : "Oppose", "Value" : "73"},
			{"Answer" : "No opinion", "Value" : "15"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Support", "Value" : "13"},
			{"Answer" : "Oppose", "Value" : "77"},
			{"Answer" : "No opinion", "Value" : "10"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Support", "Value" : "7"},
			{"Answer" : "Oppose", "Value" : "83"},
			{"Answer" : "No opinion", "Value" : "10"}
		]}
	]}
]},
{ "Question" : "Q31A. Work related accidents ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "21"},
			{"Answer" : "Somewhat", "Value" : "32"},
			{"Answer" : "Not very", "Value" : "29"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "9"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "25"},
			{"Answer" : "Somewhat", "Value" : "27"},
			{"Answer" : "Not very", "Value" : "30"},
			{"Answer" : "Not at all", "Value" : "13"},
			{"Answer" : "Don't know", "Value" : "5"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "20"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "31"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "8"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "17"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "26"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "13"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "25"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "28"},
			{"Answer" : "Not at all", "Value" : "4"},
			{"Answer" : "Don't know", "Value" : "10"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "25"},
			{"Answer" : "Somewhat", "Value" : "35"},
			{"Answer" : "Not very", "Value" : "23"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "8"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "20"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "33"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "8"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "17"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "26"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "13"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "21"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "28"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "10"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "21"},
			{"Answer" : "Somewhat", "Value" : "32"},
			{"Answer" : "Not very", "Value" : "32"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "7"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "22"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "28"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "10"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "47"},
			{"Answer" : "Somewhat", "Value" : "30"},
			{"Answer" : "Not very", "Value" : "10"},
			{"Answer" : "Not at all", "Value" : "3"},
			{"Answer" : "Don't know", "Value" : "9"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "8"}
		]}
	]}
]},
{ "Question" : "Q31B. Accidents affecting non-employees that you may be liable for ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "37"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "15"},
			{"Answer" : "Somewhat", "Value" : "27"},
			{"Answer" : "Not very", "Value" : "40"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "18"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "34"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "34"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "32"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "19"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "32"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "15"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "41"},
			{"Answer" : "Not at all", "Value" : "12"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "33"},
			{"Answer" : "Not at all", "Value" : "18"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "17"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "35"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "11"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "45"},
			{"Answer" : "Not at all", "Value" : "13"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "36"},
			{"Answer" : "Not very", "Value" : "35"},
			{"Answer" : "Not at all", "Value" : "12"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "29"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "30"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "22"},
			{"Answer" : "Not very", "Value" : "46"},
			{"Answer" : "Not at all", "Value" : "21"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q31C. Product liability ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "19"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "18"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "11"},
			{"Answer" : "Somewhat", "Value" : "26"},
			{"Answer" : "Not very", "Value" : "41"},
			{"Answer" : "Not at all", "Value" : "20"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "27"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "20"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "25"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "20"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "18"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "37"},
			{"Answer" : "Not at all", "Value" : "20"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "11"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "3"},
			{"Answer" : "Somewhat", "Value" : "35"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "19"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "7"},
			{"Answer" : "Somewhat", "Value" : "22"},
			{"Answer" : "Not very", "Value" : "45"},
			{"Answer" : "Not at all", "Value" : "24"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "3"},
			{"Answer" : "Somewhat", "Value" : "32"},
			{"Answer" : "Not very", "Value" : "51"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q31D. Industrial espionage ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "13"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "36"},
			{"Answer" : "Don't know", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "3"},
			{"Answer" : "Somewhat", "Value" : "13"},
			{"Answer" : "Not very", "Value" : "37"},
			{"Answer" : "Not at all", "Value" : "41"},
			{"Answer" : "Don't know", "Value" : "6"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "1"},
			{"Answer" : "Somewhat", "Value" : "17"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "34"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "10"},
			{"Answer" : "Not very", "Value" : "46"},
			{"Answer" : "Not at all", "Value" : "33"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "9"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "35"},
			{"Answer" : "Don't know", "Value" : "6"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "13"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "41"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "11"},
			{"Answer" : "Not very", "Value" : "45"},
			{"Answer" : "Not at all", "Value" : "35"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "2"},
			{"Answer" : "Somewhat", "Value" : "17"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "33"},
			{"Answer" : "Don't know", "Value" : "6"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "14"},
			{"Answer" : "Not very", "Value" : "45"},
			{"Answer" : "Not at all", "Value" : "32"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "12"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "39"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "3"},
			{"Answer" : "Somewhat", "Value" : "10"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "41"},
			{"Answer" : "Don't know", "Value" : "6"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "3"},
			{"Answer" : "Somewhat", "Value" : "13"},
			{"Answer" : "Not very", "Value" : "33"},
			{"Answer" : "Not at all", "Value" : "44"},
			{"Answer" : "Don't know", "Value" : "7"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "3"},
			{"Answer" : "Somewhat", "Value" : "22"},
			{"Answer" : "Not very", "Value" : "50"},
			{"Answer" : "Not at all", "Value" : "23"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q31E. Data security ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "30"},
			{"Answer" : "Somewhat", "Value" : "40"},
			{"Answer" : "Not very", "Value" : "20"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "31"},
			{"Answer" : "Somewhat", "Value" : "46"},
			{"Answer" : "Not very", "Value" : "17"},
			{"Answer" : "Not at all", "Value" : "5"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "30"},
			{"Answer" : "Somewhat", "Value" : "39"},
			{"Answer" : "Not very", "Value" : "22"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "27"},
			{"Answer" : "Somewhat", "Value" : "40"},
			{"Answer" : "Not very", "Value" : "21"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "32"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "24"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "33"},
			{"Answer" : "Somewhat", "Value" : "37"},
			{"Answer" : "Not very", "Value" : "21"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "28"},
			{"Answer" : "Somewhat", "Value" : "41"},
			{"Answer" : "Not very", "Value" : "22"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "29"},
			{"Answer" : "Somewhat", "Value" : "44"},
			{"Answer" : "Not very", "Value" : "17"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "29"},
			{"Answer" : "Somewhat", "Value" : "39"},
			{"Answer" : "Not very", "Value" : "21"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "21"},
			{"Answer" : "Somewhat", "Value" : "47"},
			{"Answer" : "Not very", "Value" : "24"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "36"},
			{"Answer" : "Somewhat", "Value" : "38"},
			{"Answer" : "Not very", "Value" : "19"},
			{"Answer" : "Not at all", "Value" : "3"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "29"},
			{"Answer" : "Somewhat", "Value" : "41"},
			{"Answer" : "Not very", "Value" : "18"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "21"},
			{"Answer" : "Somewhat", "Value" : "42"},
			{"Answer" : "Not very", "Value" : "28"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q31F. Employee theft ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "36"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "36"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "39"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "37"},
			{"Answer" : "Not very", "Value" : "40"},
			{"Answer" : "Not at all", "Value" : "13"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "32"},
			{"Answer" : "Not very", "Value" : "41"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "30"},
			{"Answer" : "Not very", "Value" : "45"},
			{"Answer" : "Not at all", "Value" : "12"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "38"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "40"},
			{"Answer" : "Not very", "Value" : "37"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "35"},
			{"Answer" : "Not very", "Value" : "38"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "50"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "43"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "4"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "39"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "56"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q31G. Professional errors and omissions ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "37"},
			{"Answer" : "Not very", "Value" : "41"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "40"},
			{"Answer" : "Not very", "Value" : "38"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "4"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "37"},
			{"Answer" : "Not very", "Value" : "36"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "35"},
			{"Answer" : "Not very", "Value" : "47"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "14"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "46"},
			{"Answer" : "Not at all", "Value" : "5"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "45"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "41"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "32"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "37"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "9"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "40"},
			{"Answer" : "Not very", "Value" : "41"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "35"},
			{"Answer" : "Not very", "Value" : "41"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "14"},
			{"Answer" : "Somewhat", "Value" : "40"},
			{"Answer" : "Not very", "Value" : "38"},
			{"Answer" : "Not at all", "Value" : "5"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "49"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q31H. Threats to your online reputation ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "40"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "36"},
			{"Answer" : "Not very", "Value" : "38"},
			{"Answer" : "Not at all", "Value" : "13"},
			{"Answer" : "Don't know", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "11"},
			{"Answer" : "Somewhat", "Value" : "36"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "35"},
			{"Answer" : "Not very", "Value" : "42"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "14"},
			{"Answer" : "Somewhat", "Value" : "31"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "14"},
			{"Answer" : "Somewhat", "Value" : "36"},
			{"Answer" : "Not very", "Value" : "33"},
			{"Answer" : "Not at all", "Value" : "13"},
			{"Answer" : "Don't know", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "41"},
			{"Answer" : "Not at all", "Value" : "13"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "46"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "17"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "36"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "7"},
			{"Answer" : "Somewhat", "Value" : "40"},
			{"Answer" : "Not very", "Value" : "46"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "7"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "48"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q31I. Wrongful termination lawsuits ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "27"},
			{"Answer" : "Not very", "Value" : "48"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "47"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "22"},
			{"Answer" : "Not very", "Value" : "53"},
			{"Answer" : "Not at all", "Value" : "12"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "27"},
			{"Answer" : "Not very", "Value" : "47"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "34"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "27"},
			{"Answer" : "Not very", "Value" : "47"},
			{"Answer" : "Not at all", "Value" : "18"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "7"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "51"},
			{"Answer" : "Not at all", "Value" : "11"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "22"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "19"},
			{"Answer" : "Don't know", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "25"},
			{"Answer" : "Not very", "Value" : "48"},
			{"Answer" : "Not at all", "Value" : "18"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "30"},
			{"Answer" : "Not very", "Value" : "46"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "49"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "24"},
			{"Answer" : "Not very", "Value" : "54"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "33"},
			{"Answer" : "Not very", "Value" : "43"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q31J. Acts of God ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "15"},
			{"Answer" : "Not very", "Value" : "56"},
			{"Answer" : "Not at all", "Value" : "19"},
			{"Answer" : "Don't know", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "14"},
			{"Answer" : "Not very", "Value" : "57"},
			{"Answer" : "Not at all", "Value" : "21"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "18"},
			{"Answer" : "Not very", "Value" : "57"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "13"},
			{"Answer" : "Not very", "Value" : "53"},
			{"Answer" : "Not at all", "Value" : "22"},
			{"Answer" : "Don't know", "Value" : "6"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "18"},
			{"Answer" : "Not very", "Value" : "56"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "6"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "15"},
			{"Answer" : "Not very", "Value" : "54"},
			{"Answer" : "Not at all", "Value" : "21"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "15"},
			{"Answer" : "Not very", "Value" : "58"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "17"},
			{"Answer" : "Not very", "Value" : "53"},
			{"Answer" : "Not at all", "Value" : "19"},
			{"Answer" : "Don't know", "Value" : "6"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "18"},
			{"Answer" : "Not very", "Value" : "51"},
			{"Answer" : "Not at all", "Value" : "21"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "12"},
			{"Answer" : "Not very", "Value" : "61"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "4"},
			{"Answer" : "Somewhat", "Value" : "14"},
			{"Answer" : "Not very", "Value" : "61"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "23"},
			{"Answer" : "Not very", "Value" : "54"},
			{"Answer" : "Not at all", "Value" : "15"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "13"},
			{"Answer" : "Not very", "Value" : "56"},
			{"Answer" : "Not at all", "Value" : "24"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q31K. Key employee illness or death ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "15"},
			{"Answer" : "Somewhat", "Value" : "46"},
			{"Answer" : "Not very", "Value" : "31"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "15"},
			{"Answer" : "Somewhat", "Value" : "42"},
			{"Answer" : "Not very", "Value" : "33"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "45"},
			{"Answer" : "Not very", "Value" : "32"},
			{"Answer" : "Not at all", "Value" : "5"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "13"},
			{"Answer" : "Somewhat", "Value" : "48"},
			{"Answer" : "Not very", "Value" : "29"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "18"},
			{"Answer" : "Somewhat", "Value" : "47"},
			{"Answer" : "Not very", "Value" : "28"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "45"},
			{"Answer" : "Not very", "Value" : "30"},
			{"Answer" : "Not at all", "Value" : "8"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "12"},
			{"Answer" : "Somewhat", "Value" : "50"},
			{"Answer" : "Not very", "Value" : "32"},
			{"Answer" : "Not at all", "Value" : "4"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "18"},
			{"Answer" : "Somewhat", "Value" : "38"},
			{"Answer" : "Not very", "Value" : "30"},
			{"Answer" : "Not at all", "Value" : "10"},
			{"Answer" : "Don't know", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "19"},
			{"Answer" : "Somewhat", "Value" : "46"},
			{"Answer" : "Not very", "Value" : "26"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "15"},
			{"Answer" : "Somewhat", "Value" : "47"},
			{"Answer" : "Not very", "Value" : "30"},
			{"Answer" : "Not at all", "Value" : "7"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "45"},
			{"Answer" : "Not very", "Value" : "40"},
			{"Answer" : "Not at all", "Value" : "5"},
			{"Answer" : "Don't know", "Value" : "5"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "16"},
			{"Answer" : "Somewhat", "Value" : "47"},
			{"Answer" : "Not very", "Value" : "30"},
			{"Answer" : "Not at all", "Value" : "5"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "17"},
			{"Answer" : "Somewhat", "Value" : "46"},
			{"Answer" : "Not very", "Value" : "30"},
			{"Answer" : "Not at all", "Value" : "6"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q31L. Issues related to human rights violations including sexual harassment ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "25"},
			{"Answer" : "Not very", "Value" : "50"},
			{"Answer" : "Not at all", "Value" : "16"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very", "Value" : "0"},
			{"Answer" : "Somewhat", "Value" : "0"},
			{"Answer" : "Not very", "Value" : "0"},
			{"Answer" : "Not at all", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "27"},
			{"Answer" : "Not very", "Value" : "51"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very", "Value" : "11"},
			{"Answer" : "Somewhat", "Value" : "24"},
			{"Answer" : "Not very", "Value" : "48"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very", "Value" : "5"},
			{"Answer" : "Somewhat", "Value" : "22"},
			{"Answer" : "Not very", "Value" : "53"},
			{"Answer" : "Not at all", "Value" : "17"},
			{"Answer" : "Don't know", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very", "Value" : "10"},
			{"Answer" : "Somewhat", "Value" : "30"},
			{"Answer" : "Not very", "Value" : "44"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very", "Value" : "7"},
			{"Answer" : "Somewhat", "Value" : "23"},
			{"Answer" : "Not very", "Value" : "55"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "24"},
			{"Answer" : "Not very", "Value" : "51"},
			{"Answer" : "Not at all", "Value" : "14"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "29"},
			{"Answer" : "Not very", "Value" : "39"},
			{"Answer" : "Not at all", "Value" : "21"},
			{"Answer" : "Don't know", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "23"},
			{"Answer" : "Not very", "Value" : "49"},
			{"Answer" : "Not at all", "Value" : "19"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "25"},
			{"Answer" : "Not very", "Value" : "57"},
			{"Answer" : "Not at all", "Value" : "12"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very", "Value" : "9"},
			{"Answer" : "Somewhat", "Value" : "30"},
			{"Answer" : "Not very", "Value" : "46"},
			{"Answer" : "Not at all", "Value" : "13"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very", "Value" : "8"},
			{"Answer" : "Somewhat", "Value" : "28"},
			{"Answer" : "Not very", "Value" : "60"},
			{"Answer" : "Not at all", "Value" : "3"},
			{"Answer" : "Don't know", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very", "Value" : "6"},
			{"Answer" : "Somewhat", "Value" : "22"},
			{"Answer" : "Not very", "Value" : "49"},
			{"Answer" : "Not at all", "Value" : "21"},
			{"Answer" : "Don't know", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q32. Of those risks, which if you had to choose, do you see as the single greatest risk that you worry about?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "21"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "7"},
			{"Answer" : "Product liability", "Value" : "6"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "24"},
			{"Answer" : "Employee theft", "Value" : "3"},
			{"Answer" : "Professional errors and omissions", "Value" : "7"},
			{"Answer" : "Threats to your online reputation", "Value" : "2"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "2"},
			{"Answer" : "Acts of God", "Value" : "2"},
			{"Answer" : "Key employee illness or death", "Value" : "15"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "3"},
			{"Answer" : "Don't know", "Value" : "8"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "0"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "0"},
			{"Answer" : "Product liability", "Value" : "0"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "0"},
			{"Answer" : "Employee theft", "Value" : "0"},
			{"Answer" : "Professional errors and omissions", "Value" : "0"},
			{"Answer" : "Threats to your online reputation", "Value" : "0"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "0"},
			{"Answer" : "Acts of God", "Value" : "0"},
			{"Answer" : "Key employee illness or death", "Value" : "0"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "0"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "0"},
			{"Answer" : "Product liability", "Value" : "0"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "0"},
			{"Answer" : "Employee theft", "Value" : "0"},
			{"Answer" : "Professional errors and omissions", "Value" : "0"},
			{"Answer" : "Threats to your online reputation", "Value" : "0"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "0"},
			{"Answer" : "Acts of God", "Value" : "0"},
			{"Answer" : "Key employee illness or death", "Value" : "0"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "0"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "0"},
			{"Answer" : "Product liability", "Value" : "0"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "0"},
			{"Answer" : "Employee theft", "Value" : "0"},
			{"Answer" : "Professional errors and omissions", "Value" : "0"},
			{"Answer" : "Threats to your online reputation", "Value" : "0"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "0"},
			{"Answer" : "Acts of God", "Value" : "0"},
			{"Answer" : "Key employee illness or death", "Value" : "0"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "26"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "2"},
			{"Answer" : "Product liability", "Value" : "4"},
			{"Answer" : "Industrial espionage", "Value" : "1"},
			{"Answer" : "Data security", "Value" : "24"},
			{"Answer" : "Employee theft", "Value" : "5"},
			{"Answer" : "Professional errors and omissions", "Value" : "5"},
			{"Answer" : "Threats to your online reputation", "Value" : "3"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "1"},
			{"Answer" : "Acts of God", "Value" : "2"},
			{"Answer" : "Key employee illness or death", "Value" : "15"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "1"},
			{"Answer" : "Don't know", "Value" : "10"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "18"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "9"},
			{"Answer" : "Product liability", "Value" : "9"},
			{"Answer" : "Industrial espionage", "Value" : "1"},
			{"Answer" : "Data security", "Value" : "21"},
			{"Answer" : "Employee theft", "Value" : "2"},
			{"Answer" : "Professional errors and omissions", "Value" : "8"},
			{"Answer" : "Threats to your online reputation", "Value" : "2"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "1"},
			{"Answer" : "Acts of God", "Value" : "3"},
			{"Answer" : "Key employee illness or death", "Value" : "16"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "4"},
			{"Answer" : "Don't know", "Value" : "7"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "19"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "7"},
			{"Answer" : "Product liability", "Value" : "5"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "29"},
			{"Answer" : "Employee theft", "Value" : "4"},
			{"Answer" : "Professional errors and omissions", "Value" : "5"},
			{"Answer" : "Threats to your online reputation", "Value" : "2"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "2"},
			{"Answer" : "Acts of God", "Value" : "1"},
			{"Answer" : "Key employee illness or death", "Value" : "17"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "2"},
			{"Answer" : "Don't know", "Value" : "6"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "24"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "10"},
			{"Answer" : "Product liability", "Value" : "4"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "18"},
			{"Answer" : "Employee theft", "Value" : "1"},
			{"Answer" : "Professional errors and omissions", "Value" : "11"},
			{"Answer" : "Threats to your online reputation", "Value" : "1"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "3"},
			{"Answer" : "Acts of God", "Value" : "3"},
			{"Answer" : "Key employee illness or death", "Value" : "11"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "4"},
			{"Answer" : "Don't know", "Value" : "10"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "26"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "7"},
			{"Answer" : "Product liability", "Value" : "6"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "25"},
			{"Answer" : "Employee theft", "Value" : "3"},
			{"Answer" : "Professional errors and omissions", "Value" : "6"},
			{"Answer" : "Threats to your online reputation", "Value" : "2"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "1"},
			{"Answer" : "Acts of God", "Value" : "2"},
			{"Answer" : "Key employee illness or death", "Value" : "13"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "1"},
			{"Answer" : "Don't know", "Value" : "7"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "20"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "7"},
			{"Answer" : "Product liability", "Value" : "6"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "21"},
			{"Answer" : "Employee theft", "Value" : "4"},
			{"Answer" : "Professional errors and omissions", "Value" : "6"},
			{"Answer" : "Threats to your online reputation", "Value" : "3"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "2"},
			{"Answer" : "Acts of God", "Value" : "2"},
			{"Answer" : "Key employee illness or death", "Value" : "16"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "4"},
			{"Answer" : "Don't know", "Value" : "9"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "17"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "6"},
			{"Answer" : "Product liability", "Value" : "5"},
			{"Answer" : "Industrial espionage", "Value" : "1"},
			{"Answer" : "Data security", "Value" : "29"},
			{"Answer" : "Employee theft", "Value" : "2"},
			{"Answer" : "Professional errors and omissions", "Value" : "8"},
			{"Answer" : "Threats to your online reputation", "Value" : "2"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "2"},
			{"Answer" : "Acts of God", "Value" : "3"},
			{"Answer" : "Key employee illness or death", "Value" : "15"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "3"},
			{"Answer" : "Don't know", "Value" : "7"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "21"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "5"},
			{"Answer" : "Product liability", "Value" : "6"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "24"},
			{"Answer" : "Employee theft", "Value" : "3"},
			{"Answer" : "Professional errors and omissions", "Value" : "7"},
			{"Answer" : "Threats to your online reputation", "Value" : "3"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "2"},
			{"Answer" : "Acts of God", "Value" : "2"},
			{"Answer" : "Key employee illness or death", "Value" : "18"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "3"},
			{"Answer" : "Don't know", "Value" : "6"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "20"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "9"},
			{"Answer" : "Product liability", "Value" : "6"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "18"},
			{"Answer" : "Employee theft", "Value" : "2"},
			{"Answer" : "Professional errors and omissions", "Value" : "11"},
			{"Answer" : "Threats to your online reputation", "Value" : "4"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "0"},
			{"Answer" : "Acts of God", "Value" : "3"},
			{"Answer" : "Key employee illness or death", "Value" : "17"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "2"},
			{"Answer" : "Don't know", "Value" : "10"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "24"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "10"},
			{"Answer" : "Product liability", "Value" : "4"},
			{"Answer" : "Industrial espionage", "Value" : "1"},
			{"Answer" : "Data security", "Value" : "28"},
			{"Answer" : "Employee theft", "Value" : "3"},
			{"Answer" : "Professional errors and omissions", "Value" : "4"},
			{"Answer" : "Threats to your online reputation", "Value" : "1"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "2"},
			{"Answer" : "Acts of God", "Value" : "2"},
			{"Answer" : "Key employee illness or death", "Value" : "8"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "3"},
			{"Answer" : "Don't know", "Value" : "10"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "51"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "10"},
			{"Answer" : "Product liability", "Value" : "3"},
			{"Answer" : "Industrial espionage", "Value" : "0"},
			{"Answer" : "Data security", "Value" : "9"},
			{"Answer" : "Employee theft", "Value" : "3"},
			{"Answer" : "Professional errors and omissions", "Value" : "9"},
			{"Answer" : "Threats to your online reputation", "Value" : "1"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "1"},
			{"Answer" : "Acts of God", "Value" : "1"},
			{"Answer" : "Key employee illness or death", "Value" : "8"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "0"},
			{"Answer" : "Don't know", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Work related accidents", "Value" : "17"},
			{"Answer" : "Accidents affecting non-employees that you may be liable for", "Value" : "1"},
			{"Answer" : "Product liability", "Value" : "10"},
			{"Answer" : "Industrial espionage", "Value" : "1"},
			{"Answer" : "Data security", "Value" : "20"},
			{"Answer" : "Employee theft", "Value" : "0"},
			{"Answer" : "Professional errors and omissions", "Value" : "7"},
			{"Answer" : "Threats to your online reputation", "Value" : "0"},
			{"Answer" : "Wrongful termination lawsuits", "Value" : "2"},
			{"Answer" : "Acts of God", "Value" : "2"},
			{"Answer" : "Key employee illness or death", "Value" : "25"},
			{"Answer" : "Issues related to human rights violations including sexual harassment", "Value" : "4"},
			{"Answer" : "Don't know", "Value" : "11"}
		]}
	]}
]},
{ "Question" : "Q33A. Which of the following steps have you taken in the last two years to mitigate any of those risks?-Purchased additional insurance ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Took this step", "Value" : "45"},
			{"Answer" : "Have not", "Value" : "44"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "9"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "47"},
			{"Answer" : "Have not", "Value" : "44"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "7"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Took this step", "Value" : "44"},
			{"Answer" : "Have not", "Value" : "43"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "9"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Took this step", "Value" : "42"},
			{"Answer" : "Have not", "Value" : "46"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "8"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Took this step", "Value" : "48"},
			{"Answer" : "Have not", "Value" : "39"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "13"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Took this step", "Value" : "52"},
			{"Answer" : "Have not", "Value" : "37"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "8"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "44"},
			{"Answer" : "Have not", "Value" : "46"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "8"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "40"},
			{"Answer" : "Have not", "Value" : "47"},
			{"Answer" : "Have not but planning to", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "11"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "44"},
			{"Answer" : "Have not", "Value" : "47"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Took this step", "Value" : "45"},
			{"Answer" : "Have not", "Value" : "39"},
			{"Answer" : "Have not but planning to", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "14"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Took this step", "Value" : "47"},
			{"Answer" : "Have not", "Value" : "38"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "11"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Took this step", "Value" : "48"},
			{"Answer" : "Have not", "Value" : "39"},
			{"Answer" : "Have not but planning to", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "11"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "44"},
			{"Answer" : "Have not", "Value" : "43"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "9"}
		]}
	]}
]},
{ "Question" : "Q33B. Which of the following steps have you taken in the last two years to mitigate any of those risks?-Used services of consultants to plan ways to guard against risks ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Took this step", "Value" : "52"},
			{"Answer" : "Have not", "Value" : "43"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "51"},
			{"Answer" : "Have not", "Value" : "44"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Took this step", "Value" : "53"},
			{"Answer" : "Have not", "Value" : "40"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Took this step", "Value" : "50"},
			{"Answer" : "Have not", "Value" : "46"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Took this step", "Value" : "57"},
			{"Answer" : "Have not", "Value" : "41"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Took this step", "Value" : "59"},
			{"Answer" : "Have not", "Value" : "37"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "48"},
			{"Answer" : "Have not", "Value" : "47"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "52"},
			{"Answer" : "Have not", "Value" : "43"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "44"},
			{"Answer" : "Have not", "Value" : "51"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Took this step", "Value" : "60"},
			{"Answer" : "Have not", "Value" : "36"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Took this step", "Value" : "62"},
			{"Answer" : "Have not", "Value" : "32"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Took this step", "Value" : "66"},
			{"Answer" : "Have not", "Value" : "31"},
			{"Answer" : "Have not but planning to", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "43"},
			{"Answer" : "Have not", "Value" : "50"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q33C. Which of the following steps have you taken in the last two years to mitigate any of those risks?-Added additional employees that work specifically to address risks ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Took this step", "Value" : "22"},
			{"Answer" : "Have not", "Value" : "73"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "26"},
			{"Answer" : "Have not", "Value" : "72"},
			{"Answer" : "Have not but planning to", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Took this step", "Value" : "24"},
			{"Answer" : "Have not", "Value" : "69"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Took this step", "Value" : "16"},
			{"Answer" : "Have not", "Value" : "78"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Took this step", "Value" : "22"},
			{"Answer" : "Have not", "Value" : "71"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Took this step", "Value" : "22"},
			{"Answer" : "Have not", "Value" : "70"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "20"},
			{"Answer" : "Have not", "Value" : "77"},
			{"Answer" : "Have not but planning to", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "26"},
			{"Answer" : "Have not", "Value" : "69"},
			{"Answer" : "Have not but planning to", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "14"},
			{"Answer" : "Have not", "Value" : "81"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Took this step", "Value" : "20"},
			{"Answer" : "Have not", "Value" : "72"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Took this step", "Value" : "39"},
			{"Answer" : "Have not", "Value" : "59"},
			{"Answer" : "Have not but planning to", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Took this step", "Value" : "28"},
			{"Answer" : "Have not", "Value" : "63"},
			{"Answer" : "Have not but planning to", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "7"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "16"},
			{"Answer" : "Have not", "Value" : "78"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q33D. Which of the following steps have you taken in the last two years to mitigate any of those risks?-Instituted mandatory trainings for employees to protect against risks ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Took this step", "Value" : "68"},
			{"Answer" : "Have not", "Value" : "26"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "71"},
			{"Answer" : "Have not", "Value" : "24"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Took this step", "Value" : "69"},
			{"Answer" : "Have not", "Value" : "26"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Took this step", "Value" : "62"},
			{"Answer" : "Have not", "Value" : "30"},
			{"Answer" : "Have not but planning to", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Took this step", "Value" : "75"},
			{"Answer" : "Have not", "Value" : "19"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Took this step", "Value" : "74"},
			{"Answer" : "Have not", "Value" : "20"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "70"},
			{"Answer" : "Have not", "Value" : "26"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "58"},
			{"Answer" : "Have not", "Value" : "33"},
			{"Answer" : "Have not but planning to", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "62"},
			{"Answer" : "Have not", "Value" : "32"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Took this step", "Value" : "66"},
			{"Answer" : "Have not", "Value" : "26"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Took this step", "Value" : "82"},
			{"Answer" : "Have not", "Value" : "13"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Took this step", "Value" : "80"},
			{"Answer" : "Have not", "Value" : "15"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "66"},
			{"Answer" : "Have not", "Value" : "28"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q33E. Which of the following steps have you taken in the last two years to mitigate any of those risks?-Added explanatory materials to policy/procedures manual/materials ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Took this step", "Value" : "64"},
			{"Answer" : "Have not", "Value" : "30"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "65"},
			{"Answer" : "Have not", "Value" : "28"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Took this step", "Value" : "64"},
			{"Answer" : "Have not", "Value" : "30"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Took this step", "Value" : "61"},
			{"Answer" : "Have not", "Value" : "31"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Took this step", "Value" : "66"},
			{"Answer" : "Have not", "Value" : "30"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Took this step", "Value" : "62"},
			{"Answer" : "Have not", "Value" : "28"},
			{"Answer" : "Have not but planning to", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "68"},
			{"Answer" : "Have not", "Value" : "27"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "57"},
			{"Answer" : "Have not", "Value" : "38"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "58"},
			{"Answer" : "Have not", "Value" : "36"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Took this step", "Value" : "67"},
			{"Answer" : "Have not", "Value" : "24"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Took this step", "Value" : "72"},
			{"Answer" : "Have not", "Value" : "22"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Took this step", "Value" : "67"},
			{"Answer" : "Have not", "Value" : "28"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "60"},
			{"Answer" : "Have not", "Value" : "31"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q33F. Which of the following steps have you taken in the last two years to mitigate any of those risks?-Added software designed to address risks ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Took this step", "Value" : "38"},
			{"Answer" : "Have not", "Value" : "55"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "48"},
			{"Answer" : "Have not", "Value" : "48"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Took this step", "Value" : "34"},
			{"Answer" : "Have not", "Value" : "55"},
			{"Answer" : "Have not but planning to", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Took this step", "Value" : "37"},
			{"Answer" : "Have not", "Value" : "58"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Took this step", "Value" : "32"},
			{"Answer" : "Have not", "Value" : "61"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Took this step", "Value" : "39"},
			{"Answer" : "Have not", "Value" : "55"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "37"},
			{"Answer" : "Have not", "Value" : "55"},
			{"Answer" : "Have not but planning to", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "40"},
			{"Answer" : "Have not", "Value" : "54"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "33"},
			{"Answer" : "Have not", "Value" : "60"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Took this step", "Value" : "35"},
			{"Answer" : "Have not", "Value" : "57"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Took this step", "Value" : "50"},
			{"Answer" : "Have not", "Value" : "43"},
			{"Answer" : "Have not but planning to", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Took this step", "Value" : "26"},
			{"Answer" : "Have not", "Value" : "68"},
			{"Answer" : "Have not but planning to", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "28"},
			{"Answer" : "Have not", "Value" : "65"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]}
]},
{ "Question" : "Q33G. Which of the following steps have you taken in the last two years to mitigate any of those risks?-Terminated specific products or services that you deemed to be too risky ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Took this step", "Value" : "19"},
			{"Answer" : "Have not", "Value" : "74"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Took this step", "Value" : "0"},
			{"Answer" : "Have not", "Value" : "0"},
			{"Answer" : "Have not but planning to", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "21"},
			{"Answer" : "Have not", "Value" : "78"},
			{"Answer" : "Have not but planning to", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Took this step", "Value" : "21"},
			{"Answer" : "Have not", "Value" : "69"},
			{"Answer" : "Have not but planning to", "Value" : "7"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Took this step", "Value" : "17"},
			{"Answer" : "Have not", "Value" : "75"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Took this step", "Value" : "15"},
			{"Answer" : "Have not", "Value" : "76"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Took this step", "Value" : "17"},
			{"Answer" : "Have not", "Value" : "77"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "16"},
			{"Answer" : "Have not", "Value" : "76"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Took this step", "Value" : "27"},
			{"Answer" : "Have not", "Value" : "67"},
			{"Answer" : "Have not but planning to", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "17"},
			{"Answer" : "Have not", "Value" : "77"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Took this step", "Value" : "22"},
			{"Answer" : "Have not", "Value" : "72"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Took this step", "Value" : "20"},
			{"Answer" : "Have not", "Value" : "71"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Took this step", "Value" : "23"},
			{"Answer" : "Have not", "Value" : "68"},
			{"Answer" : "Have not but planning to", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Took this step", "Value" : "18"},
			{"Answer" : "Have not", "Value" : "75"},
			{"Answer" : "Have not but planning to", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "2"}
		]}
	]}
]},
{ "Question" : "Q34. As you consider the risks that you and your business face, do you feel safer today than you did two years ago, less safe or about as safe today as you did two years ago?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Safer", "Value" : "14"},
			{"Answer" : "Less safe", "Value" : "40"},
			{"Answer" : "About the same", "Value" : "46"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Safer", "Value" : "0"},
			{"Answer" : "Less safe", "Value" : "0"},
			{"Answer" : "About the same", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Safer", "Value" : "0"},
			{"Answer" : "Less safe", "Value" : "0"},
			{"Answer" : "About the same", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Safer", "Value" : "0"},
			{"Answer" : "Less safe", "Value" : "0"},
			{"Answer" : "About the same", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Safer", "Value" : "17"},
			{"Answer" : "Less safe", "Value" : "33"},
			{"Answer" : "About the same", "Value" : "50"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Safer", "Value" : "11"},
			{"Answer" : "Less safe", "Value" : "45"},
			{"Answer" : "About the same", "Value" : "44"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Safer", "Value" : "13"},
			{"Answer" : "Less safe", "Value" : "40"},
			{"Answer" : "About the same", "Value" : "47"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Safer", "Value" : "14"},
			{"Answer" : "Less safe", "Value" : "43"},
			{"Answer" : "About the same", "Value" : "43"},
			{"Answer" : "Refused", "Value" : "0"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Safer", "Value" : "25"},
			{"Answer" : "Less safe", "Value" : "28"},
			{"Answer" : "About the same", "Value" : "46"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Safer", "Value" : "10"},
			{"Answer" : "Less safe", "Value" : "38"},
			{"Answer" : "About the same", "Value" : "52"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Safer", "Value" : "6"},
			{"Answer" : "Less safe", "Value" : "59"},
			{"Answer" : "About the same", "Value" : "35"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Safer", "Value" : "13"},
			{"Answer" : "Less safe", "Value" : "42"},
			{"Answer" : "About the same", "Value" : "45"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Safer", "Value" : "11"},
			{"Answer" : "Less safe", "Value" : "30"},
			{"Answer" : "About the same", "Value" : "59"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Safer", "Value" : "17"},
			{"Answer" : "Less safe", "Value" : "41"},
			{"Answer" : "About the same", "Value" : "41"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Safer", "Value" : "15"},
			{"Answer" : "Less safe", "Value" : "32"},
			{"Answer" : "About the same", "Value" : "53"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Safer", "Value" : "17"},
			{"Answer" : "Less safe", "Value" : "37"},
			{"Answer" : "About the same", "Value" : "45"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]}
]},
{ "Question" : "Q35. If you had it all to do all over again, considering all factors, would you locate your business in New York or someplace else?", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "New York", "Value" : "29"},
			{"Answer" : "Someplace else", "Value" : "67"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Upstate 2014", "Answers" : [
			{"Answer" : "New York", "Value" : "28"},
			{"Answer" : "Someplace else", "Value" : "69"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Upstate 2013", "Answers" : [
			{"Answer" : "New York", "Value" : "29"},
			{"Answer" : "Someplace else", "Value" : "65"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "New York", "Value" : "0"},
			{"Answer" : "Someplace else", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "New York", "Value" : "33"},
			{"Answer" : "Someplace else", "Value" : "63"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "New York", "Value" : "31"},
			{"Answer" : "Someplace else", "Value" : "67"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "New York", "Value" : "26"},
			{"Answer" : "Someplace else", "Value" : "72"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "New York", "Value" : "28"},
			{"Answer" : "Someplace else", "Value" : "68"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "New York", "Value" : "46"},
			{"Answer" : "Someplace else", "Value" : "52"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "New York", "Value" : "27"},
			{"Answer" : "Someplace else", "Value" : "69"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "New York", "Value" : "14"},
			{"Answer" : "Someplace else", "Value" : "83"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "New York", "Value" : "29"},
			{"Answer" : "Someplace else", "Value" : "68"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "New York", "Value" : "26"},
			{"Answer" : "Someplace else", "Value" : "71"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "New York", "Value" : "32"},
			{"Answer" : "Someplace else", "Value" : "62"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "New York", "Value" : "29"},
			{"Answer" : "Someplace else", "Value" : "67"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "New York", "Value" : "26"},
			{"Answer" : "Someplace else", "Value" : "72"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "New York", "Value" : "32"},
			{"Answer" : "Someplace else", "Value" : "62"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "New York", "Value" : "30"},
			{"Answer" : "Someplace else", "Value" : "66"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]}
]},
{ "Question" : "Q36A. State and Local Project Approval Process ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "24"},
			{"Answer" : "Somewhat significant", "Value" : "34"},
			{"Answer" : "Not very significant", "Value" : "25"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "24"},
			{"Answer" : "Somewhat significant", "Value" : "34"},
			{"Answer" : "Not very significant", "Value" : "24"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "24"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "22"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "24"},
			{"Answer" : "Somewhat significant", "Value" : "33"},
			{"Answer" : "Not very significant", "Value" : "26"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "23"},
			{"Answer" : "Somewhat significant", "Value" : "33"},
			{"Answer" : "Not very significant", "Value" : "33"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "29"},
			{"Answer" : "Somewhat significant", "Value" : "30"},
			{"Answer" : "Not very significant", "Value" : "24"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "18"},
			{"Answer" : "Somewhat significant", "Value" : "36"},
			{"Answer" : "Not very significant", "Value" : "27"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "30"},
			{"Answer" : "Somewhat significant", "Value" : "34"},
			{"Answer" : "Not very significant", "Value" : "24"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "23"},
			{"Answer" : "Somewhat significant", "Value" : "37"},
			{"Answer" : "Not very significant", "Value" : "25"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "22"},
			{"Answer" : "Somewhat significant", "Value" : "33"},
			{"Answer" : "Not very significant", "Value" : "31"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "29"},
			{"Answer" : "Somewhat significant", "Value" : "30"},
			{"Answer" : "Not very significant", "Value" : "22"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "10"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "33"},
			{"Answer" : "Somewhat significant", "Value" : "40"},
			{"Answer" : "Not very significant", "Value" : "15"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "15"},
			{"Answer" : "Somewhat significant", "Value" : "37"},
			{"Answer" : "Not very significant", "Value" : "26"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "8"}
		]}
	]}
]},
{ "Question" : "Q36B. Cost of Complying with State Regulations ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "45"},
			{"Answer" : "Somewhat significant", "Value" : "36"},
			{"Answer" : "Not very significant", "Value" : "13"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "38"},
			{"Answer" : "Somewhat significant", "Value" : "42"},
			{"Answer" : "Not very significant", "Value" : "13"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "51"},
			{"Answer" : "Somewhat significant", "Value" : "32"},
			{"Answer" : "Not very significant", "Value" : "9"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "43"},
			{"Answer" : "Somewhat significant", "Value" : "37"},
			{"Answer" : "Not very significant", "Value" : "15"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "48"},
			{"Answer" : "Somewhat significant", "Value" : "29"},
			{"Answer" : "Not very significant", "Value" : "15"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "39"},
			{"Answer" : "Somewhat significant", "Value" : "41"},
			{"Answer" : "Not very significant", "Value" : "13"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "37"},
			{"Answer" : "Somewhat significant", "Value" : "38"},
			{"Answer" : "Not very significant", "Value" : "16"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "66"},
			{"Answer" : "Somewhat significant", "Value" : "24"},
			{"Answer" : "Not very significant", "Value" : "6"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "47"},
			{"Answer" : "Somewhat significant", "Value" : "34"},
			{"Answer" : "Not very significant", "Value" : "15"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "39"},
			{"Answer" : "Somewhat significant", "Value" : "45"},
			{"Answer" : "Not very significant", "Value" : "14"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "45"},
			{"Answer" : "Somewhat significant", "Value" : "34"},
			{"Answer" : "Not very significant", "Value" : "9"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "10"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "48"},
			{"Answer" : "Somewhat significant", "Value" : "37"},
			{"Answer" : "Not very significant", "Value" : "11"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "40"},
			{"Answer" : "Somewhat significant", "Value" : "36"},
			{"Answer" : "Not very significant", "Value" : "16"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]}
]},
{ "Question" : "Q36C. Lack of Skilled Workers ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "24"},
			{"Answer" : "Somewhat significant", "Value" : "36"},
			{"Answer" : "Not very significant", "Value" : "28"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "29"},
			{"Answer" : "Somewhat significant", "Value" : "33"},
			{"Answer" : "Not very significant", "Value" : "29"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "30"},
			{"Answer" : "Somewhat significant", "Value" : "29"},
			{"Answer" : "Not very significant", "Value" : "29"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "19"},
			{"Answer" : "Somewhat significant", "Value" : "39"},
			{"Answer" : "Not very significant", "Value" : "27"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "15"},
			{"Answer" : "Somewhat significant", "Value" : "47"},
			{"Answer" : "Not very significant", "Value" : "28"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "25"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "34"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "26"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "26"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "21"},
			{"Answer" : "Somewhat significant", "Value" : "38"},
			{"Answer" : "Not very significant", "Value" : "28"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "10"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "24"},
			{"Answer" : "Somewhat significant", "Value" : "33"},
			{"Answer" : "Not very significant", "Value" : "33"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "9"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "26"},
			{"Answer" : "Somewhat significant", "Value" : "45"},
			{"Answer" : "Not very significant", "Value" : "23"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "22"},
			{"Answer" : "Somewhat significant", "Value" : "36"},
			{"Answer" : "Not very significant", "Value" : "25"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "8"},
			{"Answer" : "Refused", "Value" : "9"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "28"},
			{"Answer" : "Somewhat significant", "Value" : "37"},
			{"Answer" : "Not very significant", "Value" : "28"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "34"},
			{"Answer" : "Somewhat significant", "Value" : "33"},
			{"Answer" : "Not very significant", "Value" : "23"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "5"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]}
]},
{ "Question" : "Q36D. Lack of Financing ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "8"},
			{"Answer" : "Somewhat significant", "Value" : "18"},
			{"Answer" : "Not very significant", "Value" : "48"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "23"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "7"},
			{"Answer" : "Somewhat significant", "Value" : "10"},
			{"Answer" : "Not very significant", "Value" : "51"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "29"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "5"},
			{"Answer" : "Somewhat significant", "Value" : "22"},
			{"Answer" : "Not very significant", "Value" : "47"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "22"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "8"},
			{"Answer" : "Somewhat significant", "Value" : "22"},
			{"Answer" : "Not very significant", "Value" : "46"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "11"},
			{"Answer" : "Somewhat significant", "Value" : "20"},
			{"Answer" : "Not very significant", "Value" : "44"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "5"},
			{"Answer" : "Somewhat significant", "Value" : "15"},
			{"Answer" : "Not very significant", "Value" : "56"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "8"},
			{"Answer" : "Somewhat significant", "Value" : "18"},
			{"Answer" : "Not very significant", "Value" : "44"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "27"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "10"},
			{"Answer" : "Somewhat significant", "Value" : "24"},
			{"Answer" : "Not very significant", "Value" : "44"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "19"},
			{"Answer" : "Refused", "Value" : "3"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "9"},
			{"Answer" : "Somewhat significant", "Value" : "20"},
			{"Answer" : "Not very significant", "Value" : "50"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "21"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "7"},
			{"Answer" : "Somewhat significant", "Value" : "15"},
			{"Answer" : "Not very significant", "Value" : "54"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "25"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "6"},
			{"Answer" : "Somewhat significant", "Value" : "20"},
			{"Answer" : "Not very significant", "Value" : "40"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "26"},
			{"Answer" : "Refused", "Value" : "8"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "6"},
			{"Answer" : "Somewhat significant", "Value" : "13"},
			{"Answer" : "Not very significant", "Value" : "64"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "7"},
			{"Answer" : "Somewhat significant", "Value" : "18"},
			{"Answer" : "Not very significant", "Value" : "44"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "25"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]}
]},
{ "Question" : "Q36E. Cost of State and Local Taxes ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "51"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "8"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "42"},
			{"Answer" : "Somewhat significant", "Value" : "41"},
			{"Answer" : "Not very significant", "Value" : "9"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "59"},
			{"Answer" : "Somewhat significant", "Value" : "28"},
			{"Answer" : "Not very significant", "Value" : "7"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "52"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "7"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "48"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "11"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "4"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "37"},
			{"Answer" : "Somewhat significant", "Value" : "46"},
			{"Answer" : "Not very significant", "Value" : "12"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "3"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "50"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "8"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "3"},
			{"Answer" : "Refused", "Value" : "4"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "67"},
			{"Answer" : "Somewhat significant", "Value" : "22"},
			{"Answer" : "Not very significant", "Value" : "5"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "2"},
			{"Answer" : "Refused", "Value" : "4"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "53"},
			{"Answer" : "Somewhat significant", "Value" : "37"},
			{"Answer" : "Not very significant", "Value" : "8"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "54"},
			{"Answer" : "Somewhat significant", "Value" : "39"},
			{"Answer" : "Not very significant", "Value" : "7"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "45"},
			{"Answer" : "Somewhat significant", "Value" : "29"},
			{"Answer" : "Not very significant", "Value" : "10"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "6"},
			{"Answer" : "Refused", "Value" : "9"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "45"},
			{"Answer" : "Somewhat significant", "Value" : "45"},
			{"Answer" : "Not very significant", "Value" : "8"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "48"},
			{"Answer" : "Somewhat significant", "Value" : "37"},
			{"Answer" : "Not very significant", "Value" : "9"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "1"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]}
]},
{ "Question" : "Q36F. Access to New/Expanding Markets ", 
"Categories" : [
	{"Category" : "Upstate", "Filters" : [
		{"Filter" : "Upstate 2015", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "13"},
			{"Answer" : "Somewhat significant", "Value" : "30"},
			{"Answer" : "Not very significant", "Value" : "37"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "15"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Region", "Filters" : [
		{"Filter" : "Alb", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Buff", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Roch", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "0"},
			{"Answer" : "Somewhat significant", "Value" : "0"},
			{"Answer" : "Not very significant", "Value" : "0"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "0"},
			{"Answer" : "Refused", "Value" : "0"}
		]},
		{"Filter" : "Syr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "7"},
			{"Answer" : "Somewhat significant", "Value" : "31"},
			{"Answer" : "Not very significant", "Value" : "40"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "17"},
			{"Answer" : "Refused", "Value" : "5"}
		]}
	]},
	{"Category" : "Cluster", "Filters" : [
		{"Filter" : "High", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "11"},
			{"Answer" : "Somewhat significant", "Value" : "28"},
			{"Answer" : "Not very significant", "Value" : "41"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "7"}
		]},
		{"Filter" : "Middle", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "17"},
			{"Answer" : "Somewhat significant", "Value" : "29"},
			{"Answer" : "Not very significant", "Value" : "35"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "Low", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "20"},
			{"Answer" : "Somewhat significant", "Value" : "35"},
			{"Answer" : "Not very significant", "Value" : "29"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "1"}
		]}
	]},
	{"Category" : "Company Size", "Filters" : [
		{"Filter" : "50 or less", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "6"},
			{"Answer" : "Somewhat significant", "Value" : "32"},
			{"Answer" : "Not very significant", "Value" : "42"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "14"},
			{"Answer" : "Refused", "Value" : "6"}
		]},
		{"Filter" : "51 to 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "14"},
			{"Answer" : "Somewhat significant", "Value" : "31"},
			{"Answer" : "Not very significant", "Value" : "34"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "16"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "More than 100", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "19"},
			{"Answer" : "Somewhat significant", "Value" : "25"},
			{"Answer" : "Not very significant", "Value" : "37"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]},
	{"Category" : "Industry", "Filters" : [
		{"Filter" : "Eng & Constr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "14"},
			{"Answer" : "Somewhat significant", "Value" : "32"},
			{"Answer" : "Not very significant", "Value" : "40"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "13"},
			{"Answer" : "Refused", "Value" : "1"}
		]},
		{"Filter" : "Manuf", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "15"},
			{"Answer" : "Somewhat significant", "Value" : "25"},
			{"Answer" : "Not very significant", "Value" : "48"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "2"}
		]},
		{"Filter" : "Retail", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "11"},
			{"Answer" : "Somewhat significant", "Value" : "31"},
			{"Answer" : "Not very significant", "Value" : "26"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "20"},
			{"Answer" : "Refused", "Value" : "12"}
		]},
		{"Filter" : "Service", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "9"},
			{"Answer" : "Somewhat significant", "Value" : "29"},
			{"Answer" : "Not very significant", "Value" : "46"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "11"},
			{"Answer" : "Refused", "Value" : "5"}
		]},
		{"Filter" : "Whole & Distr", "Answers" : [
			{"Answer" : "Very significant obstacle", "Value" : "13"},
			{"Answer" : "Somewhat significant", "Value" : "32"},
			{"Answer" : "Not very significant", "Value" : "37"},
			{"Answer" : "Not at all a significant obstacle", "Value" : "12"},
			{"Answer" : "Refused", "Value" : "6"}
		]}
	]}
]}
]}`;

var obj = JSON.parse(text);

var flag = "FLAG";

/* 
document.getElementById("somedata").innerHTML = obj.Data[0].Categories[0].Filters[0].Filter + "<br>" +
obj.Data[0].Categories[0].Filters[0].Answers[0].Answer + "<br>" + 
obj.Data[0].Categories[0].Filters[0].Answers[0].Value;

//iterating through every question
var output = "";
for (i = 0; i < obj.Data.length; i++) {
	output += obj.Data[i].Question + "<br>";
}
document.getElementById("question").innerHTML = output; */