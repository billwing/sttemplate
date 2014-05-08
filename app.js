/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'Ext.ux': 'ux',
    'YiDeJia': 'app'
});
//</debug>

Ext.application({
    name: 'STTemplate',

    requires: [
        'Ext.MessageBox',
        'STTemplate.utils.Global',
        'STTemplate.controller.Base'
    ],

    models: [
        'Model'
    ],

    views: [
        'Main'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        'Store'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add(Ext.create('STTemplate.view.Main'));

        // Get the browsers language
        var browserLang = window.navigator.language;
        // Available locale files
        var locales = [ 'en', 'cn'];
        // Default locale
        var locale = 'cn';

        // Check browser language against available locale files
        for (var i = locales.length - 1; i >= 0; i--) {
            if (browserLang === locales[i]) {
                locale = browserLang;
                break;
            }
        };

        // Insert src attribute to extlocale
        if(locale) {
            Ext.fly('extlocale').set({src:'/touch/src/locale/ext-lang-' + locale + '.js'});
        }
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "应用更新提示",
            "该应用已经成功更新到最新版本，请重新加载~",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
