"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[691],{4263:function(e,r,o){o.r(r),o.d(r,{Head:function(){return pe},default:function(){return ue}});var t=o(959);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var o=arguments[r];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},n.apply(this,arguments)}function l(...e){return r=>e.forEach((e=>function(e,r){"function"==typeof e?e(r):null!=e&&(e.current=r)}(e,r)))}const i=(0,t.forwardRef)(((e,r)=>{const{children:o,...l}=e,i=t.Children.toArray(o),a=i.find(c);if(a){const e=a.props.children,o=i.map((r=>r===a?t.Children.count(e)>1?t.Children.only(null):(0,t.isValidElement)(e)?e.props.children:null:r));return(0,t.createElement)(s,n({},l,{ref:r}),(0,t.isValidElement)(e)?(0,t.cloneElement)(e,void 0,o):null)}return(0,t.createElement)(s,n({},l,{ref:r}),o)}));i.displayName="Slot";const s=(0,t.forwardRef)(((e,r)=>{const{children:o,...n}=e;return(0,t.isValidElement)(o)?(0,t.cloneElement)(o,{...d(n,o.props),ref:r?l(r,o.ref):o.ref}):t.Children.count(o)>1?t.Children.only(null):null}));s.displayName="SlotClone";const a=({children:e})=>(0,t.createElement)(t.Fragment,null,e);function c(e){return(0,t.isValidElement)(e)&&e.type===a}function d(e,r){const o={...r};for(const t in r){const n=e[t],l=r[t];/^on[A-Z]/.test(t)?n&&l?o[t]=(...e)=>{l(...e),n(...e)}:n&&(o[t]=n):"style"===t?o[t]={...n,...l}:"className"===t&&(o[t]=[n,l].filter(Boolean).join(" "))}return{...e,...o}}function u(e){var r,o,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(o=u(e[r]))&&(t&&(t+=" "),t+=o);else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function p(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=u(e))&&(t&&(t+=" "),t+=r);return t}const f=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,b=p;function m(e){var r,o,t="";if("string"==typeof e||"number"==typeof e)t+=e;else if("object"==typeof e)if(Array.isArray(e)){var n=e.length;for(r=0;r<n;r++)e[r]&&(o=m(e[r]))&&(t&&(t+=" "),t+=o)}else for(o in e)e[o]&&(t&&(t+=" "),t+=o);return t}function g(){for(var e,r,o=0,t="",n=arguments.length;o<n;o++)(e=arguments[o])&&(r=m(e))&&(t&&(t+=" "),t+=r);return t}const h="-";function v(e){const r=function(e){const{theme:r,prefix:o}=e,t={nextPart:new Map,validators:[]},n=function(e,r){if(!r)return e;return e.map((([e,o])=>[e,o.map((e=>"string"==typeof e?r+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,o])=>[r+e,o]))):e))]))}(Object.entries(e.classGroups),o);return n.forEach((([e,o])=>{w(o,t,e,r)})),t}(e),{conflictingClassGroups:o,conflictingClassGroupModifiers:t}=e;return{getClassGroupId:function(e){const o=e.split(h);return""===o[0]&&1!==o.length&&o.shift(),y(o,r)||function(e){if(x.test(e)){const r=x.exec(e)[1],o=r?.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){const n=o[e]||[];return r&&t[e]?[...n,...t[e]]:n}}}function y(e,r){if(0===e.length)return r.classGroupId;const o=e[0],t=r.nextPart.get(o),n=t?y(e.slice(1),t):void 0;if(n)return n;if(0===r.validators.length)return;const l=e.join(h);return r.validators.find((({validator:e})=>e(l)))?.classGroupId}const x=/^\[(.+)\]$/;function w(e,r,o,t){e.forEach((e=>{if("string"!=typeof e){if("function"==typeof e)return e.isThemeGetter?void w(e(t),r,o,t):void r.validators.push({validator:e,classGroupId:o});Object.entries(e).forEach((([e,n])=>{w(n,k(r,e),o,t)}))}else{(""===e?r:k(r,e)).classGroupId=o}}))}function k(e,r){let o=e;return r.split(h).forEach((e=>{o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)})),o}function z(e){if(e<1)return{get:()=>{},set:()=>{}};let r=0,o=new Map,t=new Map;function n(n,l){o.set(n,l),r++,r>e&&(r=0,t=o,o=new Map)}return{get(e){let r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set(e,r){o.has(e)?o.set(e,r):n(e,r)}}}const C="!";function j(e){const r=e.separator,o=1===r.length,t=r[0],n=r.length;return function(e){const l=[];let i,s=0,a=0;for(let u=0;u<e.length;u++){let c=e[u];if(0===s){if(c===t&&(o||e.slice(u,u+n)===r)){l.push(e.slice(a,u)),a=u+n;continue}if("/"===c){i=u;continue}}"["===c?s++:"]"===c&&s--}const c=0===l.length?e:e.substring(a),d=c.startsWith(C);return{modifiers:l,hasImportantModifier:d,baseClassName:d?c.substring(1):c,maybePostfixModifierPosition:i&&i>a?i-a:void 0}}}const N=/\s+/;function E(){let e,r,o=0,t="";for(;o<arguments.length;)(e=arguments[o++])&&(r=G(e))&&(t&&(t+=" "),t+=r);return t}function G(e){if("string"==typeof e)return e;let r,o="";for(let t=0;t<e.length;t++)e[t]&&(r=G(e[t]))&&(o&&(o+=" "),o+=r);return o}function S(e,...r){let o,t,n,l=function(s){const a=r.reduce(((e,r)=>r(e)),e());return o=function(e){return{cache:z(e.cacheSize),splitModifiers:j(e),...v(e)}}(a),t=o.cache.get,n=o.cache.set,l=i,i(s)};function i(e){const r=t(e);if(r)return r;const l=function(e,r){const{splitModifiers:o,getClassGroupId:t,getConflictingClassGroupIds:n}=r,l=new Set;return e.trim().split(N).map((e=>{const{modifiers:r,hasImportantModifier:n,baseClassName:l,maybePostfixModifierPosition:i}=o(e);let s=t(i?l.substring(0,i):l),a=Boolean(i);if(!s){if(!i)return{isTailwindClass:!1,originalClassName:e};if(s=t(l),!s)return{isTailwindClass:!1,originalClassName:e};a=!1}const c=function(e){if(e.length<=1)return e;const r=[];let o=[];return e.forEach((e=>{"["===e[0]?(r.push(...o.sort(),e),o=[]):o.push(e)})),r.push(...o.sort()),r}(r).join(":");return{isTailwindClass:!0,modifierId:n?c+C:c,classGroupId:s,originalClassName:e,hasPostfixModifier:a}})).reverse().filter((e=>{if(!e.isTailwindClass)return!0;const{modifierId:r,classGroupId:o,hasPostfixModifier:t}=e,i=r+o;return!l.has(i)&&(l.add(i),n(o,t).forEach((e=>l.add(r+e))),!0)})).reverse().map((e=>e.originalClassName)).join(" ")}(e,o);return n(e,l),l}return function(){return l(E.apply(null,arguments))}}function I(e){const r=r=>r[e]||[];return r.isThemeGetter=!0,r}const M=/^\[(?:([a-z-]+):)?(.+)\]$/i,P=/^\d+\/\d+$/,O=new Set(["px","full","screen"]),A=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,R=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,T=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,V=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;function W(e){return B(e)||O.has(e)||P.test(e)}function $(e){return Y(e,"length",ee)}function B(e){return Boolean(e)&&!Number.isNaN(Number(e))}function q(e){return Y(e,"number",B)}function H(e){return Boolean(e)&&Number.isInteger(Number(e))}function D(e){return e.endsWith("%")&&B(e.slice(0,-1))}function F(e){return M.test(e)}function J(e){return A.test(e)}const Z=new Set(["length","size","percentage"]);function _(e){return Y(e,Z,re)}function K(e){return Y(e,"position",re)}const L=new Set(["image","url"]);function Q(e){return Y(e,L,te)}function U(e){return Y(e,"",oe)}function X(){return!0}function Y(e,r,o){const t=M.exec(e);return!!t&&(t[1]?"string"==typeof r?t[1]===r:r.has(t[1]):o(t[2]))}function ee(e){return R.test(e)}function re(){return!1}function oe(e){return T.test(e)}function te(e){return V.test(e)}Symbol.toStringTag;function ne(){const e=I("colors"),r=I("spacing"),o=I("blur"),t=I("brightness"),n=I("borderColor"),l=I("borderRadius"),i=I("borderSpacing"),s=I("borderWidth"),a=I("contrast"),c=I("grayscale"),d=I("hueRotate"),u=I("invert"),p=I("gap"),f=I("gradientColorStops"),b=I("gradientColorStopPositions"),m=I("inset"),g=I("margin"),h=I("opacity"),v=I("padding"),y=I("saturate"),x=I("scale"),w=I("sepia"),k=I("skew"),z=I("space"),C=I("translate"),j=()=>["auto",F,r],N=()=>[F,r],E=()=>["",W,$],G=()=>["auto",B,F],S=()=>["","0",F],M=()=>[B,q],P=()=>[B,F];return{cacheSize:500,separator:":",theme:{colors:[X],spacing:[W,$],blur:["none","",J,F],brightness:M(),borderColor:[e],borderRadius:["none","","full",J,F],borderSpacing:N(),borderWidth:E(),contrast:M(),grayscale:S(),hueRotate:P(),invert:S(),gap:N(),gradientColorStops:[e],gradientColorStopPositions:[D,$],inset:j(),margin:j(),opacity:M(),padding:N(),saturate:M(),scale:M(),sepia:S(),skew:P(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",F]}],container:["container"],columns:[{columns:[J]}],"break-after":[{"break-after":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-before":[{"break-before":["auto","avoid","all","avoid-page","page","left","right","column"]}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",F]}],overflow:[{overflow:["auto","hidden","clip","visible","scroll"]}],"overflow-x":[{"overflow-x":["auto","hidden","clip","visible","scroll"]}],"overflow-y":[{"overflow-y":["auto","hidden","clip","visible","scroll"]}],overscroll:[{overscroll:["auto","contain","none"]}],"overscroll-x":[{"overscroll-x":["auto","contain","none"]}],"overscroll-y":[{"overscroll-y":["auto","contain","none"]}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",H,F]}],basis:[{basis:j()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",F]}],grow:[{grow:S()}],shrink:[{shrink:S()}],order:[{order:["first","last","none",H,F]}],"grid-cols":[{"grid-cols":[X]}],"col-start-end":[{col:["auto",{span:["full",H,F]},F]}],"col-start":[{"col-start":G()}],"col-end":[{"col-end":G()}],"grid-rows":[{"grid-rows":[X]}],"row-start-end":[{row:["auto",{span:[H,F]},F]}],"row-start":[{"row-start":G()}],"row-end":[{"row-end":G()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",F]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",F]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal","start","end","center","between","around","evenly","stretch"]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal","start","end","center","between","around","evenly","stretch","baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":["start","end","center","between","around","evenly","stretch","baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[z]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[z]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",F,r]}],"min-w":[{"min-w":[F,r,"min","max","fit"]}],"max-w":[{"max-w":[F,r,"none","full","min","max","fit","prose",{screen:[J]},J]}],h:[{h:[F,r,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[F,r,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[F,r,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[F,r,"auto","min","max","fit"]}],"font-size":[{text:["base",J,$]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",q]}],"font-family":[{font:[X]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",F]}],"line-clamp":[{"line-clamp":["none",B,q]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",W,F]}],"list-image":[{"list-image":["none",F]}],"list-style-type":[{list:["none","disc","decimal",F]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:["solid","dashed","dotted","double","none","wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",W,$]}],"underline-offset":[{"underline-offset":["auto",W,F]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",F]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",F]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top",K]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",_]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Q]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[f]}],"gradient-via":[{via:[f]}],"gradient-to":[{to:[f]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:["solid","dashed","dotted","double","none","hidden"]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:["solid","dashed","dotted","double","none"]}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["","solid","dashed","dotted","double","none"]}],"outline-offset":[{"outline-offset":[W,F]}],"outline-w":[{outline:[W,$]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:E()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[W,$]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",J,U]}],"shadow-color":[{shadow:[X]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],"bg-blend":[{"bg-blend":["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[a]}],"drop-shadow":[{"drop-shadow":["","none",J,F]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[u]}],saturate:[{saturate:[y]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[a]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[u]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",F]}],duration:[{duration:P()}],ease:[{ease:["linear","in","out","in-out",F]}],delay:[{delay:P()}],animate:[{animate:["none","spin","ping","pulse","bounce",F]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[H,F]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[k]}],"skew-y":[{"skew-y":[k]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",F]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",F]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",F]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[W,$,q]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}const le=S(ne);function ie(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return le(g(r))}const se=(ae="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",ce={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var r;if(null==(null==ce?void 0:ce.variants))return b(ae,null==e?void 0:e.class,null==e?void 0:e.className);const{variants:o,defaultVariants:t}=ce,n=Object.keys(o).map((r=>{const n=null==e?void 0:e[r],l=null==t?void 0:t[r];if(null===n)return null;const i=f(n)||f(l);return o[r][i]})),l=e&&Object.entries(e).reduce(((e,r)=>{let[o,t]=r;return void 0===t||(e[o]=t),e}),{}),i=null==ce||null===(r=ce.compoundVariants)||void 0===r?void 0:r.reduce(((e,r)=>{let{class:o,className:n,...i}=r;return Object.entries(i).every((e=>{let[r,o]=e;return Array.isArray(o)?o.includes({...t,...l}[r]):{...t,...l}[r]===o}))?[...e,o,n]:e}),[]);return b(ae,n,i,null==e?void 0:e.class,null==e?void 0:e.className)});var ae,ce;const de=t.forwardRef(((e,r)=>{let{className:o,variant:n,size:l,asChild:s=!1,...a}=e;const c=s?i:"button";return t.createElement(c,Object.assign({className:ie(se({variant:n,size:l,className:o})),ref:r},a))}));function ue(){return t.createElement("main",null,t.createElement(de,{className:"font-bold text-md bg-indigo-300 rounded-lg p-1.5"},"Hello World"))}function pe(){return t.createElement("title",null,"Johnny, an Ambitious Web Developer.")}de.displayName="Button"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-ebb277d671604868f483.js.map