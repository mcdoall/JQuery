
$(document).ready(function(){
	
	var v = false;	
	
	$("button#vegOn").click(function(){
 		
		if(v==false){
			
			v=true;
		
		$(".fish").parent().parent().detach();
		$(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");
			
		}
    });
	
	$("button#restoreMe").click(function(){
 		
		if(v==true){
			
			v=false;
			
			
		}
		
    });
	
	$("button#test").click(function(){
 		
		alert('1234');
		
    });
	
	
});