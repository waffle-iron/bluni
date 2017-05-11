/* global BlApp, Bl */

Bl.lista = {};

Bl.lista.render = (function()
{
   console.log("sono in lista");
   $('#body-page').empty();
   Bl.lista.appendHtml();
   $("#body-page").trigger("create");
});
Bl.lista.appendHtml = (function()
{
 
    $("#body-page").append('<h1 id="title-page-signin">Lista</h1>');
    $("#body-page").append('<h3 id="title-page-signin">Trova il tuo libro:</h3><br>');
    $("#body-page").append('<a id="btn-back-cerca" class="btn btn-default">Indietro</a>');
    $("#body-page").append('<a id="btn-search-cerca" class="btn btn-default">Cerca</a>');
    
    $('#btn-back-cerca').click(function(){
        Bl.main.render();
    });
    
    $('#btn-search-cerca').click(function(){
        
        Bl.main.render();
    });
});

