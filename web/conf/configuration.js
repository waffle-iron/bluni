var Bl = {};
Bl.configuration = {};

Bl.configuration.isRegistered = false;

//Carica i parametri utente, rendere header e menu
Bl.configuration.load=(function()
{
    if(Bl.configuration.getCookie("bluni-cookie"))
    {
        $("#header-user").html(Bl.configuration.getCookie("bluni-cookie"));
        Bl.menu.render();
        Bl.configuration.isRegistered = true;
    }
});

Bl.configuration.logout = (function()
{
    Bl.configuration.removeCookie("bluni-cookie");
    Bl.configuration.isRegistered = false;
    
    $('#header-user').empty();
    $('#bl-menu').empty();

    Bl.main.render();
});

Bl.configuration.setCookie = (function(nameCookie, data)
{
    jQuery.cookie(nameCookie, data);
});

Bl.configuration.getCookie = (function(nameCookie)
{
    return jQuery.cookie(nameCookie);
});

Bl.configuration.removeCookie = (function(nameCookie)
{
    return jQuery.removeCookie(nameCookie);
});