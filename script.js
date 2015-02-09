$(document).ready(function(){
<<<<<<< HEAD
	var picture1 = ["go away","2","3","4","5","6","7","8","go Away","21","32","43","54","65"]
	var pictures = ["fly.jpg","boyfriend.jpg","nolike.jpg","chicken.jpg","ignore.jpg","Dariameh.bmp","doubleknot.jpg","cow.jpg", "peter.jpg", "sad Tina.jpg", "sexybeast.jpg", "shoe.jpg", "smile.jpg", "twopears.jpg" ];
	var count=0;

	$("img").each(function(){
		$(this).click(function(){
			if ( count < 10){
			pictures.sort(function (a,b) {return Math.random() - 0.5;});
			var imgtoshow = pictures[0];
			$(this).attr("src",imgtoshow);
			if imgtoshow ==picture[1]
				alert("image1")
				else confirm("hello");			
			count++;
			}
			
=======
	
	var pictures = ["fly.jpg","boyfriend.jpg","nolike.jpg","chicken.jpg","ignore.jpg","Dariameh.bmp","doubleknot.jpg","cow.jpg", "peter.jpg", "sad Tina.jpg", "sexybeast.jpg", "shoe.jpg", "smile.jpg", "twopears.jpg" ];
	var count=0;
    var pictureid = ["Your fly is down.","She has a boyfriend.","No one likes you.","You will have a chicken dinner, winner.","Ignore the last fortune.","Meh","There's a double knot in your shoe laces...tie your shoelaces","You will become a cow with no legs...ground beef","There is a hot shower in your future...we can only hope.","They're just not that into you.","You are a sexy beast.","Your shoe is untied.","Smile! :)","You will gain admiration from your pear."];
    
	$("img").each(function(){
		$(this).click(function(){
			if ( count < 3){
                console.log("woeijiwf");
                var randomint = Math.floor(Math.random() * 14)
                var cardImg = pictures[randomint];
                var confirmMessage = pictureid[randomint];
                $(this).attr("src",cardImg);
                confirm(confirmMessage);
                count++;
                
                
                /*
			pictures.sort(function (a,b) {return Math.random() - 0.5;});
			var imgtoshow = pictures[0];
			$(this).attr("src",imgtoshow);
			count++;
                
            if(imgtoshow=="fly.jpg"){
                confirm("Fly");
			}
            */
                
            }
>>>>>>> 70c3dc0cfe31d5a89dfc377498840fde3b17f9a4
		});
	});
});

<<<<<<< HEAD

=======
>>>>>>> 70c3dc0cfe31d5a89dfc377498840fde3b17f9a4
