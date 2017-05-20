/* global BlApp, Bl */

Bl.lista = {};

Bl.lista.render = (function(list)
{
   $('#body-page').empty();
   Bl.lista.appendHtml(list);
   $("#body-page").trigger("create");
});
Bl.lista.appendHtml = (function(list)
{
 
    $("#body-page").append('<h1 id="title-page-lista">Lista</h1>');
    $("#body-page").append('<h3 id="title-page-lista">Trova il tuo libro:</h3><br>');
    
    jQuery.each(list,function(key,val)
    {
        $("#body-page").append(BlApp.element.html(val.username, val.title, val.description, val.date, val.price));
    });
    
    $("#body-page").append('<a id="btn-back-lista" class="btn btn-default">Indietro</a>');
   
    $('#btn-back-lista').click(function(){
        Bl.main.render();
    });
    
    $('table').click(function()
    {
        console.log($(this).find('.username').text());
    });
   
});

