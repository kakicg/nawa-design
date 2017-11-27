

/***  vendor/bower/html5shiv/index  ***/

/*
 HTML5 Shiv v3.6.2pre | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
 Uncompressed source: https://github.com/aFarkas/html5shiv
*/

(function(l,f){function m(){var a=e.elements;return"string"==typeof a?a.split(" "):a}function i(a){var b=n[a[o]];b||(b={},h++,a[o]=h,n[h]=b);return b}function p(a,b,c){b||(b=f);if(g)return b.createElement(a);c||(c=i(b));b=c.cache[a]?c.cache[a].cloneNode():r.test(a)?(c.cache[a]=c.createElem(a)).cloneNode():c.createElem(a);return b.canHaveChildren&&!s.test(a)?c.frag.appendChild(b):b}function t(a,b){if(!b.cache)b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag();
a.createElement=function(c){return!e.shivMethods?b.createElem(c):p(c,a,b)};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+m().join().replace(/\w+/g,function(a){b.createElem(a);b.frag.createElement(a);return'c("'+a+'")'})+");return n}")(e,b.frag)}function q(a){a||(a=f);var b=i(a);if(e.shivCSS&&!j&&!b.hasCSS){var c,d=a;c=d.createElement("p");d=d.getElementsByTagName("head")[0]||d.documentElement;c.innerHTML="x<style>article,aside,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}</style>";
c=d.insertBefore(c.lastChild,d.firstChild);b.hasCSS=!!c}g||t(a,b);return a}var k=l.html5||{},s=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,r=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,j,o="_html5shiv",h=0,n={},g;(function(){try{var a=f.createElement("a");a.innerHTML="<xyz></xyz>";j="hidden"in a;var b;if(!(b=1==a.childNodes.length)){f.createElement("a");var c=f.createDocumentFragment();b="undefined"==typeof c.cloneNode||
"undefined"==typeof c.createDocumentFragment||"undefined"==typeof c.createElement}g=b}catch(d){g=j=!0}})();var e={elements:k.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup main mark meter nav output progress section summary time video",version:"3.6.2pre",shivCSS:!1!==k.shivCSS,supportsUnknownElements:g,shivMethods:!1!==k.shivMethods,type:"default",shivDocument:q,createElement:p,createDocumentFragment:function(a,b){a||(a=f);if(g)return a.createDocumentFragment();
for(var b=b||i(a),c=b.frag.cloneNode(),d=0,e=m(),h=e.length;d<h;d++)c.createElement(e[d]);return c}};l.html5=e;q(f)})(this,document);


/***  vendor/bower/css3-mediaqueries/index  ***/

if(typeof Object.create!=="function"){
Object.create=function(o){
function F(){
};
F.prototype=o;
return new F();
};
}
var ua={toString:function(){
return navigator.userAgent;
},test:function(s){
return this.toString().toLowerCase().indexOf(s.toLowerCase())>-1;
}};
ua.version=(ua.toString().toLowerCase().match(/[\s\S]+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1];
ua.webkit=ua.test("webkit");
ua.gecko=ua.test("gecko")&&!ua.webkit;
ua.opera=ua.test("opera");
ua.ie=ua.test("msie")&&!ua.opera;
ua.ie6=ua.ie&&document.compatMode&&typeof document.documentElement.style.maxHeight==="undefined";
ua.ie7=ua.ie&&document.documentElement&&typeof document.documentElement.style.maxHeight!=="undefined"&&typeof XDomainRequest==="undefined";
ua.ie8=ua.ie&&typeof XDomainRequest!=="undefined";
var domReady=function(){
var _1=[];
var _2=function(){
if(!arguments.callee.done){
arguments.callee.done=true;
for(var i=0;i<_1.length;i++){
_1[i]();
}
}
};
if(document.addEventListener){
document.addEventListener("DOMContentLoaded",_2,false);
}
if(ua.ie){
(function(){
try{
document.documentElement.doScroll("left");
}
catch(e){
setTimeout(arguments.callee,50);
return;
}
_2();
})();
document.onreadystatechange=function(){
if(document.readyState==="complete"){
document.onreadystatechange=null;
_2();
}
};
}
if(ua.webkit&&document.readyState){
(function(){
if(document.readyState!=="loading"){
_2();
}else{
setTimeout(arguments.callee,10);
}
})();
}
window.onload=_2;
return function(fn){
if(typeof fn==="function"){
_1[_1.length]=fn;
}
return fn;
};
}();
var cssHelper=function(){
var _3={BLOCKS:/[^\s{][^{]*\{(?:[^{}]*\{[^{}]*\}[^{}]*|[^{}]*)*\}/g,BLOCKS_INSIDE:/[^\s{][^{]*\{[^{}]*\}/g,DECLARATIONS:/[a-zA-Z\-]+[^;]*:[^;]+;/g,RELATIVE_URLS:/url\(['"]?([^\/\)'"][^:\)'"]+)['"]?\)/g,REDUNDANT_COMPONENTS:/(?:\/\*([^*\\\\]|\*(?!\/))+\*\/|@import[^;]+;)/g,REDUNDANT_WHITESPACE:/\s*(,|:|;|\{|\})\s*/g,MORE_WHITESPACE:/\s{2,}/g,FINAL_SEMICOLONS:/;\}/g,NOT_WHITESPACE:/\S+/g};
var _4,_5=false;
var _6=[];
var _7=function(fn){
if(typeof fn==="function"){
_6[_6.length]=fn;
}
};
var _8=function(){
for(var i=0;i<_6.length;i++){
_6[i](_4);
}
};
var _9={};
var _a=function(n,v){
if(_9[n]){
var _b=_9[n].listeners;
if(_b){
for(var i=0;i<_b.length;i++){
_b[i](v);
}
}
}
};
var _c=function(_d,_e,_f){
if(ua.ie&&!window.XMLHttpRequest){
window.XMLHttpRequest=function(){
return new ActiveXObject("Microsoft.XMLHTTP");
};
}
if(!XMLHttpRequest){
return "";
}
var r=new XMLHttpRequest();
try{
r.open("get",_d,true);
r.setRequestHeader("X_REQUESTED_WITH","XMLHttpRequest");
}
catch(e){
_f();
return;
}
var _10=false;
setTimeout(function(){
_10=true;
},5000);
document.documentElement.style.cursor="progress";
r.onreadystatechange=function(){
if(r.readyState===4&&!_10){
if(!r.status&&location.protocol==="file:"||(r.status>=200&&r.status<300)||r.status===304||navigator.userAgent.indexOf("Safari")>-1&&typeof r.status==="undefined"){
_e(r.responseText);
}else{
_f();
}
document.documentElement.style.cursor="";
r=null;
}
};
r.send("");
};
var _11=function(_12){
_12=_12.replace(_3.REDUNDANT_COMPONENTS,"");
_12=_12.replace(_3.REDUNDANT_WHITESPACE,"$1");
_12=_12.replace(_3.MORE_WHITESPACE," ");
_12=_12.replace(_3.FINAL_SEMICOLONS,"}");
return _12;
};
var _13={mediaQueryList:function(s){
var o={};
var idx=s.indexOf("{");
var lt=s.substring(0,idx);
s=s.substring(idx+1,s.length-1);
var mqs=[],rs=[];
var qts=lt.toLowerCase().substring(7).split(",");
for(var i=0;i<qts.length;i++){
mqs[mqs.length]=_13.mediaQuery(qts[i],o);
}
var rts=s.match(_3.BLOCKS_INSIDE);
if(rts!==null){
for(i=0;i<rts.length;i++){
rs[rs.length]=_13.rule(rts[i],o);
}
}
o.getMediaQueries=function(){
return mqs;
};
o.getRules=function(){
return rs;
};
o.getListText=function(){
return lt;
};
o.getCssText=function(){
return s;
};
return o;
},mediaQuery:function(s,mql){
s=s||"";
var not=false,_14;
var exp=[];
var _15=true;
var _16=s.match(_3.NOT_WHITESPACE);
for(var i=0;i<_16.length;i++){
var _17=_16[i];
if(!_14&&(_17==="not"||_17==="only")){
if(_17==="not"){
not=true;
}
}else{
if(!_14){
_14=_17;
}else{
if(_17.charAt(0)==="("){
var _18=_17.substring(1,_17.length-1).split(":");
exp[exp.length]={mediaFeature:_18[0],value:_18[1]||null};
}
}
}
}
return {getList:function(){
return mql||null;
},getValid:function(){
return _15;
},getNot:function(){
return not;
},getMediaType:function(){
return _14;
},getExpressions:function(){
return exp;
}};
},rule:function(s,mql){
var o={};
var idx=s.indexOf("{");
var st=s.substring(0,idx);
var ss=st.split(",");
var ds=[];
var dts=s.substring(idx+1,s.length-1).split(";");
for(var i=0;i<dts.length;i++){
ds[ds.length]=_13.declaration(dts[i],o);
}
o.getMediaQueryList=function(){
return mql||null;
};
o.getSelectors=function(){
return ss;
};
o.getSelectorText=function(){
return st;
};
o.getDeclarations=function(){
return ds;
};
o.getPropertyValue=function(n){
for(var i=0;i<ds.length;i++){
if(ds[i].getProperty()===n){
return ds[i].getValue();
}
}
return null;
};
return o;
},declaration:function(s,r){
var idx=s.indexOf(":");
var p=s.substring(0,idx);
var v=s.substring(idx+1);
return {getRule:function(){
return r||null;
},getProperty:function(){
return p;
},getValue:function(){
return v;
}};
}};
var _19=function(el){
if(typeof el.cssHelperText!=="string"){
return;
}
var o={mediaQueryLists:[],rules:[],selectors:{},declarations:[],properties:{}};
var _1a=o.mediaQueryLists;
var ors=o.rules;
var _1b=el.cssHelperText.match(_3.BLOCKS);
if(_1b!==null){
for(var i=0;i<_1b.length;i++){
if(_1b[i].substring(0,7)==="@media "){
_1a[_1a.length]=_13.mediaQueryList(_1b[i]);
ors=o.rules=ors.concat(_1a[_1a.length-1].getRules());
}else{
ors[ors.length]=_13.rule(_1b[i]);
}
}
}
var oss=o.selectors;
var _1c=function(r){
var ss=r.getSelectors();
for(var i=0;i<ss.length;i++){
var n=ss[i];
if(!oss[n]){
oss[n]=[];
}
oss[n][oss[n].length]=r;
}
};
for(i=0;i<ors.length;i++){
_1c(ors[i]);
}
var ods=o.declarations;
for(i=0;i<ors.length;i++){
ods=o.declarations=ods.concat(ors[i].getDeclarations());
}
var ops=o.properties;
for(i=0;i<ods.length;i++){
var n=ods[i].getProperty();
if(!ops[n]){
ops[n]=[];
}
ops[n][ops[n].length]=ods[i];
}
el.cssHelperParsed=o;
_4[_4.length]=el;
return o;
};
var _1d=function(el,s){
el.cssHelperText=_11(s||el.innerHTML);
return _19(el);
};
var _1e=function(){
_5=true;
_4=[];
var _1f=[];
var _20=function(){
for(var i=0;i<_1f.length;i++){
_19(_1f[i]);
}
var _21=document.getElementsByTagName("style");
for(i=0;i<_21.length;i++){
_1d(_21[i]);
}
_5=false;
_8();
};
var _22=document.getElementsByTagName("link");
for(var i=0;i<_22.length;i++){
var _23=_22[i];
if(_23.getAttribute("rel").indexOf("style")>-1&&_23.href&&_23.href.length!==0&&!_23.disabled){
_1f[_1f.length]=_23;
}
}
if(_1f.length>0){
var c=0;
var _24=function(){
c++;
if(c===_1f.length){
_20();
}
};
var _25=function(_26){
var _27=_26.href;
_c(_27,function(_28){
_28=_11(_28).replace(_3.RELATIVE_URLS,"url("+_27.substring(0,_27.lastIndexOf("/"))+"/$1)");
_26.cssHelperText=_28;
_24();
},_24);
};
for(i=0;i<_1f.length;i++){
_25(_1f[i]);
}
}else{
_20();
}
};
var _29={mediaQueryLists:"array",rules:"array",selectors:"object",declarations:"array",properties:"object"};
var _2a={mediaQueryLists:null,rules:null,selectors:null,declarations:null,properties:null};
var _2b=function(_2c,v){
if(_2a[_2c]!==null){
if(_29[_2c]==="array"){
return (_2a[_2c]=_2a[_2c].concat(v));
}else{
var c=_2a[_2c];
for(var n in v){
if(v.hasOwnProperty(n)){
if(!c[n]){
c[n]=v[n];
}else{
c[n]=c[n].concat(v[n]);
}
}
}
return c;
}
}
};
var _2d=function(_2e){
_2a[_2e]=(_29[_2e]==="array")?[]:{};
for(var i=0;i<_4.length;i++){
_2b(_2e,_4[i].cssHelperParsed[_2e]);
}
return _2a[_2e];
};
domReady(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
els[i].checkedByCssHelper=true;
}
if(document.implementation.hasFeature("MutationEvents","2.0")||window.MutationEvent){
document.body.addEventListener("DOMNodeInserted",function(e){
var el=e.target;
if(el.nodeType===1){
_a("DOMElementInserted",el);
el.checkedByCssHelper=true;
}
},false);
}else{
setInterval(function(){
var els=document.body.getElementsByTagName("*");
for(var i=0;i<els.length;i++){
if(!els[i].checkedByCssHelper){
_a("DOMElementInserted",els[i]);
els[i].checkedByCssHelper=true;
}
}
},1000);
}
});
var _2f=function(d){
if(typeof window.innerWidth!="undefined"){
return window["inner"+d];
}else{
if(typeof document.documentElement!="undefined"&&typeof document.documentElement.clientWidth!="undefined"&&document.documentElement.clientWidth!=0){
return document.documentElement["client"+d];
}
}
};
return {addStyle:function(s,_30){
var el=document.createElement("style");
el.setAttribute("type","text/css");
document.getElementsByTagName("head")[0].appendChild(el);
if(el.styleSheet){
el.styleSheet.cssText=s;
}else{
el.appendChild(document.createTextNode(s));
}
el.addedWithCssHelper=true;
if(typeof _30==="undefined"||_30===true){
cssHelper.parsed(function(_31){
var o=_1d(el,s);
for(var n in o){
if(o.hasOwnProperty(n)){
_2b(n,o[n]);
}
}
_a("newStyleParsed",el);
});
}else{
el.parsingDisallowed=true;
}
return el;
},removeStyle:function(el){
return el.parentNode.removeChild(el);
},parsed:function(fn){
if(_5){
_7(fn);
}else{
if(typeof _4!=="undefined"){
if(typeof fn==="function"){
fn(_4);
}
}else{
_7(fn);
_1e();
}
}
},mediaQueryLists:function(fn){
cssHelper.parsed(function(_32){
fn(_2a.mediaQueryLists||_2d("mediaQueryLists"));
});
},rules:function(fn){
cssHelper.parsed(function(_33){
fn(_2a.rules||_2d("rules"));
});
},selectors:function(fn){
cssHelper.parsed(function(_34){
fn(_2a.selectors||_2d("selectors"));
});
},declarations:function(fn){
cssHelper.parsed(function(_35){
fn(_2a.declarations||_2d("declarations"));
});
},properties:function(fn){
cssHelper.parsed(function(_36){
fn(_2a.properties||_2d("properties"));
});
},broadcast:_a,addListener:function(n,fn){
if(typeof fn==="function"){
if(!_9[n]){
_9[n]={listeners:[]};
}
_9[n].listeners[_9[n].listeners.length]=fn;
}
},removeListener:function(n,fn){
if(typeof fn==="function"&&_9[n]){
var ls=_9[n].listeners;
for(var i=0;i<ls.length;i++){
if(ls[i]===fn){
ls.splice(i,1);
i-=1;
}
}
}
},getViewportWidth:function(){
return _2f("Width");
},getViewportHeight:function(){
return _2f("Height");
}};
}();
domReady(function enableCssMediaQueries(){
var _37;
var _38={LENGTH_UNIT:/[0-9]+(em|ex|px|in|cm|mm|pt|pc)$/,RESOLUTION_UNIT:/[0-9]+(dpi|dpcm)$/,ASPECT_RATIO:/^[0-9]+\/[0-9]+$/,ABSOLUTE_VALUE:/^[0-9]*(\.[0-9]+)*$/};
var _39=[];
var _3a=function(){
var id="css3-mediaqueries-test";
var el=document.createElement("div");
el.id=id;
var _3b=cssHelper.addStyle("@media all and (width) { #"+id+" { width: 1px !important; } }",false);
document.body.appendChild(el);
var ret=el.offsetWidth===1;
_3b.parentNode.removeChild(_3b);
el.parentNode.removeChild(el);
_3a=function(){
return ret;
};
return ret;
};
var _3c=function(){
_37=document.createElement("div");
_37.style.cssText="position:absolute;top:-9999em;left:-9999em;"+"margin:0;border:none;padding:0;width:1em;font-size:1em;";
document.body.appendChild(_37);
if(_37.offsetWidth!==16){
_37.style.fontSize=16/_37.offsetWidth+"em";
}
_37.style.width="";
};
var _3d=function(_3e){
_37.style.width=_3e;
var _3f=_37.offsetWidth;
_37.style.width="";
return _3f;
};
var _40=function(_41,_42){
var l=_41.length;
var min=(_41.substring(0,4)==="min-");
var max=(!min&&_41.substring(0,4)==="max-");
if(_42!==null){
var _43;
var _44;
if(_38.LENGTH_UNIT.exec(_42)){
_43="length";
_44=_3d(_42);
}else{
if(_38.RESOLUTION_UNIT.exec(_42)){
_43="resolution";
_44=parseInt(_42,10);
var _45=_42.substring((_44+"").length);
}else{
if(_38.ASPECT_RATIO.exec(_42)){
_43="aspect-ratio";
_44=_42.split("/");
}else{
if(_38.ABSOLUTE_VALUE){
_43="absolute";
_44=_42;
}else{
_43="unknown";
}
}
}
}
}
var _46,_47;
if("device-width"===_41.substring(l-12,l)){
_46=screen.width;
if(_42!==null){
if(_43==="length"){
return ((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("device-height"===_41.substring(l-13,l)){
_47=screen.height;
if(_42!==null){
if(_43==="length"){
return ((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("width"===_41.substring(l-5,l)){
_46=document.documentElement.clientWidth||document.body.clientWidth;
if(_42!==null){
if(_43==="length"){
return ((min&&_46>=_44)||(max&&_46<_44)||(!min&&!max&&_46===_44));
}else{
return false;
}
}else{
return _46>0;
}
}else{
if("height"===_41.substring(l-6,l)){
_47=document.documentElement.clientHeight||document.body.clientHeight;
if(_42!==null){
if(_43==="length"){
return ((min&&_47>=_44)||(max&&_47<_44)||(!min&&!max&&_47===_44));
}else{
return false;
}
}else{
return _47>0;
}
}else{
if("device-aspect-ratio"===_41.substring(l-19,l)){
return _43==="aspect-ratio"&&screen.width*_44[1]===screen.height*_44[0];
}else{
if("color-index"===_41.substring(l-11,l)){
var _48=Math.pow(2,screen.colorDepth);
if(_42!==null){
if(_43==="absolute"){
return ((min&&_48>=_44)||(max&&_48<_44)||(!min&&!max&&_48===_44));
}else{
return false;
}
}else{
return _48>0;
}
}else{
if("color"===_41.substring(l-5,l)){
var _49=screen.colorDepth;
if(_42!==null){
if(_43==="absolute"){
return ((min&&_49>=_44)||(max&&_49<_44)||(!min&&!max&&_49===_44));
}else{
return false;
}
}else{
return _49>0;
}
}else{
if("resolution"===_41.substring(l-10,l)){
var res;
if(_45==="dpcm"){
res=_3d("1cm");
}else{
res=_3d("1in");
}
if(_42!==null){
if(_43==="resolution"){
return ((min&&res>=_44)||(max&&res<_44)||(!min&&!max&&res===_44));
}else{
return false;
}
}else{
return res>0;
}
}else{
return false;
}
}
}
}
}
}
}
}
};
var _4a=function(mq){
var _4b=mq.getValid();
var _4c=mq.getExpressions();
var l=_4c.length;
if(l>0){
for(var i=0;i<l&&_4b;i++){
_4b=_40(_4c[i].mediaFeature,_4c[i].value);
}
var not=mq.getNot();
return (_4b&&!not||not&&!_4b);
}
};
var _4d=function(mql){
var mqs=mql.getMediaQueries();
var t={};
for(var i=0;i<mqs.length;i++){
if(_4a(mqs[i])){
t[mqs[i].getMediaType()]=true;
}
}
var s=[],c=0;
for(var n in t){
if(t.hasOwnProperty(n)){
if(c>0){
s[c++]=",";
}
s[c++]=n;
}
}
if(s.length>0){
_39[_39.length]=cssHelper.addStyle("@media "+s.join("")+"{"+mql.getCssText()+"}",false);
}
};
var _4e=function(_4f){
for(var i=0;i<_4f.length;i++){
_4d(_4f[i]);
}
if(ua.ie){
document.documentElement.style.display="block";
setTimeout(function(){
document.documentElement.style.display="";
},0);
setTimeout(function(){
cssHelper.broadcast("cssMediaQueriesTested");
},100);
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
};
var _50=function(){
for(var i=0;i<_39.length;i++){
cssHelper.removeStyle(_39[i]);
}
_39=[];
cssHelper.mediaQueryLists(_4e);
};
var _51=0;
var _52=function(){
var _53=cssHelper.getViewportWidth();
var _54=cssHelper.getViewportHeight();
if(ua.ie){
var el=document.createElement("div");
el.style.position="absolute";
el.style.top="-9999em";
el.style.overflow="scroll";
document.body.appendChild(el);
_51=el.offsetWidth-el.clientWidth;
document.body.removeChild(el);
}
var _55;
var _56=function(){
var vpw=cssHelper.getViewportWidth();
var vph=cssHelper.getViewportHeight();
if(Math.abs(vpw-_53)>_51||Math.abs(vph-_54)>_51){
_53=vpw;
_54=vph;
clearTimeout(_55);
_55=setTimeout(function(){
if(!_3a()){
_50();
}else{
cssHelper.broadcast("cssMediaQueriesTested");
}
},500);
}
};
window.onresize=function(){
var x=window.onresize||function(){
};
return function(){
x();
_56();
};
}();
};
var _57=document.documentElement;
_57.style.marginLeft="-32767px";
setTimeout(function(){
_57.style.marginTop="";
},20000);
return function(){
if(!_3a()){
cssHelper.addListener("newStyleParsed",function(el){
_4e(el.cssHelperParsed.mediaQueryLists);
});
cssHelper.addListener("cssMediaQueriesTested",function(){
if(ua.ie){
_57.style.width="1px";
}
setTimeout(function(){
_57.style.width="";
_57.style.marginLeft="";
},0);
cssHelper.removeListener("cssMediaQueriesTested",arguments.callee);
});
_3c();
_50();
}else{
_57.style.marginLeft="";
}
_52();
};
}());
try{
document.execCommand("BackgroundImageCache",false,true);
}
catch(e){
}
;


/***  vendor/bower/fxcanvas/jooscript  ***/

/*! JooScript basics v0.1(beta3) (20110205)
	- copyright 2009-2011, Evgeny Burzak <http://burzak.com/proj/jooscript-basics>
	- released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

__FILE__=__PATH__=__FUNC__=__CLASS__=__GROUP__=__LINE__="";
(function(){if(typeof $jooscript=="undefined"){(function(){function f(){function o(){return o.caller===f}return!o.apply(null,[])}var k=f(),h=Function.prototype;if(k){h.__native__apply=h.apply;h.__native__call=h.call;h.apply=function o(x,v){this.__caller__=o.caller;return this.__native__apply(x,v)};h.call=function o(){this.__caller__=o.caller;return this.__native__call.__native__apply(this,arguments)}}h["new"]=function(){var o={};o.__proto__=this.prototype;var x=this.apply(o,arguments);return x!==
null&&typeof x==="object"?x:o}})();(function(){var f=typeof window;$globals=(f=!(f=="undefined"||f=="object"&&window==null))?window:this;var k=!!$globals.navigator;$root=$globals.document?document:{};$isCLI=!k;$isWorker=!$isCLI&&!f})();addDOMLoadEvent=function(){function f(){f.done=true;for(clearInterval(h);x=k.shift();)x();if(o)o.onreadystatechange=""}var k=[],h,o,x,v;$globals.__init__=f;return function(y){if(f.done)return y();if(!k[0]){!$root.__w3c_fake&&$root.addEventListener&&$root.addEventListener("DOMContentLoaded",
f,false);eval("/*@cc_on @*/");eval('/*@if(@_win32)document.write("<script id=__ie_onload defer src=//0></scr"+"ipt>");script=document.getElementById("__ie_onload");script.onreadystatechange=function(){if(this.readyState=="complete")__init__();};document.onreadystatechange=function(){if(document.readyState=="complete"){__init__();document.onreadystatechange=null;}}@*//*@end@*/');if(!$isCLI&&!$isWorker)if(/WebKit/i.test(navigator.userAgent))h=setInterval(function(){/loaded|complete/.test(document.readyState)&&
f()},10);v=$globals.onload;$globals.onload=function(){f();v&&v()}}k.push(y)}}();var ha=function(){function f(){if(f.caller===f)return this;var b=new f;b.useCapture=false;b.__class__=f;var c=f.prototype.__new__,g=f.prototype.when,r=f.prototype.dispatch,p=f.prototype.remove;c(b);b.when=function(w,u,i){return g(b,w,u,i,false)};b.once=function(w,u,i){return g(b,w,u,i,true)};b.dispatch=function(w,u){return r(b,w,u)};b.remove=function(w,u){return p(b,w,u)};return b}function k(b){b=(typeof b=="string"?b:
b.type).toLowerCase();if(b==x)return v;return b}function h(b,c){for(var g,r,p=0;p<c.length;p++)if(g=c[p])if(g.type==b){var w;try{r=g.handler.call(g.context,{})}catch(u){w=u}if(g.fireOnce)c[p]=null;if(w)throw w;if(r)break}}var o=[];f.className="Event";var x="DOMContentLoaded",v="contentloaded";f.prototype={__class__:f,__new__:function(b){b.__listeners__=[]},when:function(b,c,g,r,p){var w;if(r==undefined||r==null){r=g;w=o}else w=b.__listeners__;c=k(c);c==v&&addDOMLoadEvent(function(){h(v,w)});w.push({type:c,
handler:r,context:b,fireOnce:p})},dispatch:function(b,c,g){c=k(c);h(c,g==undefined?o:b.__listeners__)},remove:function(b,c,g,r){if(r==undefined){r=g;b=o}else b=b.__listeners__;c=k(c);r=r;b=b;for(var p=0;p<b.length;p++)if(g=b[p])if(g.type==c&&g.handler===r)b[p]=null}};f["new"]=function(){return new this};var y=f();f.when=y.when;f.once=y.once;f.dispatch=y.dispatch;f.remove=y.remove;return f}(),Ya=function(){var f=function(h){this.code=this[h];this.message=h+": DOM Exception "+this.code},k=f.prototype=
Error();k.INDEX_SIZE_ERR=1;k.DOMSTRING_SIZE_ERR=2;k.HIERARCHY_REQUEST_ERR=3;k.WRONG_DOCUMENT_ERR=4;k.INVALID_CHARACTER_ERR=5;k.NO_DATA_ALLOWED_ERR=6;k.NO_MODIFICATION_ALLOWED_ERR=7;k.NOT_FOUND_ERR=8;k.NOT_SUPPORTED_ERR=9;k.INUSE_ATTRIBUTE_ERR=10;k.INVALID_STATE_ERR=11;k.SYNTAX_ERR=12;k.INVALID_MODIFICATION_ERR=13;k.NAMESPACE_ERR=14;k.INVALID_ACCESS_ERR=15;k.VALIDATION_ERR=16;k.TYPE_MISMATCH_ERR=17;$globals.DOMException||($globals.DOMException=f);return f}();(function(){function f(i,q){for(var s in q)if(!(s in
Object.prototype))if(s!="__w3c_fake"&&s!="toString"&&s!="__proto__"&&s!="valueOf")i[s]=q[s]}function k(){return{type:null,target:null,relatedTarget:null,currentTarget:null,offsetParent:null,offsetTop:null,offsetLeft:null,screenX:null,screenY:null,pageX:null,pageY:null,altKey:null,shiftKey:null,ctrlKey:null,metaKey:null,button:null,mouseButton:null,charCode:null,keyCode:null,IEvent:$root.createEventObject(),preventDefault:function(){event.returnValue=false},stopPropagation:function(){event.cancelBubble=
true}}}function h(i,q,s){if(arguments.length<3)throw Error("Not enough arguments");if(typeof q!="function")throw Error("Event handler is not a function");i=""+i;s=!!s;var H="opener"in this;if(i in g)if(!(this.tagName&&this.tagName.toLowerCase()in c||this===$root||H))return;var z=k();H=H&&(i in g||i in r)?b:this;var I=this,D="__ievent_hdlr_"+(s?"capture":"nocapture"),S=function(){z.type=event.type;z.target=event.srcElement;z.relatedTarget=event.fromElement||event.toElement||null;z.currentTarget=I;
z.offsetParent=event.srcElement&&event.srcElement.parentNode||null;z.offsetTop=event.offsetX;z.offsetLeft=event.offsetY;z.screenX=event.screenX;z.screenY=event.screenY;z.pageX=event.clientX+$root.body.scrollLeft+$root.documentElement.scrollLeft;z.pageY=event.clientY+$root.body.scrollTop+$root.documentElement.scrollTop;z.altKey=event.altKey;z.shiftKey=event.shiftKey;z.ctrlKey=event.ctrlKey;z.metaKey=false;z.keyCode=event.keyCode;z.charCode=i=="keypress"?event.keyCode:0;if(event.button==1)z.button=
0;else if(event.button==2)z.button=2;else if(event.button==4)z.button=1;z.mouseButton=event.button;q.call(I,z)},W=function(){var V=event,A={type:""};A.type=i;if(i==="DOMAttrModified"){A.ADDITION=2;A.MODIFICATION=1;A.REMOVAL=3;A.target=V.srcElement;A.relatedNode=null;A.attrChange=1;A.attrName=V.propertyName.split(".")[0];A.prevValue=null;A.newValue=A.target[A.attrName];if(A.attrName=="innerHTML"||A.attrName=="innerText"||typeof A.newValue=="function")return}q.call(I,A)};q[D]=i.indexOf("DOM")===0?W:
S;if(i==="DOMContentLoaded")addDOMLoadEvent(q[D]);else i==="DOMAttrModified"?H.attachEvent("onpropertychange",q[D]):H.attachEvent("on"+i,q[D])}function o(i,q,s){s="__ievent_hdlr_"+(s?"cap":"nocap");q[s]&&this.detachEvent("on"+i,q[s])}function x(i){return this.fireEvent("on"+i.type,i.IEvent)}function v(){for(var i=arguments,q,s=0;s<i.length;s++)if(i[s]){if(typeof i[s]=="string")q=$root.getElementById(i[s]);else if(typeof i[s]=="object")q=i[s];if(!q.__w3c_fake){q.addEventListener=h;q.removeEventListener=
o;q.dispatchEvent=x;q.__w3c_fake=true}}}if(!($isCLI||$isWorker)){var y=$globals,b=$root;if(b.uniqueID&&b.expando){if(!y.__w3c_fake){var c={textarea:true,input:true,select:true,body:true},g={keydown:"keydown",keyup:"keyup",keypress:"keypress"},r={mouseenter:"mouseenter",mouseleave:"mouseleave",mousemove:"mousemove",mouseup:"mouseup",mousedown:"mousedown",click:"click"},p;$root.__native__createElement=$root.createElement;$root.createElement=function(i){if(/^[a-z]+$/i.test(i))i=i.toUpperCase();i=$root.__native__createElement(i);
var q=window,s;s=i.tagName.toLowerCase();s=s.substr(0,1).toUpperCase()+s.substr(1);i=(q=q["HTML"+s+"Element"])&&q.__IElementConstructor?q.__IElementConstructor(i):i;v(i);p.__w3c_fake&&f(i,p.prototype);q&&q.__w3c_fake&&f(i,q.prototype);return i};$root.createEvent=function(i){var q=k();if(i=="MouseEvents"||i=="MouseEvent")q.initMouseEvent=function(s,H,z,I,D,S,W,V,A,ba,K,T,pa,ia,qa){this.type=this.IEvent.type=s;this.bubbles=H;this.cancelable=z;this.view=I;this.detail=D;this.screenX=S;this.screenY=W;
this.clientX=V;this.clientY=A;this.ctrlKey=ba;this.altKey=K;this.shiftKey=T;this.metaKey=pa;this.button=ia;this.relatedTarget=qa};else if(i=="KeyboardEvent"||i=="KeyEvents")q.initKeyEvent=function(s,H,z,I,D,S,W,V,A,ba){this.type=this.IEvent.type=s;this.bubbles=H;this.cancelable=z;this.view=I;this.ctrlKey=D;this.altKey=S;this.shiftKey=W;this.keyCode=A;this.charCode=ba};else q.initEvent=function(s,H,z){this.type=this.IEvent.type=s;this.bubbles=H;this.cancelable=z};return q};b.defaultView=y;y.getComputedStyle=
function(i){return{getPropertyValue:function(q){return i.currentStyle[q]}}};v.all=function(){for(var i=b.all,q=0;q<i.length;q+=1)v(i[q])};y.w3c=v;for(var w=["HTMLElement"],u=0;u<w.length;u++)y[w[u]]||(y[w[u]]={prototype:{},__elementName:w[u],toString:function(){return"[object "+this.__elementName+"]"},__w3c_fake:true});p=y.HTMLElement}}else{y.w3c=function(){};w3c.all=w3c}}})();(function(){var f=typeof $trace_disable!="undefined"?$trace_disable:$isWorker;if(typeof console=="undefined")$globals.console=
{log:function(){for(var k=[],h=0;h<arguments.length;h++)k.push(arguments[h]);typeof alert=="undefined"?print.apply(null,k):alert(k.join(", "))},dir:function(){}};$globals.trace=!f?function(){console&&console.log(["trace: ",Array.prototype.slice.call(arguments,0).join(" ")].join(""))}:function(){}})();(function(){function f(a){a=new ra(a===undefined?"":a);a.__type__=f.type<<16|ca|B;a.__class__=f;return a}function k(a){a=new Aa(a===undefined?false:a);a.__type__=k.type<<16|da|B;a.__class__=k;return a}
function h(a){a=J(a===undefined?0:a);if(a==Infinity||a==-Infinity){a=new J(a);a.__type__=ea}else if(a===a){a=new J(a);a.__type__=fa}else{a=new J(NaN);a.__type__=ga}a.__type__|=h.type<<16|B;a.__class__=h;return a}function o(a){a=J(a===undefined?0:a);if(a==Infinity||a==-Infinity){a=new J(a);a.__type__=ea}else if(a===a){a=new J(a|0);a.__type__=X}else{a=new J(NaN);a.__type__=ga}a.__type__|=o.type<<16|B;a.__class__=o;return a}function x(a){a=J(a===undefined?0:a);if(a==Infinity||a==-Infinity){a=new J(a);
a.__type__=ea}else if(a===a){a=new J(Math.abs(a|0));a.__type__=Y}else{a=new J(NaN);a.__type__=ga}a.__type__|=x.type<<16|B;a.__class__=x;return a}function v(a){a=new J(a===undefined?0:a);a.__type__=(a==Infinity||a==-Infinity?ea:a+0===a+0?F:ga)|v.type<<16|B;a.__class__=v;return a}function y(){return null}function b(){}function c(a){throw TypeError(a);}function g(a){for(var d={},e=0;e<a.length;e++)d[a[e][0]]=a[e][1];return d}function r(){}function p(a,d){var e=a.split(Ma);e=Na(e);d.call(e,e)}function w(a){this.__groupToken__=
a}function u(a,d,e){if(e===undefined)e=Oa;for(var t in d)if(e[t]===undefined)a[t]=d[t];return a}function i(a,d,e){d||(d=a);for(var t=d.ancestors,m,n=0;n<t.length;n++){m=t[n];if(K(m))throw Error("Undefined ancestor in class "+a.className);m!=a&&m!=d&&i(a,m,e);m.classBody.call(a.prototype,a);if(m.className)a.ancestors[m.className]=m}}function q(){}function s(a,d,e,t){function m(j){return j===m?this:m["new"].apply(m,arguments)}function n(){var j=m;i(j);j.classBody.call(j.prototype,j);D(j.__init__)&O&&
j.__init__();m["new"]=z}m.prototype=new I;m.className=a;m.classBody=e||q;m.ancestors=[];m.role=M();if(d&&d.length>0)for(a=0;a<d.length;a++)if(T(d[a])){m.ancestors[a]=d[a];m.role.inherit(d[a].role)}else c(d[a]+" is not a class");m.role.inherit(t||{});Ba.once("initialize",n);A(m);Pa&&n();m.toString=V;return m}function H(){return"$"+Math.round(Math.random()*1E6).toString(33)}function z(){var a=arguments,d=new this(this,a),e=this.prototype;if(!d.__proto__)d.__proto__=e;var t=null,m=0;if(this.role)for(var n in this.role)if(!(n in
ja)){if(e[n]===undefined)throw Error(this.className+" does not match the class role");var j=this.role[n];if(j){var N=!isNaN(j)&&j+0||j.type||0;j={writable:j.internal===undefined?j.frozen===undefined?j["public"]===undefined?true:j["public"]:!j.frozen:!j.internal,configurable:j.internal===undefined?j.sealed===undefined?j["public"]===undefined?true:j["public"]:!j.sealed:!j.internal,enumerable:j.internal===undefined?j.hidden===undefined?j["public"]===undefined?true:j["public"]:!j.hidden:!j.internal,type:!isNaN(j)&&
j+0||j.type||0,constructor:typeof j.constructor==="function"?false:j.constructor,returnType:j.returnType,argumentType:j.argumentType};if(!Ca)if(j.writable+j.configurable+j.enumerable<3)throw Error("browser is not ECMAScript 5 compliant. Please upgrade your browser!");if(N)if((N^O)&ka)j.value=e[n];else{if(N&O){N=j;var Qa=d,la=n,R=Ra&&j.returnType||null,Da=Ra&&j.argumentType||[],U=this.type+"-"+la,P=Ea[U],Sa=this.prototype,sa=Sa[la];if(P===undefined||P.fun!==sa){P=H();var Fa=H(),G=sa.toString().replace(/\/\*.*\*\//g,
"").match(/function(\s+)?([a-zA-Z\$_0-9]+)?(\s+)?\(([a-zA-Z\$_0-9,\s]+)\)/),ta=void 0,Q=void 0,E=void 0,ua=void 0,ma=void 0,Z="",L=void 0,Ga=0;if(G&&G.length>1){G=G[4].replace(/\s+/g,"").split(",");Ga=G.length-1;ta=na.call(G,1).join(",");Q=G[0];if(Da.length){Z=[];for(E=1;E<G.length;E++){L=Da[E-1];if(K(L))Z[E-1]=G[E];else if(L.__type__&F)Z[E-1]=G[E]+".__type__ & "+(L+0)+" ? "+G[E]+" : "+P+"("+Fa+")";else if(T(L))Z[E-1]=G[E]+".__class__.type === "+L.type+" ? "+G[E]+" : "+P+"("+Fa+")";else c("argument type is not a number or a class")}}else Z=
ta;E=G[G.length-1];if(E=="__rest__"){ua="__rest__";ma=G.length-1}}else{ta="";Q="self"}E=H();G=H();L=void 0;if(K(R))L="";else if(R&(va|wa))L=Q+" === null || "+Q+" === undefined";else if(R.__type__&F)L=Q+".__type__ & "+(R+0);else if(T(R))L=Q+".__class__.type === "+R.type;else c("return type is not a number or a class");R=[Da.length?"var "+Fa+"='argument type does not match a class spec';":"","return function(",ta,") {",ua?["if(arguments.length>=",ma,"){",ua,"=[arguments[",ma-1,"]];for(var ",E,"=",ma,
";",E,"<arguments.length;",E,"++)",ua,"[",E,"-",ma-1,"]=arguments[",E,"];} else "].join(""):"","if(arguments.length !== ",Ga,")",P,"('",la," takes exactly ",Ga," arguments ('+arguments.length+' given)');",R?Q+"=":"return ",G,".",la,"(",Q,Z.length?[",",Z].join(""):"",")",L?";return "+L+"?"+Q+":"+P+"('return type does not match a class spec')":"","}"].join("");P=Ea[U]=Function(Q,G,P,R);P.fun=sa}U=P(Qa,Sa,c);U.__name__=la;U.__owner__=Qa;U.__func__=sa;U.toString=W;N.value=U;if(j.constructor)if(m)throw Error(this.className+
" has multiple constructors at once");else{t=j.value;m+=1}}}else j.value=e[n];if(Ca)Ta(d,n,j);else d[n]=j.value}}e=0;m=z.caller||z.__caller__;for(n=null;m;){if(m.__owner__){n=m.__owner__;break}m=m.caller;if(e>1E3){n=null;break}e++}d.parent=n;d.__class__=this;e=null;if(D(t)&O&&t!==this&&t!==Ha)e=t.apply(d,a);return D(e)&B?e:d}function I(){}function D(a){if(a===undefined)return wa;else if(a===null)return va;else if(a.__type__===undefined||a.__type__===null)switch(typeof a){case "number":return F;case "string":return ca;
case "function":return O;case "boolean":return da;case "object":return B}else return a.__type__}function S(a){var d=D(a);d&B||c(a+" is not an object");return T(a.__class__)?a.__class__:d&X^F?o:d&Y^F?x:d&fa^F?h:d&da^F?k:d&F?v:d&ca?f:d&O?Ia:d&ka?I:d&Ja?xa:d&B?$:null}function W(){return"function wrapped(){/*stub*/}"}function V(){return["class ",this.className||"Anonymous","(...)"].join("")}function A(a){var d;if(K(a.type)){if(K(d))d=++Ka}else d=a.type;if(!K(ya[d]))throw Error("A class has already registered in the roaster");
if(D(a)===O){var e=a.prototype;if(!a.className){var t=a.toString().match(/function(\s+)?([a-zA-Z\$_0-9]+)?/);a.className=t&&t[2]||null}e.__class__=a;if(K(e.__proto__))e.__proto__=e;if(!a.role)a.role=M();a.__type__=ka;a.type=d}ya[d]=a}function ba(){for(var a=0;a<arguments.length;a++)A(arguments[a])}function K(a){return a===undefined||a===null}function T(a){return!K(a)&&ya[a.type]===a}function pa(a,d,e){var t=aa();ia(t,"joo.*");t.__path__=a;t.__file__=d;e.call(t,t,Za,l)}function ia(a){var d,e,t,m,n=
na.call(arguments,1);if(typeof a=="string"){n=na.call(arguments,0);a=this}for(var j=0;j<n.length;j++){d=n[j];e=d.split(Ma);t=$a.call(e);e=t=="*"?na.call(e,0,e.length-1):e;try{m=Na(e)}catch(N){throw Error(N.message+" in "+d);}if(t==="*")u(a,m,w.prototype);else a[t]=m}return a}function qa(){}function Na(a,d){var e=l[za],t=e,m,n;if(a.length==1&&!a[0])return t;for(n=0;n<a.length;n++){m=a[n];if(!e.__groupToken__)throw Error("Token '"+m+"' is not group token");t=e[m];if(typeof t=="undefined")if(d)throw Error("Token "+
m+" not found");else t=e=e[m]=new w(m);else if(n==a.length-1)break;else{e=t;t=e[m]}}return t}function C(){if(!arguments.length)throw Error("Type is not constructor!");}function M(a,d){if(a===M)return this;var e=new M(M);d&&e.inherit(d);a&&e.inherit(a);return e}function Ua(a,d){for(var e in a)if(!(e in ja))if(K(d[e]))return null;return d}function La(a,d){if(K(a))a=0;if(K(d))d=o(32);if(typeof ArrayBuffer==="undefined"){var e=typeof a==="object"?a:Array(a);e.buffer=e;e.set=function(j){for(var N=0;N<
e.buffer.length;N++)e.buffer[N]=j[N]};return e}var t=D(a)==B?a.length:a,m=new ArrayBuffer(t*d),n=D(d)^F;if(n&X&&d+0==8)n=Int8Array;else if(n&Y&&d+0==8)n=Uint8Array;else if(n&X&&d+0==16)n=Int16Array;else if(n&Y&&d+0==16)n=Uint16Array;else if(n&X&&d+0==32)n=Int32Array;else if(n&Y&&d+0==32)n=Uint32Array;else if(n&fa&&d+0==32)n=Float32Array;else if(n&fa&&d+0==64)n=Float64Array;else throw Error("VectorArray: syntax error");e=new n(m,0,t);D(a)==B&&e.set(a);return e}function aa(a,d){if(a===aa)return this;
var e=new aa(aa);if(arguments.length==1){d=a;d=undefined}e.prefix=a;e.uri=d;return e}function xa(){na.call(arguments,0).join("")}function Va(){$globals.detachEvent("onbeforeunload",Va);Ea=ya=null;$globals[za]=null;oa||(l.Number=l.Float=l.Int=l.Uint=l.Boolean=l.String=l.VectorArray=l.Null=l.Void=l.Role=l.Class=l.Type=l.dict=l.zip=null);l.$Unit=l.$Package=l.$Import=l.$ImportFrom=l.$Namespace=l.$buildClass=l.$Event=null;if(l.XML)l.XML=null}var l=$globals,Za=$root,Pa=false,oa=typeof $joo_compat!=="undefined"?
$joo_compat:true,Ra=typeof $use_runtime_typing!=="undefined"?$use_runtime_typing:true,B,F,X,Y,fa,ca,da,O,ka,Ja,va,wa,ea,ga;B=1;F=2;ea=F|128;ga=F|256;X=F|4;Y=F|8;fa=F|16;da=F|32;ca=64;O=B|512;ka=B|O|1024;Ja=B|2048;wa=4096;va=8192;var J=Number,ra=String,Aa=Boolean,Ha=Object,Wa=Function,$=Ha,Ia=Wa;f.fromCharCode=ra.fromCharCode;v.prototype=h.prototype=o.prototype=J.prototype;f.prototype=ra.prototype;k.prototype=Aa.prototype;v["new"]=h["new"]=o["new"]=f["new"]=k["new"]=y["new"]=b["new"]=function(a,d){return this(a,
d)};var za="$groups",Ma=".",na=Array.prototype.slice,$a=function(){return this[this.length-1]},Ba=ha();(function(a){this.message=a}).prototype=Error();w.prototype={__groupToken__:null};var Oa={__proto__:null,__class__:null,__type__:null},ya=[],Ea={};I.prototype={__class__:null,parent:null,toString:function(){return this.__str__?this.__str__():["[class ",this.__class__&&this.__class__.className||"Anonymous","]"].join("")}};I["new"]=z;I.registerClasses=ba;var Xa=typeof Object.getPrototypeOf==="function"?
Object.getPrototypeOf:function(a){D(a)&B||c("x is not object");return typeof a.__proto__==="object"?a.__proto__:Object.prototype},Ta=typeof Object.defineProperty==="function"?Object.defineProperty:function(){},Ca=function(){try{var a={};Ta(a,"x",{value:1,writeable:false,enumerable:false,configurable:false});if(a.x===undefined)return false;a.x=2;if(a.x===2)return false;delete a.x;if(a.x===undefined)return false;for(var d in a)if(d==="x")return false;return true}catch(e){return false}}(),Ka=0;C.getTypeId=
function(){return++Ka};M.type=++Ka;M.prototype={match:function(a){D(a)&B||c(a+" is not an object");return Ua(this,a)},inherit:function(a){D(a)&B||c(a+" is not an object");u(this,a,ja)},__type__:M.type<<16|B};var ja={};u(ja,Oa,{});u(ja,M.prototype);M.match=Ua;l[za]={};l[za].__groupToken__="root";l.$Unit=pa;l.$Package=p;l.$Import=ia;l.$ImportFrom=qa;l.$Event=ha;l.$buildClass=s;if(!oa)$.extend=u;if(typeof $.getPrototypeOf!=="function")$.getPrototypeOf=Xa;if(typeof $.getClassOf!=="function")$.getClassOf=
S;if(!oa){l.Number=v;l.Float=h;l.Int=o;l.Uint=x;l.Boolean=k;l.String=f;l.VectorArray=La;l.Null=y;l.Void=b;l.Role=M;l.Class=I;l.Type=C}if(!l.XML)if(!oa){l.XML=xa;l.Namespace=aa}if(typeof window!="undefined")l.$window=window;if(typeof document!="undefined")l.$document=document;C.isVoid=K;C.isPrimitive=function(a){try{return Xa(a)===Object.prototype}catch(d){return false}};C.isClass=T;C.isObject=function(a){return!!(D(a)&B)};C.is_a=function(a,d){try{return T(d)?S(a)===d:false}catch(e){return false}};
C.getTypeOf=D;C.NUMBER=F;C.INT=X;C.UINT=Y;C.FLOAT=fa;C.BOOLEAN=da;C.STRING=ca;C.VOID=wa;C.NULL=va;C.OBJECT=B;C.FUNCTION=O;C.CLASS=ka;C.XML=Ja;C.NAN=ga;C.INFINITY=ea;if(!oa){Ha.prototype.__type__=B;Wa.prototype.__type__=O}ra.prototype.__type__=ca;Aa.prototype.__type__=da;J.prototype.__type__=F;p("joo",function(a){a.Number=v;a.Float=h;a.Int=o;a.Uint=x;a.Null=y;a.Void=b;a.Object=$;a.Boolean=k;a.String=f;a.VectorArray=La;a.Type=C;a.Role=M;a.Import=ia;a.ImportFrom=qa;a.Package=p;a.Unit=pa;a.Namespace=
aa;a.Group=w;a.Function=Ia;a.Class=I;a.XML=xa;a.Event=ha;a.buildClass=s});p("joo.object",function(a){a.extend=u;a.dict=g;a.zip=r});p("platform",function(a){a.ecmascript5compliant=Ca});Ba.once("contentloaded",function(){Pa=true;Ba.dispatch("initialize")});ba(v,o,x,h,f,k,Ia,y,b,I,aa,xa,La,ha);$globals.attachEvent&&$globals.attachEvent("onbeforeunload",Va)})();$Unit(__PATH__,__FILE__,function(f){f.Package("w3c",function(k){k.DOMException=Ya})});$Unit(__PATH__,__FILE__,function(f,k){$Package("platform",
function(h){function o(r){for(var p=0;p<r.length;p++){var w=r[p].s,u=r[p].p;g=r[p].v||r[p].i;if(w){if(w.indexOf(r[p].u)!=-1)return r[p].i}else if(u)return r[p].i}}function x(r){var p=r.indexOf(g);if(p!=-1)return parseFloat(r.substring(p+g.length+1))}var v=!$isCLI&&navigator.appVersion,y=!$isCLI&&navigator.userAgent,b=!$isCLI&&navigator.platform,c=!$isCLI&&navigator.vendor,g;c=[{s:y,u:"Chrome",i:"Chrome"},{s:y,u:"OmniWeb",v:"OmniWeb/",i:"OmniWeb"},{s:c,u:"Apple",i:"Safari",v:"Version"},{p:$globals.opera,
i:"Opera"},{s:c,u:"iCab",i:"iCab"},{s:c,u:"KDE",i:"Konqueror"},{s:y,u:"Firefox",i:"Firefox"},{s:c,u:"Camino",i:"Camino"},{s:y,u:"Netscape",i:"Netscape"},{s:y,u:"MSIE",i:"Explorer",v:"MSIE"},{s:y,u:"Gecko",i:"Mozilla",v:"rv"},{s:y,u:"Mozilla",i:"Netscape",v:"Mozilla"}];b=[{s:b,u:"Win",i:"Windows"},{s:b,u:"Mac",i:"Mac"},{s:y,u:"iPhone",i:"iPhone/iPod"},{s:b,u:"Linux",i:"Linux"}];h.browser=$isCLI?null:o(c)||"An unknown browser";h.version=$isCLI?null:x(y)||x(v)||"an unknown version";h.OS=$isCLI?null:
o(b)||"an unknown OS";h.isIE=!!(k.uniqueID&&k.expando&&h.browser==="Explorer");h.ie=h.isIE?h.version:0;h.isFirefox=h.browser==="Firefox";h.firefox=h.isFirefox?h.version:0;h.isOpera=h.browser==="Opera";h.opera=h.isOpera?h.version:0;h.isWebKit=h.browser==="Chrome"||h.browser==="Safari";h.webkit=h.isWebKit?1:0;h.isCLI=$isCLI})});$Unit(__PATH__,__FILE__,function(f){f.Package("geom",function(k){function h(b){return["(",b.join(", "),")"].join("")}function o(b,c){if(b===o)return this;var g=new o(o);arguments.length==
2&&g.set(b,c);return g}function x(b,c,g,r){if(b===x)return this;var p=new x(x);arguments.length==4&&p.set(b,c,g,r);return p}function v(b,c,g,r,p,w){if(b===v)return this;var u=new v(v);u.matrix=f.VectorArray(6,f.Float(32));if(arguments.length)if(f.Type.is_a(b,v)){c=u.matrix;g=b.matrix;c[0]=g[0];c[1]=g[1];c[2]=g[2];c[3]=g[3];c[4]=g[4];c[5]=g[5]}else if(arguments.length===6){u.matrix[0]=b;u.matrix[1]=c;u.matrix[2]=g;u.matrix[3]=r;u.matrix[4]=p;u.matrix[5]=w}else throw Error("Matrix2d: syntax error");
else return u;return u}var y=f.Event();o.className="Point";o.role=f.Role(o,{x:f.Number,y:f.Number});o.prototype={vectorTo:function(b,c){if(arguments.length==1){c=b.y;b=b.x}return new o((b>this.x?1:-1)*(Math.max(this.x,b)-Math.min(this.x,b)),(c>this.y?1:-1)*(Math.max(this.y,c)-Math.min(this.y,c)))},set:function(b,c){this.x=b;this.y=c;return this},toString:function(){return h([this.x,this.y])},clone:function(){return o(this.x,this.y)}};x.className="Rectangle";x.role=f.Role(x,{width:f.Number,height:f.Number},
o.role);x.prototype={set:function(b,c,g,r){this.x=b;this.y=c;this.width=g;this.height=r;return this},isPointWithin:function(b,c){if(arguments.length==1){c=b.y;b=b.x}return b>this.x&&c>this.y&&b<this.x+this.width&&c<this.y+this.height},clone:function(){return x(this.x,this.y,this.width,this.height)},toString:function(){return h([this.x,this.y,this.width,this.height])}};v.prototype={identity:function(){this.matrix[0]=1;this.matrix[1]=0;this.matrix[2]=0;this.matrix[3]=1;this.matrix[4]=0;this.matrix[5]=
0;return this},translate:function(b,c){var g=this.matrix;g[4]=g[0]*b+g[2]*c;g[5]=g[1]*b+g[3]*c;return this},scale:function(b,c){var g=this.matrix;g[0]*=b;g[2]*=b;g[1]*=c;g[3]*=c;return this},rotate:function(b){var c=this.matrix,g=Math.cos(b);b=Math.sin(b);var r=c[2]*g+c[3]*b,p=c[0]*-b+c[1]*g,w=c[2]*-b+c[3]*g;c[0]=c[0]*g+c[1]*b;c[1]=r;c[2]=p;c[3]=w;return this},multiplyPoint:function(b){var c=this.matrix,g=b.x;b=b.y;return new o(g*c[0]+b*c[2]+c[4],g*c[1]+b*c[3]+c[5])},multiplyMatrix:function(b){var c=
this.matrix;b=b.matrix;var g=c[1]*b[0]+c[3]*b[1],r=c[0]*b[2]+c[2]*b[3],p=c[1]*b[2]+c[3]*b[3],w=c[0]*b[4]+c[2]*b[5]+c[4],u=c[1]*b[4]+c[3]*b[5]+c[5];c[0]=c[0]*b[0]+c[2]*b[1];c[1]=g;c[2]=r;c[3]=p;c[4]=w;c[5]=u;return this},invert:function(){var b=this.matrix,c=1/(b[0]*b[3]-b[1]*b[2]);this.matrix.set([b[3]*c,-b[1]*c,-b[2]*c,b[0]*c,c*(b[2]*b[5]-b[3]*b[4]),c*(b[1]*b[4]-b[0]*b[5])]);return this},clone:function(){return v(this)},toString:function(){var b=this.matrix;return h([b[0],b[1],b[2],b[3],b[4],b[5]])}};
v.className="Matrix2d";k.Point=o;k.Rectangle=x;k.Matrix2d=v;y.once("initialize",function(){f.Class.registerClasses(o,x,v)})})});if($isCLI||$isWorker){__init__.done=true;ha.dispatch("contentloaded")}}})();$jooscript="(dev)";



/***  vendor/bower/fxcanvas/fxcanvas  ***/

/*! fxCanvas v0.2(beta4) (20110205)
	- copyright 2009-2011, Evgeny Burzak <http://code.google.com/p/fxcanvas/>
	- released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/

$Package("buz.util",function(i){i.capitalize=function(l){return l.substr(0,1).toUpperCase()+l.substr(1)};var j=$Import({},"platform");i.propertyChangeListener=function(l,f,q){var p=function(b){b.attrName==f&&q(b)};if(j.platform.webkit){var n=l[f],a;setInterval(function(){a=l[f];if(n!=a){p({target:l,attrName:f,prevValue:n,newValue:a});n=a}},10+Math.round(Math.random()*100))}else l.addEventListener("DOMAttrModified",p,false)}});$Unit(__PATH__,__FILE__,function(i){i.Import("platform");i.Package("buz.fxcanvas.config",function(j){i.Event.once("initialize",function(){j.version="0.2(beta4)";j.enable=true;j.tracePathBounds=i.platform.isIE;j.idleInterval=2E3;j.frameDuration=100;j.contextMenu=[{id:"view",label:{ru:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",en:"View Image"}},{id:"save_as",label:{ru:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u043a...",
en:"Save Image As..."}},"----",{id:"about",label:{ru:"\u041e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 fxCanvas...",en:"About fxCanvas..."}},{id:"about_flash",label:{ru:"\u041e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0435 Adobe Flash Player...",en:"About Adobe Flash Player..."}}];j.viewImageURL="view.php";j.saveAsURL="save.php";j.flashBackendJS="flash_backend.js";j.canvasBackendJS="canvas_backend.js";j.projectURL="http://code.google.com/p/fxcanvas/";j.fxcanvas_js="fxcanvas.js";j.script_url=
function(){for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++)if(l[f].src.indexOf(j.fxcanvas_js)>-1)return l[f].getAttribute("src",2)}();j.script_path=j.script_url.replace(/[^\/]+$/,"");j.imageProxy=j.script_path+"proxy.php";j.useCanvasPath=false;j.useRawImageData=false})})});$Unit(__PATH__,__FILE__,function(i){i.Import("buz.fxcanvas.config","platform","w3c.DOMException");i.Package("buz.fxcanvas",function(j){j.throwException=function(f){throw new i.DOMException(f);};j.throwError=function(f){throw Error(f);};j.defProp={globalAlpha:1,globalCompositeOperation:"source-over",strokeStyle:"rgb(0,0,0)",fillStyle:"rgb(0,0,0)",shadowOffsetX:0,shadowOffsetY:0,shadowBlur:0,shadowColor:"rgba(0,0,0,.5)",lineWidth:1,lineCap:"butt",lineJoin:"miter",miterLimit:10,font:"10px sans-serif",
textAlign:"start",textBaseline:"alphabetic"};var l=0;j.getCanvasUUID=function(){return"canvas-uuid-"+l++};j.getCanvasParams=function(f){var q=f.getAttribute("width"),p=f.getAttribute("height"),n=f.getAttribute("oncanvasframe"),a=f.getAttribute("oncanvasresize"),b=f.getAttribute("onload"),c=f.getAttribute("tracePathBounds"),d=f.getAttribute("frameDuration");if(c){c=c.replace(/\s+/,"");switch(c){case "true":case "yes":case "1":c=true;break;case "false":case "no":case "0":c=false;break;default:c=null;
break}}return{width:q&&Number(q),height:p&&Number(p),id:f.getAttribute("id"),frameDuration:d&&parseInt(d),tracePathBounds:c,oncanvasframe:n&&Function(n),oncanvasresize:a&&Function(a),onload:b&&Function(b),offsetLeft:f.offsetLeft,offsetTop:f.offsetTop}};i.Event.once("initialize",function(){i.config.enable&&j.backend.initialize()});j.initialize=function(){j.backend.initialize()};j.initElement=function(f){j.backend.initElement(f)}})});$Unit(__PATH__,__FILE__,function(i,j,l){i.Import("platform","geom.*","buz.fxcanvas.config");i.Matrix2d.prototype._transform=function(){};i.Matrix2d.prototype._setTransform=function(){};i.Matrix2d.prototype._dump=function(){return[this[0],this[1],this[2],this[3],this[4],this[5]].join(",")};i.Package("buz.fxcanvas",function(f){function q(a,b,c,d){this.set(a,b,c,d);this.knots=0}function p(a,b,c,d){this.__useCache=false;this.__pixel=d&&i.platform.isIE?1:4;this.__cachedData=null;if(a&&b){this.width=a;
this.height=b;if(c){this.data=c;return this}}else{a||f.throwException("NOT_SUPPORTED_ERR");f.assertImageDataIsValid(a);this.width=a.width;this.height=a.height}this.data=i.VectorArray(this.width*this.height,i.Uint(32));for(a=0;a<this.height;a++)for(b=0;b<this.width;b++)this.data[a*this.width+b]=0}function n(){l.detachEvent("onbeforeunload",n);l.extCanvasRenderingContext2D=null;l.ImageData=null;l.CanvasPath=null}f.extCanvasRenderingContext2D=function(a,b){this._isFlashBackend=i.platform.isIE;this._backend=
b;this._bounds=new q;this._xy0=i.Point();this._tracePathBounds=i.config.tracePathBounds;this._stateStack=[];this._pathStack=[];this._useRawImageData=i.config.useRawImageData;this._useCanvasPath=i.config.useCanvasPath;this.canvas=a;this.transformMatrix=new i.Matrix2d;this.transformMatrix.identity();if(!i.platform.isIE)for(var c in f.defProp){this.__defineSetter__(c,function(d){return function(e){this._backend[d]=e}}(c));this.__defineGetter__(c,function(d){return function(){return this._backend[d]}}(c))}};
f.extCanvasRenderingContext2D.prototype={canvas:null,clearRect:function(a,b,c,d){if(arguments.length==1){b=a.y;c=a.width;d=a.height;a=a.x}this._backend.clearRect(a,b,c,d);return this},fillRect:function(a,b,c,d){if(arguments.length==1){b=a.y;c=a.width;d=a.height;a=a.x}this._backend.fillRect(a,b,c,d);return this},strokeRect:function(a,b,c,d){if(arguments.length==1){b=a.y;c=a.width;d=a.height;a=a.x}this._backend.strokeRect(a,b,c,d);return this},closePath:function(){this._path&&this._path.close();this._backend.closePath();
return this},beginPath:function(){if(this._useCanvasPath)this._path=this.createPath();if(this._tracePathBounds){this._bounds.clear();this._xy0.set(0,0)}this._backend.beginPath();return this},moveTo:function(a,b){if(arguments.length==1){b=a.y;a=a.x}this._path&&this._path.moveTo(a,b);if(this._tracePathBounds){this._xy0.set(a,b);this._bounds.addKnot(a,b)}this._backend.moveTo(a,b);return this},lineTo:function(a,b){if(arguments.length==1){b=a.y;a=a.x}this._path&&this._path.lineTo(a,b);if(this._tracePathBounds){this._xy0.set(a,
b);this._bounds.addKnot(a,b)}this._backend.lineTo(a,b);return this},arcTo:function(a,b,c,d,e){this._path&&this._path.arcTo(a,b,c,d,e);if(this._tracePathBounds){this._bounds.addKnot(a,b);this._xy0.set(a,b)}this._backend.arcTo(a,b,c,d,e)},vectorTo:function(a,b,c){if(arguments.length==1){b=a.y;a=a.x}c||(c=10);this._path&&this._path.vectorTo(a,b,c);this._backend.lineTo(a,b);var d=this._xy0.vectorTo(a,b);d=Math.atan2(d.y,d.x);var e,h;e=c*Math.cos(d+2.61);h=c*Math.sin(d+2.61);this._backend.lineTo(a+e,b+
h);e=c*Math.cos(d-2.61);h=c*Math.sin(d-2.61);this._backend.lineTo(a+e,b+h);this._backend.lineTo(a,b);return this},quadraticCurveTo:function(a,b,c,d){this._path&&this._path.quadraticCurveTo(a,b,c,d);if(this._tracePathBounds){var e=this._xy0.vectorTo(c,d);e=i.Point(c+e.x/2,d+e.y/2).vectorTo(a,b);this._bounds.addKnot(c+e.x/2,d+e.y/2);this._bounds.addKnot(c,d);this._xy0.set(c,d)}this._backend.quadraticCurveTo(a,b,c,d);return this},bezierCurveTo:function(a,b,c,d,e,h){this._path&&this._path.bezierCurveTo(a,
b,c,d,e,h);if(this._tracePathBounds){var g=i.Point,k=this._xy0,m=g(e,h),o=k.vectorTo(a,b),r=m.vectorTo(c,d),s=k.vectorTo(e,h),t=g(k.x+o.x/2,k.y+o.y/2),u=g(e+r.x/2,h+r.y/2);r=g(e+o.x/2+r.x/2-s.x/2,h+o.y/2+r.y/2-s.y/2);o=t.vectorTo(r);s=u.vectorTo(r);r=g(t.x+o.x/2,t.y+o.y/2);s=g(u.x+s.x/2,u.y+s.y/2);o=s.vectorTo(r.x,r.y);o=g(s.x+o.x/2,s.y+o.y/2);t=k.vectorTo(t);m=m.vectorTo(u);k=g(k.x+t.x/2,k.y+t.y/2);m=g(e+m.x/2,h+m.y/2);u=k.vectorTo(r);t=m.vectorTo(s);k=g(k.x+u.x/2,k.y+u.y/2);g=g(m.x+t.x/2,m.y+t.y/
2);this._bounds.addKnot(o.x,o.y);this._bounds.addKnot(k.x,k.y);this._bounds.addKnot(g.x,g.y);this._bounds.addKnot(e,h);this._xy0.set(e,h)}this._backend.bezierCurveTo(a,b,c,d,e,h);return this},rect:function(a,b,c,d){if(arguments.length==1){b=a.y;c=a.width;d=a.height;a=a.x}this._path&&this._path.rect(a,b,c,d);if(this._tracePathBounds){this._bounds.expandBox(a,b,c,d);this._xy0.set(a+c,b+d)}this._backend.rect(a,b,c,d);return this},arc:function(a,b,c,d,e,h){this._path&&this._path.arc(a,b,c,d,e,h);if(this._tracePathBounds){var g=
c*2;this._bounds.expandBox(a-c,b-c,g,g);this._xy0.set(a+g,b+g)}this._backend.arc(a,b,c,d,e,h);return this},stroke:function(){this._path&&this._path.length&&this._backend.appendPath(this._path);this._backend.stroke();return this},fill:function(){this._backend.fill();return this},clip:function(){this._backend.clip();return this},createPath:function(a){return new f.CanvasPath(a)},appendPath:function(a){this._path&&this._path.append(a);return this},clonePath:function(){if(this._path)return this._path.clone()},
save:function(){this._path&&this._pathStack.push(this._path.clone());this._stateStack.push(this.transformMatrix.clone());this._backend.save();return this},restore:function(){this._backend.restore();this.globalAlpha=this._backend.globalAlpha;this.globalCompositeOperation=this._backend.globalCompositeOperation;this.strokeStyle=this._backend.strokeStyle;this.fillStyle=this._backend.fillStyle;this.lineWidth=this._backend.lineWidth;this.lineCap=this._backend.lineCap;this.lineJoin=this._backend.lineJoin;
this.miterLimit=this._backend.miterLimit;this.shadowOffsetX=this._backend.shadowOffsetX;this.shadowOffsetY=this._backend.shadowOffsetY;this.shadowBlur=this._backend.shadowBlur;this.shadowColor=this._backend.shadowColor;this.font=this._backend.font;this.textAlign=this._backend.textAlign;this.textBaseline=this._backend.textBaseline;if(this._stateStack.length>0)this.transformMatrix=this._stateStack.pop();if(this._pathStack.length>0)this._path=this._pathStack.pop();return this},translate:function(a,b){this._tracePathBounds&&
this.transformMatrix.translate(a,b);this._backend.translate(a,b);return this},rotate:function(a){this._tracePathBounds&&this.transformMatrix.rotate(a);this._backend.rotate(a);return this},scale:function(a,b){this._tracePathBounds&&this.transformMatrix.scale(a,b);this._backend.scale(a,b);return this},transform:function(a,b,c,d,e,h){this._tracePathBounds&&this.transformMatrix._transform(arguments);this._backend.transform(a,b,c,d,e,h);return this},setTransform:function(a,b,c,d,e,h){this._tracePathBounds&&
this.transformMatrix._setTransform(arguments);this._backend.setTransform(a,b,c,d,e,h);return this},drawImage:function(a,b,c,d,e,h,g,k,m){if(arguments.length===3)this._backend.drawImage(a,b,c);else if(arguments.length===5)this._backend.drawImage(a,b,c,d,e);else arguments.length===9&&this._backend.drawImage(a,b,c,d,e,h,g,k,m);return this},createImageData:function(a,b){return a&&b?new p(a,b,null,this._useRawImageData):new p(a,null,null,this._useRawImageData)},getImageData:function(a,b,c,d){if(arguments.length==
1){b=a.y;c=a.width;d=a.height;a=a.x}if(this._isFlashBackend)return null;var e=this._backend.getImageData(a,b,c,d);return this._useRawImageData?new p(c,d,e):(new p(1,1)).__fromCanvasData(e)},putImageData:function(a,b,c,d,e,h,g){f.assertImageDataIsValid(a);var k;k=this._isFlashBackend?a:this._useRawImageData?a:a.__toCanvasData(this._backend);if(arguments.length==3)this._backend.putImageData(k,b,c);else arguments.length==7&&this._backend.putImageData(k,b,c,d,e,h,g)},createLinearGradient:function(a,b,
c,d){return this._backend.createLinearGradient(a,b,c,d)},createRadialGradient:function(a,b,c,d,e,h){return this._backend.createRadialGradient(a,b,c,d,e,h)},createPattern:function(a,b){b||(b=null);return this._backend.createPattern(a,b)},fillText:function(a,b,c,d){this._backend.fillText(a,b,c,d||null);return this},strokeText:function(a,b,c,d){this._backend.strokeText(a,b,c,d||null);return this},measureText:function(a){return this._backend.measureText(a)},isPointInPath:function(a,b){if(arguments.length==
1){b=a.y;a=a.x}if(this._isFlashBackend)return this._tracePathBounds?this.isPointInPathBounds(a,b):false;else{if(i.platform.isFirefox){this._backend.save();this._backend.setTransform(1,0,0,1,0,0);var c=this._backend.isPointInPath(a,b);this._backend.restore();return c}return this._backend.isPointInPath(a,b)}},isPointInPathBounds:function(a,b){if(arguments.length==1){b=a.y;a=a.x}var c=this._bounds,d=this.transformMatrix.matrix,e={x:a,y:b};d[0]==1&&d[1]==0&&d[2]==0&&d[3]==1&&d[4]==0&&d[5]==0||(e=this.transformMatrix.clone().invert().multiplyPoint(e));
return c.isPointWithin(e)},ifPointInPath:function(a,b,c){c(this.isPointInPath(a,b));return this},getPathBounds:function(){return this._bounds.clone()},set:function(a,b){this[a]=b;return this},globalAlpha:f.defProp.globalAlpha,globalCompositeOperation:f.defProp.globalCompositeOperation,strokeStyle:f.defProp.strokeStyle,fillStyle:f.defProp.fillStyle,shadowOffsetX:f.defProp.shadowOffsetX,shadowOffsetY:f.defProp.shadowOffsetY,shadowBlur:f.defProp.shadowBlur,shadowColor:f.defProp.shadowColor,lineWidth:f.defProp.lineWidth,
lineCap:f.defProp.lineCap,lineJoin:f.defProp.lineJoin,miterLimit:f.defProp.miterLimit,font:f.defProp.font,textAlign:f.defProp.textAlign,textBaseline:f.defProp.textBaseline,setGlobalAlpha:function(a){this.globalAlpha=a;return this},setGlobalCompositeOperation:function(a){this.globalCompositeOperation=a;return this},setStrokeStyle:function(a){this.strokeStyle=a;return this},setFillStyle:function(a){this.fillStyle=a;return this},setShadowOffsetX:function(a){this.shadowOffsetX=a;return this},setShadowOffsetY:function(a){this.shadowOffsetY=
a;return this},setShadowBlur:function(a){this.shadowBlur=a;return this},setShadowColor:function(a){this.shadowColor=a;return this},setLineWidth:function(a){this.lineWidth=a;return this},setLineCap:function(a){this.lineCap=a;return this},setLineJoin:function(a){this.lineJoin=a;return this},setMiterLimit:function(a){this.miterLimit=a;return this},setFont:function(a){this.font=a;return this},setTextAlign:function(a){this.textAlign=a;return this},setTextBaseline:function(a){this.textBaseline=a;return this},
invoke:function(){this._backend._invoke(arguments)},dummy:function(){this._backend.dummy()},__rgbaStyle:function(a,b,c,d){return["rgba(",[a,b,c,d].join(","),")"].join("")},__rgbStyle:function(a,b,c){return["rgb(",[a,b,c].join(","),")"].join("")},setFillStyleRGBA:function(a,b,c,d){this.fillStyle=this.__rgbaStyle(a,b,c,d);return this},setStrokeStyleRGBA:function(a,b,c,d){this.strokeStyle=this.__rgbaStyle(a,b,c,d);return this},setFillStyleRGB:function(a,b,c){this.fillStyle=this.__rgbStyle(a,b,c);return this},
setStrokeStyleRGB:function(a,b,c){this.strokeStyle=this.__rgbStyle(a,b,c);return this},constructor:f.extCanvasRenderingContext2D};q.prototype=i.Rectangle();i.object.extend(q.prototype,{addKnot:function(a,b){var c=i.Point(this.x,this.y).vectorTo(a,b);if(this.knots){if(c.x<0){this.x+=c.x;this.width-=c.x}else if(this.x+c.x>this.x+this.width)this.width=c.x;if(c.y<0){this.y+=c.y;this.height-=c.y}else if(this.y+c.y>this.y+this.height)this.height=c.y}else{this.x=a;this.y=b;this.height=this.width=0}this.knots++},
clear:function(){this.knots=this.x=this.y=this.width=this.height=0},expandBox:function(a,b,c,d){this.addKnot(a,b);this.addKnot(a+c,b+d)},clone:function(){return new q(this.x,this.y,this.width,this.height)}});f.ImageData=p;p.prototype={data:null,__toCanvasData:function(a){if(this.__useCache&&this.__cachedData)return this.__cachedData;a=i.platform.isOpera?{width:this.width,height:this.height,data:Array(this.width*this.height*4)}:a.createImageData(this.width,this.height);for(var b,c,d=0;d<this.height;d++)for(var e=
0;e<this.width;e++){c=d*4*this.width+e*4;b=this.data[d*this.width+e];a.data[c]=b>>24&255;a.data[c+1]=b>>16&255;a.data[c+2]=b>>8&255;a.data[c+3]=b&255}if(this.__useCache)this.__cachedData=a;return a},__fromCanvasData:function(a){this.width=a.width;this.height=a.height;this.data=i.VectorArray(this.width*this.height,i.Uint(32));for(var b,c,d,e,h=0;h<this.height;h++)for(var g=0;g<this.width;g++){b=h*4*this.width+g*4;c=a.data[b];d=a.data[b+1];e=a.data[b+2];b=a.data[b+3];this.data[h*this.width+g]=(c<<24)+
(d<<16)+(e<<8)+b}return this},__destroy:function(){this.width=this.height=this.data=null},toString:function(){return"ImageData["+this.data.length+"]"},clone:function(){var a=new p(this.width,this.height);a.data.set(this.data);return a}};f.assertImageDataIsValid=function(a){a.width&&isFinite(a.width)&&a.height&&isFinite(a.height)&&a.data&&a.data.length||f.throwException("TYPE_MISMATCH_ERR")};f.CanvasPath=function(){this.length=0;this._stack=[];this._serial=[];this._ie=i.platform.ie};f.CanvasPath.prototype=
{__copy:function(a,b){for(var c,d,e,h,g=0;g<a._stack.length;g++){c=a._stack[g][0];e=a._stack[g][1];d=e.length;h=[];for(var k=0;k<d;k++)h[k]=e[k];b._stack[g]=[c,h];if(this._ie)b._serial[g]=a._serial[g]}},pop:function(){this._ie&&this._serial.pop();return this._stack.pop()},push:function(a){this[a[0]].apply(this,a[1])},clone:function(){var a=new f.CanvasPath;this.__copy(this,a);a.length=this.length;return a},append:function(a){this.__copy(a,this);this.length+=a.length},moveTo:function(a,b){var c=[a,
b];if(this._ie)this._serial[this.length]=["B",a,"\u0001",b].join("");this._stack[this.length]=["moveTo",c];this.length++},lineTo:function(a,b){var c=[a,b];if(this._ie)this._serial[this.length]=["C",a,"\u0001",b].join("");this._stack[this.length]=["lineTo",c];this.length++},arcTo:function(a,b,c,d,e){a=[a,b,c,d,e];if(this._ie)this._serial[this.length]=["G",a.join("\u0001")].join("");this._stack[this.length]=["arcTo",a];this.length++},vectorTo:function(a,b,c){a=[a,b,c];if(this._ie)this._serial[this.length]=
["B",a.join("\u0001")].join("");this._stack[this.length]=["vectorTo",a];this.length++},bezierCurveTo:function(a,b,c,d,e,h){a=[a,b,c,d,e,h];if(this._ie)this._serial[this.length]=["E",a.join("\u0001")].join("");this._stack[this.length]=["bezierCurveTo",a];this.length++},quadraticCurveTo:function(a,b,c,d){a=[a,b,c,d];if(this._ie)this._serial[this.length]=["D",a.join("\u0001")].join("");this._stack[this.length]=["quadraticCurveTo",a];this.length++},arc:function(a,b,c,d,e,h){a=[a,b,c,d,e,h];if(this._ie)this._serial[this.length]=
["F",a.join("\u0001")].join("");this._stack[this.length]=["arc",a];this.length++},rect:function(a,b,c,d){a=[a,b,c,d];if(this._ie)this._serial[this.length]=["H",a.join("\u0001")].join("");this._stack[this.length]=["rect",a];this.length++},close:function(){if(this._ie)this._serial[this.length]="K";this._stack[this.length]=["close"];this.length++},toSVGString:function(){},toString:function(a){if(this._ie){if(a==undefined)a="\u0001";return[this._serial.join(a),a].join("")}return"CanvasPath[]"}};f.CanvasEvent=
{FRAME:"1",RESIZE:"2"};if(!l.extCanvasRenderingContext2D)l.extCanvasRenderingContext2D=f.extCanvasRenderingContext2D;if(!l.ImageData)l.ImageData=f.ImageData;if(!l.CanvasPath)l.CanvasPath=f.CanvasPath;l.attachEvent&&l.attachEvent("onbeforeunload",n)})});$Unit(__PATH__,__FILE__,function(i,j){i.Import("platform");i.Package("buz.fxcanvas",function(l){function f(c,d){var e=this.menuEl=j.createElement("CanvasContextMenu");this.config=c;this.handlers=d;var h=0;this.selectedElement=null;this.elements=[];for(var g,k=0;k<c.length;k++){g=c[k];if(typeof g=="string"&&g.match(/[\-]+/)){g=j.createElement("hr");h+=13}else{var m=d[g.id],o=g.label[q]||g.label[p]||"<entry>";g=j.createElement("CanvasContextMenuEntry");g.onmouseenter=function(){this.contextMenu.selectedElement=
this;this.style.background=a.highlight;this.style.color=a.highlightText};g.onmouseleave=function(){this.contextMenu.selectedElement=null;this.style.background=a.background;this.style.color=a.menuText};g.style.background=a.background;g.innerHTML=g.label=o;g.contextMenu=this;g.entryHandler=m;h+=n?20:18}e.appendChild(g);this.elements.push(g)}e.style.height=h+"px"}if(i.platform.isIE){var q=navigator.browserLanguage,p="en",n=i.platform.ie<=6||j.documentMode<7||"",a={background:"Menu",menuText:"MenuText",
greyText:"GreyText",border:"ButtonShadow",highlight:"Highlight",highlightText:"HighlightText",font:"normal 8pt Tahoma, Arial"},b=["CanvasContextMenu{margin:0px;padding:2px;background-color:",a.background,";border:1px solid ",a.border,";position:absolute;top:0px;left:0px;zIndex:999;float:none;overflow:visible;text-align:left;max-width: 300px;display:block;clear:both;color:",a.menuText,";font:",a.font,";height:1px;",n&&"width:0;","}CanvasContextMenuEntry{text-align:left;margin:0px;padding:2px 5px 0px 24px;color:",
a.menuText,";white-space:nowrap;cursor:default;float:none;display:block;overflow:visible;border:0;background-color:",a.background,";height:",n?19:16,"px;font:",a.font,";",n&&"float:left;clear:left;width:0","}",n&&"CanvasContextMenu hr{","float:left;clear:left;padding:0;margin:3px 0px 0px 0px;height:0px}"].join("");j.createStyleSheet().cssText=b;f.prototype={hide:function(){},show:function(c,d){var e=this;if(!e.selectedElement){var h=function(){j.detachEvent("onmousedown",h);var m=e.selectedElement;
if(m){m.entryHandler&&m.entryHandler();m.style.background=a.background;m.style.color=a.menuText;e.selectedElement=null}try{j.body.removeChild(e.menuEl)}catch(o){}};this.menuEl.style.top=d+"px";this.menuEl.style.left=c+"px";j.body.appendChild(this.menuEl);if(n){for(var g=[],k=0;k<this.elements.length;k++)g.push(this.elements[k].offsetWidth);g.sort();maxWidth=g.pop();for(k=0;k<this.elements.length;k++){g=this.elements[k];g.style.minWidth=g.style.width=maxWidth-(g.tagName==="HR"?0:29)+"px"}this.menuEl.style.width=
maxWidth+"px"}j.attachEvent("onmousedown",h)}}};l.ContextMenu=f}})});



/***  vendor/bower/fxcanvas/flash_backend  ***/

/*! fxCanvas v0.2(beta4) (20110205)  - Flash backend */

$Unit(__PATH__,__FILE__,function(d,r){d.Import("buz.fxcanvas.*","buz.util.*");r.createElement("canvas");r.createStyleSheet().cssText="canvas{display:inline-block;width:300px;height:150px;}";d.Package("buz.fxcanvas.backend",function(n){function o(a){return a.replace(/[%&=\+]/g,function(b){if(b=="%")return"%25";else if(b=="&")return"%26";else if(b=="=")return"%3D";else if(b=="+")return"%2B"})}function q(a){a.getBackend("2d")._resize(a.width,a.height);q.oldWidth=a.width;q.oldHeight=a.height}var s=Array.prototype.slice,
z=function(){return this[this.length-1]};d.lastCanvasID=0;d.pageUUID=(+new Date).toString(36);d._HTMLCanvasElement={prototype:{getContext:function(a){return this.__getContext(a)},__getContext:function(a){return a==="2d"?this.__fx_context_2d:null},getBackend:function(a){return a==="2d"?this.__fx_context_2d._backend:null},toDataURL:function(a){var b=arguments,c=b.length==3?parseFloat(b[b.length-2]):0;b=b[b.length-1];var e=this.getBackend("2d"),f;if(typeof a==="string"){f=a.toLowerCase();switch(f){case "image/png":case "image/jpeg":case "image/svg+xml":break;
default:b("data:,");return}}else f="image/png";e._invoke(["toDataURL",f,c,b]);return null},loadImages:function(){if(arguments.length){var a=s.call(arguments,0),b=this.getBackend("2d"),c=this,e=a.pop(),f=e.tagName?e.tagName.toUpperCase():"IMG",g=0,h,k=false,i;if(f=="IMG"){g=0;h=typeof e=="object"?e.src:e;id=typeof e=="object"?e.id:null;i=(k=h.substr(0,4).toLowerCase()=="data")?{nodeType:1,tagName:"img",readyState:"complete",width:0,height:0}:new Image}else if(f=="CANVAS"){g=1;i=e}else if(f=="VIDEO")g=
2;if(k||g==1){if(k)i.src=h;b._invoke(["_loadImage",g,i,function(j){if(g==0){i.width=j.width;i.height=j.height}typeof c.onload=="function"&&c.onload(i);a.length&&c.loadImages.apply(c,a)}])}else{if(id)i.id=id;i.onload=function(){b._invoke(["_loadImage",g,i,function(){typeof c.onload=="function"&&c.onload(i);a.length&&c.loadImages.apply(c,a)}])};i.src=h}}},loadFonts:function(){},loadVideos:function(){}},toString:function(){return"[object HTMLCanvasElement]"},__w3c_fake:true};var A="z";n.FlashRenderingBackend2D=
function(a){function b(){if(!c._idle)if(c._writeCount)c._writeCount=0;else{c._flobject.FlashVars="l=0&c="+A;c._idle=true}}var c=this;this.canvas=a;this._stack=[];this._buf=[];this._queue=[];this._ext=a.__fx_context_2d;this.transformMatrix=null;this._resize=function(g,h){this._stack[this._stack.length]=["y",parseInt(g),parseInt(h),""].join("\u0001")};this._setup=function(g,h){this._flobject=g;this._fdur=null;this._frameDuration=h};this._init=function(){this._flobject.FlashVars="#=1";if(d.config.idleInterval)e=
setInterval(b,d.config.idleInterval)};var e=null;this._idle=false;this._writeCount=0;this._onframe=function(){if(this._stack.length){if(this._fdur!=this._frameDuration){this._fdur=this._frameDuration;this._stack[this._stack.length]=["@",this._fdur,""].join("\u0001")}this._stack[this._stack.length]="'";var g=0;this._buf[g++]="l=";this._buf[g++]=this._stack.length;this._buf[g++]="&c=";this._buf[g++]=this._stack.join("");this._flobject.FlashVars=this._buf.join("");this._stack=[];this._buf=[];this._idle=
false;this._writeCount++}else this._flobject.FlashVars="l=0&c="};this._clear=function(){this._stack=[];this._buf=[];this._flobject=null;clearInterval(e)};this._stateStack=[];var f=0;this._getStyleId=function(){return"s"+f++}};n.FlashRenderingBackend2D.prototype={canvas:null,clearRect:function(a,b,c,e){this._stack[this._stack.length]=["P",a,b,c,e,""].join("\u0001")},fillRect:function(a,b,c,e){this._setCompositing();this._setShadows();this._setFillStyle();this._stack[this._stack.length]=["Q",a,b,c,
e,""].join("\u0001")},strokeRect:function(a,b,c,e){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setLineStyles();this._stack[this._stack.length]=["R",a,b,c,e,""].join("\u0001")},beginPath:function(){this._setTransformMatrix();this._stack[this._stack.length]="A"},closePath:function(){this._stack[this._stack.length]="K"},moveTo:function(a,b){this._stack[this._stack.length]=["B",a,b,""].join("\u0001")},lineTo:function(a,b){this._stack[this._stack.length]=["C",a,b,""].join("\u0001")},
quadraticCurveTo:function(a,b,c,e){this._stack[this._stack.length]=["D",a,b,c,e,""].join("\u0001")},bezierCurveTo:function(a,b,c,e,f,g){this._stack[this._stack.length]=["E",a,b,c,e,f,g,""].join("\u0001")},arcTo:function(a,b,c,e,f){f<0&&d.throwException("INDEX_SIZE_ERR");this._stack[this._stack.length]=["G",a,b,c,e,f,""].join("\u0001")},rect:function(a,b,c,e){this._stack[this._stack.length]=["H",a,b,c,e,""].join("\u0001")},arc:function(a,b,c,e,f,g){c<0&&d.throwException("INDEX_SIZE_ERR");this._stack[this._stack.length]=
["F",a,b,c,e,f,g||g===undefined?"1":"0",""].join("\u0001")},fill:function(){this._setCompositing();this._setShadows();this._setFillStyle();this._stack[this._stack.length]="J"},stroke:function(){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setLineStyles();this._stack[this._stack.length]="I"},clip:function(){this._stack[this._stack.length]="x"},isPointInPath:function(a,b){this._stack[this._stack.length]=["n",a,b,""].join("\u0001");return false},isPointInPathBounds:function(){},
getPathBounds:function(){},appendPath:function(a){this._stack[this._stack.length]=a},drawFocusRing:function(){},drawImage:function(a,b,c,e,f,g,h,k,i){var j=arguments.length;if(b+e<1||c+f<1)d.throwException("INDEX_SIZE_ERR");if(g+k<1||h+i<1)d.throwException("INDEX_SIZE_ERR");t(a);this._setCompositing();this._setShadows();this._stack[this._stack.length]=["S",j,a._imageId,b,c,j>=5?[e,f].join("\u0001"):"",j==9?[g,h,k,i].join("\u0001"):"",""].join("\u0001")},createImageData:function(){if(arguments.length>
1){isFinite(arguments[0])&&isFinite(arguments[0])||d.throwException("NOT_SUPPORTED_ERR");arguments[0]&&arguments[0]||d.throwException("INDEX_SIZE_ERR");return new d.ImageData(arguments[0],arguments[1])}else{arguments[0]||d.throwException("NOT_SUPPORTED_ERR");return new d.ImageData(arguments[0])}},getImageData:function(a,b,c,e){var f;if(arguments.length==1){f=a.x;b=a.y;c=a.width;e=a.height}else f=a;isFinite(f)&&isFinite(b)&&isFinite(c)&&isFinite(e)||d.throwException("NOT_SUPPORTED_ERR");c&&e||d.throwException("INDEX_SIZE_ERR");
this._stack[this._stack.length]=["l",f,b,c,e,""].join("\u0001")},putImageData:function(a,b,c,e,f,g,h){d.assertImageDataIsValid(a);var k={data:a.__useCache?a.__cachedData||[]:[],toString:function(){return this.data.join("")}};if(!a.__useCache||a.__useCache&&!k.data.length){for(var i=[],j=0;j<256;j++)switch(j){case 0:case 37:case 38:case 43:case 61:i[j]=1;break;default:i[j]=0}for(j=0;j<a.data.length;j++){var m=a.data[j],l=m>>24&255,p=m>>16&255,u=m>>8&255;m=m&255;var v=i[l]<<1,w=i[p]<<2,x=i[u]<<3,y=
i[m]<<4;k.data[j]=String.fromCharCode(v+w+x+y+1,l^v,p^w,u^x,m^y)}if(a.__useCache)a.__cachedData=k.data}isFinite(b)&&isFinite(c)||d.throwException("NOT_SUPPORTED_ERR");this._stack[this._stack.length]=["o",arguments.length,a.width,a.height,k,b,c,""].join("\u0001");if(arguments.length>3){isFinite(arguments[1])&&isFinite(arguments[2])&&isFinite(arguments[3])||isFinite(arguments[4])&&isFinite(arguments[5])&&isFinite(arguments[6])||d.throwException("NOT_SUPPORTED_ERR");this._stack[this._stack.length]=[e,
f,g,h,""].join("\u0001")}},createLinearGradient:function(a,b,c,e){var f=new d._CanvasGradient(this);this._stack[this._stack.length]=["h",f.id,a,b,c,e,""].join("\u0001");return f},createRadialGradient:function(a,b,c,e,f,g){var h=new d._CanvasGradient(this);this._stack[this._stack.length]=["i",h.id,a,b,c,e,f,g,""].join("\u0001");return h},createPattern:function(a,b){t(a);switch(b){case "repeat":case undefined:case null:case "":b="repeat";break;case "repeat-x":case "repeat-y":case "no-repeat":break;
default:d.throwException("SYNTAX_ERR")}var c=new d._CanvasPattern(this);this._stack[this._stack.length]=["r",c.id,a._imageId,b,""].join("\u0001");return c},scale:function(a,b){this._stack[this._stack.length]=["T",a,b,""].join("\u0001")},rotate:function(a){this._stack[this._stack.length]=["U",a,""].join("\u0001")},translate:function(a,b){this._stack[this._stack.length]=["V",a,b,""].join("\u0001")},transform:function(a,b,c,e,f,g){this._stack[this._stack.length]=["W",a,b,c,e,f,g,""].join("\u0001")},
setTransform:function(a,b,c,e,f,g){this._stack[this._stack.length]=["X",a,b,c,e,f,g,""].join("\u0001")},save:function(){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setFillStyle();this._setLineStyles();this._setFontStyles();this._stateStack.push({globalAlpha:this.globalAlpha,globalCompositeOperation:this.globalCompositeOperation,strokeStyle:this.strokeStyle,fillStyle:this.fillStyle,lineWidth:this.lineWidth,lineCap:this.lineCap,lineJoin:this.lineJoin,miterLimit:this.miterLimit,
shadowOffsetX:this.shadowOffsetX,shadowOffsetY:this.shadowOffsetY,shadowBlur:this.shadowBlur,shadowColor:this.shadowColor,font:this.font,textAlign:this.textAlign,textBaseline:this.textBaseline});this._stack[this._stack.length]="L"},restore:function(){if(this._stateStack.length>0){var a=this._stateStack.pop();this.globalAlpha=a.globalAlpha;this.globalCompositeOperation=a.globalCompositeOperation;this.strokeStyle=a.strokeStyle;this.fillStyle=a.fillStyle;this.lineWidth=a.lineWidth;this.lineCap=a.lineCap;
this.lineJoin=a.lineJoin;this.miterLimit=a.miterLimit;this.shadowOffsetX=a.shadowOffsetX;this.shadowOffsetY=a.shadowOffsetY;this.shadowBlur=a.shadowBlur;this.shadowColor=a.shadowColor;this.font=a.font;this.textAlign=a.textAlign;this.textBaseline=a.textBaseline}this._stack[this._stack.length]="M"},font:d.defProp.font,textAlign:d.defProp.textAlign,textBaseline:d.defProp.textBaseline,fillText:function(a,b,c,e){this._setCompositing();this._setShadows();this._setFillStyle();this._setFontStyles();this._stack[this._stack.length]=
["s",a,b,c,e==undefined?4294967295:e,""].join("\u0001")},strokeText:function(a,b,c,e){this._setCompositing();this._setShadows();this._setStrokeStyle();this._setLineStyles();this._setFontStyles();this._stack[this._stack.length]=["t",a,b,c,e==undefined?4294967295:e,""].join("\u0001")},measureText:function(a){this._stack[this._stack.length]=["m",a,""].join("\u0001")},lineWidth:d.defProp.lineWidth,lineCap:d.defProp.lineCap,lineJoin:d.defProp.lineJoin,miterLimit:d.defProp.miterLimit,strokeStyle:d.defProp.strokeStyle,
fillStyle:d.defProp.fillStyle,globalAlpha:d.defProp.globalAlpha,globalCompositeOperation:d.defProp.globalCompositeOperation,shadowOffsetX:d.defProp.shadowOffsetX,shadowOffsetY:d.defProp.shadowOffsetY,shadowBlur:d.defProp.shadowBlur,shadowColor:d.defProp.shadowColor,toDataURL:function(a,b){this._stack[this._stack.length]=["(",a,isFinite(b)&&b||0,""].join("\u0001")},_loadImage:function(a,b){var c=0,e=this.canvas._images;if(a==0)if(b._imageId>-1&&e[b._imageId]===b)return;if(a>0)c=b.__id;b._imageId=e.length;
this.canvas._images.push(b);this._stack[this._stack.length]=["$",a,c,b._imageId,b.src?o(b.src):"none",""].join("\u0001")},_invoke:function(a){var b=s.call(a,1,a.length-1),c=a[0];a=z.call(a);this._stack[this._stack.length]=["~",this._queue.length,c,""].join("\u0001");this._queue[this._queue.length]=[c,a];this[c].apply(this,b)},_ondata:function(a,b,c){switch(b){case "toDataURL":a=a.args;break;case "isPointInPath":a=a.args=="1"?true:false;break;case "measureText":a=a.args.split("\u0001");a=new d._TextMetrics(Number(a[0]),
Number(a[1]),Number(a[2]),Number(a[3]));break;case "getImageData":var e=this._decodePixel(a,0);b=((e&255)<<8)+(e>>24&255);e=((e>>16&255)<<8)+(e>>8&255);for(var f=Array(b*e),g=0;g<f.length;g++)f[g]=this._decodePixel(a,5+g*5);a=new d.ImageData(b,e,f);break;case "_loadImage":a=a.args.split("\u0001");a={type:a[0],width:a[1],height:a[2],url:a[3]};break;case "putImageData":default:a=null}c.call(this._ext,a)},_decodePixel:function(a,b){var c=a.args.charCodeAt(b),e=a.args.charCodeAt(b+1)^c&2,f=a.args.charCodeAt(b+
2)^c&4,g=a.args.charCodeAt(b+3)^c&8;c=a.args.charCodeAt(b+4)^c&16;return(e<<24)+(f<<16)+(g<<8)+c},dummy:function(){this._stack[this._stack.length]=")"},_viewImage:function(){this._stack[this._stack.length]="."},_saveImage:function(){this._stack[this._stack.length]=","},_setTransformMatrix:function(){},_setLineStyles:function(){this.lineWidth=this._ext.lineWidth;this.lineCap=this._ext.lineCap;this.lineJoin=this._ext.lineJoin;this.miterLimit=this._ext.miterLimit;this._stack[this._stack.length]=["c",
this.lineWidth,"d",this.lineCap,"e",this.lineJoin,"f",this.miterLimit,""].join("\u0001")},_setFillStyle:function(){this.fillStyle=this._ext.fillStyle;this._stack[this._stack.length]=["N",this.fillStyle.id||this.fillStyle.replace(/%/g,"%25"),""].join("\u0001")},_setStrokeStyle:function(){this.strokeStyle=this._ext.strokeStyle;this._stack[this._stack.length]=["O",this.strokeStyle.id||this.strokeStyle.replace(/%/g,"%25"),""].join("\u0001")},_setCompositing:function(){this.globalAlpha=this._ext.globalAlpha;
this.globalCompositeOperation=this._ext.globalCompositeOperation;this._stack[this._stack.length]=["j",this.globalAlpha,"k",this.globalCompositeOperation,""].join("\u0001")},_setShadows:function(){},_setFontStyles:function(){this.font=this._ext.font;this.textAlign=this._ext.textAlign;this.textBaseline=this._ext.textBaseline;this._stack[this._stack.length]=["u",this.font,"v",this.textAlign,"w",this.textBaseline,""].join("\u0001")},_lockBitmap:function(){this._stack[this._stack.length]="*"},_unlockBitmap:function(){this._stack[this._stack.length]=
"+"}};d._CanvasGradient=function(a){this.ctx=a;this.id=a._getStyleId(this)};d._CanvasGradient.prototype={addColorStop:function(a,b){this.ctx._stack[this.ctx._stack.length]=["q",this.id,a,b,""].join("\u0001")}};d._CanvasPattern=function(a){this.ctx=a;this.id=a._getStyleId(this)};d._TextMetrics=function(a,b,c,e){this.width=a;this.height=b;this.ascent=c;this.descent=e};d.extendContext=function(){};d.initialize=function(){var a,b;d.swf_url=d.config.script_path+"fxcanvas.swf";a=new ActiveXObject("Microsoft.XMLHTTP");
a.open("GET",d.swf_url,false);a.send(null);a=document.getElementsByTagName("canvas");for(var c=0;c<a.length;c++){b=a[c];d.initElement(b);d.object.extend(b,d._HTMLCanvasElement.prototype)}};d.initElement=function(a){if(!a.getContext){var b=d.lastCanvasID++;__canvasElement[b]=a;__canvasElement[b].__id=b;var c,e;setTimeout(function(){d.initFlash(a,b,c,e)},1);var f=d.getCanvasParams(a);a.onload=f.onload;a.oncanvasframe=f.oncanvasframe;a.oncanvasresize=f.oncanvasresize;a.width=f.width||300;a.height=f.height||
150;if(!f.id)a.id=d.getCanvasUUID();c=a.width;e=a.height;(a.__fx_context_2d=new d.extCanvasRenderingContext2D(a,null))._backend=new n.FlashRenderingBackend2D(a);a._data={args:"",data:"",toString:function(){return this.data}};a._images=[];w3c(a);a._fscmd=function(g){var h=this.getBackend("2d");if(g>-1){var k=h._queue[g];h._ondata(this._data,k[0],k[1]);h._queue[g]=null}else if(g=="#")h._init();else if(g=="^")this._data.args=="2"&&a.oncanvasresize&&this.oncanvasresize();else if(g=="!")d.throwError(this._data.args);
else g!=")"&&d.throwError("Unknown command "+g);this.oncanvasframe&&this.oncanvasframe(0);h._onframe()};return a}};d.initFlash=function(a,b,c,e){width=a.width;height=a.height;var f=a.currentStyle,g=width,h=height;if(f&&f.width!="300px")g=parseInt(f.width);if(f&&f.height!="150px")h=parseInt(f.height);var k=Math.abs(parseInt(a.frameDuration||d.config.frameDuration)),i=d.config.viewImageURL.substr(0,4)==="http"?d.config.viewImageURL:d.config.script_path+d.config.viewImageURL,j=d.config.saveAsURL.substr(0,
4)==="http"?d.config.saveAsURL:d.config.script_path+d.config.saveAsURL,m=location.protocol+"//"+location.hostname;if(location.port)m+=":"+location.port;g=[width,height,g,h,k,b,d.pageUUID,o(m),o(i),o(j),o(d.config.imageProxy)].join("\u0001");b=['<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"  width="',width,'" height="',height,'"  id="__fx_canvas_',b,'"><param name="allowScriptAccess" value="always"><param name="movie" value="',d.swf_url,'"><param name="quality" value="high"><param name="menu" value="false"><param name="wmode" value="transparent"><param name="scale" value="noscale"><param name="FlashVars" value="c=',
g,'"></object><script id=__fscmd_hdlr_',b," event=FSCommand(cmd,args) for=__fx_canvas_",b,">if(__canvasElement){__canvasElement[",b,"]._data.args=args;__canvasElement[",b,"]._fscmd(cmd);}<\/script>"].join("");a.innerHTML=b;var l=a.firstChild;if(f&&f.width!="300px")l.style.width=f.width;if(f&&f.height!="150px")l.style.height=f.height;a.style.width=width+"px";a.style.height=height+"px";if(c!=width||e!=height)a.oncanvasresize&&a.oncanvasresize();a.getBackend("2d")._setup(l,k);c={view:function(){a.getBackend("2d")._viewImage()},
save_as:function(){a.getBackend("2d")._saveImage()},about:function(){window.location=d.config.projectURL},about_flash:function(){window.location="http://www.adobe.com"}};a.contextMenu=d.config.contextMenu?new d.ContextMenu(d.config.contextMenu,c):null;l.style.cursor="default";a._onContextMenu=function(p){a.contextMenu&&a.contextMenu.show(p.x,p.y);return false};a._onMouseDown=function(){l.focus()};a._onCanvasEnter=function(){l.style.cursor=a.style.cursor;a.setCapture(true);if(a.contextMenu){document.attachEvent("oncontextmenu",
a._onContextMenu);document.attachEvent("onmousedown",a._onMouseDown)}};a._onCanvasLeave=function(){l.style.cursor="none";a.releaseCapture();if(a.contextMenu){document.detachEvent("oncontextmenu",a._onContextMenu);document.detachEvent("onmousedown",a._onMouseDown)}};a.attachEvent("onmouseenter",a._onCanvasEnter);a.attachEvent("onmouseleave",a._onCanvasLeave);a.attachEvent("onpropertychange",d.onPropertyChange);l.attachEvent("onfocus",d.onFocus)};d.onPropertyChange=function(a){var b=a.propertyName,
c,e;switch(b){case "width":case "height":case "frameDuration":case "style.cursor":case "style.width":case "style.height":c=a.srcElement;e=c.getBackend("2d")}if(b=="width"||b=="height"){a=parseInt(c[b]);if(isNaN(a)||a<0)a=b=="width"?300:150;e._flobject[b]=a;clearTimeout(c._resizeIntId);c._resizeIntId=setTimeout(function(){q(c)},1)}else if(b=="frameDuration"){b=Math.abs(parseInt(c.frameDuration));e._frameDuration=b}else if(b=="style.cursor")e._flobject.style.cursor=c.style.cursor;else if(b=="style.width")e._flobject.style.width=
c.style.width;else if(b=="style.height")e._flobject.style.height=c.style.height};d.onFocus=function(a){a=a.srcElement;var b=a.parentNode;a.blur();b.focus()};d.onUnload=function(){window.detachEvent("onbeforeunload",d.onUnload);for(var a=0,b=window.__canvasElement.length;a<b;a++){var c=window.__canvasElement[a],e=c.getBackend("2d"),f=e._flobject,g;for(g in c)if(typeof c[g]==="function")c[g]=null;c._data=null;c.detachEvent("onpropertychange",d.onPropertyChange);try{c.detachEvent("onmouseenter",c._onCanvasEnter);
c.detachEvent("onmouseleave",c._onCanvasLeave);f.detachEvent("onfocus",d.onFocus);document.detachEvent("onmousedown",c._onMouseDown);document.detachEvent("oncontextmenu",c._onContextMenu)}catch(h){}e._clear()}window.CanvasRenderingContext2D=null;window.CanvasGradient=null;window.CanvasPattern=null;window.TextMetrics=null;window.HTMLCanvasElement=null;window.DOMException=null;window.__canvasElement=null};d._HTMLCanvasElement.__IElementConstructor=function(a){return d.initElement(a)};var t=function(a){var b=
a&&a.tagName&&a.tagName.toUpperCase()||null;if(!a||a.nodeType!=1||!b)d.throwException("TYPE_MISMATCH_ERR");b in{IMG:true,CANVAS:true}||d.throwException("TYPE_MISMATCH_ERR");a.readyState!="complete"&&d.throwException("INVALID_STATE_ERR");b==="IMG"&&!("_imageId"in a)&&d.throwException("INVALID_STATE_ERR")};window.HTMLCanvasElement=d._HTMLCanvasElement;window.CanvasRenderingContext2D=n.FlashRenderingBackend2D;window.CanvasGradient=d._CanvasGradient;window.CanvasPattern=d._CanvasPattern;window.TextMetrics=
d._TextMetrics;window.DOMException=d.DOMException;window.__canvasElement=[];n.extendContext=d.extendContext;n.initialize=d.initialize;n.initElement=d.initElement;window.attachEvent("onbeforeunload",d.onUnload)})});



/***  vendor/bower/fxcanvas/canvas_backend  ***/

/*! fxCanvas v0.2(beta4) (20110205)  - Canvas backend */

$Unit(__PATH__,__FILE__,function(e,l,h){e.Import("buz.util.*","buz.fxcanvas.*","joo.object");e.Package("buz.fxcanvas.backend",function(g){var k=Array.prototype.slice;e.lastCanvasID=0;g.CanvasRenderingBackend2D={_invoke:function(b){var a=b[0],d=b[b.length-1],c=k.call(b,1,b.length-1);b=this._ext;if(a=="putImageData"&&!b._useRawImageData)c[0]=c[0].__toCanvasData(this);if(a=="getImageData"){if(c.length==1)c=[c[0].x,c[0].y,c[0].width,c[0].height];a=this[a].apply(this,c);a=b._useRawImageData?new e.ImageData(a.width,
a.height,a.data,b._useRawImageData):(new e.ImageData(1,1)).__fromCanvasData(a)}else a=this[a].apply(this,c);setTimeout(d,this.canvas.__frameDuration,a)},dummy:function(){},appendPath:function(b){for(var a=0;a<b._stack.length;a++)this[b._stack[a][0]].apply(this,b._stack[a][1])}};g.extendContext=function(b){b.__native_getContext=b.getContext;b.__fx_context_2d=null;b.getContext=function(a){if(a!="2d")return this.__native_getContext(a);if(!this.__fx_context_2d){a=this.__native_getContext(a);this.__fx_context_2d=
new e.extCanvasRenderingContext2D(this,a);a._ext=this.__fx_context_2d;e.object.extend(a,g.CanvasRenderingBackend2D)}return this.__fx_context_2d};b.__native_toDataURL=b.toDataURL;b.toDataURL=function(){var a=arguments,d=k.call(a,0,a.length-1);a=a[a.length-1];d=this.__native_toDataURL.apply(this,d);setTimeout(a,this.__frameDuration,d);return null};b.loadImages=function(){if(arguments.length){var a=k.call(arguments,0),d=this,c=a.pop(),f=typeof c=="object"?c.src:c,i=typeof c=="object"?c.id:null;if(c.tagName==
"CANVAS"){typeof d.onload=="function"&&d.onload(c);a.length&&d.loadImages.apply(d,a)}else{var j=new Image;if(i)j.id=i;j.onload=function(){typeof d.onload=="function"&&d.onload(j);a.length&&d.loadImages.apply(d,a)};j.src=f}}};b.__defineSetter__("frameDuration",function(a){this.__frameDuration=Math.abs(parseInt(a));this.oncanvasframe=this.__onFrame});b.__defineGetter__("frameDuration",function(){return this.__frameDuration});b.__defineSetter__("tracePathBounds",function(a){this.__tracePathBounds=a});
b.__defineGetter__("tracePathBounds",function(){return this.__tracePathBounds});b.__onFrame=b.__frameIntId=null;b.__defineSetter__("oncanvasframe",function(a){clearInterval(this.__frameIntId);if(a){var d=this,c=new Date;d.__onFrame=a;var f,i=function(){if(d.__onFrame){if(new Date-c>=d.__frameDuration){d.__onFrame();c=new Date}f(i)}};f=h.webkitRequestAnimationFrame?h.webkitRequestAnimationFrame:h.mozRequestAnimationFrame?h.mozRequestAnimationFrame:function(){d.__frameIntId=setTimeout(i,10)};i()}else this.__onFrame=
null});b.__defineGetter__("oncanvasframe",function(){return this.__onFrame});b.onload=null;b.oncanvasframe=null;b.getBackend=function(a){return this.__native_getContext(a)}};g.initialize=function(){g.extendContext(HTMLCanvasElement.prototype);document.__native_createElement=document.createElement;document.createElement=function(c){c=document.__native_createElement(c);c.nodeName==="CANVAS"&&g.initElement(c);return c};for(var b=document.getElementsByTagName("canvas"),a,d=0;d<b.length;d++){a=b[d];g.initElement(a)}};
g.initElement=function(b){if(!b.id)b.id=e.getCanvasUUID();"__fx_context_2d"in b||g.extendContext(b);var a=function(f){f.oncanvasresize&&f.oncanvasresize()},d,c=function(f){if(f.attrName=="width"||f.attrName=="height"){clearTimeout(d);d=setTimeout(a,10+Math.round(Math.random()*100),b)}};e.propertyChangeListener(b,"width",c);e.propertyChangeListener(b,"height",c);c=e.getCanvasParams(b);b.frameDuration=c.frameDuration||e.config.frameDuration;if(typeof c.tracePathBounds==="boolean")b.tracePathBounds=
c.tracePathBounds;if(c.onload)b.onload=c.onload;if(c.oncanvasframe)b.oncanvasframe=c.oncanvasframe;h.__canvasElement[e.lastCanvasID++]=b};h.__canvasElement=[]})});



/***  app/ie  ***/


;
