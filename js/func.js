
$(function(){
	$("#hurry-home-input_start_time").val(localStorage.getItem("start_time") || "09:00");
	$("#hurry-home-input_end_time").val(localStorage.getItem("end_time") || "18:00");
})

$("#hurry-home-double_github").on('click',function(e){
	localStorage.setItem('vacation_type',2);
	alert('设置成功')
})

$("#hurry-home-size_week").on('click',function(e){
	localStorage.setItem('vacation_type',3);
	alert('请手动本周是双休还是单休。')
})

$("#hurry-home-single_week").on('click',function(e){
	localStorage.setItem('vacation_type',1);
	alert('设置成功')
})
$("#hurry-home-to_github").on('click',function(e){
	window.open("https://github.com/sbjim/go-home","_blank");
})
// 开始时间
$("#hurry-home-input_start_time").on("blur",function(e){
	let val = $(this).val();
	if(val == '') alert('开始时间不能为空')
	let start_time = 	$("#hurry-home-input_start_time").val();
	localStorage.setItem("start_time",start_time)
})
// 结束时间
$("#hurry-home-input_end_time").on("blur",function(e){
	let val = $(this).val();
	if(val == '') alert('结束时间不能为空')
	let end_time = 	$("#hurry-home-input_end_time").val();
	localStorage.setItem("end_time",end_time)

})


//转换为 天-时-分-秒
function secondToday(msd) {
	var time = msd
	if (null != time && "" != time) {
		if (time > 60 && time < 60 * 60) {
			time = parseInt(time / 60.0) + "分钟" + parseInt((parseFloat(time / 60.0) -
				parseInt(time / 60.0)) * 60) + "秒";
		} else if (time >= 60 * 60 && time < 60 * 60 * 24) {
			time = parseInt(time / 3600.0) + "小时" + parseInt((parseFloat(time / 3600.0) -
					parseInt(time / 3600.0)) * 60) + "分钟" +
				parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
					parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
		} else if (time >= 60 * 60 * 24) {
			time = parseInt(time / 3600.0 / 24) + "天" + parseInt((parseFloat(time / 3600.0 / 24) -
					parseInt(time / 3600.0 / 24)) * 24) + "小时" + parseInt((parseFloat(time / 3600.0) -
					parseInt(time / 3600.0)) * 60) + "分钟" +
				parseInt((parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
					parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) * 60) + "秒";
		} else {
			time = parseInt(time) + "秒";
		}
	}
	return time;
}

// 获取周末最后的一天时间，双休，大小周，单休
function getLastDay(day5,day6,day7){
	// 1=单休，2=双休，3 = 大小周
	let type = localStorage.getItem('vacation_type') || 2;
	time = '';
	switch(type){
		case '1':
			time = day6;
			break;
		case '2':
			time = day5;
			break;
		// case '3':
		// 	// 大小周的话 需要确定本地是否为单休
		// 	time = day7;
		// 	break;
		default:
			time = day5;
			break;
	}
	return time;
}

// 返回一条毒鸡汤 or 正能量
function getRandomMsg(day){
	let day_msg = {
		1:'一',
		2:'二',
		3:'三',
		4:'四',
		5:'五',
		6:'六',
		7:'日',
	}
	var lists = [
		'你连指甲都泛出好看的颜色。',
		'你的眼睛可真好看，里面有晴雨  日月  山川  江河  云雾  花鸟，但我的眼睛更好看，因为我的眼里有你。',
		'第一次见到你，我的心就炸成了烟花，需要用一生来打扫灰炉。',
		'把我的整个灵魂都给你，连同它的怪癖  小脾气  忽明忽暗  一千八百种坏毛病，它真讨厌，只有一点好  爱你'
		
	];

	let msg = lists[Math.floor(Math.random()*lists.length)];
	let resp = "今天是星期"+day_msg[day]+"，"+msg;

	// 随机已返回一条满满的正能量
	return resp;

}
