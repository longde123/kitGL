// Generated by Haxe 4.2.0-rc.1+354c24d30
(function ($global) { "use strict";
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
var haxe_Log = function() { };
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
var js_html__$CanvasElement_CanvasUtil = function() { };
js_html__$CanvasElement_CanvasUtil.__name__ = true;
js_html__$CanvasElement_CanvasUtil.getContextWebGL = function(canvas,attribs) {
	var name = "webgl";
	var ctx = canvas.getContext(name,attribs);
	if(ctx != null) {
		return ctx;
	}
	var name = "experimental-webgl";
	var ctx = canvas.getContext(name,attribs);
	if(ctx != null) {
		return ctx;
	}
	return null;
};
var kitGL_glWeb_DivertTrace = function(left_) {
	if(left_ == null) {
		left_ = 610;
	}
	this.textStyle1 = "<span style=\"font-size:14px; color:Grey\">";
	this.textStyle0 = "<span style=\"font-size:12px; color:Silver\">";
	this.traceString = "";
	var doc = window.document;
	this.traceDiv = doc.createElement("div");
	doc.body.appendChild(this.traceDiv);
	var dom = this.traceDiv;
	var style = dom.style;
	style.position = "absolute";
	style.top = Std.string(0 + "px");
	style.left = Std.string(left_ + "px");
	style.height = Std.string(500 + "px");
	style.width = Std.string(500 + "px");
	style.zIndex = "99";
	style.overflow = "auto";
	haxe_Log.trace = $bind(this,this.myTrace);
};
kitGL_glWeb_DivertTrace.__name__ = true;
kitGL_glWeb_DivertTrace.prototype = {
	myTrace: function(v,inf) {
		if(Std.string(v) == "") {
			return;
		}
		this.traceString += this.textStyle0 + inf.className + "." + inf.methodName + " ( " + (inf.lineNumber == null ? "null" : "" + inf.lineNumber) + " )" + "</span>" + "<br> - " + this.textStyle1 + Std.string(v) + "</span>" + "<br>";
		this.traceDiv.innerHTML = this.traceString;
	}
};
var kitGL_glWeb_Texture = function() {
};
kitGL_glWeb_Texture.__name__ = true;
kitGL_glWeb_Texture.prototype = {
	create: function(width_,height_,autoChild) {
		if(autoChild == null) {
			autoChild = false;
		}
		if(height_ == null) {
			height_ = 600;
		}
		if(width_ == null) {
			width_ = 600;
		}
		this.width = width_;
		this.height = height_;
		this.canvasElement = window.document.createElement("canvas");
		this.canvasElement.width = this.width;
		this.canvasElement.height = this.height;
		this.dom = this.canvasElement;
		var style = this.dom.style;
		style.paddingLeft = Std.string(0 + "px");
		style.paddingTop = Std.string(0 + "px");
		style.left = Std.string(0 + "px");
		style.top = Std.string(0 + "px");
		style.position = "absolute";
		if(autoChild) {
			window.document.body.appendChild(this.canvasElement);
		}
		this.gl = js_html__$CanvasElement_CanvasUtil.getContextWebGL(this.canvasElement,null);
		this.cx = this.canvasElement.getContext("2d");
	}
};
var kitGL_upkeep_TestWebGL = function() {
	var divertTrace = new kitGL_glWeb_DivertTrace();
	var texture = new kitGL_glWeb_Texture();
	texture.create(600,600,true);
	this.mainTexture = texture;
	this.gl = this.mainTexture.gl;
};
kitGL_upkeep_TestWebGL.__name__ = true;
kitGL_upkeep_TestWebGL.main = function() {
	new kitGL_upkeep_TestWebGL();
};
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
js_Boot.__toStr = ({ }).toString;
kitGL_upkeep_TestWebGL.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);