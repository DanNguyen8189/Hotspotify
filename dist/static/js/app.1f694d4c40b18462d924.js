webpackJsonp([1],{"0WCN":function(t,e){},"8FP4":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),n={name:"menubar",data:function(){return{isSideBarOpen:!1}},props:{isOpen:{type:Boolean,required:!1},right:{type:Boolean,required:!1},width:{type:[String],required:!1,default:"300"},disableEsc:{type:Boolean,required:!1},noOverlay:{type:Boolean,required:!1},onStateChange:{type:Function,required:!1},burgerIcon:{type:Boolean,required:!1,default:!0},crossIcon:{type:Boolean,required:!1,default:!0},disableOutsideClick:{type:Boolean,required:!1,default:!1},closeOnNavigation:{type:Boolean,required:!1,default:!1}},methods:{openMenu:function(){this.$emit("openMenu"),this.isSideBarOpen=!0,this.right&&(this.$refs.sideNav.style.left="auto",this.$refs.sideNav.style.right="0px"),this.$nextTick(function(){this.$refs.sideNav.style.width=this.width?this.width+"px":"300px"})},closeMenu:function(){this.$emit("closeMenu"),this.isSideBarOpen=!1,this.$refs.sideNav.style.width="0px"},closeMenuOnEsc:function(t){"Escape"!==(t=t||window.event).key&&27!==t.keyCode||this.closeMenu()},documentClick:function(t){var e=this.$refs.bmBurgerButton,s=null;t&&t.target&&(s=t.target),!e||e===s||e.contains(s)||this.hasClass(s,"bm-menu")||!this.isSideBarOpen||this.disableOutsideClick?e&&this.hasClass(s,"bm-menu")&&this.isSideBarOpen&&this.closeOnNavigation&&this.closeMenu():this.closeMenu()},hasClass:function(t,e){do{if(t.classList&&t.classList.contains(e))return!0;t=t.parentNode}while(t);return!1}},mounted:function(){this.disableEsc||document.addEventListener("keyup",this.closeMenuOnEsc)},created:function(){document.addEventListener("click",this.documentClick)},destroyed:function(){document.removeEventListener("keyup",this.closeMenuOnEsc),document.removeEventListener("click",this.documentClick)},watch:{isOpen:{deep:!0,immediate:!0,handler:function(t,e){var s=this;this.$nextTick(function(){!e&&t&&s.openMenu(),e&&!t&&s.closeMenu()})}},right:{deep:!0,immediate:!0,handler:function(t,e){var s=this;t&&this.$nextTick(function(){s.$refs.bmBurgerButton.style.left="auto",s.$refs.bmBurgerButton.style.right="36px",s.$refs.sideNav.style.left="auto",s.$refs.sideNav.style.right="0px",document.querySelector(".bm-burger-button").style.left="auto",document.querySelector(".bm-burger-button").style.right="36px",document.querySelector(".bm-menu").style.left="auto",document.querySelector(".bm-menu").style.right="0px",document.querySelector(".cross-style").style.right="250px"}),e&&this.$refs.bmBurgerButton.hasAttribute("style")&&(this.$refs.bmBurgerButton.removeAttribute("style"),this.$refs.sideNav.style.right="auto",document.querySelector(".bm-burger-button").removeAttribute("style"),document.getElementById("sideNav").style.right="auto",document.querySelector(".cross-style").style.right="0px")}}}},r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{ref:"sideNav",staticClass:"bm-menu"},[s("nav",{staticClass:"bm-item-list",attrs:{"aria-hidden":[!this.isSideBarOpen]},on:{click:t.closeMenu,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.closeMenu(e)}}},[t._t("default")],2),t._v(" "),s("span",{staticClass:"bm-cross-button cross-style",class:{hidden:!t.crossIcon},attrs:{tabindex:[this.isSideBarOpen?0:-1],"aria-label":"Close sidebar navigation menu","aria-controls":"sidebar menu"},on:{click:t.closeMenu,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.closeMenu(e)}}},t._l(2,function(t,e){return s("span",{key:t,staticClass:"bm-cross",style:{position:"absolute",width:"3px",height:"20px",transform:1===e?"rotate(45deg)":"rotate(-45deg)"}})}),0)]),t._v(" "),s("div",{ref:"bmBurgerButton",staticClass:"bm-burger-button",class:{hidden:!t.burgerIcon},attrs:{tabindex:[this.isSideBarOpen?-1:1],"aria-label":"Open sidebar navigation menu","aria-controls":"sidebar menu"},on:{click:t.openMenu,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.openMenu(e)}}},t._l(3,function(t,e){return s("span",{key:e,staticClass:"bm-burger-bars line-style",style:{top:2*e*20+"%"}})}),0)])},staticRenderFns:[]};var o=s("VU/8")(n,r,!1,function(t){s("0WCN")},null,null).exports,a=s("mtWM"),c=s.n(a),u=function(t){window.localStorage.setItem("spotify_token_timestamp",Date.now()),window.localStorage.setItem("spotify_access_token",t)},l=function(){return window.localStorage.getItem("spotify_access_token")},p=function(){window.localStorage.removeItem("spotify_token_timestamp"),window.localStorage.removeItem("spotify_access_token"),window.localStorage.removeItem("spotify_refresh_token"),window.location.assign("https://hotspotify.herokuapp.com/")},d={Authorization:"Bearer "+function(){var t=function(){for(var t={},e=void 0,s=/([^&;=]+)=?([^&;]*)/g,i=window.location.hash.substring(1);e=s.exec(i);)t[e[1]]=decodeURIComponent(e[2]);return t}(),e=(t.error,t.access_token);if(l()&&Date.now()-window.localStorage.getItem("spotify_token_timestamp")>36e5)console.warn("Access token has expired"),e&&u(e);else{if(null!==l())return l();e&&u(e)}return e}(),"Content-Type":"application/json"},m=function(){return c.a.get("https://api.spotify.com/v1/me",{headers:d})},h=function(){return c.a.get("https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50",{headers:d})},f=function(){return c.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=medium_term",{headers:d})},g=function(){return c.a.get("https://api.spotify.com/v1/me/top/artists?limit=50&time_range=long_term",{headers:d})},v=function(){return c.a.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=short_term",{headers:d})},k=function(){return c.a.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=medium_term",{headers:d})},T=function(){return c.a.get("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term",{headers:d})},y={name:"App",metaInfo:{title:"Hotspotify",titleTemplate:"%s | Hotspotify",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"}]},data:function(){return{isMenuOpen:-1}},components:{Menu:o},computed:{loggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{goHome:function(){this.$router.push("/")},goTopArtists:function(){this.$router.push("/topartists")},goTopTracks:function(){this.$router.push("/toptracks")},logOut:function(){this.$store.commit("clearAll"),p()},toggleMenuState:function(){-1===this.isMenuOpen?this.isMenuOpen=0:this.isMenuOpen=-1}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[this.loggedIn?s("Menu",{on:{openMenu:t.toggleMenuState,closeMenu:t.toggleMenuState}},[s("a",{attrs:{tabindex:[t.isMenuOpen]},on:{click:function(e){return t.goHome()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goHome()}}},[s("i",{staticClass:"fa fa-fw fa-star-o"}),t._v(" "),s("span",[t._v("Home")])]),t._v(" "),s("a",{attrs:{tabindex:[this.isMenuOpen]},on:{click:function(e){return t.goTopArtists()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goTopArtists()}}},[s("i",{staticClass:"fa fa-fw fa-bell-o"}),t._v(" "),s("span",[t._v("Top Artists")])]),t._v(" "),s("a",{attrs:{tabindex:[this.isMenuOpen]},on:{click:function(e){return t.goTopTracks()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.goTopTracks()}}},[s("i",{staticClass:"fa fa-fw fa-envelope-o"}),t._v(" "),s("span",[t._v("Top Tracks")])]),t._v(" "),s("a",{attrs:{tabindex:[this.isMenuOpen]},on:{click:function(e){return t.logOut()},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.logOut()}}},[s("i",{staticClass:"fa fa-fw fa-envelope-o"}),t._v(" "),s("span",[t._v("Log Out")])])]):t._e(),t._v(" "),s("transition",{attrs:{name:"fade",mode:"out-in"}},[s("router-view")],1)],1)},staticRenderFns:[]};var b=s("VU/8")(y,_,!1,function(t){s("xaY/")},null,null).exports,A=s("/ocq"),C=s("f3bp"),M={name:"Home",metaInfo:{meta:[{name:"description",content:"view your top tracks and artists from Spotify!"}]},data:function(){return{msg:"Hotspotify home page"}},computed:{user:function(){return this.$store.getters.getUser}},methods:{logOut:function(){this.$store.commit("clearAll"),p(),this.$router.push({name:"Home"})},getUserInfo:function(){var t=this;m().then(function(e){t.$store.commit("setUser",e.data)}).catch(function(t){return console.log("user not logged in")})},getLoginURI:function(t){document.getElementById("login-button").href="https://hotspotify.herokuapp.com/login"}},created:function(){this.getUserInfo()}},$={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[this.user?[s("div",{attrs:{id:"profile-page"}},[s("h1",[t._v("Hi,")]),t._v(" "),s("h1",[t._v(t._s(this.user.display_name))]),t._v(" "),s("img",{staticClass:"profile-pic",attrs:{src:this.user.images[0].url,alt:"profile_picture"}})])]:[s("div",{attrs:{id:"login-page"}},[s("h1",[t._v("Hotspotify")]),t._v(" "),s("a",{staticClass:"btn btn-primary",attrs:{href:"#",id:"login-button"},on:{click:function(e){return t.getLoginURI()}}},[t._v("Log In With Spotify")]),s("br")])]],2)},staticRenderFns:[]};var S=s("VU/8")(M,$,!1,function(t){s("lA4R")},"data-v-39292158",null).exports,w={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fire"},[e("div",{staticClass:"fire-left"},[e("div",{staticClass:"main-fire"}),this._v(" "),e("div",{staticClass:"particle-fire"})]),this._v(" "),e("div",{staticClass:"fire-main"},[e("div",{staticClass:"main-fire"}),this._v(" "),e("div",{staticClass:"particle-fire"})]),this._v(" "),e("div",{staticClass:"fire-right"},[e("div",{staticClass:"main-fire"}),this._v(" "),e("div",{staticClass:"particle-fire"})]),this._v(" "),e("div",{staticClass:"fire-bottom"},[e("div",{staticClass:"main-fire"})])])}]};var x=s("VU/8")({name:"FireAnimation",data:function(){return{msg:"Fire loading animation"}}},w,!1,function(t){s("gTCx")},"data-v-74cb8a1c",null).exports,O={name:"TopArtists",metaInfo:{title:"Top artists",meta:[{name:"description",content:"your top artists on spotify"}]},data:function(){return{msg:"Top artists page"}},components:{"fire-animation":x},computed:{userArtistsShort:function(){return this.$store.getters.getTopArtistsShort},userArtistsMedium:function(){return this.$store.getters.getTopArtistsMedium},userArtistsLong:function(){return this.$store.getters.topArtistsLong}},methods:{getTopArtists2:function(){var t=this;c.a.all([h(),f(),g()]).then(c.a.spread(function(t,e,s){return{topArtistsShort:t.data,topArtistsMedium:e.data,topArtistsLong:s.data}})).then(function(e){t.$store.commit("setTopArtists",e)}).catch(function(t){return console.log("user not logged in")})},changeTimePeriod:function(t){this.$store.commit("setTimePeriod",t)},getAmount:function(){return this.$store.getters.getTopArtists.total},getImage:function(t){return this.$store.getters.getTopArtists.items[t].images[1].url},getName:function(t){return this.$store.getters.getTopArtists.items[t].name}},created:function(){this.getTopArtists2()}},I={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topartists"},[this.userArtistsShort?[s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"header-inside"},[s("h1",[t._v("Top Artists")]),t._v(" "),s("div",{staticClass:"timeperiod-button-container",attrs:{role:"navigation"}},[s("button",{on:{click:function(e){return t.changeTimePeriod(0)}}},[s("span",{class:{active:0===this.$store.state.timePeriod}},[t._v("Past Month")])]),t._v(" "),s("button",{on:{click:function(e){return t.changeTimePeriod(1)}}},[s("span",{class:{active:1===this.$store.state.timePeriod}},[t._v("Past 6 Months")])]),t._v(" "),s("button",{on:{click:function(e){return t.changeTimePeriod(2)}}},[s("span",{class:{active:2===this.$store.state.timePeriod}},[t._v("All Time")])])])])]),t._v(" "),s("div",{staticClass:"artist-list-container",attrs:{role:"list"}},t._l(t.getAmount(),function(e){return s("div",{key:e,staticClass:"list-item"},[s("img",{attrs:{src:t.getImage(e-1),alt:t.getName(e-1)}}),t._v(" "),s("div",{staticClass:"artist-text"},[t._v(t._s(t.getName(e-1)))])])}),0)]:[s("fire-animation")]],2)},staticRenderFns:[]};var P=s("VU/8")(O,I,!1,function(t){s("hcO/")},"data-v-4354c5da",null).exports,L={name:"TopTracks",metaInfo:{title:"Top tracks",meta:[{name:"description",content:"your top tracks on spotify"}]},data:function(){return{msg:"Top tracks page",audioElement:null,activeTrackIndex:-1,activeTrackPage:-1,timOut:null}},components:{"fire-animation":x},computed:{userTracksShort:function(){return this.$store.getters.getTopTracksShort},userTracksMedium:function(){return this.$store.getters.getTopTracksMedium},userTracksLong:function(){return this.$store.getters.topTracksLong}},methods:{getTopTracks2:function(){var t=this;c.a.all([v(),k(),T()]).then(c.a.spread(function(t,e,s){return{topTracksShort:t.data,topTracksMedium:e.data,topTracksLong:s.data}})).then(function(e){t.$store.commit("setTopTracks",e)}).catch(function(t){return console.log("user not logged in")})},changeTimePeriod:function(t){this.$store.commit("setTimePeriod",t)},getAmount:function(){return this.$store.getters.getTopTracks.total},getImage:function(t){return this.$store.getters.getTopTracks.items[t].album.images[2].url},getTrackName:function(t){return this.$store.getters.getTopTracks.items[t].name},getArtistName:function(t){return this.$store.getters.getTopTracks.items[t].artists[0].name},getTrackURL:function(t){return this.$store.getters.getTopTracks.items[t].preview_url},playTrack:function(t){if(this.audioElement&&(this.audioElement.pause(),this.activeTrackIndex===t&&this.activeTrackPage===this.$store.state.timePeriod))return this.activeTrackIndex=-1,void(this.timeOut&&clearTimeout(this.timeOut));this.timeOut&&clearTimeout(this.timeOut);var e=this.getTrackURL(t);null!==e?(this.audioElement=new Audio(e),this.audioElement.play(),this.activeTrackIndex=t,this.activeTrackPage=this.$store.state.timePeriod,this.timeOut=setTimeout(function(){this.activeTrackIndex=-1}.bind(this),3e4)):this.activeTrackIndex=-1}},created:function(){this.getTopTracks2()}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"toptracks"},[this.userTracksShort?[s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"header-inside"},[s("h1",[t._v("Top Tracks")]),t._v(" "),s("div",{staticClass:"timeperiod-button-container"},[s("button",{on:{click:function(e){return t.changeTimePeriod(0)}}},[s("span",{class:{active:0===this.$store.state.timePeriod}},[t._v("Past Month")])]),t._v(" "),s("button",{on:{click:function(e){return t.changeTimePeriod(1)}}},[s("span",{class:{active:1===this.$store.state.timePeriod}},[t._v("Past 6 Months")])]),t._v(" "),s("button",{on:{click:function(e){return t.changeTimePeriod(2)}}},[s("span",{class:{active:2===this.$store.state.timePeriod}},[t._v("All Time")])])])])]),t._v(" "),s("div",{attrs:{role:"list"}},t._l(t.getAmount(),function(e){return s("div",{key:e,staticClass:"list-item",class:{activeTrack:t.activeTrackIndex===e-1&&t.activeTrackPage===t.$store.state.timePeriod}},[s("span",[s("p",{staticClass:"track-number"},[t._v(t._s(e))]),t._v(" "),s("img",{attrs:{src:t.getImage(e-1)}}),t._v(" "),s("div",{staticClass:"track-artist-text"},[s("p",{staticClass:"track-name"},[t._v(t._s(t.getTrackName(e-1)))]),t._v(" "),s("p",{staticClass:"artist-name"},[t._v(t._s(t.getArtistName(e-1)))])]),t._v(" "),null!==t.getTrackURL(e-1)?s("button",{staticClass:"play-button-area",class:{play:!(t.activeTrackIndex===e-1&&t.activeTrackPage===t.$store.state.timePeriod),pause:t.activeTrackIndex===e-1&&t.activeTrackPage===t.$store.state.timePeriod},attrs:{"aria-label":"Pause or play current track"},on:{click:function(s){return s.preventDefault(),t.playTrack(e-1)}}}):s("p",{staticClass:"play-button-area preview-na"},[t._v("Preview N/A")])])])}),0)]:[s("fire-animation")]],2)},staticRenderFns:[]};var E=s("VU/8")(L,B,!1,function(t){s("8FP4")},"data-v-2555d975",null).exports;i.a.use(A.a),i.a.use(C.a,{keyName:"metaInfo",attribute:"data-vue-meta",ssrAttribute:"data-vue-meta-server-rendered",tagIDKeyName:"vmid",refreshOnceOnNavigation:!0});var N=new A.a({routes:[{path:"/",name:"Home",component:S},{path:"/topartists",name:"TopArtists",component:P},{path:"/toptracks",name:"TopTracks",component:E},{path:"/:tokens",name:"Home",component:S}]}),q=s("NYxO");i.a.use(q.a);var U=new q.a.Store({state:{loggedIn:!1,user:null,timePeriod:null,topArtistsShort:null,topArtistsMedium:null,topArtistsLong:null,topTracksShort:null,topTracksMedium:null,topTracksLong:null},mutations:{setUser:function(t,e){t.loggedIn=!0,t.user=e},setTopArtistsShort:function(t,e){t.topArtistsShort=e},setTopArtistsMedium:function(t,e){t.topArtistsMedium=e},setTopArtistsLong:function(t,e){t.topArtistsLong=e},setTopTracksShort:function(t,e){t.topTracksShort=e},setTopTracksMedium:function(t,e){t.topTracksMedium=e},setTopTracksLong:function(t,e){t.topTracksLong=e},setTopArtists:function(t,e){t.topArtistsShort=e.topArtistsShort,t.topArtistsMedium=e.topArtistsMedium,t.topArtistsLong=e.topArtistsLong,t.timePeriod=0,t.loggedIn=!0},setTopTracks:function(t,e){t.topTracksShort=e.topTracksShort,t.topTracksMedium=e.topTracksMedium,t.topTracksLong=e.topTracksLong,t.timePeriod=0,t.loggedIn=!0},setTimePeriod:function(t,e){t.timePeriod=e},clearAll:function(t){t.loggedIn=!1,t.user=null,t.timePeriod=null,t.topArtistsShort=null,t.topArtistsMedium=null,t.topArtistsLong=null,t.topTracksShort=null,t.topTracksMedium=null,t.topTracksLong=null}},getters:{isLoggedIn:function(t){return t.loggedIn},getUser:function(t){return t.user},getTopArtistsShort:function(t){return t.topArtistsShort},getTopArtistsMedium:function(t){return t.topArtistsMedium},getTopArtistsLong:function(t){return t.topArtistsLong},getTopTracksShort:function(t){return t.topTracksShort},getTopTracksMedium:function(t){return t.topTracksMedium},getTopTracksLong:function(t){return t.topTracksLong},getTopArtists:function(t){switch(t.timePeriod){case 0:return t.topArtistsShort;case 1:return t.topArtistsMedium;case 2:return t.topArtistsLong;default:return t.topArtistsShort}},getTopTracks:function(t){switch(t.timePeriod){case 0:return t.topTracksShort;case 1:return t.topTracksMedium;case 2:return t.topTracksLong;default:return t.topTracksShort}}}});i.a.config.productionTip=!1,new i.a({el:"#app",router:N,store:U,components:{App:b},template:"<App/>"})},gTCx:function(t,e){},"hcO/":function(t,e){},lA4R:function(t,e){},"xaY/":function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.1f694d4c40b18462d924.js.map