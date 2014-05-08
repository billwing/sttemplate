/*! 
 * @name: Call Template
 * @overview: ST Common Method
 * @author: Billwing(tbrweb@gmail.com)
 * @create: 2013-11-08
 * @revise: 2013-11-09
 */

/**
 * 模板
 * @param { string } 模板
 * @return { void }
 * @usage 用法
 */

/**
 * Ajax
 */
Ext.Ajax.request({
    url: '#',
    method: 'GET',
    //disableCaching: false,
    //async: false,
    params: {
        key: value
    },
    succsss: function(r) {
        var res = Ext.decode(r.responseText);
        var code = res.code;
        var msg = res.msg;
        var data = res.response;

        if(code == 1) {

        } else {

        }
    },
    failure: function() {
        Ext.Msg.alert('数据加载失败，请稍后再试~');
    }
});

// JSONP
Ext.data.JsonP.request({
    url: '#',
    callbackKey: 'callback',
    params: {
        key: value
    },
    success: function(result, request) {
        var code = result.code;
        var msg = result.msg;

        if(code) {
            Ext.Msg.alert(msg);
        } else {
            Ext.Msg.alert(msg);
        }
    }
});

/** 
 * Selector
 */
// id(events)
    // 组件
    Ext.getCmp('itemId');

    // HTML
    Ext.select('#itemId');

    // HTML
    Ext.query('#itemId')[0];

    // HTML
    var itemId = Ext.DomQuery.select('#itemId')[0];
    Ext.get(itemId).on('tap', function() {
        Ext.Msg.alert('ItemId is tapped!');
    });

// attribute(events)
    // 组件
    Ext.ComponentQuery.query('[name=test]')[0];

    // HTML
    Ext.query('input[data-action=test]');

    // HTML
    var items = Ext.query('*[class*=sel]');
    for(var i = 0; i < items.length; i ++) {
        Ext.get(items[i]).on('tap', function(et, item) {
            Ext.Msg.alert(i + 'is clicked!');
        });
    }

/**
 * Attribute
 */
var itemId = Ext.select('#itemId').elements[0];
// set
Ext.get(itemId).set({'data-test': '2013'});
// get
Ext.get(itemId).getAttribute('data-test');


/**
 * XTemplate
 */
var itemObj = Ext.getCmp('itemId'),
    itemTpl = new Ext.XTemplate([
        '<div>',
            '<ul>',
                '<tpl for=".">',
                    '{% for(var i=0;i<2;i++) { %)',
                        '<li>{name} is {[this.check(values.sex)]}</li>',
                    '{% } %}',
                '</tpl>',
            '</ul>',
        '</div>',
        {
            check: function(val) {
                var sex;
                if(val == 'M') {
                    sex = 'man';
                } else {
                    sex = 'woman';
                }
                return sex;
            }
        }
    ]);
itemObj.updateHtml(itemTpl.applyTemplate(data));


/**
 * Date
 */
var nowDate = Ext.Date.format(new Date(), 'Y-m-d H:i:s');
var timestamp = Ext.Date.parse(nowDate, "Y-m-d H:i:s").getTime();

/**
 * ScrollBar
 */
Ext.Container.getScrollable().getScroller().scrollTo(0, 0);
