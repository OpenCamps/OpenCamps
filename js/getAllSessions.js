
function getSessions(sessions) {



   var sessions = sessions.filter(sessionsFilter);

    var outputSessions = "<h2 class=\"speakers\">Speakers</h2>";

    var i;
    for(i = 0; i<sessions.length; i++) {
      outputSessions +=
				'<div class="session">'+
					'<div class="session-inner">'+ 
						'<div class="camp">' + sessions[i].camp + '</div>'+
						'<div class="slot">' + sessions[i].timeStart + ' to ' + sessions[i].timeStop + '</div>'+
						'<div class="icon"> <img src="images/sessions/icons' + sessions[i].icon + '" class="icon"/></div>'+
						'<div class="title"><h4>' + sessions[i].sessionTitle + '</h4></div>'+
						'<div class="summary"><p class="summary">' + sessions[i].sessionSummary + '</p></div>'+
						'<div class="speakers">'+
							'<div class="speaker">'+
								'<div class="speaker-inner">'+
									'<div class="photo"><img src="http://opencamps.org/images/speakers/' + sessions[i].speakers.speaker[0].photo + '"></div>'+
									'<div class="details">'+
										'<div class="name"><h5 class="speaker-name">' + sessions[i].speakers.speaker[0].nameFirst + ' ' + sessions[i].speakers.speaker[0].nameLast + '</h5></div>'+
				    				'<div class="organization">' + sessions[i].speakers.speaker[0].organization + '</div>'+
						    		'<div class="role">' + sessions[i].speakers.speaker[0].role + '</div>'+
								    '<div class="links">'+
											'<div class="link linkedin"><a href="' + sessions[i].speakers.speaker[0].linkedin  + '" target="_blank" class="linkedin"><i class="fa fa-linkedin"></i></a></div>'+    
		    							'<div class="link twitter"><a href="' + sessions[i].speakers.speaker[0].twitter + '" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a></div>'+    
				    				  '<div class="link github"><a href="' + sessions[i].speakers.speaker[0].github + '" target="_blank" class="twitter"><i class="fa fa-github"></i></a></div>'+    
				    				  '<div class="link website"><a href="' + sessions[i].speakers.speaker[0].website + '" target="_blank" class="website"><i class="fa fa-globe"></i></a></div>'+
								    '</div>'+
        					'</div>'+
      					'</div>'+
      				'</div>'+
					  '</div>'+
						'<div class="slides">' + sessions[i].sessionSlides + '</div>'+
						'<div class="video">'+
  						'<h5 class="video">Video</h5>'+
  						'<div class="embed">' + sessions[i].sessionVideo + '</div>'+
						'</div>'+
					'</div>'+
        '</div>';
    }
    document.getElementById("sessions-inner").innerHTML = outputSessions;
  }
  
  
  
  
  
  