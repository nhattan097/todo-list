(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/circle-outline.aff1161b.svg"},function(e,t,n){e.exports=n.p+"static/media/check-done.d29f1779.svg"},function(e,t,n){e.exports=n.p+"static/media/list.1885e818.svg"},,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),c=n.n(i),r=(n(19),n(13)),s=n(6),l=n(1),m=n(2),d=n(4),u=n(3),p=n(5),h=(n(20),n(9)),f=n.n(h),C=n(10),b=n.n(C),v=n(11),I=n.n(v),k=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.item,n=e.onItemClicked,a=e.delItem,i=this.props.item.title;return o.a.createElement("div",{className:f()("TodoItem",{"TodoItem-completed":t.isCompleted})},o.a.createElement("img",{src:t.isCompleted?I.a:b.a,alt:"",onClick:function(){return n(t.id)}}),o.a.createElement("p",null,i),o.a.createElement("button",{className:"btn-del",onClick:function(){return a(t.id)}}))}}]),t}(o.a.Component),w=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).percentNumber=function(){var e=n.props.todoItems,t=0;return e.map(function(e){e.isCompleted&&t++}),(t/e.length*100).toFixed(0)},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Wrapper-progress"},o.a.createElement("span",{className:"number-percent"},this.percentNumber(),"%"),o.a.createElement("div",{className:"block-percent"},o.a.createElement("div",{className:"run-percent",style:{width:"".concat(this.percentNumber(),"%"),background:"".concat(this.percentNumber()>99?"#25ae88":"#5ba4cf")}})))}}]),t}(o.a.Component),g=n(12),E=n.n(g),j=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).createID=function(){return Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)},e.onItemClicked=function(t){var n=e.state.todoItems.map(function(e){return t===e.id?Object(s.a)({},e,{isCompleted:!e.isCompleted}):Object(s.a)({},e)});e.setState({todoItems:n},e.quantityItemCompleted)},e.isChecked=function(){e.isCheck=!e.isCheck},e.onCheckAllClicked=function(){e.isChecked();var t=e.state.todoItems;t.map(function(t){t.isCompleted=e.isCheck}),e.setState({todoItems:t})},e.addNewItem=function(t){var n=t.target.value;n&&(n=n.trim())&&e.setState({todoItems:[{id:e.createID(),title:n,isCompleted:!1}].concat(Object(r.a)(e.state.todoItems)),newItem:""})},e.onKeyDown=function(t){13===t.keyCode&&e.addNewItem(t)},e.onChange=function(t){e.setState({newItem:t.target.value})},e.delItem=function(t){var n=e.state.todoItems.filter(function(e){if(t!==e.id)return e});e.setState({todoItems:n})},e.state={todoItems:[{id:1,title:"Get to work",isCompleted:!1},{id:2,title:"Go home",isCompleted:!1},{id:3,title:"Self study at home",isCompleted:!1}],newItem:""},e.isCheck=!1,e}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.todoItems,a=t.newItem;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"todos"),o.a.createElement("div",{className:"wrapper"},o.a.createElement("div",{className:"Header"},o.a.createElement("img",{src:E.a,alt:"",onClick:this.onCheckAllClicked}),o.a.createElement("input",{type:"text",value:a,onChange:this.onChange,placeholder:"What needs to be done?",onKeyDown:this.onKeyDown})),0!==n.length?o.a.createElement(w,{todoItems:n}):null,n.map(function(t,n){return o.a.createElement(k,{key:n,item:t,onItemClicked:e.onItemClicked,delItem:e.delItem})}),o.a.createElement("div",{className:"Footer"},o.a.createElement("div",{className:"quantity-list"},"List items: ",n.length))))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.6ffe5ced.chunk.js.map