
/* global BlApp, Bl */

Bl.vendi = {};

Bl.vendi.render = (function()
{
   $("#body-page").empty();
   
   Bl.idUser = "Samir";
   
   Bl.vendi.appendHtml();
   
   $("#btn-sale-back").click(function()
   {
      Bl.main.render(); 
   });
   
   $('#btn-sale-next').click(function()
   {
       var param = {};
       param['id_user'] = Bl.idUser;
       param['title'] = $("#sale-title").val();
       param['author'] = $("#sale-author").val();
       param['price'] = $("#sale-price").val();
       param['description'] = $("#sale-description").val();
       param['image'] = null;
       param['date'] = new Date();
       param['faculty'] = $("#sale-faculty").val();
       
       var required = ['title', 'price'];
       
       if(Bl.vendi.controlData(param, required))
       {
            Bl.vendi.publish(param);
       }
       else
       {
           alert("Completare i campi obbligatori");
       }
   });
   
   $("#body-page").trigger("create");
});
    
Bl.vendi.appendHtml = (function()
{
    $("#body-page").append('<h1 id="title-page-signin">Vendi</h1>');

    $("#body-page").append('<div class="form-group"><label id="text-title"> Titolo</label>');
    $("#body-page").append(BlApp.inputText.html("sale-title", "text", "Titolo del libro"));
    $("#body-page").append('</div>');
    
    $("#body-page").append('<div class="form-group sale-form"><label id="text-author"> Autore</label>');
    $("#body-page").append(BlApp.inputText.html("sale-author", "text", "Autore/i libro"));
    $("#body-page").append('</div>');
    
    $("#body-page").append('<div class="form-group sale-form"><label id="text-price"> Prezzo </label>');
    $("#body-page").append(BlApp.inputText.html("sale-price", "number", "€ "));
    $("#body-page").append('</div>');
    
    $("#body-page").append('<div class="form-group sale-form"><label id="text-description"> Desrizione</label>');
    $("#body-page").append('<textarea id="sale-description" class="form-control" rows="2" \n\
                    placeholder= "descrizione facoltativa ..."></textarea> ');
    $("#body-page").append('</div>');
    
    var html = '<label id="text-faculty" >Facolta</label>\
                <select id="sale-faculty">\n\
                    <option>Ingegneria</option>\n\
                    <option>Economia</option>\n\
                    <option>Letteratura</option>\n\
                </select>';
    $("#body-page").append(html);
    
    $("#body-page").append('<a id="btn-sale-back" data-inline="true" class="btn btn-default">Annulla</a>');
    $("#body-page").append('<a id="btn-sale-next" data-inline="true" class="btn btn-default">Pubblica</a>');
    
});

Bl.vendi.controlData = function(param, required)
{
    for(var i =0; i < required.length; i++)
    {
        if($.isEmptyObject(param[required[i]]))
        {
            return false;
        }
    }
    return true;
};

Bl.vendi.publish= (function(param)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var dati = "id_user="+param['id_user']+
            "&title="+param['title']+
            "&author="+param['author']+
            "&isbn="+param['isbn']+
            "&price="+param['price']+
            "&description="+param['description']+
            "&image="+param['image']+
            "&date="+param['date']+
            "&faculty="+param['faculty'];
    
    $.ajax({
        type: "POST",
        url: root+"/src/main/connect/sale.php",
        data: dati,
        dataType: "html",

        success: function(msg)
        {
            if(msg==="1")
            {
                alert("Annuncio pubblicato correttamente");
                Bl.main.render();
            }	
            else
            {
                alert(msg);
            }
        },
        error: function()
        {
            alert("no");
            return false;
        }
    });
});