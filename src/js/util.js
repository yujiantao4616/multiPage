function getQueryString(url, name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = url.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

var format = function(time, format) {
    var t = new Date(time);
    var tf = function(i) { return (i < 10 ? '0' : '') + i };
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a) {
        switch (a) {
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    })
}


//console.log(window.location.href);
var href = String(window.location.href);
if (href.indexOf("Task_Setting_List") == -1) {
    var demandId = '';
    var demandName = '';
    var applyUserName = '';
    var demandTypeId = '';
    var operationStatus = '';
    var pageNum = 1;
    var str = "http://localhost:9000/task/Task_Setting_List.html?demandId=" + demandId + "&demandName=" + demandName + "&applyUserName=" + applyUserName + "&demandTypeId=" + demandTypeId + "&operationStatus=" + operationStatus + "&pageNum=" + pageNum;
    window.localStorage.setItem('url', str);
}


// 添加响应拦截器
function errorLogin(str) {
    var app = new Vue();
    app.$message({
        message: str,
        type: 'warning',
        duration: 5000,
        onClose: function() {
            var str = window.top.location.origin + "/dam/login";
            window.top.location.href = str;
        }
    });
};
axios.interceptors.response.use(response => {
    if (response.data.code == "100004") {
        errorLogin("用户登录信息失效，请重新登录");
    } else {
        return response;
    }
}, error => {
    //errorLogin("用户登录信息失效，请重新登录");
    return Promise.reject(error);
});

//userKey
//axios.defaults.headers['userKey'] = fetchStorage();
//数据深copy
function deepClone(obj) {
    let _obj = JSON.stringify(obj),
        objClone = JSON.parse(_obj);
    return objClone
};
//符号常量
const operationalSymbols = [{
    type: 'semicolon',
    tip: '分号',
    label: '；',
    bType: 'danger'
}, {
    type: 'colon',
    tip: '冒号',
    label: '：',
    bType: 'danger'
}, {
    type: 'brackets_L',
    tip: '左括号',
    label: '（',
    bType: 'danger'
}, {
    type: 'brackets_R',
    tip: '右括号',
    label: '）',
    bType: 'danger'
}, {
    type: 'reduce',
    icon: 'el-icon-minus',
    tip: '减',
    label: '－',
    bType: 'danger'
}, {
    type: 'sprit',
    tip: '斜杠',
    label: '／',
    bType: 'danger'
}];
/**
 * 判断字符串为空
 * @param {string} value 
 */
function isStrEmpty(value) {
    return value == null || typeof value == "undefined" || typeof value === 'string' && value.trim().length === 0;
}

// <el-input v-enter-number type="number"></el-input> 只能输数字0-9 不能带符号小数点
Vue.directive('enterNumber', {
    inserted: function(el) {
        el.addEventListener("keypress", function(e) {
            e = e || window.event;
            let charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode;
            let re = /\d/;
            if (!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey) {
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
            }
        });
    }
});
//时间过滤器
Vue.filter("dateFilter", function(date, formatPattern) {
    return moment(date).format(formatPattern || "YYYY-MM-DD HH:mm:ss");
});