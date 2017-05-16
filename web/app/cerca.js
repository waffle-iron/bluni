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
    $("#body-page").append('<h1 id="title-page-search">Cerca</h1>');
    $("#body-page").append('<h4 id="subTitle-page-search">Inserisci i dati del libro</h4>');

    $("#body-page").append('<div class="form-group"><label id="text-search-title"> Titolo</label>');
    $("#body-page").append(BlApp.inputText.html("search-title-book", "text", "Titolo del libro"));
    $("#body-page").append('</div>');
    
    
    var html = '<label id="text-faculty" >Facolta</label>\
                <select id="search-faculty">\n\
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
        Bl.cerca.search()
        
    });
});

Bl.cerca.search= (function()
{
    
    var tito = $('#search-title-book').val();
    var titolo = "title="+tito;
    
    if ($.isEmptyObject(titolo))
    {
        alert("[ERRORE] inserire titolo");
        return false;
    }
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    $.ajax({
        type: "POST",
        url: root+"/src/main/connect/lista.php",
        data: titolo,
        dataType: "json",

        success: function(msg)
        {
            if(msg !== "0")
            {
                console.log(msg);
                Bl.lista.render();
            }	
            else
            {
                alert("msg: titolo non trovato");
            }
        },
        error: function()
        {
            alert("no");
            return false;
        }
    });
    
    
    }
       
            
);

    