
Bl.login = {};

Bl.login.render = (function()
{
    $('#page').css("cssText","padding-top: 40px !important;"); 

    $("#body-page").empty();

    $("#body-page").append('<div id="logo">Blunì</div>');
    $("#body-page").append('<div class="info-txt-user"><p>Username</p></div>');
    $("#body-page").append('<div class="input-user"><input type="text" id="input-username" value="Username"></input></div>');
    $("#body-page").append('<div class="info-txt-psw"><p>Password</p></div>');
    $("#body-page").append('<div class="input-psw"> <input id="input-password" type="password" value="Password"></input></div>');
    $("#body-page").append('<a id="btn-access" class="btn btn-default">Login</a>');
    
    $("#body-page").append('<a id="btn-back" class="btn btn-default">Annulla</a>');
    //Signin
    $("#body-page").append('<a href="#" id="signin">Iscriviti</a>');

    $("#input-username").click(function(){
        $(this).val('');
    });

    $("#input-password").click(function(){
        $(this).val('');
    });


    $("#access").click(function(){
        var user = $('#input-username').val();
        var psw = $('#input-password').val();

        //Obj.login.start(user,psw);	
    });

    $('#signin').click(function(){
        //Obj.signin.render();
    });
    
    $('#btn-back').click(function(){
        //Obj.signin.render();
        Bl.main.render();
    });

    $('#body-page').trigger("create");
});