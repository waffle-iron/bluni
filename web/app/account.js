
/* global Bl */

Bl.account = {};

Bl.account.render = function()
{
    $("#body-page").empty();  
    
    Bl.account.renderAccount(Bl.user.getUsername());
    
    $('#acn-btn-back').click(function()
    {
        Bl.menu.removeSelect();
        Bl.main.render();
    });
        
};

Bl.account.renderAccount = (function(user)  //prende informazioni 
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var param = {};
    param['user'] = user;
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/userBooks.php",
        data: {param: JSON.stringify(param)},
        async:false,
        dataType: "json",

        success: function(userConf)
        {
            if($.isEmptyObject(userConf))
            {
                alert("[ERRORE] dati utente esterno nulli");
            }
            else
            {
                Bl.account.appendHtml(userConf);
            }
        },
        error: function()
        {
            alert("ERRORE connessione");
            return false;
        }
    });
    
});

Bl.account.appendHtml = function (user)
{
    var myAccount = false;
    if(user[0].username === Bl.user.getUsername())
    {
        myAccount = true;
    }
    
    if(myAccount)
    {
        $('#body-page').append('<h3>Il mio profilo:</h3>');
    }
    else
    {
        $('#body-page').append('<h3>Profilo di '+user[0].username+':</h3>');
    }
        
    $("#body-page").append('<p><span class="acn-bold-text">Username: </span>'+user[0].username+'</p>');
    $("#body-page").append('<p><span class="acn-bold-text">Facoltà: </span>'+user[0].faculty+'</p>');
    $("#body-page").append('<p><span class="acn-bold-text">Email: </span>'+user[0].email+'</p>');
    $("#body-page").append('<p><span class="acn-bold-text">Numero di telefono: </span>'+user[0].phone_number+'</p>');
    $('#body-page').append('<hr>');
    
    if(myAccount)
    {
        $('#body-page').append('<h3>I miei annunci</h3>');
    }
    else
    {
        $('#body-page').append('<h3>I suoi annunci</h3>');
    }
    
    
    jQuery.each(user,function(key,val)
    {
        var data = BlApp.convertData(val.date);
        
        $("#body-page").append(BlApp.element.html(val.username, val.faculty, 
                                val.title, val.description, data, val.price));
    });
    
    $("#body-page").append('<a id="acn-btn-back" data-inline="true" class="btn btn-default">Indietro</a>');
    
};
