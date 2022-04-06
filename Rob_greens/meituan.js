//新手美团买菜
const clickSettle = () => {
	var widget=id('button_cart_charge').findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
}
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const clicktext = (text) => {
	var widget=textStartsWith(text).findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
}
const try_1 = () => {
	var widget = textStartsWith('结算').findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
	sleep(500);
	if (hasText('返回购物车')){
		back();
		sleep(500);
		try_1();
	} else if (hasText('立即支付')) {
        toast('成功抢到');
		try_2();
	}
}
const try_2 = () => {
	var widget = textStartsWith('立即支付').findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
	sleep(500);
	if (hasText('我知道了')){
		back();
		sleep(500);
		try_2();
	} else if (hasText('确认支付')) {
        toast('成功开始支付');
		var widget = textStartsWith('确认支付').findOne();
		click(widget.bounds().centerX(), widget.bounds().centerY());
	}
}
const try_3 = () => {
	//调用函数hastext下面的时间延迟会长一些~
	var widget=textStartsWith('结算').findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
	sleep(1000);
	if (hasText('我知道了')){
		//两种方式返回。
		//1.var widget = text('我知道了').findOne(); //匹配法点击“我知道了”，back()也是可以的
		//click(widget.bounds().centerX(), widget.bounds().centerY());
		back();
		sleep(1000);
		try_3();
	}

}
var x=device.width;//1080
var y=device.height;//2340
const appName = "美团";
//下面是打开APP，依次进入美团，美团买菜，购物车界面，可以手动直接提前进入界面（注释掉）。
//美团
//launchApp(appName);
//sleep(4000);//广告等待4s
auto.waitFor();
//美团买菜
//click(237/1080*x,634/2340*y);
//sleep(1500);
//购物车
//var widget = id("img_shopping_cart").findOne();
//click(widget.bounds().centerX(), widget.bounds().centerY());
//sleep(1500);
//提前直接进入界面
//try_3(); //测试没有在购物时间段能否循环使用。
try_1();//正式开始抢。
