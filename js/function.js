$(function(){
    //TODO Mettre au propre ces fonctions

    // TimeLine A Pen created at CodePen.io. You can find this one at http://codepen.io/savalazic/pen/QKwERN.


    $('.btn-header').click( function(){
        $('.ui.sidebar.inverted.menu.vertical').sidebar('toggle');
    });


    var last_slideUp = null;
    // Staff
    $('#staff-1').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-1-card").slideDown("slow");
    });
    $('#staff-2').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-2-card").slideDown("slow");
    });
    $('#staff-3').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-3-card").slideDown("slow");
    });
    $('#staff-4').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-4-card").slideDown("slow");
    });
    $('#staff-5').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-5-card").slideDown("slow");
    });
    $('#staff-6').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-6-card").slideDown("slow");
    });
    $('#staff-7').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-7-card").slideDown("slow");
    });
    $('#staff-8').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-8-card").slideDown("slow");
    });
    $('#staff-9').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-9-card").slideDown("slow");
    });
    $('#staff-10').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-10-card").slideDown("slow");
    });
    $('#staff-11').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-11-card").slideDown("slow");
    });
    $('#staff-12').click(function(){
        $(".staff-card").slideUp("slow");
        if(last_slideUp != null){
            last_slideUp.slideDown("slow");
        }
        $(this).slideUp("slow");
        last_slideUp = $(this);
        $("#staff-12-card").slideDown("slow");
    });

    // End Staff

    $(document).ready(function() {
    
        setTimeout(function(){
            $('body').addClass('loaded');
        });

    });
    
});