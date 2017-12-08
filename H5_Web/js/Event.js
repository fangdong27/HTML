var EventUtil = {
    //跨浏览器事件处理程序
    addHandler: function (element, eventName, func) {
        if (element.addEventListener) {
            element.addEventListener(eventName, func, false);//DOM2级
        } else if (element.attachEvent) {
            element.attachEvent("on" + eventName, func);//IE
        } else {
            element["on" + eventName] = func;//DOM0级
        }
    },
    removeHandler: function (element, eventName, func) {
        if (element.removeEventListener) {
            element.removeEventListener(eventName, func, false);//DOM2级
        } else if (element.attachEvent) {
            element.removeEvent("on" + eventName, func);//IE
        } else {
            element["on" + eventName] = null;//DOM0级
        }
    },

    //跨浏览器事件对象
    getEvent: function (event) {
        return event || window.event;//非IE||IE，表示返回结果为true的值,如果event存在，则为true，并返回event
    },

    getTarget: function (event) {
        return event.target || event.srcElement;
    },

    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();//存在，则调用preventDefault()方法
        } else {
            event.returnValue = false;//IE8及以下支持
        }
    }
}