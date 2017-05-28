/* global BlApp, Bl */

Bl.lista = {};

Bl.lista.render = (function(list, titolo)
{   
    Bl.lista.books = list;
    Bl.lista.length = list.length;
    Bl.lista.title = titolo;
    
    $('#body-page').empty();

    Bl.lista.appendHtml(Bl.lista.books, Bl.lista.title);
   
    $('.el-content').click(function()
    {
        var username = $(this).find('.username').text();
        Bl.lista.renderExternalAccount(username);
    });

    $('#btn-back-lista, #btn-back-lista-fix').click(function()
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
        $("#body-page").append(BlApp.element.html(val.username, val.faculty, 
                                val.title, val.description, val.date, val.price));
    });
    
    if(list.length<2)
    {
        $("#body-page").append('<a id="btn-back-lista-fix" class="btn btn-default">Indietro</a>');
    }
    else
        $("#body-page").append('<a id="btn-back-lista" class="btn btn-default">Indietro</a>');
});

Bl.lista.renderExternalAccount = function (username)
{
    $("#body-page").empty();
    
    if(username !== Bl.user.getUsername())
    {
       Bl.account.renderAccount(username);
    }
    else
    {
        Bl.account.render();
    }
    
    $('#acn-btn-back').click(function()
    {
        Bl.lista.render(Bl.lista.books, Bl.lista.title);
    });
};