/* global BlApp, Bl */

Bl.lista = {};

Bl.lista.render = (function(list, titolo)
{   
    Bl.lista.length = list.length;
    //var description = list[0].description; per prendere un valore dal json array
    Bl.lista.books = list;
    $('#body-page').empty();

    Bl.lista.appendHtml(list, titolo);
   
    $('.el-content').click(function()
    {
       var username = $(this).find('.username').text(); //mi serve per presndere username dal content cliccato
        console.log(username);
        Bl.lista.renderAcc(username);   //renderizza pagina venditore
    });

    $('#btn-back-lista').click(function()
    {
        Bl.cerca.render();
    });
    
    $('#btn-backplus-lista').click(function()
    {
        Bl.cerca.render();
    });

    $("#body-page").trigger("create");
});

Bl.lista.appendHtml = (function(list, titolo)
{
    $("#body-page").append('<h1 id="title-page-lista">Lista</h1>');
    $("#body-page").append('<h3 id="title-page-lista">Trova il tuo libro:</h3>');
    
    if(Bl.lista.length>0)
    {
        $("#body-page").append('<h6 id="result-page-lista">Per "'+titolo+'" sono stati trovati '+Bl.lista.length+' libri:</h6><br>');
    }
    else
        $("#body-page").append('<h6 id="noresult-page-lista">Non sono stati trovati risultati per '+titolo+'.</h6><br>');
    
    var i = 0;
    
    jQuery.each(list,function(key,val)
    {
        var data = convertDate(val.date);
        function convertDate(data) {
        var date = new Date(data);
        return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
}
        $("#body-page").append(BlApp.element.html(val.username, val.faculty, val.title, val.description, data, val.price));
        i = key;
    });
    
    if(i<2)
    {
        $("#body-page").append('<a id="btn-back-lista" class="btn btn-default">Indietro</a>');
    }
    else
        $("#body-page").append('<a id="btn-backplus-lista" class="btn btn-default">Indietro</a>');
});

Bl.lista.renderAcc = function(username)
{
    $("#body-page").empty();
    //Bl.lista.ext(); //ricerca altri libri che il venditore mette in vendita
    Bl.lista.appendHtmlAcc(username); //render account venditore
    
    $('#acnExt-btn-back').click(function()
    {
        Bl.lista.render(Bl.lista.books);
    });
};

Bl.lista.appendHtmlAcc = function (username)
{
    var user = Bl.user.getConfig();
    
    $('#body-page').append('<h3>Il profilo di '+user.username+':</h3>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Facoltà: </span>'+user.faculty+'</p>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Email: </span>'+user.email+'</p>');
    $("#body-page").append('<p><span class="acnExt-bold-text">Numero di telefono: </span>'+user.phone_number+'</p>');
    $('#body-page').append('<hr>');
    
    $('#body-page').append('<h3>I suoi annunci</h3>');
    
    //jQuery.each(accList,function(key,val)
    //{
      //  $("#body-page").append(BlApp.element.html(val.username, val.title, val.description, val.date, val.price));
        
    //});
    
    $("#body-page").append('<a id="acnExt-btn-back"  class="btn btn-default">Indietro</a>');
    
};



Bl.lista.accList=(function(user)  //prende informazioni 
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var param = {};
    param['user'] = user;
    
    
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/accountExt.php",
        data: {param: JSON.stringify(param)},
        dataType: "json",

        success: function(msg)
        {
            if(msg !== "0")
            {
                Bl.configuration.set(JSON.stringify(msg));
                //Bl.configuration.load();
                Bl.lista.renderAcc();
            }	
            else
            {
                alert("msg: credenziali non corrette");
            }
        },
        error: function()
        {
            alert("ERRORE connessione");
            return false;
        }
    });
    
});

Bl.lista.search =(function(param)
{
    var pathParts = window.location.href.split("/");
    var root = pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/listaExt.php",
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


