var fileextension = ".png";
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


// get all the images that ends with .png
var getOriginalCast = function(dir) {
	 $.ajax({
	    url: dir,
	    success: function (data) {	   	
	        //list all .png file names in the page
	        $(data).find("a:contains(" + fileextension + ")").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            filename = filename.replace("harry-potter", "").replace(/\//g, '')   //http://stackoverflow.com/a/4566789   

	            //create an object called actor        
	            var actor = new Actor(filename.replace(fileextension, '') , dir + filename)
	            console.log(actor.name, filename)
	            originalCast.actors.push(actor)
	            console.log(originalCast)
	            console.log('uuug' , originalCast.actors)
	        });
	    }
	});

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
	        $(data).find("a:contains(" + fileextension + ")").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            filename = filename.replace("harry-potter", "").replace(/\//g, '')   //http://stackoverflow.com/a/4566789   

	            //create an object called actor        
	            var actor = new Actor(filename.replace(fileextension, '') , dir1 + filename)
	            console.log(actor.name, filename)
	            originalCast.actors.push(actor)
	            console.log(originalCast)
	            console.log('uuug' , originalCast.actors)
	        });
	    }
	}),
		
	 // Get the new cast
	   $.ajax({
	    url: dir2,
	    success: function (data) {	   	
	        //list all .png file names in the page
	        $(data).find("a:contains(" + fileextension + ")").each(function () {
	            var filename = this.href.replace(window.location.host, "").replace("http://", "");
	            filename = filename.replace("harry-potter", "").replace(/\//g, '')   //http://stackoverflow.com/a/4566789   

	            //create an object called actor        
	            var actor = new Actor(filename.replace(fileextension, '') , dir2 + filename)
	            console.log(actor.name, filename)
	            newCast.actors.push(actor)
	            console.log(originalCast)
	            console.log('uuug' , newCast.actors)
	        });
	    }
	})

	).done(function(  ) {
		 console.log('ITesready' , originalCast.actors)
    // Everything OK

}).fail(function() {

    // One of the sources is not available

});
};

/*
	.then(function() {

	  // All is ready now, so...

	  // Add all the images to the page
	  console.log('ITesready' , originalCast.actors)
	  //renderCastImages()

	});

} 
*/
	//var str = "How are you doing today?";
	//var res = str.split(" ");


//need to call renderCastImages after sucess ajax

	//var str = "How are you doing today?";
	//var res = str.split(" ");


// call the function
getAllCast();
//getNewCast();


//store all images in an object? 

 


