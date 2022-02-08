
$(document).ready(function(){
    

    // $(".menu2").children().click(function(){
    //     console.log("click")
    //     $(this).toggleClass("menuitems")
    //     $(this).toggleClass("menuitems2")
    //     console.log("click")
    //     $("#container2").slideToggle(1000, "swing");
    //     $("#container2").fadeToggle();
    //     $("#container2").animate({
    //       opacity: '0.2',
    //       height: '60%',
    //       width: '60%',},2000,function(){
    //         alert("The paragraph is now hidden");
    //     });
    //     })


    // $("#menuitem1").click(function(){
    //     $("#container1").html("<p>hello this is an html<br>paragraph element</p>");
    // })
 
    // $("#menuitem2").click(function(){
    //     $("#container1").append("this is append");
    // })

    

    // easeOutBounce

    // $(document).ready(function(){
    //     $("curtain").hover(function(){
    //     $(this).css("background-color", "yellow");
    //     }, function(){
    //     $(this).css("background-color", "pink");
    //     });
    // });


    // $(document).ready(function(){
    //     var boxHeight = $(".curtain").height();
    //     $(".curtain").mouseenter(function(){
    //         $(this).animate({
    //             height: "100"
    //         });
    //     }).mouseleave(function(){
    //         $(this).animate({
    //             height: boxHeight
    //         });
    //     });
    // });


 

        // $("#curtain").mouseover(function(){
        //     console.log("Hovering")
        //   $(this).animate({
        //       height: "20%",
        //     opacity: .5},
        //       200)
        // });
        // $("#curtain").mouseleave(function(){
        //   $(this).animate({height:10},200).attr('id', 'curtain');
        // });
  

//Window 2 animation:

    $("#window2-1").click(function(){
        console.log("click")
        $(this).animate({
            opacity: 0});
    });

    $("#window2-1").mouseleave(function(){
        console.log("hovering")
        $(this).animate({
            opacity: 100});
    });
    



});


//  $("#container2").fadeToggle();