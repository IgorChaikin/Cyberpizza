(self.webpackChunkreact_boilerplate=self.webpackChunkreact_boilerplate||[]).push([[179],{899:(t,e,i)=>{"use strict";var r=i(796),n=i(294),s=i(935),a=i(610),o=i(991),c=i(255),l=i(724),u=i(608);i(325);function d(t){return(0,r.Z)("article",{className:"list__item"},void 0,(0,r.Z)("div",{},void 0,(0,r.Z)("img",{src:t.item.imgPath,alt:t.item.title}),(0,r.Z)("button",{onClick:t.onClick},void 0,"+")),(0,r.Z)("p",{className:"list__item__price"},void 0,"$",t.item.price.toFixed(2)),(0,r.Z)("h3",{},void 0,t.item.title),(0,r.Z)("p",{className:"list__item__description"},void 0,t.item.description))}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=(0,u.Z)(t);if(e){var n=(0,u.Z)(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return(0,l.Z)(this,i)}}var v,h,p=function(t){(0,c.Z)(i,t);var e=f(i);function i(){return(0,a.Z)(this,i),e.apply(this,arguments)}return(0,o.Z)(i,[{key:"renderItems",value:function(t,e){return null===t||void 0===t?void 0:t.map((function(t){return(0,r.Z)(d,{item:t,onClick:function(){return e(t)}},t.id)}))}},{key:"render",value:function(){var t=this.renderItems(this.props.items,this.props.onAdd);return(0,r.Z)("main",{},void 0,(0,r.Z)("h1",{},void 0,this.props.title),(0,r.Z)("div",{className:"list"},void 0,t))}}]),i}(n.Component);function g(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=(0,u.Z)(t);if(e){var n=(0,u.Z)(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return(0,l.Z)(this,i)}}var m,Z,y=function(t){(0,c.Z)(i,t);var e=g(i);function i(){return(0,a.Z)(this,i),e.apply(this,arguments)}return(0,o.Z)(i,[{key:"renderTags",value:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=i?t:t.slice(0,2);return null===n||void 0===n?void 0:n.map((function(t){return(0,r.Z)("button",{className:t.isActive?"tag_active":"tag",onClick:function(){return e(t.id)}},t.id,"#",t.name)}))}},{key:"render",value:function(){var t=this,e=this.renderTags(this.props.tags,this.props.onSwitch,this.props.all);return(0,r.Z)("div",{className:"filters"},void 0,v||(v=(0,r.Z)("p",{className:"filters__header"},void 0,"filters")),(0,r.Z)("p",{},void 0,e,(0,r.Z)("button",{className:"all",onClick:function(){return t.props.onSwitchAll()}},void 0,h||(h=(0,r.Z)("img",{src:"./src/static/svg/settings.svg",alt:"dish.svg"})),"".concat(this.props.all?"hide":"all"," filters"))))}}]),i}(n.Component);function k(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=(0,u.Z)(t);if(e){var n=(0,u.Z)(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return(0,l.Z)(this,i)}}var b,C,A,R=function(t){(0,c.Z)(i,t);var e=k(i);function i(){return(0,a.Z)(this,i),e.apply(this,arguments)}return(0,o.Z)(i,[{key:"getOrdersCount",value:function(t){var e,i,r,n;return(null===(e=t.ordered)||void 0===e?void 0:e.length)+(null===(i=t.baking)||void 0===i?void 0:i.length)+(null===(r=t.finishing)||void 0===r?void 0:r.length)+(null===(n=t.served)||void 0===n?void 0:n.length)}},{key:"render",value:function(){return(0,r.Z)("button",{className:"orders"},void 0,m||(m=(0,r.Z)("div",{className:"circle"})),Z||(Z=(0,r.Z)("img",{src:"./src/static/svg/dish.svg",alt:"dish.svg"})),(0,r.Z)("p",{},void 0,"order status",(0,r.Z)("div",{className:"count"},void 0,this.getOrdersCount(this.props.orders))))}}]),i}(n.Component);function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,r=(0,u.Z)(t);if(e){var n=(0,u.Z)(this).constructor;i=Reflect.construct(r,arguments,n)}else i=r.apply(this,arguments);return(0,l.Z)(this,i)}}var _=function(t){(0,c.Z)(i,t);var e=w(i);function i(t){var r;return(0,a.Z)(this,i),(r=e.call(this,t)).state={orders:{ordered:[],baking:[],finishing:[],served:[]},selectedCategory:"0",filters:[{id:"0",name:"vegetarian",isActive:!1},{id:"1",name:"vegan",isActive:!1},{id:"2",name:"tag0",isActive:!1},{id:"3",name:"tag1",isActive:!1},{id:"4",name:"tag2",isActive:!1}],isAllFilters:!1,categories:[{id:"0",title:"Pizza",items:[{id:"0-0",imgPath:"./src/static/media/ham_and_cheese.png",price:26.75,title:"Ham and cheese",description:"Ham and cheese ham and cheese ham and cheese ham and cheese ham and cheese",tags:[]},{id:"0-1",imgPath:"./src/static/media/margarita.png",price:20.5,title:"Margarita",description:"Margarita margarita margarita margarita margarita margarita margarita",tags:[]},{id:"0-2",imgPath:"./src/static/media/pepperoni.png",price:20.5,title:"Pepperoni",description:"Pepperoni pepperoni pepperoni pepperoni pepperoni",tags:[]},{id:"0-3",imgPath:"./src/static/media/vegetable.png",price:17.3,title:"Vegetable",description:"Vegetable vegetable vegetable vegetable vegetable",tags:["0","1"]}]},{id:"1",title:"Pasta",items:[]},{id:"2",title:"Sandwiches",items:[]},{id:"3",title:"Soup",items:[]},{id:"4",title:"Salads",items:[]},{id:"5",title:"Sides",items:[]},{id:"6",title:"Deserts",items:[]},{id:"7",title:"Drinks",items:[]}]},r}return(0,o.Z)(i,[{key:"changeCategory",value:function(t){console.log("it work"),this.setState({selectedCategory:t})}},{key:"getOrdersCount",value:function(){var t=this.state.orders;return t.ordered.length+t.baking.length+t.finishing.length+t.served.length}},{key:"addOrder",value:function(t){var e=Object.assign({},this.state.orders);e.baking.push(t),this.setState({orders:e})}},{key:"switchFilter",value:function(t){var e=this.state.filters.slice(),i=e.findIndex((function(e){return e.id===t}));e[i].isActive=!e[i].isActive,this.setState({filters:e})}},{key:"switchDisplayAll",value:function(){var t=this.state.isAllFilters;t=!t,this.setState({isAllFilters:t})}},{key:"categoriesList",value:function(t){var e=this;return this.state.categories.map((function(i){var n=t===i.id?"\u2014"+i.title:i.title;return(0,r.Z)("li",{},i.id,t===i.id?b||(b=(0,r.Z)("div",{className:"side-nav__marker"})):"",(0,r.Z)("button",{onClick:function(){return e.changeCategory(i.id)}},void 0,(0,r.Z)("h2",{},void 0,n)))}))}},{key:"render",value:function(){var t=this,e=this.state.selectedCategory,i=this.categoriesList(e),n=this.state.categories.find((function(t){return t.id===e})),s=this.state.filters.filter((function(t){return t.isActive})).map((function(t){return t.id})),a=null===n||void 0===n?void 0:n.items.slice(),o=s.length>0?null===a||void 0===a?void 0:a.filter((function(t){var e=t.tags.filter((function(t){return s.includes(t)}));return e.length>0&&e.length<=t.tags.length&&e.length===s.length})):a;return(0,r.Z)("div",{className:"app"},void 0,(0,r.Z)("nav",{className:"side-nav"},void 0,C||(C=(0,r.Z)("h1",{},void 0,"P.")),A||(A=(0,r.Z)("p",{},void 0,"categories")),(0,r.Z)("ul",{},void 0,i)),(0,r.Z)("div",{className:"main"},void 0,(0,r.Z)("header",{},void 0,(0,r.Z)(y,{tags:this.state.filters,onSwitch:function(e){return t.switchFilter(e)},onSwitchAll:function(){return t.switchDisplayAll()},all:this.state.isAllFilters}),(0,r.Z)(R,{orders:this.state.orders})),(0,r.Z)(p,{items:o,title:null===n||void 0===n?void 0:n.title,onAdd:function(e){return t.addOrder(e)}})))}}]),i}(n.Component),N=i(379),P=i.n(N),S=i(795),O=i.n(S),x=i(695),B=i.n(x),F=i(216),T=i.n(F),I=i(424),D={styleTagTransform:function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}},setAttributes:function(t){var e=i.nc;e&&t.setAttribute("nonce",e)},insert:function(t){var e=B()("head");if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}};D.domAPI=O(),D.insertStyleElement=T();P()(I.Z,D);I.Z&&I.Z.locals&&I.Z.locals;s.render((0,r.Z)(_,{}),document.getElementById("root"))},424:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});var r=i(645),n=i.n(r)()((function(t){return t[1]}));n.push([t.id,"html {\r\n    width: 100vw;\r\n    height: 100vh;\r\n    overflow-y: hidden;\r\n    overflow-x: hidden;\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n",""]);const s=n}},t=>{"use strict";t.O(0,[578,357,510,905,532,190,805,183,698,279],(()=>{return e=899,t(t.s=e);var e}));t.O()}]);