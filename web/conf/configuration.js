var Bl = {};
Bl.configuration = {};

Bl.configuration.start=(function()
{
    if(Bl.configuration.getCookie("bluni-cookie"))
    {
        Bl.menu.render();
        Bl.vendi.render();
    }
    else
    {
        Bl.login.render();
    }
});

Bl.configuration.logout = (function()
{
    Bl.configuration.removeCookie("bluni-cookie");
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