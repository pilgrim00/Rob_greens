//新手美团买菜
//borrowed from https://github.com/qulingyuan/robVeg/blob/master/main.js
function unLock() {//解锁屏幕，需要指纹人脸识别方式换成数字解锁，可配合后台定时任务
	if (!device.isScreenOn()) {
	  device.wakeUp();
	  sleep(500);
	  swipe(500, 2000, 500, 1000, 200);
	  sleep(500);
	  const password = "000000"; //这里换成自己的六位手机解锁密码
	  for (let i = 0; i < password.length; i++) {
		let position = text(password[i]).findOne().bounds();
		click(position.centerX(), position.centerY());
		sleep(200);
	  }
	}
	sleep(1000);
  }
const clickSettle = () => {
	var widget=id('button_cart_charge').findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
}
const hasText = (text) => {
	return textStartsWith(text).exists() // 是否存在指定文本
}
const clicktext = (text) => {
	let widget=textStartsWith(text).findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
}
const try_1 = () => {
	let widget = textStartsWith('结算').findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
	sleep(1000);
	if (hasText('返回购物车')){
		back();
		sleep(1000);
		try_1();
	} else if (hasText('立即支付')) {
        toast('成功抢到');
		try_2();
	}
}
const try_2 = () => {
	let widget = textStartsWith('立即支付').findOne();
	click(widget.bounds().centerX(), widget.bounds().centerY());
	sleep(1000);
	if (hasText('我知道了')){
		back();
		sleep(1000);
		try_2();
	} else if (hasText('确认支付')) {
        toast('成功开始支付');
		let widget = textStartsWith('确认支付').findOne();
		click(widget.bounds().centerX(), widget.bounds().centerY());
	}
}
const try_3 = () => {
	//调用函数hastext下面的时间延迟会长一些~
	let loc=textStartsWith('结算').findOne().bounds();
	click(loc.centerX(), loc.centerY());
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
//--------------------------------1.解锁屏幕进入美团一步步来
var x=device.width;//1080
var y=device.height;//2340
const appName = "美团";
//unLock()
//下面是打开APP，依次进入美团，美团买菜，购物车界面，可以手动直接提前进入界面（注释掉）。
//进入美团
//launchApp(appName);
//sleep(4000);//广告等待4s
auto.waitFor();
//进入美团买菜
//click(237/1080*x,634/2340*y);
//sleep(1500);
//进入购物车，机型适配二选一
//var loc = id("img_shopping_cart").findOne().bounds();//1.匹配id寻找位置。
//click(loc.centerX(), loc.centerY());
//click(648/1080*x,2077/2340*y);//2，该控件的属性clickable=True，直接点击。
//sleep(2000);
//try_1();//正式开始抢。
//------------------------------2.提前直接进入界面
try_3(); //测试没有在购物时间段能否循环使用。
//try_1();//正式开始抢。
