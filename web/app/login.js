
Bl.login = {};

Bl.login.render = (function()
{
    $('#page').css("cssText","padding-top: 40px !important;"); 

    $("#body-page").empty();

    $("#body-page").append('<div id="logo">Blunì</div>');
    $("#body-page").append('<div class="info-txt-user"><p>Username</p></div>');
    $("#body-page").append('<div class="input-user">');
    $("#body-page").append(BlApp.inputText.html("input-username", "text", "Username"));
    $("#body-page").append('</div>');
    $("#body-page").append('<div class="info-txt-psw"><p>Password</p></div>');
    $("#body-page").append('<div class="info-txt-psw">');
    $("#body-page").append(BlApp.inputText.html("input-password", "password", "Password"));
    $("#body-page").append('</div>');
    $("#body-page").append('<a id="btn-access" class="btn btn-default">Login</a>');
    
    $("#body-page").append('<a id="btn-back" class="btn btn-default">Annulla</a>');
    //Signin
    $("#body-page").append('<a href="#" id="signin">Iscriviti</a>');
    

    $("#input-password").click(function(){
        $(this).val('');
    });


    $("#btn-access").click(function(){
        var user = $('#input-username').val();
        var psw = $('#input-password').val();

        Bl.login.start(user,psw);	
    });

    $('#signin').click(function(){
        Bl.signin.render();
    });
    
    $('#btn-back').click(function(){
        //Obj.signin.render();
        Bl.main.render();
    });

    $('#body-page').trigger("create");
});

Bl.login.start=(function(user, psw)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var data = "user="+user+
            "&psw="+psw;
    
    $.ajax({
        type: "POST",
        url: root+"/src/main/connect/login.php",
        data: data,
        dataType: "html",

        success: function(msg)
        {
            if(msg==="1")
            {
                alert("login correttamente");
                Bl.configuration.setCookie("bluni-cookie", user);
                Bl.configuration.start();
            }	
            else
            {
                alert("msg: credenziali non corrette");
            }
        },
        error: function()
        {
            alert("no");
            return false;
        }
    });
    
});