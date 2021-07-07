(self.webpackChunkreact_boilerplate=self.webpackChunkreact_boilerplate||[]).push([[179],{424:(t,e,n)=>{"use strict";var i=n(796),r=n(294),s=n(935),o=n(610),a=n(991),c=n(255),l=n(724),u=n(608);n(325);function d(t){return(0,i.Z)("article",{className:"list__item"},void 0,(0,i.Z)("div",{},void 0,(0,i.Z)("img",{src:"".concat(t.staticPath).concat(t.item.imgPath),alt:t.item.title}),(0,i.Z)("button",{onClick:t.onClick},void 0,"+")),(0,i.Z)("p",{className:"list__item__price"},void 0,"$",t.item.price.toFixed(2)),(0,i.Z)("h3",{},void 0,t.item.title),(0,i.Z)("p",{className:"list__item__description"},void 0,t.item.description))}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=(0,u.Z)(t);if(e){var r=(0,u.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,l.Z)(this,n)}}var h,v=function(t){(0,c.Z)(n,t);var e=f(n);function n(){return(0,o.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"renderItems",value:function(t,e,n){return null===t||void 0===t?void 0:t.map((function(t){return(0,i.Z)(d,{item:t,staticPath:e,onClick:function(){return n(t)}},t.id)}))}},{key:"render",value:function(){var t=this.renderItems(this.props.items,this.props.staticPath,this.props.onAdd);return(0,i.Z)("main",{},void 0,(0,i.Z)("h1",{},void 0,this.props.title),(0,i.Z)("div",{className:"list"},void 0,t))}}]),n}(r.Component);function p(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=(0,u.Z)(t);if(e){var r=(0,u.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,l.Z)(this,n)}}var m,g=function(t){(0,c.Z)(n,t);var e=p(n);function n(){return(0,o.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"renderTags",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=n?t:t.slice(0,2);return null===r||void 0===r?void 0:r.map((function(t){return(0,i.Z)("button",{className:t.isActive?"tag_active":"tag",onClick:function(){return e(t.id)}},t.id,"#",t.name)}))}},{key:"render",value:function(){var t=this,e=this.renderTags(this.props.tags,this.props.onSwitch,this.props.all);return(0,i.Z)("div",{className:"filters"},void 0,h||(h=(0,i.Z)("p",{className:"filters__header"},void 0,"filters")),(0,i.Z)("p",{},void 0,e,(0,i.Z)("button",{className:"all",onClick:function(){return t.props.onSwitchAll()}},void 0,(0,i.Z)("img",{src:"".concat(this.props.staticPath,"settings.svg"),alt:"dish.svg"}),"".concat(this.props.all?"hide":"all"," filters"))))}}]),n}(r.Component);function Z(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=(0,u.Z)(t);if(e){var r=(0,u.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,l.Z)(this,n)}}var y,k,C,A=function(t){(0,c.Z)(n,t);var e=Z(n);function n(){return(0,o.Z)(this,n),e.apply(this,arguments)}return(0,a.Z)(n,[{key:"getOrdersCount",value:function(t){var e,n,i,r;return(null===(e=t.ordered)||void 0===e?void 0:e.length)+(null===(n=t.baking)||void 0===n?void 0:n.length)+(null===(i=t.finishing)||void 0===i?void 0:i.length)+(null===(r=t.served)||void 0===r?void 0:r.length)}},{key:"render",value:function(){return(0,i.Z)("button",{className:"orders"},void 0,m||(m=(0,i.Z)("div",{className:"circle"})),(0,i.Z)("img",{src:"".concat(this.props.staticPath,"dish.svg"),alt:"dish.svg"}),(0,i.Z)("p",{},void 0,"order status",(0,i.Z)("div",{className:"count"},void 0,this.getOrdersCount(this.props.orders))))}}]),n}(r.Component),b=n(137),w=n(757),R=n.n(w),_=function(){function t(e){(0,o.Z)(this,t),this.domain=e}var e;return(0,a.Z)(t,[{key:"getCategories",value:(e=(0,b.Z)(R().mark((function t(){var e;return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="".concat(this.domain,"categories"),t.abrupt("return",fetch(e,{method:"GET"}).then((function(t){return t.json()})).catch(console.error));case 2:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}();function N(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=(0,u.Z)(t);if(e){var r=(0,u.Z)(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return(0,l.Z)(this,n)}}var P="http://cyber-pizza.herokuapp.com/",S=new _(P),O=function(t){(0,c.Z)(n,t);var e=N(n);function n(t){var i;return(0,o.Z)(this,n),(i=e.call(this,t)).state={orders:{ordered:[],baking:[],finishing:[],served:[]},selectedCategory:"0",filters:[{id:"0",name:"vegetarian",isActive:!1},{id:"1",name:"vegan",isActive:!1},{id:"2",name:"tag0",isActive:!1},{id:"3",name:"tag1",isActive:!1},{id:"4",name:"tag2",isActive:!1}],isAllFilters:!1,categories:[]},i}return(0,a.Z)(n,[{key:"componentDidMount",value:function(){var t=this;S.getCategories().then((function(e){t.setState({categories:e})}))}},{key:"changeCategory",value:function(t){this.setState({selectedCategory:t})}},{key:"addOrder",value:function(t){var e=Object.assign({},this.state.orders);e.baking.push(t),this.setState({orders:e})}},{key:"switchFilter",value:function(t){var e=this.state.filters.slice(),n=e.findIndex((function(e){return e.id===t}));e[n].isActive=!e[n].isActive,this.setState({filters:e})}},{key:"switchDisplayAll",value:function(){var t=this.state.isAllFilters;t=!t,this.setState({isAllFilters:t})}},{key:"categoriesList",value:function(t){var e=this;return console.log(this.state.categories),this.state.categories.map((function(n){var r=t===n.id?"\u2014"+n.title:n.title;return(0,i.Z)("li",{},n.id,t===n.id?y||(y=(0,i.Z)("div",{className:"side-nav__marker"})):"",(0,i.Z)("button",{onClick:function(){return e.changeCategory(n.id)}},void 0,(0,i.Z)("h2",{},void 0,r)))}))}},{key:"render",value:function(){var t,e=this;console.log("render");var n=this.state.selectedCategory,r=this.categoriesList(n),s=this.state.categories.find((function(t){return t.id===n})),o=null===(t=this.state.filters.filter((function(t){return t.isActive})))||void 0===t?void 0:t.map((function(t){return t.id})),a=null===s||void 0===s?void 0:s.items.slice(),c=o.length>0?null===a||void 0===a?void 0:a.filter((function(t){var e=t.tags.filter((function(t){return o.includes(t)}));return e.length>0&&e.length<=t.tags.length&&e.length===o.length})):a;return(0,i.Z)("div",{className:"app"},void 0,(0,i.Z)("nav",{className:"side-nav"},void 0,k||(k=(0,i.Z)("h1",{},void 0,"P.")),C||(C=(0,i.Z)("p",{},void 0,"categories")),(0,i.Z)("ul",{},void 0,r)),(0,i.Z)("div",{className:"main"},void 0,(0,i.Z)("header",{},void 0,(0,i.Z)(g,{tags:this.state.filters,onSwitch:function(t){return e.switchFilter(t)},onSwitchAll:function(){return e.switchDisplayAll()},all:this.state.isAllFilters,staticPath:P}),(0,i.Z)(A,{orders:this.state.orders,staticPath:P})),(0,i.Z)(v,{items:c,title:null===s||void 0===s?void 0:s.title,onAdd:function(t){return e.addOrder(t)},staticPath:P})))}}]),n}(r.Component),x=n(379),B=n.n(x),T=n(795),F=n.n(T),I=n(695),E=n.n(I),D=n(216),j=n.n(D),z=n(382),L={styleTagTransform:function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}},setAttributes:function(t){var e=n.nc;e&&t.setAttribute("nonce",e)},insert:function(t){var e=E()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}};L.domAPI=F(),L.insertStyleElement=j();B()(z.Z,L);z.Z&&z.Z.locals&&z.Z.locals;s.render((0,i.Z)(O,{}),document.getElementById("root"))},382:(t,e,n)=>{"use strict";n.d(e,{Z:()=>s});var i=n(645),r=n.n(i)()((function(t){return t[1]}));r.push([t.id,"html {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n",""]);const s=r}},t=>{"use strict";t.O(0,[578,357,510,905,532,190,805,410,183,698,279],(()=>{return e=424,t(t.s=e);var e}));t.O()}]);