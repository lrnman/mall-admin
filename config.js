export default {
	secret: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	mongo: {
		development: {
			connectionString: 'mongodb://127.0.0.1:27017/mall'
		},
		production: {
			connectionString: 'mongodb://127.0.0.1:27017/mall'
		}
	},
	redis: {
		development: {
			connectionString: 'redis://127.0.0.1:6379'
		},
		production: {
			connectionString: 'redis://127.0.0.1:6379',
		}
	},
	upload: {
		tmp : 'public/tmp/',
		path: 'public/uploads/'
	},
	superAdmin: {
		username: 'admin', 
		password: '123456', 
	},
	orderStatus: {
		'submitted': '已提交', 
		'canceled' : '已取消', 
		'confirmed': '已确认', 
		'finished' : '已完成', 
	},
	wechat: {
		appid: 'wx73d137448a855c7d', 
		secret: 'a56d6ed8ac12444bc15f278b86fbc719', 
		mch_id: "**********", // 商户号
    mch_key: "********************", // 商户key
    // 生成商户订单号
    getWxPayOrdrID: function(){
        var myDate = new Date();
        var year = myDate.getFullYear();
        var mouth = myDate.getMonth() + 1;
        var day = myDate.getDate();
        var hour = myDate.getHours();
        var minute = myDate.getMinutes();
        var second = myDate.getSeconds();
        var msecond = myDate.getMilliseconds(); //获取当前毫秒数(0-999)
        if(mouth < 10){ /*月份小于10  就在前面加个0*/
            mouth = String(String(0) + String(mouth));
        }
        if(day < 10){ /*日期小于10  就在前面加个0*/
            day = String(String(0) + String(day));
        }
        if(hour < 10){ /*时小于10  就在前面加个0*/
            hour = String(String(0) + String(hour));
        }
        if(minute < 10){ /*分小于10  就在前面加个0*/
            minute = String(String(0) + String(minute));
        }
        if(second < 10){ /*秒小于10  就在前面加个0*/
            second = String(String(0) + String(second));
        }
        if (msecond < 10) {
            msecond = String(String(0) + String(second));
        } else if(msecond >= 10 && msecond < 100){
            msecond = String(String(0) + String(second));
        }

        var currentDate = String(year) + String(mouth) + String(day) + String(hour) + String(minute) + String(second) + String(msecond);
        return currentDate;
    }
	},
}