Ext.define('STTemplate.controller.Base', {
	extend: 'Ext.app.Controller',
    alternateClassName: 'Base',

    /**
     * 设置页面Cookie值
     * @param { string } Cookie名
     * @param { string } Cookie值
     * @param { string } Cookie过期时间
     * @return { void }
     */
    setCookieVal: function(name, val, expiredDays) {
        var date = new Date();
        date.setTime(date.getTime() + expiredDays * 24 * 3600 * 1000);
        document.cookie = name + '=' + val + '; expires=' + date.toGMTString();
    },

    /**
     * 获取页面Cookie值
     * @param { string } Cookie名
     * @return { number }
     */
    getCookieVal: function(name) {
        var allCookie = document.cookie.split('; ');
        for (var i = 0; i < allCookie.length; i++) {
            var arr = allCookie[i].split('=');
            if (name == arr[0]) {
                if (arr.length > 1) {
                    return unescape(arr[1]);
                } else {
                    return 0;
                }
            }
        }
        return 0;
    },

    /**
     * 删除页面Cookie值
     * @param { string } Cookie名
     * @return { void }
     */
    delCookieVal: function(name) {
        var date = new Date();
        date.setTime(date.getTime() - 1);
        var cval = this.getCookieVal(name);
        if(cval != null) document.cookie = name + "=" + cval + "; expires=" + date.toGMTString();
        this.setCookieVal(name, cval, date);
    },
    
	/**
     * 设置本地存储
     * @param { string } 字段名
     * @param { string } 字段值
     * @param { void } 
     */
    storeSet: function(key, value) {
        this.getApplication().localStorage.setItem(key, value);
    },

    /**
     * 获取本地存储
     * @param { string } 字段名
     * @return { string } 字段值
     */
    storeGet: function(key) {
        return this.getApplication().localStorage.getItem(key);
    },

    /**
     * 移除本地存储
     * @param { string } 字段名
     * @return { void }
     */
    storeRemove: function(key) {
        this.getApplication().localStorage.removeItem(key);
    },

    /**
     * 获取URL参数值
     * @param { string } 参数名
     * @return { void }
     */
    getUrlParam: function(name) {
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    },

    /**
     * 验证手机号码
     * @param { string } 字段值
     * @return { boolean }
     */
    isMobile: function(val) {
        return /(^0{0,1}1[3|4|5|6|7|8|9][0-9]{9}$)/.test(val);
    },

    /**
     * 验证中英字符
     * @param { string } 字段值
     * @return { boolean }
     */
    isChar: function(val) {
        return /^[\u4E00-\uFA29a-zA-Z]+$/ig.test(val);
    },

    /**
     * 获取中文长度
     * @param { string } 字段值
     * @return { number }
     */
    getChLen: function(val) {
        var ch = val.match(/[\u4E00-\uFA29]/ig);
        return (ch == null ? 0 : ch.length * 3);
    },

    /**
     * 获取英文长度
     * @param { string } 字段值
     * @return { number }
     */
    getEnLen: function(val) {
        var en = val.match(/[a-zA-Z]/ig);
        return (en == null ? 0 : en.length);
    },

    /**
     * 获取数字长度
     * @param { string } 字段值
     * @return { number }
     */
    getNumLen: function(val) {
        var num = val.match(/[0-9]/ig);
        return (num == null ? 0 : num.length);
    },

    /**
     * 获取字符串长度（英文单位）
     * @param { string } 字段值
     * @return { number }
     */
    getLen: function(val) {
      return this.getChLen(val) + this.getEnLen(val) + this.getNumLen(val);
    },

    /**
     * 获取字符串长度（中文单位）
     * @param { string } 字段值
     * @return { number }
     */
    getLenInCh: function(val) {
        return Math.ceil(this.getLen(val) / 3);
    },

    /**
     * 提示自动关闭
     * @param { string } 提示内容
     * @return { void }
     */
    alertAutoClose: function(msg) {
        var _timeout = Ext.defer(function() {
            Ext.Msg.hide();
        }, 3000, this);

        Ext.Msg.alert('', msg, function() {
            clearTimeout(_timeout);
        });
    },

    /**
     * 获取用户信息
     * @param { string } 是否跳转到登录页   1：跳转，0：不跳转
     * @param { function } 回调函数
     * @return { void }
     */
    getUserInfo: function(isShowLog, callback) {
        Ext.Ajax.request({
            url: '#',
            method: 'GET',
            params: {
            },
            success: function(r) {
                var res = Ext.decode(r.responseText);
                var code = res.code;
                var msg = res.msg;
                var data = res.response;
        
                if (!Ext.isFunction(callback)) {
                    callback = Ext.emptyFn;
                }
                
                if(code == 1) {
                    userName = data.customer_name;
                    callback();
                } else if(isShowLog && code == 1001) {
                    Ext.Msg.alert('', '您还没有登录，请登录~', callback);
                } else {
                    callback();
                }

            },
            failure: function() {
                Ext.Msg.alert('数据加载失败，请稍后再试~');
            }
        });
    },

    /**
     * 功能暂未开放
     * @return { void }
     */
    unFeature: function() {
        var unFeatures = Ext.query('*[class*=unFeature]');
        for(var i = 0; i < unFeatures.length; i ++) {
            Ext.get(unFeatures[i]).on('tap', function(et, item) {
                Ext.Msg.alert('亲，该功能即将推出，敬请期待~')
            });
        }
    }
    
});
