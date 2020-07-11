$(document).ready(function(){

    $("#menus li a").click(function(e){

        // alert("clicked")
        let target = $(this).attr("href");
        // alert(target);

        $("html,body").animate(
            {
                scrollTop:$(target).offset().top - 65,
            },
            1000
        );

        e.preventDefault();

    });
});