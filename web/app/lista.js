/* global BlApp, Bl */

Bl.lista = {};

Bl.lista.render = (function(list, titolo)
{   
    Bl.lista.length = list.length;
    //var description = list[0].description; per prendere un valore dal json array
    Bl.lista.books = list;
    $('#body-page').empty();

    Bl.lista.appendHtml(list, titolo);
   
    $('.el-content').click(function()
    {
        var username = $(this).find('.username').text();
        Bl.lista.renderExternalAccount(username);
    });

    $('#btn-back-lista').click(function()
    {
        Bl.cerca.render();
    });
    
    $('#btn-backplus-lista').click(function()
    {
        Bl.cerca.render();
    });

    $("#body-page").trigger("create");
});

Bl.lista.appendHtml = (function(list, titolo)
{
    $("#body-page").append('<h1 id="title-page-lista">Lista</h1>');
    $("#body-page").append('<h3 id="title-page-lista">Trova il tuo libro:</h3>');
    
    if(Bl.lista.length>0)
    {
        $("#body-page").append('<h6 id="result-page-lista">Per "'+titolo+'" sono stati trovati '+Bl.lista.length+' libri:</h6><br>');
    }
    else
        $("#body-page").append('<h6 id="noresult-page-lista">Non sono stati trovati risultati per '+titolo+'.</h6><br>');
    
    jQuery.each(list,function(key,val)
    {
        var data = Bl.lista.convertData(val.date);
        
        $("#body-page").append(BlApp.element.html(val.username, val.faculty, 
                                val.title, val.description, data, val.price));
    });
    
    if(list.length<2)
    {
        $("#body-page").append('<a id="btn-back-lista" class="btn btn-default">Indietro</a>');
    }
    else
        $("#body-page").append('<a id="btn-backplus-lista" class="btn btn-default">Indietro</a>');
});

Bl.lista.appendHtmlAccEx = function (user)
{
    $("#body-page").empty();
    
    $('#body-page').append('<h3>Il profilo di '+user[0].username+':</h3>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Facoltà: </span>'+user[0].faculty+'</p>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Email: </span>'+user[0].email+'</p>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Numero di telefono: </span>'+user[0].phone_number+'</p>');
    $('#body-page').append('<hr>');
    
    $('#body-page').append('<h3>I suoi annunci</h3>');
    
    jQuery.each(user,function(key,val)
    {
        var data = Bl.lista.convertData(val.date);
        
        $("#body-page").append(BlApp.element.html(val.username, val.faculty, 
                                val.title, val.description, data, val.price));
    });
    //jQuery.each(accList,function(key,val)
    //{
      //  $("#body-page").append(BlApp.element.html(val.username, val.title, val.description, val.date, val.price));
        
    //});
    
    $("#body-page").append('<a id="acnExt-btn-back"  class="btn btn-default">Indietro</a>');
    

    $('#acnExt-btn-back').click(function()
    {
        Bl.lista.render(Bl.lista.books);
    });
};



Bl.lista.renderExternalAccount = (function(user)  //prende informazioni 
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var param = {};
    param['user'] = user;
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/userBooks.php",
        data: {param: JSON.stringify(param)},
        dataType: "json",

        success: function(userConf)
        {
            if($.isEmptyObject(userConf))
            {
                alert("[ERRORE] dati utente esterno nulli");
            }
            else
            {
                Bl.lista.appendHtmlAccEx(userConf);
            }
        },
        error: function()
        {
            alert("ERRORE connessione");
            return false;
        }
    });
    
});

Bl.lista.convertData = function(data)
{
    var date = new Date(data);
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
};
