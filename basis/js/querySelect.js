function querySelect(el,className){ 
	//children获取到元素的所有子节点(Element,nodeType==1),类似的有childNodes属性，不过childNodes包含文本节点
	var children = el.children; 
	var result = []; 
	//classList属性是NodeList对象，包含所有的类名集合，contains用来判断是否包含某一个类
	if(el.classList.contains(className)){ 
		result.push(el); 
	}
	var i,len=children.length;
	for(i=0;i<len;i++){
		var child = children[i]; 
		var arr = querySelect(child,className); 
		Array.prototype.push.apply(result, arr); //result=result.concat(arr);
	} 
	return result; 
} 