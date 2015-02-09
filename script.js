$(document).ready(function(){
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
			
		});
	});
});


