
Bl.account = {};

Bl.account.render = function()
{
    $("#body-page").empty();
    
    Bl.account.appendHtml();
    
    $('#acn-btn-back').click(function()
    {
        Bl.menu.removeSelect();
        Bl.main.render();
    });
        
};

Bl.account.appendHtml = function ()
{
    var user = Bl.user.getConfig();
    
    $('#body-page').append('<h3>Il mio profilo:</h3>');
    $("#body-page").append('<p><span class="acn-bold-text">Username: </span>'+user.username+'</p>');
    $("#body-page").append('<p><span class="acn-bold-text">Facoltà: </span>'+user.faculty+'</p>');
    $("#body-page").append('<p><span class="acn-bold-text">Email: </span>'+user.email+'</p>');
    $("#body-page").append('<p><span class="acn-bold-text">Numero di telefono: </span>'+user.phone_number+'</p>');
    $('#body-page').append('<hr>');
    
    $('#body-page').append('<h3>I miei annunci</h3>');
    
    $("#body-page").append('<a id="acn-btn-back" data-inline="true" class="btn btn-default">Indietro</a>');
    
};

Bl.account.renderExt = function(Username)
{
    $("#body-page").empty();
    Bl.account.ext(Username);
    Bl.account.appendHtmlExt();
    
    $('#acnExt-btn-back').click(function()
    {
        Bl.menu.removeSelect();
        Bl.main.render();
    });
};

Bl.account.appendHtmlExt = function ()
{
    var user = Bl.user.getConfig();
    
    $('#body-page').append('<h3>Il profilo di '+user.username+':</h3>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Facoltà: </span>'+user.faculty+'</p>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Email: </span>'+user.email+'</p>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Numero di telefono: </span>'+user.phone_number+'</p>');
    $('#body-page').append('<hr>');
    
    $('#body-page').append('<h3>I suoi annunci</h3>');
    
    $("#body-page").append('<a id="acnExt-btn-back" data-inline="true" class="btn btn-default">Indietro</a>');
    
};

Bl.account.ext=(function(user)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var param = {};
    param['user'] = user;
    
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/accountExt.php",
        data: {param: JSON.stringify(param)},
        dataType: "json",

        success: function(msg)
        {
            if(msg !== "0")
            {
                Bl.configuration.set(JSON.stringify(msg));
                Bl.configuration.load();
                Bl.account.renderExt();
            }	
            else
            {
                alert("msg: credenziali non corrette");
            }
        },
        error: function()
        {
            alert("ERRORE connessione");
            return false;
        }
    });
    
});