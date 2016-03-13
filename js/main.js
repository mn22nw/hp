var fileExtension = ".png";
var originalCast = {
	actors: []
};

var newCast = {
	actors: []
};

var Actor = function(name, filePath) {
	this.name = name;
	this.filePath = filePath;
}

var renderCastImages = function() {
	console.log('aaag' , originalCast.actors)
	$.each( originalCast.actors, function( i, val ) {
		console.log('IIIIIIITG')
  		console.log(i, val)
	});	
	//$("body").append("<img src='" + dir + filename + "'>");
}

// GETS ALL THE CAST
function getAllCast() {

	var dir1 = 'img/original-cast';	
	var dir2 = 'img/new-cast';

	$.when(
	  
	  // Get the original cast
	  $.ajax({
	    url: dir1,
	    success: function (data) {	   	
	        //list all .png file names in the page
	        $(data).find("a:contains(" + fileExtension + ")").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            filename = filename.replace("harry-potter", "").replace(/\//g, '')   //http://stackoverflow.com/a/4566789   
	            //remove hyphens
	            var name = filename.replace(/-/g, ' ').replace(fileExtension, '')
	            var imgUrl =  dir1 + "/"  + filename
	            //create an object called actor        
	            var actor = new Actor(name , imgUrl )
	            originalCast.actors.push(actor)

	        });
	    }
	}),
		
	 // Get the new cast
	   $.ajax({
	    url: dir2,
	    success: function (data) {	   	
	        //list all .png file names in the page
	        $(data).find("a:contains(" + fileExtension + ")").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            filename = filename.replace("harry-potter", "").replace(/\//g, '')   //http://stackoverflow.com/a/4566789   

	            //create an object called actor        
	            var actor = new Actor(filename.replace(fileExtension, '') , dir2 + filename)
	            console.log(actor.name, filename)
	            newCast.actors.push(actor)
	            console.log('uuug' , newCast.actors)
	        });
	    }
	})

	).done(function(  ) {
		 console.log('ITesready' , originalCast.actors)
		 renderCastImages();
    // Everything OK

}).fail(function() {

    // One of the sources is not available
    console.log('One of the sources is not available');
});
};


	//var str = "How are you doing today?";
	//var res = str.split(" ");


// call the function
getAllCast();
//getNewCast();


//store all images in an object? 

 


