function time(){
    postMessage(new Date().toLocaleString()); //postMessage����������HTMLҳ�洫��һ����Ϣ
    setTimeout("time()", 10000);
}
time();