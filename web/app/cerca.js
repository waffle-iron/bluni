/* global BlApp, Bl, titolo */

Bl.cerca = {};

Bl.cerca.render = (function ()
{
    $('#body-page').empty();

    Bl.cerca.appendHtml();

    $("#logo").animate({ "margin-top": "10px", "font-size": "35px", "width": "80px"}, "200");
    //$("#logo").animate({ "width": "40%"}, "slow");

    $('#btn-back-cerca').click(function () 
    {
        $("#logo").animate({ "margin-top": "18%", "font-size": "60px", "width": "100%"}, "200",function()
        {
            Bl.main.render();
        });
    });
    
    $('#btn-search-cerca').click(function () 
    {
        var titolo = $('#search-title-book').val();
        var facolta = $('#search-faculty').val();
        
        if ($.isEmptyObject(titolo))
        {
            alert("[ERRORE] inserire titolo");
            return false;
        }
    
        var param = {};
        param['title'] = titolo;
        param['faculty'] = facolta;
        
        Bl.cerca.search(param);
    });

    $("#body-page").trigger("create");
});

Bl.cerca.appendHtml = (function ()
{
    $("#body-page").append('<div id="logo">Blunì</div>');
    $("#body-page").append('<h2 id="title-page-search">Cerca</h2>');
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
    $("#body-page").append('<a id="btn-search-cerca" class="btn btn-default" >Cerca</a>');
});

Bl.cerca.search =(function(param)
{
    var pathParts = window.location.href.split("/");
    var root = pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/lista.php",
        data: {param: JSON.stringify(param)},
        dataType: "json",

        success: function(msg)
        {
            if(msg !== "0")
            {
                if($.isEmptyObject(msg))
                {
                    alert("nessun risultato trovato");
                }
                
                var libri = JSON.stringify(msg);
                console.log(libri);
                Bl.lista.render(msg);
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
