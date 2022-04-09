//新手美菜商城（App）买菜,美菜的优势在于大份量的蔬菜。
const clickSettle = () => {
	let loc = id('button_cart_charge').findOne().bounds();
	click(loc.centerX(), loc.centerY());
}
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const clicktext = (text) => {
	let loc =textStartsWith(text).findOne();
	click(loc.centerX(), loc.centerY());
}
const try_1 = () => {
	let loc = textStartsWith('去结算').findOne().bounds();
	click(loc.centerX(), loc.centerY());
	sleep(1000);
	try_1();
}
var x=device.width;//1080
var y=device.height;//2340
const appName = "美菜商城";
//下面是打开APP，依次进入美菜商城，购物车界面，可以手动直接提前进入界面。
//美菜商城
//launchApp(appName);
//sleep(4000);//广告等待4s
auto.waitFor();
//购物车
//click(771/1080*x,2088/2340*y);
//sleep(500);
//toast("开始抢菜")
//sleep(500);
//提前进入界面。
try_1();
