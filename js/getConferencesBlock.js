  function getConferences(conferences) {
    var outputConferences = "";
    var i;
    for(i = 0; i<conferences.length; i++) {
      outputConferences +=
				'<div class="conference ' + conferences[i].camp + '">'+
				   '<div class="inner ' + conferences[i].camp + '">'+
				     '<div class="icon">'+
						   '<div class="icon-inner"><a href="' + conferences[i].website + '" target="_blank" class="website"><img src="http://opencamps.org/images/icons/' + conferences[i].icon + '" class="icon"/></a></div>'+
						 '</div>'+
						 '<div class="name"><a href="' + conferences[i].website + '" target="_blank" class="website">' + conferences[i].name + '</a></div>'+
						 '<div class="date">' + conferences[i].dates + '</div>'+
						 '<div class="description">' + conferences[i].description + '</div>'+
					'</div>'+
				'</div>'+
        '</div>';
    }
    document.getElementById("conferences").innerHTML = outputConferences;
  }