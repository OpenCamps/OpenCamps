  function getOrganizers(organizers) {
    var outputOrganizers = "";
    var i;
    for(i = 0; i<organizers.length; i++) {
      outputOrganizers +=
				'<div class="organizer">'+
				   '<div class="inner">'+
				     '<div class="image">'+
						   '<img src="images/team/' + organizers[i].photo + '" class="icon"/>'+
						 '</div>'+
						 '<div class="details">'+
							 '<div class="name-first">' + organizers[i].nameFirst + '</div>'+
							 '<div class="name-last">' + organizers[i].nameLast + '</div>'+
	//						 '<div class="organization">' + organizers[i].organization + '</div>'+
	//						 '<div class="role">' + organizers[i].role + '</div>'+
							 '<div class="links">'+
								 '<div class="link linkedin"><a href="' + organizers[i].linkedin + '" target="_blank" class="linkedin"><i class="fa fa-linkedin"></i></a></div>'+    
								 '<div class="link twitter"><a href="' + organizers[i].twitter + '" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a></div>'+    
								 '<div class="link github"><a href="' + organizers[i].github + '" target="_blank" class="twitter"><i class="fa fa-github"></i></a></div>'+    
								 '<div class="link website"><a href="' + organizers[i].website + '" target="_blank" class="website"><i class="fa fa-globe"></i></a></div>'+
	//							 '<div class="link"><a href="' + conferences[i].github + '" target="_blank" class="github"><i class="fa fa-github"></i></a></div>'+
	//							 '<div class="link"><a href="mailto:' + conferences[i].email + '" target="_blank" class="email"><i class="fa fa-envelope"></i></a></div>'+
							 '</div>'+
  					'</div>'+
					'</div>'+
        '</div>';
    }
    document.getElementById("team").innerHTML = outputOrganizers;
  }