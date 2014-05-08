/*====== Global Variable ======*/
// 静态图片路径
sImgUrl = '#';
// 动态图片路径
dImgUrl = '#';
// 用户名
userName = null;

Ext.define('STTemplate.utils.Global', {

	singleton: true,
	alias: 'widget.global',
	alternateClassName: 'Global',
	config: {
	    /*====== API Url ======*/
	    // 应用首页数据
	    getHomeUrl: '/index.php?a=getHome'
	},
	constructor: function(config) {
		this.initConfig(config);
	}

});
