function time(){
    postMessage(new Date().toLocaleString()); //postMessage方法用于向HTML页面传回一段消息
    setTimeout("time()", 10000);
}
time();