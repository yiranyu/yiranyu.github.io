/**
 *
 * @authors qinqiuyu
 * @date    2016-07-28 10:51:20
 * @version 1.0
 */
(function(window) {

    var eventUtil = {
        /**
         * 添加事件
         *  能力检测: DOM2,IE8及更早版本,DOM0
         */
        addEvent: function(element, type, handler) {
            if (element.addEventListener) {
                element.addEventListener(type, handler, false); //在冒泡阶段调用事件处理程序
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        /**
         *移除事件
         * 注意：addEventListener和attachEvent移除时传入的参数与添加处理程序时使用的参数相同，
         * 这也就是意味着添加匿名函数将无法移除
         */

        removeEvent: function(element, type, handler) {
            if (element.removeEventListener) {
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent) {
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        /**
         * 阻止特定事件的默认行为，即取消进一步的时间捕获或冒泡
         */
        preventDefault: function(event) {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        /**
         * 立即停止事件在DOM层次中的传播
         */
        stopPropation: function(event) {
            if (event.stopPropation) {
                event.stopPropation(); //同时取消时间捕获和冒泡
            } else {
                event.cancelBubble = true; //IE取消时间冒泡
            }
        },
        /**
         * 获取event对象
         * 在兼容DOM的浏览器中，event只是简单地传入和返回，而在IE中，event参数是未定义的
         * 使用DOM0级方法添加事件处理程序时，event对象作为window对象的一个属性存在
         */
        getEvent: function(event) {
            return event ? event : window.event;
        },
        /**
         * 获取事件目标
         * 对象this始终等于currentTarget的值，而target则只包含事件的实际目标
         * 对应IE中的是srcElement属性
         */
        getTarget: function(event) {
            return event.target || event.srcElement;
        }

    };
    window.eventUtil = eventUtil;
})(window);

//test
(function(){
    var ele=document.getElementById("ele")
    eventUtil.addEvent(ele, "click", handler);

    function handler(event) {
        alert("只出现一次");
		console.log(eventUtil.getTarget(eventUtil.getEvent()));
		console.log(eventUtil.getEvent());
        eventUtil.removeEvent(ele,"click",handler);
	    }


})();

//demo: http://yiranyu.github.io/basis/event.html
