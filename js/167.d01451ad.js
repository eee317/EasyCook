"use strict";(self["webpackChunkeasycook"]=self["webpackChunkeasycook"]||[]).push([[167],{8825:function(e,t,s){var o=s(9669),i=s.n(o),l=s(7720);t["Z"]=(0,l.Q_)("recipesStore",{state:()=>({recipes:[],isLoading:!0,recipe:[]}),actions:{getRecipes(){i().get("https://whispering-ravine-09089.herokuapp.com/recipe").then((e=>{this.recipes=e.data,console.log(this.recipes),console.log(this.recipes.length),setTimeout(this.isLoading=!1,2e3)}))},getTheRecipeData(e){console.log("finsh"+e),console.log("store"+this.recipe),this.recipe=[],i().get(`https://whispering-ravine-09089.herokuapp.com/recipe/?id=${e}`).then((e=>{this.recipe=e.data[0],console.log(this.recipe),console.log(this.recipe.title),setTimeout(this.isLoading=!1,2e3)}))}}})},5416:function(e,t,s){s.d(t,{Z:function(){return m}});var o=s(6252);const i={class:"container searchForm-bg position-relative"},l=(0,o._)("div",{class:"searchForm-bg-big"},null,-1),a={class:"row my-md-20 my-15 justify-content-center"},n=(0,o.uE)('<div class="col-md-6 col-lg-4"><div><input type="search" class="form-control shadow mb-6 py-3 py-md-5 px-5 px-md-7 fs-5 text-primary border-0 rounded-pill" placeholder="搜尋食譜"></div></div><div class="col-md-6 col-lg-4"><select class="form-select py-3 py-md-5 mb-6 px-5 px-md-7 rounded-pill shadow border-0 fs-5" aria-label="Default select example"><option selected disabled class="">選擇食材</option><option value="1">雞蛋</option><option value="2">雞肉</option><option value="3">絲瓜</option></select></div><div class="col-lg-8"><div class="d-flex flex-wrap flex-lg-nowrap"><select class="form-select tl-radius py-3 py-md-5 px-5 px-md-7 shadow border-0 w-50 radius-lg-bl-30 fs-5" aria-label="Default select example"><option selected disabled class="">不限時</option><option value="1">限時5分鐘</option><option value="1">限時10分鐘</option><option value="1">限時20分鐘</option><option value="1">限時30分鐘</option></select><select class="form-select py-3 py-md-5 w-50 px-5 px-md-7 shadow tr-radius border-0 radius-lg-0 fs-5" aria-label="Default select example"><option selected disabled class="">葷素皆宜</option><option value="1">蛋奶素</option><option value="1">葷</option></select><select class="form-select py-3 py-md-5 w-50 radius-lg-0 px-5 px-md-7 shadow border-0 bl-radius fs-5" aria-label="Default select example"><option selected disabled class="">設備</option><option value="1">平底鍋</option><option value="1">電鍋</option><option value="1">鐵鍋</option></select><select class="form-select py-3 py-md-5 w-50 px-5 px-md-7 shadow border-0 br-radius radius-lg-tr-30 fs-5" aria-label="Default select example"><option selected disabled class="">放置類型</option><option value="1">非放置類型</option><option value="1">可放置類型</option></select></div></div>',3),c={class:"col-md-12"},r=(0,o._)("input",{type:"button",value:"搜尋",class:"mt-6 fs-5 px-7 btn btn-primary rounded-pill text-own-white"},null,-1);function d(e,t){const s=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",i,[l,(0,o._)("div",a,[n,(0,o._)("div",c,[(0,o.Wm)(s,{to:"/searchResults"},{default:(0,o.w5)((()=>[r])),_:1})])])])}var p=s(3744);const g={},u=(0,p.Z)(g,[["render",d]]);var m=u},2167:function(e,t,s){s.r(t),s.d(t,{default:function(){return H}});var o=s(6252),i=s(3577);const l={class:"container mt-10"},a={class:"row"},n={class:"text-dark-green text-start mb-6"},c={class:"card border-0 h-100 bg-bright-green p-4 py-lg-6 py-lg-7",style:{}},r={class:"row g-0 flex-nowrap align-items-center align-items-lg-start"},d={class:"col-md-4 col-3 line-lg-before"},p=["onClick"],g=["src","alt"],u=["onClick"],m=(0,o._)("button",{class:"text-center mt-3 py-2 px-4 btn btn-primary text-own-white rounded-pill align-middle d-lg-inline-block d-none"},[(0,o._)("i",{class:"fa-solid fa-utensils fs-6 me-3"}),(0,o.Uk)("加入餐點 ")],-1),h={class:"col-md-8 col-9"},b={class:"card-body ms-lg-10 text-start d-flex align-items-center justify-content-between p-0"},v=["onClick"],f={class:"card-body p-md-0 text-start text-dark-green"},x={class:"card-title fs-lg-5"},w={class:"card-text m-0 text-own-orange"},y={class:"card-text m-0"},k={class:"card-text m-0"},_=(0,o.Uk)("食材： "),D={key:0},C=(0,o._)("button",{class:"btn text-primary d-lg-none w-lg-15"},[(0,o._)("i",{class:"fa-solid fa-utensils px-2 px-sm-5 px-md-2 fs-5"})],-1),R=["onClick"];function T(e,t,s,T,L,Z){const P=(0,o.up)("searchform"),j=(0,o.up)("loadingPage");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(P),(0,o._)("div",l,[(0,o._)("div",a,[(0,o._)("h2",n,"共 "+(0,i.zw)(e.recipes.length)+" 道食譜",1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.recipes,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"col-md-6 mb-5",key:e.id},[(0,o._)("div",c,[(0,o._)("div",r,[(0,o._)("div",d,[(0,o._)("a",{href:"javascript:;",onClick:t=>Z.goTheRecipePage(e.id),class:"text-reset text-decoration-none"},[(0,o._)("img",{class:"w-100 w-sm-75 w-lg-75 img-fluid border border-2 border-card-green-100 rounded-2",src:`${e.image}`,alt:`${e.title}`.jpg},null,8,g),(0,o._)("button",{onClick:t=>Z.goTheRecipePage(e.id),class:"text-card-green-300 d-lg-none btn d-inline-block text-center"},"查看食譜",8,u)],8,p),m]),(0,o._)("div",h,[(0,o._)("div",b,[(0,o._)("a",{href:"javascript:;",onClick:t=>Z.goTheRecipePage(e.id),class:"text-reset text-decoration-none"},[(0,o._)("div",f,[(0,o._)("h6",x,(0,i.zw)(e.title),1),(0,o._)("p",w,(0,i.zw)(e.time)+" 分鐘",1),(0,o._)("p",y,(0,i.zw)(e.meatAndVegetable),1),(0,o._)("p",k,[_,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.ingredients,(e=>((0,o.wg)(),(0,o.iD)("span",{class:"card-text m-0",key:e+"recipe"},[(0,o.Uk)((0,i.zw)(e.ingredientsName)+" ",1),e.length>=2?((0,o.wg)(),(0,o.iD)("span",D,"、")):(0,o.kq)("",!0)])))),128))])])],8,v),C])])]),(0,o._)("a",{onClick:t=>Z.goTheRecipePage(e.id),class:"btn-search-more btn text-card-green-300 d-none d-lg-inline-block position-absolute"},"查看食譜",8,R)])])))),128))])]),(0,o.Wm)(j,{isLoading:e.isLoading},null,8,["isLoading"])],64)}var L=s(7720),Z=s(8825),P=s(5416),j={data(){return{}},computed:{...(0,L.rn)(Z.Z,["recipes","isLoading"])},components:{searchform:P.Z},methods:{...(0,L.nv)(Z.Z,["getRecipes"]),goTheRecipePage(e){this.$router.push(`/recipesContent/${e}`)}},mounted(){this.getRecipes()}},z=s(3744);const $=(0,z.Z)(j,[["render",T]]);var H=$}}]);
//# sourceMappingURL=167.d01451ad.js.map