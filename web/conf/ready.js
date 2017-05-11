
//$(window.location).attr('href', '#page');
$(document).ready(function()
{
    //Bl.main.render();
    
    /* TEST */
    $("#header-user").append(Bl.configuration.getCookie("bluni-cookie"));
    Bl.menu.render();
    Bl.vendi.render();
});
