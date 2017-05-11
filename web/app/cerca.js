/* global BlApp, Bl */

Bl.cerca = {};

Bl.cerca.render = (function()
{
   console.log("sono in cerca");
   $('#body-page').empty();
   Bl.cerca.appendHtml();
   $("#body-page").trigger("create");
});
Bl.cerca.appendHtml = (function()
{
    $("#body-page").append('<div id="logo">Blunì</div><hr>');
    $("#body-page").append('<h1 id="title-page-signin">Cerca</h1>');
    $("#body-page").append('<h4 id="title-page-signin">Inserisci i dati del libro</h4>');

    $("#body-page").append('<div class="form-group"><label id="text-title"> Titolo</label>');
    $("#body-page").append(BlApp.inputText.html("sale-title", "text", "Titolo del libro"));
    $("#body-page").append('</div>');
    
    
    var html = '<label id="text-faculty" >Facolta</label>\
                <select id="signin-faculty">\n\
                    <option selected>Tutte le facoltà</option>\n\
                    <option>Ingegneria</option>\n\
                    <option>Economia</option>\n\
                    <option>Letteratura</option>\n\
                </select>';
    $("#body-page").append(html);
    
    $("#body-page").append('<a id="btn-back-cerca" class="btn btn-default">Indietro</a>');
    $("#body-page").append('<a id="btn-search-cerca" class="btn btn-default">Cerca</a>');
    
    $('#btn-back-cerca').click(function(){
        Bl.main.render();
    });
    
    $('#btn-search-cerca').click(function(){
        Bl.lista.render();
    });
});

Bl.cerca.search= (function(param)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var dati = "id_user="+param['id_user']+
            "&title="+param['title']+
            "&isbn="+param['isbn']+
            "&price="+param['price']+
            "&description="+param['description']+
            "&image="+param['image']+
            "&date="+param['date'];
});
    