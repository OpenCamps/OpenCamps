  function getConferences(conferences) {
    var outputConferences = "";
    var i;
    for(i = 0; i<conferences.length; i++) {
      outputConferences +=
				'<div class="conference ' + conferences[i].camp + '">'+
				   '<div class="inner ' + conferences[i].camp + '">'+
				     '<div class="icon">'+
						   '<div class="icon-inner"><a href="' + conferences[i].website + '" target="_blank" class="website"><img src="images/icons/' + conferences[i].icon + '" class="icon"/></a></div>'+
						 '</div>'+
						 '<div class="name"><a href="' + conferences[i].website + '" target="_blank" class="website">' + conferences[i].name + '</a></div>'+
						 '<div class="date">' + conferences[i].dates + '</div>'+
						 '<div class="description">' + conferences[i].description + '</div>'+
						 '<div class="links">'+
							 '<div class="link website"><a href="' + conferences[i].website + '" target="_blank" class="website"><i class="fa fa-globe"></i></a></div>'+
							 '<div class="link twitter"><a href="' + conferences[i].twitter + '" target="_blank" class="twitter"><i class="fa fa-twitter"></i></a></div>'+    
							 '<div class="link facebook"><a href="' + conferences[i].facebook + '" target="_blank" class="facebook"><i class="fa fa-facebook"></i></a></div>'+
//							 '<div class="link"><a href="' + conferences[i].github + '" target="_blank" class="github"><i class="fa fa-github"></i></a></div>'+
//							 '<div class="link"><a href="mailto:' + conferences[i].email + '" target="_blank" class="email"><i class="fa fa-envelope"></i></a></div>'+
						 '</div>'+
					'</div>'+
				'</div>'+
        '</div>';
    }
    document.getElementById("conferences").innerHTML = outputConferences;
  }