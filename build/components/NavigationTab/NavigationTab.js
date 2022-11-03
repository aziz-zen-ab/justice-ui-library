import{jsx as t,jsxs as a}from"react/jsx-runtime";import*as i from"react";import{c as e}from"../../index-6ea95111.js";import{DropdownMenu as n,DropdownItemGroup as r,DropdownItem as o}from"../Dropdown/Dropdown.js";import{s}from"../../style-inject.es-1f59c1d0.js";import{translation as c}from"../../utils/i18n/index.js";import"../../fa_icons-aa14317c.js";import{CONTAINER_SIZE as p}from"../../constants/containerSize.js";import"../../index-d0edc839.js";import"../../index-dd80248b.js";import"../../Transition-cb3ed67b.js";import"../../_commonjsHelpers-6e998e78.js";import"../../math-dfd2e461.js";import"../../context-f854a00e.js";import"styled-components";import"../../objectWithoutPropertiesLoose-982ef579.js";import"../../inheritsLoose-6fd5c6e3.js";import"../../setPrototypeOf-c6ba02e6.js";import"../../Icon-f3bf8835.js";import"../../core.esm-a8712816.js";import"../../unitless.esm-d94354fa.js";import"crypto";import"../../memoize-one.esm-8827f1ac.js";import"../../inherits-d3723d19.js";import"../../objectSpread-31108fba.js";import"../../index-6f6eab52.js";import"../../Popper-db0b109c.js";import"../../objectWithoutProperties-90b89624.js";import"../../nonIterableRest-e93b6547.js";import"../../unsupportedIterableToArray-0ca076cc.js";import"../../utils/i18n/loadLanguages.js";import"../../types/enum.js";s('@import url("https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap");.tab-navigation,.tab-navigation--vertical{background-color:#fff;font-family:Roboto,sans-serif;height:60px;margin:0 0 30px}.tab-navigation--vertical>.wrapper,.tab-navigation>.wrapper{display:flex;padding:0 15px}.tab-navigation--full>.wrapper,.tab-navigation--large>.wrapper,.tab-navigation--small>.wrapper{margin:0 auto;padding:0 30px}.tab-navigation--full>.wrapper.no-padding,.tab-navigation--large>.wrapper.no-padding,.tab-navigation--small>.wrapper.no-padding{padding:0}.tab-navigation--large>.wrapper{max-width:1024px}.tab-navigation--small>.wrapper{max-width:768px}.tab-navigation--full>.wrapper{max-width:100%}.tab-navigation .tab-item,.tab-navigation--vertical .tab-item{color:#687792;cursor:pointer;font-size:16px;padding:19px 15px 15px;white-space:nowrap}.tab-navigation .tab-item.tab-active,.tab-navigation--vertical .tab-item.tab-active{border-bottom:3.75px solid #0b6cff;color:#232831}.tab-navigation .tab-item .icon-chevron-down,.tab-navigation--vertical .tab-item .icon-chevron-down{margin-left:4px}.tab-navigation--vertical{border-radius:4px;flex-direction:column;height:100%;justify-content:center;padding:0}.tab-navigation--vertical .wrapper{display:block;padding:0}.tab-navigation--vertical .tab-item{border-bottom:1px solid #e1e4e9}.tab-navigation--vertical .tab-item.tab-active{border-bottom:1px solid #e1e4e9;border-left:5px solid #0b6cff;color:#0b6cff}');const d=({isVertical:s,isChangeRoute:d=!0,containerSize:l="FULLWIDTH",noPadding:m=!1,config:b,moreDataQa:g=null,changePageKey:f,changePage:v})=>{const[u,h]=i.useState(b),[j,x]=i.useState([]),[w,y]=i.useState([]),[L,N]=i.useState(b.length),[P,R]=i.useState(0),S=i.useRef(null),I=i.useRef(null),E=()=>{if(S.current){const{clientWidth:t}=S.current;R(t)}},W=(t,a)=>{t?v&&v(a):f&&f(a)},z=(t=L)=>{setTimeout((()=>{const a=[...b],i=a.findIndex((t=>t.isActive));if(i>=t&&t>0){const e=a[i];a.splice(i,1),a.splice(t-1,0,e)}if(h(a.slice(0,t)),x(a.slice(t)),S.current&&I.current){const a=S.current.getBoundingClientRect().right;I.current.getBoundingClientRect().right>a&&z(t-1)}}),10)};i.useEffect((()=>{if(!s)return(()=>{const t=setInterval((()=>{if(S.current){const{clientWidth:a}=S.current;R(a),a&&clearInterval(t)}}),100)})(),window.addEventListener("resize",E),()=>window.removeEventListener("resize",E)}),[]),i.useEffect((()=>{s?h(b):z()}),[b]),i.useEffect((()=>{if(!s&&(P&&!w.length&&(()=>{if(S.current&&!s){const t=Array.from(S.current.children),a=[];t.forEach(((t,i)=>{const e=i?a[i-1]:0,n=t.clientWidth+e;a.push(n)})),y(a)}})(),w.length)){const t=w.filter((t=>t+100<P)).length;N(t),z(t)}}),[P,w]);const A=u.map((a=>t("div",{className:e("tab-item",{"tab-active":a.isActive}),onClick:()=>W(d,a.url),"data-qa-id":a.dataQa,"data-qa-props":a.dataQaProps,id:a.id,children:a.tabName},a.url)));return t("div",{className:e(s?"tab-navigation--vertical":"tab-navigation",l===p.SMALL&&"tab-navigation--small",l===p.LARGE&&"tab-navigation--large",l===p.FULLWIDTH&&"tab-navigation--full"),children:a("div",{className:e("wrapper",{"no-padding":m}),ref:S,children:[A,!!j.length&&t("div",{className:"tab-item",ref:I,"data-qa-id":g,children:t(n,{position:"bottom right",trigger:a("span",{className:"d-flex align-items-center",children:[c("common.more"),t("i",{className:"icon-chevron-down"})]}),children:t(r,{children:j.map(((a,i)=>{const e=t(o,{onClick:()=>W(d,a.url),children:a.tabName},`${a.tabName}-${i}`);return a.dataQa?t("div",{"data-qa-id":a.dataQa,"data-qa-props":a.dataQaProps,children:e}):e}))})})})]})})};export{d as NavigationTab};