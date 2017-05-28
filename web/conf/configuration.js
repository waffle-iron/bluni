var Bl = {};
Bl.configuration = {};

Bl.configuration.isRegistered = false;
Bl.nameCookie = "bluni-cookie";

//Carica i parametri utente, rendere header e menu
Bl.configuration.load=(function()
{
    var userConfig = Bl.configuration.get(Bl.nameCookie);
    if(userConfig)
    {
        Bl.user.set(JSON.parse(userConfig));
        
        $("#header-user").html(Bl.user.getUsername());
        Bl.menu.render();
        Bl.configuration.isRegistered = true;
    }
    else
    {
        $("#header-user").html("Blunì");
    }
});

Bl.configuration.logout = (function()
{
    Bl.configuration.removeCookie("bluni-cookie");
    Bl.configuration.isRegistered = false;
    Bl.user.unset();
    
    $("#header-user").html("Blunì");
    $('#bl-menu').empty();
    
    Bl.main.render();
});

Bl.configuration.set = (function(config)
{
    jQuery.cookie(Bl.nameCookie, config);
});

Bl.configuration.get = (function()
{
    return jQuery.cookie(Bl.nameCookie);
});

Bl.configuration.removeCookie = (function(nameCookie)
{
    return jQuery.removeCookie(nameCookie);
});

Bl.configuration.create = function(id, user, email, phone, faculty)
{
  var conf = {};
  conf['id_user'] = id;
  conf['username'] = user;
  conf['email'] = email;
  conf['phone_number'] = phone;
  conf['faculty'] = faculty;
  
  return conf;
};

Bl.configuration.isMyAccount = function(username)
{
    if(Bl.configuration.isRegistered && username === Bl.user.getUsername())
    {
        return true;
    }
    else
    {
        return false;
    }
};