export default function(options) {

    var EnvConfig = null,

        LocConfig = {
            // facebookId: 1579686775642280 | new appId causes an error
            facebookId: options.local.facebookId,
            redirectUrl: options.local.redirectUrl
        },

        DevConfig = {
            // facebookId: 1579687988975492,
            facebookId: options.dev.facebookId,
            redirectUrl: options.dev.redirectUr
        },

        StageConfig = {
            // facebookId: 1579688092308815,
            facebookId: options.stage.facebookId,
            redirectUrl: options.stage.redirectUr
        },

        ClientStageConfig = {
            // facebookId: 1579688182308806,
            facebookId: options.clientStage.facebookId,
            redirectUrl: options.clientStage.redirectUr
        },

        ProdConfig = {
            // facebookId: 471528566322760,
            facebookId: options.prod.facebookId,
            redirectUrl: options.prod.redirectUr
        };

    if (window.location.host === options.local.currentHost) {
        EnvConfig = LocConfig; // set to false to disable this validation
    } else if (window.location.host === 'dev.modopdev.com') {
        EnvConfig = DevConfig;
    } else if (window.location.host === 'stage.modopdev.com') {
        EnvConfig = StageConfig;
    } else if (window.location.host.indexOf('ubi.com') > -1) {
        EnvConfig = ClientStageConfig;
    } else {
        EnvConfig = ProdConfig;
    }

    window.fbAsyncInit = function() {
       FB.init({
           appId   : EnvConfig.facebookId,
           xfbml   : true,
           version  : 'v2.3'  
       });
     };
}
