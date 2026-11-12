var historyStack = [{}]; // Maintain a history stack

var x = "If you have any existing Khatian No, You are requested to update your mobile no to get SMS intimation."


var data= {
	"chatinit":{
		title: ["Hello <span class='emoji'> &#128075;</span>","Welcome to BanglarBhumi.I am Bhumi  your anytime assistant available 24x7. I am here to assist you. ","Please select your preferred language-"],
		options: ["English","\u09AC\u09BE\u0982\u09B2\u09BE" ]
	},
	
	
	
	
	"\u09AC\u09BE\u0982\u09B2\u09BE":
	{
		title: ["\u09AC\u09BE\u0982\u09B2\u09BE\u09B0\u09AD\u09C2\u09AE\u09BF\u09B0\u0020\u09AE\u09BE\u09A7\u09CD\u09AF\u09AE\u09C7\u0020\u09AF\u09C7\u0995\u09CB\u09A8\u09CB\u0020\u09A7\u09B0\u09A8\u09C7\u09B0\u0020\u09B8\u09C7\u09AC\u09BE\u0020\u09AA\u09C7\u09A4\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09AC\u09BE\u0982\u09B2\u09BE\u09B0\u09AD\u09C2\u09AE\u09BF\u09A4\u09C7\u0020\u098F\u0995\u099F\u09BF\u0020\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u0020\u09A4\u09C8\u09B0\u09BF\u0020\u0995\u09B0\u09BE\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0985\u09A8\u09C1\u09B0\u09CB\u09A7\u0020\u0995\u09B0\u09BE\u0020\u09B9\u099A\u09CD\u099B\u09C7" , "\u0986\u09AA\u09A8\u09BE\u09B0\u0020\u09AF\u09A6\u09BF\u0020\u098F\u0995\u099F\u09BF\u0020\u09AC\u09BF\u09A6\u09CD\u09AF\u09AE\u09BE\u09A8\u0020\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u0020\u09A5\u09BE\u0995\u09C7\u0020\u09A4\u09AC\u09C7\u0020\u09A6\u09AF\u09BC\u09BE\u0020\u0995\u09B0\u09C7\u0020\u09AA\u09CD\u09B0\u09A7\u09BE\u09A8\u0020\u09AE\u09C7\u09A8\u09C1\u0020\u09A8\u09BF\u09B0\u09CD\u09AC\u09BE\u099A\u09A8\u0020\u0995\u09B0\u09C1\u09A8"],
		options: ["\u098F\u0995\u099F\u09BF\u0020\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u0020\u09A4\u09C8\u09B0\u09BF\u0020\u0995\u09B0\u09A4\u09C7\u0020\u098F\u0996\u09BE\u09A8\u09C7\u0020\u0995\u09CD\u09B2\u09BF\u0995\u0020\u0995\u09B0\u09C1\u09A8","\u09AA\u09CD\u09B0\u09A7\u09BE\u09A8\u0020\u09AE\u09C7\u09A8\u09C1"],
		url: {

		},
		

	},	"english":
	{
		title : ["To get any type of service through Banglarbhumi you are requested to create an account in Banglarbhumi", "If you have an existing account kindly select main menu "],
		options:["Click here to Create an Account" ,   "Main Menu" ],
		url : {
				
		},
	
	},
	// main menu bangla 
	"\u09AA\u09CD\u09B0\u09A7\u09BE\u09A8" : {
		
		title:["\u0985\u09A8\u09C1\u0997\u09CD\u09B0\u09B9\u0020\u0995\u09B0\u09C7\u0020\u098F\u0987\u0020\u09A8\u09BF\u09AE\u09CD\u09A8\u09B2\u09BF\u0996\u09BF\u09A4\u0020\u09AA\u09B0\u09BF\u09B7\u09C7\u09AC\u09BE\u0997\u09C1\u09B2\u09BF\u09B0\u0020\u09AE\u09A7\u09CD\u09AF\u09C7\u0020\u09AF\u09C7\u0995\u09CB\u09A8\u09CB\u0020\u098F\u0995\u099F\u09BF\u0020\u09AC\u09C7\u099B\u09C7\u0020\u09A8\u09BF\u09A8"],
		options:['\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8','\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8','\u0993\u09DF\u09BE\u09B0\u09BF\u09B6\u0020\u09A8\u09A5\u09BF\u09AD\u09C2\u0995\u09CD\u09A4\u09BF\u0995\u09B0\u09A8','\u0996\u09BE\u099C\u09A8\u09BE' , '\u09AE\u09CC\u099C\u09BE\u0020\u09AE\u09CD\u09AF\u09BE\u09AA' , '\u0986\u09B0\u0993\u0986\u09B0' ,'\u09AA\u09CD\u09B2\u099F\u0020\u09AE\u09CD\u09AF\u09BE\u09AA',  '\u09B9\u09BE\u09B2\u0020\u002D\u0020\u09B8\u09BE\u09AC\u09C7\u0995\u0020\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09A4\u09A5\u09CD\u09AF' , '\u0986\u09AA\u09A8\u09BE\u09B0\u0020\u09B8\u09AE\u09CD\u09AA\u09A4\u09CD\u09A4\u09BF\u09B0\u0020\u09AC\u09BF\u09AC\u09B0\u09A3' , '\u0985\u09AD\u09BF\u09AF\u09CB\u0997\u0020\u0997\u09CD\u09B0\u09B9\u09A8' ],
					// mutation                                    conversion                                                                                                                 warish                                                                                                              khajna                                mouza map                                                    ror  pi                           plot map                                                             hal sabek                  
		
		url : {
			
		}
	},
	
	"main": {
		title:["Please choose any of these following services"],
		options:['Mutation','Conversion','Warish','Khajna-Land Revenue' , 'Mouza Map' , 'ROR-PI' ,'Plot Map',  'Hal Sabek (RS-LR) Information' , 'Know Your Property' , 'Grievance' ],
		url : {
			
		}
	},

	
	"fees" : {
		
		title:["Conversion Fees Structure"],
		options:[ 'Application in 1(A) Form' , 'Post-facto Regularization'],	
		url : {
			
		}
	},
	// conversion fees structure bangla 
	"\u099C\u09AE\u09BF\u09B0" : {
		
		title:[""],
		options:[ 'PDF1' , 'PDF2'],	
		url : {
			
		}
	},
	
"mouza" : {
		
		title:["How may I assist you regarding Mouza Map"],
		options:['How to apply for Mouza Map' , 'Apply for Mouza Map' , 'Track Application Status' ],
		url : {
			
		}
	},
	// mouza bangla 
	"\u09AE\u09CC\u099C\u09BE" : {
		title:["\u09AE\u09CC\u099C\u09BE\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u0020\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7\u0020\u0986\u09AE\u09BF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF\u003F"],
		options:['\u09AE\u09CC\u099C\u09BE\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8' , '\u09AE\u09CC\u099C\u09BE\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8' , '\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u0020\u09AF\u09BE\u099A\u09BE\u0987\u0020\u0995\u09B0\u09C1\u09A8' ],
		url : {
			
		}
		
	} , 
	

"warish" : {
		
		title:["How may assist you regarding Warish Mutation!!"],
		options:[ 'How to apply Warish Mutation', , 'Apply for Warish Mutation'  ],
		/*	' Necessary documents required to apply Warish Mutation' ],*/
		url : {
			
		}
	},
	
"\u0993\u09DF\u09BE\u09B0\u09BF\u09B6" : {
	
	title:["\u0993\u09AF\u09BC\u09BE\u09B0\u09BF\u09B6\u0020\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u09AC\u09CD\u09AF\u09BE\u09AA\u09BE\u09B0\u09C7\u0020\u0986\u09AE\u09BF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF\u003F"],
	options:[ '\u0993\u09AF\u09BC\u09BE\u09B0\u09BF\u09B6\u0020\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8',  '\u0993\u09AF\u09BC\u09BE\u09B0\u09BF\u09B6\u0020\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8'],
	url : {
		
	}
} , 
	
	
	
"mutation" : {
		
		title:["How may I assist you regarding Mutation of land!!"],
		options:['How to apply for Mutation','Fee Structure' , 'FAQ for Mutation' , 'Apply for Mutation'],
		url : {
			
		}
	},
		
	// mutation bangla 
	
	"\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8": {
		title:["\u099C\u09AE\u09BF\u09B0\u0020\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u09AC\u09CD\u09AF\u09BE\u09AA\u09BE\u09B0\u09C7\u0020\u0986\u09AE\u09BF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF\u003F"],
		options:['\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8','\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u09AB\u09BF\u0020\u09B8\u09CD\u099F\u09CD\u09B0\u09BE\u0995\u099A\u09BE\u09B0' , '\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0046\u0041\u0051' , '\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8'],
		url : {
			
		}
		
	},
	
"conversion" : {
		
		title:["How may I assist you regarding Conversion of land!!"],
		options:['How to Apply for Conversion','Fees Structure of Conversion' , 'FAQ for Conversion' , 'Apply for Conversion'],
		url : {
			
		}
	},
	// conversion bangla 
	"\u099C\u09AE\u09BF\u09B0" : {
		
		title:["\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u09AC\u09CD\u09AF\u09BE\u09AA\u09BE\u09B0\u09C7\u0020\u0986\u09AE\u09BF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09B8\u09BE\u09B9\u09BE\u09AF\u09CD\u09AF\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF\u003F"],
		options:['\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u09AA\u09A6\u09CD\u09A7\u09A4\u09BF','\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u09AB\u09BF\u0020\u0995\u09BE\u09A0\u09BE\u09AE\u09CB' , '\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0046\u0041\u0051' , '\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8'],
		url : {
			
		}
	} , 
	
	
	"khajna" : {
		
		title:["How may I assist you regarding Land Revenue(Khajna)"],
		options:['How to Apply for Khajna', 'Pay your Khajna'],
		url : {
//			
		}
	},
	
	// kajna bangla 
	"\u0996\u09BE\u099C\u09A8\u09BE":{
		title:["\u09AD\u09C2\u09AE\u09BF\u0020\u09B0\u09BE\u099C\u09B8\u09CD\u09AC\u0020\u0028\u0996\u09BE\u099C\u09A8\u09BE\u0029\u0020\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7\u0020\u0986\u09AE\u09BF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF"],
		options:['\u0996\u09BE\u099C\u09A8\u09BE\u09B0\u0020\u09AA\u09CD\u09B0\u09A6\u09BE\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8', '\u0996\u09BE\u099C\u09A8\u09BE\u0020\u09AA\u09CD\u09B0\u09A6\u09BE\u09A8\u0020\u0995\u09B0\u09C1\u09A8'],
		url : {
//			
		}
	},
	"\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0" : {
		title:["\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u09AB\u09BF\u0020\u0995\u09BE\u09A0\u09BE\u09AE\u09CB"],
		options:[ '\u0031\u0028\u0041\u0029\u0020\u09AB\u09B0\u09CD\u09AE\u0020\u098F\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020' , '\u09AA\u09CB\u09B8\u09CD\u099F\u002D\u09AB\u09CD\u09AF\u09BE\u0995\u09CD\u099F\u09CB\u0020\u09A8\u09BF\u09AF\u09BC\u09AE\u09BF\u09A4\u0995\u09B0\u09A3'],	
		url : {
			
		}
		
	} , 
	
	
"ror" : {
		
		title:["How may I assist you reagarding R-o-R /Plot Information"],
		options:['How to Apply for R-o-R and PI','Apply for certified copy of R-o-R','Apply for PI' , 'Check Status'],
		url : {
			
		}
	},
	// ror bangla 
	"\u0986\u09B0\u0993\u0986\u09B0" : { title:["\u0986\u09AE\u09BF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u0020\u0996\u09A4\u09BF\u09DF\u09BE\u09A8\u0020\u002F\u0020\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7\u0020\u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF"],
		options:['\u0996\u09A4\u09BF\u09DF\u09BE\u09A8\u0020\u002F\u0020\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8','\u0996\u09A4\u09BF\u09DF\u09BE\u09A8\u0020\u09A4\u09A5\u09CD\u09AF\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8','\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8' , '\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u0020\u09AF\u09BE\u099A\u09BE\u0987\u0020\u0995\u09B0\u09C1\u09A8'],
		url : {
			
		}} , 
	
	
"hal" : {
		
		title:["How may I assist you reagarding Hal Sabek (RS-LR) Information"],
		options:['How to view Hal Sabek (RS-LR) Information' , 'Find RS-LR Information'],
		url : {
			
		}
	},
	// hal bangla 
"\u09B9\u09BE\u09B2" : {title:["\u09B9\u09BE\u09B2\u0020\u09B8\u09BE\u09AC\u09C7\u0995\u0020\u0028\u0986\u09B0\u098F\u09B8\u002D\u098F\u09B2\u0986\u09B0\u0029\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7\u0020\u0986\u09AE\u09BF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF"],
	options:['\u09B9\u09BE\u09B2\u0020\u09B8\u09BE\u09AC\u09C7\u0995\u0020\u0028\u0986\u09B0\u098F\u09B8\u002D\u098F\u09B2\u0986\u09B0\u0029\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u09AA\u09BE\u09AC\u09C7\u09A8' , '\u0986\u09B0\u098F\u09B8\u002D\u098F\u09B2\u0986\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u0996\u09C1\u0981\u099C\u09C1\u09A8'],
	url : {
		
	}}  , 
	
	
	
	
"plot" : {
		
		title:["How may I assist you reagarding Plot Map"],
		options:['How to Apply for Plot Map' , 'Apply for Plot Map' , 'Track Application Status'],
		url : {
			
		}
	},
	
	// plot bangla 
	
	"\u09AA\u09CD\u09B2\u099F" : {title:["\u0986\u09AE\u09BF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u0020\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u0020\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7\u0020\u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF"],
		options:['\u09AA\u09CD\u09B2\u099F\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8' , '\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8' , '\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u0020\u09AF\u09BE\u099A\u09BE\u0987\u0020\u0995\u09B0\u09C1\u09A8'],
		url : {
			
		} } ,

"know" : {
		
		title:["How may I assist you reagarding Know Your Property"],
		options:['How to view your property details' , "Property Details"],
		url : {
			
		}
	},
	
	"\u0986\u09AA\u09A8\u09BE\u09B0" : {title:["\u0986\u09AA\u09A8\u09BE\u09B0\u0020\u09B8\u09AE\u09CD\u09AA\u09A4\u09CD\u09A4\u09BF\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u09B8\u09AE\u09CD\u09AA\u09B0\u09CD\u0995\u09C7\u0020\u0986\u09AE\u09BF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BE\u0995\u09C7\u0020\u09B8\u09B9\u09BE\u09AF\u09BC\u09A4\u09BE\u0020\u0995\u09B0\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09BF"],
		options:['\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BF\u0020\u0986\u09AA\u09A8\u09BE\u09B0\u0020\u09B8\u09AE\u09CD\u09AA\u09A4\u09CD\u09A4\u09BF\u0020\u09AC\u09BF\u09AC\u09B0\u09A3\u0020\u09A6\u09C7\u0996\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09C7\u09A8' , "\u09B8\u09AE\u09CD\u09AA\u09A4\u09CD\u09A4\u09BF\u09B0\u0020\u09AC\u09BF\u09AC\u09B0\u09A3"],
		url : {
			
		} }  , 
		
	
}



var len1=  Object.keys(data.chatinit.title).length;
var cbot= document.getElementById("chatStart");




function callChat(){
	

	
	var a = document.getElementById("init").innerHTML;
	if(a=='START CHAT'){
		document.getElementById('chat-test').style.display='block';
		document.getElementById('init').style.display = 'none';
		
		initChat();
	}
	else{

		  document.getElementById('chat-test').style.display = 'none';
		  document.getElementById('init').innerText = 'START CHAT';
	}
}

function initChat(){
 
	historyStack = [{}];
    j = 0;
    cbot.innerHTML = '';
    const options = data.chatinit.options;

    for (let i = 0; i < len1; i++) {
        setTimeout(handleChat, i * 400);
    }

    setTimeout(() => showOptions(options), (len1 + 1) * 400)
}

var j=0;
function handleChat(){
	
	var elm= document.createElement("p");
	elm.innerHTML= data.chatinit.title[j];
	elm.setAttribute("class","msg");
	cbot.appendChild(elm);
	j++;
	handleScroll();
}

function showOptions(options){
	 options.forEach(option => {
	        const opt = document.createElement("span");
	        const inp = `<div>${option}</div>`;
	        opt.innerHTML = inp;
	        opt.setAttribute("class", "opt");
	        opt.addEventListener("click", handleOpt);
	        cbot.appendChild(opt);
	        handleScroll();
	    });
	
}



function closeChat() {
	document.getElementById('chat-test').style.display = 'none';
	document.getElementById('init').style.display = 'flex';
}



function handleOpt(){
	
	var str= this.innerText;
	var textArr= str.split(/\s+|-|,/);
	var findText= textArr[0];//alert(data[findText.toLowerCase()].title);
	var selectedOption = this.innerText;
	
	
	 const optionActions = {
		        "Click here to Create an Account": signup,
		        "Apply for Mutation": MuteApplicationPage, 
		        "Apply for Conversion": convAppViewPage,
		        "Apply for Warish Mutation": warishAppViewPage,
		        "Pay your Khajna": revenueApplicationPage,
		        "Apply for Mouza Map": MouzaMapReqPage,
		        "Apply for Plot Map": PlotMapReqPage,
		        "Property Details": knowYourPropertyPage,
		        "Find RS-LR Information": rslrPlotInfoPage,
		        "Apply for certified copy of R-o-R": RORReqPage,
		        "Apply for PI" :PlotMapReqPage ,
		        "Plot Information Certified Copy": PIReqPage,
		        "How to apply for Mutation": () => pdfView('SOP_Mutation_English.pdf'),
		        "How to Apply for Conversion": () => pdfView('Conversion_SOP_English.pdf'),
		        "How to apply Warish Mutation": () => pdfView('SOP_Warish_English.pdf'),
		        "Grievance": GrievApplicationPage , 
		        "FAQ for Conversion" : () => pdfView('FAQ_Conversion_English.pdf'),
		        "FAQ for Mutation": () => pdfView('FAQ_Mutation_English.pdf'),
		        "Track Application Status":loadGrnSearch,
		        "Check Status":loadGrnSearch , 
		        "How to Apply for Khajna" : ()=> pdfView('SOP_Land_Revenue.pdf'),
		        "How to apply for Mouza Map" : ()=> pdfView('MouzaMap_SOP_English.pdf'),
		        "How to Apply for R-o-R and PI" : ()=> pdfView('SOP_ROR_PI_English.pdf'),
		        "How to Apply for Plot Map" : ()=> pdfView('PlotMap.pdf'),
		        "How to view Hal Sabek (RS-LR) Information" : () => pdfView('Hal_Sabek_SOP_English.pdf'),
		        "How to view your property details" : ()=> pdfView('KnowYourProperty_SOP_English.pdf'),
		    /*    "Fees Structure of Conversion" : ()=> pdfView('Conversion fee structure.pdf'),*/
		        "Fee Structure" : ()=> pdfView('MutationFeeStructure.pdf'),
		        "Application in 1(A) Form" : ()=> pdfView('ConversionFee.pdf') , 
		        "Post-facto Regularization" : ()=> pdfView('PostfactoRegularisation_Fees.pdf') ,
		        
		        // bangla signup
		        "\u098F\u0995\u099F\u09BF\u0020\u0985\u09CD\u09AF\u09BE\u0995\u09BE\u0989\u09A8\u09CD\u099F\u0020\u09A4\u09C8\u09B0\u09BF\u0020\u0995\u09B0\u09A4\u09C7\u0020\u098F\u0996\u09BE\u09A8\u09C7\u0020\u0995\u09CD\u09B2\u09BF\u0995\u0020\u0995\u09B0\u09C1\u09A8" : signup , 
		        
		        //sop 
		        "\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8":() => pdfView('SOP_Mutation_Bengali.pdf') , 
		        "\u0993\u09AF\u09BC\u09BE\u09B0\u09BF\u09B6\u0020\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8" : ()=> pdfView('SOP_Warish_Bengali.pdf') , 
		        "\u0996\u09BE\u099C\u09A8\u09BE\u09B0\u0020\u09AA\u09CD\u09B0\u09A6\u09BE\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8": ()=> pdfView('SOP_Land_revenue_bangla.pdf'),
		        // bengali mutation fee structure
		        "\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u09AB\u09BF\u0020\u09B8\u09CD\u099F\u09CD\u09B0\u09BE\u0995\u099A\u09BE\u09B0" : ()=> pdfView('MutationFeeStructure.pdf'),
		        // mutation functionality 
		        "\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8" : MuteApplicationPage ,
		        // warish page application
		        "\u0993\u09AF\u09BC\u09BE\u09B0\u09BF\u09B6\u0020\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8" : warishAppViewPage,
		        // khajna application page 
		        "\u0996\u09BE\u099C\u09A8\u09BE\u0020\u09AA\u09CD\u09B0\u09A6\u09BE\u09A8\u0020\u0995\u09B0\u09C1\u09A8" :  revenueApplicationPage,
		        // sop mouza map 
		        "\u09AE\u09CC\u099C\u09BE\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8" : ()=> pdfView('Mouza_Map_SOP_Bengali.pdf'),
		        "\u09AE\u09CC\u099C\u09BE\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8" : MouzaMapReqPage ,
		        // grn track mouza map 
		        "\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u09B8\u09CD\u09A5\u09BF\u09A4\u09BF\u0020\u09AF\u09BE\u099A\u09BE\u0987\u0020\u0995\u09B0\u09C1\u09A8" : loadGrnSearch ,  
		        //ror sop 
		        "\u0996\u09A4\u09BF\u09DF\u09BE\u09A8\u0020\u002F\u0020\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8":  ()=> pdfView('SOP_ROR_PI_Bengali.pdf'),
		        // ror page 
		        "\u0996\u09A4\u09BF\u09DF\u09BE\u09A8\u0020\u09A4\u09A5\u09CD\u09AF\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8" :  RORReqPage, 
		        // pi page 
		        "\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8" : PIReqPage,	
	
		        // plot map sop 
		        "\u09AA\u09CD\u09B2\u099F\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09AC\u09C7\u09A8" : ()=> pdfView('PlotMap.pdf'),	
		        "\u09A6\u09BE\u0997\u09C7\u09B0\u0020\u09AE\u09CD\u09AF\u09BE\u09AA\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8" :  PlotMapReqPage, 
		        // hal sabek guide
		        
		        "\u09B9\u09BE\u09B2\u0020\u09B8\u09BE\u09AC\u09C7\u0995\u0020\u0028\u0986\u09B0\u098F\u09B8\u002D\u098F\u09B2\u0986\u09B0\u0029\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u0995\u09C0\u09AD\u09BE\u09AC\u09C7\u0020\u09AA\u09BE\u09AC\u09C7\u09A8" : ()=> pdfView('Hal_Sabek_SOP_Bengali.pdf'),
		        // hal sabek redirect 
		        "\u0986\u09B0\u098F\u09B8\u002D\u098F\u09B2\u0986\u09B0\u0020\u09A4\u09A5\u09CD\u09AF\u0020\u0996\u09C1\u0981\u099C\u09C1\u09A8" : rslrPlotInfoPage,
		        // know guide 
		        "\u0995\u09BF\u09AD\u09BE\u09AC\u09C7\u0020\u0986\u09AA\u09A8\u09BF\u0020\u0986\u09AA\u09A8\u09BE\u09B0\u0020\u09B8\u09AE\u09CD\u09AA\u09A4\u09CD\u09A4\u09BF\u0020\u09AC\u09BF\u09AC\u09B0\u09A3\u0020\u09A6\u09C7\u0996\u09A4\u09C7\u0020\u09AA\u09BE\u09B0\u09C7\u09A8" :  ()=> pdfView('KnowYourProperty_SOP_Bengali.pdf'),
		        "\u09B8\u09AE\u09CD\u09AA\u09A4\u09CD\u09A4\u09BF\u09B0\u0020\u09AC\u09BF\u09AC\u09B0\u09A3" : knowYourPropertyPage,
		       //conversion guide 
		        "\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u09AA\u09A6\u09CD\u09A7\u09A4\u09BF" : ()=> pdfView('Conversion_SOP_Bengali.pdf'),
		        //conversion fees structure 
		      /*  "\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u09AB\u09BF\u0020\u0997\u09A0\u09A8" :  () => pdfView('Conversion fee structure.pdf') , */
		        "\u099C\u09AE\u09BF\u09B0\u0020\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0046\u0041\u0051" : () => pdfView('FAQ_Conversion_Bengali.pdf') , 
		        "\u09B6\u09CD\u09B0\u09C7\u09A3\u09C0\u0020\u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7\u09B0\u0020\u0986\u09AC\u09C7\u09A6\u09A8\u0020\u0995\u09B0\u09C1\u09A8" :  convAppViewPage ,
		        "\u0985\u09AD\u09BF\u09AF\u09CB\u0997\u0020\u0997\u09CD\u09B0\u09B9\u09A8" : GrievApplicationPage , 
	
		        // conversion fees structure
		       // 1 a  
			  "\u0031\u0028\u0041\u0029\u0020\u09AB\u09B0\u09CD\u09AE\u0020\u098F\u0020\u0986\u09AC\u09C7\u09A6\u09A8"  : ()=> pdfView('ConversionFee.pdf'),
			  //post-facto
			  "\u09AA\u09CB\u09B8\u09CD\u099F\u002D\u09AB\u09CD\u09AF\u09BE\u0995\u09CD\u099F\u09CB\u0020\u09A8\u09BF\u09AF\u09BC\u09AE\u09BF\u09A4\u0995\u09B0\u09A3" : ()=> pdfView('PostfactoRegularisation_Fees.pdf'),	
			  "\u09AE\u09BF\u0989\u099F\u09C7\u09B6\u09A8\u09C7\u09B0\u0020\u099C\u09A8\u09CD\u09AF\u0020\u0046\u0041\u0051" : ()=> pdfView('FAQ_Mutation_Bengali.pdf')
	 
	 
	 
	 };

		    if (optionActions[selectedOption]) {
		        optionActions[selectedOption]();
		    }
	historyStack.push({ 
		
		topic: findText.toLowerCase(),
		title: data[findText.toLowerCase()].title, 
		options: data[findText.toLowerCase()].options , 
		url: data[findText.toLowerCase()].url
		
	});
	
	

	
	document.querySelectorAll(".opt").forEach(el=>{
		el.remove();
	})
	var elm= document.createElement("p");
	elm.setAttribute("class","test");
	var sp= '<span class="rep">'+this.innerText+'</span>';
	elm.innerHTML= sp;
	cbot.appendChild(elm);



	handleResults(data[findText.toLowerCase()].title,data[findText.toLowerCase()].options,data[findText.toLowerCase()].url);
}

function handleDelay(title){
	var elm= document.createElement("p");
		elm.innerHTML= title;
		elm.setAttribute("class","msg");
		cbot.appendChild(elm);
}


function handleResults(title, options, url) {
    title.forEach((message, index) => {
        setTimeout(() => handleDelay(message), index * 500);
    });

    const isObjectEmpty = Object.keys(url).length === 0;

    if (isObjectEmpty) {
  
        setTimeout(() => {
        	
            showOptions(options);
            showBackButton();
        }, title.length * 500);
    }
}


function showBackButton() {
	var backBtn = document.createElement("span");
	var backBtnText = '<div>&#x21A9</div>';
	backBtn.innerHTML = backBtnText;
	backBtn.setAttribute("class", "opt");
	backBtn.addEventListener("click", handleBack);
	cbot.appendChild(backBtn);
	handleScroll();
}

function handleBack() {
    const historyStackSize = historyStack.length;
    
    if (historyStackSize === 2) {
        initChat();
    } else {
        const previousMenu = historyStack.pop();
        const currentMenu = historyStack[historyStack.length - 1];

        if (currentMenu) {
            document.querySelectorAll(".opt").forEach(el => el.remove());
            handleResults(currentMenu.title, currentMenu.options, currentMenu.url);

            const elm = document.createElement("p");
            elm.setAttribute("class", "test");
            const sp = `<span class="rep">${currentMenu.topic}</span>`;
            elm.innerHTML = sp;
            cbot.appendChild(elm);
        }
    }
}


function handleOptions(options, url) {
    options.forEach((option, i) => {
        const opt = document.createElement("span");
        const inp = `<a class="m-link" href="${url.link[i]}">${option}</a>`;
        opt.innerHTML = inp;
        opt.setAttribute("class", "opt");
        cbot.appendChild(opt);
    });

    const opt = document.createElement("span");
    const inp = `<a class="m-link" href="${url.more}">See more</a>`;

    const isObjectEmpty = Object.keys(url).length === 0;


    opt.innerHTML = inp;
    opt.setAttribute("class", "opt link");
    cbot.appendChild(opt);

    handleScroll();
}


function handleScroll(){
	var elem= document.getElementById('chatStart');
	elem.scrollTop= elem.scrollHeight;
}