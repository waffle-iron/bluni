
//$(window.location).attr('href', '#page');
$(document).ready(function(){

    //Controllo se c'è il cookie
    if(jQuery.cookie("bluni-cookie"))
    {
            //Bl.configuration.start();
    }
    else
    {
            //ritorno a pagina di login
            Bl.login.render();
    }
});
