function time(){
    postMessage(formatDate(new Date(), 'yyyy-MM-dd H:m:s')); //postMessage����������HTMLҳ�洫��һ����Ϣ
    setTimeout("time()", 1000);
}
time();

//��������ʱ���ʽ���ָ����ʱ�䣺ע��getMonth���ص���0-11��hour��ʽ��������ĸ��ʾ24Сʱ��ʽ
function formatDate(oDate, sFormation) {
	var year=oDate.getFullYear(),
		month=oDate.getMonth()+1,
		date=oDate.getDate(),
		day=oDate.getDay(),
		hours=oDate.getHours(),
		minutes=oDate.getMinutes(),
		seconds=oDate.getSeconds(),
		week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	function pat(num){
		return num<10?'0'+num:num;
	}	
	return sFormation.replace(/yyyy|YYYY/,year)
		.replace(/yy/,pat(year%100))
		.replace(/MM/,pat(month))
		.replace(/M/,month)
		.replace(/dd|DD/,pat(date))
		.replace(/d|D/,date)
		.replace(/hh/,pat(hours%12))
		.replace(/HH/,pat(hours))
		.replace(/h/,hours%12)
		.replace(/H/,hours)
		.replace(/mm/,pat(minutes))
		.replace(/m/,minutes)
		.replace(/ss|SS/,pat(seconds))
		.replace(/s|S/,seconds)
		.replace(/w/,week[day]);
}
console.log(formatDate(new Date(1409894060000), 'yyyy-MM-dd H:m:s w'));//2014-09-05 13:14:20 ������