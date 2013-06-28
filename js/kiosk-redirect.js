// JavaScript Document
jQuery.noConflict();

jQuery(document).ready(function(e) {
	// Разбор строки запроса на элементы
	var url = jQuery.url(jQuery(location).attr("href"));
	var subdirectory = "kiosk";
	if(jQuery.browser.mobile) {
		subdirectory = "kiosk-mobile";
	} else {
		subdirectory = "kiosk"
	}
	window.location.replace(url.attr('protocol')+"://"+url.attr('host')+":"+url.attr('port')+url.attr('directory')+subdirectory+"/"+url.attr('file')+"?"+url.attr('query')+"#"+url.attr('fragment'));
});