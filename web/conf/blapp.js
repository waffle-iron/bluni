
/* global Blapp */

var BlApp = {};

BlApp.inputText = {};

BlApp.inputText.html = (function(id, type, placeholder)
{
    var html = '<input id="'+id+'" type="'+type+'"  \n\
        class="form-control" placeholder="'+placeholder+'"></input>';
    return html;
});


BlApp.element = {};

BlApp.element.html = (function(user,facolta, titolo,descrizione,data,prezzo)
{
    var date = BlApp.convertData(data);
    
    var tab =  '\<div class = "el-content">\
               <table class = "el-table"> \n\
               <tr><td class = "username">'+user+'</td><td class = "faculty">'+facolta+'</td></tr> \n\
               <tr><td colspan=2 class = "el-title">'+titolo+'</td></tr> \n\
               <tr><td colspan=2 class = "el-description">'+descrizione+'</td></tr> \n\
               <tr><td class = "el-date" val="'+data+'">'+date+'</td><td class = "el-price">'+prezzo+' €</td></tr> \n\
               </table>\n\
               </div>';
    return tab;
});

BlApp.formGroup = {};

BlApp.formGroup.html = function(label, id_input, type_input, placeholder_input)
{
    var html = '<div class="form-group">\n\
                    <label>'+label+'</label>\n\
                    '+BlApp.inputText.html(id_input, type_input, placeholder_input)+'\n\
                </div>';
    return html;
};

BlApp.popupDialog = function(content)
{
   var html = "<h4>"+content+"</h4>";
       html += '<a id="btn-back-popup" class="btn btn-default">Annulla</a>';
       html += '<a id="btn-confirm-popup" class="btn btn-default">Conferma</a>';
       
   $('#bl-popup').html(html);
   
   $('#btn-back-popup').click(function()
   {
       $('#bl-popup').popup('close');
   });
};

BlApp.convertData = function(data)
{
    var date = new Date(data);
    return date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
};