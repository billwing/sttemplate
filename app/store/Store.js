Ext.define('STTemplate.store.Store', {

    extend: 'Ext.data.Store',
    requires: 'Ext.DateExtras',

    config: {
        autoLoad: true,

        model: 'STTemplate.model.Model',

        proxy: {
            type: 'ajax',
            url: Global.getGetHomeUrl(),
            reader: {
                type: 'json',
                rootProperty: 'response'
            }
        },
        
        sorters: [
            {
                property : 'id',
                direction: 'DESC'
            }
        ],

        filters: [
            {
                property: 'type',
                value: /store/
            }
        ]
    }

});
