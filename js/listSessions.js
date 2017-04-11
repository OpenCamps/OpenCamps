getSessions([

  // This JSON file is used to inclue all sessions to be presented at Open Camps events
  //
  // Sessions are grouped by event, and ordered by schedule date/time and then
  // alphabetically by speaker last name
  //
  // There are 4 lines breaks between each event and one between session for readability
  //
  // The data here is used to generate session info for several of the conference web
  // sites and will also be used for digital signage during the events, so please test
  // your code before committing/pushing anything live. The


  // AI CAMP
  // TBA
  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"08:30",
		"timeStop":"09:00",
		"sessionTitle":"Registration",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},
		  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"09:00",
		"timeStop":"09:15",
		"sessionTitle":"Introduction",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Introducing AI Camp, Opencamps.org and the organizers.  What's next?  Advanced Intelligence: Thinking outside human centric intelligence + Interdisciplinary Learning</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {

 				  "nameFirst":"Christie",
				  "nameLast":"Ewen",
				  "photo":"speaker-christie-ewen.jpg",
				  "linkedin":"https://www.linkedin.com/in/ewenchristie",
				  "twitter":"https://twitter.com/ewenchristie",
				  "github":"https://github.com/christieewen",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Vitarch",
				  "role":"Founder",
				  "bio":"<p>Christie is an Interdisciplinary Scientist and Technology Entrepreneur.</p>",
        }
      ]
    }  
	},
    {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"09:15",
		"timeStop":"09:55",
		"sessionTitle":"Cognitive Computing, Measure Measure Measure",
		"sessionSubTitle":"Keynote",
		"sessionSummary":"<p>Soon after the notable performance of IBM’s Watson on Jeopardy, I laid out the skeleton of a new computing paradigm which IBM later dubbed “Cognitive Computing”. Over the five years since then, cognitive computing is indeed proving to be a radical shift in software and information technology, that disrupts previously understood terms like “performance”, “feature”, “debugging”, and even “truth”. In this talk I will give a personal perspective on how cognitive computing has progressed, and is re-shaping the roles that computer systems play in our lives and our cultural awareness, touching on such themes as digital culture, multilinguality, multilingual access, discovery and metadata quality.  I will focus specifically on the role big data and human intelligence have in measuring quality of cognitive computing systems.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    		"speakers": {
      		"speaker": [
			  {
 				  "nameFirst":"Chris",
				  "nameLast":"Welty",
				  "photo":"speaker-chris-welty.jpg",
				  "linkedin":"",
				  "twitter":"https://twitter.com/cawelty",
				  "github":"",
				  "facebook":"",
				  "website":"https://research.google.com/pubs/104789.html",
				  "openSourceRole":"",
				  "organization":"Google",
				  "role":"Sr. Research Scientist",
				  "bio":"<p>Dr. Chris Welty is a Sr. Research Scientist at Google in New York, and an Endowed Professor of Cognitive Systems at the VU University, Amsterdam. His main area of interest is using structured semantic information to improve semantic processing of unstructured information, such as using freebase to help improve web search. His latest work is on using crowdsourcing to form a new theory of truth based on diversity of perspectives. Before Google, Dr. Welty was a member of the technical leadership team for IBM's Watson - the question answering computer that destroyed the all-time best Jeopardy! champions in a widely televised contest. He appeared on the broadcast, discussing the technology behind Watson, as well as many articles in the popular and scientific press. His proudest moment was being interviewed for StarTrek.com about the project. He is a recipient of the AAAI Feigenbaum Prize for his work. Welty was one of the first to call attention to the new paradigm of Cognitive Computing that is emerging in computation, and previously has played a seminal role in the development of the Semantic Web and Ontologies, and co-developed OntoClean, the first formal methodology for evaluating ontologies. He is on the editorial board of AI Magazine, the Journal of Applied Ontology, the Journal of Web Semantics, and the Semantic Web Journal.</p>",
        }
      ]
    }  
	},
    {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"13:15",
		"timeStop":"13:55",
		"sessionTitle":"Taking Information Into Accounts: The Data Projection Model",
		"sessionSubTitle":"",
		"sessionSummary":"<p>A model for auditing information content.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    		"speakers": {
      		"speaker": [
			  {
 				  "nameFirst":"Michel",
				  "nameLast":"Biezunski",
				  "photo":"speaker-michel-biezunski.jpg",
				  "linkedin":"https://www.linkedin.com/in/michel-biezunski-1248271",
				  "twitter":"https://twitter.com/michelbiezunski",
				  "github":"",
				  "facebook":"",
				  "website":"https://www.infoloom.com/about-us/michel-biezunski-1",
				  "openSourceRole":"",
				  "organization":"Infoloom",
				  "role":"",
				  "bio":"<p>Michel works as Consultant/Developer in Digital Publishing. Designs Builds and maintains Topic Map Applications, i.e. interconnected graphs for web sites, based on navigation by topics. Former Editor of the ISO/IEC 13250 Topic Maps standard.</p>",
        }
      ]
    }  
	},
	    {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"14:00",
		"timeStop":"14:40",
		"sessionTitle":"When Recommendation Systems Go Bad",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Machine learning and recommendations systems have changed the way we interact with not just the internet, but some of the basic products and services that we use to organize and run our life. As the people that build these systems, we have a social responsibility to consider how these systems affect people, and furthermore, we should do whatever we can to prevent these systems and models from perpetuating some of the prejudice and bias that exist in our society today.  In this talk I will cover some recommendation systems that have gone wrong across various industries, and attempt to provide some solutions for prevention. First and foremost among these is promoting awareness, but approaches involving interpretable models, using ensemble models to separate features that shouldn't interact, and designing test data sets for capturing bias will also be explored.</p>",
		"sessionType":"Session",
		"sessionSlides":"http://www.slideshare.net/eestola/estola-5-2016-mlconf-when-recommendation-systems-go-bad",
		"sessionVideo":"",
    		"speakers": {
      		"speaker": [
			  {
 				  "nameFirst":"Evan",
				  "nameLast":"Estola",
				  "photo":"speaker-evan-estola.jpg",
				  "linkedin":"https://www.linkedin.com/in/evan-estola-23a03211",
				  "twitter":"https://twitter.com/estola",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"meetup.com",
				  "role":"Lead Machine Learning Engineer",
				  "bio":"<p>Evan is a Lead Machine Learning Engineer working on the Data Team at Meetup. Combining product design, machine learning research and software engineering, Evan builds systems that help Meetup’s members find the best thing in the world: real local community.</p>",
        }
      ]
    }  
	},
    {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"14:45",
		"timeStop":"15:45",
		"sessionTitle":"AI: Enigma of Imitation",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Talk will be about how Turing developed the ideas of AI in terms of an imitation game, but failed to address the question of how imitative intelligence may affect the human societies, their norms and institutions. Some ideas from information-asymmetric (signaling) games will be used to explore how we could think about the future of AI and human.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    		"speakers": {
      		"speaker": [
			  {
 				  "nameFirst":"Bud",
				  "nameLast":"Mishra",
				  "photo":"speaker-bud-mishra.jpg",
				  "linkedin":"https://www.linkedin.com/in/budmishra",
				  "twitter":"https://twitter.com/bud_mishra",
				  "github":"",
				  "facebook":"",
				  "website":"https://cs.nyu.edu/mishra/",
				  "openSourceRole":"",
				  "organization":"NYU",
				  "role":"Professor",
				  "bio":"<p>Dr. Bud Mishra is a Professor of Computer Science & Mathematics at the Courant Institute, New York University.  His most recent research and publication involves a new DNA Sequencing Method that is precise enough to reveal hidden mechanisms by which bacteria resist antibiotics.</p>",
        }
      ]
    }  
	},

    {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"10:00",
		"timeStop":"10:40",
		"sessionTitle":"Describing contextual behavior with CAVE Language",
		"sessionSubTitle":"",
		"sessionSummary":"<p>As more and more contextual and conversational systems appear, there is demand to create new applications for them. However we lack a language to describe these applications. Conversational Architecture Visual Expression (CAVE) Language is a whiteboard-friendly visual design language for contextual and conversational systems. It is especially good for voice agents (like Amazon's Alexa), chat bots and other emerging platforms. <a href=\"http://www.cavelanguage.org\" target=\"_blank\">http://www.cavelanguage.org</a></p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    		"speakers": {
      		"speaker": [
			  {
 				  "nameFirst":"Loren",
				  "nameLast":"Davie",
				  "photo":"speaker-loren-davie.jpg",
				  "linkedin":"https://www.linkedin.com/in/lorendavie",
				  "twitter":"https://twitter.com/LorenDavie",
				  "github":"https://github.com/LorenDavie",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"Loren is a creative technology professional with 20 years of industry experience. As a leader, a manager, a developer, and a thinker, Loren has made tech organizations more effective while leveraging technology for competitive advantage.  Loren is the founder of Axilent, a consulting firm specializing in product strategy and contextual technology.",
        }
      ]
    }  
	},
 {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"10:45",
		"timeStop":"11:20",
		"sessionTitle":"The Convenience Economy and AI",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Let’s change the world. Together. The world is small and fast, all courtesy of technology. The Convenience Economy- real time digital matching of shared local resources will help the world become more efficient and neighborly. See how digital \"trust\", \"business cards\", \"contextual keywords\" and \"payments\" with AI will soon match neighbor to neighbor much more efficiently resulting in better wealth distribution, better use of resources and an overall improvement in your everyday life. Warning: This is an interactive demonstrations: you will meet your neighbor. </p>",
		"sessionType":"Session",
		"sessionSlides":"https://www.slideshare.net/secret/aGVqp3DzTHmBPm",
		"sessionVideo":"",
    "speakers": {

      "speaker": [

			  {
 				  "nameFirst":"Eric",
				  "nameLast":"Schwertzel",
				  "photo":"speaker-eric-schwertzel.jpg",
				  "linkedin":"https://www.linkedin.com/in/digitalentertainment",
				  "twitter":"https://twitter.com/IQIDNYC",
				  "github":"",
				  "facebook":"",
				  "website":"https://iqid.com",
				  "openSourceRole":"",
				  "organization":"Founder of IQID",
				  "role":"Director",
				  "bio":"<p></p>",
        }

      ]

    }  
	},
  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"11:25",
		"timeStop":"12:15",
		"sessionTitle":"How big a threat is artificial intelligence to humanity?",
		"sessionSubTitle":"",
		"sessionSummary":"<p>The biggest threat to humanity in the 20th Century was arguably the possibility of Nuclear war. It was largely thanks to extensive diplomacy at the United Nations that the Treaty on the Non-Proliferation of Nuclear Weapons came into force in 1970.  The risk to mankind from artificial intelligence needs a similar unilateral conversation to happen, and to happen widely.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {

      "speaker": [

			  {

 				  "nameFirst":"Oliver",
				  "nameLast":"Christie",
				  "photo":"speaker-oliver-christie.jpg",
				  "linkedin":"https://www.linkedin.com/in/oliverchristie",
				  "twitter":"https://twitter.com/OliverChristie",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Foxy Machine",
				  "role":"Artificial Intelligence Strategist",
				  "bio":"",
        }

      ]

    }  

	},
	 {

		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"16:00",
		"timeStop":"16:15",
		"sessionTitle":"Big Data and Little Users: Making AI for Kids",
		"sessionSubTitle":"",
		"sessionSummary":"<p>A 15 minute talk with the CTO of Elemental Path about the opportunities and challenges of working with an AI based system designed for kids from the perspective of content and privacy.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {

      "speaker": [

			  {

 				  "nameFirst":"JP",
				  "nameLast":"Benini",
				  "photo":"speaker-jp-benini.jpg",
				  "linkedin":"https://www.linkedin.com/in/jpbenini",
				  "twitter":"https://twitter.com/jpnyc81",
				  "github":"https://github.com/JPNYC81",

				  "facebook":"",

				  "website":"https://cognitoys.com",
				  "openSourceRole":"",
				  "organization":"Elemental Path",
				  "role":"CTO",
				  "bio":"<p>JP is the CTO of Elemental Path, the first company to integrate IBM's Watson into toys. This gives the potential for the toys to evolve and grow with children.</p>",

        }

      ]

    }  

	},
	  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"16:30",
		"timeStop":"16:45",
		"sessionTitle":"Reinforcement Learning",
		"sessionSubTitle":"",
		"sessionSummary":"<p>A discussion on reinforcement learning.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jessica",
				  "nameLast":"Zosa Forde",
				  "photo":"speaker-jessica-forde.jpg",
				  "linkedin":"https://www.linkedin.com/in/jessica-forde-4aa30615",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Columbia University",
				  "role":"Data Scientist",
				  "bio":"<p>Jessica is a data scientist at Columbia University.</p>",
        }
      ]
    }  

	},
    {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"16:45",
		"timeStop":"17:00",
		"sessionTitle":"Better healthcare delivery using big data analytics and machine learning",
		"sessionSubTitle":"Lightning Talk",
		"sessionSummary":"<p>Understanding the drivers of the molecular, physiological, social and environmental factor contributing to healthy states and its diversion to a complex disease is a challenge. Availability of healthcare big data provides new opportunity to understand disease trajectories. Converging biomedical, healthcare and wearable data now offers a unique possibility to understand factors driving disease conditions. Mining of large-scale healthcare datasets help us to understand the drivers of disease and would help to prevent illness. Data-driven mining in massive healthcare datasets would also help us to develop new strategies to improve healthcare delivery. At Mount Sinai Health System, we <a href=\"http://dudleylab.org\" target=\"_blank\">http://dudleylab.org</a> are leveraging the continuum of health-system wide biomedical, clinical and operational databases to improve various facets of healthcare delivery. Use-cases from cardiology, reducing readmission rates, and longitudinal data mining will be discussed. I will also discuss our work on developing a unified data model (individualome) and its potential application in real-time healthcare.  Supported by the following National Institutes of Health (NIH) grant: National Center for Advancing Translational Sciences (NCATS, UL1TR000067) Clinical and Translational Science Award (CTSA).</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    		"speakers": {
      		"speaker": [
			  {
 				  "nameFirst":"Khader",
				  "nameLast":"Shameer, Ph.D",
				  "photo":"speaker-khader-shameer.jpg",
				  "linkedin":"https://www.linkedin.com/in/khadershameer",
				  "twitter":"https://twitter.com/kshameer",
				  "github":"https://github.com/shameer",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Mount Sinai Health System",
				  "role":"Biomedical Data Scientist",
				  "bio":"<p>Dr. Khader completed his Ph.D. in Bioinformatics and Computational Biology from National Center for Biological Science (TIFR), Bangalore, India. He completed his post-doctoral training at the Mayo Clinic. He was a staff scientist at Mayo Clinic and led several projects to link biobanks, electronic medical records, and genomic data to enable precision medicine at the point of care. Currently, he is a senior Biomedical and healthcare data scientist at Dudley Laboratory, Mount Sinai Health System and also affiliated to Institute of Next Generation Healthcare, Harris Center for Precision Wellness, Department of Genetics and Genomics, Icahn School of Medicine at Mount Sinai, Mount Sinai Health System, New York City, NY.  He is leveraging large-scale biomedical and health system-scale clinical data to improve healthcare delivery, design precision care-pathways, stratify patients and develop individualized therapeutics. </p>",
        }
      ]
    }  
	},
  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"18:55",
		"timeStop":"19:20",
		"sessionTitle":"Monet or Picasso?",
		"sessionSubTitle":"",
		"sessionSummary":"<p>In this talk, we'll quickly introduce TensorFlow - an open source machine learning toolkit. Next, you\'ll learn how to build your own image classifier, that runs on your phone, and can be trained to identify paintings and sculptures at an art museum. No prior machine learning experience necessary.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Joshua",
				  "nameLast":"Gordon",
				  "photo":"speaker-joshua-gordon.jpg",
				  "linkedin":"https://www.linkedin.com/in/joshuabendergordon",
				  "twitter":"https://twitter.com/random_forests",
				  "github":"",
				  "facebook":"",
				  "website":"http://tensorflow.org",
				  "openSourceRole":"",
				  "organization":"Google",
				  "role":"Developer Advocate",
				  "bio":"<p>Josh is a Developer Advocate at Google, working on TensorFlow and machine learning. He’s interested in teaching and computer science education. He can often be found exploring central park on his bike. You can follow him on Twitter at <a href=\"http://twitter.com/random_forests\" target=\"_blank\">@random_forests</a>.</p>",
        }
      ]
    }  
	},  
  
  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"18:30",
		"timeStop":"18:55",
		"sessionTitle":"Learning About Brain: Sparse Modeling and Beyond",
		"sessionSubTitle":"",
		"sessionSummary":"<p>In this talk, I will summarize our work on sparse models and other machine-learning approaches to \”brain decoding\” (aka \”mind reading\”), i.e. to prediction of mental states from functional MRI data, in a wide range of applications, from analyzing pain perception to discovering predictive patterns of brain activity associated with schizophrenia and cocaine addiction. I will mention several lessons learned from those applications that can hopefully generalize to other practical machine-learning problems. Finally, I will briefly discuss our recent project that focuses on inferring mental states from \”cheap\” (unlike fMRI), easily collected data, such as speech and wearable sensors, with applications ranging from clinical settings (\”computational psychiatry\”) to everyday life (\”augmented human\”).</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Irina",
				  "nameLast":"Rish",
				  "photo":"speaker-irina-rish.jpg",
				  "linkedin":"https://www.linkedin.com/in/irina-rish-8b2162",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"http://researcher.watson.ibm.com/researcher/view.php?person=us-rish",
				  "openSourceRole":"",
				  "organization":"IBM",
				  "role":"Research Staff Member: Machine Learning in Neuroscience and Biology",
				  "bio":"<p>Irina is a Research Staff Member (RSM) at IBM T.J. Watson Research Center. Her primary research interests are in the areas of probabilistic inference, machine learning, and information theory. Irina's current research is in the area of machine-learning applications to computational biology and neuroscience, with a particular focus on statistical analysis of brain imaging data such as fMRI.</p>",
        }
      ]
    }  
	},

  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"19:45",
		"timeStop":"20:10",
		"sessionTitle":"Language Modeling with Torch",
		"sessionSubTitle":"",
		"sessionSummary":"<p>We will discuss training Recurrent Neural Network (RNN) Language Models (LM) using Torch. Trained models of different capacity and performance will be used to generate sample sentences. We will also include some benchmarks of Torch rnn's compared to Theano and TensorFlow.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Nicholas",
				  "nameLast":"Leonard",
				  "photo":"speaker-nicholas-leonard.jpg",
				  "linkedin":"https://www.linkedin.com/in/nicholas-léonard-a838225a",
				  "twitter":"http://twitter.com/nicholas-leonard",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Element Inc.",
				  "role":"Research Engineer",
				  "bio":"<p>Graduated from the Royal Military College of Canada in 2008 with a bachelor's degree in computer science. Retired from the Canadian Army Officer Corp in 2012 to complete a Master's degree specialized in deep learning at the University of Montreal. Currently applying deep learning to biometric authentication using smart phones</p>."
        }
      ]
    }  
	},


  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"19:20",
		"timeStop":"19:45",
		"sessionTitle":"Modeling Higher Moments in Cancer Genomics: A Different Way to Understand Gene Regulation",
		"sessionSubTitle":"",
		"sessionSummary":"<p>In genomics, we often assume that continuous data, such as gene expression, follows a Normal distribution. However, we rarely stop to question the validity of this assumption, and how it may apply to all parts of the transcriptome equally. Our work focuses on understanding how properties of a gene’s expression distribution can be informative of transcriptional regulation. Specifically, we are interested in extracting biological information from higher moments. In this talk, I will describe some of my lab’s work with respect to gene expression variability and investigating the prevalence of non-Normal expression distributions in different tumor types. The goal of my talk is to illustrate some of the areas and questions in bioinformatics where the use of more sophisticated data science methods, including machine learning applications can yield interesting insights into biology that may have been missed by standard approaches.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jessica",
				  "nameLast":"Mar, Ph.D.",
				  "photo":"speaker-jessica-mar.jpg",
				  "linkedin":"https://www.linkedin.com/in/jessica-mar-0386772",
				  "twitter":"http://twitter.com/jessicacmar",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Albert Einstein College of Medicine",
				  "role":"Assistant Professor, Department of Systems & Computational Biology and Department of Epidemiology & Population Health",
				  "bio":""
        }
      ]
    }  
	},

  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"18:00",
		"timeStop":"18:30",
		"sessionTitle":"Socializing",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},
	
  {
		"camp":"AI Camp",
		"tech":"ai",
		"date":"2016-07-12",
		"timeStart":"20:00",
		"timeStop":"21:00",
		"sessionTitle":"Socializing",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},

  
  // AGENCY CAMP
  // TBA  
  // TBA  
  
  
  
  // ANDROID CAMP
  // TBA  
  // TBA    


  // ANGULAR CAMP
	{
		"camp":"Angular Camp",
		"tech":"angular",
		"date":"2016-07-17",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Serverless Microservices & AngularJS",
		"sessionSubTitle":"Real life story of a Web App that uses AngularJS, AWS Lambda and more",
		"sessionSummary":"<p>Scalable applications are by nature resource intensive, expensive to build and difficult to manage. What if we can change this perception and help developers design full-stack applications that are low cost and low maintenance? This session describes the underlying architecture behind www.deep.mg, the microservices marketplace built by Mitoc Group using AngularJS, NodeJS and powered by abstracted services like AWS Lambda, Amazon CloudFront, Amazon DynamoDB, and so on. Eugene Istrati, Technology Partner at Mitoc Group, will dive deep into their approach to microservices architecture using serverless platform from AWS and demonstrate how anyone can use serverless computing to achieve high scalability, high availability, and high performance without huge efforts or expensive resources allocation.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Eugene",
				  "nameLast":"Istrati",
				  "photo":"speaker-eugene-istrati.jpg",
				  "linkedin":"https://www.linkedin.com/in/eistrati",
				  "twitter":"https://twitter.com/eistrati",
				  "github":"https://github.com/eistrati",
				  "facebook":"",
				  "openSourceRole":"",
				  "website":"https://www.mitocgroup.com/",
				  "organization":"Mitoc Group",
				  "role":"Technology Partner, Serverless Computing",
				  "bio":""
        }
      ]
    }  
	},
	
	{
		"camp":"Angular Camp",
		"tech":"angular",
		"date":"2016-07-17",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Intro to Angular 2",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Get to know everything you need to learn about Angular 2 without reading tons of docs! Typescript, Components, Directives, Providers and Dependency Injection, Templates, Bootstrapping and Routing.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Lerenzo",
				  "nameLast":"Malcom",
				  "photo":"speaker-lerenzo-malcom.jpg",
				  "linkedin":"https://www.linkedin.com/in/lerenzo-tolbert-malcom-87669612",
				  "twitter":"https://twitter.com/lerenzom",
				  "github":"https://github.com/lmalcom",
				  "facebook":"https://www.facebook.com/lerenzo.tolbertmalcom",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Recombine Genomics",
				  "role":"Software Engineer",
				  "bio":"Lerenzo is a software engineer at Recombine Genomics in New York City. With several years of experience working in full stack JavaScript, and more recent experience with Scala and Ruby on Rails, he has worked on problems in various areas both in front end and back end on applications ranging from interactive animation to data visualization."
        }
      ]
    }  
	},



  // APPS CAMP



	{
		"camp":"Apps Camp",
		"tech":"apps",
		"date":"2016-07-09",
		"timeStart":"11:30",
		"timeStop":"12:15",
		"sessionTitle":"Write Once Deploy Everywhere: Once Codebase for Desktop, Web and Mobile",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Using React, Angular2 and Electron to create applications for web, mobile and desktop.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Daiyan",
				  "nameLast":"Alamgir",
				  "photo":"speaker-daiyan-alamgir.jpg",
				  "linkedin":"https://www.linkedin.com/in/daiyanalamgir",
				  "twitter":"http://twitter.com/dalamgir",
				  "github":"http://github.com/alamgird",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Morgan Stanley",
				  "role":"VP, Software Engineer, Equity Capital Markets",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Apps Camp",
		"tech":"apps",
		"date":"2016-07-09",
		"timeStart":"11:30",
		"timeStop":"12:15",
		"sessionTitle":"The State of Real-Time Apps",
		"sessionSubTitle":"",
		"sessionSummary":"<p>A discussion of the state of realtime, answering questions such as: Should everybody be adding real-time features to their apps? What has become established as the norm when building real-time features; both practice & patterns and the solutions used? What are the go-to open source solutions? Where will real-time go in the future; evolution, use cases, innovation?</p>",
		"sessionType":"Keynote",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Phil",
				  "nameLast":"Leggetter",
				  "photo":"speaker-phil-leggetter.jpg",
				  "linkedin":"https://www.linkedin.com/in/leggetter",
				  "twitter":"http://twitter.com/aleaabed",
				  "github":"https://github.com/leggetter",
				  "facebook":"",
				  "website":"http://www.leggetter.co.uk",
				  "openSourceRole":"",
				  "organization":"Nexmo",
				  "role":"Head of Developer Relations",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Apps Camp",
		"tech":"apps",
		"date":"2016-07-09",
		"timeStart":"13:30",
		"timeStop":"14:15",
		"sessionTitle":"HorizonJS: An Open-Source Backend for Real Time Apps",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>A deep dive discussion into how to rapidly build & deploy web or mobile apps using the <a href=\"http://horizon.io\">HorizonJS</a> a simple JavaScript API. Scale your apps to millions of users without any backend code. We'll also discuss how to build sophisticated apps with lightning speed with Horizon, built by the RethinkDB team and an open-source community.</p>",
		"sessionType":"Keynote",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Mike ",
				  "nameLast":"Glukhovsky",
				  "photo":"speaker-mike-glukhovsky.jpg",
				  "linkedin":"https://www.linkedin.com/in/mglukhovsky",
				  "twitter":"http://twitter.com/mglukhovsky",
				  "github":"https://github.com/mglukhovsky",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"RethinkDB",
				  "role":"Founder",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Apps Camp",
		"tech":"apps",
		"date":"2016-07-09",
		"timeStart":"16:30",
		"timeStop":"17:15",
		"sessionTitle":"Firebase for Fun & Profit",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Real-time, reactive, responsive and cross-platform mobile-friendly apps are now the norm, not the exception. As mobile web developers, this creates a huge burden on us to learn disparate technologies and cobble together a complex architecture that can tackle our authentication, analytics, data storage and monetization needs. And that can take away valuable time and effort from focusing on what matters to our customers -- the front-end UX.   Enter Firebase. Firebase is a \"back-end as a service\" platform that works with a wide array of front-end technologies (web, Android, iOS) and has built-in support for these core requirements. And in 2016, it has evolved further to put growth, testing and monetization needs into the spotlight, allowing front-end developers to create modern, cross-platform apps and deploy them with minimal effort.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Nitya",
				  "nameLast":"Narasimhan",
				  "photo":"speaker-nitya-narasimhan.jpg",
				  "linkedin":"https://www.linkedin.com/in/nityan",
				  "twitter":"https://twitter.com/nitya",
				  "github":"https://github.com/nitya",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Digital HV",
				  "role":"Owner",
				  "bio":"Nitya has 20+ years of software research&development experience in mobile, web and distributed systems. After completing her PhD in distributed systems, she worked as a Distinguished Staff Member at Motorola Research for 12 years before starting a consultancy to build mobile and web product for early-stage startups. She organizes Google Developer Group (NYC & Hudson Valley) and Meteor (Hudson Valley) meetups and is passionate about education technology and entrepreneurism in her local community. Talk to her about {Android, React, Meteor, Firebase, Polymer or Blockly}."
        }
      ]
    }  
	},

	{
		"camp":"Apps Camp",
		"tech":"apps",
		"date":"2016-07-09",
		"timeStart":"9:30",
		"timeStop":"10:15",
		"sessionTitle":"So, You've Decided On 'API First'",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Building your next mobile app, SaaS product, or killer social network using an API first philosophy is a great decision. It can allow your team to develop in parallel, enable expansion to multiple platforms, and create opportunity for outside integration. But once you've made that decision, what's next? How do you actually do it? /n What options are there for authentication? How do you reset a password with an API? Is hypermedia worth considering for internal APIs? How do you handle unauthenticated access from a client side javascript application? What format is best for API requests and responses? Should you version your API now, or later? Let's talk about how you can determine the right answers for all those questions, and give your API a solid foundation. Because your API may start out serving the needs of internal mobile clients, or single page web apps, but one day (sooner than you think) you'll probably be turning it into a public API.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Tim",
				  "nameLast":"Lytle",
				  "photo":"speaker-tim-lytle.jpg",
				  "linkedin":"https://www.linkedin.com/in/timlytle",
				  "twitter":"https://twitter.com/tjlytle",
				  "github":"https://github.com/tjlytle",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Nexmo",
				  "role":"Developer Evangelist",
				  "bio":"As a seasoned contract developer Tim's built applications utilizing numerous APIs, created custom APIs for internal consumption, and now helps other developers energize their projects with Nexmo's powerful global communications API. A lover APIs, he also hates the top reply, and tweets sporadically from @tjlytle. "
        }
      ]
    }  
	},

	{
		"camp":"Apps Camp",
		"tech":"apps",
		"date":"2016-07-09",
		"timeStart":"15:30",
		"timeStop":"16:15",
		"sessionTitle":"Card UI in Progressive Web Apps'",
		"sessionSubTitle":"",		
			"sessionSummary":"<p>On the mobile application development front, the pendulum is finally swinging back to Open Web platform. While the Death of the App Store is probably a premature pronouncement, the Rebirth of the Mobile Web is definitively already well on its way. This new vision of the mobile web is clearly trumpet by Google under the moniker of Progressive Web Apps (PWA), which leverages the new mobile browser features to allow apps to load instantly, securely, and scrumptiously. There are many examples of PWAs that match the capability of native app, and by nature of the launch by a simple URL, exceeds the convenience of a native app counterpart.</p><p>Getting a web app added to a home screen is, however, only one way to get users into your application experience. And it may not be the best one. With mobile screen time increasingly and overwhelmingly spent within top 25 social or messaging apps, app developers needs to figure out how to tailor their Open Web app experience within the embedded web browsers of these dominant networks, such as Facebook, Twitter, Snapchat, Pinterest, or even Slack.</p><p>Chris Tse, the founding director of CardStack and CTO of Monegraph, will show how app developers can apply Card UI patterns and architecture to optimize their mobile web apps for this new world. where embedding within the user’s daily workflow is more fruitful than begging to be installed. Chris will present a card-based application lifecycle and rubric that developers can reference to modularize their web application into card-sized bits, so that the pertinent, syndicated “cards” load instantly when opened with a simple sharable link, while deeper features are lazily and progressive loaded as the user are drawn deeper into a more explorative experience. Give the user what they want quickly, and you may just earn the \“Add the Home Screen\” tap.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Chris",
				  "nameLast":"Tse",
				  "photo":"speaker-chris-tse.jpg",
				  "linkedin":"https://www.linkedin.com/in/christophertse",
				  "twitter":"https://twitter.com/christse",
				  "github":"https://github.com/tjlytle",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":""
        }
      ]
    }  
	},
	




  // CIVIC CAMP
  
  
  {
		"camp":"Civic Camp",
		"tech":"civic",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"",
		"sessionSubTitle":"",		
		"sessionSummary":"",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Andrew",
				  "nameLast":"Hoppin",
				  "photo":"speaker-andrew-hoppin.jpg",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"NuCivic",
				  "role":"President & Co-Founder",
				  "bio":""
        }
      ]
    }  
	},
   
  {
		"camp":"Civic Camp",
		"tech":"civic",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"",
		"sessionSubTitle":"",		
		"sessionSummary":"",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Ben",
				  "nameLast":"Kallos",
				  "photo":"speaker-ben-kallos.jpg",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"NYC City Council",
				  "role":"Chair of Governmental Operations Committee",
				  "bio":""
        }
      ]
    }  
	},   
  
  {
		"camp":"Civic Camp",
		"tech":"civic",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"The Civic Graph: Put Yourself On The Map",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Civic Graph is a knowledge graph that maps people & organizations doing work in civic tech, defined as the use of technology for the public good. Initiated by Microsoft's Technology & Civic Innovation team, the purpose of Civic Graph is to help facilitate the evolution of civic tech's respective focus areas and the connections between its entities. Its usage is extended as an educational tool, an open information platform, and a resource for transparency within the field.</p> <p>You can help build the most robust database of people and organizations working in civic tech by adding yourself to the graph or adding an organization or individual who works in the space at civicgraph.io.  (This session summary may be subject to change if being published anywhere).</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Briana",
				  "nameLast":"Vecchione",
				  "photo":"speaker-briana-vecchione.jpg",
				  "linkedin":"https://www.linkedin.com/in/brianavecchione",
				  "twitter":"https://twitter.com/brianavecchione",
				  "github":"https://github.com/MicrosoftTCE",
				  "facebook":"",
				  "website":"http://brianavecchione.com",
				  "openSourceRole":"",
				  "organization":"Microsoft",
				  "role":"Civic Tech Fellow",
				  "bio":"<p>Briana Vecchione serves as a Microsoft Civic Tech Fellow, where she works as a software engineer and data scientist. A recent computer science graduate from Pace University, Briana has worked on various projects at Microsoft Research, the Federal Reserve Board of Governors, ABB, and Square and is a recipient of over 20 grants and awards from institutions like the National Science Foundation, the Association of Computing Machinery, and the Anita Borg Institute.Briana also serves as the head of wogrammer New York, an organization dedicated to celebrating, supporting, and connecting accomplished women in tech in the New York area. An avid public speaker, she often speaks at venues like Microsoft Research, Bloomberg, TedX, Sony Wonder Lab, Facebook, and Carnegie Mellon. She is a recipient of the ACM Tapia Research Award, a 2-time scholar of the ABI Grace Hopper Celebration, National Science Foundation Tapia Celebration scholar, and the founder the Pace University Women in Tech community. More at <a href=\"http://brianavecchione.com\" targe=\"_blank\">http://brianavecchione.com</a>.</p>"
        }
      ]
    }  
	},
  
  {
		"camp":"Civic Camp",
		"tech":"civic",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Open Data Durban - Using Open Source Tools to develop South Africa",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Civic Graph is a knowledge graph that maps people & organizations doing work in civic tech, defined as the use of technology for the public good. Initiated by Microsoft's Technology & Civic Innovation team, the purpose of Civic Graph is to help facilitate the evolution of civic tech's respective focus areas and the connections between its entities. Its usage is extended as an educational tool, an open information platform, and a resource for transparency within the field.</p> <p>You can help build the most robust database of people and organizations working in civic tech by adding yourself to the graph or adding an organization or individual who works in the space at civicgraph.io.  (This session summary may be subject to change if being published anywhere).</p>",
		"sessionType":"Lightning Talk",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Tricia",
				  "nameLast":"Govindasamy",
				  "photo":"speaker-tricia-govindasamy.jpg",
				  "linkedin":"",
				  "twitter":"https://twitter.com/openENVIRO",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Open Data Durban",
				  "role":"Open Government Fellow",
				  "bio":""
        }
      ]
    }  
	},  

  {
		"camp":"Civic Camp",
		"tech":"civic",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Open Source Law Enforcement",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>The goal of this session would be to introduce participants to systems I've built to find and catch victims of human trafficking.  And then to pivot more broadly to how to build technology open source for law enforcement.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Eric",
				  "nameLast":"Schles",
				  "photo":"speaker-eric-schles.jpg",
				  "linkedin":"https://www.linkedin.com/in/ericschles",
				  "twitter":"https://twitter.com/EricSchles",
				  "github":"https://github.com/EricSchles/",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"US Digital Service",
				  "role":"Data Scientist",
				  "bio":"<p>Eric Schles is an expert in anti human trafficking efforts, data scientist and Python enthusiast.  He is deeply passionate about bringing open source to the government land scape and creating civic technology.</p>"
        }
      ]
    }  
	},  

  {
		"camp":"Civic Camp",
		"tech":"civic",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"A Journey In the Cloud",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Empowering educators and school administrators through flexible, ​open-source tools and resources the, New Visions CloudLab is a home for community driven tool development and support. This session will give an overview of our journey to creating these tools with our users and demo one of our most popular Add-Ons used both in schools and government-Autocrat!</p>",
		"sessionType":"Lightning Talk",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Danieta",
				  "nameLast":"Danieta Morgan",
				  "photo":"speaker-danieta-morgan.jpg",
				  "linkedin":"",
				  "twitter":"https://twitter.com/youthinnovator",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"New Visions for Public Schools-CloudLab",
				  "role":"Lead of Instructional Systems",
				  "bio":""
        }
      ]
    }  
	},   
  
  
  
  // COMMUNITY CAMP

	{
		"camp":"Community Camp",
		"tech":"community",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Becoming Open-Source By Default",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Becoming open-source by default is emotionally, organizationally and, sometimes, technically hard. Let's make this step together.</p>",
		"sessionType":"Keynote",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Daniel",
				  "nameLast":"Doubrovkine",
				  "photo":"speaker-daniel-doubrovkine.jpg",
				  "linkedin":"https://www.linkedin.com/in/dblock",
				  "twitter":"https://twitter.com/dblockdotorg",
				  "github":"https://github.com/dblock",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Artsy.net",
				  "role":"CTO",
				  "bio":"Daniel Doubrovkine (aka dB.) is a seasoned entrepreneur and technologist, CTO at Artsy.net in New York, working on bringing the art world online. He is a maintainer of multiple popular open-source projects, including Java Native Access, Ruby Grape, Hashie and the popular Slack Ruby client, bot and server libraries. Daniel graduated from University of Geneva in late 90s and founded and sold Vestris Inc., an early stage technology start-up right after college. He joined Microsoft as Development Lead, was Director at Visible Path, then Architect and Development Manager at Application Security."
        }
      ]
    }  
	},
		
	{
		"camp":"Community Camp",
		"tech":"community",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Grow Your Own",
		"sessionSubTitle":"How to Grow a Sustainable Team",		
		"sessionSummary":"<p>Lack of available talent to hire is a common refrain of business owners in our field. Give up on looking and complaining! To create a sustainable business you need to be able to grow your own.</p><p>Growing your own means hiring smart, motivated people with all the right soft skills and investing in them for the long haul. In return for helping give them a career, expect that they'll reward you with loyalty, will care about helping to teach your newer staff, and will work together with a cohesive vision (having all been trained the same way).</p><p>Do you sell code or do you sell expertise? (Hint the code is GPL.) If you sell expertise you recognize that the true value of your business is the people on your team. Sure your contracts and brand could keep you going for a little while, maybe you could even sell them, but it's the people who have the true value. So invest in them to invest in your business.</p><p>Sure sure, agreed agreed, people, yes, empathy, values etc etc yes yes. But how do you actually train up a team of expert consultants? How long is this going to take? How are you possibly supposed to afford it? If you're bringing in these green developers, won't they break your clients' sites and destroy your reputation? Jody, doesn't it seem totally contradictory that you're obsessed with quality AND saying it's cool to bring these amateurs into the team? Wow, guess we should expect to be getting some rescue projects sliding off of Zivtech's roster soon! And won't these people you're training just quit and come work for us once they're skilled and we offer them more money? And wait do you seriously pay people to get training?</p><p>Great questions! ;) I've been growing my own for a long time and harvesting the many rewards. I'll answer all these questions, new ones that I think up, and then follow it all up by letting you ask your own which I will then also answer.</p><p>This session is intended for business owners, leaders and managers as well as those getting ready to make the leap. You'll leave this session thinking differently about your opportunities and (hopefully) inspired to grow your own team instead of trying to buy one on the market.</p>",
		"sessionType":"Session",
		"sessionSlides":"https://docs.google.com/presentation/d/1UjAaC3mZm3lN9PcSBgK3vp1G3PminXbc6Ddd4Gb9...",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jody",
				  "nameLast":"Hamilton",
				  "photo":"speaker-jody-hamilton.jpg",
				  "linkedin":"https://www.linkedin.com/in/jody-hamilton-54169228",
				  "twitter":"https://twitter.com/JodyHamilton",
				  "github":"https://github.com/jodyHamilton",
				  "facebook":"",
				  "website":"https://www.zivtech.com/about/team/jody-hamilton",
				  "openSourceRole":"",
				  "organization":"Zivtech",
				  "role":"CTO",
				  "bio":"As a seasoned contract developer Tim's built applications utilizing numerous APIs, created custom APIs for internal consumption, and now helps other developers energize their projects with Nexmo's powerful global communications API. A lover APIs, he also hates the top reply, and tweets sporadically from @tjlytle. "
        }
      ]
    }  
	},
	
	{
		"camp":"Community Camp",
		"tech":"community",
		"date":"2016-07-10",
		"timeStart":"13:30",
		"timeStop":"14:15",
		"sessionTitle":"Next Wave of Open Source",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>In the past decade Open Source has grown to become the de facto standard and preferred software for Enterprise businesses, government agencies, small businesses and non-profits. Now we are entering a new era where not only are these organizations adopting the use of Open Source, but they are actively participating in and contributing back to the projects. This is a large shift that requires change both within the Enterprise organization and in the open source project to welcome these new contributors. In this session we'll discuss the changes we all need to make within our companies and the shifts we'll see within our open source communities.</p>",
		"sessionType":"Keynote",
		"sessionSlides":"https://docs.google.com/presentation/d/1gqv6EEFLhJl4JYW8XCffKk_V08LjBun7LWs0d6I6xuk/edit#slide=id.g1040c33ad1_0_170",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jacob",
				  "nameLast":"Redding",
				  "photo":"speaker-jacob-redding.jpg",
				  "linkedin":"https://www.linkedin.com/in/timlytle",
				  "twitter":"https://twitter.com/jredding",
				  "github":"https://github.com/jredding",
				  "facebook":"",
				  "website":"https://about.me/jredding",
				  "openSourceRole":"Former Executive Director of the Drupal Association",
				  "organization":"Accenture Emerging Technology Innovation Labs",
				  "role":"Open Source Manager",
				  "bio":"As a seasoned contract developer Tim's built applications utilizing numerous APIs, created custom APIs for internal consumption, and now helps other developers energize their projects with Nexmo's powerful global communications API. A lover APIs, he also hates the top reply, and tweets sporadically from @tjlytle."
        }
      ]
    }  
	},

	
	{
		"camp":"Community Camp",
		"tech":"community",
		"date":"2016-07-10",
		"timeStart":"15:30",
		"timeStop":"16:15",
		"sessionTitle":"",
		"sessionSubTitle":"",		
		"sessionSummary":"",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Aseem",
				  "nameLast":"Sood",
				  "photo":"speaker-aseem-sood.jpg",
				  "linkedin":"https://www.linkedin.com/in/aseems",
				  "twitter":"https://twitter.com/asood123",
				  "github":"https://github.com/asood123",
				  "facebook":"",
				  "website":"https://opencollective.com/",
				  "openSourceRole":"",
				  "organization":"Open Collective",
				  "role":"Co-Founder",
				  "bio":""
        }
      ]
    }  
	},
	
	
	{
		"camp":"Community Camp",
		"tech":"community",
		"date":"2016-07-10",
		"timeStart":"14:30",
		"timeStop":"15:15",
		"sessionTitle":"Building an Accessible Community",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>We talk about accessibility a lot when we write code, whether that is writing good documentation, comment blocks or creating a good user experience. When it comes to our user groups and events, accessibility is not usually on the forefront of our minds.  At WordCamp London, the organising team ensured that accessibility was a key goal of the event. We wanted to see how far we could push being accessible and how much effort it would take.  This talk is about the challenges of organising an accessible event, including how we degendered content, added child care facilities and helped the hard of hearing. We will look at the cost of each accessible feature, explore the unexpected benefits of an accessible event and discuss the lessons were learnt on the way.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jenny",
				  "nameLast":"Wong",
				  "photo":"speaker-jenny-wong.jpg",
				  "linkedin":"https://www.linkedin.com/in/timlytle",
				  "twitter":"https://twitter.com/miss_jwo",
				  "github":"https://github.com/missjwo",
				  "facebook":"",
				  "website":"http://jwong.co.uk/",
				  "openSourceRole":"",
				  "organization":"Human Made",
				  "role":"Community Engineer",
				  "bio":"Jenny is a Community Engineer at Human Made. Her love for development goes beyond the screen & is an advocate for both the PHP and WordPress communities. As a speaker, community evangelist and event organiser, you can usually find her loudly cheering people on to share knowledge & contribute back to their communities."
        }
      ]
    }  
	},





  // DATA VIZ CAMP	
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "09:00",
    "timeStop": "09:45",
    "sessionTitle": "Data Illiteracy",
    "sessionSubTitle": "",
    "sessionSummary": "<p>According to the OECD’s Pisa study, U.S. adults lag most countries in literacy, numeracy and computer skills. \nWhile economic, private and political decision making processes are increasingly data-driven, we are faced with a large proportion of the population that could be considered data illiterate. This talk will explore how data visualization might help to mitigate this problem.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Hermann",
          "nameLast": "Zschiegner",
          "photo": "speaker-hermann-zschiegner.jpg",
          "linkedin": "",
          "twitter": "https://twitter.com/2nfo",
          "github": "",
          "facebook": "",
          "website": "http://www.two-n.com/",
          "openSourceRole": "",
          "organization": "TWO-N",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "09:45",
    "timeStop": "10:30",
    "sessionTitle": "Visualizing Science for Museum Visitors at AMNH",
    "sessionSubTitle": "",
    "sessionSummary": "<p>The first half of the talk will cover how AMNH’s scientists, engineers, and animators collaborate to visualize data in a museum context and how that is different from visualizing infographics or news, and the second portion will focus on how data visualization serves as a tool to spark interest in introductory computer science.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Natalia",
          "nameLast": "Rodriguez",
          "photo": "speaker-natalia-rodriguez.jpg",
          "linkedin": "",
          "twitter": "https://twitter.com/nataliastweeet",
          "github": "",
          "facebook": "",
          "website": "",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": "Natalia Rodriguez is the Helen Fellow in Data Visualization at the American Museum of Natural History. In addition to collaborating with the team on data visualizations for museum visitors, she co-teaches a data visualization course to high school girls in the Museum's Bridge-Up program. She has written and tinkered with Co.Labs at Fast Company, as well as authored the course for Sass recently released at Codecademy."
        },
        {
          "nameFirst": "Eozin",
          "nameLast": "Che",
          "photo": "speaker-eozin-che.jpg",
          "linkedin": "",
          "twitter": "",
          "github": "",
          "facebook": "",
          "website": "http://www.eozin.me/",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": "Eozin Che is a creative technologist and interactive installation artist. Her work spans multiple artistic platforms including interactive exhibit, live performance and 3D animated visualization. She is currently a Lead Digital Artist at American Museum of Natural History. Eozin received her master’s degrees in architecture from University of Pennsylvania, and in interactive technologies from ITP at New York University."
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "10:45",
    "timeStop": "11:30",
    "sessionTitle": "How to Avoid Some Common Graphical Mistakes",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Good graphs are extremely powerful tools for communicating quantitative information clearly and accurately. Unfortunately, many of the graphs we see today are poor graphs that confuse, mislead or deceive the reader. These poor graphs often occur because the graph designer is not familiar with principles of effective graphs or because the software used has a poor choice of default settings. We point out some of these graphical mistakes. In most cases very simple changes make the resulting graphs easier for the reader to understand. We end with some useful little-known graph forms that communicate the data more clearly than the everyday graphs that are more commonly used.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Naomi B.",
          "nameLast": "Robbins",
          "photo": "speaker-naomi-robbins.jpg",
          "linkedin": "www.linkedin.com/pub/naomi-b-robbins/7/107/41a",
          "twitter": "https://twitter.com/nbrgraphs",
          "github": "",
          "facebook": "",
          "website": "http://www.nbr-graphs.com/",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "11:30",
    "timeStop": "12:00",
    "sessionTitle": "Tiny Tools",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Reusing D3 code is hard. We're constantly trying to come up with novel designs and ways of encoding data, making it difficult to write code that is also composable and reusable. In this talk, Adam will discuss the tiny tools developed and used at Bloomberg Graphics to sketch charts with code more quickly, reduce the amount of required copying and pasting, make it easier to move between illustrator and D3, simplify color selection, and more.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Adam",
          "nameLast": "Pearce",
          "photo": "speaker-adam-pearce.jpg",
          "linkedin": "",
          "twitter": "http://twitter.com/adamrpearce",
          "github": "http://github.com/1wheel",
          "facebook": "",
          "website": "http://roadtolarissa.com/",
          "openSourceRole": "",
          "organization": "Bloomberg",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "13:00",
    "timeStop": "14:00",
    "sessionTitle": "Reactive Building Blocks: Interactive Visualizations with Vega",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Vega is a visualization grammar -- a declarative format for creating and saving interactive visualization designs. Existing declarative visualization languages allow users to construct static visualizations by mapping data values to visual properties. Unfortunately, a similar process does not yet exist for interactive visualizations. Instead, custom interaction design requires programming with event handling callbacks -- a complex and error-prone task. In this talk, Arvind will describe how to use reactive building blocks, offered natively in recent versions of Vega, to author interactive data graphics. With this approach, the complexity of event propagation and state changes is managed entirely by Vega. Users are now free to more quickly prototype and iterate on interactive designs, and more easily retarget them across mouse and touch input.</p>",
    "sessionType": "Keynote",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Arvind",
          "nameLast": "Satyanarayan",
          "photo": "speaker-arvind-satyanarayan.jpg",
          "linkedin": "http://www.linkedin.com/in/arvindsatya1/",
          "twitter": "http://twitter.com/arvindsatya1",
          "github":"http://github.com/arvind",
          "facebook": "",
          "website": "http://arvindsatya.com/",
				  "openSourceRole":"PhD Candidate working with Jeffrey Heer on Vega",
				  "organization":"Apropose Inc.",
				  "role":"Cofounder",
          "bio": "<p>Arvind Satyanarayan is a Computer Science PhD candidate at Stanford University. He works with Jeffrey Heer, and the University of Washington Interactive Data Lab, on new languages and systems for custom interactive visualization design. Arvind is also a co-founder and advisor at Apropose, a search engine for web design.</p>"
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "14:00",
    "timeStop": "14:30",
    "sessionTitle": "Clustergrammer: Interactive Heatmap Visualizations Built using D3.js",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Hierarchically clustered heatmaps are a popular visualization method used in biomedical research to display high-dimensional biological data sets, such as genome-wide expression. However, these visualizations can be difficult for non-computational biologists to produce and sharing static images with collaborators limits their usefulness. Clustergrammer is a web-based matrix visualization tool, built using D3, that enables users to easily generate highly-interactive (zoomable, reorderable, filterable, etc.) and shareable clustergram visualizations. Clustergrammer can also be used as a stand-alone JavaScript library by developers. The talk will discuss the motivations and challenges involved in developing the web app.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Nicolas",
          "nameLast": "Fernandez",
          "photo": "speaker-nicolas-fernandez.jpg",
          "linkedin": "https://www.linkedin.com/in/nicolas-fernandez-32a0b84a",
          "twitter": "",
          "github": "",
          "facebook": "",
          "website": "",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": "Nicolas Fernandez is a postdoc in Avi Ma’ayan’s lab at Mount Sinai."
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "14:30",
    "timeStop": "15:00",
    "sessionTitle": "All about \"you\": Reflecting Identity in Dataviz",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Interactive journalism is unique in its ability to let the reader actively participate in a story. This talk will look at how allowing the reader to create their own experience within a data visualization can prompt deeper engagement and provide a more meaningful – and memorable – connection to the story.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Nadja",
          "nameLast": "Popovich",
          "photo": "speaker-nadja-popovich.jpg",
          "linkedin": "",
          "twitter": "https://twitter.com/popovichN",
          "github": "",
          "facebook": "",
          "website": "http://nadjapopovich.com/",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": "Nadja is an Interactive editor, Guardian US"
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "15:15",
    "timeStop": "16:00",
    "sessionTitle": "Visualizing the News",
    "sessionSubTitle": "",
    "sessionSummary": "<p>The work at the graphics desk often involve taking large datasets and abstract numbers and turning them into a story. I'll talk about the process of turning data into a graphic, with examples of recent work from our department.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Rebecca",
          "nameLast": "Lai",
          "photo": "speaker-rebecca-lai.jpg",
          "linkedin": "http://www.linkedin.com/pub/kk-rebecca-lai/47/a82/a52",
          "twitter": "http://twitter.com/kkrebeccalai",
          "github": "http://www.github.com/kklai",
          "facebook": "",
          "website": "http://kkrebeccalai.com/about.html",
          "openSourceRole": "",
          "organization": "New York Times",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-09",
    "timeStart": "16:00",
    "timeStop": "16:45",
    "sessionTitle": "Datum Ipsum: Designing Robust Real-Time Visualizations with Realistic Dummy Data",
    "sessionSubTitle": "",
    "sessionSummary": "<p>In designing real-time data visualizations, coming up with placeholder data can be frustrating, as it never quite matches the finished product. Without a background in statistics, how can we design visualizations that stand up to unpredictable and rapidly-changing data sets?</p><p>In this session, I’ll introduce a few tools designers can use to test and tweak their data visualizations, providing more realistic mockups and prototypes, and ultimately improving the quality of the end result.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Matt",
          "nameLast": "Ström",
          "photo": "speaker-matt-strom.jpg",
          "linkedin": "",
          "twitter": "https://twitter.com/plntary",
          "github": "",
          "facebook": "",
          "website": "https://planetary.io/",
          "openSourceRole": "",
          "organization": "Planetary",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-10",
    "timeStart": "09:45",
    "timeStop": "10:30",
    "sessionTitle": "Vizanda: Paste the Power of D3",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Vizanda is a brand new tool that lets you visualize and share your data in seconds and answer follow-up questions before they're asked. Check out the first ever public demo of Vizanda at Data Viz Camp 2016 and learn about the novel techniques Vizanda uses on top of tried and true open source data visualization technologies.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Greg",
          "nameLast": "McDonald",
          "photo": "speaker-greg-mcdonald.jpg",
          "linkedin": "",
          "twitter": "",
          "github": "",
          "facebook": "",
          "website": "",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-10",
    "timeStart": "10:30",
    "timeStop": "11:00",
    "sessionTitle": "Data Stories",
    "sessionSubTitle": "",
    "sessionSummary": "<p>How to you use data to tell a story? How do you work with data to tell a story that and reach an audience? Learn some tips and tricks from Sarah Slobin, the Things editor at Quartz and a seasoned Visual Journalist who has worked for the New York Times, Fortune and the Wall Street Journal.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Sarah",
          "nameLast": "Slobin",
          "photo": "speaker-sarah-slobin.jpg",
          "linkedin": "",
          "twitter": "https://twitter.com/sarahslo",
          "github": "",
          "facebook": "",
          "website": "http://www.sarahslobin.com/",
          "openSourceRole": "",
          "organization": "Quartz",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-10",
    "timeStart": "11:30",
    "timeStop": "12:00",
    "sessionTitle": "",
    "sessionSubTitle": "Visualizing SMEs",
    "sessionSummary": "<p>When working on a new project, you may want to identify a SME (subject-matter-expert) to help you get started. At Capital One, we've developed a tool called FindSME that generates force-directed network graphs in D3.js to highlight SMEs on various company datasets. Come to this talk to learn about how we tested identifying SME-ness using custom layouts in D3 and combining different datasets in Neo4j.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Paul",
          "nameLast": "Buffa",
          "photo": "speaker-paul-buffa.jpg",
          "linkedin": "https://www.linkedin.com/in/paul-buffa",
          "twitter": "",
          "github": "",
          "facebook": "",
          "website": "",
          "openSourceRole": "",
          "organization": "Capital One",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-10",
    "timeStart": "13:00",
    "timeStop": "14:15",
    "sessionTitle": "The Thinking Eye: On seeing, reasoning, producing",
    "sessionSubTitle": "",
    "sessionSummary": "",
    "sessionType": "Keynote",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Edward",
          "nameLast": "Tufte",
          "photo": "speaker-edward-tufte-4.jpg",
          "linkedin": "",
          "twitter": "http://twitter.com/EdwardTufte",
          "github": "",
          "facebook": "http://www.facebook.com/EdwardTufte",
          "website": "https://www.edwardtufte.com/tufte/",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-10",
    "timeStart": "14:30",
    "timeStop": "15:00",
    "sessionTitle": "Who Cares What Beyonce Ate for Lunch?",
    "sessionSubTitle": "",
    "sessionSummary": "<p>In the United States, the diet industry is made up of 108 million dieters that spend $20 billion each year on diet books, diet drugs and weight-loss surgeries (ABC News, May 7, 2012).  Many of the diet solutions are built around celebrity endorsements. Magazines show how a famous person like Beyonce lost weight and tell readers they can do it too.\n\nScientific research states that there are many important factors that influence healthy eating and weight loss beyond “what you eat.” Many variables contribute to a healthy eating lifestyle including what time you eat, where you get your food, how much do you eat and does the food consumed satisfy your individual nutritional needs.  With all of these variables to consider, modeling healthy eating gets complicated quickly.  \n\nA graph database is the best way to represent the science and the art of healthy eating.   Using an open source dataset from the US government, I show you how I built and use a graph to model real food behavior for over 7,000 people from 2 months old to age 80.  The graph is used to visualize patterns around when people eat, how people combine food to create meals, and how well people meet their nutritional requirements.  All of these patterns can be observed in the context of each person’s Body Mass Index (a measure of obesity) and other health statistics.  Visualizing this rich dataset as a graph is valuable and informative for anyone interested in his or her health.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Dr. Alicia",
          "nameLast": "Powers",
          "photo": "speaker-alicia-powers.jpg",
          "linkedin": "https://www.linkedin.com/in/alicia-powers-1327236",
          "twitter": "https://twitter.com/apowers411",
          "github": "",
          "facebook": "",
          "website": "",
          "openSourceRole": "",
          "organization": "Data Scientist at Fino Consulting",
          "role": "",
          "bio": ""
        }
      ]
    }
  },
  
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-10",
    "timeStart": "15:00",
    "timeStop": "15:45",
    "sessionTitle": "Bridging the gap between design & development",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Designers and developers often have specific goals when creating interactive experiences. Because our creative processes overlap and influence one another, knowing each other’s considerations is key to designing and implementing experiences that are both usable and performant. How can designers help developers? How can developers help designers? In this presentation, we will explore communication and collaboration practices that help in this process.</p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Amanda",
          "nameLast": "Cheung",
          "photo": "speaker-amanda-cheung.jpg",
          "linkedin": "",
          "twitter": "",
          "github": "",
          "facebook": "",
          "website": "",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": "Amanda is the lead UX developer at DockYard, a design-driven software consultancy based out of Boston, MA. She comes from a visual background having graduated with a BFA in painting, but another part of her brain fell in love with CSS. Finding better user experience solutions by balancing designers' and developers' priorities fascinates her. She is always trying to improve the designer-developer relationship. Amanda is also an instructor at MassArt, a co-organizer of the Boston CSS Meetup and a teacher for Girl Develop It."
        }
      ]
    }
  },
  
  {
    "camp": "Data Viz Camp",
    "tech": "dataviz",
    "date": "2016-07-10",
    "timeStart": "16:00",
    "timeStop": "16:45",
    "sessionTitle": "How to Lie with Charts",
    "sessionSubTitle": "",
    "sessionSummary": "<p>Modern graphics and charting tools create a powerful way to discover relationships in data and to forcefully show findings. This power, however, gives you the opportunity to mislead others and even yourself. Elliot Noma will show you some tried and true methods to create nefarious charts, along with modern variations that take advantage of interactive packages. </p>",
    "sessionType": "Session",
    "sessionSlides": "",
    "sessionVideo": "",
    "speakers": {
      "speaker": [
        {
          "nameFirst": "Elliot",
          "nameLast": "Noma",
          "photo": "speaker-elliot-noma.jpg",
          "linkedin": "",
          "twitter": "",
          "github": "",
          "facebook": "",
          "website": "",
          "openSourceRole": "",
          "organization": "",
          "role": "",
          "bio": ""
        }
      ]
    }
  },




  // DATABASE CAMP
  // TBA
  // TBA



  // DESIGN CAMP
  // TBA





  // DEV OPS CAMP
	{
		"camp":"Dev Ops Camp",
		"tech":"devops",
		"date":"2016-07-09",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Ansible Crash Course",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Ansible is the Swiss Army knife of DevOps, capable of handling many powerful automation tasks with the flexibility to adapt to many environments and workflows. With Ansible, users can very quickly get up and running to do real work. This 2 hour session will prove that and jump-start using Ansible. At the end of this session, you'll have an understanding of deploying apps, managing systems, securely and powerfully reducing complexity, and understanding the basic tenants of running Ansible playbooks, including how to write your own.",
		"sessionType":"Workshop",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Timothy",
				  "nameLast":"Appnel",
				  "photo":"speaker-timothy-appnel.jpg",
				  "linkedin":"https://www.linkedin.com/in/tappnel",
				  "twitter":"https://twitter.com/appnelgroup",
				  "github":"https://github.com/tima",
				  "facebook":"",
				  "openSourceRole":"",
				  "website":"http://ansible.com",
				  "organization":"Ansible by Redhat",
				  "role":"Principal Architect",
				  "bio":"<p>Timothy Appnel is a Principal Product Manager and \"Jack of all trades\" at Ansible by Red Hat with over 25 years of corporate IT and startup experience across numerous industries. Tim is an old-timer in the Ansible community that has been contributing since version v0.5. The synchronize module in Ansible is all his fault.</p>"
        }
      ]
    }  
	},

	{
		"camp":"Dev Ops Camp",
		"tech":"devops",
		"date":"2016-07-09",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"rkt: Secure Application Container Runtime",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Faraz Fazli will be demonstrating how to use <a href=\"https://github.com/coreos/rkt\" target=\"_blank\">rkt</a> to create, deploy, and manage Linux containers. rkt is a container runtime similar to Docker, but secure by default. He will walk through creating App Container Images (ACIs), running them using systemd, and reading container log files with journalctl.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Faraz",
				  "nameLast":"Fazli",
				  "photo":"speaker-faraz-fazli.jpg",
				  "linkedin":"https://www.linkedin.com/in/farazfazli",
				  "twitter":"https://twitter.com/farazfazli",
				  "github":"https://github.com/farazfazli",
				  "facebook":"",
				  "openSourceRole":"",
				  "website":"",
				  "organization":"Contap Inc.",
				  "role":"Chief Development Officer",
				  "bio":"Faraz is 19, has been coding since he turned 10,  and organizes a tech meetup group in NYC with almost 900 members."

        }
      ]
    }  
	},	


	{
		"camp":"Dev Ops Camp",
		"tech":"devops",
		"date":"2016-07-09",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"How to Scale Open Source Load Testing with JMeter, Gatling, Jenkins, and RedLine13",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Learn how to create and run scalable open source load tests with Apache JMeter, Gatling, Jenkins, and RedLine13. We demonstrate how to simulate various load's and stress levels that a website might experience, for example, what happens if we simulate 50,000 users or more constantly hitting a website over the course of a few minutes or more? During this talk we will go over open source load testing, the various open source tools out there, how you can use these tests and the value they offer, example tests, and how/why we created RedLine13 as an affordable solution to do so.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Richard",
				  "nameLast":"Friedman",
				  "photo":"speaker-richard-friedman.jpg",
				  "linkedin":"https://www.linkedin.com/in/richardfriedman",
				  "twitter":"https://twitter.com/richardfriedman",
				  "github":"https://github.com/richardfriedman",
				  "facebook":"",
				  "openSourceRole":"",
				  "website":"http://richardfriedman.blogspot.com/",
				  "organization":"RedLine13",
				  "role":"CEO/Founder",
				  "bio":"Richard Friedman one of the cofounders and is the CEO of RedLine13, a cloud-based load testing company. Before co-creating RedLine13, Mr. Friedman was previously the CTO of MeetMe and was a lead project manager for JBoss Operations Network and RedHat Network."
        }
      ]
    }  
	},	
	
	{
		"camp":"Dev Ops Camp",
		"tech":"devops",
		"date":"2016-07-09",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Automating Databases with Flynn",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Deploying and managing highly available databases can be a challenging task, and humans are almost always involved when something goes wrong. Flynn is an open source platform and this talk will cover how we've built database as a service for PostgreSQL, Redis, MySQL, and MongoDB that runs anywhere and makes automatic database provisioning, backups, and safe automatic failover easy and accessible for anything from a side project to production.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jonathan",
				  "nameLast":"Rudenberg",
				  "photo":"speaker-jonathan-rudenberg.jpg",
				  "linkedin":"",
				  "twitter":"https://twitter.com/titanous",
				  "github":"https://github.com/titanous",
				  "facebook":"",
				  "openSourceRole":"Co-founder of Flynn and an architect of the Tent Protocol",
				  "website":"https://titanous.com/",
				  "organization":"Flynn",
				  "role":"CTO",
				  "bio":"Jonathan leads development of Flynn, an open source platform as a service that hosts apps and databases. Before starting Flynn, Jonathan co-architected Tent, an open, decentralized communication and storage protocol."
        }
      ]
    }  
	},	
	
	{
		"camp":"Dev Ops Camp",
		"tech":"devops",
		"date":"2016-07-09",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Building Scalable Web Applications using Microservices Architecture and Serverless Computing from AWS",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Scalable applications are by nature resource intensive, expensive to build and difficult to manage. What if we can change this perception and help developers design full-stack applications that are low cost and low maintenance? This session describes the underlying architecture behind <a href=\"http://www.deep.mg\" target=\"_blank\">http://www.deep.mg</a>, the microservices marketplace built by Mitoc Group using AngularJS, NodeJS and powered by abstracted services like AWS Lambda, Amazon CloudFront, Amazon DynamoDB, and so on. Eugene Istrati, Technology Partner at Mitoc Group, will dive deep into their approach to microservices architecture using serverless environments from AWS and demonstrate how anyone can use serverless computing to achieve high scalability, high availability, and high performance without huge efforts or expensive resources allocation.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Eugene",
				  "nameLast":"Istrati",
				  "photo":"speaker-eugene-istrati.jpg",
				  "linkedin":"https://www.linkedin.com/in/eistrati",
				  "twitter":"https://twitter.com/eistrati",
				  "github":"https://github.com/eistrati",
				  "facebook":"",
				  "openSourceRole":"",
				  "website":"https://www.mitocgroup.com/",
				  "organization":"Mitoc Group",
				  "role":"Technology Partner, Serverless Computing",
				  "bio":""
        }
      ]
    }  
	},	

	{
		"camp":"Dev Ops Camp",
		"tech":"devops",
		"date":"2016-07-09",
		"timeStart":"10:30",
		"timeStop":"11:15",
		"sessionTitle":"Infrastructure Automation with Convox",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Convox is an open-source PaaS that installs into your own AWS account brought to you by some of the original engineers behind Heroku. Come hear about our experience running thousands of applications across hundreds of servers without an ops team.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"David",
				  "nameLast":"Dollar",
				  "photo":"speaker-david-dollar.jpg",
				  "linkedin":"https://www.linkedin.com/in/ddollar",
				  "twitter":"https://twitter.com/ddollar",
				  "github":"https://github.com/ddollar",
				  "facebook":"",
				  "openSourceRole":"",
				  "website":"https://www.convox.com/",
				  "organization":"Convox",
				  "role":"CEO",
				  "bio":"<p>David has been building developer tools for most of his career. He is the author of the open-source tool foreman and led Developer Experience at Heroku. His current project is Convox, open-source tools for building simple and scalable production environments on AWS.</p>"
        }
      ]
    }  
	},	


  // DRUPAL NYC CAMP
  // TBA
  // TBA




  // ELIXIR CAMP NYC

 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-15",
		"timeStart":"09:00",
		"timeStop":"17:30",
		"room":"27th Floor Lounges",
		"sessionTitle":"Friday Hacking & Contribution Sprints",
		"sessionSubTitle":"",
		"sessionSummary":"<p>We have space available where attendees can informally gather to come and hack on their projects & make contributions.</p>",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},	
		
 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-15",
		"timeStart":"15:15",
		"timeStop":"17:15",
		"room":"Express Bar (3rd Fl)",
		"sessionTitle":"Friday Aft Workshop - Who’s who?  Authenticating users with Ueberauth and Guardian",
		"sessionSubTitle":"",
		"sessionSummary":"<p>What is JWT?  Do I need Guardian and Ueberauth?  In this workshop we’ll look at JSON Web Tokens, Guardian, and Ueberauth to see how these technologies can be applied to our Phoenix applications.  We’ll finish up the workshop by implementing user authentication and permissions into a simple Phoenix app.</p>",
		"sessionType":"workshop",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},	
		
 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"09:30",
		"timeStop":"09:45",
		"room":"Conference Room 12",
		"sessionTitle":"Saturday Morning Intros & Welcome",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Intros",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},	

 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-15",
		"timeStart":"09:30",
		"timeStop":"18:00",
		"room":"Conference Room F",
		"sessionTitle":"Saturday Hacking & Contribution Sprints",
		"sessionSubTitle":"",
		"sessionSummary":"<p>We have space available where attendees can  gather to come and hack on their projects & make contributions. The Sat & Sun hacking/contribution session will be more formal/organized, than the informal session on Fri. Mentoring and onboarding will be available for new contributors and community members</p>",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},

	{
		"camp":"Elixir Camp NYC",
		"tech":"elixir",
		"date":"2016-07-16",
		"timeStart":"09:45",
		"timeStop":"10:30",
		"room":"Conference Room 12",
		"sessionTitle":"It's An Evolution! Simulating Life With OTP",
		"sessionSubTitle":"",
		"sessionSummary":"<p>What if we could simulate life? What if we could watch the evolution of a million processes at once, with the strong surviving and passing on their traits?</p><p>It all starts with a population seed. Each organism (represented by a spawned process) will live, eat, breed, and eventually die. These organisms will live out their simple lives with a handful of modeled behaviors. Whatever happens in one generation affects all the future ones.</p><p>These complex worlds can easily unfold with the help of Elixir/OTP. In this talk, we will seed a population and then simulate the evolutionary process, while OTP Supervisors, Servers, and Events are utilized to manage the concurrent life processes. Essentially, we'll replicate the changing world in an OTP Petri dish. ¡Viva La Evolución!</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Johnny",
				  "nameLast":"Winn",
				  "photo":"speaker-johnny-winn.jpg",
				  "linkedin":"https://www.linkedin.com/in/johnnywinn5",
				  "twitter":"https://twitter.com/johnny_rugger",
				  "github":"https://github.com/nurugger07",
				  "facebook":"",
				  "website":"https://soundcloud.com/elixirfountain",
				  "openSourceRole":"Elixir Fountain Host/Founder",
				  "organization":"ActiveProspect",
				  "role":"Sr Software Engineer",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Erlang Camp",
		"tech":"erlang",
		"date":"2016-07-16",
		"timeStart":"10:30",
		"timeStop":"11:15",
		"room":"Conference Room 12",
		"sessionTitle":"Building a high performance Erlang Kafka producer",
		"sessionSubTitle":"",
		"sessionSummary":"<p>There's already plenty of open-source Erlang Kafka producers in the wild. Unfortunately, none of the them are performant enough for our scale (AdGear). In this talk, we will present Flare, our Kafka producer which was built from the ground up with a focus on performance and correctness.</p><ul><li>Kafka introduction</li><li>Flare's architecture</li><li>Shackle framework</li><li>flare_client</li><li>Build tools (Make, Rebar3)</li><li>Testing tools (Dialyzer, Cover, EUnit, XRef)</li><li>Performance tools (Fprofx, Timing)</li><li>Best practices / tips / tricks</li></ul>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Louis-Philippe",
				  "nameLast":"Gauthier",
				  "photo":"speaker-louis-philippe-gauthier.jpg",
				  "linkedin":"https://www.linkedin.com/in/lpgauth",
				  "twitter":"https://twitter.com/lpgauth",
				  "github":"https://github.com/lpgauth",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"AdGear",
				  "role":"Director of Platform Engineering",
				  "bio":""
        }
      ]
    }  
	},



  // PHOENIX CAMP NYC
	{
		"camp":"Phoenix Camp NYC",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"11:15",
		"timeStop":"12:00",
		"room":"Conference Room 12",
		"sessionTitle":"From Rails to Phoenix",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Many Rails developers are jumping ship for Phoenix, learn why you and your organization should consider making the same move. Case studies and hard data will tell the story of how Phoenix is here to stay but also the best choice for new and existing applications.</p>",
		"sessionType":"Session",
		"sessionSlides":"<script async class=\"speakerdeck-embed\" data-id=\"6ba495d8923c4a89a6de7a5ea4443686\" data-ratio=\"1.33333333333333\" src=\"//speakerdeck.com/assets/embed.js\"></script>",
		"sessionVideo":"<iframe width=\"480\" height=\"315\" src=\"https://www.youtube.com/embed/530z-_yjdlU\" frameborder=\"0\" allowfullscreen></iframe>",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Brian",
				  "nameLast":"Cardarella",
				  "photo":"speaker-brian-cardarella.jpg",
				  "linkedin":"https://www.linkedin.com/in/briancardarella",
				  "twitter":"https://twitter.com/bcardarella",
				  "github":"https://github.com/bcardarella",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Dockyard",
				  "role":"Founder, CEO",
				  "bio":"Brian is the CEO of DockYard, an Elixir & Phoenix consultancy."
        }
      ]
    }  
	},

 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"12:00",
		"timeStop":"13:00",
		"room":"East Plaza Upstairs",
		"sessionTitle":"Lunch",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Lunch",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},	

	{
		"camp":"Elixir Camp NYC",
		"tech":"elixir",
		"date":"2016-07-16",
		"timeStart":"13:00",
		"timeStop":"14:00",
		"room":"Conference Room 12",
		"sessionTitle":"",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Keynote",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Dave",
				  "nameLast":"Thomas",
				  "photo":"speaker-dave-thomas.jpg",
				  "linkedin":"https://www.linkedin.com/in/dave-thomas-53aa1057",
				  "twitter":"https://twitter.com/pragdave",
				  "github":"https://github.com/pragdave",
				  "facebook":"",
				  "website":"https://pragdave.me/",
				  "openSourceRole":"",
				  "organization":"Pragmatic Programmers, LLC",
				  "role":"Publisher",
				  "bio":""
        }
      ]
    }  
	},	

	{
		"camp":"Phoenix Camp NYC",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"14:00",
		"timeStop":"14:50",
		"room":"Conference Room 12",
		"sessionTitle":"Phoenix Channels - a Distributed PubSub and Presence Platform",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Channels are a really exciting and powerful part of the Phoenix Framework. They allow us to easily add soft-realtime features to our applications. Channels are based on a simple idea - sending and receiving messages.</p><p>In this talk, we\'ll take a look under the hood and learn how to build incredibly powerful, event driven systems with Phoenix Channels. We\'ll also look at how Phoenix makes it easier to track presence in a distributed system.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Sonny",
				  "nameLast":"Scroggin",
				  "photo":"speaker-sonny-scroggin.jpg",
				  "linkedin":"https://www.linkedin.com/in/scrogson",
				  "twitter":"https://twitter.com/scrogson",
				  "github":"https://github.com/scrogson",
				  "facebook":"",
				  "website":"http://scrogg.in/",
				  "stackoverflow":"",
				  "openSourceRole":"Creator of Hedwig IM, and Core Team Member for Phoenix Framework & ueberauth",
				  "organization":"IBM",
				  "role":"Senior Software Engineer",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Phoenix Camp NYC",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"15:00",
		"timeStop":"15:50",
		"room":"Conference Room 12",
		"sessionTitle":"Elixir Retrospective: 18 months and counting",
		"sessionSubTitle":"",
		"sessionSummary":"<p>In this retrospective, we'll explore how Bleacher Report came to adopt Elixir and how Elixir development has matured over the last year and a half.  The talk will focus on the initial technical challenges of adopting a new and young language and framework and how they were overcome. Moreover, learn how Elixir and Phoenix have increased both developer productivity and stakeholder satisfaction and why Bleacher Report has fully committed to Elixir and Phoenix.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Ben",
				  "nameLast":"Marx",
				  "photo":"speaker-ben-marx.jpg",
				  "linkedin":"https://www.linkedin.com/in/bgmarx",
				  "twitter":"https://twitter.com/bgmarx",
				  "github":"https://github.com/bgmarx",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Bleacher Report",
				  "role":"Lead Engineer",
				  "bio":"<p>Ben Marx is a lead engineer at Bleacher Report where he helps to lead development from Ruby and Rails to Elixir and Phoenix.</p>"
        }
      ]
    }  
	},

 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"15:50",
		"timeStop":"16:10",
		"room":"1B Neck",
		"sessionTitle":"Coffee Break",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Break",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},	


	{
		"camp":"Phoenix Camp NYC",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"16:10",
		"timeStop":"17:00",
		"room":"Conference Room 12",
		"sessionTitle":"Umbrella Applications with Phoenix",
		"sessionSubTitle":"",
		"sessionSummary":"<p>The default project structure generated by Phoenix is great for getting started quickly. At some point though, your application may grow in a way which requires splitting it out into many parts.</p><p>In this talk we will look at taking an existing application that was built using the default Phoenix project structure and converting it to an umbrella application. We will try to do this in a way that is painless and keeps the project history in tact. We will investigate techniques that encourage isolation between applications and look at some ways to move large sections of code between siblings in the umbrella project.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Gary",
				  "nameLast":"Rennie",
				  "photo":"speaker-gary-rennie.jpg",
				  "linkedin":"",
				  "twitter":"https://twitter.com/thegazler",
				  "github":"https://github.com/Gazler",
				  "facebook":"",
				  "website":"http://blog.gazler.com/",
				  "stackoverflow":"http://stackoverflow.com/users/219743/Gazler",
				  "openSourceRole":"Phoenix Core Team Member",
				  "organization":"VoiceLayer",
				  "role":"Elixir Developer",
				  "bio":""
        }
      ]
    }  
	},


	{
		"camp":"Phoenix Camp NYC",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"17:10",
		"timeStop":"18:00",
		"room":"Conference Room 12",
		"sessionTitle":"Building Voice Enabled Applications in Phoenix",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Voice enabled applications are going mainstream and are changing how we interact with devices. Amazon lead the way with Amazon Alexa but Google has announced Google Home and there are rumors that Apple will follow suit. On this talk we will describe the main concepts behind voice enabled applications and how to build Alexa skills in Phoenix. We will build an application from scratch and interact with it using voice.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Gabi",
				  "nameLast":"Zuniga",
				  "photo":"speaker-gabi-zuniga.jpg",
				  "linkedin":"",
				  "twitter":"https://twitter.com/gabiz",
				  "github":"https://github.com/gabiz",
				  "facebook":"",
				  "website":"",
				  "stackoverflow":"http://stackoverflow.com/users/219743/Gazler",
				  "openSourceRole":"",
				  "organization":"VoiceLayer",
				  "role":"CTO",
				  "bio":"Gabi works as CTO at VoiceLayer. He has been developing and managing software development for over 15 years in a wide variety of fields, including multimedia, networking, web, and mobile (iOS and Android). Gabi is passionate about learning new technologies. He enjoys innovating from early startup stages and contributed to the success of Kealia, Pacific Broadband and Chromatic Research, which were acquired by Sun Microsystems, Juniper Networks and ATI, respectively. Previously Gabi led the development of the first software based video decoders at IBM's T.J. Watson Research Center."
        }
      ]
    }  
	},

 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"18:00",
		"timeStop":"21:00",
		"room":"East Plaza Upstairs",
		"sessionTitle":"Saturday Evening Social Event",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Social",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},	

 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-17",
		"timeStart":"09:30",
		"timeStop":"09:45",
		"room":"East Plaza Upstairs",
		"sessionTitle":"Sunday Morning Intros & Welcome",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Intros",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},

	{
		"camp":"Phoenix Camp NYC",
		"tech":"phoenix",
		"date":"2016-07-17",
		"timeStart":"09:45",
		"timeStop":"10:30",
		"room":"Conference Room 12",
		"sessionTitle":"Building & Deploying a Real Suite of OTP Apps",
		"sessionSubTitle":"",
		"sessionSummary":"<p>An examination of Phoenix, OTP, Umbrellas, and more in Elixir in Phoenix from 0 to deployment. Recently we had to build a large suite of services for a client and this examines the net wins on both the engineering and business sides of the equation; diving into architecting and building OTP apps, Phoenix, Ecto, and deploying it all into the real world.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Bobby",
				  "nameLast":"Grayson",
				  "photo":"speaker-bobby-grayson.jpg",
				  "linkedin":"https://www.linkedin.com/in/robert-grayson-92506872",
				  "twitter":"https://twitter.com/yburyug",
				  "github":"https://github.com/ybur-yug",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"CometaWorks",
				  "role":"Software Engineer - Backend, Systems, API, ETL",
				  "bio":"Bobby is a wannabe comic, nomad, and sailor living in San Juan, Puerto Rico building cool things in Elixir, Ruby, Phoenix, and Ember.js."
        }
      ]
    }  
	},

	{
		"camp":"Elixir Camp NYC",
		"tech":"elixir",
		"date":"2016-07-17",
		"timeStart":"10:30",
		"timeStop":"11:15",
		"room":"Conference Room 12",
		"sessionTitle":"Stately Machines: OTP 19, Elixir, and gen_statem",
		"sessionSubTitle":"",
		"sessionSummary":"<p>OTP 19 is a big step forward for both Erlang and Elixir developers. One exciting new feature is gen_statem, a state machine behavior. State machines are incredibly versatile, and can be used to implement many types of functionality, including network protocols, trading systems, and compilers.</p><p>Together, we'll take a guided tour of gen_statem, and see how easy it is to take advantage of its functionality to implement state machines in our apps. We'll also take a look at gen_state_machine, an Elixir package which implements an idiomatic Elixir wrapper for gen_statem.  Join me in transitioning to a new state of enlightenment about state machines in Elixir!</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Eric",
				  "nameLast":"Entin",
				  "photo":"speaker-eric-entin.jpg",
				  "linkedin":"https://www.linkedin.com/in/ericentin",
				  "twitter":"https://twitter.com/antipax",
				  "github":"https://github.com/antipax",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"FanDuel",
				  "role":"Principal Software Engineer",
				  "bio":"<p>Eric Entin (@antipax) leads a team at FanDuel that works on Elixir/Phoenix-based projects. A polyglot programmer who has worked professionally in many languages including Haskell, Ruby, and C++ for over 10 years, Elixir is by far his favorite. He has contributed to Elixir, Phoenix, Ecto, and Postgrex.</p><p>A lifelong NYC resident and proud graduate of the Bronx High School of Science, he now lives in Queens with his 2 cats and fiancé. Eric's interests include music production, backcountry camping, and smoked cheeses.</p>"
        }
      ]
    }  
	},

		
 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-17",
		"timeStart":"10:30",
		"timeStop":"12:30",
		"room":"Conference Room A",
		"sessionTitle":"Sun Morning Workshop - Rails to Elixir/Phoenix",
		"sessionSubTitle":"",
		"sessionSummary":"<p>A workshop by Ben Marx, from Bleacher Report, on migrating from Rails to Elixir/Phoenix.</p>",
		"sessionType":"Workshop",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Ben",
				  "nameLast":"Marx",
				  "photo":"speaker-ben-marx.jpg",
				  "linkedin":"https://www.linkedin.com/in/bgmarx",
				  "twitter":"https://twitter.com/bgmarx",
				  "github":"https://github.com/bgmarx",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Bleacher Report",
				  "role":"Lead Engineer",
				  "bio":"<p>Ben Marx is a lead engineer at Bleacher Report where he helps to lead development from Ruby and Rails to Elixir and Phoenix.</p>"
        }
      ]
    }  
	},

	{
		"camp":"Elixir Camp NYC",
		"tech":"elixir",
		"date":"2016-07-17",
		"timeStart":"11:15",
		"timeStop":"12:00",
		"room":"Conference Room 12",
		"sessionTitle":"Elixir School, answering the important questions: who, what, why, when and where.",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Sean",
				  "nameLast":"Callan",
				  "photo":"speaker-sean-callan.jpg",
				  "linkedin":"https://www.linkedin.com/in/seandcallan",
				  "twitter":"https://twitter.com/doomspork",
				  "github":"https://github.com/doomspork",
				  "facebook":"",
				  "website":"http://seancallan.com/",
				  "openSourceRole":"Creator of Elixir School",
				  "organization":"",
				  "role":"",
				  "bio":"<p></p>"
        }
      ]
    }  
	},

 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"12:00",
		"timeStop":"13:00",
		"room":"East Plaza Upstairs",
		"sessionTitle":"Lunch",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Lunch",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},	

	{
		"camp":"Elixir Camp NYC",
		"tech":"elixir",
		"date":"2016-07-17",
		"timeStart":"13:00",
		"timeStop":"13:50pm",
		"room":"Conference Room 12",
		"sessionTitle":"The Tension Between Expediency and Correctness",
		"sessionSubTitle":"",
		"sessionSummary":"<p>In this talk, we'll look at some examples of tradeoffs between expediency and correctness in programming, and the Pros and Cons on each side of the spectrum.  We'll also discuss what this has to do with Elixir, and how it plays into another language that I feel pairs very nicely with Elixir</p>.",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Josh",
				  "nameLast":"Adams",
				  "photo":"speaker-josh-adams.jpg",
				  "linkedin":"https://www.linkedin.com/in/knewter",
				  "twitter":"https://twitter.com/knewter",
				  "github":"https://github.com/knewter",
				  "facebook":"",
				  "website":"http://DailyDrip.com",
				  "openSourceRole":"",
				  "organization":"DailyDrip",
				  "role":"CTO & Co-Founder",
				  "bio":""
        }
      ]
    }  
	},	


 {
		"camp":"Phoenix Camp",
		"tech":"phoenix",
		"date":"2016-07-16",
		"timeStart":"14:00",
		"timeStop":"17:30",
		"room":"Conference Room 12",
		"sessionTitle":"Sunday Afternoon Hacking & Contribution Sprints",
		"sessionSubTitle":"",
		"sessionSummary":"<p>We have space available where attendees can  gather to come and hack on their projects & make contributions. The Sat & Sun hacking/contribution session will be more formal/organized, than the informal session on Fri. Mentoring and onboarding will be available for new contributors and community members</p>",
		"sessionType":"Contributing",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Bobby",
				  "nameLast":"Grayson",
				  "photo":"speaker-bobby-grayson.jpg",
				  "linkedin":"https://www.linkedin.com/in/robert-grayson-92506872",
				  "twitter":"https://twitter.com/yburyug",
				  "github":"https://github.com/ybur-yug",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"CometaWorks",
				  "role":"Software Engineer - Backend, Systems, API, ETL",
				  "bio":"Bobby is a wannabe comic, nomad, and sailor living in San Juan, Puerto Rico building cool things in Elixir, Ruby, Phoenix, and Ember.js."
        }
      ]
    }  
	},	
		
	
	


  // FRONTEND CAMP
 	{
		"camp":"Front End Camp",
		"tech":"frontend",
		"date":"2016-07-17",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Cycle.js: Get in the Loop",
		"sessionSubTitle":"",
		"sessionSummary":"<p>An introduction to the Cycle.js: a modern functional reactive framework. Cycle.js breaks with the existing Model-View-Controller approach, instead focusing on making the data flow inside your application as clear as possible. All external interactions: the browser, the server AI calls, the real time feeds are modeled as input and output reactive streams, making your own application code *pure* from side effects. Programming with Cycle is very different from using any other library for web development; attend this presentation to find out what makes Cycle.js so special.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Gleb",
				  "nameLast":"Bahmutov",
				  "photo":"speaker-gleb-bahmutov.jpg",
				  "linkedin":"https://www.linkedin.com/in/bahmutov",
				  "twitter":"https://twitter.com/bahmutov",
				  "github":"https://github.com/bahmutov",
				  "facebook":"",
				  "website":"https://glebbahmutov.com/",
				  "openSourceRole":"",
				  "organization":"Kensho Technologies",
				  "role":"Software Engineer",
				  "bio":""
        }
      ]
    }  
	},
	
	{
		"camp":"Front End Camp",
		"tech":"frontend",
		"date":"2016-07-17",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"NeuroJavaScript",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Come see a demonstration on how to interact with an open-source brain-computer interface via JavaScript. Alex has been working with the OpenBCI team in order to visualize brainwaves in the browser with Angular 2. Find out how your thoughts are captured and how to get involved in the NeuroTech community.<p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Alex",
				  "nameLast":"Castillo",
				  "photo":"speaker-alex-castillo.jpg",
				  "linkedin":"https://www.linkedin.com/in/alexcas",
				  "twitter":"https://twitter.com/castillo__io",
				  "github":"https://github.com/alexcastillo",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Grubhub",
				  "role":"Sr. Software Engineer",
				  "bio":"Alex Castillo is a Software Engineer at Grubhub and specializes in enterprise single-page applications. Alex is very passionate about the human brain and how we can use technology to understand it better. He has contributed to the open source community and focuses on Angular and NeuroTech. On his spare time, he likes experimenting with guitars and IoT."
        }
      ]
    }  
	},
	
	{
		"camp":"Front End Camp",
		"tech":"frontend",
		"date":"2016-07-17",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"The Frontend for 2016 (and not 2013)",
		"sessionSubTitle":"",
		"sessionSummary":"<p>2013 saw the term MEAN (MongoDB, Express.js, Angular.js, Node.js) enter the tech lexicon. This JavaScript-driven stack was sometimes sought as a means to abandon the more traditional LAMP stack. Even if LAMP and similar backends were retained, there was a general move toward decoupling the frontend from the backend. Things have changed quickly in 3 years. We'll discuss new technologies, as well as old, as well as common pitfalls encountered in frontend development, both past and present, and discuss solutions to overcome them.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Hyunho",
				  "nameLast":"Ee",
				  "photo":"speaker-hyunho-ee.jpg",
				  "linkedin":"",
				  "twitter":"",
				  "github":"https://github.com/e2tha-e",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Major League Baseball Advanced Media",
				  "role":"Software Engineer",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Front End Camp",
		"tech":"frontend",
		"date":"2016-07-17",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Angular 2 vs. React vs. Ember 2",
		"sessionSubTitle":"If frameworks were gladiators who would die first?",
		"sessionSummary":"<p>Have you ever banged your head against the wall trying to figure out which library or framework would be best for your situation and your team? Given the current climate of front-end JS frameworks you probably found that a few of the 293,113 npm packages suited your needs, but aren't sure which to choose because most things sound like they can all do the same thing. Maybe you sort them by the highest number of downloads to weed out the libraries with the least support, and then maybe you want to make sure anything left has great tooling and community-built packages that will give your small team a leg up when necessary.</p><p>You almost certainly landed in between the three largest frameworks/libraries in the JS community: Angular, Ember, and React. I, personally, cried myself to sleep with huge tears of regret after I realized I chose the wrong one and would have to spend months dealing with such a decision...Don\'t follow in my footsteps!</p><p>This talk is going to examine the three major players in the JavaScript community and try to elucidate their similarities, but more important their salient differences. We will talk about their technical differences while taking into accound the practical reality of web development. We'll also create pretend gladiator situations out of your developer woes and see which dies first. Because this is JSPARTA!</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Lerenzo",
				  "nameLast":"Malcom",
				  "photo":"speaker-lerenzo-malcom.jpg",
				  "linkedin":"https://www.linkedin.com/in/lerenzo-tolbert-malcom-87669612",
				  "twitter":"https://twitter.com/lerenzom",
				  "github":"https://github.com/lmalcom",
				  "facebook":"https://www.facebook.com/lerenzo.tolbertmalcom",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Recombine Genomics",
				  "role":"Software Engineer",
				  "bio":"Lerenzo is a software engineer at Recombine Genomics in New York City. With several years of experience working in full stack JavaScript, and more recent experience with Scala and Ruby on Rails, he has worked on problems in various areas both in front end and back end on applications ranging from interactive animation to data visualization."
        }
      ]
    }  
	},

	{
		"camp":"Front End Camp",
		"tech":"frontend",
		"date":"2016-07-17",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Code at the Center: Front-end Prototype for Great Experiences",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Wireframes and mockups often fail to demonstrate the actual experience of a product. More often than not, the final product doesn\'t look anything like the mockups that were approved. This happens because the final deliverables weren\'t tested and iterated on. Another reason is that static deliverables are hard for teammates who aren\'t designers to collaborate on. During this process the interaction design & animation is often neglected, making the experience very flat & static. So are there ways we can create designs quickly, collaborate with others and test out our application without disrupting the design process?</p><p>Enter the front-end prototype, a sample application in the browser where designers can create features based on user needs and validates them with the stakeholders/clients, developers and other designers. Speed is very important when prototyping and the tools we use need to be efficient enough to design in a short amount of time. The great thing about a front-end prototype is that you can iterate further once designs are concrete, making it a great UX deliverable to dev. Another benefit is that it\'s an artifact that others outside of the product team can see and interact with. By just creating a front-end prototype, it breaks down the silos and improves communication and collaboration.</p><p>Before I started prototyping, my deliverables were static mockups the dev often needed me to walk through to understand what's going on. We sometimes spent hours going each of the mockups which is inefficient and stopped us from actually building the designs. Sometimes close deadlines wouldn't allow for a design review session, which would put pressure on developers to make their own design decisions that might hurt the overall experience. But once I was able to produce front-end prototypes, it strengthen the dialog between me and the developers and also made it a great tool in selling solutions to clients. But the thing I found most helpful was being able to iterate quickly. Over time I've learned some front-end techniques that made it easier for me to design in code rather than Photoshop, Sketch and/or Illustrator. Being able to wireframe and design in browser made me a better designer and collaborator.</p><p>The audience will learn:<ul><li>Simple techniques to wireframe in the browser</li><li>The process of creating high fidelity prototype</li><li>How front-end prototypes can be use in production</li><li>How a prototype can improve collaboration & communication in a team</li></ul></p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Adekunle",
				  "nameLast":"Oduye",
				  "photo":"speaker-adekunle-oduye.jpg",
				  "linkedin":"https://www.linkedin.com/in/adekunleoduye",
				  "twitter":"https://twitter.com/adekunleoduye",
				  "github":"https://github.com/adekunleoduye",
				  "facebook":"",
				  "facebook":"",
				  "website":"http://www.adekunleoduye.com/",
				  "openSourceRole":"",
				  "organization":"NASDAQ OMX",
				  "role":"Product Designer",
				  "bio":"Adekunle Oduye is a Product Designer at Nasdaq OMX, where he’s part of a 30 person team designing web-based products that serve communications, public relations, and investor relations professionals. Adekunle main skill-set includes interaction/user interface design and front-end development….making him the ultimate weapon! Outside of Nasdaq, Adekunle is a co-organizer for SassConf and GothamSass Meetup, which serves front-end developers, CSS ninjas, UX mavens, and lovers for the best css-preprocessor. When he’s not creating cool software you can probably find him traveling the world or exploring the streets of New York City."
        }
      ]
    }  
	},

	{
		"camp":"Front End Camp",
		"tech":"frontend",
		"date":"2016-07-17",
		"timeStart":"08:55",
		"timeStop":"09:35",
		"sessionTitle":"One Hand Up & One Hand Down: Learn Through Teaching",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Wireframes and mockups often fail to demonstrate the actual experience of a product. More often than not, the final product doesn\'t look anything like the mockups that were approved. This happens because the final deliverables weren\'t tested and iterated on. Another reason is that static deliverables are hard for teammates who aren\'t designers to collaborate on. During this process the interaction design & animation is often neglected, making the experience very flat & static. So are there ways we can create designs quickly, collaborate with others and test out our application without disrupting the design process?</p><p>Enter the front-end prototype, a sample application in the browser where designers can create features based on user needs and validates them with the stakeholders/clients, developers and other designers. Speed is very important when prototyping and the tools we use need to be efficient enough to design in a short amount of time. The great thing about a front-end prototype is that you can iterate further once designs are concrete, making it a great UX deliverable to dev. Another benefit is that it\'s an artifact that others outside of the product team can see and interact with. By just creating a front-end prototype, it breaks down the silos and improves communication and collaboration.</p><p>Before I started prototyping, my deliverables were static mockups the dev often needed me to walk through to understand what's going on. We sometimes spent hours going each of the mockups which is inefficient and stopped us from actually building the designs. Sometimes close deadlines wouldn't allow for a design review session, which would put pressure on developers to make their own design decisions that might hurt the overall experience. But once I was able to produce front-end prototypes, it strengthen the dialog between me and the developers and also made it a great tool in selling solutions to clients. But the thing I found most helpful was being able to iterate quickly. Over time I've learned some front-end techniques that made it easier for me to design in code rather than Photoshop, Sketch and/or Illustrator. Being able to wireframe and design in browser made me a better designer and collaborator.</p><p>The audience will learn:<ul><li>Simple techniques to wireframe in the browser</li><li>The process of creating high fidelity prototype</li><li>How front-end prototypes can be use in production</li><li>How a prototype can improve collaboration & communication in a team</li></ul></p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jessica",
				  "nameLast":"Waite",
				  "photo":"speaker-jessica-waite.jpg",
				  "linkedin":"",
				  "twitter":"",
				  "github":"https://www.github.com/imjessw",
				  "facebook":"",
				  "facebook":"",
				  "website":"https://www.twitter.com/imjessw",
				  "openSourceRole":"",
				  "organization":"HelloDevs",
				  "role":"",
				  "bio":"<p>Technical Product Manager. Developer. Feminist. I work to empower women and minorities to get excited and involved in building tech.</p>"
        }
      ]
    }  
	},




  
  // GO CAMP
  // TBD  




  // MAKER CAMP
  // TBD
  
  
  
  
  
  // MAPS CAMP
  // TBA  
  // TBA  
  
  


  // METEOR CAMP NYC
  // TBA  
  // TBA  
  
  
  
  
  // NERVES CAMP NYC

  {
		"camp":"Nerves Camp",
		"tech":"nerves",
		"date":"2016-07-17",
		"timeStart":"09:30",
		"timeStop":"09:45",
		"room":"Conference Room E",
		"sessionTitle":"Nerves Camp Intros",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},
	{
		"camp":"Nerves Camp NYC",
		"tech":"nerves",
		"date":"2016-07-17",
		"timeStart":"10:30",
		"timeStop":"11:15",
		"room":"Conference Room E",
		"sessionTitle":"A Society of Robotic Minds",
		"sessionSubTitle":"",
		"sessionSummary":"<p>According to Marvin Minsky, our minds are societies of agents. These agents are simple, many and varied, and it's from their interactions that intelligent behavior emerges. What if we could endow autonomous robots each with a Society of Mind, and what if we could entangle these minds into a society of robots? Thanks to Nerves, Elixir runs comfortably on the EV3 brick, which makes it surprisingly easy to implement Minsky's concept using inexpensive Lego robots. We will discuss the concept of Society of Mind, our interpretation of it and its implementation for Lego robots. We will explore how agents are used to generate and orchestrate perceptions, motivation, intents and behaviors. We will demonstrate how robots can form peer-to-peer networks over which they share perceptions for better (collaboration) or for worse (group panic).</p>",
		"sessionType":"Session",
		"sessionSlides":"<script async class=\"speakerdeck-embed\" data-id=\"6ba495d8923c4a89a6de7a5ea4443686\" data-ratio=\"1.33333333333333\" src=\"http://speakerdeck.com/assets/embed.js\"></script>",
		"sessionVideo":"<iframe width=\"480\" height=\"315\" src=\"https://www.youtube.com/embed/530z-_yjdlU\" frameborder=\"0\" allowfullscreen></iframe>",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Jean-Francois",
				  "nameLast":"Cloutier",
				  "photo":"speaker-jean-francois-cloutier.jpg",
				  "linkedin":"https://www.linkedin.com/in/jfcloutier",
				  "twitter":"https://twitter.com/jfcloutier",
				  "github":"https://github.com/jfcloutier",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Starlit Software LLC,",
				  "role":"Chief Architect",
				  "bio":"An avid programmer since the mid-80s, I have worked with Prolog, Lisp, Smalltalk, Java, and for the last two years, Erlang and Elixir.  I am Chief Architect at Starlit Software. I live in beautiful Portland, Maine where I do all my work in Elixir, Phoenix and Elm (somebody pinch me!).  In my spare time, I train obsessively in Aikido, organize the local Erlang/Elixir and Elm meetups, and dabble in robotics with the Lego Robotics sets I bought \"for my son\".  I recently presented at <a href=\"https://www.youtube.com/watch?v=N_PXas9LtzU\" target=\"_blank\">ElixirDaze 2016</a> and was a guest on the <a href=\"https://soundcloud.com/elixirfountain/elixir-fountain-jean-francois-cloutier-2016-04-11\" target=\"_blank\">Elixir Fountain podcast</a>."
        }
      ]
    }  
	},

	{
		"camp":"Nerves Camp NYC",
		"tech":"nerves",
		"date":"2016-07-17",
		"timeStart":"11:15",
		"timeStop":"12:00",
		"room":"Conference Room E",
		"sessionTitle":"Getting into Embedded Elixir",
		"sessionSubTitle":"",
		"sessionSummary":"<p>With its roots in Erlang, the Elixir programming language brings some interesting features to embedded systems development. Getting started, though, it's not obvious what aspects of a project are best suited to Elixir and which parts belong in a lower level language. Beyond that, Elixir provides several ways to integrate with the operating system and low level code and the tradeoffs aren't obvious. This talk aims to clarify the Elixir runtime environment from an embedded systems point of view. Additionally, benchmarks of various hardware integration strategies are discussed.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Frank",
				  "nameLast":"Hunleth",
				  "photo":"speaker-frank-hunleth.jpg",
				  "linkedin":"https://www.linkedin.com/in/fhunleth",
				  "twitter":"https://twitter.com/fhunleth",
				  "github":"https://github.com/fhunleth",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"Nerves Project Core Team Member",
				  "organization":"Troodon Software LLC",
				  "role":"Principal",
				  "bio":"Frank designs embedded software for products in many industries including medical, consumer, telecommunications and defense. Frustrated with repeatedly implementing parts of OTP, he started the Nerves project to make it easier to use Erlang and Elixir in embedded projects. He is an active contributor to open-source. Some of his other projects are Elixir/ALE, nerves_uart, fwup, and erlinit."
        }
      ]
    }  
	},

	{
		"camp":"Nerves Camp NYC",
		"tech":"nerves",
		"date":"2016-07-17",
		"timeStart":"09:45",
		"timeStop":"10:30",
		"room":"Conference Room E",
		"sessionTitle":"Building and Deploying Nerves",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Nerves lets you craft and deploy bulletproof embedded software in the Elixir programming language. This talk will feature an introduction to why Elixir is a great fit for producing embedded devices and how to get started using the Nerves build tools and frameworks. Join us for a live demos of setting up your host environment, deploying code to Raspberry Pi / BeagleBone black, connecting to networks and more.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Justin",
				  "nameLast":"Schneck",
				  "photo":"speaker-justin-schneck.jpg",
				  "linkedin":"https://www.linkedin.com/in/justinschneck",
				  "twitter":"https://twitter.com/mobileoverlord",
				  "github":"https://github.com/mobileoverlord",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"Nerves Project Core Team Member",
				  "organization":"Metasphere",
				  "role":"Founder",
				  "bio":"Over the years, Justin has worked on a plethora of embedded projects from iPhone motorcycle starters to advanced brewing and distilling equipment. Recently, Justin founded Metasphere, an embedded software company primarily focused on building Nerves."
        }
      ]
    }  
	},

  {
		"camp":"Nerves Camp",
		"tech":"nerves",
		"date":"2016-07-17",
		"timeStart":"12:00",
		"timeStop":"13:00",
		"room":"Conference Room E",
		"sessionTitle":"Lunch",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},

  {
		"camp":"Nerves Camp",
		"tech":"nerves",
		"date":"2016-07-17",
		"timeStart":"13:00",
		"timeStop":"End of Day",
		"room":"Conference Room E",
		"sessionTitle":"Nerves Hardware Hacking",
		"sessionSubTitle":"",
		"sessionSummary":"Come check how to get up and running with Nerves on your hardware or on a selection of ours.",
		"sessionType":"workshop",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},


  // NEXT GEN CAMP






  // NODE CAMP

	{
		"camp":"Node Camp",
		"tech":"node",
		"date":"2016-07-16",
		"timeStart":"11:00",
		"timeStop":"12:00",
		"sessionTitle":"From Java to Node, at eBay",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>At eBay the homepage receives 70+ million hits a day. Historically, we served all that traffic through Java, but are now migrating to Node. In this talk we\'ll discuss what we\'re migrating, how we\'re doing it and why.</p><p>We\'ll cover why Node.js is so alluring, in addition to some of the specific packages that we think of as killer apps. This talk should be interesting for anyone who enjoys discussions of web technology capable of operating at massive scale.</p><p><em>Abstract</em></p><p>Node is one of the world’s fastest growing and most exciting platforms. It now leads Github in number of contributions, and its popularity and feature list only continue to grow.</p><p>When we realized it was time to update the Homepage at eBay to something more modern, Node was a perfect fit. We knew the new Homepage would need to be faster, require reusable components, and show things like recommendation feeds, in addition to trending and popular items.</p><p>Node brings a giant ecosystem that is inherently open source with npm; which, increases collaboration and code sharing. We\'re able to learn and develop more quickly, including server startup in seconds vs minutes. Node is incredibly fast with handling a large number requests, and uses less resources than Java making it more easily scaled horizontally. It’s 2016 and this move to a more modern platform helps not only with all the reasons above, but also with developer satisfaction and not to mention, recruiting.</p> <p>To make this move, we are utilizing Marko and Marko Widgets for our server side and client side rendering, as well as Lasso for managing and bundling our assets. We are also making the jump to ES6, natively on the backend and transpiled for the client side.</p> <p>This talk will include specific issues that were solved and how, the tooling and technologies used, and what\'s next. This talk is aimed at anyone who has built/maintained a webapp, with focuses in Java/Node.</p><p><ul><li>Javascript</li><li>Node/li><li>Express</li><li>Marko</li><li>Lasso</li><li>ES6</li><li>Java</li><li>Spring</li></ul></p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Scott",
				  "nameLast":"Davis",
				  "photo":"speaker-scott-davis.jpg",
				  "linkedin":"https://www.linkedin.com/in/scttdavs",
				  "twitter":"https://twitter.com/scttdavs",
				  "github":"https://github.com/scttdavs",
				  "facebook":"",
				  "website":"http://sco.ttdavis.com/",
				  "openSourceRole":"",
				  "organization":"eBay",
				  "role":"Lead Front End Engineer",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Node Camp",
		"tech":"node",
		"date":"2016-07-16",
		"timeStart":"13:30",
		"timeStop":"14:30",
		"sessionTitle":"Using StrongLoop to build an API application",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Adding User Management, an API layer, and custom data models to a Node.js application with StrongLoop.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Remko",
				  "nameLast":"de Knikker",
				  "photo":"speaker-remko-de-knikker.jpg",
				  "linkedin":"https://www.linkedin.com/in/remkohdev",
				  "twitter":"https://twitter.com/remkohdev",
				  "github":"https://github.com/remkohdev",
				  "facebook":"",
				  "website":"http://www.remkohde.com/c/dev/",
				  "openSourceRole":"",
				  "organization":"IBM",
				  "role":"Sr. Software Engineer & Cloud Evangelist",
				  "bio":"I have been a full-stack developer for 15+ years at Yale Medical School, Microsoft, Reed Elsevier, GTNexus, HP. Currently I am a developer evangelist for IBM Cloud."
        }
      ]
    }  
	},

	{
		"camp":"Node Camp",
		"tech":"node",
		"date":"2016-07-16",
		"timeStart":"10:00",
		"timeStop":"11:00",
		"sessionTitle":"The Node Version of Pattern Lab ",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Pattern Lab has established itself as one of the best-known tools for bringing designs to development. Nonetheless, its own description of itself is enigmatic at best:</p><p><em>\"Pattern Lab is a collection of tools to help you create atomic design systems.\"</em></p><p>This presentation will aim to bring some meaning to what Pattern Lab and Atomic Design actually are and what they are useful for. We will also explore advanced Pattern Lab features for power users. Most of the presentation will apply to both the PHP and Node versions of Pattern Lab. However, we will also look at why the Node version is useful, even if it mostly replicates the PHP version.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Hyunho",
				  "nameLast":"Ee",
				  "photo":"speaker-hyunho-ee.jpg",
				  "linkedin":"",
				  "twitter":"",
				  "github":"https://github.com/e2tha-e",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Major League Baseball Advanced Media",
				  "role":"Software Engineer",
				  "bio":"I have been a full-stack developer for 15+ years at Yale Medical School, Microsoft, Reed Elsevier, GTNexus, HP. Currently I am a developer evangelist for IBM Cloud."
        }
      ]
    }  
	},

	
	{ 
		"camp":"Node Camp",
		"tech":"node",
		"date":"2016-07-16",
		"timeStart":"14:30",
		"timeStop":"15:30",
		"sessionTitle":" Introduction to GraphQL on Node",
		"sessionSubTitle":"",		
		"sessionSummary":"<p>Introduction to GraphQL and implementing a GraphQL server using Node.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Daiyan",
				  "nameLast":"Alamgir",
				  "photo":"default.png",
				  "twitter":"https://twitter.com/dalamgir",
				  "github":"https://github.com/alamgird",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Morgan Stanley",
				  "role":"",
				  "bio":""
        }
      ]
    }  
	},


	{ 
		"camp":"Node Camp",
		"tech":"node",
		"date":"2016-07-16",
		"timeStart":"14:30",
		"timeStop":"15:30",
		"sessionTitle":"Lunch",
		"sessionSubTitle":"",		
		"sessionSummary":"",
		"sessionType":"Logistics",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":""
        }
      ]
    }  
	},




  // PY GOTHAM
  // TBA
  // TBA





  // RAILS CAMP
	
	{
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"10:00",
		"timeStop":"11:00",
		"sessionTitle":"Local Ruby on Rails Development using Vagrant VMs",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Developing locally is one of the best things that can happen to you. Not only does it let you dispense with upload/download times, you can create as many projects as you want, work with real domains locally and generally speed up everything you do.</p><p>Vagrant is a programmatic way create and configure virtual machines that mimic an application’s production environment. I will show you how to have a working local version of Ruby on Rails with vagrant. Which you can edit files locally and they will automatically be pushed to your VM through shared folders with no delay.</p><p>When you\'re done working for the day, simply type $vagrant halt to suspend your VM and type in $vagrant up to resume it. The procedure was used successfully to deploy virtual machines to a group students at a workshop to teach women how to code their first database driven website using Ruby on Rails in New York in May 2016. Where I was an teaching a class of advanced students.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
          "nameFirst":"Anthony",
				  "nameLast":"Alvarez",
				  "photo":"speaker-anthony-alvarez.jpg",
				  "linkedin":"https://www.linkedin.com/in/aalvarez",
				  "twitter":"https://twitter.com/anthonyealvarez",
				  "github":"https://github.com/anthonyalvarez",
				  "facebook":"",
				  "website":"http://anthonyalvarez.us/",
				  "openSourceRole":"",
				  "organization":"Pucho Web Solutions",
				  "role":"Web Developer",
				  "bio":""
        }
      ]
    }  
	},

  {
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"15:00",
		"timeStop":"16:00",
		"sessionTitle":"Faster than JSON",
		"sessionSubTitle":"",
		"sessionSummary":"<p>MessagePack, Protocol Buffers, and how they beat JSON in terms of size and speed.</p>",
		"sessionType":"Session",
		"sessionSlides":"https://docs.google.com/presentation/d/1sYojmwuCF1DzzBSr3xcM6jVQht4y-kgHDxMoNB7cvx8/edit?usp=sharing",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
          "nameFirst":"Paul",
				  "nameLast":"Fielek",
				  "photo":"speaker-paul-fielek.jpg",
				  "linkedin":"https://www.linkedin.com/in/paulfielek",
				  "twitter":"https://twitter.com/polskais1",
				  "github":"https://github.com/polskais1",
				  "facebook":"",
				  "website":"http://paulfielek.com/",
				  "openSourceRole":"",
				  "organization":"Spotible",
				  "role":"Web Developer",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"14:00",
		"timeStop":"15:00",
		"sessionTitle":"Faster than Fast",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Eliminating latency and creating a crazy fast website while keeping architecture simple.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
          "nameFirst":"Ben",
				  "nameLast":"Halpern",
				  "photo":"speaker-ben-halpern.jpg",
				  "linkedin":"https://www.linkedin.com/in/ben-halpern-3a1aa731",
				  "twitter":"https://twitter.com/benhalpern",
				  "github":"https://github.com/benhalpern",
				  "facebook":"",
				  "website":"http://benhalpern.com/",
				  "openSourceRole":"",
				  "organization":"The Practical Dev & ArgoTutors",
				  "role":"Creator & CTO",
				  "bio":"I'm the creator of The Practical Dev (@thepracticaldev on Twitter) and the CTO of ArgoTutors.com."
        }
      ]
    }  
	},

	{
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"12:00",
		"timeStop":"13:00",
		"sessionTitle":"Angular on Rails",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Trials and tribulations of converting a Rails app to an Angular frontend.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
          "nameFirst":"Ryan",
				  "nameLast":"Johnson",
				  "photo":"speaker-ryan-johnson.jpg",
				  "linkedin":"https://www.linkedin.com/in/ryan-johnson-321629ab",
				  "twitter":"https://twitter.com/empireofryan",
				  "github":"https://github.com/empireofryan",
				  "facebook":"",
				  "website":"http://empireofryan.github.io/",
				  "openSourceRole":"",
				  "organization":"Airspace Technologies",
				  "role":"Ruby on Rails / Angular Developer",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"11:00",
		"timeStop":"12:00",
		"sessionTitle":"Avoiding n+1 Errors",
		"sessionSubTitle":"",
		"sessionSummary":"<p>N+1 errors might be the most common mistake that leads to slow apps. It\'s when the app makes database calls over and over again--sometimes many, many more times than it needs to--in order to get information about a list of items. Beginner Rails developers are especially prone to structuring their database calls without this issue in mind, and don\'t necessarily pay attention to their logs where the issue would be visible. This talk will look at some examples and identify some available solutions.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
          "nameFirst":"Esther",
				  "nameLast":"Leytush",
				  "photo":"speaker-esther-leytush.jpg",
				  "linkedin":"https://www.linkedin.com/in/estherleytush",
				  "twitter":"https://twitter.com/mindpl_ace",
				  "github":"https://github.com/mindplace",
				  "facebook":"",
				  "website":"http://estherleytush.com",
				  "openSourceRole":"",
				  "organization":"Seeking Opportunities",
				  "role":"Fullstack Rails Developer",
				  "bio":"Fullstack web developer with a Rails love-affair seeks fulltime opportunities in NYC. Please send job prospects or commiserations."
        }
      ]
    }  
	},
	
  {
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"13:00",
		"timeStop":"14:00",
		"sessionTitle":"Lunch",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},

  {
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"08:00",
		"timeStop":"09:30",
		"sessionTitle":"Check-In & Breakfast",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},
	
  {
		"camp":"Rails Camp",
		"tech":"rails",
		"date":"2016-07-10",
		"timeStart":"09:30",
		"timeStop":"10:00",
		"sessionTitle":"Intros & Socializing",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"logistical",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"",
				  "nameLast":"",
				  "photo":"",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"",
				  "bio":"",
        }
      ]
    }  
	},

  // REACT CAMP

	{
		"camp":"React Camp",
		"tech":"react",
		"date":"2016-07-16",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Comprehensive Navigation in React Native",
		"sessionSubTitle":"",
		"sessionSummary":"<p>There are multiple available options for navigation in React Native, we will discuss and demo the current and future platform apis for navigation, as well as a couple of community projects.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Nader",
				  "nameLast":"Dabit",
				  "photo":"speaker-nader-dabit.jpg",
				  "linkedin":"https://www.linkedin.com/in/naderdabit",
				  "twitter":"https://twitter.com/dabit3",
				  "github":"https://github.com/dabit3",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"School Status",
				  "role":"Software Developer",
				  "bio":"Nader Dabit has been developing using React Native at the company which he is employed, SchoolStatus, since the framework's release, and has also worked with React Native on multiple freelance and consulting projects over the past year. Nader has also been active in the React Native community, mainly on StackOverflow, Medium, and with the React Native Radio podcast on Devchat.tv. He founded and organizes two local tech meetups and is the cofounder of Mississippi's first coding school, Code South Labs. He has been creating curriculum as well as teaching JavaScript and JavaScript frameworks / technologies (Node, Angular, React, and React Native). Nader is also currently authoring React Native in Action for Manning Publications."
        }
      ]
    }  
	},
	
	{
		"camp":"React Camp",
		"tech":"react",
		"date":"2016-07-16",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Redux with React Native",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Introduction to Redux with React Native with an open source code example</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Dan",
				  "nameLast":"Jensen",
				  "photo":"speaker-dan-jensen.jpg",
				  "linkedin":"https://www.linkedin.com/in/danjensen",
				  "twitter":"",
				  "github":"https://github.com/urbanvikingr",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"",
				  "role":"Mentor and Freelancer in React, Node.js, Ruby on Rails and Agile Leadership",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"React Camp",
		"tech":"react",
		"date":"2016-07-16",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"React-Fire: Getting Full-Stack reactivity with Firebase",
		"sessionSubTitle":"",
		"sessionSummary":"",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Nitya",
				  "nameLast":"Narasimhan",
				  "photo":"speaker-nitya-narasimhan.jpg",
				  "linkedin":"https://www.linkedin.com/in/nityan",
				  "twitter":"https://twitter.com/nitya",
				  "github":"https://github.com/nitya",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Digital HV",
				  "role":"Owner",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"React Camp",
		"tech":"react",
		"date":"2016-07-16",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Why is React 'functional?'",
		"sessionSubTitle":"",
		"sessionSummary":"<p>We all know that React works, but being functional implies so much more than the typical dictionary definition would imply. Using React  as an example, I’d like to walk you through some tenets of functional programming. As one of the few JavaScript view creation libraries that is completely Universal/Isomorphic, React gives us the opportunity to build applications that can run on the server and client very easily. Typically though, we are discussing the 'virtual DOM' and performance when talking about React. A win much bigger than the words ‘virtual DOM’ exists in React, and through my examples, you’ll see what makes reasoning about functional systems such a treat.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"John K.",
				  "nameLast":" Paul",
				  "photo":"speaker-john-paul.jpg",
				  "linkedin":"https://www.linkedin.com/in/johnkpaul",
				  "twitter":"https://twitter.com/johnkpaul",
				  "github":"https://github.com/johnkpaul",
				  "facebook":"",
				  "website":"http://www.johnkpaul.com/",
				  "openSourceRole":"",
				  "organization":"InRythm",
				  "role":"CTO",
				  "bio":""
        }
      ]
    }  
	},

	{
		"camp":"React Camp",
		"tech":"react",
		"date":"2016-07-16",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Building React Native Apps with Deco",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Showing off Deco, the IDE built for React Native</p>",
		"sessionType":"Lightning Talk",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Timotius",
				  "nameLast":"Sitorus",
				  "photo":"speaker-timotius-sitorus.jpg",
				  "linkedin":"https://www.linkedin.com/in/timotius",
				  "twitter":"https://twitter.com/timsitorus",
				  "github":"https://github.com/timotius02",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"NYHackathons.com",
				  "role":"Designer, Developer, and Hackathon Hacker.",
				  "bio":""
        }
      ]
    }  
	},






  // SWIFT CAMP
  // TBA





  // SEARCH CAMP

	{
		"camp":"Search Camp",
		"tech":"search",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Improving Search: A/B Test & See",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Making the right decisions for your products is tough let alone search changes. They can be tough, complex decisions that affect all of your users or they can be small, simple changes that only a handful of users that will notice. But you ask yourself, \"What if our users don't like this change? What if this change results in loss of revenue?\". Well, luckily your answer to handling this is A/B testing to see before rolling out a full-fledged platform change.<p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Adrian",
				  "nameLast":"Cruz",
				  "photo":"speaker-adrian-cruz.jpg",
				  "linkedin":"https://www.linkedin.com/in/adriancruz",
				  "twitter":"https://twitter.com/drincruz",
				  "github":"https://github.com/drincruz",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Teachers Pay Teachers",
				  "role":"Software Engineer",
				  "bio":"A software engineer who has worked on web applications and data pipelines. Currently a software engineer on the search & discovery team at Teachers Pay Teachers; we're responsible for improving information retrieval by looking at data, making changes by testing them, looking at more data, and rolling out changes. Currently improving search utilizing Sphinx Search, but utilizing a lot of in-house and third-part tools to make data-driven decisions."
        }
      ]
    }  
	},
	
	{
		"camp":"Search Camp",
		"tech":"search",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"It's Just Search",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Think *inside* the box. Inside the *search* box, that is.</p><p>The \"best\"* search results incorporate many more factors than (just) textual matching and relevancy. Search experience owners manage query context _rules_, signals automatically feed back machine learned factors, users implicit and explicit behaviors filter and weight future interactions. Synergy emerges with several cooperating (just) searches.</p><p>This talk will showcase and detail several (just) search examples including rules, typeahead/suggest, signals, and location awareness, bringing them all together into a cohesive search experience.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Erik",
				  "nameLast":"Hatcher",
				  "photo":"speaker-erik-hatcher.jpg",
				  "linkedin":"https://www.linkedin.com/in/erik-hatcher-94820",
				  "twitter":"https://twitter.com/erikhatcher",
				  "github":"https://github.com/erikhatcher",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Lucidworks",
				  "role":"Sr. Solutions Architect",
				  "bio":"Erik Hatcher co-authored \"Lucene in Action\" asnd \"Java Development with Ant\". He has been an active member of the Lucene community - a leading Lucene and Solr committer, member of the Lucene Project Management Committee, member of the Apache Software Foundation as well as a frequent invited speaker at various industry events. Erik co-founded and works as a Senior Solutions Architect at Lucidworks."
        }
      ]
    }  
	},



	{
		"camp":"Search Camp",
		"tech":"search",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Building a Vibrant Search Ecosystem at Bloomberg",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Search is a core technology that allows Bloomberg to deliver financial news and information quickly and reliably to our clients. The Search Infrastructure team has created a high performance, stable and scalable search ecosystem to support a large, complex and diverse set of search applications.</p><p>Providing search as a service to the thousands of developers in this demanding environment required us to take a holistic approach. In this talk we\'ll discuss both the organizational and technical challenges we\'ve encountered and the approach we\'ve taken to solve them. We\'ll dive into the details of our platform; from the way we engage with our tenants, interact with the Solr community, to the infrastructure and tools we use to manage, monitor and scale our platform.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Steven",
				  "nameLast":"Bower",
				  "photo":"speaker-steven-bower.jpg",
				  "linkedin":"",
				  "twitter":"",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Bloomberg",
				  "role":"",
				  "bio":"<p>Steven has worked for 16 years in the search industry. First as part of the R&D/Services teams at FAST Search & Transfer and then as a principal engineer at Attivio, Inc. He has participated/lead the delivery of hundreds of search applications and now leads the Search Infrastructure team at Bloomberg LP, providing a search as a service platform for 200+ applications.</p>"
        },
			  {
 				  "nameFirst":"Ken",
				  "nameLast":"Laporte",
				  "photo":"speaker-ken-laporte.jpg",
				  "linkedin":"",
				  "twitter":"h",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Bloomberg",
				  "role":"",
				  "bio":"<p>Ken is a senior software engineer in the Search Infrastructure department at Bloomberg where he works with client teams to leverage Solr to solve business problems. Ken has been active in the search domain for 7 years and has worked on a wide variety of  search problems, including e-commerce, geospatial, analytical & free text. He currently resides in Brooklyn with his wife & son where he can be found constantly working on his house or developing code.</p>"
        }

      ]
    }  
	},


	{
		"camp":"Search Camp",
		"tech":"search",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Searching Encrypted Data on HDFS with Elasticsearch and Solr",
		"sessionSubTitle":"",
		"sessionSummary":"<p>The paradigm of trust in computing changes with new methods to search encrypted data with standard search platforms and Hadoop.  Sensitive information can be computed in untrusted environments wherein the hosting provider has zero knowledge.  Learn how enterprises from insurance companies to healthcare providers are finding a secure path to scale in the public cloud for storage and analytics.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Ivan",
				  "nameLast":"Panushev",
				  "photo":"speaker-ivan-panushev.jpg",
				  "linkedin":"https://www.linkedin.com/in/panushev",
				  "twitter":"https://twitter.com/inpher_io",
				  "github":"",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Inpher, Inc.",
				  "role":"Co-founder and Chief Product Officer",
				  "bio":""
        }
      ]
    }  
	},
	
	{
		"camp":"Search Camp",
		"tech":"search",
		"date":"2016-07-10",
		"timeStart":"",
		"timeStop":"",
		"sessionTitle":"Using OpenNLP with Solr to improve search relevance and to extract named entities",
		"sessionSubTitle":"",
		"sessionSummary":"<p>Apache OpenNLP can be used with Apache Solr to produce lemmas (words’ base forms), and to extract named entities. I’ll demonstrate how to configure these capabilities in Solr for two languages: English and Spanish.  I’ll compare search relevance using lemmatization versus Solr’s out-of-the-box stemming capabilities in the two languages, and how to facet on extracted named entities.</p>",
		"sessionType":"Session",
		"sessionSlides":"",
		"sessionVideo":"",
    "speakers": {
      "speaker": [
			  {
 				  "nameFirst":"Steve",
				  "nameLast":"Rowe",
				  "photo":"speaker-steve-rowe.jpg",
				  "linkedin":"https://www.linkedin.com/in/steven-rowe-b9201316",
				  "twitter":"https://twitter.com/steven_a_rowe",
				  "github":"https://github.com/sarowe",
				  "facebook":"",
				  "website":"",
				  "openSourceRole":"",
				  "organization":"Lucidworks",
				  "role":"Sr. Software Engineer",
				  "bio":"Steve is a Lucene/Solr committer and works on Lucene and Solr at Lucidworks. Previously he worked at the Center for Natural Language Processing at Syracuse University."
        }
      ]
    }  
	},






  // WEB PERF CAMP
  // TBD





  // WORD CAMP NYC
  // TBA
  // TBA




])

