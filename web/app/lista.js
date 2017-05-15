/* global BlApp, Bl */

Bl.lista = {};

Bl.lista.render = (function()
{
   $('#body-page').empty();
   Bl.lista.appendHtml();
   $("#body-page").trigger("create");
});
Bl.lista.appendHtml = (function()
{
 
    $("#body-page").append('<h1 id="title-page-lista">Lista</h1>');
    $("#body-page").append('<h3 id="title-page-lista">Trova il tuo libro:</h3><br>');
    $("#body-page").append('<a id="btn-back-lista" class="btn btn-default">Indietro</a>');
   
    
    $('#btn-back-lista').click(function(){
        Bl.main.render();
    });
    
   
});

