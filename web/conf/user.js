/* global BlApp, Bl */

Bl.user = {};

Bl.user.set = function (userConfig)
{
    Bl.user.config = userConfig;
};

Bl.user.getIdUser = function()
{
    return Bl.user.config.id_user;
};

Bl.user.getUsername = function()
{
    return Bl.user.config.username;
};

Bl.user.getEmail = function()
{
    return Bl.user.config.email;
};

Bl.user.getPhone_number = function()
{
    return Bl.user.config.phone_number;
};

Bl.user.getFaculty = function()
{
    return Bl.user.config.faculty;
};