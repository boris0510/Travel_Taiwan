(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32487b80"],{"86b9":function(t,e,c){},"9d46":function(t,e,c){"use strict";c.r(e);c("e9c4");var a=c("7a23"),n=c("35f8"),i=c.n(n),r=function(t){return Object(a["x"])("data-v-f665676c"),t=t(),Object(a["v"])(),t},s={class:"container"},o={class:"title"},u={key:0},b={key:1},l=r((function(){return Object(a["h"])("p",null,[Object(a["i"])(" 台灣的各個美景，都美不勝收。"),Object(a["h"])("br"),Object(a["i"])(" 等你一同來發現這座寶島的奧妙！ ")],-1)})),O={class:"row row-cols-2 row-cols-md-4 g-4"},j={class:"card h-100"},d=["src"],h={key:1,src:i.a,class:"card-img-top",alt:"attractions-img"},f={class:"card-body"},g={key:0},p=r((function(){return Object(a["h"])("i",{class:"far fa-clock"},null,-1)})),m={key:1},v=r((function(){return Object(a["h"])("i",{class:"fas fa-map-marker-alt"},null,-1)})),k={key:2},y=r((function(){return Object(a["h"])("i",{class:"fas fa-phone"},null,-1)})),P={class:"card-footer"},D={class:"card-btn"},w=["onClick"],M={class:"d-flex justify-content-center"},G={class:"pagination"},C=r((function(){return Object(a["h"])("span",{"aria-hidden":"true"},"«",-1)})),N=[C],x={class:"page-item disabled"},L={class:"page-link",href:"#"},J=r((function(){return Object(a["h"])("span",{"aria-hidden":"true"},"»",-1)})),S=[J];function T(t,e,c,n,i,r){var C=Object(a["D"])("Loading"),J=Object(a["D"])("Modal");return Object(a["u"])(),Object(a["g"])(a["a"],null,[Object(a["j"])(C,{active:i.isLoading},null,8,["active"]),Object(a["h"])("div",s,[Object(a["h"])("div",o,[""===i.current.city?(Object(a["u"])(),Object(a["g"])("h2",u,"熱門景點")):(Object(a["u"])(),Object(a["g"])("h2",b,Object(a["G"])(i.current.city)+" 景點",1)),l]),Object(a["h"])("div",O,[(Object(a["u"])(!0),Object(a["g"])(a["a"],null,Object(a["B"])(r.filterData[i.currentPage],(function(t){return Object(a["u"])(),Object(a["g"])("div",{class:"col",key:t.ID},[Object(a["h"])("div",j,["{}"===!JSON.stringify(t.Picture)||"PictureUrl1"in t.Picture?(Object(a["u"])(),Object(a["g"])("img",{key:0,src:t.Picture.PictureUrl1,class:"card-img-top",alt:"attractions-img"},null,8,d)):(Object(a["u"])(),Object(a["g"])("img",h)),Object(a["h"])("div",f,[Object(a["h"])("h3",null,Object(a["G"])(t.Name),1),"OpenTime"in t?(Object(a["u"])(),Object(a["g"])("span",g,[p,Object(a["i"])("開放時間 : "+Object(a["G"])(t.OpenTime),1)])):Object(a["f"])("",!0),"Address"in t?(Object(a["u"])(),Object(a["g"])("p",m,[v,Object(a["i"])(Object(a["G"])(t.Address),1)])):Object(a["f"])("",!0),"Phone"in t?(Object(a["u"])(),Object(a["g"])("p",k,[y,Object(a["i"])(Object(a["G"])(t.Phone),1)])):Object(a["f"])("",!0)]),Object(a["h"])("div",P,[Object(a["h"])("div",D,[Object(a["h"])("button",{type:"button",onClick:function(e){return r.openModal(t)}},"了解更多",8,w)])])])])})),128))]),Object(a["h"])("nav",M,[Object(a["h"])("ul",G,[Object(a["h"])("li",{class:Object(a["p"])(["page-item",{disabled:0===i.currentPage}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=Object(a["N"])((function(t){return i.currentPage--}),["prevent"]))},N)],2),Object(a["h"])("li",x,[Object(a["h"])("a",L,Object(a["G"])(i.currentPage+1)+" / "+Object(a["G"])(r.filterData.length),1)]),Object(a["h"])("li",{class:Object(a["p"])(["page-item",{disabled:i.currentPage===r.filterData.length-1}])},[Object(a["h"])("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=Object(a["N"])((function(t){return i.currentPage++}),["prevent"]))},S)],2)])])]),Object(a["j"])(J,{ref:"Modal",data:i.tempData},null,8,["data"])],64)}var A=c("5530"),I=(c("d3b7"),c("159b"),c("c456")),U=c("714b"),$={name:"Attractions",data:function(){return{attractions:[],currentCategory:"",current:{category:"",city:"",cityEng:""},currentPage:0,isLoading:!1,tempData:{}}},components:{Modal:U["a"]},methods:{getData:function(t,e){var c=this;this.isLoading=!0,this.axios.get(t,{headers:Object(I["a"])()}).then((function(t){c[e]=t.data,c.isLoading=!1}))},openModal:function(t){this.tempData=Object(A["a"])({},t),this.$refs.Modal.showModal()}},computed:{filterData:function(){var t=[];return this.attractions.forEach((function(e,c){c%16===0&&t.push([]);var a=parseInt(c/16,0);t[a].push(e)})),t}},mounted:function(){var t=this;this.getData("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=3000&$format=JSON","attractions"),this.emitter.on("sendData",(function(e){t.current=e})),this.emitter.on("sendUrl",(function(e){t.getData(e,"attractions")}))}},E=(c("aee2"),c("6b0d")),_=c.n(E);const B=_()($,[["render",T],["__scopeId","data-v-f665676c"]]);e["default"]=B},aee2:function(t,e,c){"use strict";c("86b9")}}]);
//# sourceMappingURL=chunk-32487b80.e88bc708.js.map