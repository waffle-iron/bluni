Bl.menu = {};

var tab = "";
Bl.menu.render=(function()
{
    $('#bl-menu').append('<a href="#menu-panel" id="bl-icon-menu"  data-icon="bars" data-iconpos="notext"'
                          +'class="ui-btn-right ui-btn-icon-notext ui-icon-carat-d" data-role="button" role="button"></a>');
    $('#bl-menu').append(Bl.menu.getHtml());
    $('#menu').hide();
    
    $("#bl-icon-menu").click(function(){
        $('#menu').toggle("slow");
    });
    $("#bl-header-h1").click(function(){
        $('#menu').toggle("slow");
    });
    
    $("#body-page").click(function(){
        $('#menu').hide("slow");
    });
    
    $("#menu a").click(function()
    {
        $("#"+tab).removeClass("ui-btn-active");
        tab = "opz-"+$(this).text();
        $("#"+tab).addClass("ui-btn-active");
        $('#menu').hide("slow");
        
        switch(tab)
        {
            case "opz-Account":
            {
                Bl.account.render();
                break;
            }
            
            case "opz-Logout":
            {
                Bl.configuration.logout();
                break;
            }
        }
    });
});

Bl.menu.getHtml=(function()
{
    var opzioni = ["Account", "Logout"];
    var html='<div id="menu" class="ui-popup-container ui-popup-active" style="">'
                +'<div id="select-choice-custom-listbox" class="ui-selectmenu ui-popup ui-body-inherit ui-overlay-shadow ui-corner-all">'
                    +'<ul class="ui-selectmenu-list ui-listview" role="listbox" aria-labelledby="select-choice-custom-button">';
    
    for(var i=0; i< opzioni.length; i++)
    {
        html+='<li data-option-index="'+i+'" data-icon="false" role="option" aria-selected="true">'
                +'<a href="#" id="opz-'+opzioni[i]+'" tabindex="-1"';
        html+='class="ui-btn" >';
        html+=opzioni[i]+'</a> </li>';
    }
    
    html+='</ul> </div> </div>';
    
    return html;
});

Bl.menu.removeSelect = function()
{
    $("#"+tab).removeClass("ui-btn-active");
};