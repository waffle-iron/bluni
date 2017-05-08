
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
    $("#header-page").trigger("create");
});

Bl.signin.appendHtml = (function()
{
    $("#body-page").append('<h1 id="title-page-signin">Iscrizione</h1>');

    $("#body-page").append('<div id="text-username"> <label>Username</label> \n\
                            <input type="text" id="signin-username" class="form-control" placeholder="Username"></input></div>');
    
    $("#body-page").append('<div id="text-email"> <label>eMail</label> \n\
                            <input type="email" id="signin-email" class="form-control" placeholder="Email"></input></div>');
    
    $("#body-page").append('<div id="text-psw"> <p>Password</p> <input id="signin-psw" type="password" ></input></div>');
    
    $("#body-page").append('<div id="text-psw-conf"> <p>Conferma Password</p> <input id="signin-psw-conf" type="password" ></input></div>');
    
    $("#body-page").append('<div id="text-phone"> <label>Numero di Telefono</label> \n\
                            <input type="number" id="signin-phone" class="form-control" placeholder="Numero"></input></div>');
    
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

Bl.signin.test = (function()
{
   $.ajax({
        type: "GET",
        url: root+"/src/main/connect/db_connect.php",
        dataType: "html",

        success: function(msg)
        {
            alert(msg);
        },
        error: function()
        {
            alert("no");
        }
    });
    
});

Bl.signin.user= (function(param)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var data = "user="+param['user']+
            "&psw="+param['psw']+
            "&email="+param['email']+
            "&phone="+param['phone']+
            "&faculty="+param['faculty'];
    
    $.ajax({
        type: "POST",
        url: root+"/src/main/connect/signin.php",
        data: data,
        dataType: "html",

        success: function(msg)
        {
            alert(msg);
            
            if(msg==="1")
            {
                alert("Iscrizione eseguita correttamente");
                //jQuery.cookie("bluni-cookie",user);
                Obj.start();
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