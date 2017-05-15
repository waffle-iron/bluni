
Bl.user = {};

Bl.user.set = function (userConfig)
{
    Bl.user.config = userConfig;
};

Bl.user.getIdUser = function()
{
    return Bl.user.config.id_user;
}