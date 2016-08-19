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
document.writeln("<a class=\'mui-tab-item\'id=\'mui-icon-chatbubble\'>");
document.writeln("<span class=\'mui-icon mui-icon-gear\'></span>");
document.writeln("<span class=\'mui-tab-label\'>设置</span>");
document.writeln("</a>");
document.writeln("</nav>");
//document.getElementById("mui-icon-home").addEventListener('tap', function() {
//mui.openWindow({
//				url: 'index.html',
//				id: 'index'
//			});
//});
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
document.getElementById("mui-icon-chatbubble").addEventListener('tap', function() {
mui.openWindow({
				url: 'setting.html',
				id: 'setting'
			});
})