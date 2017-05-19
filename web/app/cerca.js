/* global BlApp, Bl, titolo */

Bl.cerca = {};

Bl.cerca.render = (function ()
{
    $('#body-page').empty();

    Bl.cerca.appendHtml();

    $('#btn-back-cerca').click(function () {
        Bl.main.render();
    });

    $('#btn-search-cerca').click(function () {
        var titolo = $('#search-title-book').val();
        var facolta = $('#search-faculty').val();
        
        if ($.isEmptyObject(titolo))
    {
        alert("[ERRORE] inserire titolo");
        return false;
    }
    
        Bl.cerca.search(titolo, facolta);
    });

    $("#body-page").trigger("create");
});

Bl.cerca.appendHtml = (function ()
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
});

Bl.cerca.search =(function(titolo, facolta)
{
    var pathParts = window.location.href.split("/");
    var root = pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var param = {};
    param['title'] = titolo;
    param['faculty'] = facolta;
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/lista.php",
        data: {param: JSON.stringify(param)},
        dataType: "json",

        success: function(msg)
        {
            if(msg !== "0")
            {
                var libri = JSON.stringify(msg);
                console.log(libri);
                Bl.lista.render();
            }	
            else
            {
                alert("msg: titolo non trovato");
            }
        },
        error: function()
        {
            alert("ERRORE connessione");
            return false;
        }
    });
}        
);

    