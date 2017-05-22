/* global BlApp, Bl */

Bl.main = {};

Bl.main.render = (function()
{
    //Regolazione dimensione pagina per farci stare la navbar
    $('#page').css("cssText","padding-top: 40px !important;");

    $('#body-page').empty();

    $("#body-page").append('<div id="logo">Blunì</div>');
    $("#body-page").append('<p id="sub-title">La tua bacheca universitaria</p>');
    
    var html = '<div id="btn-main-content">';
        html+= '<div><a id="btn-cerca" class="btn btn-default">CERCA</a></div>';
        html+= '<div><a id="btn-vendi" class="btn btn-default" data-transition="fade">VENDI</a></div>';
        html+= '</div>';
    $("#body-page").append(html);
    
    $('#btn-cerca').click(function()
    {
       Bl.cerca.render();
    });
    
    $('#btn-vendi').click(function()
    {
        $("#body-page").animate({ "margin-left": "-=500px" }, "slow",function(){
            
             
            if(Bl.configuration.isRegistered)
            {
                Bl.vendi.render();
            }
            else
            {
                Bl.login.render();
            }
            //è per l'animazione, quando finisce devo rimettere display a block per visualizzare il contenuto
            $("#body-page").css("cssText","display: block");
        });
    });
    
    $('#body-page').trigger("create");
});

