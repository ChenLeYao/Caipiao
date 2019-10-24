layui.use(['layer', 'form'], function() {
	var layer = layui.layer

});

function TipMessage() {

	layer.alert('该功能暂未开放 ');
}

function TicketDetail(number) {
	layer.open({
		type: 0,
		title: '提示',
		fix: true,
		maxmin: true,
		shadeClose: true,
		shade: 0.8,
		btn: ['2.5倍', '5倍', '取消'],
		area: ['300px', '200px'],
		content: '<p >请选择您想要下注的倍率</p>',
		yes: function(index, layero) {
			//按钮【按钮一】的回调
			console.log(index);
			window.location.href = './Betting.html';
		},
		btn2: function(index, layero) {
			//按钮【按钮二】的回调
			console.log(index);
			//return false 开启该代码可禁止点击该按钮关闭
			window.location.href = './Betting.html';
		},
		btn3: function(index, layero) {
			//按钮【按钮三】的回调
			console.log(index);
			//return false 开启该代码可禁止点击该按钮关闭
		}
	});

}

function serviceTel() {
	layer.open({
		type: 1,
		title: '客服联系方式',
		fix: true,
		maxmin: true,
		shadeClose: true,
		shade: 0.8,
		btn: ['确认'],
		yes: function() {
			setTimeout(function() {
				layer.closeAll();
			}, 300)

		},
		area: ['300px', '200px'],
		content: '<p style="padding:10px;font-size:15px;">客服电话<span style="color: #d56355;font-weigth:600;"> 18827112306</span></p><p style="padding:10px;font-size:15px;">微信公众号<span style="color: #d56355;font-weigth:600;"> dishinicaileyuan</span></p>' //这里content是一个普通的String
	});
}

var arrayE = [{
		name: '全部',
		path: '../img/icon/hall_1.png',
		content: [{
				title: '北京PK10',
				path: '../img/icon/brand_1.jpeg'
			},
			{
				title: '幸运飞艇',
				path: '../img/icon/brand_1.jpeg'
			},
			{
				title: '北京赛车',
				path: '../img/icon/brand_2.jpeg'
			},
			{
				title: '广东快乐10',
				path: '../img/icon/brand_3.jpeg'
			},
			{
				title: '澳洲幸运5',
				path: '../img/icon/brand_4.jpeg'
			},
			{
				title: '新疆时时彩',
				path: '../img/icon/brand_5.jpeg'
			},
			{
				title: '极速赛车',
				path: '../img/icon/brand_6.jpeg'
			},
			{
				title: '北京28',
				path: '../img/icon/brand_7.jpeg'
			},
			{
				title: '重庆时时乐',
				path: '../img/icon/brand_8.jpeg'
			},
			{
				title: '悉尼三分彩',
				path: '../img/icon/brand_9.jpeg'
			},
			{
				title: '加拿大28',
				path: '../img/icon/brand_11.jpeg'
			},
			{
				title: '飞艇牛牛',
				path: '../img/icon/brand_1.jpeg'
			},
			{
				title: '北京pk10',
				path: '../img/icon/brand_18.jpeg'
			}
		]
	},
	{
		name: 'PC蛋蛋',
		path: '../img/icon/hall_6.png',
		content: [{
				title: '北京28',
				path: '../img/icon/brand_8.jpeg'
			},
			{
				title: '加拿大28',
				path: '../img/icon/brand_9.jpeg'
			},
		]
	},
	{
		name: 'PK10系列',
		path: '../img/icon/hall_2.png',
		content: [{
				title: '北京PK10',
				path: '../img/icon/brand_1.jpeg'
			},
			{
				title: '幸运飞艇',
				path: '../img/icon/brand_1.jpeg'
			},
			{
				title: '极速赛车',
				path: '../img/icon/brand_6.jpeg'
			}

		]
	}, {
		name: '时时彩',
		path: '../img/icon/hall_3.png',
		content: [

			{
				title: '澳洲幸运5',
				path: '../img/icon/brand_4.jpeg'
			},
			{
				title: '新疆时时彩',
				path: '../img/icon/brand_5.jpeg'
			},
			{
				title: '重庆时时乐',
				path: '../img/icon/brand_8.jpeg'
			},
			{
				title: '悉尼三分彩',
				path: '../img/icon/brand_9.jpeg'
			},
			{
				title: '腾讯分分彩',
				path: '../img/icon/brand_12.jpeg'
			}
		]
	}, {
		name: '牛牛',
		path: '../img/icon/hall_4.png',
		content: [

			{
				title: '北京PK10',
				path: '../img/icon/brand_4.jpeg'
			},
			{
				title: '飞艇牛牛',
				path: '../img/icon/brand_1.jpeg'
			}
		]
	}, {
		name: '快乐十分',
		path: '../img/icon/hall_5.png',
		content: [

			{
				title: '广东快乐十分彩',
				path: '../img/icon/brand_3.jpeg'
			}
		]
	}
]

function DomTab(Name, callback) {
	var Dom = document.querySelectorAll('.' + Name + ' li');
	for(var i = 0; i < Dom.length; i++) {
		Dom[i].index = i;
		Dom[i].onclick = function() {
			document.querySelector('.' + Name + ' .active').classList.remove('active');
			if(!this.classList.contains('active')) this.classList.add('active');
			callback && callback(this.index);
		}
	}
};

function D(date) {
	var dayString = (date.getFullYear()) + '-' + (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)) + '-' + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate());
	return dayString;
};

function GetDate(date) {
	var arr = [
		[],
		[],
		[],
		[],
		[],
		[]
	];
	var day = date.getDate();
	var week = date.getDay();
	//昨天
	date.setDate(day - 1);
	arr[0][1] = arr[0][0] = D(date);
	//今天
	date.setDate(day);
	arr[1][1] = arr[1][0] = D(date);
	//本周
	date.setDate(day - (week - 1));
	arr[2][0] = D(date);
	date.setDate(day);
	arr[2][1] = D(date);
	//上周
	date.setDate(day - week - 6);
	arr[3][0] = D(date);
	date.setDate(day - week);
	arr[3][1] = D(date);
	//本月
	date.setDate(1);
	arr[4][0] = D(date);
	date.setDate(day);
	arr[4][1] = D(date);
	//上月
	date.setDate(-30);
	arr[5][0] = D(date);
	date.setDate(date.getDate() + 30);
	arr[5][1] = D(date);
	return arr;
}

function SetRange(dateArray) {
	var state = document.querySelectorAll('.state-date li');
	for(var i = 0; i < state.length; i++) {
		state[i].index = i;
		state[i].onclick = function() {
			if(this.classList.contains('active')) {
				return;
			};
			document.querySelector('.state-date .active').classList.remove('active');
			this.classList.add('active')
			Select1.innerHTML = dateArray[this.index][0];
			Select2.innerHTML = dateArray[this.index][1];

		};
	}
}


function PublicAjax (method, url, data, callback) {
		var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
        url = 'https://bjyl.htsnmiku39.phantasyai.com' + url ;
        console.log();
		if(method == 'GET') {
			data ? xhr.open(method, url + '?' + data, true) :
				xhr.open(method, url, true);
			xhr.send();
		} else {
			xhr.open(method,  url, true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send(data);
		};
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200)

				callback(JSON.parse(xhr.responseText));

		}
	};