
var BlApp = {};

BlApp.inputText = {};

BlApp.inputText.html = (function(id, type, placeholder)
{
    var html = '<input id="'+id+'" type="'+type+'"  \n\
        class="form-control" placeholder="'+placeholder+'"></input>';
    return html;
});

BlApp.element = {};

BlApp.element.html = (function(user,titolo,descrizione,data,prezzo)
{
    var tab =  '\<div class = "el-content">\
               <table class = "el-table"> \n\
               <tr><td colspan=2 class = "username">'+user+'</td></tr> \n\
               <tr><td colspan=2 class = "el-title">'+titolo+'</td></tr> \n\
               <tr><td colspan=2 class = "el-description">'+descrizione+'</td></tr> \n\
               <tr><td class = "el-date">'+data+'</td><td class = "el-price">'+prezzo+' €</td></tr> \n\
               </table>\n\
               </div>';
    return tab;
});
