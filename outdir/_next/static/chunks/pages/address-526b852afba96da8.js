(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[40],{523:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/address",function(){return a(5695)}])},9084:function(e,s,a){"use strict";var t=a(5893),n=a(1664),i=a(3299);s.Z=function(){var e=(0,i.useSession)(),s=e.data;e.status;return(0,t.jsx)("div",{className:"col-lg-4",children:(0,t.jsxs)("div",{className:"osahan-account bg-white rounded shadow-sm overflow-hidden",children:[(0,t.jsxs)("div",{className:"p-4 profile text-center border-bottom",children:[(0,t.jsx)("img",{src:"/img/user.png",className:"img-fluid rounded-pill"}),(0,t.jsx)("h6",{className:"font-weight-bold m-0 mt-2",children:null===s||void 0===s?void 0:s.user.name})]}),(0,t.jsx)("div",{className:"account-sections",children:(0,t.jsxs)("ul",{className:"list-group",children:[(0,t.jsx)(n.default,{href:"account",className:"text-decoration-none text-dark",children:(0,t.jsxs)("li",{className:"border-bottom bg-white d-flex align-items-center p-3",children:[(0,t.jsx)("i",{className:"icofont-user osahan-icofont bg-danger"}),"My Account",(0,t.jsx)("span",{className:"badge badge-success p-1 badge-pill ml-auto",children:(0,t.jsx)("i",{className:"icofont-simple-right"})})]})}),(0,t.jsx)(n.default,{href:"listing",className:"text-decoration-none text-dark",children:(0,t.jsxs)("li",{className:"border-bottom bg-white d-flex align-items-center p-3",children:[(0,t.jsx)("i",{className:"icofont-user osahan-icofont bg-danger"}),"My Listing",(0,t.jsx)("span",{className:"badge badge-success p-1 badge-pill ml-auto",children:(0,t.jsx)("i",{className:"icofont-simple-right"})})]})}),(0,t.jsx)(n.default,{href:"post",className:"text-decoration-none text-dark",children:(0,t.jsxs)("li",{className:"border-bottom bg-white d-flex align-items-center p-3",children:[(0,t.jsx)("i",{className:"icofont-user osahan-icofont bg-danger"}),"Upload Fodder",(0,t.jsx)("span",{className:"badge badge-success p-1 badge-pill ml-auto",children:(0,t.jsx)("i",{className:"icofont-simple-right"})})]})}),(0,t.jsx)(n.default,{href:"myorders",className:"text-decoration-none text-dark",children:(0,t.jsxs)("li",{className:"border-bottom bg-white d-flex align-items-center p-3",children:[(0,t.jsx)("i",{className:"icofont-user osahan-icofont bg-danger"}),"My Orders",(0,t.jsx)("span",{className:"badge badge-success p-1 badge-pill ml-auto",children:(0,t.jsx)("i",{className:"icofont-simple-right"})})]})}),(0,t.jsx)(n.default,{href:"/address",className:"text-decoration-none text-dark",children:(0,t.jsxs)("li",{className:"border-bottom bg-white d-flex align-items-center p-3",children:[(0,t.jsx)("i",{className:"icofont-address-book osahan-icofont bg-dark"}),"My Address",(0,t.jsx)("span",{className:"badge badge-success p-1 badge-pill ml-auto",children:(0,t.jsx)("i",{className:"icofont-simple-right"})})]})}),(0,t.jsx)(n.default,{href:"/conditions",className:"text-decoration-none text-dark",children:(0,t.jsxs)("li",{className:"border-bottom bg-white d-flex align-items-center p-3",children:[(0,t.jsx)("i",{className:"icofont-info-circle osahan-icofont bg-primary"}),"Terms, Privacy & Policy",(0,t.jsx)("span",{className:"badge badge-success p-1 badge-pill ml-auto",children:(0,t.jsx)("i",{className:"icofont-simple-right"})})]})}),(0,t.jsx)(n.default,{href:"/ticket",className:"text-decoration-none text-dark",children:(0,t.jsxs)("li",{className:"border-bottom bg-white d-flex align-items-center p-3",children:[(0,t.jsx)("i",{className:"icofont-phone osahan-icofont bg-success"}),"Ticket",(0,t.jsx)("span",{className:"badge badge-success p-1 badge-pill ml-auto",children:(0,t.jsx)("i",{className:"icofont-simple-right"})})]})})]})})]})})}},1050:function(e,s,a){"use strict";var t=a(9669),n=a.n(t);n().defaults.baseURL="http://localhost:7065/api",n().defaults.headers.common.Authorization="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiQWRtaW4iLCJBZG1pbiI6IkFkbWluIiwiZXhwIjoxNjM3OTQ2MzY4LCJpc3MiOiJEaWdpZmFybSIsImF1ZCI6IlNhZmFyaWNvbSJ9.KSbNsJ7x0sIzafEo2q-vQGPYUNXZ-jQKEQ-76FLe3aU",n().defaults.headers.post["Content-Type"]="application/json",n().defaults.headers.post["Content-Type"]="multipart/form-data";var i=function(e){return e.data},o={get:function(e){return n().get(e).then(i)},post:function(e,s){var a=void 0===s?{}:s;return n().post(e,a).then(i)},put:function(e,s){var a=void 0===s?{}:s;return n().put(e,a).then(i)},del:function(e){return n().delete(e).then(i)}};s.Z=o},5695:function(e,s,a){"use strict";a.r(s);var t=a(5893),n=a(9084),i=a(7294),o=a(3299),c=a(9473),l=a(1050);function r(e,s,a){return s in e?Object.defineProperty(e,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[s]=a,e}s.default=function(){var e=(0,i.useState)({}),s=e[0],a=e[1],d=(0,i.useState)(),m=(d[0],d[1]),u=(0,o.useSession)(),h=u.data;u.status,(0,c.v9)((function(e){return e.cart})),(0,c.I0)();return(0,i.useEffect)((function(){l.Z.get("location/"+(null===h||void 0===h?void 0:h.user.name)).then((function(e){a(e)})),m((function(e){return function(e){for(var s=1;s<arguments.length;s++){var a=null!=arguments[s]?arguments[s]:{},t=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),t.forEach((function(s){r(e,s,a[s])}))}return e}({},e,{name:null===h||void 0===h?void 0:h.user.name,phone:null===h||void 0===h?void 0:h.user.name})}))}),[h]),h||(0,o.signIn)(),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("section",{className:"py-4 osahan-main-body",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)(n.Z,{}),(0,t.jsx)("div",{className:"col-lg-8 p-4 bg-white rounded shadow-sm",children:(0,t.jsxs)("div",{className:"osahan-my_address",children:[(0,t.jsx)("h4",{className:"mb-4 profile-title",children:"My Addresses"}),(0,t.jsxs)("div",{className:"custom-control custom-radio px-0 mb-3 position-relative border-custom-radio",children:[(0,t.jsx)("input",{type:"radio",id:"customRadioInline1",name:"customRadioInline1",className:"custom-control-input",defaultChecked:!0}),(0,t.jsx)("label",{className:"custom-control-label w-100",htmlFor:"customRadioInline1",children:(0,t.jsx)("div",{children:(0,t.jsxs)("div",{className:"p-3 bg-white rounded shadow-sm w-100",children:[(0,t.jsxs)("div",{className:"d-flex align-items-center mb-2",children:[(0,t.jsx)("p",{className:"mb-0 h6",children:"Home"}),(0,t.jsx)("p",{className:"mb-0 badge badge-success ml-auto",children:"Default"})]}),(0,t.jsx)("p",{className:"small text-muted m-0",children:null===s||void 0===s?void 0:s.homeAddress}),(0,t.jsx)("p",{className:"small text-muted m-0",children:null===s||void 0===s?void 0:s.completeAddress})]})})})]})]})})]})})})})}}},function(e){e.O(0,[669,774,888,179],(function(){return s=523,e(e.s=s);var s}));var s=e.O();_N_E=s}]);