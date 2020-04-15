(window.webpackJsonp=window.webpackJsonp||[]).push([[3,20],{190:function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();var r=n(1),o=n(80),a=n(252),s=function(e){function FocusTrap(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,FocusTrap);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(FocusTrap.__proto__||Object.getPrototypeOf(FocusTrap)).call(this,e));return t.setFocusTrapElement=function(e){t.focusTrapElement=e},"undefined"!=typeof document&&(t.previouslyFocusedElement=document.activeElement),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(FocusTrap,e),i(FocusTrap,[{key:"componentDidMount",value:function(){var e=this.props.focusTrapOptions,t={returnFocusOnDeactivate:!1};for(var n in e)e.hasOwnProperty(n)&&"returnFocusOnDeactivate"!==n&&(t[n]=e[n]);var i=o.findDOMNode(this.focusTrapElement);this.focusTrap=this.props._createFocusTrap(i,t),this.props.active&&this.focusTrap.activate(),this.props.paused&&this.focusTrap.pause()}},{key:"componentDidUpdate",value:function(e){if(e.active&&!this.props.active){var t={returnFocus:this.props.focusTrapOptions.returnFocusOnDeactivate||!1};this.focusTrap.deactivate(t)}else!e.active&&this.props.active&&this.focusTrap.activate();e.paused&&!this.props.paused?this.focusTrap.unpause():!e.paused&&this.props.paused&&this.focusTrap.pause()}},{key:"componentWillUnmount",value:function(){this.focusTrap.deactivate(),!1!==this.props.focusTrapOptions.returnFocusOnDeactivate&&this.previouslyFocusedElement&&this.previouslyFocusedElement.focus&&this.previouslyFocusedElement.focus()}},{key:"render",value:function(){var e=this,t=r.Children.only(this.props.children);return r.cloneElement(t,{ref:function(n){e.setFocusTrapElement(n),"function"==typeof t.ref&&t.ref(n)}})}}]),FocusTrap}(r.Component);s.defaultProps={active:!0,paused:!1,focusTrapOptions:{},_createFocusTrap:a},e.exports=s},247:function(e,t,n){"use strict";function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=n(1),u=n(13);var p=function(e,t){return function(n){var i=e(n),r=n.displayName,o=void 0===r?n.name||"Component":r;return i.displayName="".concat(Object(u.upperFirst)(Object(u.camelCase)(t)),"(").concat(o,")"),i}};t.a=p((function(e){var t=0;return(function(n){function o(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(e=a(this,s(o).apply(this,arguments))).instanceId=t++,e}var u,p,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(o,n),u=o,(p=[{key:"render",value:function(){return Object(l.createElement)(e,i({},this.props,{instanceId:this.instanceId}))}}])&&r(u.prototype,p),d&&r(u,d),o}(l.Component))}),"withInstanceId")},252:function(e,t,n){var i=n(253),r=n(136),o=null;function a(e){return setTimeout(e,0)}e.exports=function(e,t){var n=document,s="string"==typeof e?n.querySelector(e):e,c=r({returnFocusOnDeactivate:!0,escapeDeactivates:!0},t),l={firstTabbableNode:null,lastTabbableNode:null,nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1},u={activate:function(e){if(l.active)return;_(),l.active=!0,l.paused=!1,l.nodeFocusedBeforeActivation=n.activeElement;var t=e&&e.onActivate?e.onActivate:c.onActivate;t&&t();return d(),u},deactivate:p,pause:function(){if(l.paused||!l.active)return;l.paused=!0,g()},unpause:function(){if(!l.paused||!l.active)return;l.paused=!1,d()}};return u;function p(e){if(l.active){g(),l.active=!1,l.paused=!1;var t=e&&void 0!==e.onDeactivate?e.onDeactivate:c.onDeactivate;return t&&t(),(e&&void 0!==e.returnFocus?e.returnFocus:c.returnFocusOnDeactivate)&&a((function(){k(l.nodeFocusedBeforeActivation)})),u}}function d(){if(l.active)return o&&o.pause(),o=u,_(),a((function(){k(h())})),n.addEventListener("focusin",v,!0),n.addEventListener("mousedown",f,!0),n.addEventListener("touchstart",f,!0),n.addEventListener("click",y,!0),n.addEventListener("keydown",b,!0),u}function g(){if(l.active&&o===u)return n.removeEventListener("focusin",v,!0),n.removeEventListener("mousedown",f,!0),n.removeEventListener("touchstart",f,!0),n.removeEventListener("click",y,!0),n.removeEventListener("keydown",b,!0),o=null,u}function m(e){var t=c[e],i=t;if(!t)return null;if("string"==typeof t&&!(i=n.querySelector(t)))throw new Error("`"+e+"` refers to no known node");if("function"==typeof t&&!(i=t()))throw new Error("`"+e+"` did not return a node");return i}function h(){var e;if(!(e=null!==m("initialFocus")?m("initialFocus"):s.contains(n.activeElement)?n.activeElement:l.firstTabbableNode||m("fallbackFocus")))throw new Error("You can't have a focus-trap without at least one focusable element");return e}function f(e){s.contains(e.target)||(c.clickOutsideDeactivates?p({returnFocus:!i.isFocusable(e.target)}):e.preventDefault())}function v(e){s.contains(e.target)||e.target instanceof Document||(e.stopImmediatePropagation(),k(l.mostRecentlyFocusedNode||h()))}function b(e){if(!1!==c.escapeDeactivates&&function(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(e))return e.preventDefault(),void p();(function(e){return"Tab"===e.key||9===e.keyCode})(e)&&function(e){if(_(),e.shiftKey&&e.target===l.firstTabbableNode)return e.preventDefault(),void k(l.lastTabbableNode);if(!e.shiftKey&&e.target===l.lastTabbableNode)e.preventDefault(),k(l.firstTabbableNode)}(e)}function y(e){c.clickOutsideDeactivates||s.contains(e.target)||(e.preventDefault(),e.stopImmediatePropagation())}function _(){var e=i(s);l.firstTabbableNode=e[0]||h(),l.lastTabbableNode=e[e.length-1]||h()}function k(e){e!==n.activeElement&&(e&&e.focus?(e.focus(),l.mostRecentlyFocusedNode=e,function(e){return e.tagName&&"input"===e.tagName.toLowerCase()&&"function"==typeof e.select}(e)&&e.select()):k(h()))}}},253:function(e,t){var n=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],i=n.join(","),r="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var n,o,s,c=[],p=[],d=new UntouchabilityChecker(e.ownerDocument||e),g=e.querySelectorAll(i);for(t.includeContainer&&r.call(e,i)&&(g=Array.prototype.slice.apply(g)).unshift(e),n=0;n<g.length;n++)a(o=g[n],d)&&(0===(s=l(o))?c.push(o):p.push({documentOrder:n,tabIndex:s,node:o}));return p.sort(u).map((function(e){return e.node})).concat(c)}function a(e,t){return!(!s(e,t)||function(e){return function(e){return p(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'));return!t||t===e}(e)}(e)||l(e)<0)}function s(e,t){return t=t||new UntouchabilityChecker(e.ownerDocument||e),!(e.disabled||function(e){return p(e)&&"hidden"===e.type}(e)||t.isUntouchable(e))}o.isTabbable=function(e,t){if(!e)throw new Error("No node provided");return!1!==r.call(e,i)&&a(e,t)},o.isFocusable=function(e,t){if(!e)throw new Error("No node provided");return!1!==r.call(e,c)&&s(e,t)};var c=n.concat("iframe").join(",");function l(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function u(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function p(e){return"INPUT"===e.tagName}function UntouchabilityChecker(e){this.doc=e,this.cache=[]}UntouchabilityChecker.prototype.hasDisplayNone=function(e,t){if(e===this.doc.documentElement)return!1;var n=function(e,t){for(var n=0,i=e.length;n<i;n++)if(t(e[n]))return e[n]}(this.cache,(function(t){return t===e}));if(n)return n[1];var i=!1;return"none"===(t=t||this.doc.defaultView.getComputedStyle(e)).display?i=!0:e.parentNode&&(i=this.hasDisplayNone(e.parentNode)),this.cache.push([e,i]),i},UntouchabilityChecker.prototype.isUntouchable=function(e){if(e===this.doc.documentElement)return!1;var t=this.doc.defaultView.getComputedStyle(e);return!!this.hasDisplayNone(e,t)||"hidden"===t.visibility},e.exports=o},268:function(e,t,n){"use strict";(function(e){var i=n(21),r=n.n(i),o=n(5),a=n.n(o),s=n(6),c=n.n(s),l=n(7),u=n.n(l),p=n(8),d=n.n(p),g=n(16),m=n.n(g),h=n(9),f=n.n(h),v=n(269),b=n(2),y=n.n(b),_=n(3),k=n(14),S=n.n(k),E=n(52),C=n(1),w=n(0),O=n(55),N=function(t){function OptIn(e){var t;return a()(this,OptIn),(t=u()(this,d()(OptIn).call(this,e))).state={optIn:Object(O.a)(),error:!1},t.handleOptIn=t.handleOptIn.bind(m()(t)),t}return f()(OptIn,t),c()(OptIn,[{key:"handleOptIn",value:function(e){var t=this,n=!!e.target.checked,i=Object(_.k)("googlesitekit_tracking_optin");Object(O.b)(n),n&&Object(O.c)("tracking_plugin",this.props.optinAction),Object(E.default)({path:"/wp/v2/users/me",method:"POST",data:{meta:r()({},i,n)}}).then((function(){t.setState({optIn:n,error:!1})})).catch((function(e){t.setState({optIn:!n,error:{errorCode:e.code,errorMsg:e.message}})}))}},{key:"render",value:function(){var t=this.state,n=t.optIn,i=t.error,r=this.props,o=r.id,a=r.name,s=r.className,c=Object(w.sprintf)(
/* translators: %s: privacy policy URL */
Object(w.__)('Help us improve the Site Kit plugin by allowing tracking of anonymous usage stats. All data are treated in accordance with <a href="%s" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>',"google-site-kit"),"https://policies.google.com/privacy");return e.createElement("div",{className:S()("googlesitekit-opt-in",s)},e.createElement(v.a,{id:o,name:a,value:"1",checked:n,onChange:this.handleOptIn},e.createElement("span",{dangerouslySetInnerHTML:Object(_.w)(c,{ALLOWED_TAGS:["a"],ALLOWED_ATTR:["href","target","rel"]})})),i&&e.createElement("div",{className:"googlesitekit-error-text"},i.errorMsg))}}]),OptIn}(C.Component);N.propTypes={id:y.a.string,name:y.a.string,className:y.a.string,optinAction:y.a.string},N.defaultProps={id:"googlesitekit-opt-in",name:"optIn"},t.a=N}).call(this,n(1))},269:function(e,t,n){"use strict";(function(e){var i=n(5),r=n.n(i),o=n(6),a=n.n(o),s=n(7),c=n.n(s),l=n(8),u=n.n(l),p=n(9),d=n.n(p),g=n(25),m=n(2),h=n.n(m),f=n(14),v=n.n(f),b=n(1),y=function(t){function Checkbox(e){var t;return r()(this,Checkbox),(t=c()(this,u()(Checkbox).call(this,e))).formFieldRef=Object(b.createRef)(),t.checkboxRef=Object(b.createRef)(),t}return d()(Checkbox,t),a()(Checkbox,[{key:"componentDidMount",value:function(){new g.e(this.formFieldRef.current).input=new g.c(this.checkboxRef.current)}},{key:"render",value:function(){var t=this.props,n=t.onChange,i=t.id,r=t.name,o=t.value,a=t.checked,s=t.disabled,c=t.children;return e.createElement("div",{className:"mdc-form-field",ref:this.formFieldRef},e.createElement("div",{className:v()("mdc-checkbox",{"mdc-checkbox--disabled":s}),ref:this.checkboxRef},e.createElement("input",{className:"mdc-checkbox__native-control",type:"checkbox",id:i,name:r,value:o,checked:a,disabled:s,onChange:n}),e.createElement("div",{className:"mdc-checkbox__background"},e.createElement("svg",{className:"mdc-checkbox__checkmark",viewBox:"0 0 24 24"},e.createElement("path",{className:"mdc-checkbox__checkmark-path",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"})),e.createElement("div",{className:"mdc-checkbox__mixedmark"}))),e.createElement("label",{htmlFor:i},c))}}]),Checkbox}(b.Component);y.propTypes={onChange:h.a.func.isRequired,id:h.a.string.isRequired,name:h.a.string.isRequired,value:h.a.string.isRequired,checked:h.a.bool,disabled:h.a.bool,children:h.a.node.isRequired},y.defaultProps={checked:!1,disabled:!1},t.a=y}).call(this,n(1))},357:function(e,t,n){"use strict";n.r(t),function(e,i){var r=n(11),o=n.n(r),a=n(5),s=n.n(a),c=n(6),l=n.n(c),u=n(7),p=n.n(u),d=n(8),g=n.n(d),m=n(16),h=n.n(m),f=n(9),v=n.n(f),b=n(13),y=n(0),_=n(1),k=n(66),S=n(33),E=n(22),C=n(10),w=n(3),O=n(359),N=n(366),R=function(t){function Setup(t){var n;s()(this,Setup),n=p()(this,g()(Setup).call(this,t));var i=e.googlesitekit.admin.connectURL,r=e.googlesitekit.setup,o=r.isAuthenticated,a=r.hasSearchConsoleProperty,c=r.isSiteKitConnected,l=r.isVerified,u=r.needReauthenticate,d=e.googlesitekit.permissions.canSetup;return n.state={canSetup:d,isAuthenticated:o,isVerified:l,needReauthenticate:u,hasSearchConsoleProperty:a,hasSearchConsolePropertyFromTheStart:a,connectURL:i,errorMsg:"",isSiteKitConnected:c,completeSetup:!1},n.siteConnectedSetup=n.siteConnectedSetup.bind(h()(n)),n.siteVerificationSetup=n.siteVerificationSetup.bind(h()(n)),n.searchConsoleSetup=n.searchConsoleSetup.bind(h()(n)),n.resetAndRestart=n.resetAndRestart.bind(h()(n)),n.completeSetup=n.completeSetup.bind(h()(n)),n.setErrorMessage=n.setErrorMessage.bind(h()(n)),n}return v()(Setup,t),l()(Setup,[{key:"resetAndRestart",value:function(){return o.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.awrap(C.c.set(C.a,"site","reset"));case 2:Object(w.c)(),this.setState({isSiteKitConnected:!1,isAuthenticated:!1,isVerified:!1,hasSearchConsoleProperty:!1,completeSetup:!1,errorMsg:""});case 4:case"end":return e.stop()}}),null,this)}},{key:"completeSetup",value:function(){this.setState({completeSetup:!0})}},{key:"siteConnectedSetup",value:function(e){this.setState({isSiteKitConnected:e})}},{key:"siteVerificationSetup",value:function(e){this.setState({isVerified:e})}},{key:"searchConsoleSetup",value:function(e){this.setState({hasSearchConsoleProperty:e})}},{key:"isSetupFinished",value:function(){var e=this.state,t=e.isSiteKitConnected,n=e.isAuthenticated,i=e.isVerified,r=e.hasSearchConsoleProperty,o=e.completeSetup;return t&&n&&i&&r&&o}},{key:"setErrorMessage",value:function(e){this.setState({errorMsg:e})}},{key:"getApplicableSteps",value:function(){var e,t=O.a,n=Object.keys(t);for(e=0;e<n.length;e++)t[n[e]].isApplicable(this.state)||delete t[n[e]];return t}},{key:"currentStep",value:function(e){var t,n=Object.keys(e);for(t=0;t<n.length-1;t++)if(!e[n[t]].isCompleted(this.state))return n[t];return n[t]}},{key:"stepStatus",value:function(e,t){return e[t].isCompleted(this.state)?"completed":t===this.currentStep(e)?"inprogress":""}},{key:"render",value:function(){var t=this,n=this.state,r=n.canSetup,o=n.isAuthenticated,a=n.isVerified,s=n.needReauthenticate,c=n.hasSearchConsoleProperty,l=n.connectURL,u=n.isSiteKitConnected;if(this.isSetupFinished()){var p=Object(w.n)("googlesitekit-dashboard",{notification:"authentication_success"});Object(b.delay)((function(){e.location.replace(p)}),500,"later")}var d=this.getApplicableSteps(),g=this.currentStep(d),m=d[g].Component,h=i.createElement(m,{siteConnectedSetup:this.siteConnectedSetup,connectURL:l,siteVerificationSetup:this.siteVerificationSetup,searchConsoleSetup:this.searchConsoleSetup,completeSetup:this.completeSetup,isSiteKitConnected:u,isAuthenticated:o,isVerified:a,needReauthenticate:s,hasSearchConsoleProperty:c,setErrorMessage:this.setErrorMessage,resetAndRestart:d.clientCredentials?this.resetAndRestart:void 0}),f=r,v=!f&&!o;return i.createElement(_.Fragment,null,i.createElement(k.a,null),i.createElement("div",{className:"googlesitekit-wizard"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},i.createElement(E.a,null,i.createElement("section",{className:"googlesitekit-wizard-progress"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},f&&i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},i.createElement("div",{className:"googlesitekit-wizard-progress__steps"},Object.keys(d).map((function(e,n){return i.createElement(N.a,{key:d[e].title,currentStep:g===e,title:d[e].title,step:n+1,status:t.stepStatus(d,e),warning:d[e].warning,error:d[e].error,stepKey:e})})))))),v&&i.createElement("div",{className:"googlesitekit-setup__footer"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},i.createElement("h1",{className:"googlesitekit-setup__title"},Object(y.__)("Authenticate Site Kit","google-site-kit")),i.createElement("p",{className:"googlesitekit-setup__description"},Object(y.__)("Please sign into your Google account to begin.","google-site-kit")),i.createElement(S.a,{href:"#",onClick:function(){Object(w.A)("plugin_setup","signin_with_google"),document.location=l}},Object(y.__)("Sign in with Google","google-site-kit"))))))),f&&h))))))}}]),Setup}(_.Component);t.default=R}.call(this,n(15),n(1))},359:function(e,t,n){"use strict";var i=n(360),r=n(361),o=n(363),a=n(365),s=n(0),c={authentication:{title:Object(s.__)("Authenticate","google-site-kit"),required:!0,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&!e.needReauthenticate},Component:i.a},verification:{title:Object(s.__)("Verify URL","google-site-kit"),required:!0,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&e.isVerified},Component:r.a},seachConsoleProperty:{title:Object(s.__)("Connect Search Console","google-site-kit"),required:!0,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&e.isVerified&&e.hasSearchConsoleProperty},Component:o.a},completeSetup:{title:Object(s.__)("Finish","google-site-kit"),required:!1,isApplicable:function(){return!0},isCompleted:function(e){return e.isSiteKitConnected&&e.isAuthenticated&&e.isVerified&&e.hasSearchConsoleProperty},Component:a.a}};t.a=c},360:function(e,t,n){"use strict";(function(e){var i=n(5),r=n.n(i),o=n(6),a=n.n(o),s=n(7),c=n.n(s),l=n(8),u=n.n(l),p=n(9),d=n.n(p),g=n(2),m=n.n(g),h=n(33),f=n(19),v=n(3),b=n(268),y=n(65),_=n(0),k=n(1),S=function(t){function WizardStepAuthentication(){return r()(this,WizardStepAuthentication),c()(this,u()(WizardStepAuthentication).apply(this,arguments))}return d()(WizardStepAuthentication,t),a()(WizardStepAuthentication,[{key:"render",value:function(){var t=this.props,n=t.connectURL,i=t.needReauthenticate,r=t.resetAndRestart;return e.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--two"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(_.__)("Authenticate with Google","google-site-kit")),e.createElement("p",null,Object(_.__)("Please sign into your Google account to begin.","google-site-kit")),i&&e.createElement("p",{className:"googlesitekit-error-text"},Object(_.__)("You did not grant access to one or more of the requested scopes. Please grant all scopes that you are prompted for.","google-site-kit")),e.createElement("p",null,e.createElement(h.a,{onClick:function(){Object(v.A)("plugin_setup","signin_with_google"),document.location=n}},Object(_.__)("Sign in with Google","google-site-kit")),r&&e.createElement(f.a,{className:"googlesitekit-wizard-step__back",onClick:r},Object(_.__)("Back","google-site-kit"))),e.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},e.createElement(b.a,{optinAction:"analytics_optin_setup_fallback"}),e.createElement(y.a,null))))))}}]),WizardStepAuthentication}(k.Component);S.propTypes={connectURL:m.a.string.isRequired,resetAndRestart:m.a.func},t.a=S}).call(this,n(1))},361:function(e,t,n){"use strict";(function(e){var i=n(64),r=n.n(i),o=n(5),a=n.n(o),s=n(6),c=n.n(s),l=n(7),u=n.n(l),p=n(8),d=n.n(p),g=n(9),m=n.n(g),h=n(2),f=n.n(h),v=n(362),b=n(1),y=function(t){function WizardStepVerification(){return a()(this,WizardStepVerification),u()(this,d()(WizardStepVerification).apply(this,arguments))}return m()(WizardStepVerification,t),c()(WizardStepVerification,[{key:"render",value:function(){var t=!this.props.isVerified;return e.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--three"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},e.createElement(v.a,r()({shouldSetup:t},this.props))))))}}]),WizardStepVerification}(b.Component);y.propTypes={siteVerificationSetup:f.a.func.isRequired},t.a=y}).call(this,n(1))},362:function(e,t,n){"use strict";(function(e,i){var r=n(11),o=n.n(r),a=n(5),s=n.n(a),c=n(6),l=n.n(c),u=n(7),p=n.n(u),d=n(8),g=n.n(d),m=n(16),h=n.n(m),f=n(9),v=n.n(f),b=n(10),y=n(33),_=n(32),k=n(25),S=n(2),E=n.n(S),C=n(3),w=n(65),O=n(0),N=n(1),R=function(t){function SiteVerification(e){var t;s()(this,SiteVerification);var n=(t=p()(this,g()(SiteVerification).call(this,e))).props,i=n.isAuthenticated,r=n.shouldSetup;return t.state={loading:i&&r,loadingMsg:Object(O.__)("Getting your verified sites...","google-site-kit"),siteURL:" ",selectedURL:"",errorCode:!1,errorMsg:""},t.onProceed=t.onProceed.bind(h()(t)),t}return v()(SiteVerification,t),l()(SiteVerification,[{key:"componentDidMount",value:function(){var e=this.props,t=e.isAuthenticated,n=e.shouldSetup;t&&n&&this.requestSitePropertyList()}},{key:"requestSitePropertyList",value:function(){var t,n,i,r,a,s=this,c=this.props.setErrorMessage;o.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,o.a.awrap(b.c.get(b.b,"site-verification","verification"));case 3:if(t=l.sent,n=t.verified,i=t.identifier,!n){l.next=16;break}return Object(C.A)("verification_setup","verification_check_true"),l.next=10,o.a.awrap(s.insertSiteVerification(i));case 10:if(!0!==l.sent.verified){l.next=14;break}return s.props.siteVerificationSetup(!0),l.abrupt("return",!0);case 14:l.next=17;break;case 16:Object(C.A)("verification_setup","verification_check_false");case 17:s.setState({loading:!1,siteURL:i}),l.next=26;break;case 20:l.prev=20,l.t0=l.catch(0),r=l.t0.message,Object(C.B)(l.t0.message)&&(a=JSON.parse(l.t0.message),r=a.error.message||l.t0.message),c(r),s.setState({loading:!1,errorCode:l.t0.code,errorMsg:r,siteURL:e.googlesitekit.admin.siteURL});case 26:case"end":return l.stop()}}),null,null,[[0,20]])}},{key:"insertSiteVerification",value:function(e){return o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.awrap(b.c.set(b.b,"site-verification","verification",{siteURL:e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}))}},{key:"onProceed",value:function(){var t,n,i,r;return o.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t=this.props.setErrorMessage,n=this.state.siteURL?this.state.siteURL:e.googlesitekit.admin.siteURL,t(""),this.setState({loading:!0,loadingMsg:Object(O.__)("Verifying...","google-site-kit"),errorCode:!1,errorMsg:""}),a.prev=4,a.next=7,o.a.awrap(this.insertSiteVerification(n));case 7:!0===a.sent.verified&&(Object(C.A)("verification_setup","verification_insert_tag"),this.props.siteVerificationSetup(!0)),a.next=17;break;case 11:a.prev=11,a.t0=a.catch(4),i=a.t0.message,Object(C.B)(a.t0.message)&&(r=JSON.parse(a.t0.message),i=r.error.message||a.t0.message),t(i),this.setState({loading:!1,errorCode:a.t0.code,errorMsg:i});case 17:case"end":return a.stop()}}),null,this,[[4,11]])}},{key:"renderForm",value:function(){var e=this.state,t=e.loading,n=e.loadingMsg,r=e.siteURL,o=i.createElement(N.Fragment,null,n&&i.createElement("p",null,n),i.createElement(_.a,null));return t?o:i.createElement(N.Fragment,null,i.createElement("div",{className:"googlesitekit-wizard-step__inputs"},i.createElement(k.l,{label:Object(O.__)("Website Address","google-site-kit"),name:"siteProperty",floatingLabelClassName:"mdc-floating-label--float-above",outlined:!0,disabled:!0},i.createElement(k.b,{value:r}))),i.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},i.createElement(y.a,{onClick:this.onProceed},Object(O.__)("Continue","google-site-kit")),i.createElement(w.a,null)))}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.shouldSetup,r=this.state.errorMsg;return n?i.createElement(N.Fragment,null,i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(O.__)("Verify URL","google-site-kit")),i.createElement("p",{className:"googlesitekit-wizard-step__text"},Object(O.__)("We will need to verify your URL for Site Kit.","google-site-kit")),r&&0<r.length&&i.createElement("p",{className:"googlesitekit-error-text"},r),t&&this.renderForm()):SiteVerification.renderSetupDone()}}],[{key:"renderSetupDone",value:function(){return i.createElement(N.Fragment,null,i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(O.__)("Verify URL","google-site-kit")),i.createElement("p",{className:"googlesitekit-wizard-step__text"},Object(O.__)("Congratulations, your site has been verified!","google-site-kit")))}}]),SiteVerification}(N.Component);R.propTypes={isAuthenticated:E.a.bool.isRequired,shouldSetup:E.a.bool.isRequired,siteVerificationSetup:E.a.func.isRequired,completeSetup:E.a.func,setErrorMessage:E.a.func.isRequired},t.a=R}).call(this,n(15),n(1))},363:function(e,t,n){"use strict";(function(e){var i=n(64),r=n.n(i),o=n(5),a=n.n(o),s=n(6),c=n.n(s),l=n(7),u=n.n(l),p=n(8),d=n.n(p),g=n(9),m=n.n(g),h=n(2),f=n.n(h),v=n(364),b=n(1),y=function(t){function WizardStepSearchConsoleProperty(){return a()(this,WizardStepSearchConsoleProperty),u()(this,d()(WizardStepSearchConsoleProperty).apply(this,arguments))}return m()(WizardStepSearchConsoleProperty,t),c()(WizardStepSearchConsoleProperty,[{key:"render",value:function(){var t=this.props,n=t.isVerified,i=t.hasSearchConsoleProperty,o=n&&!i;return e.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--four"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-12 "},o?e.createElement(v.a,r()({shouldSetup:o},this.props)):v.a.connected()))))}}]),WizardStepSearchConsoleProperty}(b.Component);y.propTypes={searchConsoleSetup:f.a.func.isRequired},t.a=y}).call(this,n(1))},364:function(e,t,n){"use strict";(function(e,i){var r=n(11),o=n.n(r),a=n(5),s=n.n(a),c=n(6),l=n.n(c),u=n(7),p=n.n(u),d=n(8),g=n.n(d),m=n(16),h=n.n(m),f=n(9),v=n.n(f),b=n(10),y=n(32),_=n(25),k=n(2),S=n.n(k),E=n(33),C=n(65),w=n(3),O=n(0),N=n(1),R=function(t){function SearchConsole(t){var n;s()(this,SearchConsole),n=p()(this,g()(SearchConsole).call(this,t));var i=e.googlesitekit.admin.siteURL;return n.state={loading:!0,sites:!1,selectedURL:i,siteURL:i,connected:!1,errorCode:!1,errorMsg:""},n.handleURLSelect=n.handleURLSelect.bind(h()(n)),n.insertPropertyToSearchConsole=n.insertPropertyToSearchConsole.bind(h()(n)),n.submitPropertyEventHandler=n.submitPropertyEventHandler.bind(h()(n)),n}return v()(SearchConsole,t),l()(SearchConsole,[{key:"componentDidMount",value:function(){var e,t,n;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(e=this.props,t=e.isAuthenticated,n=e.shouldSetup,t&&n){i.next=3;break}return i.abrupt("return");case 3:this.requestSearchConsoleSiteList();case 4:case"end":return i.stop()}}),null,this)}},{key:"requestSearchConsoleSiteList",value:function(){var e,t=this,n=this.props.setErrorMessage;o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,o.a.awrap(b.c.get(b.b,"search-console","matched-sites"));case 3:if(1!==(e=i.sent).length){i.next=9;break}return i.next=7,o.a.awrap(t.insertPropertyToSearchConsole(e[0].siteURL));case 7:return t.props.searchConsoleSetup(e[0].siteURL),i.abrupt("return");case 9:if(e.length){i.next=11;break}throw{code:"no_property_matched",message:Object(O.__)("Your site has not been added to Search Console yet. Would you like to add it now?","google-site-kit")};case 11:throw n(""),t.setState({loading:!1,selectedURL:e[0].siteURL,sites:e}),{code:"multiple_properties_matched",message:Object(O.sprintf)(
/* translators: %d: the number of matching properties */
Object(O.__)("We found %d existing accounts. Please choose which one to use below.","google-site-kit"),e.length)};case 16:i.prev=16,i.t0=i.catch(0),n(i.t0.message),t.setState({loading:!1,errorCode:i.t0.code,errorMsg:i.t0.message});case 20:case"end":return i.stop()}}),null,null,[[0,16]])}},{key:"insertPropertyToSearchConsole",value:function(e){var t,n=arguments;return o.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=n.length>1&&void 0!==n[1]&&n[1],i.next=3,o.a.awrap(b.c.set(b.b,"search-console","site",{siteURL:e}));case 3:t&&Object(w.A)("search_console_setup","add_new_sc_property"),this.setState({loading:!1,connected:!0});case 5:case"end":return i.stop()}}),null,this)}},{key:"submitPropertyEventHandler",value:function(){var e=this,t=this.state,n=t.selectedURL,i=t.errorCode,r=this.props.setErrorMessage;o.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.a.awrap(e.insertPropertyToSearchConsole(n,"no_property_matched"===i));case 3:r(""),e.props.searchConsoleSetup(n),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(0),r(t.t0.message[0].message),e.setState({loading:!1,errorCode:t.t0.code,errorMsg:t.t0.message[0].message});case 11:case"end":return t.stop()}}),null,null,[[0,7]])}},{key:"handleURLSelect",value:function(e,t){this.setState({selectedURL:t.getAttribute("data-value")})}},{key:"matchedForm",value:function(){var e=this.state,t=e.sites,n=e.selectedURL;if(!t)return null;var r=t.map((function(e){var t=e.siteURL;return t.startsWith("sc-domain:")&&(
/* translators: %s: Search Console property domain name */
t=Object(O.sprintf)(Object(O.__)("%s (domain property)","google-site-kit"),t.replace(/^sc-domain:/,""))),{label:t,value:e.siteURL}}));return i.createElement(N.Fragment,null,i.createElement("div",{className:"googlesitekit-setup-module__inputs"},i.createElement(_.k,{enhanced:!0,name:"siteProperty",label:Object(O.__)("Choose URL","google-site-kit"),outlined:!0,onEnhancedChange:this.handleURLSelect,options:r,value:n})),i.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},i.createElement(E.a,{onClick:this.submitPropertyEventHandler},Object(O.__)("Continue","google-site-kit")),i.createElement(C.a,null)))}},{key:"noSiteForm",value:function(){var e=this.state.siteURL;return i.createElement(N.Fragment,null,i.createElement("div",{className:"googlesitekit-setup-module__inputs"},i.createElement(_.l,{label:Object(O.__)("Website Address","google-site-kit"),name:"siteProperty",floatingLabelClassName:"mdc-floating-label--float-above",outlined:!0,disabled:!0},i.createElement(_.b,{value:e}))),i.createElement("div",{className:"googlesitekit-wizard-step__action googlesitekit-wizard-step__action--justify"},i.createElement(E.a,{onClick:this.submitPropertyEventHandler},Object(O.__)("Continue","google-site-kit")),i.createElement(C.a,null)))}},{key:"renderForm",value:function(){var e=this.state,t=e.loading,n=e.sites;return t?i.createElement(N.Fragment,null,i.createElement("p",null,Object(O.__)("We’re locating your Search Console account.","google-site-kit")),i.createElement(y.a,null)):0===n.length?this.noSiteForm():this.matchedForm()}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,n=e.shouldSetup,r=this.state,o=r.errorMsg,a=r.connected;return!n||a?SearchConsole.connected():i.createElement("section",{className:"googlesitekit-setup-module googlesitekit-setup-module--search-console"},i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-setup-module__title "},Object(O._x)("Search Console","Service name","google-site-kit")),o&&0<o.length&&i.createElement("p",{className:"googlesitekit-error-text"},o),t&&n&&this.renderForm())}}],[{key:"connected",value:function(){return i.createElement("section",{className:"googlesitekit-setup-module googlesitekit-setup-module--search-console"},i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-setup-module__title "},Object(O._x)("Search Console","Service name","google-site-kit")),i.createElement("p",{className:"googlesitekit-setup-module__text--no-margin"},Object(O.__)("Your Search Console is set up with Site Kit.","google-site-kit")))}}]),SearchConsole}(N.Component);R.propTypes={isAuthenticated:S.a.bool.isRequired,shouldSetup:S.a.bool.isRequired,searchConsoleSetup:S.a.func.isRequired,setErrorMessage:S.a.func.isRequired},t.a=R}).call(this,n(15),n(1))},365:function(e,t,n){"use strict";(function(e,i){var r=n(5),o=n.n(r),a=n(6),s=n.n(a),c=n(7),l=n.n(c),u=n(8),p=n.n(u),d=n(9),g=n.n(d),m=n(2),h=n.n(m),f=n(33),v=n(3),b=n(0),y=n(1),_=function(t){function WizardStepCompleteSetup(t){var n;return o()(this,WizardStepCompleteSetup),n=l()(this,p()(WizardStepCompleteSetup).call(this,t)),e.googlesitekit.setup.hasSearchConsoleProperty?Object(v.A)("plugin_setup","user_verified"):Object(v.A)("plugin_setup","site_verified"),n}return g()(WizardStepCompleteSetup,t),s()(WizardStepCompleteSetup,[{key:"render",value:function(){return i.createElement("section",{className:"googlesitekit-wizard-step googlesitekit-wizard-step--five"},i.createElement("div",{className:"mdc-layout-grid"},i.createElement("div",{className:"mdc-layout-grid__inner"},i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-5-tablet mdc-layout-grid__cell--span-9-desktop "},i.createElement("h2",{className:" googlesitekit-heading-3 googlesitekit-wizard-step__title "},Object(b.__)("Congratulations!","google-site-kit")),i.createElement("p",null,Object(b.__)("You successfully completed the Site Kit setup and connected Search Console. Check the dashboard for more services to connect.","google-site-kit")),i.createElement("div",{className:"googlesitekit-wizard-step__action"},i.createElement(f.a,{id:"wizard-step-five-proceed",onClick:this.props.completeSetup},Object(b.__)("Go to Dashboard","google-site-kit")))),i.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--span-3-tablet mdc-layout-grid__cell--span-3-desktop "},i.createElement("div",{className:"googlesitekit-rocket"},i.createElement("img",{className:"googlesitekit-rocket__body",alt:"",src:e.googlesitekit.admin.assetsRoot+"images/rocket-body.png"}),i.createElement("img",{className:"googlesitekit-rocket__clouds",alt:"",src:e.googlesitekit.admin.assetsRoot+"images/rocket-clouds.png"}),i.createElement("img",{className:"googlesitekit-rocket__dust",alt:"",src:e.googlesitekit.admin.assetsRoot+"images/rocket-dust.png"}))))))}}]),WizardStepCompleteSetup}(y.Component);_.propTypes={completeSetup:h.a.func.isRequired},t.a=_}).call(this,n(15),n(1))},366:function(e,t,n){"use strict";var i=n(5),r=n.n(i),o=n(6),a=n.n(o),s=n(7),c=n.n(s),l=n(8),u=n.n(l),p=n(9),d=n.n(p),g=n(2),m=n.n(g),h=n(24),f=n(1),v=n.n(f),b=n(14),y=n.n(b),_=function(e){function WizardProgressStep(){return r()(this,WizardProgressStep),c()(this,u()(WizardProgressStep).apply(this,arguments))}return d()(WizardProgressStep,e),a()(WizardProgressStep,[{key:"render",value:function(){var e=this.props,t=e.currentStep,n=e.step,i=e.title,r=e.status,o=e.warning,a=e.error,s=e.stepKey,c=r;o?c="warning":a&&(c="error");var l=!1;switch(c){case"warning":case"error":l=v.a.createElement(h.a,{id:"exclamation",height:"12",width:"2"});break;case"completed":l=v.a.createElement(h.a,{id:"check",height:"12",width:"16"})}return v.a.createElement("div",{className:y()("googlesitekit-wizard-progress-step","googlesitekit-wizard-progress-step--".concat(n),"googlesitekit-wizard-progress-step--".concat(s),{"googlesitekit-wizard-progress-step--current":t})},v.a.createElement("div",{className:"googlesitekit-wizard-progress-step__number-wrapper"},v.a.createElement("div",{className:y()("googlesitekit-wizard-progress-step__number","googlesitekit-wizard-progress-step__number--".concat(c))},v.a.createElement("span",{className:y()("googlesitekit-wizard-progress-step__number-text","googlesitekit-wizard-progress-step__number-text--".concat(c))},n),l&&v.a.createElement("span",{className:y()("googlesitekit-wizard-progress-step__number-icon","googlesitekit-wizard-progress-step__number-icon--".concat(c))},l))),v.a.createElement("p",{className:"googlesitekit-wizard-progress-step__text"},i))}}]),WizardProgressStep}(f.Component);_.propTypes={currentStep:m.a.bool.isRequired,step:m.a.number.isRequired,title:m.a.string,status:m.a.string,warning:m.a.bool,error:m.a.bool},_.defaultProps={title:"",status:"",warning:!1,error:!1,removeFirstStep:!1},t.a=_},65:function(e,t,n){"use strict";(function(e){var i=n(0),r=n(19);t.a=function HelpLink(){var t=Object(i.__)("Need help?","google-site-kit");return e.createElement(r.a,{className:"googlesitekit-help-link",href:"https://sitekit.withgoogle.com/documentation/",external:!0},t)}}).call(this,n(1))}}]);