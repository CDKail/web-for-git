(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-register"],{"1da1":function(t,e,n){"use strict";function r(t,e,n,r,i,o,a){try{var c=t[o](a),s=c.value}catch(l){return void n(l)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var a=t.apply(e,n);function c(t){r(a,i,o,c,s,"next",t)}function s(t){r(a,i,o,c,s,"throw",t)}c(void 0)}))}}n("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=i},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"22f8":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAV1BMVEUAAAD/TnX/SW7/TnT/TnX/TnP/T3T/Tnb/TnT/TnT/TnT/TXT/Qmz/TnT/THP/Qmv/TnX/TXT/TXL/TXX/TnL/TnT/TXT/THP/SnH/SHT/TXT/TXT/SnVG0/j9AAAAHXRSTlMAmQ55iZJhTX+EjD8JlS8Fj2wlUjZzWUUWFGZiGGH7Cs0AAADeSURBVEjH7ZRJDoQgEEUBRRtwYHC273/OLlgQjYUdt4a3/N9nlZJAXkuvTMnPlOPc3BiDpBhaJY2apphSM3zJN1cfcbv28Ywajd/KsGteQd6umDJDU/RYY6BxWDFCYQnGAo3ACgnjCY4AB5sPcZlQCuhYVrKSlaxgSlMbxx4p4SHRP1Es9QxPlC4o6p/SUirjp+h4dd8pAvImbiZo2cVKJ+7eLawSAfu45ogYoZArUjA/XyUPTA795VUi/vALX00BLj4nuA9bS3CspDi8IynYjhpmITcwNVVnJrWQ9/IDKUwJkCXLNyEAAAAASUVORK5CYII="},2707:function(t,e,n){"use strict";var r=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("96cf");var i=r(n("1da1")),o={data:function(){return{phoneNum:""}},computed:{},onLoad:function(){},methods:{sendCode:function(){var t=/^[1][3,4,5,7,8][0-9]{9}$/;t.test(this.phoneNum)?this.$msgBox.showMsgBox({isShowInput:!0,type:1}).then(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){})):uni.showToast({icon:"none",title:"您输入的手机号码有误，请重新输入"})},submit:function(){this.$msgBox.showMsgBox({isShowInput:!0,type:2}).then(function(){var t=(0,i.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(){}))},clean:function(){this.phoneNum=""}}};e.default=o},"3bf8":function(t,e,n){"use strict";var r=n("83ba"),i=n.n(r);i.a},"7e0c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAgVBMVEUAAADIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMiw2Za9AAAAKnRSTlMA3m7troRkSiv28tq3CtXEmY6JcVxRNBwWpJN8akRBOiUF5HcRy8CfIQPOt2J1AAABD0lEQVQ4y32R15aDMAxEx1RTEzohEEKyVf//gXvY2Mam5L4w1tg6YgQN/xmnjKVfbpVgS+syUtgdx4prSCb5BI3kRBuiRmsf0Q42V+8Z7RLIHp90AJte89Ehl9n/oDfcAWRC++VSd2shHGAKhC5hST8Dl7KFT5ICpXivFT3ktBxePc646WPqGRawZt/X84QRooXMMXx6wEwxAzyjEK4uOIBrxo1UP57hXVEYG1NDqvl74wbTfzPHMH969EstRqV0h3rJQ/JEovLHsCRWatv6FrIeSVHJFZ8ANPSGEQC6Yz/GzO/jyA9b/PMT0D41BHz/RgUFZ1vbvkEjuax9p4HJ6BjjD9hyt5zUDkM7ii0OxR+MyHfF5BdW+gAAAABJRU5ErkJggg=="},"83ba":function(t,e,n){var r=n("f752");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var i=n("4f06").default;i("054af510",r,!0,{sourceMap:!1,shadowMode:!1})},8616:function(t,e,n){"use strict";n.r(e);var r=n("2707"),i=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=i.a},"8ab1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAYFBMVEUAAAD+yrH/yrH/yrH+ybD9ybH9ybD/ybL/zrX/zLL/zLH+yrHSLzf3sp7XQEX8xq38w6v5uaP4t6Ltj4LqhXr7v6jlc2zbTk/YREfUOD7rin/ne3Lja2bhZ2PdWVjcVFSwOFgjAAAAC3RSTlMA+vLjuaZ3WR8ectlGPMQAAACuSURBVCjPdZJbEoMgDEUJL6k3Vm2r1j73v8sqoqKW88PMgUlCEhFwVisipa0TMSdDCJA5rT6TiJDZ7HPsyMN7HMh8fIkDcsxj8AcjhKOtqhpfmxN264tzX2DACr3zzP5CC+XFBdMx+CtGlPApnvwuNx40XbTML6C+Lx40hSo/zO3oHwiokLz6MvfMN8zoudyq49jDLh9sutiTW1tS1lgxySam2p4cVHq06WVIrs8PqkAUSmfKSd4AAAAASUVORK5CYII="},"96cf":function(t,e){!function(e){"use strict";var n,r=Object.prototype,i=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag",l="object"===typeof t,u=e.regeneratorRuntime;if(u)l&&(t.exports=u);else{u=e.regeneratorRuntime=l?t.exports:{},u.wrap=b;var d="suspendedStart",p="suspendedYield",h="executing",f="completed",g={},m={};m[a]=function(){return this};var y=Object.getPrototypeOf,A=y&&y(y(P([])));A&&A!==r&&i.call(A,a)&&(m=A);var v=M.prototype=w.prototype=Object.create(m);T.prototype=v.constructor=M,M.constructor=T,M[s]=T.displayName="GeneratorFunction",u.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===T||"GeneratorFunction"===(e.displayName||e.name))},u.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,M):(t.__proto__=M,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(v),t},u.awrap=function(t){return{__await:t}},j(E.prototype),E.prototype[c]=function(){return this},u.AsyncIterator=E,u.async=function(t,e,n,r){var i=new E(b(t,e,n,r));return u.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(v),v[s]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},u.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},u.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,i){return c.type="throw",c.arg=t,e.next=r,i&&(e.method="next",e.arg=n),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;S(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),g}}}function b(t,e,n,r){var i=e&&e.prototype instanceof w?e:w,o=Object.create(i.prototype),a=new k(r||[]);return o._invoke=I(t,n,a),o}function x(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(r){return{type:"throw",arg:r}}}function w(){}function T(){}function M(){}function j(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(n,r,o,a){var c=x(t[n],t,r);if("throw"!==c.type){var s=c.arg,l=s.value;return l&&"object"===typeof l&&i.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,a)}),(function(t){e("throw",t,o,a)})):Promise.resolve(l).then((function(t){s.value=t,o(s)}),(function(t){return e("throw",t,o,a)}))}a(c.arg)}var n;function r(t,r){function i(){return new Promise((function(n,i){e(t,r,n,i)}))}return n=n?n.then(i,i):i()}this._invoke=r}function I(t,e,n){var r=d;return function(i,o){if(r===h)throw new Error("Generator is already running");if(r===f){if("throw"===i)throw o;return X()}n.method=i,n.arg=o;while(1){var a=n.delegate;if(a){var c=C(a,n);if(c){if(c===g)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=f,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=h;var s=x(t,e,n);if("normal"===s.type){if(r=n.done?f:p,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=f,n.method="throw",n.arg=s.arg)}}}function C(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,C(t,e),"throw"===e.method))return g;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var i=x(r,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,g;var o=i.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,g):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){while(++r<t.length)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return o.next=o}}return{next:X}}function X(){return{value:n,done:!0}}}(function(){return this||"object"===typeof self&&self}()||Function("return this")())},9957:function(t,e,n){t.exports=n.p+"static/img/reg_top.4c07bf5c.png"},a8a7:function(t,e,n){"use strict";n.r(e);var r=n("c837"),i=n("8616");for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);n("3bf8");var a,c=n("f0c5"),s=Object(c["a"])(i["default"],r["b"],r["c"],!1,null,"12d6d32a",null,!1,r["a"],a);e["default"]=s.exports},c25b:function(t,e,n){t.exports=n.p+"static/img/reg_more.67bbaa77.jpg"},c837:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"top"},[r("v-uni-button",{staticClass:"rule-btn"},[t._v("活动规则")])],1),r("v-uni-view",{staticClass:"login-box"},[r("p",{staticClass:"inptbox"},[r("v-uni-image",{staticClass:"tel-icon",attrs:{src:n("22f8")}}),r("v-uni-input",{staticClass:"inputTel",attrs:{type:"tel",placeholder:"请输入手机号码","placeholder-style":"color:#AFAFAF;",maxlength:"11",id:"telInput",oninput:"inputTelopt();"},model:{value:t.phoneNum,callback:function(e){t.phoneNum=e},expression:"phoneNum"}}),t.phoneNum?r("img",{staticClass:"delete-btn hide",staticStyle:{display:"inline"},attrs:{src:n("7e0c")},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clean.apply(void 0,arguments)}}}):t._e()],1),r("p",{staticClass:"inptbox msg-icon",staticStyle:{"margin-top":"0.3rem"},attrs:{id:"codeBox"}},[r("img",{staticClass:"tel-icon",attrs:{src:n("da5d")}}),r("v-uni-input",{staticClass:"inputMsg",attrs:{type:"text",value:"",placeholder:"请输入验证码","placeholder-style":"color:#AFAFAF;",maxlength:"6",id:"mblCode"}}),r("span",{staticClass:"btn-line"}),r("span",{staticClass:"msgBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[r("a",{staticClass:"u-btn-wh u-mbl-msg msgbtn",attrs:{id:"mblMsg"}},[r("span",{staticClass:"u-mbl-msg-left"}),r("span",{staticClass:"u-mbl-msg-right"},[t._v("发送验证码")])])])],1),r("div",{staticClass:"agree-box",attrs:{id:"agreeBox2"}},[r("span",{staticClass:"checkbox-checked",attrs:{id:"checkBox2"}}),r("span",{staticClass:"hebao-agree"},[t._v("本人同意使用本次活动获得的现金红包进行话费充值")])]),r("v-uni-button",{staticClass:"bind-btn",attrs:{type:"button",id:"receiveBtn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("立即领取")])],1),r("v-uni-view",{staticClass:"app-box"},[r("p",{staticClass:"til2"},[r("span",[t._v("更多惊喜福利")])]),r("img",{attrs:{src:n("c25b")}})])],1)},o=[]},da5d:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAXVBMVEUAAAD/TnX/THH/THT/TnT/TnT/TnT/UV3/TXT/TXT/TXT/Sm//SXH/TXT/TnT/TnT/TXT/TXP/TXP/TXT/TnT/TnP/THP/TXL/S3P/S3L/SG//TXT/TnT/RHP/TnTt99LHAAAAH3RSTlMAmRo4a4KTA4lyZQkGjX5gWVRPJnk7MSwgEwxDRg+Ed3wP3AAAAYFJREFUSMflk9uSgyAMQAMqCHjH+6X//5lr1lLWYhUfd3pmHDVyQJIA38DQ3RT4zIigd4z2QZBi8V0hyMgTVgw+e6higqRis8KOwwlKV/Vz+lJB93xO84YeaEmZy3qd3gjLtqX6FcmEzPVOCYglmhQYtGT2Q3as1BV9+9lApmYuRxHFpBUcQYMKPVc5r1z4jQoN5XhP6dfUFrcUjaUv7ygdGiLxULhjXCk5EQrvLRph4pExii07YgQN7pPkJEZnadCQ3K8uFB28SM7hQunBOkixGyHej5hehwTmZXi4BqzzhPuzv6ZHwsuJsIKGV1YqeF+XjWAYpxb2lObPLY1pjWMWZnZv4fFp+8v1awPgLpMl4GISGnEnLLDax0aPvaPd+JBumXWh6ZYul86p+J/SChN3t0NCdXRqaox+dKJd+nlF0BjhEwHDAZVNnM4wIBR8pv9tyXjapD7c+pPDGeM2isl5KiOCpC1c0eJClnyEa5LZSpKCH7zNH4QwMQ9wB67gv/EDPiEPUx/6et8AAAAASUVORK5CYII="},f752:function(t,e,n){var r=n("24fb"),i=n("1de5"),o=n("9957"),a=n("8ab1");e=r(!1);var c=i(o),s=i(a);e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-12d6d32a]{background:#d22f37}.content[data-v-12d6d32a]{height:100%;padding-bottom:.64rem}.top[data-v-12d6d32a]{height:7.9rem;background-image:url('+c+");background-size:100% 100%;overflow:hidden;position:relative;text-align:center;font-size:0}.rule-btn[data-v-12d6d32a]{position:absolute;top:.5rem;right:0;width:1.7rem;height:.6rem;line-height:.6rem;background:linear-gradient(90deg,#fbd99e 0,#f6b164);border-radius:.4rem 0 0 .4rem;font-size:.28rem;font-family:PingFangSC,PingFangSC-Medium;font-weight:bolder;text-align:center;color:#d22f37}.login-box[data-v-12d6d32a]{width:6.5rem;padding:.5rem 0 .6rem 0;text-align:center}.login-box .inptbox[data-v-12d6d32a]{position:relative;height:1.1rem;padding:0 .3rem 0 .43rem;background:#fff;border-radius:.6rem;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap;align-content:center}.login-box .inptbox .tel-icon[data-v-12d6d32a]{width:.5rem;height:.5rem;margin:0}.login-box .inptbox .inptbox uni-input[data-v-12d6d32a]{display:inline-block;background:#fff;color:#000;margin-top:.04rem;border:none;list-style:none;outline:none}.login-box .inptbox .inputTel[data-v-12d6d32a]{margin-left:.1rem;width:5rem}.login-box .inptbox .delete-btn[data-v-12d6d32a]{width:.32rem;height:.32rem;position:absolute;top:50%;right:.4rem;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.login-box .inptbox .inputMsg[data-v-12d6d32a]{width:2.8rem;margin-left:.1rem}.login-box .inptbox .btn-line[data-v-12d6d32a]{display:inline-block;width:1px;height:.32rem;background:#c4bbb1}.login-box .inptbox .msgbtn[data-v-12d6d32a]{display:inline-block;width:2.1rem;background:#fff;text-align:center;font-size:.28rem;color:#e73b60;padding:.25rem 0;line-height:1.5}.agree-box[data-v-12d6d32a]{margin-top:.3rem;width:100%;display:flex;align-items:center;flex-wrap:wrap;align-content:center}.agree-box .checkbox-checked[data-v-12d6d32a]{display:inline-block;margin:0;width:.24rem;height:.24rem;background:url("+s+') no-repeat;background-size:100% 100%}.agree-box .hebao-agree[data-v-12d6d32a]{color:#fff;font-size:.24rem;margin-left:.1rem;line-height:1.5}.bind-btn[data-v-12d6d32a]{display:inline-block;margin-top:.5rem;width:6.5rem;height:1.1rem;line-height:1.1rem;background:linear-gradient(90deg,#fbd99e 0,#f6b164);border-radius:.6rem;color:#d22f37;font-size:.34rem;text-align:center;letter-spacing:.02rem;font-weight:bolder}.app-box[data-v-12d6d32a]{text-align:center;width:6.9rem}.app-box .til2[data-v-12d6d32a]{width:4.2rem;font-size:.26rem;color:hsla(0,0%,100%,.7);position:relative}.app-box .til2 span[data-v-12d6d32a]:before{left:.1rem}.app-box .til2 span[data-v-12d6d32a]:after{right:.1rem}.app-box .til2 span[data-v-12d6d32a]:before,\r\n.app-box .til2 span[data-v-12d6d32a]:after{position:absolute;background:hsla(0,0%,100%,.7);content:"";height:1px;top:50%;width:1rem}.app-box img[data-v-12d6d32a]{width:100%;margin-top:.3rem}body.?%PAGE?%[data-v-12d6d32a]{background:#d22f37}',""]),t.exports=e}}]);