var Bl = {};
Bl.configuration = {};

Bl.configuration.start=(function()
{
    if(Bl.configuration.getCookie("bluni-cookie"))
    {
        Bl.vendi.render();
    }
    else
    {
        Bl.login.render();
    }
});

Bl.configuration.setCookie = (function(nameCookie, data)
{
    jQuery.cookie(nameCookie, data);
});

Bl.configuration.getCookie = (function(nameCookie)
{
    return jQuery.cookie(nameCookie);
});