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
	

	$.each( originalCast.actors, function( i, actor ) {
		//create li
		var li = $( "<li>" )
		//create wrapper
		var wrapper = $( "<div>" )
		wrapper.addClass('actorWrapper')

	
  		//find matching replacement/ new actor and add the new img to the wrapper
  		$.each( newCast.actors, function( i, newActor ) {
	  		console.log(i, newActor)
	  		//remove if found!!!
	  		wrapper.append("<img class='bottom' src='" + newActor.filePath + "'/>");
		});

		//add the original img to the wrapper
  		wrapper.append("<img src='" + actor.filePath + "'/>");
  		
  		wrapper.click(function() {
  			$( this ).children(":nth-child(2)").toggleClass("top");
		});
  		// append the wrapper to the cast div
  		li.append(wrapper)
  		$('#cast').append(li)
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

	            //remove hyphens
	            var name = filename.replace(/-/g, ' ').replace(fileExtension, '')
	            var imgUrl =  dir2 + "/"  + filename

	            //create an object called actor        
	            var actor = new Actor(name , imgUrl)
	            newCast.actors.push(actor)
	        });
	    }
	})

	).done(function(  ) {
		// Everything OK
		 console.log('ITesready' , originalCast.actors)
		 renderCastImages();
    

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

 


