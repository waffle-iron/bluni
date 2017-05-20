/* global BlApp, Bl */
Bl.login = {};

Bl.login.render = (function()
{
    $('#page').css("cssText","padding-top: 40px !important;"); 

    $("#body-page").empty();
    
    Bl.login.appendHtml();
   
   
    $("#input-password").click(function()
    {
        $(this).val('');
    });

    $("#btn-access").click(function()
    {
        var user = $('#input-username').val();
        var psw = $('#input-password').val();
        
        Bl.login.start(user,psw);	
    });

    $('#signin').click(function(){
        Bl.signin.render();
    });
    
    $('#btn-back').click(function(){
        Bl.main.render();
    });

    $('#body-page').trigger("create");
});

Bl.login.appendHtml = function()
{
    
    $("#body-page").append('<div id="logo">Blunì</div>');
    /*
    $('#body-page').append(BlApp.formGroup.html('Username',"input-username", "text", "Username"));
    $('#body-page').append(BlApp.formGroup.html('Password',"input-password", "password", "Password"));
    $('#body-page').append('<button id="btn-access" type="submit" class="btn btn-default">Login</button></form>');
    */
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
    $("#body-page").append('<a href="#" id="signin" class="btn btn-default">Iscriviti</a>');
    
};

Bl.login.start=(function(user, psw)
{
    var pathParts = window.location.href.split("/");
    var root=  pathParts[0] + "//" + pathParts[2] + "/" + pathParts[3];
    
    var param = {};
    param['user'] = user;
    param['psw'] = psw;
    
    $.ajax({
        type: "GET",
        url: root+"/src/main/connect/login.php",
        data: {param: JSON.stringify(param)},
        dataType: "json",

        success: function(msg)
        {
            if(msg !== "0")
            {
                Bl.configuration.set(JSON.stringify(msg));
                Bl.configuration.load();
                Bl.vendi.render();
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