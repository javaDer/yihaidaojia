document.writeln("<nav class=\'mui-bar mui-bar-tab\'>");
document.writeln("<a class=\'mui-tab-item\'id=\'mui-icon-home\'>");
document.writeln("<span class=\'mui-icon mui-icon-home\'></span>");
document.writeln("<span class=\'mui-tab-label\'>首页</span>");
document.writeln("</a>");
document.writeln("<a class=\'mui-tab-item\'id=\'mui-icon-map\'>");
document.writeln("<span class=\'mui-icon mui-icon-map\'></span>");
document.writeln("<span class=\'mui-tab-label\'>地图</span>");
document.writeln("</a>");
document.writeln("<a class=\'mui-tab-item\'id=\'mui-icon-search\'>");
document.writeln("<span class=\'mui-icon mui-icon-search\'></span>");
document.writeln("<span class=\'mui-tab-label\'>搜索</span>");
document.writeln("</a>");
document.writeln("<a class=\'mui-tab-item\'id=\'mui-icon-contact\'>");
document.writeln("<span class=\'mui-icon mui-icon-contact\'></span>");
document.writeln("<span class=\'mui-tab-label\'>设置</span>");
document.writeln("</a>");
document.writeln("</nav>");
document.getElementById("mui-icon-home").addEventListener('tap', function() {
	mui.openWindow({
		url: 'index.html',
		id: 'index'
	});
});
document.getElementById("mui-icon-map").addEventListener('tap', function() {
	mui.openWindow({
		url: 'index.html',
		id: 'index'
	});
});
document.getElementById("mui-icon-search").addEventListener('tap', function() {
	mui.openWindow({
		url: 'index.html',
		id: 'index'
	});
});
document.getElementById("mui-icon-contact").addEventListener('tap', function() {
	console.log(localStorage.getItem('openid'));
	if(localStorage.getItem('openid') != null) {
		mui.openWindow({
			url: 'setting.html',
			id: 'setting'
		});
	} else {
		mui.openWindow({
			url: 'login.html',
			id: 'login'
		});
	}
})