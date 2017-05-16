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

Bl.user.getPhoneNumber = function()
{
    return Bl.user.config.phone_number;
};

Bl.user.getFaculty = function()
{
    return Bl.user.config.faculty;
};

Bl.user.getConfig = function()
{
    return Bl.user.config;
};