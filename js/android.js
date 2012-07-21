var ua = navigator.userAgent.toLowerCase();
var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

if (isAndroid) {
    
    // android needs special scripts to enable overflow scrolling that feels native
    document.write('<scr'+'ipt type="text/javascript" src="js/plugins/scrollview.js" ></scr'+'ipt>');
    document.write('<scr'+'ipt type="text/javascript" src="js/plugins/jquery.mobile.scrollview.js" ></scr'+'ipt>');
    document.write('<scr'+'ipt type="text/javascript" src="http://redone.org/_scrollview/include/jquery.easing.1.3.js" ></scr'+'ipt>');

}