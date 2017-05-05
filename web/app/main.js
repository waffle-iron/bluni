Bl.main = {};

Bl.main.render = (function()
{
    //Regolazione dimensione pagina per farci stare la navbar
    $('#page').css("cssText","padding-top: 76.875px !important;");

    $('#body-page').empty();
    
    var html = '<div id="btn-main-content">';
        html+= '<div><a id="btn-cerca" class="btn btn-default">Cerca</a></div>';
        html+= '<div><a id="btn-vendi" class="btn btn-default">Vendi</a></div>';
        html+= '</div>';
    $("#body-page").append(html);
    
    $('#btn-cerca').click(function()
    {
       Bl.cerca.render();
    });
    
    $('#btn-vendi').click(function()
    {
       Bl.login.render();
    });
    
    $('#body-page').trigger("create");
});

