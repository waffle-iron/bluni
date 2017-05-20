
var BlApp = {};

BlApp.inputText = {};

BlApp.inputText.html = (function(id, type, placeholder)
{
    var html = '<input id="'+id+'" type="'+type+'"  \n\
        class="form-control" placeholder="'+placeholder+'"></input>';
    return html;
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