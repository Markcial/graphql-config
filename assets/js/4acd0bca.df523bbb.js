(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{75:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return l})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var a=t(3),n=t(7),o=(t(0),t(93)),l={id:"loaders",title:"Loaders",sidebar_label:"Loaders"},i={unversionedId:"loaders",id:"loaders",isDocsHomePage:!1,title:"Loaders",description:"Available loaders",source:"@site/docs/author-loaders.md",slug:"/loaders",permalink:"/loaders",editUrl:"https://github.com/kamilkisiela/graphql-config/edit/master/website/docs/author-loaders.md",version:"current",sidebar_label:"Loaders",sidebar:"docs",previous:{title:"Writing and Consuming Extensions",permalink:"/extensions"},next:{title:"GraphQLConfig",permalink:"/graphql-config"}},c=[{value:"Available loaders",id:"available-loaders",children:[]},{value:"Writing loaders",id:"writing-loaders",children:[]}],s={toc:c};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"available-loaders"},"Available loaders"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/url"},"Schema from GraphQL Endpoint")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/json-file"},"Schema from Introspection result")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/graphql-file"},"Schema and Documents from GraphQL files")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/code-file"},"Schema and Documents from JavaScript and TypeScript files")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/github"},"Schema from a file on GitHub")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://github.com/ardatan/graphql-tools/tree/master/packages/loaders/git"},"Schema from a file on a specific branch of git repository"))),Object(o.b)("h2",{id:"writing-loaders"},"Writing loaders"),Object(o.b)("p",null,"Take a look at some example loaders ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders"},"here"),"; we also recommend to the explore the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ardatan/graphql-tools/blob/master/packages/loaders/graphql-file/src/load-from-gql-file.ts"},"GraphQL File Loader code")," as you plan your loader."))}p.isMDXComponent=!0},93:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return m}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=n.a.createContext({}),p=function(e){var r=n.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},b=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),b=a,m=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return t?n.a.createElement(m,i(i({ref:r},s),{},{components:t})):n.a.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);