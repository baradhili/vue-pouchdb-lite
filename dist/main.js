(()=>{"use strict";var e={n:t=>{var s=t&&t.__esModule?()=>t.default:()=>t;return e.d(s,{a:s}),s},d:(t,s)=>{for(var a in s)e.o(s,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:s[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};const t=Pouchdb;var s=e.n(t);new Proxy({version:"__VERSION__",databases:{},Constructor:s(),defaultDB:"",get(e=this.defaultDB,t={}){return this.databases[e]||(this.databases[e]=new this.Constructor(e,t)),this.databases[e]},sync(e,t={}){return s().sync(this.get(e),this.get(),{live:!0,retry:!0,back_off_function:this._backOff,...t})},push(e,t={}){return this.get(e).replicate.to(this.get(),{live:!0,retry:!0,back_off_function:this._backOff,...t})},pull(e,t={}){return this.get(e).replicate.from(this.get(),{live:!0,retry:!0,back_off_function:this._backOff,...t})},changes(e={}){return this.get().changes({live:!0,retry:!0,back_off_function:this._backOff,...e})},fetchSession(e=this.$pouch.databases[this.$pouch.defaultDB]){return new Promise((t=>{e.getSession().then((s=>{e.getUser(s.userCtx.name).then((e=>{t({user:{...s.userCtx,...e},hasAccess:!0})}))}))}))},login(e=this.$pouch.databases[this.$pouch.defaultDB]){return new Promise((t=>{e.logIn(this.$pouch.defaultUsername,this.$pouch.defaultPassword).then((s=>{e.getUser(s.name).then((e=>{t({user:{...s,...e},hasAccess:!0})}))}))}))},connect(e,t){return new Promise((s=>{this.defaultUsername=e,this.defaultPassword=t,this.get().db._remote?this.login(this.get()):s({message:"database is not remote",error:"bad request",status:400})}))},createUser(e,t){return this.get().signUp(e,t).then((()=>this.connect(e,t)))},disconnect(){return new Promise((e=>{this.defaultUsername=null,this.defaultPassword=null,this.get().db._remote?this.get().logOut().then((t=>{e({ok:t.ok,user:null,hasAccess:!1})})).catch((t=>{e(t)})):e({message:"database is not remote",error:"bad request",status:400})}))},destroy(e=this.defaultDB){return this.get().destroy().then((()=>{e!==this.defaultDB&&delete this.databases[e]}))},close(e=this.defaultDB){return this.get().close().then((()=>{e!==this.defaultDB&&delete this.databases[e]}))},getSession(){return this.get().db._remote?this.fetchSession(this.get()):new Promise((e=>{e({message:"database is not remote",error:"bad request",status:400})}))},allDocs(e={}){return this.get().allDocs({include_docs:!0,...e})},putAttachment(e,t,s){return this.get().putAttachment(e,s.id,t||null,s.data,s.type)},_backOff:e=>0===e?1e3:3*e},{get:function(e,t,a){return t in e?Reflect.get(...arguments):t in e.databases?Reflect.get(e.databases,t,a):t in e.get()?Reflect.get(e.get(),t,a):Reflect.get(s(),t,a)}});const a=PouchLiveFind;var r=e.n(a);const n=PouchFind;var i=e.n(n);s().plugin(r()),s().plugin(i())})();