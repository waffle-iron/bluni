
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