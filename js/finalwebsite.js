(function() {
  	let dataTags = [
		"Animators, Illustrators",
		"Photographers, Filmmakers",
		"Photographers, Filmmakers",
		"Designers",
		"Photographers, Filmmakers",
		"Designers, Illustrators",
		"Photographers",
		"Designers",
		"Animators"
		];
	let dataAlt = [
		"Rabbit",
		"Sea",
		"Deer",
		"New York Street Map",
		"Trumpet Player",
		"Typographic Study",
		"Bicycle Japan",
		"Aqua Logo",
		"Ghost"
		];
	var cache = [];
	var tagged = {};
	let images = new Array(9);

	for(let i=1;i<10;i++)
	{ 
		images[i] = new Image(); 
		images[i].src = 'img/p' + i + '.jpg'; 
		images[i].alt = dataAlt[i-1];
		images[i].data = dataTags[i-1];
		document.body.appendChild(images[i]);
		cache.push({                         
      		element: images[i],                      
      		text: images[i].alt.trim().toLowerCase()
    	});          
    	if (images[i].data) {                                  
      		images[i].data.split(',').forEach(function(tagName) {
        		if (tagged[tagName] == null) {            
          			tagged[tagName] = [];                   
        		}
        		tagged[tagName].push(images[i]);              
      		});
    	}
	}
	
	function filter() {                     
    var query = this.value.trim().toLowerCase(); 
    cache.forEach(function(img) {         
      	var index = 0;                   

      	if (query) {                        
        	index = img.text.indexOf(query); 
      	}

      	img.element.style.display = index === -1 ? 'none' : '';  
    	});
  	}
  	let search = document.getElementById('filter-search');
  	search.addEventListener("input", filter);
  	search.addEventListener("keyup", filter);           
}());