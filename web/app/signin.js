
/* global BlApp, Bl */

Bl.signin = {};

Bl.signin.render = (function()
{
    $("#body-page").empty();
    
    Bl.signin.appendHtml();

    $('#signin-psw, #signin-psw-conf').click(function(){
        $(this).val('');
    });
    
    $('#signin-btn').click(function(){
        
        var param ={};
        param['user'] = $('#signin-username').val();
        param['email'] = $('#signin-email').val();
        param['psw'] = $('#signin-psw').val();
        param['pswConf'] = $('#signin-psw-conf').val();
        param['phone'] = $('#signin-phone').val();
        param['faculty'] = $('#signin-faculty').val();
        
        if(Bl.signin.controlData(param))
        {
            Bl.signin.user(param);
        }
    });

    $('#signin-back').click(function(){
        Bl.login.render();
    });

    $("#body-page").trigger("create");
});

Bl.signin.appendHtml = (function()
{
    $("#body-page").append('<h1 id="title-page-signin">Iscrizione</h1>');

    $("#body-page").append('<label id="text-username"> Username</label>');
    $("#body-page").append(BlApp.inputText.html("signin-username", "text", "Username"));
    
    $("#body-page").append('<label id="text-email">eMail</label>');
    $("#body-page").append(BlApp.inputText.html("signin-email", "email", "Email"));
    
    $("#body-page").append('<label id="text-psw">Password</label>');
    $("#body-page").append(BlApp.inputText.html("signin-psw", "password", "Password"));
    
    $("#body-page").append('<label id="text-psw-conf">Conferma Password</label>');
    $("#body-page").append(BlApp.inputText.html("signin-psw-conf", "password", "Password"));
    
    $("#body-page").append('<label id="text-phone">Numero di Telefono</label>');
    $("#body-page").append(BlApp.inputText.html("signin-phone", "number", "Numero di telefono"));
    
    var html = '<label>Facolta</label>\
                <select id="signin-faculty">\n\
                    <option>Ingegneria</option>\n\
                    <option>Economia</option>\n\
                    <option>Letteratura</option>\n\
                </select>';
    $("#body-page").append(html);
    
    $("#body-page").append('<a id="signin-back" data-inline="true" class="btn btn-default">Annulla</a>');
    $("#body-page").append('<a id="signin-btn" data-inline="true" class="btn btn-default">Iscriviti</a>');
});

Bl.signin.controlData=(function(param)
{
    var isEmpty = false;
    jQuery.each(param,function(key)
    {
        if($.isEmptyObject(param[key]))
        {
            isEmpty=true;
        }
    });
    
    if(isEmpty)
    {
        alert("[ERRORE] completare tutti i campi");
        return false;
    }
    
    if(param['psw'] !== param['pswConf'])
    {
        alert("[ERRORE] le password inserite non coincidono");
        return false;
    }
    
    return true;
});



Bl.signin.user= (function(param)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var dati = "user="+param['user']+
            "&psw="+param['psw']+
            "&email="+param['email']+
            "&phone="+param['phone']+
            "&faculty="+param['faculty'];
    
    $.ajax({
        type: "POST",
        url: root+"/src/main/connect/signin.php",
        data: dati,
        dataType: "html",

        success: function(msg)
        {
            if(msg==="1")
            {
                alert("Iscrizione eseguita correttamente");
                Bl.login.start(param['user'], param['psw']);
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