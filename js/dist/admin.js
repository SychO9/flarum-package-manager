(()=>{var a={996:function(a){a.exports=function(){"use strict";var a,e,t=1e3,n=6e4,s=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,i=31536e6,l=2592e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,m={years:i,months:l,days:r,hours:s,minutes:n,seconds:t,milliseconds:1,weeks:6048e5},u=function(a){return a instanceof b},d=function(a,e,t){return new b(a,t,e.$l)},g=function(a){return e.p(a)+"s"},p=function(a){return a<0},h=function(a){return p(a)?Math.ceil(a):Math.floor(a)},f=function(a){return Math.abs(a)},k=function(a,e){return a?p(a)?{negative:!0,format:""+f(a)+e}:{negative:!1,format:""+a+e}:{negative:!1,format:""}},b=function(){function p(a,e,t){var n=this;if(this.$d={},this.$l=t,void 0===a&&(this.$ms=0,this.parseFromMilliseconds()),e)return d(a*m[g(e)],this);if("number"==typeof a)return this.$ms=a,this.parseFromMilliseconds(),this;if("object"==typeof a)return Object.keys(a).forEach((function(e){n.$d[g(e)]=a[e]})),this.calMilliseconds(),this;if("string"==typeof a){var s=a.match(c);if(s){var r=s.slice(2).map((function(a){return null!=a?Number(a):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var f=p.prototype;return f.calMilliseconds=function(){var a=this;this.$ms=Object.keys(this.$d).reduce((function(e,t){return e+(a.$d[t]||0)*m[t]}),0)},f.parseFromMilliseconds=function(){var a=this.$ms;this.$d.years=h(a/i),a%=i,this.$d.months=h(a/l),a%=l,this.$d.days=h(a/r),a%=r,this.$d.hours=h(a/s),a%=s,this.$d.minutes=h(a/n),a%=n,this.$d.seconds=h(a/t),a%=t,this.$d.milliseconds=a},f.toISOString=function(){var a=k(this.$d.years,"Y"),e=k(this.$d.months,"M"),t=+this.$d.days||0;this.$d.weeks&&(t+=7*this.$d.weeks);var n=k(t,"D"),s=k(this.$d.hours,"H"),r=k(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var i=k(o,"S"),l=a.negative||e.negative||n.negative||s.negative||r.negative||i.negative,c=s.format||r.format||i.format?"T":"",m=(l?"-":"")+"P"+a.format+e.format+n.format+c+s.format+r.format+i.format;return"P"===m||"-P"===m?"P0D":m},f.toJSON=function(){return this.toISOString()},f.format=function(a){var t=a||"YYYY-MM-DDTHH:mm:ss",n={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return t.replace(o,(function(a,e){return e||String(n[a])}))},f.as=function(a){return this.$ms/m[g(a)]},f.get=function(a){var e=this.$ms,t=g(a);return"milliseconds"===t?e%=1e3:e="weeks"===t?h(e/m[t]):this.$d[t],0===e?0:e},f.add=function(a,e,t){var n;return n=e?a*m[g(e)]:u(a)?a.$ms:d(a,this).$ms,d(this.$ms+n*(t?-1:1),this)},f.subtract=function(a,e){return this.add(a,e,!0)},f.locale=function(a){var e=this.clone();return e.$l=a,e},f.clone=function(){return d(this.$ms,this)},f.humanize=function(e){return a().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},f.milliseconds=function(){return this.get("milliseconds")},f.asMilliseconds=function(){return this.as("milliseconds")},f.seconds=function(){return this.get("seconds")},f.asSeconds=function(){return this.as("seconds")},f.minutes=function(){return this.get("minutes")},f.asMinutes=function(){return this.as("minutes")},f.hours=function(){return this.get("hours")},f.asHours=function(){return this.as("hours")},f.days=function(){return this.get("days")},f.asDays=function(){return this.as("days")},f.weeks=function(){return this.get("weeks")},f.asWeeks=function(){return this.as("weeks")},f.months=function(){return this.get("months")},f.asMonths=function(){return this.as("months")},f.years=function(){return this.get("years")},f.asYears=function(){return this.as("years")},p}();return function(t,n,s){a=s,e=s().$utils(),s.duration=function(a,e){var t=s.locale();return d(a,{$l:t},e)},s.isDuration=u;var r=n.prototype.add,o=n.prototype.subtract;n.prototype.add=function(a,e){return u(a)&&(a=a.asMilliseconds()),r.bind(this)(a,e)},n.prototype.subtract=function(a,e){return u(a)&&(a=a.asMilliseconds()),o.bind(this)(a,e)}}}()}},e={};function t(n){var s=e[n];if(void 0!==s)return s.exports;var r=e[n]={exports:{}};return a[n].call(r.exports,r,r.exports,t),r.exports}t.n=a=>{var e=a&&a.__esModule?()=>a.default:()=>a;return t.d(e,{a:e}),e},t.d=(a,e)=>{for(var n in e)t.o(e,n)&&!t.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:e[n]})},t.o=(a,e)=>Object.prototype.hasOwnProperty.call(a,e),t.r=a=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})};var n={};(()=>{"use strict";t.r(n);const a=flarum.reg.get("core","common/extend"),e=flarum.reg.get("core","admin/app");var s=t.n(e);const r=flarum.reg.get("core","admin/components/ExtensionPage");var o=t.n(r);const i=flarum.reg.get("core","common/components/Button");var l=t.n(i);const c=flarum.reg.get("core","admin/components/LoadingModal");var u=t.n(c);const d=flarum.reg.get("core","admin/utils/isExtensionEnabled");var g=t.n(d);const p=flarum.reg.get("core","common/components/Alert");var h=t.n(p);const f=flarum.reg.get("core","common/Component");var k=t.n(f);const b=flarum.reg.get("core","common/components/LoadingIndicator");var v=t.n(b);const y=flarum.reg.get("core","common/components/Tooltip");var x=t.n(y);const M=flarum.reg.get("core","common/helpers/icon");var N=t.n(M);const _=flarum.reg.get("core","common/utils/ItemList");var w=t.n(_);const P=flarum.reg.get("core","common/utils/extractText");var U=t.n(P);const S=flarum.reg.get("core","common/utils/classList");var $=t.n(S);class T extends(k()){view(a){const{className:e,type:t,...n}=this.attrs;return m("span",Object.assign({className:$()(["Label","Label--".concat(this.attrs.type),e])},n),a.children)}}flarum.reg.add("flarum-package-manager","admin/components/Label",T);const q=flarum.reg.get("core","common/components/Modal");var j=t.n(q);class B extends(j()){className(){return"Modal--large QuickModal"}title(){return s().translator.trans("flarum-package-manager.admin.sections.queue.operations.".concat(this.attrs.task.operation()))}content(){return m("div",{className:"Modal-body"},m("div",{className:"TaskOutputModal-data"},m("div",{className:"Form-group"},m("label",null,s().translator.trans("flarum-package-manager.admin.sections.queue.output_modal.command")),m("div",{className:"FormControl TaskOutputModal-data-command"},m("code",null,"$ composer ",this.attrs.task.command()))),m("div",{className:"Form-group"},m("label",null,s().translator.trans("flarum-package-manager.admin.sections.queue.output_modal.output")),m("div",{className:"FormControl TaskOutputModal-data-output"},m("code",null,m("pre",null,this.attrs.task.output()))))))}}flarum.reg.add("flarum-package-manager","admin/components/TaskOutputModal",B);var L=t(996),E=t.n(L);function O(a,e){dayjs.extend(E());const t=dayjs(e).diff(a);return dayjs.duration(t).humanize()}flarum.reg.add("flarum-package-manager","admin/utils/humanDuration",O);class C extends(k()){view(){return m("nav",{className:"Pagination UserListPage-gridPagination"},m(l(),{disabled:!this.attrs.list.hasPrev(),title:s().translator.trans("core.admin.users.pagination.back_button"),onclick:()=>this.attrs.list.prev(),icon:"fas fa-chevron-left",className:"Button Button--icon UserListPage-backBtn"}),m("span",{className:"UserListPage-pageNumber"},s().translator.trans("core.admin.users.pagination.page_counter",{current:this.attrs.list.pageNumber()+1,total:this.attrs.list.getTotalPages()})),m(l(),{disabled:!this.attrs.list.hasNext(),title:s().translator.trans("core.admin.users.pagination.next_button"),onclick:()=>this.attrs.list.next(),icon:"fas fa-chevron-right",className:"Button Button--icon UserListPage-nextBtn"}))}}flarum.reg.add("flarum-package-manager","admin/components/Pagination",C);class D extends(k()){oninit(a){super.oninit(a),s().packageManager.queue.load()}view(){return m("section",{id:"PackageManager-queueSection",className:"ExtensionPage-permissions PackageManager-queueSection"},m("div",{className:"ExtensionPage-permissions-header PackageManager-queueSection-header"},m("div",{className:"container"},m("h2",{className:"ExtensionTitle"},s().translator.trans("flarum-package-manager.admin.sections.queue.title")),m(l(),{className:"Button Button--icon",icon:"fas fa-sync-alt",onclick:()=>s().packageManager.queue.load(),"aria-label":s().translator.trans("flarum-package-manager.admin.sections.queue.refresh")}))),m("div",{className:"container"},this.queueTable()))}columns(){const a=new(w());return a.add("operation",{label:U()(s().translator.trans("flarum-package-manager.admin.sections.queue.columns.operation")),content:a=>m("div",{className:"PackageManager-queueTable-operation"},m("span",{className:"PackageManager-queueTable-operation-icon"},this.operationIcon(a.operation())),m("span",{className:"PackageManager-queueTable-operation-name"},s().translator.trans("flarum-package-manager.admin.sections.queue.operations.".concat(a.operation()))))},80),a.add("package",{label:U()(s().translator.trans("flarum-package-manager.admin.sections.queue.columns.package")),content:a=>{var e;const t=s().data.extensions[null==(e=a.package())?void 0:e.replace(/(\/flarum-|\/flarum-ext-|\/)/g,"-")];return t?m("div",{className:"PackageManager-queueTable-package"},m("div",{className:"PackageManager-queueTable-package-icon ExtensionIcon",style:t.icon},!!t.icon&&N()(t.icon.name)),m("div",{className:"PackageManager-queueTable-package-details"},m("span",{className:"PackageManager-queueTable-package-title"},t.extra["flarum-extension"].title),m("span",{className:"PackageManager-queueTable-package-name"},a.package()))):a.package()}},75),a.add("status",{label:U()(s().translator.trans("flarum-package-manager.admin.sections.queue.columns.status")),content:a=>m(T,{className:"PackageManager-queueTable-status",type:{running:"neutral",failure:"error",pending:"warning",success:"success"}[a.status()]},s().translator.trans("flarum-package-manager.admin.sections.queue.statuses.".concat(a.status())))},70),a.add("elapsedTime",{label:U()(s().translator.trans("flarum-package-manager.admin.sections.queue.columns.elapsed_time")),content:a=>a.startedAt()?m(x(),{text:"".concat(dayjs(a.startedAt()).format("LL LTS"),"  ").concat(dayjs(a.finishedAt()).format("LL LTS"))},m("span",null,O(a.startedAt(),a.finishedAt()))):s().translator.trans("flarum-package-manager.admin.sections.queue.task_just_started")},65),a.add("memoryUsed",{label:U()(s().translator.trans("flarum-package-manager.admin.sections.queue.columns.peak_memory_used")),content:a=>m("span",null,a.peakMemoryUsed())},60),a.add("details",{label:U()(s().translator.trans("flarum-package-manager.admin.sections.queue.columns.details")),content:a=>m(l(),{className:"Button Button--icon Table-controls-item",icon:"fas fa-file-alt","aria-label":s().translator.trans("flarum-package-manager.admin.sections.queue.columns.details"),onclick:()=>s().modal.show(B,{task:a})}),className:"Table-controls"},55),a}queueTable(){const a=s().packageManager.queue.getItems();if(!a)return m(v(),null);if(a&&!a.length)return m("h3",{className:"ExtensionPage-subHeader"},s().translator.trans("flarum-package-manager.admin.sections.queue.none"));const e=this.columns();return m("[",null,m("table",{className:"Table PackageManager-queueTable"},m("thead",null,m("tr",null,e.toArray().map(((a,e)=>m("th",{key:e},a.label))))),m("tbody",null,a.map(((a,t)=>m("tr",{key:t},e.toArray().map(((e,t)=>{const{label:n,content:s,...r}=e;return m("td",Object.assign({key:t},r),s(a))}))))))),m(C,{list:s().packageManager.queue}))}operationIcon(a){return N()({update_check:"fas fa-sync-alt",update_major:"fas fa-play",update_minor:"fas fa-play",update_global:"fas fa-play",extension_install:"fas fa-download",extension_remove:"fas fa-times",extension_update:"fas fa-arrow-alt-circle-up",why_not:"fas fa-exclamation-circle"}[a])}}function F(a){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},F(a)}function A(a,e,t){return(e=function(a){var e=function(a,e){if("object"!==F(a)||null===a)return a;var t=a[Symbol.toPrimitive];if(void 0!==t){var n=t.call(a,e);if("object"!==F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(a)}(a,"string");return"symbol"===F(e)?e:String(e)}(e))in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}flarum.reg.add("flarum-package-manager","admin/components/QueueSection",D);const I=flarum.reg.get("core","common/utils/Stream");var Y=t.n(I);function H(a){const e=a.response.errors[0];if(!["composer_command_failure","extension_already_installed","extension_not_installed"].includes(e.code))throw a;switch(e.code){case"composer_command_failure":e.guessed_cause?(s().alerts.show({type:"error"},s().translator.trans("flarum-package-manager.admin.exceptions.guessed_cause.".concat(e.guessed_cause))),s().modal.close()):s().alerts.show({type:"error"},s().translator.trans("flarum-package-manager.admin.exceptions.composer_command_failure"));break;case"extension_already_installed":s().alerts.show({type:"error"},s().translator.trans("flarum-package-manager.admin.exceptions.extension_already_installed")),s().modal.close();break;case"extension_not_installed":s().alerts.show({type:"error"},s().translator.trans("flarum-package-manager.admin.exceptions.extension_not_installed")),s().modal.close()}}function W(){s().modal.close(),m.route.set(s().route("extension",{id:"flarum-package-manager"})),s().packageManager.queue.load(),setTimeout((()=>{var a;null==(a=document.getElementById("PackageManager-queueSection"))||a.scrollIntoView({block:"nearest"})}),200)}window.jumpToQueue=W,flarum.reg.add("flarum-package-manager","admin/utils/jumpToQueue",W);class G extends(k()){constructor(){super(...arguments),A(this,"packageName",void 0)}oninit(a){super.oninit(a),this.packageName=Y()("")}view(){return m("div",{className:"Form-group PackageManager-installer"},m("label",{htmlFor:"install-extension"},s().translator.trans("flarum-package-manager.admin.extensions.install")),m("p",{className:"helpText"},s().translator.trans("flarum-package-manager.admin.extensions.install_help",{extiverse:m("a",{href:"https://extiverse.com"},"extiverse.com")})),m("div",{className:"FormControl-container"},m("input",{className:"FormControl",id:"install-extension",placeholder:"vendor/package-name",bidi:this.packageName}),m(l(),{className:"Button",icon:"fas fa-download",onclick:this.onsubmit.bind(this),loading:s().packageManager.control.isLoading("extension-install"),disabled:s().packageManager.control.isLoadingOtherThan("extension-install")},s().translator.trans("flarum-package-manager.admin.extensions.proceed"))))}data(){return{package:this.packageName()}}onsubmit(){s().packageManager.control.setLoading("extension-install"),s().modal.show(u()),s().request({method:"POST",url:"".concat(s().forum.attribute("apiUrl"),"/package-manager/extensions"),body:{data:this.data()}}).then((a=>{if(a.processing)W();else{const e=a.id;s().alerts.show({type:"success"},s().translator.trans("flarum-package-manager.admin.extensions.successful_install",{extension:e})),window.location.href="".concat(s().forum.attribute("adminUrl"),"#/extension/").concat(e),window.location.reload()}})).catch(H).finally((()=>{s().packageManager.control.setLoading(null),s().modal.close(),m.redraw()}))}}flarum.reg.add("flarum-package-manager","admin/components/Installer",G);const R=flarum.reg.get("core","common/helpers/humanTime");var V=t.n(R);class Q extends(j()){constructor(){super(...arguments),A(this,"loading",!0),A(this,"whyNot",null)}className(){return"Modal--large WhyNotModal"}title(){return s().translator.trans("flarum-package-manager.admin.why_not_modal.title")}oncreate(a){super.oncreate(a),this.requestWhyNot()}content(){return m("div",{className:"Modal-body"},this.loading?m(v(),null):m("pre",{className:"WhyNotModal-contents"},this.whyNot))}requestWhyNot(){s().request({method:"POST",url:"".concat(s().forum.attribute("apiUrl"),"/package-manager/why-not"),body:{data:{package:this.attrs.package}}}).then((a=>{this.loading=!1,this.whyNot=a.data.reason,m.redraw()})).catch(H)}}flarum.reg.add("flarum-package-manager","admin/components/WhyNotModal",Q);class Z extends(k()){view(a){var e;const{extension:t,updates:n,onClickUpdate:r,whyNotWarning:o,isCore:i,isDanger:c}=this.attrs,u=null!=(e=n["latest-minor"])?e:n["latest-major"]&&!i?n["latest-major"]:null;return m("div",{className:$()({"PackageManager-extension":!0,"PackageManager-extension--core":i,"PackageManager-extension--danger":c})},m("div",{className:"PackageManager-extension-icon ExtensionIcon",style:t.icon},t.icon?N()(t.icon.name):""),m("div",{className:"PackageManager-extension-info"},m("div",{className:"PackageManager-extension-name"},t.extra["flarum-extension"].title),m("div",{className:"PackageManager-extension-version"},m("span",{className:"PackageManager-extension-version-current"},this.version(n.version)),u?m(T,{className:"PackageManager-extension-version-latest",type:n["latest-minor"]?"success":"warning"},this.version(u)):null)),m("div",{className:"PackageManager-extension-controls"},r?m(x(),{text:s().translator.trans("flarum-package-manager.admin.extensions.update")},m(l(),{icon:"fas fa-arrow-alt-circle-up",className:"Button Button--icon Button--flat",onclick:r,"aria-label":s().translator.trans("flarum-package-manager.admin.extensions.update")})):null,o?m(x(),{text:s().translator.trans("flarum-package-manager.admin.extensions.check_why_it_failed_updating")},m(l(),{icon:"fas fa-exclamation-circle",className:"Button Button--icon Button--flat Button--danger",onclick:()=>s().modal.show(Q,{package:t.name}),"aria-label":s().translator.trans("flarum-package-manager.admin.extensions.check_why_it_failed_updating")})):null))}version(a){return"v"+a.replace("v","")}}flarum.reg.add("flarum-package-manager","admin/components/ExtensionItem",Z);class z extends(k()){constructor(){super(...arguments),A(this,"updateState",void 0)}oninit(a){super.oninit(a),this.updateState=this.attrs.updateState}view(){return m("div",{className:"Form-group Form-group--danger PackageManager-majorUpdate"},m("img",{alt:"flarum logo",src:s().forum.attribute("baseUrl")+"/assets/extensions/flarum-package-manager/flarum.svg"}),m("label",null,s().translator.trans("flarum-package-manager.admin.major_updater.title",{version:this.attrs.coreUpdate["latest-major"]})),m("p",{className:"helpText"},s().translator.trans("flarum-package-manager.admin.major_updater.description")),m("div",{className:"PackageManager-updaterControls"},m(x(),{text:s().translator.trans("flarum-package-manager.admin.major_updater.dry_run_help")},m(l(),{className:"Button",icon:"fas fa-vial",onclick:this.update.bind(this,!0),disabled:s().packageManager.control.isLoadingOtherThan("major-update-dry-run")},s().translator.trans("flarum-package-manager.admin.major_updater.dry_run"))),m(l(),{className:"Button Button--danger",icon:"fas fa-play",onclick:this.update.bind(this,!1),disabled:s().packageManager.control.isLoadingOtherThan("major-update")},s().translator.trans("flarum-package-manager.admin.major_updater.update"))),this.updateState.incompatibleExtensions.length?m("div",{className:"PackageManager-majorUpdate-incompatibleExtensions PackageManager-extensions-grid"},this.updateState.incompatibleExtensions.map((a=>m(Z,{extension:s().data.extensions[a.replace("flarum-","").replace("flarum-ext-","").replace("/","-")],updates:{},onClickUpdate:null,isDanger:!0})))):null,"failure"===this.updateState.status?m(h(),{type:"error",className:"PackageManager-majorUpdate-failure",dismissible:!1,controls:[m(l(),{className:"Button Button--text PackageManager-majorUpdate-failure-details",icon:"fas fa-question-circle",onclick:()=>s().modal.show(Q,{package:"flarum/core"})},s().translator.trans("flarum-package-manager.admin.major_updater.failure.why"))]},m("p",{className:"PackageManager-majorUpdate-failure-desc"},s().translator.trans("flarum-package-manager.admin.major_updater.failure.desc"))):null)}update(a){s().packageManager.control.setLoading(a?"major-update-dry-run":"major-update"),s().modal.show(u()),s().request({method:"POST",url:"".concat(s().forum.attribute("apiUrl"),"/package-manager/major-update"),body:{data:{dryRun:a}}}).then((a=>{null!=a&&a.processing?W():(s().alerts.show({type:"success"},s().translator.trans("flarum-package-manager.admin.update_successful")),window.location.reload())})).catch(H).catch((a=>{var e,t,n;s().modal.close(),this.updateState.status="failure",this.updateState.incompatibleExtensions=null==(e=a.response)||null==(t=e.errors)||null==(n=t.pop())?void 0:n.incompatible_extensions})).finally((()=>{s().packageManager.control.setLoading(null),m.redraw()}))}}flarum.reg.add("flarum-package-manager","admin/components/MajorUpdater",z);class J extends(k()){view(){const a=s().packageManager.control.coreUpdate;return[m("div",{className:"Form-group"},m("label",null,s().translator.trans("flarum-package-manager.admin.updater.updater_title")),m("p",{className:"helpText"},s().translator.trans("flarum-package-manager.admin.updater.updater_help")),this.lastUpdateCheckView(),m("div",{className:"PackageManager-updaterControls"},this.controlItems().toArray()),this.availableUpdatesView()),a&&a.package["latest-major"]?m(z,{coreUpdate:a.package,updateState:s().packageManager.control.lastUpdateRun.major}):null]}lastUpdateCheckView(){var a;return(null==(a=s().packageManager.control.lastUpdateCheck)?void 0:a.checkedAt)&&m("p",{className:"PackageManager-lastUpdatedAt"},m("span",{className:"PackageManager-lastUpdatedAt-label"},s().translator.trans("flarum-package-manager.admin.updater.last_update_checked_at")),m("span",{className:"PackageManager-lastUpdatedAt-value"},V()(s().packageManager.control.lastUpdateCheck.checkedAt)))||null}availableUpdatesView(){const a=s().packageManager.control;return s().packageManager.control.isLoading()?m("div",{className:"PackageManager-extensions"},m(v(),null)):a.extensionUpdates.length||a.coreUpdate?m("div",{className:"PackageManager-extensions"},m("div",{className:"PackageManager-extensions-grid"},a.coreUpdate?m(Z,{extension:a.coreUpdate.extension,updates:a.coreUpdate.package,isCore:!0,onClickUpdate:()=>a.updateCoreMinor(),whyNotWarning:a.lastUpdateRun.limitedPackages().includes("flarum/core")}):null,a.extensionUpdates.map((e=>m(Z,{extension:e,updates:a.packageUpdates[e.id],onClickUpdate:()=>a.updateExtension(e),whyNotWarning:a.lastUpdateRun.limitedPackages().includes(e.name)}))))):m("div",{className:"PackageManager-extensions"},m(h(),{type:"success",dismissible:!1},s().translator.trans("flarum-package-manager.admin.updater.up_to_date")))}controlItems(){const a=new(w());return a.add("updateCheck",m(l(),{className:"Button",icon:"fas fa-sync-alt",onclick:()=>s().packageManager.control.checkForUpdates(),loading:s().packageManager.control.isLoading("check"),disabled:s().packageManager.control.isLoadingOtherThan("check")},s().translator.trans("flarum-package-manager.admin.updater.check_for_updates")),100),a.add("globalUpdate",m(l(),{className:"Button",icon:"fas fa-play",onclick:()=>s().packageManager.control.updateGlobally(),loading:s().packageManager.control.isLoading("global-update"),disabled:s().packageManager.control.isLoadingOtherThan("global-update")},s().translator.trans("flarum-package-manager.admin.updater.run_global_update"))),a}}flarum.reg.add("flarum-package-manager","admin/components/Updater",J);class K extends(k()){oninit(a){super.oninit(a)}view(){return m("div",{className:"ExtensionPage-permissions PackageManager-controlSection"},m("div",{className:"ExtensionPage-permissions-header"},m("div",{className:"container"},m("h2",{className:"ExtensionTitle"},s().translator.trans("flarum-package-manager.admin.sections.control.title")))),m("div",{className:"container"},s().data["flarum-package-manager.writable_dirs"]?m("[",null,m(G,null),m(J,null)):m("div",{className:"Form-group"},m(h(),{type:"warning",dismissible:!1},s().translator.trans("flarum-package-manager.admin.file_permissions")))))}}flarum.reg.add("flarum-package-manager","admin/components/ControlSection",K);class X extends(o()){sections(a){const e=super.sections(a);return e.setPriority("content",10),e.add("control",m(K,null),8),parseInt(s().data.settings["flarum-package-manager.queue_jobs"])&&e.add("queue",m(D,null),5),e.setPriority("permissions",0),e}}flarum.reg.add("flarum-package-manager","admin/components/SettingsPage",X);const aa=flarum.reg.get("core","common/Model");var ea=t.n(aa);const ta=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],na=["B","kiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],sa=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],ra=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],oa=(a,e,t)=>{let n=a;return"string"==typeof e||Array.isArray(e)?n=a.toLocaleString(e,t):!0!==e&&void 0===t||(n=a.toLocaleString(void 0,t)),n};class ia extends(ea()){status(){return ea().attribute("status").call(this)}operation(){return ea().attribute("operation").call(this)}command(){return ea().attribute("command").call(this)}package(){return ea().attribute("package").call(this)}output(){return ea().attribute("output").call(this)}createdAt(){return ea().attribute("createdAt",ea().transformDate).call(this)}startedAt(){return ea().attribute("startedAt",ea().transformDate).call(this)}finishedAt(){return ea().attribute("finishedAt",ea().transformDate).call(this)}peakMemoryUsed(){return function(a,e){if(!Number.isFinite(a))throw new TypeError("Expected a finite number, got ".concat(typeof a,": ").concat(a));const t=(e={bits:!1,binary:!1,...e}).bits?e.binary?ra:sa:e.binary?na:ta;if(e.signed&&0===a)return" 0 ".concat(t[0]);const n=a<0,s=n?"-":e.signed?"+":"";let r;if(n&&(a=-a),void 0!==e.minimumFractionDigits&&(r={minimumFractionDigits:e.minimumFractionDigits}),void 0!==e.maximumFractionDigits&&(r={maximumFractionDigits:e.maximumFractionDigits,...r}),a<1)return s+oa(a,e.locale,r)+" "+t[0];const o=Math.min(Math.floor(e.binary?Math.log(a)/Math.log(1024):Math.log10(a)/3),t.length-1);return a/=(e.binary?1024:1e3)**o,r||(a=a.toPrecision(3)),s+oa(Number(a),e.locale,r)+" "+t[o]}(1024*ea().attribute("peakMemoryUsed").call(this))}}flarum.reg.add("flarum-package-manager","admin/models/Task",ia);class la{constructor(){A(this,"tasks",null),A(this,"limit",20),A(this,"offset",0),A(this,"total",0)}load(a){var e;return this.tasks=null,a={page:{limit:this.limit,offset:this.offset,...null==(e=a)?void 0:e.page},...a},s().store.find("package-manager-tasks",a||{}).then((a=>{var e;return this.tasks=a,this.total=null==(e=a.payload.meta)?void 0:e.total,m.redraw(),a}))}getItems(){return this.tasks}getTotalPages(){return Math.ceil(this.total/this.limit)}pageNumber(){return Math.ceil(this.offset/this.limit)}hasPrev(){return 0!==this.pageNumber()}hasNext(){return this.offset+this.limit<this.total}prev(){this.hasPrev()&&(this.offset-=this.limit,this.load())}next(){this.hasNext()&&(this.offset+=this.limit,this.load())}}flarum.reg.add("flarum-package-manager","admin/states/QueueState",la);class ca{get lastUpdateRun(){const a=JSON.parse(s().data.settings["flarum-package-manager.last_update_run"]);return a.limitedPackages=()=>[...a.major.limitedPackages,...a.minor.limitedPackages,...a.global.limitedPackages],a}constructor(){A(this,"loading",null),A(this,"packageUpdates",{}),A(this,"lastUpdateCheck",void 0),A(this,"extensionUpdates",void 0),A(this,"coreUpdate",null),this.lastUpdateCheck=JSON.parse(s().data.settings["flarum-package-manager.last_update_check"]),this.extensionUpdates=this.formatExtensionUpdates(this.lastUpdateCheck),this.coreUpdate=this.formatCoreUpdate(this.lastUpdateCheck)}isLoading(a){return void 0===a&&(a=null),a&&this.loading===a||!a&&null!==this.loading}isLoadingOtherThan(a){return null!==this.loading&&this.loading!==a}setLoading(a){this.loading=a}checkForUpdates(){this.setLoading("check"),s().request({method:"POST",url:"".concat(s().forum.attribute("apiUrl"),"/package-manager/check-for-updates")}).then((a=>{a.processing?W():(this.lastUpdateCheck=a,this.extensionUpdates=this.formatExtensionUpdates(a),this.coreUpdate=this.formatCoreUpdate(a),m.redraw())})).catch(H).finally((()=>{this.setLoading(null),m.redraw()}))}updateCoreMinor(){confirm(U()(s().translator.trans("flarum-package-manager.admin.minor_update_confirmation.content")))&&(s().modal.show(u()),this.setLoading("minor-update"),s().request({method:"POST",url:"".concat(s().forum.attribute("apiUrl"),"/package-manager/minor-update")}).then((a=>{null!=a&&a.processing?W():(s().alerts.show({type:"success"},s().translator.trans("flarum-package-manager.admin.update_successful")),window.location.reload())})).catch(H).finally((()=>{this.setLoading(null),s().modal.close(),m.redraw()})))}updateExtension(a){s().modal.show(u()),this.setLoading("extension-update"),s().request({method:"PATCH",url:"".concat(s().forum.attribute("apiUrl"),"/package-manager/extensions/").concat(a.id)}).then((e=>{null!=e&&e.processing?W():(s().alerts.show({type:"success"},s().translator.trans("flarum-package-manager.admin.extensions.successful_update",{extension:a.extra["flarum-extension"].title})),window.location.reload())})).catch(H).finally((()=>{this.setLoading(null),s().modal.close(),m.redraw()}))}updateGlobally(){s().modal.show(u()),this.setLoading("global-update"),s().request({method:"POST",url:"".concat(s().forum.attribute("apiUrl"),"/package-manager/global-update")}).then((a=>{null!=a&&a.processing?W():(s().alerts.show({type:"success"},s().translator.trans("flarum-package-manager.admin.updater.global_update_successful")),window.location.reload())})).catch(H).finally((()=>{this.setLoading(null),s().modal.close(),m.redraw()}))}formatExtensionUpdates(a){var e,t;return this.packageUpdates={},null==a||null==(e=a.updates)||null==(t=e.installed)||t.filter((a=>{const e=a.name.replace("/","-").replace(/(flarum-ext-)|(flarum-)/,""),t=s().data.extensions[e],n=["semver-safe-update","update-possible"].includes(a["latest-status"]);return t&&n&&(this.packageUpdates[t.id]=a),t&&n})),Object.values(s().data.extensions).filter((a=>this.packageUpdates[a.id]))}formatCoreUpdate(a){var e,t;const n=null==a||null==(e=a.updates)||null==(t=e.installed)?void 0:t.filter((a=>"flarum/core"===a.name)).pop();return n?{package:n,extension:{id:"flarum-core",name:"flarum/core",version:s().data.settings.version,icon:{backgroundImage:"url(".concat(s().data.resources[0].attributes.baseUrl,"/assets/extensions/flarum-package-manager/flarum.svg")},extra:{"flarum-extension":{title:U()(s().translator.trans("flarum-package-manager.admin.updater.flarum"))}}}}:null}}flarum.reg.add("flarum-package-manager","admin/states/ControlSectionState",ca);class ma{constructor(){A(this,"queue",new la),A(this,"control",new ca)}}flarum.reg.add("flarum-package-manager","admin/states/PackageManagerState",ma),s().initializers.add("flarum-package-manager",(e=>{e.store.models["package-manager-tasks"]=ia,e.packageManager=new ma,e.extensionData.for("flarum-package-manager").registerSetting((()=>m("div",{className:"Form-group"},m(h(),{type:"warning",dismissible:!1},e.translator.trans("flarum-package-manager.admin.settings.access_warning"))))).registerSetting({setting:"flarum-package-manager.queue_jobs",label:e.translator.trans("flarum-package-manager.admin.settings.queue_jobs"),help:m.trust(U()(e.translator.trans("flarum-package-manager.admin.settings.queue_jobs_help",{basic_impl_link:"https://discuss.flarum.org/d/28151-database-queue-the-simplest-queue-even-for-shared-hosting",adv_impl_link:"https://discuss.flarum.org/d/21873-redis-sessions-cache-queues",php_version:"<strong>".concat(e.data.phpVersion,"</strong>"),folder_perms_link:"https://docs.flarum.org/install#folder-ownership"}))),default:!1,type:"boolean",disabled:e.data["flarum-package-manager.using_sync_queue"]}).registerPage(X),(0,a.extend)(o().prototype,"topItems",(function(a){"flarum-package-manager"===this.extension.id||g()(this.extension.id)||a.add("remove",m(l(),{className:"Button Button--danger",icon:"fas fa-times",onclick:()=>{e.modal.show(u()),e.request({url:"".concat(e.forum.attribute("apiUrl"),"/package-manager/extensions/").concat(this.extension.id),method:"DELETE"}).then((a=>{null!=a&&a.processing?W():(e.alerts.show({type:"success"},e.translator.trans("flarum-package-manager.admin.extensions.successful_remove")),window.location=e.forum.attribute("adminUrl"))})).finally((()=>{e.modal.close()}))}},"Remove"))}))}))})(),module.exports=n})();
//# sourceMappingURL=admin.js.map