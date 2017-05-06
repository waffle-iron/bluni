
Bl.signin = {};

Bl.signin.render = (function()
{
    $("#body-page").empty();
    $("#body-page").append('<h1 id="title-page-signin">Iscrizione</h1>');

    $("#body-page").append('<div id="text-email"> <label>eMail</label> \n\
                            <input type="email" id="signin-email" class="form-control" placeholder="Email"></input></div>');
    $("#body-page").append('<div id="text-psw"> <p>Password</p> <input id="signin-psw" type="password" ></input></div>');
    $("#body-page").append('<div id="text-psw-conf"> <p>Conferma Password</p> <input id="signin-psw-conf" type="password" ></input></div>');
    
    var html = '<label>Facolta</label>\
                <select>\n\
                    <option>Ingegneria</option>\n\
                    <option>Economia</option>\n\
                    <option>Letteratura</option>\n\
                </select>';
    $("#body-page").append(html);
    
    $("#body-page").append('<a id="signin-back" data-inline="true" class="btn btn-default">Annulla</a>');
    $("#body-page").append('<a id="signin-btn" data-inline="true" class="btn btn-default">Iscriviti</a>');


    $('#signin-psw, #signin-psw-conf').click(function(){
        $(this).val('');
    });

    $('#signin-btn').click(function(){

        var user = $('#signin-user').val();
        var email = $('#signin-email').val();
        var psw = $('#signin-psw').val();
        var pswConf = $('#signin-psw-conf').val();

        if(Bl.signin.controlloDati(user,email,psw,pswConf))
        {
            Bl.signin.user(user,psw,email);
        }
        else
            alert("[ERRORE]Completare tutti i campi completamente");
    });

    $('#signin-back').click(function(){
        Bl.login.render();
    });

    $("#body-page").trigger("create");
    $("#header-page").trigger("create");
});

Bl.signin.controlloDati=(function(user,email,psw,pswConf)
{
    if(user !== "" && email !== "" && psw !== "" && pswConf !== "")
    {
        //Controllo psw
        if(psw!=pswConf)
        {
            alert("Le due Password non corrispondono");
        }
        else 
            return true;
    }
    else
        return false;	
});

Bl.signin.user= (function(user,psw,email)
{
    $.ajax({
        type: "POST",
        url: "php/signin.php",
        data: "user="+user+"&psw="+psw+"&email="+email,
        dataType: "html",

        success: function(msg)
        {
            if(msg==="1")
            {
                alert("dati inseriti");
                jQuery.cookie("objective-cookie",user);
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