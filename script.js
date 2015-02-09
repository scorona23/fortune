$(document).ready(function(){
	
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
		});
	});
});

