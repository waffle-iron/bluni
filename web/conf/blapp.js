
var BlApp = {};

BlApp.inputText = {};

BlApp.inputText.html = (function(id, type, placeholder)
{
    var html = '<input id="'+id+'" type="'+type+'"  \n\
        class="form-control" placeholder="'+placeholder+'"></input>';
    return html;
});