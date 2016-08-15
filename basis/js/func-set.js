/**
 * 
 * @authors Yu
 * @date    2016-08-16
 * @version $Id$
 */
//封装函数 f，使 f 的 this 指向指定的对象 
function bindThis(f, oTarget) {
	return function(){
		return f.apply(oTarget,arguments);
	};
}
var result=bindThis(function(a, b){
	return this.test + a + b;
}, {test: 1})(2, 3);
console.log(result);//6


/*指定参数名称，返回该参数的值或者空字符串
不指定参数名称，返回全部的参数对象 或者 {}
如果存在多个同名参数，则返回数组
*/
function getUrlParam(sUrl, sKey) {
	var params,
		result={},
		item,
		i;
	if(!sUrl){
		return '';
	}	
	params=sUrl.split('#')[0].split('?');
	if(params.length===1){
		return sKey?{}:'';
	}
	params=params[1].split('&');
	
	result={};
	for(i in params){
		item=params[i].split('=');
		if(!result[item[0]]){
			result[item[0]]=[];
		}
		result[item[0]].push(item[1]);
	}
	//指定参数名称
	if(sKey){
		if(result[sKey]){
			return result[sKey].length>1?result[sKey]:result[sKey][0];
		}else{
			return '';
		}       
	}
	return result;
}

//查找两个节点的最近的一个共同父节点，可以包括节点自身 
function commonParentNode(oNode1, oNode2) {
	if(oNode1.contains(oNode2)){ //oNode1包含oNode2
		return oNode1;
	}
	if(oNode2.contains(oNode1)){//oNode2包含oNode1
		return oNode2;
	}
	//oNode1和oNode1同级
	return oNode1.parentNode;
}
