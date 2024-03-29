/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});


(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options  = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0,               // the number the element should start at
    to: 0,                 // the number the element should end at
    speed: 1000,           // how long it should take to count between the target numbers
    refreshInterval: 100,  // how often the element should be updated
    decimals: 0,           // the number of decimal places to show
    formatter: formatter,  // handler for formatting the value before rendering
    onUpdate: null,        // callback method for every time the element is updated
    onComplete: null       // callback method for when the element finishes updating
  };

  CountTo.prototype.init = function () {
    this.value     = this.options.from;
    this.loops     = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from:            this.$element.data('from'),
      to:              this.$element.data('to'),
      speed:           this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals:        this.$element.data('decimals')
    };

    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof(options[key]) === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;

    this.render();

    if (typeof(this.options.onUpdate) == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof(this.options.onComplete) == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this   = $(this);
      var data    = $this.data('countTo');
      var init    = !data || typeof(option) === 'object';
      var options = typeof(option) === 'object' ? option : {};
      var method  = typeof(option) === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
}));




/**
*
* jquery.sparkline.js
*
* v2.3.2
* (c) Splunk, Inc
* Contact: Gareth Watts (gareth@splunk.com)
* http://omnipotent.net/jquery.sparkline/
*
* Generates inline sparkline charts from data supplied either to the method
* or inline in HTML
*
* Compatible with Internet Explorer 6.0+ and modern browsers equipped with the canvas tag
* (Firefox 2.0+, Safari, Opera, etc)
*
* License: New BSD License
*
* Copyright (c) 2012, Splunk Inc.
* All rights reserved.
*
* Redistribution and use in source and binary forms, with or without modification,
* are permitted provided that the following conditions are met:
*
*     * Redistributions of source code must retain the above copyright notice,
*       this list of conditions and the following disclaimer.
*     * Redistributions in binary form must reproduce the above copyright notice,
*       this list of conditions and the following disclaimer in the documentation
*       and/or other materials provided with the distribution.
*     * Neither the name of Splunk Inc nor the names of its contributors may
*       be used to endorse or promote products derived from this software without
*       specific prior written permission.
*
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
* OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT
* SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
* SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT
* OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
* HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
* OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
* SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*
*
* Usage:
*  $(selector).sparkline(values, options)
*
* If values is undefined or set to 'html' then the data values are read from the specified tag:
*   <p>Sparkline: <span class="sparkline">1,4,6,6,8,5,3,5</span></p>
*   $('.sparkline').sparkline();
* There must be no spaces in the enclosed data set
*
* Otherwise values must be an array of numbers or null values
*    <p>Sparkline: <span id="sparkline1">This text replaced if the browser is compatible</span></p>
*    $('#sparkline1').sparkline([1,4,6,6,8,5,3,5])
*    $('#sparkline2').sparkline([1,4,6,null,null,5,3,5])
*
* Values can also be specified in an HTML comment, or as a values attribute:
*    <p>Sparkline: <span class="sparkline"><!--1,4,6,6,8,5,3,5 --></span></p>
*    <p>Sparkline: <span class="sparkline" values="1,4,6,6,8,5,3,5"></span></p>
*    $('.sparkline').sparkline();
*
* For line charts, x values can also be specified:
*   <p>Sparkline: <span class="sparkline">1:1,2.7:4,3.4:6,5:6,6:8,8.7:5,9:3,10:5</span></p>
*    $('#sparkline1').sparkline([ [1,1], [2.7,4], [3.4,6], [5,6], [6,8], [8.7,5], [9,3], [10,5] ])
*
* By default, options should be passed in as the second argument to the sparkline function:
*   $('.sparkline').sparkline([1,2,3,4], {type: 'bar'})
*
* Options can also be set by passing them on the tag itself.  This feature is disabled by default though
* as there's a slight performance overhead:
*   $('.sparkline').sparkline([1,2,3,4], {enableTagOptions: true})
*   <p>Sparkline: <span class="sparkline" sparkType="bar" sparkBarColor="red">loading</span></p>
* Prefix all options supplied as tag attribute with "spark" (configurable by setting tagOptionsPrefix)
*
* Supported options:
*   lineColor - Color of the line used for the chart
*   fillColor - Color used to fill in the chart - Set to '' or false for a transparent chart
*   width - Width of the chart - Defaults to 3 times the number of values in pixels
*   height - Height of the chart - Defaults to the height of the containing element
*   chartRangeMin - Specify the minimum value to use for the Y range of the chart - Defaults to the minimum value supplied
*   chartRangeMax - Specify the maximum value to use for the Y range of the chart - Defaults to the maximum value supplied
*   chartRangeClip - Clip out of range values to the max/min specified by chartRangeMin and chartRangeMax
*   chartRangeMinX - Specify the minimum value to use for the X range of the chart - Defaults to the minimum value supplied
*   chartRangeMaxX - Specify the maximum value to use for the X range of the chart - Defaults to the maximum value supplied
*   composite - If true then don't erase any existing chart attached to the tag, but draw
*           another chart over the top - Note that width and height are ignored if an
*           existing chart is detected.
*   tagValuesAttribute - Name of tag attribute to check for data values - Defaults to 'values'
*   enableTagOptions - Whether to check tags for sparkline options
*   tagOptionsPrefix - Prefix used for options supplied as tag attributes - Defaults to 'spark'
*   disableHiddenCheck - If set to true, then the plugin will assume that charts will never be drawn into a
*           hidden dom element, avoding a browser reflow
*   disableInteraction - If set to true then all mouseover/click interaction behaviour will be disabled,
*       making the plugin perform much like it did in 1.x
*   disableTooltips - If set to true then tooltips will be disabled - Defaults to false (tooltips enabled)
*   disableHighlight - If set to true then highlighting of selected chart elements on mouseover will be disabled
*       defaults to false (highlights enabled)
*   highlightLighten - Factor to lighten/darken highlighted chart values by - Defaults to 1.4 for a 40% increase
*   tooltipContainer - Specify which DOM element the tooltip should be rendered into - defaults to document.body
*   tooltipClassname - Optional CSS classname to apply to tooltips - If not specified then a default style will be applied
*   tooltipOffsetX - How many pixels away from the mouse pointer to render the tooltip on the X axis
*   tooltipOffsetY - How many pixels away from the mouse pointer to render the tooltip on the r axis
*   tooltipFormatter  - Optional callback that allows you to override the HTML displayed in the tooltip
*       callback is given arguments of (sparkline, options, fields)
*   tooltipChartTitle - If specified then the tooltip uses the string specified by this setting as a title
*   tooltipFormat - A format string or SPFormat object  (or an array thereof for multiple entries)
*       to control the format of the tooltip
*   tooltipPrefix - A string to prepend to each field displayed in a tooltip
*   tooltipSuffix - A string to append to each field displayed in a tooltip
*   tooltipSkipNull - If true then null values will not have a tooltip displayed (defaults to true)
*   tooltipValueLookups - An object or range map to map field values to tooltip strings
*       (eg. to map -1 to "Lost", 0 to "Draw", and 1 to "Win")
*   numberFormatter - Optional callback for formatting numbers in tooltips
*   numberDigitGroupSep - Character to use for group separator in numbers "1,234" - Defaults to ","
*   numberDecimalMark - Character to use for the decimal point when formatting numbers - Defaults to "."
*   numberDigitGroupCount - Number of digits between group separator - Defaults to 3
*
* There are 7 types of sparkline, selected by supplying a "type" option of 'line' (default),
* 'bar', 'tristate', 'bullet', 'discrete', 'pie' or 'box'
*    line - Line chart.  Options:
*       spotColor - Set to '' to not end each line in a circular spot
*       minSpotColor - If set, color of spot at minimum value
*       maxSpotColor - If set, color of spot at maximum value
*       spotRadius - Radius in pixels
*       lineWidth - Width of line in pixels
*       normalRangeMin
*       normalRangeMax - If set draws a filled horizontal bar between these two values marking the "normal"
*                      or expected range of values
*       normalRangeColor - Color to use for the above bar
*       drawNormalOnTop - Draw the normal range above the chart fill color if true
*       defaultPixelsPerValue - Defaults to 3 pixels of width for each value in the chart
*       highlightSpotColor - The color to use for drawing a highlight spot on mouseover - Set to null to disable
*       highlightLineColor - The color to use for drawing a highlight line on mouseover - Set to null to disable
*       valueSpots - Specify which points to draw spots on, and in which color.  Accepts a range map
*
*   bar - Bar chart.  Options:
*       barColor - Color of bars for postive values
*       negBarColor - Color of bars for negative values
*       zeroColor - Color of bars with zero values
*       nullColor - Color of bars with null values - Defaults to omitting the bar entirely
*       barWidth - Width of bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*       barSpacing - Gap between bars in pixels
*       zeroAxis - Centers the y-axis around zero if true
*
*   tristate - Charts values of win (>0), lose (<0) or draw (=0)
*       posBarColor - Color of win values
*       negBarColor - Color of lose values
*       zeroBarColor - Color of draw values
*       barWidth - Width of bars in pixels
*       barSpacing - Gap between bars in pixels
*       colorMap - Optional mappnig of values to colors to override the *BarColor values above
*                  can be an Array of values to control the color of individual bars or a range map
*                  to specify colors for individual ranges of values
*
*   discrete - Options:
*       lineHeight - Height of each line in pixels - Defaults to 30% of the graph height
*       thesholdValue - Values less than this value will be drawn using thresholdColor instead of lineColor
*       thresholdColor
*
*   bullet - Values for bullet graphs msut be in the order: target, performance, range1, range2, range3, ...
*       options:
*       targetColor - The color of the vertical target marker
*       targetWidth - The width of the target marker in pixels
*       performanceColor - The color of the performance measure horizontal bar
*       rangeColors - Colors to use for each qualitative range background color
*
*   pie - Pie chart. Options:
*       sliceColors - An array of colors to use for pie slices
*       offset - Angle in degrees to offset the first slice - Try -90 or +90
*       borderWidth - Width of border to draw around the pie chart, in pixels - Defaults to 0 (no border)
*       borderColor - Color to use for the pie chart border - Defaults to #000
*
*   box - Box plot. Options:
*       raw - Set to true to supply pre-computed plot points as values
*             values should be: low_outlier, low_whisker, q1, median, q3, high_whisker, high_outlier
*             When set to false you can supply any number of values and the box plot will
*             be computed for you.  Default is false.
*       showOutliers - Set to true (default) to display outliers as circles
*       outlierIQR - Interquartile range used to determine outliers.  Default 1.5
*       boxLineColor - Outline color of the box
*       boxFillColor - Fill color for the box
*       whiskerColor - Line color used for whiskers
*       outlierLineColor - Outline color of outlier circles
*       outlierFillColor - Fill color of the outlier circles
*       spotRadius - Radius of outlier circles
*       medianColor - Line color of the median line
*       target - Draw a target cross hair at the supplied value (default undefined)
*
*
*
*   Examples:
*   $('#sparkline1').sparkline(myvalues, { lineColor: '#f00', fillColor: false });
*   $('.barsparks').sparkline('html', { type:'bar', height:'40px', barWidth:5 });
*   $('#tristate').sparkline([1,1,-1,1,0,0,-1], { type:'tristate' }):
*   $('#discrete').sparkline([1,3,4,5,5,3,4,5], { type:'discrete' });
*   $('#bullet').sparkline([10,12,12,9,7], { type:'bullet' });
*   $('#pie').sparkline([1,1,2], { type:'pie' });
*/

/*jslint regexp: true, browser: true, jquery: true, white: true, nomen: false, plusplus: false, maxerr: 500, indent: 4 */

(function(document, Math, undefined) { // performance/minified-size optimization
    (function(factory) {
        if(typeof define === 'function' && define.amd) {
            define(['jquery'], factory);
        } else if (jQuery && !jQuery.fn.sparkline) {
            factory(jQuery);
        }
    }
    (function($) {
        'use strict';
    
        var UNSET_OPTION = {},
            getDefaults, createClass, SPFormat, clipval, quartile, normalizeValue, normalizeValues,
            remove, isNumber, all, sum, addCSS, ensureArray, formatNumber, RangeMap,
            MouseHandler, Tooltip, barHighlightMixin,
            line, bar, tristate, discrete, bullet, pie, box, defaultStyles, initStyles,
            VShape, VCanvas_base, VCanvas_canvas, VCanvas_vml, pending, shapeCount = 0;
    
        /**
         * Default configuration settings
         */
        getDefaults = function () {
            return {
                // Settings common to most/all chart types
                common: {
                    type: 'line',
                    lineColor: '#00f',
                    fillColor: '#cdf',
                    defaultPixelsPerValue: 3,
                    width: 'auto',
                    height: 'auto',
                    composite: false,
                    tagValuesAttribute: 'values',
                    tagOptionsPrefix: 'spark',
                    enableTagOptions: false,
                    enableHighlight: true,
                    highlightLighten: 1.4,
                    tooltipSkipNull: true,
                    tooltipPrefix: '',
                    tooltipSuffix: '',
                    disableHiddenCheck: false,
                    numberFormatter: false,
                    numberDigitGroupCount: 3,
                    numberDigitGroupSep: ',',
                    numberDecimalMark: '.',
                    disableTooltips: false,
                    disableInteraction: false
                },
                // Defaults for line charts
                line: {
                    spotColor: '#f80',
                    highlightSpotColor: '#5f5',
                    highlightLineColor: '#f22',
                    spotRadius: 1.5,
                    minSpotColor: '#f80',
                    maxSpotColor: '#f80',
                    lineWidth: 1,
                    normalRangeMin: undefined,
                    normalRangeMax: undefined,
                    normalRangeColor: '#ccc',
                    drawNormalOnTop: false,
                    chartRangeMin: undefined,
                    chartRangeMax: undefined,
                    chartRangeMinX: undefined,
                    chartRangeMaxX: undefined,
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{y}}{{suffix}}')
                },
                // Defaults for bar charts
                bar: {
                    barColor: '#3366cc',
                    negBarColor: '#f44',
                    stackedBarColor: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                        '#dd4477', '#0099c6', '#990099'],
                    zeroColor: undefined,
                    nullColor: undefined,
                    zeroAxis: true,
                    barWidth: 4,
                    barSpacing: 1,
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    chartRangeClip: false,
                    colorMap: undefined,
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{prefix}}{{value}}{{suffix}}')
                },
                // Defaults for tristate charts
                tristate: {
                    barWidth: 4,
                    barSpacing: 1,
                    posBarColor: '#6f6',
                    negBarColor: '#f44',
                    zeroBarColor: '#999',
                    colorMap: {},
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value:map}}'),
                    tooltipValueLookups: { map: { '-1': 'Loss', '0': 'Draw', '1': 'Win' } }
                },
                // Defaults for discrete charts
                discrete: {
                    lineHeight: 'auto',
                    thresholdColor: undefined,
                    thresholdValue: 0,
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    chartRangeClip: false,
                    tooltipFormat: new SPFormat('{{prefix}}{{value}}{{suffix}}')
                },
                // Defaults for bullet charts
                bullet: {
                    targetColor: '#f33',
                    targetWidth: 3, // width of the target bar in pixels
                    performanceColor: '#33f',
                    rangeColors: ['#d3dafe', '#a8b6ff', '#7f94ff'],
                    base: undefined, // set this to a number to change the base start number
                    tooltipFormat: new SPFormat('{{fieldkey:fields}} - {{value}}'),
                    tooltipValueLookups: { fields: {r: 'Range', p: 'Performance', t: 'Target'} }
                },
                // Defaults for pie charts
                pie: {
                    offset: 0,
                    sliceColors: ['#3366cc', '#dc3912', '#ff9900', '#109618', '#66aa00',
                        '#dd4477', '#0099c6', '#990099'],
                    borderWidth: 0,
                    borderColor: '#000',
                    tooltipFormat: new SPFormat('<span style="color: {{color}}">&#9679;</span> {{value}} ({{percent.1}}%)')
                },
                // Defaults for box plots
                box: {
                    raw: false,
                    boxLineColor: '#000',
                    boxFillColor: '#cdf',
                    whiskerColor: '#000',
                    outlierLineColor: '#333',
                    outlierFillColor: '#fff',
                    medianColor: '#f00',
                    showOutliers: true,
                    outlierIQR: 1.5,
                    spotRadius: 1.5,
                    target: undefined,
                    targetColor: '#4a2',
                    chartRangeMax: undefined,
                    chartRangeMin: undefined,
                    tooltipFormat: new SPFormat('{{field:fields}}: {{value}}'),
                    tooltipFormatFieldlistKey: 'field',
                    tooltipValueLookups: { fields: { lq: 'Lower Quartile', med: 'Median',
                        uq: 'Upper Quartile', lo: 'Left Outlier', ro: 'Right Outlier',
                        lw: 'Left Whisker', rw: 'Right Whisker'} }
                }
            };
        };
    
        // You can have tooltips use a css class other than jqstooltip by specifying tooltipClassname
        defaultStyles = '.jqstooltip { ' +
                'position: absolute;' +
                'left: 0px;' +
                'top: 0px;' +
                'visibility: hidden;' +
                'background: rgb(0, 0, 0) transparent;' +
                'background-color: rgba(0,0,0,0.6);' +
                'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000);' +
                '-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#99000000, endColorstr=#99000000)";' +
                'color: white;' +
                'font: 10px arial, san serif;' +
                'text-align: left;' +
                'white-space: nowrap;' +
                'padding: 5px;' +
                'border: 1px solid white;' +
                'box-sizing: content-box;' +
                'z-index: 10000;' +
                '}' +
                '.jqsfield { ' +
                'color: white;' +
                'font: 10px arial, san serif;' +
                'text-align: left;' +
                '}';
    
        /**
         * Utilities
         */
    
        createClass = function (/* [baseclass, [mixin, ...]], definition */) {
            var Class, args;
            Class = function () {
                this.init.apply(this, arguments);
            };
            if (arguments.length > 1) {
                if (arguments[0]) {
                    Class.prototype = $.extend(new arguments[0](), arguments[arguments.length - 1]);
                    Class._super = arguments[0].prototype;
                } else {
                    Class.prototype = arguments[arguments.length - 1];
                }
                if (arguments.length > 2) {
                    args = Array.prototype.slice.call(arguments, 1, -1);
                    args.unshift(Class.prototype);
                    $.extend.apply($, args);
                }
            } else {
                Class.prototype = arguments[0];
            }
            Class.prototype.cls = Class;
            return Class;
        };
    
        /**
         * Wraps a format string for tooltips
         * {{x}}
         * {{x.2}
         * {{x:months}}
         */
        $.SPFormatClass = SPFormat = createClass({
            fre: /\{\{([\w.]+?)(:(.+?))?\}\}/g,
            precre: /(\w+)\.(\d+)/,
    
            init: function (format, fclass) {
                this.format = format;
                this.fclass = fclass;
            },
    
            render: function (fieldset, lookups, options) {
                var self = this,
                    fields = fieldset,
                    match, token, lookupkey, fieldvalue, prec;
                return this.format.replace(this.fre, function () {
                    var lookup;
                    token = arguments[1];
                    lookupkey = arguments[3];
                    match = self.precre.exec(token);
                    if (match) {
                        prec = match[2];
                        token = match[1];
                    } else {
                        prec = false;
                    }
                    fieldvalue = fields[token];
                    if (fieldvalue === undefined) {
                        return '';
                    }
                    if (lookupkey && lookups && lookups[lookupkey]) {
                        lookup = lookups[lookupkey];
                        if (lookup.get) { // RangeMap
                            return lookups[lookupkey].get(fieldvalue) || fieldvalue;
                        } else {
                            return lookups[lookupkey][fieldvalue] || fieldvalue;
                        }
                    }
                    if (isNumber(fieldvalue)) {
                        if (options.get('numberFormatter')) {
                            fieldvalue = options.get('numberFormatter')(fieldvalue);
                        } else {
                            fieldvalue = formatNumber(fieldvalue, prec,
                                options.get('numberDigitGroupCount'),
                                options.get('numberDigitGroupSep'),
                                options.get('numberDecimalMark'));
                        }
                    }
                    return fieldvalue;
                });
            }
        });
    
        // convience method to avoid needing the new operator
        $.spformat = function(format, fclass) {
            return new SPFormat(format, fclass);
        };
    
        clipval = function (val, min, max) {
            if (val < min) {
                return min;
            }
            if (val > max) {
                return max;
            }
            return val;
        };
    
        quartile = function (values, q) {
            var vl;
            if (q === 2) {
                vl = Math.floor(values.length / 2);
                return values.length % 2 ? values[vl] : (values[vl-1] + values[vl]) / 2;
            } else {
                if (values.length % 2 ) { // odd
                    vl = (values.length * q + q) / 4;
                    return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 : values[vl-1];
                } else { //even
                    vl = (values.length * q + 2) / 4;
                    return vl % 1 ? (values[Math.floor(vl)] + values[Math.floor(vl) - 1]) / 2 :  values[vl-1];
    
                }
            }
        };
    
        normalizeValue = function (val) {
            var nf;
            switch (val) {
                case 'undefined':
                    val = undefined;
                    break;
                case 'null':
                    val = null;
                    break;
                case 'true':
                    val = true;
                    break;
                case 'false':
                    val = false;
                    break;
                default:
                    nf = parseFloat(val);
                    if (val == nf) {
                        val = nf;
                    }
            }
            return val;
        };
    
        normalizeValues = function (vals) {
            var i, result = [];
            for (i = vals.length; i--;) {
                result[i] = normalizeValue(vals[i]);
            }
            return result;
        };
    
        remove = function (vals, filter) {
            var i, vl, result = [];
            for (i = 0, vl = vals.length; i < vl; i++) {
                if (vals[i] !== filter) {
                    result.push(vals[i]);
                }
            }
            return result;
        };
    
        isNumber = function (num) {
            return !isNaN(parseFloat(num)) && isFinite(num);
        };
    
        formatNumber = function (num, prec, groupsize, groupsep, decsep) {
            var p, i;
            num = (prec === false ? parseFloat(num).toString() : num.toFixed(prec)).split('');
            p = (p = $.inArray('.', num)) < 0 ? num.length : p;
            if (p < num.length) {
                num[p] = decsep;
            }
            for (i = p - groupsize; i > 0; i -= groupsize) {
                num.splice(i, 0, groupsep);
            }
            return num.join('');
        };
    
        // determine if all values of an array match a value
        // returns true if the array is empty
        all = function (val, arr, ignoreNull) {
            var i;
            for (i = arr.length; i--; ) {
                if (ignoreNull && arr[i] === null) continue;
                if (arr[i] !== val) {
                    return false;
                }
            }
            return true;
        };
    
        // sums the numeric values in an array, ignoring other values
        sum = function (vals) {
            var total = 0, i;
            for (i = vals.length; i--;) {
                total += typeof vals[i] === 'number' ? vals[i] : 0;
            }
            return total;
        };
    
        ensureArray = function (val) {
            return $.isArray(val) ? val : [val];
        };
    
        // http://paulirish.com/2008/bookmarklet-inject-new-css-rules/
        addCSS = function(css) {
            var tag, iefail;
            if (document.createStyleSheet) {
                try {
                    document.createStyleSheet().cssText = css;
                    return;
                } catch (e) {
                    // IE <= 9 maxes out at 31 stylesheets; inject into page instead.
                    iefail = true;
                }
            }
            tag = document.createElement('style');
            tag.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(tag);
            if (iefail) {
                document.styleSheets[document.styleSheets.length - 1].cssText = css;
            } else {
                tag[(typeof document.body.style.WebkitAppearance == 'string') /* webkit only */ ? 'innerText' : 'innerHTML'] = css;
            }
        };
    
        // Provide a cross-browser interface to a few simple drawing primitives
        $.fn.simpledraw = function (width, height, useExisting, interact) {
            var target, mhandler;
            if (useExisting && (target = this.data('_jqs_vcanvas'))) {
                return target;
            }
    
            if ($.fn.sparkline.canvas === false) {
                // We've already determined that neither Canvas nor VML are available
                return false;
    
            } else if ($.fn.sparkline.canvas === undefined) {
                // No function defined yet -- need to see if we support Canvas or VML
                var el = document.createElement('canvas');
                if (!!(el.getContext && el.getContext('2d'))) {
                    // Canvas is available
                    $.fn.sparkline.canvas = function(width, height, target, interact) {
                        return new VCanvas_canvas(width, height, target, interact);
                    };
                } else if (document.namespaces && !document.namespaces.v) {
                    // VML is available
                    document.namespaces.add('v', 'urn:schemas-microsoft-com:vml', '#default#VML');
                    $.fn.sparkline.canvas = function(width, height, target, interact) {
                        return new VCanvas_vml(width, height, target);
                    };
                } else {
                    // Neither Canvas nor VML are available
                    $.fn.sparkline.canvas = false;
                    return false;
                }
            }
    
            if (width === undefined) {
                width = $(this).innerWidth();
            }
            if (height === undefined) {
                height = $(this).innerHeight();
            }
    
            target = $.fn.sparkline.canvas(width, height, this, interact);
    
            mhandler = $(this).data('_jqs_mhandler');
            if (mhandler) {
                mhandler.registerCanvas(target);
            }
            return target;
        };
    
        $.fn.cleardraw = function () {
            var target = this.data('_jqs_vcanvas');
            if (target) {
                target.reset();
            }
        };
    
        $.RangeMapClass = RangeMap = createClass({
            init: function (map) {
                var key, range, rangelist = [];
                for (key in map) {
                    if (map.hasOwnProperty(key) && typeof key === 'string' && key.indexOf(':') > -1) {
                        range = key.split(':');
                        range[0] = range[0].length === 0 ? -Infinity : parseFloat(range[0]);
                        range[1] = range[1].length === 0 ? Infinity : parseFloat(range[1]);
                        range[2] = map[key];
                        rangelist.push(range);
                    }
                }
                this.map = map;
                this.rangelist = rangelist || false;
            },
    
            get: function (value) {
                var rangelist = this.rangelist,
                    i, range, result;
                if ((result = this.map[value]) !== undefined) {
                    return result;
                }
                if (rangelist) {
                    for (i = rangelist.length; i--;) {
                        range = rangelist[i];
                        if (range[0] <= value && range[1] >= value) {
                            return range[2];
                        }
                    }
                }
                return undefined;
            }
        });
    
        // Convenience function
        $.range_map = function(map) {
            return new RangeMap(map);
        };
    
        MouseHandler = createClass({
            init: function (el, options) {
                var $el = $(el);
                this.$el = $el;
                this.options = options;
                this.currentPageX = 0;
                this.currentPageY = 0;
                this.el = el;
                this.splist = [];
                this.tooltip = null;
                this.over = false;
                this.displayTooltips = !options.get('disableTooltips');
                this.highlightEnabled = !options.get('disableHighlight');
            },
    
            registerSparkline: function (sp) {
                this.splist.push(sp);
                if (this.over) {
                    this.updateDisplay();
                }
            },
    
            registerCanvas: function (canvas) {
                var $canvas = $(canvas.canvas);
                this.canvas = canvas;
                this.$canvas = $canvas;
                $canvas.mouseenter($.proxy(this.mouseenter, this));
                $canvas.mouseleave($.proxy(this.mouseleave, this));
                $canvas.click($.proxy(this.mouseclick, this));
            },
    
            reset: function (removeTooltip) {
                this.splist = [];
                if (this.tooltip && removeTooltip) {
                    this.tooltip.remove();
                    this.tooltip = undefined;
                }
            },
    
            mouseclick: function (e) {
                var clickEvent = $.Event('sparklineClick');
                clickEvent.originalEvent = e;
                clickEvent.sparklines = this.splist;
                this.$el.trigger(clickEvent);
            },
    
            mouseenter: function (e) {
                $(document.body).unbind('mousemove.jqs');
                $(document.body).bind('mousemove.jqs', $.proxy(this.mousemove, this));
                this.over = true;
                this.currentPageX = e.pageX;
                this.currentPageY = e.pageY;
                this.currentEl = e.target;
                if (!this.tooltip && this.displayTooltips) {
                    this.tooltip = new Tooltip(this.options);
                    this.tooltip.updatePosition(e.pageX, e.pageY);
                }
                this.updateDisplay();
            },
    
            mouseleave: function () {
                $(document.body).unbind('mousemove.jqs');
                var splist = this.splist,
                     spcount = splist.length,
                     needsRefresh = false,
                     sp, i;
                this.over = false;
                this.currentEl = null;
    
                if (this.tooltip) {
                    this.tooltip.remove();
                    this.tooltip = null;
                }
    
                for (i = 0; i < spcount; i++) {
                    sp = splist[i];
                    if (sp.clearRegionHighlight()) {
                        needsRefresh = true;
                    }
                }
    
                if (needsRefresh) {
                    this.canvas.render();
                }
            },
    
            mousemove: function (e) {
                this.currentPageX = e.pageX;
                this.currentPageY = e.pageY;
                this.currentEl = e.target;
                if (this.tooltip) {
                    this.tooltip.updatePosition(e.pageX, e.pageY);
                }
                this.updateDisplay();
            },
    
            updateDisplay: function () {
                var splist = this.splist,
                     spcount = splist.length,
                     needsRefresh = false,
                     offset = this.$canvas.offset(),
                     localX = this.currentPageX - offset.left,
                     localY = this.currentPageY - offset.top,
                     tooltiphtml, sp, i, result, changeEvent;
                if (!this.over) {
                    return;
                }
                for (i = 0; i < spcount; i++) {
                    sp = splist[i];
                    result = sp.setRegionHighlight(this.currentEl, localX, localY);
                    if (result) {
                        needsRefresh = true;
                    }
                }
                if (needsRefresh) {
                    changeEvent = $.Event('sparklineRegionChange');
                    changeEvent.sparklines = this.splist;
                    this.$el.trigger(changeEvent);
                    if (this.tooltip) {
                        tooltiphtml = '';
                        for (i = 0; i < spcount; i++) {
                            sp = splist[i];
                            tooltiphtml += sp.getCurrentRegionTooltip();
                        }
                        this.tooltip.setContent(tooltiphtml);
                    }
                    if (!this.disableHighlight) {
                        this.canvas.render();
                    }
                }
                if (result === null) {
                    this.mouseleave();
                }
            }
        });
    
    
        Tooltip = createClass({
            sizeStyle: 'position: static !important;' +
                'display: block !important;' +
                'visibility: hidden !important;' +
                'float: left !important;',
    
            init: function (options) {
                var tooltipClassname = options.get('tooltipClassname', 'jqstooltip'),
                    sizetipStyle = this.sizeStyle,
                    offset;
                this.container = options.get('tooltipContainer') || document.body;
                this.tooltipOffsetX = options.get('tooltipOffsetX', 10);
                this.tooltipOffsetY = options.get('tooltipOffsetY', 12);
                // remove any previous lingering tooltip
                $('#jqssizetip').remove();
                $('#jqstooltip').remove();
                this.sizetip = $('<div/>', {
                    id: 'jqssizetip',
                    style: sizetipStyle,
                    'class': tooltipClassname
                });
                this.tooltip = $('<div/>', {
                    id: 'jqstooltip',
                    'class': tooltipClassname
                }).appendTo(this.container);
                // account for the container's location
                offset = this.tooltip.offset();
                this.offsetLeft = offset.left;
                this.offsetTop = offset.top;
                this.hidden = true;
                $(window).unbind('resize.jqs scroll.jqs');
                $(window).bind('resize.jqs scroll.jqs', $.proxy(this.updateWindowDims, this));
                this.updateWindowDims();
            },
    
            updateWindowDims: function () {
                this.scrollTop = $(window).scrollTop();
                this.scrollLeft = $(window).scrollLeft();
                this.scrollRight = this.scrollLeft + $(window).width();
                this.updatePosition();
            },
    
            getSize: function (content) {
                this.sizetip.html(content).appendTo(this.container);
                this.width = this.sizetip.width() + 1;
                this.height = this.sizetip.height();
                this.sizetip.remove();
            },
    
            setContent: function (content) {
                if (!content) {
                    this.tooltip.css('visibility', 'hidden');
                    this.hidden = true;
                    return;
                }
                this.getSize(content);
                this.tooltip.html(content)
                    .css({
                        'width': this.width,
                        'height': this.height,
                        'visibility': 'visible'
                    });
                if (this.hidden) {
                    this.hidden = false;
                    this.updatePosition();
                }
            },
    
            updatePosition: function (x, y) {
                if (x === undefined) {
                    if (this.mousex === undefined) {
                        return;
                    }
                    x = this.mousex - this.offsetLeft;
                    y = this.mousey - this.offsetTop;
    
                } else {
                    this.mousex = x = x - this.offsetLeft;
                    this.mousey = y = y - this.offsetTop;
                }
                if (!this.height || !this.width || this.hidden) {
                    return;
                }
    
                y -= this.height + this.tooltipOffsetY;
                x += this.tooltipOffsetX;
    
                if (y < this.scrollTop) {
                    y = this.scrollTop;
                }
                if (x < this.scrollLeft) {
                    x = this.scrollLeft;
                } else if (x + this.width > this.scrollRight) {
                    x = this.scrollRight - this.width;
                }
    
                this.tooltip.css({
                    'left': x,
                    'top': y
                });
            },
    
            remove: function () {
                this.tooltip.remove();
                this.sizetip.remove();
                this.sizetip = this.tooltip = undefined;
                $(window).unbind('resize.jqs scroll.jqs');
            }
        });
    
        initStyles = function() {
            addCSS(defaultStyles);
        };
    
        $(initStyles);
    
        pending = [];
        $.fn.sparkline = function (userValues, userOptions) {
            return this.each(function () {
                var options = new $.fn.sparkline.options(this, userOptions),
                     $this = $(this),
                     render, i;
                render = function () {
                    var values, width, height, tmp, mhandler, sp, vals;
                    if (userValues === 'html' || userValues === undefined) {
                        vals = this.getAttribute(options.get('tagValuesAttribute'));
                        if (vals === undefined || vals === null) {
                            vals = $this.html();
                        }
                        values = vals.replace(/(^\s*<!--)|(-->\s*$)|\s+/g, '').split(',');
                    } else {
                        values = userValues;
                    }
    
                    width = options.get('width') === 'auto' ? values.length * options.get('defaultPixelsPerValue') : options.get('width');
                    if (options.get('height') === 'auto') {
                        if (!options.get('composite') || !$.data(this, '_jqs_vcanvas')) {
                            // must be a better way to get the line height
                            tmp = document.createElement('span');
                            tmp.innerHTML = 'a';
                            $this.html(tmp);
                            height = $(tmp).innerHeight() || $(tmp).height();
                            $(tmp).remove();
                            tmp = null;
                        }
                    } else {
                        height = options.get('height');
                    }
    
                    if (!options.get('disableInteraction')) {
                        mhandler = $.data(this, '_jqs_mhandler');
                        if (!mhandler) {
                            mhandler = new MouseHandler(this, options);
                            $.data(this, '_jqs_mhandler', mhandler);
                        } else if (!options.get('composite')) {
                            mhandler.reset();
                        }
                    } else {
                        mhandler = false;
                    }
    
                    if (options.get('composite') && !$.data(this, '_jqs_vcanvas')) {
                        if (!$.data(this, '_jqs_errnotify')) {
                            alert('Attempted to attach a composite sparkline to an element with no existing sparkline');
                            $.data(this, '_jqs_errnotify', true);
                        }
                        return;
                    }
    
                    sp = new $.fn.sparkline[options.get('type')](this, values, options, width, height);
    
                    sp.render();
    
                    if (mhandler) {
                        mhandler.registerSparkline(sp);
                    }
                };
                if (($(this).html() && !options.get('disableHiddenCheck') && $(this).is(':hidden')) || !$(this).parents('body').length) {
                    if (!options.get('composite') && $.data(this, '_jqs_pending')) {
                        // remove any existing references to the element
                        for (i = pending.length; i; i--) {
                            if (pending[i - 1][0] == this) {
                                pending.splice(i - 1, 1);
                            }
                        }
                    }
                    pending.push([this, render]);
                    $.data(this, '_jqs_pending', true);
                } else {
                    render.call(this);
                }
            });
        };
    
        $.fn.sparkline.defaults = getDefaults();
    
    
        $.sparkline_display_visible = function () {
            var el, i, pl;
            var done = [];
            for (i = 0, pl = pending.length; i < pl; i++) {
                el = pending[i][0];
                if ($(el).is(':visible') && !$(el).parents().is(':hidden')) {
                    pending[i][1].call(el);
                    $.data(pending[i][0], '_jqs_pending', false);
                    done.push(i);
                } else if (!$(el).closest('html').length && !$.data(el, '_jqs_pending')) {
                    // element has been inserted and removed from the DOM
                    // If it was not yet inserted into the dom then the .data request
                    // will return true.
                    // removing from the dom causes the data to be removed.
                    $.data(pending[i][0], '_jqs_pending', false);
                    done.push(i);
                }
            }
            for (i = done.length; i; i--) {
                pending.splice(done[i - 1], 1);
            }
        };
    
    
        /**
         * User option handler
         */
        $.fn.sparkline.options = createClass({
            init: function (tag, userOptions) {
                var extendedOptions, defaults, base, tagOptionType;
                this.userOptions = userOptions = userOptions || {};
                this.tag = tag;
                this.tagValCache = {};
                defaults = $.fn.sparkline.defaults;
                base = defaults.common;
                this.tagOptionsPrefix = userOptions.enableTagOptions && (userOptions.tagOptionsPrefix || base.tagOptionsPrefix);
    
                tagOptionType = this.getTagSetting('type');
                if (tagOptionType === UNSET_OPTION) {
                    extendedOptions = defaults[userOptions.type || base.type];
                } else {
                    extendedOptions = defaults[tagOptionType];
                }
                this.mergedOptions = $.extend({}, base, extendedOptions, userOptions);
            },
    
    
            getTagSetting: function (key) {
                var prefix = this.tagOptionsPrefix,
                    val, i, pairs, keyval;
                if (prefix === false || prefix === undefined) {
                    return UNSET_OPTION;
                }
                if (this.tagValCache.hasOwnProperty(key)) {
                    val = this.tagValCache.key;
                } else {
                    val = this.tag.getAttribute(prefix + key);
                    if (val === undefined || val === null) {
                        val = UNSET_OPTION;
                    } else if (val.substr(0, 1) === '[') {
                        val = val.substr(1, val.length - 2).split(',');
                        for (i = val.length; i--;) {
                            val[i] = normalizeValue(val[i].replace(/(^\s*)|(\s*$)/g, ''));
                        }
                    } else if (val.substr(0, 1) === '{') {
                        pairs = val.substr(1, val.length - 2).split(',');
                        val = {};
                        for (i = pairs.length; i--;) {
                            keyval = pairs[i].split(':', 2);
                            val[keyval[0].replace(/(^\s*)|(\s*$)/g, '')] = normalizeValue(keyval[1].replace(/(^\s*)|(\s*$)/g, ''));
                        }
                    } else {
                        val = normalizeValue(val);
                    }
                    this.tagValCache.key = val;
                }
                return val;
            },
    
            get: function (key, defaultval) {
                var tagOption = this.getTagSetting(key),
                    result;
                if (tagOption !== UNSET_OPTION) {
                    return tagOption;
                }
                return (result = this.mergedOptions[key]) === undefined ? defaultval : result;
            }
        });
    
    
        $.fn.sparkline._base = createClass({
            disabled: false,
    
            init: function (el, values, options, width, height) {
                this.el = el;
                this.$el = $(el);
                this.values = values;
                this.options = options;
                this.width = width;
                this.height = height;
                this.currentRegion = undefined;
            },
    
            /**
             * Setup the canvas
             */
            initTarget: function () {
                var interactive = !this.options.get('disableInteraction');
                if (!(this.target = this.$el.simpledraw(this.width, this.height, this.options.get('composite'), interactive))) {
                    this.disabled = true;
                } else {
                    this.canvasWidth = this.target.pixelWidth;
                    this.canvasHeight = this.target.pixelHeight;
                }
            },
    
            /**
             * Actually render the chart to the canvas
             */
            render: function () {
                if (this.disabled) {
                    this.el.innerHTML = '';
                    return false;
                }
                return true;
            },
    
            /**
             * Return a region id for a given x/y co-ordinate
             */
            getRegion: function (x, y) {
            },
    
            /**
             * Highlight an item based on the moused-over x,y co-ordinate
             */
            setRegionHighlight: function (el, x, y) {
                var currentRegion = this.currentRegion,
                    highlightEnabled = !this.options.get('disableHighlight'),
                    newRegion;
                if (x > this.canvasWidth || y > this.canvasHeight || x < 0 || y < 0) {
                    return null;
                }
                newRegion = this.getRegion(el, x, y);
                if (currentRegion !== newRegion) {
                    if (currentRegion !== undefined && highlightEnabled) {
                        this.removeHighlight();
                    }
                    this.currentRegion = newRegion;
                    if (newRegion !== undefined && highlightEnabled) {
                        this.renderHighlight();
                    }
                    return true;
                }
                return false;
            },
    
            /**
             * Reset any currently highlighted item
             */
            clearRegionHighlight: function () {
                if (this.currentRegion !== undefined) {
                    this.removeHighlight();
                    this.currentRegion = undefined;
                    return true;
                }
                return false;
            },
    
            renderHighlight: function () {
                this.changeHighlight(true);
            },
    
            removeHighlight: function () {
                this.changeHighlight(false);
            },
    
            changeHighlight: function (highlight)  {},
    
            /**
             * Fetch the HTML to display as a tooltip
             */
            getCurrentRegionTooltip: function () {
                var options = this.options,
                    header = '',
                    entries = [],
                    fields, formats, formatlen, fclass, text, i,
                    showFields, showFieldsKey, newFields, fv,
                    formatter, format, fieldlen, j;
                if (this.currentRegion === undefined) {
                    return '';
                }
                fields = this.getCurrentRegionFields();
                formatter = options.get('tooltipFormatter');
                if (formatter) {
                    return formatter(this, options, fields);
                }
                if (options.get('tooltipChartTitle')) {
                    header += '<div class="jqs jqstitle">' + options.get('tooltipChartTitle') + '</div>\n';
                }
                formats = this.options.get('tooltipFormat');
                if (!formats) {
                    return '';
                }
                if (!$.isArray(formats)) {
                    formats = [formats];
                }
                if (!$.isArray(fields)) {
                    fields = [fields];
                }
                showFields = this.options.get('tooltipFormatFieldlist');
                showFieldsKey = this.options.get('tooltipFormatFieldlistKey');
                if (showFields && showFieldsKey) {
                    // user-selected ordering of fields
                    newFields = [];
                    for (i = fields.length; i--;) {
                        fv = fields[i][showFieldsKey];
                        if ((j = $.inArray(fv, showFields)) != -1) {
                            newFields[j] = fields[i];
                        }
                    }
                    fields = newFields;
                }
                formatlen = formats.length;
                fieldlen = fields.length;
                for (i = 0; i < formatlen; i++) {
                    format = formats[i];
                    if (typeof format === 'string') {
                        format = new SPFormat(format);
                    }
                    fclass = format.fclass || 'jqsfield';
                    for (j = 0; j < fieldlen; j++) {
                        if (!fields[j].isNull || !options.get('tooltipSkipNull')) {
                            $.extend(fields[j], {
                                prefix: options.get('tooltipPrefix'),
                                suffix: options.get('tooltipSuffix')
                            });
                            text = format.render(fields[j], options.get('tooltipValueLookups'), options);
                            entries.push('<div class="' + fclass + '">' + text + '</div>');
                        }
                    }
                }
                if (entries.length) {
                    return header + entries.join('\n');
                }
                return '';
            },
    
            getCurrentRegionFields: function () {},
    
            calcHighlightColor: function (color, options) {
                var highlightColor = options.get('highlightColor'),
                    lighten = options.get('highlightLighten'),
                    parse, mult, rgbnew, i;
                if (highlightColor) {
                    return highlightColor;
                }
                if (lighten) {
                    // extract RGB values
                    parse = /^#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(color) || /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(color);
                    if (parse) {
                        rgbnew = [];
                        mult = color.length === 4 ? 16 : 1;
                        for (i = 0; i < 3; i++) {
                            rgbnew[i] = clipval(Math.round(parseInt(parse[i + 1], 16) * mult * lighten), 0, 255);
                        }
                        return 'rgb(' + rgbnew.join(',') + ')';
                    }
    
                }
                return color;
            }
    
        });
    
        barHighlightMixin = {
            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                    target = this.target,
                    shapeids = this.regionShapes[currentRegion],
                    newShapes;
                // will be null if the region value was null
                if (shapeids) {
                    newShapes = this.renderRegion(currentRegion, highlight);
                    if ($.isArray(newShapes) || $.isArray(shapeids)) {
                        target.replaceWithShapes(shapeids, newShapes);
                        this.regionShapes[currentRegion] = $.map(newShapes, function (newShape) {
                            return newShape.id;
                        });
                    } else {
                        target.replaceWithShape(shapeids, newShapes);
                        this.regionShapes[currentRegion] = newShapes.id;
                    }
                }
            },
    
            render: function () {
                var values = this.values,
                    target = this.target,
                    regionShapes = this.regionShapes,
                    shapes, ids, i, j;
    
                if (!this.cls._super.render.call(this)) {
                    return;
                }
                for (i = values.length; i--;) {
                    shapes = this.renderRegion(i);
                    if (shapes) {
                        if ($.isArray(shapes)) {
                            ids = [];
                            for (j = shapes.length; j--;) {
                                shapes[j].append();
                                ids.push(shapes[j].id);
                            }
                            regionShapes[i] = ids;
                        } else {
                            shapes.append();
                            regionShapes[i] = shapes.id; // store just the shapeid
                        }
                    } else {
                        // null value
                        regionShapes[i] = null;
                    }
                }
                target.render();
            }
        };
    
        /**
         * Line charts
         */
        $.fn.sparkline.line = line = createClass($.fn.sparkline._base, {
            type: 'line',
    
            init: function (el, values, options, width, height) {
                line._super.init.call(this, el, values, options, width, height);
                this.vertices = [];
                this.regionMap = [];
                this.xvalues = [];
                this.yvalues = [];
                this.yminmax = [];
                this.hightlightSpotId = null;
                this.lastShapeId = null;
                this.initTarget();
            },
    
            getRegion: function (el, x, y) {
                var i,
                    regionMap = this.regionMap; // maps regions to value positions
                for (i = regionMap.length; i--;) {
                    if (regionMap[i] !== null && x >= regionMap[i][0] && x <= regionMap[i][1]) {
                        return regionMap[i][2];
                    }
                }
                return undefined;
            },
    
            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.yvalues[currentRegion] === null,
                    x: this.xvalues[currentRegion],
                    y: this.yvalues[currentRegion],
                    color: this.options.get('lineColor'),
                    fillColor: this.options.get('fillColor'),
                    offset: currentRegion
                };
            },
    
            renderHighlight: function () {
                var currentRegion = this.currentRegion,
                    target = this.target,
                    vertex = this.vertices[currentRegion],
                    options = this.options,
                    spotRadius = options.get('spotRadius'),
                    highlightSpotColor = options.get('highlightSpotColor'),
                    highlightLineColor = options.get('highlightLineColor'),
                    highlightSpot, highlightLine;
    
                if (!vertex) {
                    return;
                }
                if (spotRadius && highlightSpotColor) {
                    highlightSpot = target.drawCircle(vertex[0], vertex[1],
                        spotRadius, undefined, highlightSpotColor);
                    this.highlightSpotId = highlightSpot.id;
                    target.insertAfterShape(this.lastShapeId, highlightSpot);
                }
                if (highlightLineColor) {
                    highlightLine = target.drawLine(vertex[0], this.canvasTop, vertex[0],
                        this.canvasTop + this.canvasHeight, highlightLineColor);
                    this.highlightLineId = highlightLine.id;
                    target.insertAfterShape(this.lastShapeId, highlightLine);
                }
            },
    
            removeHighlight: function () {
                var target = this.target;
                if (this.highlightSpotId) {
                    target.removeShapeId(this.highlightSpotId);
                    this.highlightSpotId = null;
                }
                if (this.highlightLineId) {
                    target.removeShapeId(this.highlightLineId);
                    this.highlightLineId = null;
                }
            },
    
            scanValues: function () {
                var values = this.values,
                    valcount = values.length,
                    xvalues = this.xvalues,
                    yvalues = this.yvalues,
                    yminmax = this.yminmax,
                    i, val, isStr, isArray, sp;
                for (i = 0; i < valcount; i++) {
                    val = values[i];
                    isStr = typeof(values[i]) === 'string';
                    isArray = typeof(values[i]) === 'object' && values[i] instanceof Array;
                    sp = isStr && values[i].split(':');
                    if (isStr && sp.length === 2) { // x:y
                        xvalues.push(Number(sp[0]));
                        yvalues.push(Number(sp[1]));
                        yminmax.push(Number(sp[1]));
                    } else if (isArray) {
                        xvalues.push(val[0]);
                        yvalues.push(val[1]);
                        yminmax.push(val[1]);
                    } else {
                        xvalues.push(i);
                        if (values[i] === null || values[i] === 'null') {
                            yvalues.push(null);
                        } else {
                            yvalues.push(Number(val));
                            yminmax.push(Number(val));
                        }
                    }
                }
                if (this.options.get('xvalues')) {
                    xvalues = this.options.get('xvalues');
                }
    
                this.maxy = this.maxyorg = Math.max.apply(Math, yminmax);
                this.miny = this.minyorg = Math.min.apply(Math, yminmax);
    
                this.maxx = Math.max.apply(Math, xvalues);
                this.minx = Math.min.apply(Math, xvalues);
    
                this.xvalues = xvalues;
                this.yvalues = yvalues;
                this.yminmax = yminmax;
    
            },
    
            processRangeOptions: function () {
                var options = this.options,
                    normalRangeMin = options.get('normalRangeMin'),
                    normalRangeMax = options.get('normalRangeMax');
    
                if (normalRangeMin !== undefined) {
                    if (normalRangeMin < this.miny) {
                        this.miny = normalRangeMin;
                    }
                    if (normalRangeMax > this.maxy) {
                        this.maxy = normalRangeMax;
                    }
                }
                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.miny)) {
                    this.miny = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.maxy)) {
                    this.maxy = options.get('chartRangeMax');
                }
                if (options.get('chartRangeMinX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMinX') < this.minx)) {
                    this.minx = options.get('chartRangeMinX');
                }
                if (options.get('chartRangeMaxX') !== undefined && (options.get('chartRangeClipX') || options.get('chartRangeMaxX') > this.maxx)) {
                    this.maxx = options.get('chartRangeMaxX');
                }
    
            },
    
            drawNormalRange: function (canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey) {
                var normalRangeMin = this.options.get('normalRangeMin'),
                    normalRangeMax = this.options.get('normalRangeMax'),
                    ytop = canvasTop + Math.round(canvasHeight - (canvasHeight * ((normalRangeMax - this.miny) / rangey))),
                    height = Math.round((canvasHeight * (normalRangeMax - normalRangeMin)) / rangey);
                this.target.drawRect(canvasLeft, ytop, canvasWidth, height, undefined, this.options.get('normalRangeColor')).append();
            },
    
            render: function () {
                var options = this.options,
                    target = this.target,
                    canvasWidth = this.canvasWidth,
                    canvasHeight = this.canvasHeight,
                    vertices = this.vertices,
                    spotRadius = options.get('spotRadius'),
                    regionMap = this.regionMap,
                    rangex, rangey, yvallast,
                    canvasTop, canvasLeft,
                    vertex, path, paths, x, y, xnext, xpos, xposnext,
                    last, next, yvalcount, lineShapes, fillShapes, plen,
                    valueSpots, hlSpotsEnabled, color, xvalues, yvalues, i;
    
                if (!line._super.render.call(this)) {
                    return;
                }
    
                this.scanValues();
                this.processRangeOptions();
    
                xvalues = this.xvalues;
                yvalues = this.yvalues;
    
                if (!this.yminmax.length || this.yvalues.length < 2) {
                    // empty or all null valuess
                    return;
                }
    
                canvasTop = canvasLeft = 0;
    
                rangex = this.maxx - this.minx === 0 ? 1 : this.maxx - this.minx;
                rangey = this.maxy - this.miny === 0 ? 1 : this.maxy - this.miny;
                yvallast = this.yvalues.length - 1;
    
                if (spotRadius && (canvasWidth < (spotRadius * 4) || canvasHeight < (spotRadius * 4))) {
                    spotRadius = 0;
                }
                if (spotRadius) {
                    // adjust the canvas size as required so that spots will fit
                    hlSpotsEnabled = options.get('highlightSpotColor') &&  !options.get('disableInteraction');
                    if (hlSpotsEnabled || options.get('minSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.miny)) {
                        canvasHeight -= Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled || options.get('maxSpotColor') || (options.get('spotColor') && yvalues[yvallast] === this.maxy)) {
                        canvasHeight -= Math.ceil(spotRadius);
                        canvasTop += Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled ||
                         ((options.get('minSpotColor') || options.get('maxSpotColor')) && (yvalues[0] === this.miny || yvalues[0] === this.maxy))) {
                        canvasLeft += Math.ceil(spotRadius);
                        canvasWidth -= Math.ceil(spotRadius);
                    }
                    if (hlSpotsEnabled || options.get('spotColor') ||
                        (options.get('minSpotColor') || options.get('maxSpotColor') &&
                            (yvalues[yvallast] === this.miny || yvalues[yvallast] === this.maxy))) {
                        canvasWidth -= Math.ceil(spotRadius);
                    }
                }
    
    
                canvasHeight--;
    
                if (options.get('normalRangeMin') !== undefined && !options.get('drawNormalOnTop')) {
                    this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
                }
    
                path = [];
                paths = [path];
                last = next = null;
                yvalcount = yvalues.length;
                for (i = 0; i < yvalcount; i++) {
                    x = xvalues[i];
                    xnext = xvalues[i + 1];
                    y = yvalues[i];
                    xpos = canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex));
                    xposnext = i < yvalcount - 1 ? canvasLeft + Math.round((xnext - this.minx) * (canvasWidth / rangex)) : canvasWidth;
                    next = xpos + ((xposnext - xpos) / 2);
                    regionMap[i] = [last || 0, next, i];
                    last = next;
                    if (y === null) {
                        if (i) {
                            if (yvalues[i - 1] !== null) {
                                path = [];
                                paths.push(path);
                            }
                            vertices.push(null);
                        }
                    } else {
                        if (y < this.miny) {
                            y = this.miny;
                        }
                        if (y > this.maxy) {
                            y = this.maxy;
                        }
                        if (!path.length) {
                            // previous value was null
                            path.push([xpos, canvasTop + canvasHeight]);
                        }
                        vertex = [xpos, canvasTop + Math.round(canvasHeight - (canvasHeight * ((y - this.miny) / rangey)))];
                        path.push(vertex);
                        vertices.push(vertex);
                    }
                }
    
                lineShapes = [];
                fillShapes = [];
                plen = paths.length;
                for (i = 0; i < plen; i++) {
                    path = paths[i];
                    if (path.length) {
                        if (options.get('fillColor')) {
                            path.push([path[path.length - 1][0], (canvasTop + canvasHeight)]);
                            fillShapes.push(path.slice(0));
                            path.pop();
                        }
                        // if there's only a single point in this path, then we want to display it
                        // as a vertical line which means we keep path[0]  as is
                        if (path.length > 2) {
                            // else we want the first value
                            path[0] = [path[0][0], path[1][1]];
                        }
                        lineShapes.push(path);
                    }
                }
    
                // draw the fill first, then optionally the normal range, then the line on top of that
                plen = fillShapes.length;
                for (i = 0; i < plen; i++) {
                    target.drawShape(fillShapes[i],
                        options.get('fillColor'), options.get('fillColor')).append();
                }
    
                if (options.get('normalRangeMin') !== undefined && options.get('drawNormalOnTop')) {
                    this.drawNormalRange(canvasLeft, canvasTop, canvasHeight, canvasWidth, rangey);
                }
    
                plen = lineShapes.length;
                for (i = 0; i < plen; i++) {
                    target.drawShape(lineShapes[i], options.get('lineColor'), undefined,
                        options.get('lineWidth')).append();
                }
    
                if (spotRadius && options.get('valueSpots')) {
                    valueSpots = options.get('valueSpots');
                    if (valueSpots.get === undefined) {
                        valueSpots = new RangeMap(valueSpots);
                    }
                    for (i = 0; i < yvalcount; i++) {
                        color = valueSpots.get(yvalues[i]);
                        if (color) {
                            target.drawCircle(canvasLeft + Math.round((xvalues[i] - this.minx) * (canvasWidth / rangex)),
                                canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[i] - this.miny) / rangey))),
                                spotRadius, undefined,
                                color).append();
                        }
                    }
    
                }
                if (spotRadius && options.get('spotColor') && yvalues[yvallast] !== null) {
                    target.drawCircle(canvasLeft + Math.round((xvalues[xvalues.length - 1] - this.minx) * (canvasWidth / rangex)),
                        canvasTop + Math.round(canvasHeight - (canvasHeight * ((yvalues[yvallast] - this.miny) / rangey))),
                        spotRadius, undefined,
                        options.get('spotColor')).append();
                }
                if (this.maxy !== this.minyorg) {
                    if (spotRadius && options.get('minSpotColor')) {
                        x = xvalues[$.inArray(this.minyorg, yvalues)];
                        target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                            canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.minyorg - this.miny) / rangey))),
                            spotRadius, undefined,
                            options.get('minSpotColor')).append();
                    }
                    if (spotRadius && options.get('maxSpotColor')) {
                        x = xvalues[$.inArray(this.maxyorg, yvalues)];
                        target.drawCircle(canvasLeft + Math.round((x - this.minx) * (canvasWidth / rangex)),
                            canvasTop + Math.round(canvasHeight - (canvasHeight * ((this.maxyorg - this.miny) / rangey))),
                            spotRadius, undefined,
                            options.get('maxSpotColor')).append();
                    }
                }
    
                this.lastShapeId = target.getLastShapeId();
                this.canvasTop = canvasTop;
                target.render();
            }
        });
    
        /**
         * Bar charts
         */
        $.fn.sparkline.bar = bar = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'bar',
    
            init: function (el, values, options, width, height) {
                var barWidth = parseInt(options.get('barWidth'), 10),
                    barSpacing = parseInt(options.get('barSpacing'), 10),
                    chartRangeMin = options.get('chartRangeMin'),
                    chartRangeMax = options.get('chartRangeMax'),
                    chartRangeClip = options.get('chartRangeClip'),
                    stackMin = Infinity,
                    stackMax = -Infinity,
                    isStackString, groupMin, groupMax, stackRanges,
                    numValues, i, vlen, range, zeroAxis, xaxisOffset, min, max, clipMin, clipMax,
                    stacked, vlist, j, slen, svals, val, yoffset, yMaxCalc, canvasHeightEf;
                bar._super.init.call(this, el, values, options, width, height);
    
                // scan values to determine whether to stack bars
                for (i = 0, vlen = values.length; i < vlen; i++) {
                    val = values[i];
                    isStackString = typeof(val) === 'string' && val.indexOf(':') > -1;
                    if (isStackString || $.isArray(val)) {
                        stacked = true;
                        if (isStackString) {
                            val = values[i] = normalizeValues(val.split(':'));
                        }
                        val = remove(val, null); // min/max will treat null as zero
                        groupMin = Math.min.apply(Math, val);
                        groupMax = Math.max.apply(Math, val);
                        if (groupMin < stackMin) {
                            stackMin = groupMin;
                        }
                        if (groupMax > stackMax) {
                            stackMax = groupMax;
                        }
                    }
                }
    
                this.stacked = stacked;
                this.regionShapes = {};
                this.barWidth = barWidth;
                this.barSpacing = barSpacing;
                this.totalBarWidth = barWidth + barSpacing;
                this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);
    
                this.initTarget();
    
                if (chartRangeClip) {
                    clipMin = chartRangeMin === undefined ? -Infinity : chartRangeMin;
                    clipMax = chartRangeMax === undefined ? Infinity : chartRangeMax;
                }
    
                numValues = [];
                stackRanges = stacked ? [] : numValues;
                var stackTotals = [];
                var stackRangesNeg = [];
                for (i = 0, vlen = values.length; i < vlen; i++) {
                    if (stacked) {
                        vlist = values[i];
                        values[i] = svals = [];
                        stackTotals[i] = 0;
                        stackRanges[i] = stackRangesNeg[i] = 0;
                        for (j = 0, slen = vlist.length; j < slen; j++) {
                            val = svals[j] = chartRangeClip ? clipval(vlist[j], clipMin, clipMax) : vlist[j];
                            if (val !== null) {
                                if (val > 0) {
                                    stackTotals[i] += val;
                                }
                                if (stackMin < 0 && stackMax > 0) {
                                    if (val < 0) {
                                        stackRangesNeg[i] += Math.abs(val);
                                    } else {
                                        stackRanges[i] += val;
                                    }
                                } else {
                                    stackRanges[i] += Math.abs(val - (val < 0 ? stackMax : stackMin));
                                }
                                numValues.push(val);
                            }
                        }
                    } else {
                        val = chartRangeClip ? clipval(values[i], clipMin, clipMax) : values[i];
                        val = values[i] = normalizeValue(val);
                        if (val !== null) {
                            numValues.push(val);
                        }
                    }
                }
                this.max = max = Math.max.apply(Math, numValues);
                this.min = min = Math.min.apply(Math, numValues);
                this.stackMax = stackMax = stacked ? Math.max.apply(Math, stackTotals) : max;
                this.stackMin = stackMin = stacked ? Math.min.apply(Math, numValues) : min;
    
                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < min)) {
                    min = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > max)) {
                    max = options.get('chartRangeMax');
                }
    
                this.zeroAxis = zeroAxis = options.get('zeroAxis', true);
                if (min <= 0 && max >= 0 && zeroAxis) {
                    xaxisOffset = 0;
                } else if (zeroAxis == false) {
                    xaxisOffset = min;
                } else if (min > 0) {
                    xaxisOffset = min;
                } else {
                    xaxisOffset = max;
                }
                this.xaxisOffset = xaxisOffset;
    
                range = stacked ? (Math.max.apply(Math, stackRanges) + Math.max.apply(Math, stackRangesNeg)) : max - min;
    
                // as we plot zero/min values a single pixel line, we add a pixel to all other
                // values - Reduce the effective canvas size to suit
                this.canvasHeightEf = (zeroAxis && min < 0) ? this.canvasHeight - 2 : this.canvasHeight - 1;
    
                if (min < xaxisOffset) {
                    yMaxCalc = (stacked && max >= 0) ? stackMax : max;
                    yoffset = (yMaxCalc - xaxisOffset) / range * this.canvasHeight;
                    if (yoffset !== Math.ceil(yoffset)) {
                        this.canvasHeightEf -= 2;
                        yoffset = Math.ceil(yoffset);
                    }
                } else {
                    yoffset = this.canvasHeight;
                }
                this.yoffset = yoffset;
    
                if ($.isArray(options.get('colorMap'))) {
                    this.colorMapByIndex = options.get('colorMap');
                    this.colorMapByValue = null;
                } else {
                    this.colorMapByIndex = null;
                    this.colorMapByValue = options.get('colorMap');
                    if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                        this.colorMapByValue = new RangeMap(this.colorMapByValue);
                    }
                }
    
                this.range = range;
            },
    
            getRegion: function (el, x, y) {
                var result = Math.floor(x / this.totalBarWidth);
                return (result < 0 || result >= this.values.length) ? undefined : result;
            },
    
            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion,
                    values = ensureArray(this.values[currentRegion]),
                    result = [],
                    value, i;
                for (i = values.length; i--;) {
                    value = values[i];
                    result.push({
                        isNull: value === null,
                        value: value,
                        color: this.calcColor(i, value, currentRegion),
                        offset: currentRegion
                    });
                }
                return result;
            },
    
            calcColor: function (stacknum, value, valuenum) {
                var colorMapByIndex = this.colorMapByIndex,
                    colorMapByValue = this.colorMapByValue,
                    options = this.options,
                    color, newColor;
                if (this.stacked) {
                    color = options.get('stackedBarColor');
                } else {
                    color = (value < 0) ? options.get('negBarColor') : options.get('barColor');
                }
                if (value === 0 && options.get('zeroColor') !== undefined) {
                    color = options.get('zeroColor');
                }
                if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                    color = newColor;
                } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                    color = colorMapByIndex[valuenum];
                }
                return $.isArray(color) ? color[stacknum % color.length] : color;
            },
    
            /**
             * Render bar(s) for a region
             */
            renderRegion: function (valuenum, highlight) {
                var vals = this.values[valuenum],
                    options = this.options,
                    xaxisOffset = this.xaxisOffset,
                    result = [],
                    range = this.range,
                    stacked = this.stacked,
                    target = this.target,
                    x = valuenum * this.totalBarWidth,
                    canvasHeightEf = this.canvasHeightEf,
                    yoffset = this.yoffset,
                    y, height, color, isNull, yoffsetNeg, i, valcount, val, minPlotted, allMin;
    
                vals = $.isArray(vals) ? vals : [vals];
                valcount = vals.length;
                val = vals[0];
                isNull = all(null, vals);
                allMin = all(xaxisOffset, vals, true);
    
                if (isNull) {
                    if (options.get('nullColor')) {
                        color = highlight ? options.get('nullColor') : this.calcHighlightColor(options.get('nullColor'), options);
                        y = (yoffset > 0) ? yoffset - 1 : yoffset;
                        return target.drawRect(x, y, this.barWidth - 1, 0, color, color);
                    } else {
                        return undefined;
                    }
                }
                yoffsetNeg = yoffset;
                for (i = 0; i < valcount; i++) {
                    val = vals[i];
    
                    if (stacked && val === xaxisOffset) {
                        if (!allMin || minPlotted) {
                            continue;
                        }
                        minPlotted = true;
                    }
    
                    if (range > 0) {
                        height = Math.floor(canvasHeightEf * ((Math.abs(val - xaxisOffset) / range))) + 1;
                    } else {
                        height = 1;
                    }
                    if (val < xaxisOffset || (val === xaxisOffset && yoffset === 0)) {
                        y = yoffsetNeg;
                        yoffsetNeg += height;
                    } else {
                        y = yoffset - height;
                        yoffset -= height;
                    }
                    color = this.calcColor(i, val, valuenum);
                    if (highlight) {
                        color = this.calcHighlightColor(color, options);
                    }
                    result.push(target.drawRect(x, y, this.barWidth - 1, height - 1, color, color));
                }
                if (result.length === 1) {
                    return result[0];
                }
                return result;
            }
        });
    
        /**
         * Tristate charts
         */
        $.fn.sparkline.tristate = tristate = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'tristate',
    
            init: function (el, values, options, width, height) {
                var barWidth = parseInt(options.get('barWidth'), 10),
                    barSpacing = parseInt(options.get('barSpacing'), 10);
                tristate._super.init.call(this, el, values, options, width, height);
    
                this.regionShapes = {};
                this.barWidth = barWidth;
                this.barSpacing = barSpacing;
                this.totalBarWidth = barWidth + barSpacing;
                this.values = $.map(values, Number);
                this.width = width = (values.length * barWidth) + ((values.length - 1) * barSpacing);
    
                if ($.isArray(options.get('colorMap'))) {
                    this.colorMapByIndex = options.get('colorMap');
                    this.colorMapByValue = null;
                } else {
                    this.colorMapByIndex = null;
                    this.colorMapByValue = options.get('colorMap');
                    if (this.colorMapByValue && this.colorMapByValue.get === undefined) {
                        this.colorMapByValue = new RangeMap(this.colorMapByValue);
                    }
                }
                this.initTarget();
            },
    
            getRegion: function (el, x, y) {
                return Math.floor(x / this.totalBarWidth);
            },
    
            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    color: this.calcColor(this.values[currentRegion], currentRegion),
                    offset: currentRegion
                };
            },
    
            calcColor: function (value, valuenum) {
                var values = this.values,
                    options = this.options,
                    colorMapByIndex = this.colorMapByIndex,
                    colorMapByValue = this.colorMapByValue,
                    color, newColor;
    
                if (colorMapByValue && (newColor = colorMapByValue.get(value))) {
                    color = newColor;
                } else if (colorMapByIndex && colorMapByIndex.length > valuenum) {
                    color = colorMapByIndex[valuenum];
                } else if (values[valuenum] < 0) {
                    color = options.get('negBarColor');
                } else if (values[valuenum] > 0) {
                    color = options.get('posBarColor');
                } else {
                    color = options.get('zeroBarColor');
                }
                return color;
            },
    
            renderRegion: function (valuenum, highlight) {
                var values = this.values,
                    options = this.options,
                    target = this.target,
                    canvasHeight, height, halfHeight,
                    x, y, color;
    
                canvasHeight = target.pixelHeight;
                halfHeight = Math.round(canvasHeight / 2);
    
                x = valuenum * this.totalBarWidth;
                if (values[valuenum] < 0) {
                    y = halfHeight;
                    height = halfHeight - 1;
                } else if (values[valuenum] > 0) {
                    y = 0;
                    height = halfHeight - 1;
                } else {
                    y = halfHeight - 1;
                    height = 2;
                }
                color = this.calcColor(values[valuenum], valuenum);
                if (color === null) {
                    return;
                }
                if (highlight) {
                    color = this.calcHighlightColor(color, options);
                }
                return target.drawRect(x, y, this.barWidth - 1, height - 1, color, color);
            }
        });
    
        /**
         * Discrete charts
         */
        $.fn.sparkline.discrete = discrete = createClass($.fn.sparkline._base, barHighlightMixin, {
            type: 'discrete',
    
            init: function (el, values, options, width, height) {
                discrete._super.init.call(this, el, values, options, width, height);
    
                this.regionShapes = {};
                this.values = values = $.map(values, Number);
                this.min = Math.min.apply(Math, values);
                this.max = Math.max.apply(Math, values);
                this.range = this.max - this.min;
                this.width = width = options.get('width') === 'auto' ? values.length * 2 : this.width;
                this.interval = Math.floor(width / values.length);
                this.itemWidth = width / values.length;
                if (options.get('chartRangeMin') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMin') < this.min)) {
                    this.min = options.get('chartRangeMin');
                }
                if (options.get('chartRangeMax') !== undefined && (options.get('chartRangeClip') || options.get('chartRangeMax') > this.max)) {
                    this.max = options.get('chartRangeMax');
                }
                this.initTarget();
                if (this.target) {
                    this.lineHeight = options.get('lineHeight') === 'auto' ? Math.round(this.canvasHeight * 0.3) : options.get('lineHeight');
                }
            },
    
            getRegion: function (el, x, y) {
                return Math.floor(x / this.itemWidth);
            },
    
            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    offset: currentRegion
                };
            },
    
            renderRegion: function (valuenum, highlight) {
                var values = this.values,
                    options = this.options,
                    min = this.min,
                    max = this.max,
                    range = this.range,
                    interval = this.interval,
                    target = this.target,
                    canvasHeight = this.canvasHeight,
                    lineHeight = this.lineHeight,
                    pheight = canvasHeight - lineHeight,
                    ytop, val, color, x;
    
                val = clipval(values[valuenum], min, max);
                x = valuenum * interval;
                ytop = Math.round(pheight - pheight * ((val - min) / range));
                color = (options.get('thresholdColor') && val < options.get('thresholdValue')) ? options.get('thresholdColor') : options.get('lineColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, options);
                }
                return target.drawLine(x, ytop, x, ytop + lineHeight, color);
            }
        });
    
        /**
         * Bullet charts
         */
        $.fn.sparkline.bullet = bullet = createClass($.fn.sparkline._base, {
            type: 'bullet',
    
            init: function (el, values, options, width, height) {
                var min, max, vals;
                bullet._super.init.call(this, el, values, options, width, height);
    
                // values: target, performance, range1, range2, range3
                this.values = values = normalizeValues(values);
                // target or performance could be null
                vals = values.slice();
                vals[0] = vals[0] === null ? vals[2] : vals[0];
                vals[1] = values[1] === null ? vals[2] : vals[1];
                min = Math.min.apply(Math, values);
                max = Math.max.apply(Math, values);
                if (options.get('base') === undefined) {
                    min = min < 0 ? min : 0;
                } else {
                    min = options.get('base');
                }
                this.min = min;
                this.max = max;
                this.range = max - min;
                this.shapes = {};
                this.valueShapes = {};
                this.regiondata = {};
                this.width = width = options.get('width') === 'auto' ? '4.0em' : width;
                this.target = this.$el.simpledraw(width, height, options.get('composite'));
                if (!values.length) {
                    this.disabled = true;
                }
                this.initTarget();
            },
    
            getRegion: function (el, x, y) {
                var shapeid = this.target.getShapeAt(el, x, y);
                return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
            },
    
            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    fieldkey: currentRegion.substr(0, 1),
                    value: this.values[currentRegion.substr(1)],
                    region: currentRegion
                };
            },
    
            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                    shapeid = this.valueShapes[currentRegion],
                    shape;
                delete this.shapes[shapeid];
                switch (currentRegion.substr(0, 1)) {
                    case 'r':
                        shape = this.renderRange(currentRegion.substr(1), highlight);
                        break;
                    case 'p':
                        shape = this.renderPerformance(highlight);
                        break;
                    case 't':
                        shape = this.renderTarget(highlight);
                        break;
                }
                this.valueShapes[currentRegion] = shape.id;
                this.shapes[shape.id] = currentRegion;
                this.target.replaceWithShape(shapeid, shape);
            },
    
            renderRange: function (rn, highlight) {
                var rangeval = this.values[rn],
                    rangewidth = Math.round(this.canvasWidth * ((rangeval - this.min) / this.range)),
                    color = this.options.get('rangeColors')[rn - 2];
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(0, 0, rangewidth - 1, this.canvasHeight - 1, color, color);
            },
    
            renderPerformance: function (highlight) {
                var perfval = this.values[1],
                    perfwidth = Math.round(this.canvasWidth * ((perfval - this.min) / this.range)),
                    color = this.options.get('performanceColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(0, Math.round(this.canvasHeight * 0.3), perfwidth - 1,
                    Math.round(this.canvasHeight * 0.4) - 1, color, color);
            },
    
            renderTarget: function (highlight) {
                var targetval = this.values[0],
                    x = Math.round(this.canvasWidth * ((targetval - this.min) / this.range) - (this.options.get('targetWidth') / 2)),
                    targettop = Math.round(this.canvasHeight * 0.10),
                    targetheight = this.canvasHeight - (targettop * 2),
                    color = this.options.get('targetColor');
                if (highlight) {
                    color = this.calcHighlightColor(color, this.options);
                }
                return this.target.drawRect(x, targettop, this.options.get('targetWidth') - 1, targetheight - 1, color, color);
            },
    
            render: function () {
                var vlen = this.values.length,
                    target = this.target,
                    i, shape;
                if (!bullet._super.render.call(this)) {
                    return;
                }
                for (i = 2; i < vlen; i++) {
                    shape = this.renderRange(i).append();
                    this.shapes[shape.id] = 'r' + i;
                    this.valueShapes['r' + i] = shape.id;
                }
                if (this.values[1] !== null) {
                    shape = this.renderPerformance().append();
                    this.shapes[shape.id] = 'p1';
                    this.valueShapes.p1 = shape.id;
                }
                if (this.values[0] !== null) {
                    shape = this.renderTarget().append();
                    this.shapes[shape.id] = 't0';
                    this.valueShapes.t0 = shape.id;
                }
                target.render();
            }
        });
    
        /**
         * Pie charts
         */
        $.fn.sparkline.pie = pie = createClass($.fn.sparkline._base, {
            type: 'pie',
    
            init: function (el, values, options, width, height) {
                var total = 0, i;
    
                pie._super.init.call(this, el, values, options, width, height);
    
                this.shapes = {}; // map shape ids to value offsets
                this.valueShapes = {}; // maps value offsets to shape ids
                this.values = values = $.map(values, Number);
    
                if (options.get('width') === 'auto') {
                    this.width = this.height;
                }
    
                if (values.length > 0) {
                    for (i = values.length; i--;) {
                        total += values[i];
                    }
                }
                this.total = total;
                this.initTarget();
                this.radius = Math.floor(Math.min(this.canvasWidth, this.canvasHeight) / 2);
            },
    
            getRegion: function (el, x, y) {
                var shapeid = this.target.getShapeAt(el, x, y);
                return (shapeid !== undefined && this.shapes[shapeid] !== undefined) ? this.shapes[shapeid] : undefined;
            },
    
            getCurrentRegionFields: function () {
                var currentRegion = this.currentRegion;
                return {
                    isNull: this.values[currentRegion] === undefined,
                    value: this.values[currentRegion],
                    percent: this.values[currentRegion] / this.total * 100,
                    color: this.options.get('sliceColors')[currentRegion % this.options.get('sliceColors').length],
                    offset: currentRegion
                };
            },
    
            changeHighlight: function (highlight) {
                var currentRegion = this.currentRegion,
                     newslice = this.renderSlice(currentRegion, highlight),
                     shapeid = this.valueShapes[currentRegion];
                delete this.shapes[shapeid];
                this.target.replaceWithShape(shapeid, newslice);
                this.valueShapes[currentRegion] = newslice.id;
                this.shapes[newslice.id] = currentRegion;
            },
    
            renderSlice: function (valuenum, highlight) {
                var target = this.target,
                    options = this.options,
                    radius = this.radius,
                    borderWidth = options.get('borderWidth'),
                    offset = options.get('offset'),
                    circle = 2 * Math.PI,
                    values = this.values,
                    total = this.total,
                    next = offset ? (2*Math.PI)*(offset/360) : 0,
                    start, end, i, vlen, color;
    
                vlen = values.length;
                for (i = 0; i < vlen; i++) {
                    start = next;
                    end = next;
                    if (total > 0) {  // avoid divide by zero
                        end = next + (circle * (values[i] / total));
                    }
                    if (valuenum === i) {
                        color = options.get('sliceColors')[i % options.get('sliceColors').length];
                        if (highlight) {
                            color = this.calcHighlightColor(color, options);
                        }
    
                        return target.drawPieSlice(radius, radius, radius - borderWidth, start, end, undefined, color);
                    }
                    next = end;
                }
            },
    
            render: function () {
                var target = this.target,
                    values = this.values,
                    options = this.options,
                    radius = this.radius,
                    borderWidth = options.get('borderWidth'),
                    shape, i;
    
                if (!pie._super.render.call(this)) {
                    return;
                }
                if (borderWidth) {
                    target.drawCircle(radius, radius, Math.floor(radius - (borderWidth / 2)),
                        options.get('borderColor'), undefined, borderWidth).append();
                }
                for (i = values.length; i--;) {
                    if (values[i]) { // don't render zero values
                        shape = this.renderSlice(i).append();
                        this.valueShapes[i] = shape.id; // store just the shapeid
                        this.shapes[shape.id] = i;
                    }
                }
                target.render();
            }
        });
    
        /**
         * Box plots
         */
        $.fn.sparkline.box = box = createClass($.fn.sparkline._base, {
            type: 'box',
    
            init: function (el, values, options, width, height) {
                box._super.init.call(this, el, values, options, width, height);
                this.values = $.map(values, Number);
                this.width = options.get('width') === 'auto' ? '4.0em' : width;
                this.initTarget();
                if (!this.values.length) {
                    this.disabled = 1;
                }
            },
    
            /**
             * Simulate a single region
             */
            getRegion: function () {
                return 1;
            },
    
            getCurrentRegionFields: function () {
                var result = [
                    { field: 'lq', value: this.quartiles[0] },
                    { field: 'med', value: this.quartiles[1] },
                    { field: 'uq', value: this.quartiles[2] }
                ];
                if (this.loutlier !== undefined) {
                    result.push({ field: 'lo', value: this.loutlier});
                }
                if (this.routlier !== undefined) {
                    result.push({ field: 'ro', value: this.routlier});
                }
                if (this.lwhisker !== undefined) {
                    result.push({ field: 'lw', value: this.lwhisker});
                }
                if (this.rwhisker !== undefined) {
                    result.push({ field: 'rw', value: this.rwhisker});
                }
                return result;
            },
    
            render: function () {
                var target = this.target,
                    values = this.values,
                    vlen = values.length,
                    options = this.options,
                    canvasWidth = this.canvasWidth,
                    canvasHeight = this.canvasHeight,
                    minValue = options.get('chartRangeMin') === undefined ? Math.min.apply(Math, values) : options.get('chartRangeMin'),
                    maxValue = options.get('chartRangeMax') === undefined ? Math.max.apply(Math, values) : options.get('chartRangeMax'),
                    canvasLeft = 0,
                    lwhisker, loutlier, iqr, q1, q2, q3, rwhisker, routlier, i,
                    size, unitSize;
    
                if (!box._super.render.call(this)) {
                    return;
                }
    
                if (options.get('raw')) {
                    if (options.get('showOutliers') && values.length > 5) {
                        loutlier = values[0];
                        lwhisker = values[1];
                        q1 = values[2];
                        q2 = values[3];
                        q3 = values[4];
                        rwhisker = values[5];
                        routlier = values[6];
                    } else {
                        lwhisker = values[0];
                        q1 = values[1];
                        q2 = values[2];
                        q3 = values[3];
                        rwhisker = values[4];
                    }
                } else {
                    values.sort(function (a, b) { return a - b; });
                    q1 = quartile(values, 1);
                    q2 = quartile(values, 2);
                    q3 = quartile(values, 3);
                    iqr = q3 - q1;
                    if (options.get('showOutliers')) {
                        lwhisker = rwhisker = undefined;
                        for (i = 0; i < vlen; i++) {
                            if (lwhisker === undefined && values[i] > q1 - (iqr * options.get('outlierIQR'))) {
                                lwhisker = values[i];
                            }
                            if (values[i] < q3 + (iqr * options.get('outlierIQR'))) {
                                rwhisker = values[i];
                            }
                        }
                        loutlier = values[0];
                        routlier = values[vlen - 1];
                    } else {
                        lwhisker = values[0];
                        rwhisker = values[vlen - 1];
                    }
                }
                this.quartiles = [q1, q2, q3];
                this.lwhisker = lwhisker;
                this.rwhisker = rwhisker;
                this.loutlier = loutlier;
                this.routlier = routlier;
    
                unitSize = canvasWidth / (maxValue - minValue + 1);
                if (options.get('showOutliers')) {
                    canvasLeft = Math.ceil(options.get('spotRadius'));
                    canvasWidth -= 2 * Math.ceil(options.get('spotRadius'));
                    unitSize = canvasWidth / (maxValue - minValue + 1);
                    if (loutlier < lwhisker) {
                        target.drawCircle((loutlier - minValue) * unitSize + canvasLeft,
                            canvasHeight / 2,
                            options.get('spotRadius'),
                            options.get('outlierLineColor'),
                            options.get('outlierFillColor')).append();
                    }
                    if (routlier > rwhisker) {
                        target.drawCircle((routlier - minValue) * unitSize + canvasLeft,
                            canvasHeight / 2,
                            options.get('spotRadius'),
                            options.get('outlierLineColor'),
                            options.get('outlierFillColor')).append();
                    }
                }
    
                // box
                target.drawRect(
                    Math.round((q1 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.1),
                    Math.round((q3 - q1) * unitSize),
                    Math.round(canvasHeight * 0.8),
                    options.get('boxLineColor'),
                    options.get('boxFillColor')).append();
                // left whisker
                target.drawLine(
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    Math.round((q1 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    options.get('lineColor')).append();
                target.drawLine(
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 4),
                    Math.round((lwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight - canvasHeight / 4),
                    options.get('whiskerColor')).append();
                // right whisker
                target.drawLine(Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    Math.round((q3 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 2),
                    options.get('lineColor')).append();
                target.drawLine(
                    Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight / 4),
                    Math.round((rwhisker - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight - canvasHeight / 4),
                    options.get('whiskerColor')).append();
                // median line
                target.drawLine(
                    Math.round((q2 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.1),
                    Math.round((q2 - minValue) * unitSize + canvasLeft),
                    Math.round(canvasHeight * 0.9),
                    options.get('medianColor')).append();
                if (options.get('target')) {
                    size = Math.ceil(options.get('spotRadius'));
                    target.drawLine(
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                        Math.round((canvasHeight / 2) - size),
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft),
                        Math.round((canvasHeight / 2) + size),
                        options.get('targetColor')).append();
                    target.drawLine(
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft - size),
                        Math.round(canvasHeight / 2),
                        Math.round((options.get('target') - minValue) * unitSize + canvasLeft + size),
                        Math.round(canvasHeight / 2),
                        options.get('targetColor')).append();
                }
                target.render();
            }
        });
    
        // Setup a very simple "virtual canvas" to make drawing the few shapes we need easier
        // This is accessible as $(foo).simpledraw()
    
        VShape = createClass({
            init: function (target, id, type, args) {
                this.target = target;
                this.id = id;
                this.type = type;
                this.args = args;
            },
            append: function () {
                this.target.appendShape(this);
                return this;
            }
        });
    
        VCanvas_base = createClass({
            _pxregex: /(\d+)(px)?\s*$/i,
    
            init: function (width, height, target) {
                if (!width) {
                    return;
                }
                this.width = width;
                this.height = height;
                this.target = target;
                this.lastShapeId = null;
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
            },
    
            drawLine: function (x1, y1, x2, y2, lineColor, lineWidth) {
                return this.drawShape([[x1, y1], [x2, y2]], lineColor, lineWidth);
            },
    
            drawShape: function (path, lineColor, fillColor, lineWidth) {
                return this._genShape('Shape', [path, lineColor, fillColor, lineWidth]);
            },
    
            drawCircle: function (x, y, radius, lineColor, fillColor, lineWidth) {
                return this._genShape('Circle', [x, y, radius, lineColor, fillColor, lineWidth]);
            },
    
            drawPieSlice: function (x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                return this._genShape('PieSlice', [x, y, radius, startAngle, endAngle, lineColor, fillColor]);
            },
    
            drawRect: function (x, y, width, height, lineColor, fillColor) {
                return this._genShape('Rect', [x, y, width, height, lineColor, fillColor]);
            },
    
            getElement: function () {
                return this.canvas;
            },
    
            /**
             * Return the most recently inserted shape id
             */
            getLastShapeId: function () {
                return this.lastShapeId;
            },
    
            /**
             * Clear and reset the canvas
             */
            reset: function () {
                alert('reset not implemented');
            },
    
            _insert: function (el, target) {
                $(target).html(el);
            },
    
            /**
             * Calculate the pixel dimensions of the canvas
             */
            _calculatePixelDims: function (width, height, canvas) {
                // XXX This should probably be a configurable option
                var match;
                match = this._pxregex.exec(height);
                if (match) {
                    this.pixelHeight = match[1];
                } else {
                    this.pixelHeight = $(canvas).height();
                }
                match = this._pxregex.exec(width);
                if (match) {
                    this.pixelWidth = match[1];
                } else {
                    this.pixelWidth = $(canvas).width();
                }
            },
    
            /**
             * Generate a shape object and id for later rendering
             */
            _genShape: function (shapetype, shapeargs) {
                var id = shapeCount++;
                shapeargs.unshift(id);
                return new VShape(this, id, shapetype, shapeargs);
            },
    
            /**
             * Add a shape to the end of the render queue
             */
            appendShape: function (shape) {
                alert('appendShape not implemented');
            },
    
            /**
             * Replace one shape with another
             */
            replaceWithShape: function (shapeid, shape) {
                alert('replaceWithShape not implemented');
            },
    
            /**
             * Insert one shape after another in the render queue
             */
            insertAfterShape: function (shapeid, shape) {
                alert('insertAfterShape not implemented');
            },
    
            /**
             * Remove a shape from the queue
             */
            removeShapeId: function (shapeid) {
                alert('removeShapeId not implemented');
            },
    
            /**
             * Find a shape at the specified x/y co-ordinates
             */
            getShapeAt: function (el, x, y) {
                alert('getShapeAt not implemented');
            },
    
            /**
             * Render all queued shapes onto the canvas
             */
            render: function () {
                alert('render not implemented');
            }
        });
    
        VCanvas_canvas = createClass(VCanvas_base, {
            init: function (width, height, target, interact) {
                VCanvas_canvas._super.init.call(this, width, height, target);
                this.canvas = document.createElement('canvas');
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
                $(this.canvas).css({ display: 'inline-block', width: width, height: height, verticalAlign: 'top' });
                this._insert(this.canvas, target);
                this._calculatePixelDims(width, height, this.canvas);
                this.canvas.width = this.pixelWidth;
                this.canvas.height = this.pixelHeight;
                this.interact = interact;
                this.shapes = {};
                this.shapeseq = [];
                this.currentTargetShapeId = undefined;
                $(this.canvas).css({width: this.pixelWidth, height: this.pixelHeight});
            },
    
            _getContext: function (lineColor, fillColor, lineWidth) {
                var context = this.canvas.getContext('2d');
                if (lineColor !== undefined) {
                    context.strokeStyle = lineColor;
                }
                context.lineWidth = lineWidth === undefined ? 1 : lineWidth;
                if (fillColor !== undefined) {
                    context.fillStyle = fillColor;
                }
                return context;
            },
    
            reset: function () {
                var context = this._getContext();
                context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
                this.shapes = {};
                this.shapeseq = [];
                this.currentTargetShapeId = undefined;
            },
    
            _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
                var context = this._getContext(lineColor, fillColor, lineWidth),
                    i, plen;
                context.beginPath();
                context.moveTo(path[0][0] + 0.5, path[0][1] + 0.5);
                for (i = 1, plen = path.length; i < plen; i++) {
                    context.lineTo(path[i][0] + 0.5, path[i][1] + 0.5); // the 0.5 offset gives us crisp pixel-width lines
                }
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor !== undefined) {
                    context.fill();
                }
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
            },
    
            _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
                var context = this._getContext(lineColor, fillColor, lineWidth);
                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI, false);
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor !== undefined) {
                    context.fill();
                }
            },
    
            _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                var context = this._getContext(lineColor, fillColor);
                context.beginPath();
                context.moveTo(x, y);
                context.arc(x, y, radius, startAngle, endAngle, false);
                context.lineTo(x, y);
                context.closePath();
                if (lineColor !== undefined) {
                    context.stroke();
                }
                if (fillColor) {
                    context.fill();
                }
                if (this.targetX !== undefined && this.targetY !== undefined &&
                    context.isPointInPath(this.targetX, this.targetY)) {
                    this.currentTargetShapeId = shapeid;
                }
            },
    
            _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
                return this._drawShape(shapeid, [[x, y], [x + width, y], [x + width, y + height], [x, y + height], [x, y]], lineColor, fillColor);
            },
    
            appendShape: function (shape) {
                this.shapes[shape.id] = shape;
                this.shapeseq.push(shape.id);
                this.lastShapeId = shape.id;
                return shape.id;
            },
    
            replaceWithShape: function (shapeid, shape) {
                var shapeseq = this.shapeseq,
                    i;
                this.shapes[shape.id] = shape;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] == shapeid) {
                        shapeseq[i] = shape.id;
                    }
                }
                delete this.shapes[shapeid];
            },
    
            replaceWithShapes: function (shapeids, shapes) {
                var shapeseq = this.shapeseq,
                    shapemap = {},
                    sid, i, first;
    
                for (i = shapeids.length; i--;) {
                    shapemap[shapeids[i]] = true;
                }
                for (i = shapeseq.length; i--;) {
                    sid = shapeseq[i];
                    if (shapemap[sid]) {
                        shapeseq.splice(i, 1);
                        delete this.shapes[sid];
                        first = i;
                    }
                }
                for (i = shapes.length; i--;) {
                    shapeseq.splice(first, 0, shapes[i].id);
                    this.shapes[shapes[i].id] = shapes[i];
                }
    
            },
    
            insertAfterShape: function (shapeid, shape) {
                var shapeseq = this.shapeseq,
                    i;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] === shapeid) {
                        shapeseq.splice(i + 1, 0, shape.id);
                        this.shapes[shape.id] = shape;
                        return;
                    }
                }
            },
    
            removeShapeId: function (shapeid) {
                var shapeseq = this.shapeseq,
                    i;
                for (i = shapeseq.length; i--;) {
                    if (shapeseq[i] === shapeid) {
                        shapeseq.splice(i, 1);
                        break;
                    }
                }
                delete this.shapes[shapeid];
            },
    
            getShapeAt: function (el, x, y) {
                this.targetX = x;
                this.targetY = y;
                this.render();
                return this.currentTargetShapeId;
            },
    
            render: function () {
                var shapeseq = this.shapeseq,
                    shapes = this.shapes,
                    shapeCount = shapeseq.length,
                    context = this._getContext(),
                    shapeid, shape, i;
                context.clearRect(0, 0, this.pixelWidth, this.pixelHeight);
                for (i = 0; i < shapeCount; i++) {
                    shapeid = shapeseq[i];
                    shape = shapes[shapeid];
                    this['_draw' + shape.type].apply(this, shape.args);
                }
                if (!this.interact) {
                    // not interactive so no need to keep the shapes array
                    this.shapes = {};
                    this.shapeseq = [];
                }
            }
    
        });
    
        VCanvas_vml = createClass(VCanvas_base, {
            init: function (width, height, target) {
                var groupel;
                VCanvas_vml._super.init.call(this, width, height, target);
                if (target[0]) {
                    target = target[0];
                }
                $.data(target, '_jqs_vcanvas', this);
                this.canvas = document.createElement('span');
                $(this.canvas).css({ display: 'inline-block', position: 'relative', overflow: 'hidden', width: width, height: height, margin: '0px', padding: '0px', verticalAlign: 'top'});
                this._insert(this.canvas, target);
                this._calculatePixelDims(width, height, this.canvas);
                this.canvas.width = this.pixelWidth;
                this.canvas.height = this.pixelHeight;
                groupel = '<v:group coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '"' +
                        ' style="position:absolute;top:0;left:0;width:' + this.pixelWidth + 'px;height=' + this.pixelHeight + 'px;"></v:group>';
                this.canvas.insertAdjacentHTML('beforeEnd', groupel);
                this.group = $(this.canvas).children()[0];
                this.rendered = false;
                this.prerender = '';
            },
    
            _drawShape: function (shapeid, path, lineColor, fillColor, lineWidth) {
                var vpath = [],
                    initial, stroke, fill, closed, vel, plen, i;
                for (i = 0, plen = path.length; i < plen; i++) {
                    vpath[i] = '' + (path[i][0]) + ',' + (path[i][1]);
                }
                initial = vpath.splice(0, 1);
                lineWidth = lineWidth === undefined ? 1 : lineWidth;
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                closed = vpath[0] === vpath[vpath.length - 1] ? 'x ' : '';
                vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                     ' id="jqsshape' + shapeid + '" ' +
                     stroke +
                     fill +
                    ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                    ' path="m ' + initial + ' l ' + vpath.join(', ') + ' ' + closed + 'e">' +
                    ' </v:shape>';
                return vel;
            },
    
            _drawCircle: function (shapeid, x, y, radius, lineColor, fillColor, lineWidth) {
                var stroke, fill, vel;
                x -= radius;
                y -= radius;
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="' + lineWidth + 'px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                vel = '<v:oval ' +
                     ' id="jqsshape' + shapeid + '" ' +
                    stroke +
                    fill +
                    ' style="position:absolute;top:' + y + 'px; left:' + x + 'px; width:' + (radius * 2) + 'px; height:' + (radius * 2) + 'px"></v:oval>';
                return vel;
    
            },
    
            _drawPieSlice: function (shapeid, x, y, radius, startAngle, endAngle, lineColor, fillColor) {
                var vpath, startx, starty, endx, endy, stroke, fill, vel;
                if (startAngle === endAngle) {
                    return '';  // VML seems to have problem when start angle equals end angle.
                }
                if ((endAngle - startAngle) === (2 * Math.PI)) {
                    startAngle = 0.0;  // VML seems to have a problem when drawing a full circle that doesn't start 0
                    endAngle = (2 * Math.PI);
                }
    
                startx = x + Math.round(Math.cos(startAngle) * radius);
                starty = y + Math.round(Math.sin(startAngle) * radius);
                endx = x + Math.round(Math.cos(endAngle) * radius);
                endy = y + Math.round(Math.sin(endAngle) * radius);
    
                if (startx === endx && starty === endy) {
                    if ((endAngle - startAngle) < Math.PI) {
                        // Prevent very small slices from being mistaken as a whole pie
                        return '';
                    }
                    // essentially going to be the entire circle, so ignore startAngle
                    startx = endx = x + radius;
                    starty = endy = y;
                }
    
                if (startx === endx && starty === endy && (endAngle - startAngle) < Math.PI) {
                    return '';
                }
    
                vpath = [x - radius, y - radius, x + radius, y + radius, startx, starty, endx, endy];
                stroke = lineColor === undefined ? ' stroked="false" ' : ' strokeWeight="1px" strokeColor="' + lineColor + '" ';
                fill = fillColor === undefined ? ' filled="false"' : ' fillColor="' + fillColor + '" filled="true" ';
                vel = '<v:shape coordorigin="0 0" coordsize="' + this.pixelWidth + ' ' + this.pixelHeight + '" ' +
                     ' id="jqsshape' + shapeid + '" ' +
                     stroke +
                     fill +
                    ' style="position:absolute;left:0px;top:0px;height:' + this.pixelHeight + 'px;width:' + this.pixelWidth + 'px;padding:0px;margin:0px;" ' +
                    ' path="m ' + x + ',' + y + ' wa ' + vpath.join(', ') + ' x e">' +
                    ' </v:shape>';
                return vel;
            },
    
            _drawRect: function (shapeid, x, y, width, height, lineColor, fillColor) {
                return this._drawShape(shapeid, [[x, y], [x, y + height], [x + width, y + height], [x + width, y], [x, y]], lineColor, fillColor);
            },
    
            reset: function () {
                this.group.innerHTML = '';
            },
    
            appendShape: function (shape) {
                var vel = this['_draw' + shape.type].apply(this, shape.args);
                if (this.rendered) {
                    this.group.insertAdjacentHTML('beforeEnd', vel);
                } else {
                    this.prerender += vel;
                }
                this.lastShapeId = shape.id;
                return shape.id;
            },
    
            replaceWithShape: function (shapeid, shape) {
                var existing = $('#jqsshape' + shapeid),
                    vel = this['_draw' + shape.type].apply(this, shape.args);
                existing[0].outerHTML = vel;
            },
    
            replaceWithShapes: function (shapeids, shapes) {
                // replace the first shapeid with all the new shapes then toast the remaining old shapes
                var existing = $('#jqsshape' + shapeids[0]),
                    replace = '',
                    slen = shapes.length,
                    i;
                for (i = 0; i < slen; i++) {
                    replace += this['_draw' + shapes[i].type].apply(this, shapes[i].args);
                }
                existing[0].outerHTML = replace;
                for (i = 1; i < shapeids.length; i++) {
                    $('#jqsshape' + shapeids[i]).remove();
                }
            },
    
            insertAfterShape: function (shapeid, shape) {
                var existing = $('#jqsshape' + shapeid),
                     vel = this['_draw' + shape.type].apply(this, shape.args);
                existing[0].insertAdjacentHTML('afterEnd', vel);
            },
    
            removeShapeId: function (shapeid) {
                var existing = $('#jqsshape' + shapeid);
                this.group.removeChild(existing[0]);
            },
    
            getShapeAt: function (el, x, y) {
                var shapeid = el.id.substr(8);
                return shapeid;
            },
    
            render: function () {
                if (!this.rendered) {
                    // batch the intial render into a single repaint
                    this.group.innerHTML = this.prerender;
                    this.rendered = true;
                }
            }
        });
    
    }))}(document, Math));
    



$('.timer').countTo({
    from: 0,
    to: 250000,
    speed: 1000,
    refreshInterval: 50,
    formatter: function (value, options) {
      return value.toFixed(options.decimals);
    },
    onUpdate: function (value) {
      console.debug(this);
    },
    onComplete: function (value) {
      console.debug(this);
    }
  });
  
  $('.chart.chart-line').sparkline([1,5,4,3,5,7,5], {
    type: 'pie',
    lineColor: 'rgba(255,255,255,1)',
    fillColor: 'rgba(255,255,255,0)',
    spotColor: 'rgba(255,255,255,0)',
    minSpotColor: 'rgba(255,255,255,0)',
    maxSpotColor: 'rgba(255,255,255,0)',
    highlightSpotColor: 'rgba(255,255,255,0)',
    highlightLineColor: 'rgba(255,255,255,0)',
    normalRangeColor: 'rgba(255,255,255,0)',
    drawNormalOnTop: false,
    height: '60px' ,
    width: '64px'
});

