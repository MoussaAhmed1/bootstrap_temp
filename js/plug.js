$(document).ready(function() {
    
  /*  
    $("button").click(function(){
       
        //$("h1").hide();
        $("h1").css("color","gray");
        $(this).css("background-color","green");
        $(this).css("color","#fff");
        $(this).css("padding","10px 30px")
        
        
    })
    
    $("button").mouseenter(function(){
        
        $("h1").css("text-transform","uppercase");
    })



*/

//start gear  toggle

    $(".gear-check").click(function()
     {  
        $(".color-option").toggle();
     });

//end gear  toggle
    
    
//start theam  change
   $(".color-option ul li").click(function(){
       
    $("link[href*='theme']").attr("href" , $(this).attr("data-value"));
       
      
   
   }); 
    
   
//end theam  change
 
});   

$(window).on("load", function () {
     
    $("#loading-overlay").fadeOut();
     
});

 /*$(window).load(function()
{
    
   $(".loading-overlay").fadeOut(2000);

    
});*/
