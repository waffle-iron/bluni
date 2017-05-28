
/* global Bl, BlApp */

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
    
    $('.el-content').click(function()
    {
        var refBook = {};
        refBook['user'] = Bl.user.getUsername();
        refBook['title'] = $(this).find('.el-title').text();
        refBook['date'] = $(this).find('.el-date').attr('val');
        
        BlApp.popupDialog("Vuoi eliminare il libro di "+refBook['title']+" dagli annunci?");
        $('#bl-popup').popup('open');
        
        $('#btn-confirm-popup').click(function()
        {
            Bl.account.deleteBook(refBook);
            $('#bl-popup').popup('close');
        });
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
            Bl.account.appendHtml(userConf);
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
    if(user.length === undefined)
    {
        user[0] = Bl.user.getConfig();
    }
    
    var myAccount = false;
    if(Bl.configuration.isMyAccount(user[0].username))
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
    
    if(user.length !== undefined)
    {
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
            $("#body-page").append(BlApp.element.html(val.username, val.faculty, 
                                    val.title, val.description, val.date, val.price));
        });
    }
    else
    {
        $('#body-page').append('<p style="text-align:center; color:grey;">Nessun annuncio</p>');
    }
    
    $("#body-page").append('<a id="acn-btn-back" data-inline="true" class="btn btn-default">Indietro</a>');
    
};

Bl.account.deleteBook = function(refBook)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    $.ajax({
        type: "POST",
        url: root+"/src/main/connect/deleteBook.php",
        data: {param: JSON.stringify(refBook)},
        async:false,
        dataType: "text",

        success: function(msg)
        {
            if(msg === "1")
            {;
                Bl.account.render();
            }
            else
            {
                $('#bl-popup').html(msg);
                $('#bl-popup').popup('open');
            }
        },
        error: function()
        {
            $('#bl-popup').html("[ERRORE] connessione");
            $('#bl-popup').popup('open');
            return false;
        }
    });
};