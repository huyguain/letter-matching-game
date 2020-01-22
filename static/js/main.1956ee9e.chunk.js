(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,a){e.exports=a(183)},114:function(e,t,a){},115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(2),r=a.n(l),o=(a(114),a(29)),i=(a(115),a(116),a(117),a(185)),s=a(41),u=c.a.createContext({state:[],dispatch:null}),E=function(e){var t=i.a.Option,a=Object(n.useContext)(u),l=a.state,r=a.dispatch,o=l.level,E=l.remainning;return c.a.createElement("div",{className:"Options"},c.a.createElement(i.a,{defaultValue:o,value:o,style:{width:110},onChange:function(e){r({type:"SET_LEVEL",payload:e}),r({type:"RESET_CARDS",payload:3===+e?18:8})},disabled:E},c.a.createElement(t,{value:"0"},"Select level"),c.a.createElement(t,{value:"1"},"Easy"),c.a.createElement(t,{value:"2"},"Normal"),c.a.createElement(t,{value:"3"},"Hard")),c.a.createElement(s.a,{className:"margin-left",type:"primary",disabled:!+o||E,onClick:function(e){r({type:"SET_REMAINNING",payload:!0})}},"Start"))},m=(a(178),function(e){var t=Object(n.useContext)(u),a=t.state,l=(t.dispatch,a.won),r=a.lose;return c.a.createElement("div",{className:"WonLose margin-top"},c.a.createElement("div",{className:"won ant-row"},c.a.createElement("div",{className:"ant-col ant-col-2"},"Won: "),c.a.createElement("div",{className:"ant-col ant-col-4"},l)),c.a.createElement("div",{className:"lose ant-row"},c.a.createElement("div",{className:"ant-col ant-col-2"},"Lose: "),c.a.createElement("div",{className:"ant-col ant-col-4"},r)))}),d=(a(179),function(e){var t=Object(n.useContext)(u),a=t.state,l=(t.dispatch,a.bestEasy),r=a.bestNormal,o=a.bestHard;return c.a.createElement("div",{className:"BestTime margin-top ant-row"},c.a.createElement("div",{className:"ant-col ant-col-2"},"Best time:"),c.a.createElement("div",{className:"ant-col ant-col-4"},c.a.createElement("table",{border:"1px"},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Easy"),c.a.createElement("th",null,"Normal"),c.a.createElement("th",null,"Hard"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,l||"--:--"),c.a.createElement("td",null,r||"--:--"),c.a.createElement("td",null,o||"--:--"))))))}),p=function(e){return c.a.createElement("header",{className:"Header"},c.a.createElement(E,null),c.a.createElement(m,null),c.a.createElement(d,null))},y=a(10),f=a(43),T=(a(180),a(181),a(104)),v=a.n(T),b=function(e){var t=e.onClick,a=e.type,l=e.show,r=e.completed,o=Object(n.useContext)(u),i=o.state,s=(o.dispatch,i.level);return c.a.createElement("div",{className:"Card ant-col ant-col-"+(3===+s?"4":"6"),onClick:t,style:{visibility:r?"hidden":"visible"}},c.a.createElement(v.a,{isFlipped:l,flipDirection:"horizontal"},c.a.createElement("div",{className:"card-child"}),c.a.createElement("div",{className:"card-child show"},c.a.createElement("span",null,a))))},S=(a(182),a(186)),N=a(8),O=S.a.confirm,h=function(e){var t=Object(n.useContext)(u),a=t.state,l=t.dispatch,r=a.level,i=Object(n.useState)(1===+r?120:2===+r?60:3===+r?120:0),s=Object(o.a)(i,2),E=s[0],m=s[1];Object(n.useEffect)((function(){if(E){var e=setInterval((function(){l({type:"SET_TAKE_TIME"}),m(E-1)}),1e3);return function(){return clearInterval(e)}}d()}),[E]);var d=function(e){l({type:"SET_REMAINNING",payload:!1}),l({type:"RESET_CARDS",payload:3===+r?18:8}),l({type:"SET_LOSE"}),O({title:"Oops!!!",content:"You just ran out of time. Better luck next time.",cancelText:"Too hard? Try different level",okText:"Try again",onOk:function(){l({type:"SET_REMAINNING",payload:!0})},onCancel:function(){l({type:"SET_LEVEL",payload:"0"})}})};return c.a.createElement("div",{className:"TimeRemain ant-row"},c.a.createElement(N.a,{type:"clock-circle"})," Time remainning: ",E)},_=S.a.confirm,j=function(e){var t=Object(n.useContext)(u),a=t.state,l=t.dispatch,r=a.cards,i=a.remainning,s=a.takeTime,E=a.bestEasy,m=a.bestNormal,d=a.bestHard,p=a.level,T=Object(n.useState)([]),v=Object(o.a)(T,2),S=v[0],N=v[1],O=Object(n.useState)([]),j=Object(o.a)(O,2),w=j[0],R=j[1];return Object(n.useEffect)((function(){var e=r.map((function(e){return Object(y.a)({},e,{show:!!S.find((function(t){return t.id===e.id})),completed:w.includes(e.type)})}));l({type:"SET_NEW_CARDS",payload:e})}),[S,w]),Object(n.useEffect)((function(){w.length===r.length/2&&(R([]),l({type:"SET_REMAINNING",payload:!1}),l({type:"RESET_CARDS",payload:3===+p?18:8}),l({type:"SET_WON"}),_({title:"Congratulations!!!",content:"Your memory is still useful.",cancelText:"Too easy? Try different level",okText:"Try again",onOk:function(){l({type:"SET_REMAINNING",payload:!0})},onCancel:function(){l({type:"SET_LEVEL",payload:"0"})}}),function(){1===+p&&(!E||s<E)&&l({type:"SET_BEST_EASY",payload:s});2===+p&&(!m||s<m)&&l({type:"SET_BEST_NORMAL",payload:s});3===+p&&(!d||s<d)&&l({type:"SET_BEST_HARD",payload:s});l({type:"RESET_TAKE_TIME"})}())}),[w]),c.a.createElement("section",{className:"Board"},i&&c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement("div",{className:"ant-row-flex margin-top"},r.map((function(e){return c.a.createElement(b,Object.assign({},e,{key:e.id,onClick:function(){return function(e){if(!a(S)&&!function(e,t){return 1===e.length&&e[0].id===t.id}(S,e)){var t=[].concat(Object(f.a)(S),[e]);N(t),function(e){return 2===e.length&&e[0].type===e[1].type}(t)&&R([].concat(Object(f.a)(w),[t[0].type])),a(t)&&setTimeout((function(){N([])}),1e3)}function a(e){return 2===e.length}}(e)}}))})))))},w=function(e){return e.sort((function(){return Math.random()-.5}))},R=function(e){var t=w("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")).slice(0,e).reduce((function(e,t,a){return[].concat(Object(f.a)(e),[{id:2*a,type:t,show:!1,completed:!1},{id:2*a+1,type:t,show:!1,completed:!1}])}),[]);return w(t)},A={cards:R(8),level:"0",remainning:!1,won:0,lose:0,takeTime:0,bestEasy:null,bestNormal:null,bestHard:null};function g(e,t){switch(t.type){case"RESET_CARDS":return Object(y.a)({},e,{cards:R(t.payload)});case"SET_NEW_CARDS":return Object(y.a)({},e,{cards:t.payload});case"SET_LEVEL":return Object(y.a)({},e,{level:t.payload});case"SET_REMAINNING":return Object(y.a)({},e,{remainning:t.payload});case"SET_LOSE":return Object(y.a)({},e,{lose:e.lose+1});case"SET_WON":return Object(y.a)({},e,{won:e.won+1});case"SET_TAKE_TIME":return Object(y.a)({},e,{takeTime:e.takeTime+1});case"RESET_TAKE_TIME":return Object(y.a)({},e,{takeTime:0});case"SET_BEST_EASY":return Object(y.a)({},e,{bestEasy:t.payload});case"SET_BEST_NORMAL":return Object(y.a)({},e,{bestNormal:t.payload});case"SET_BEST_HARD":return Object(y.a)({},e,{bestHard:t.payload});default:throw new Error}}var C=function(e){var t=Object(n.useReducer)(g,A),a=Object(o.a)(t,2),l=a[0],r=a[1];return c.a.createElement(u.Provider,{value:{state:l,dispatch:r}},c.a.createElement("div",{className:"App"},c.a.createElement(p,null),c.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[109,1,2]]]);
//# sourceMappingURL=main.1956ee9e.chunk.js.map