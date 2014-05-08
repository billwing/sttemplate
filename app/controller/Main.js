Ext.define('STTemplate.controller.Main', {

	extend: 'STTemplate.controller.Base',
    requires: 'Ext.app.Controller',

	config: {
        
        refs: {
            homeView: {
                selector: 'main',
                xtype: 'main',
                autoCreate: true
            }
            //homeView: 'main'
        },

        control: {
            'button[action=backhome]': {
                tap: function() {
                    this.redirectTo('home');
                }
            }
        },

        before: {
            initHomeView: 'checkUser'
        },

        routes: {
            'home': 'initHomeView',
            '': 'initHomeView'
        }
    },

    /**
     * @launch 运行执行事件
     */
    launch: function() {
        var homeView = this.getHomeView();
        var backTopBtn = Ext.DomQuery.select('#backTopBtn')[0];
        Ext.get(backTopBtn).on('tap', function() {
            homeView.getScrollable().getScroller().scrollTo(0, 0, false);
        });
    },

    /**
     * @called 检查用户登录 
     */
    checkUser: function(action) {
        var that = this;
        this.getUserInfo(0, function() {
            if(userName == null) {
                Ext.get(Ext.DomQuery.select('#mainLogBtn')[0]).show();
                Ext.get(Ext.DomQuery.select('#mainLogout')[0]).hide();
            } else {
                Ext.get(Ext.DomQuery.select('#mainLogBtn')[0]).hide();
                Ext.get(Ext.DomQuery.select('#mainLogout')[0]).show();
            }
            action.resume();
        });
    },

    /**
     * @init 初始化商城首页 
     */
    initHomeView: function() {
        var homeView = this.getHomeView();
        Ext.Viewport.setActiveItem(homeView);
        this.unFeature();
    }

});
