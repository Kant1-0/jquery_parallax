/*
Plugin: jQuery Parallax
Version: Alpha 1.0
Author: Quentin Frémeaux
Author URL: http://popzelife.me
Twitter: @Popzelife
Description: Easy-made parallax for background and element. Alpha version, still working on easing. Script need to be used with Jquery (http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js) and JQueryRotate (http://beneposto.pl/jqueryrotate/js/jQueryRotateCompressed.js).
Plugin URL: https://github.com/Kant1-0/jquery_parallax
License: GNU General Public License v3 or later
License URL: http://www.gnu.org/licenses/gpl-3.0.en.html
*/

var parallax_background = function(id_element, x_weakness, y_weakness, layout, position_top = 0, position_left = 0) {
    layout.mousemove(function(e) {
		var x = position_left -(e.pageX + this.offsetLeft) / x_weakness;
		var y = position_top -(e.pageY + this.offsetTop) / y_weakness;
		id_element.css('background-position', x +  'px ' + y + 'px ');
	});
};

var parallax2_background = function(id_element, x_weakness, y_weakness, layout, position_top = 0, position_left = 0) {
    layout.mousemove(function(e) {
		var x = position_left +(e.pageX + this.offsetLeft) / x_weakness;
		var y = position_top +(e.pageY + this.offsetTop) / y_weakness;
		id_element.css('background-position', x +  'px ' + y + 'px ');
	});
};

var parallax_element = function(id_element, x_weakness, y_weakness, layout = $(body), position_top = 0, position_left = 0) {
    layout.mousemove(function(e) {
		var x = position_left -(e.pageX + this.offsetLeft) / x_weakness;
		var y = position_top -(e.pageY + this.offsetTop) / y_weakness;
        id_element.css('top', y + 'px');
        id_element.css('left', x +  'px');
	});
};

var parallax2_element = function(id_element, x_weakness, y_weakness, layout = $(body), position_top = 0, position_left = 0) {
    layout.mousemove(function(e) {
		var x = position_left +(e.pageX + this.offsetLeft) / x_weakness;
		var y = position_top +(e.pageY + this.offsetTop) / y_weakness;
        id_element.css('top', y + 'px');
        id_element.css('left', x +  'px');
	});
};
