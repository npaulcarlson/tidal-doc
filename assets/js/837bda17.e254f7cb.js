(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(209)),o={title:"Oscillators",id:"oscillators"},c={unversionedId:"reference/oscillators",id:"reference/oscillators",isDocsHomePage:!1,title:"Oscillators",description:"Oscillators are continuously varying patterns. Unless otherwise stated, oscillators give minimum values of 0 and maximum values of 1, and repeat once per cycle.",source:"@site/docs/reference/Oscillators.md",slug:"/reference/oscillators",permalink:"/docs/reference/oscillators",editUrl:"https://github.com/tidalcycles/tidal-doc/tree/main/docs/reference/Oscillators.md",version:"current",lastUpdatedBy:"Raphael Forment",lastUpdatedAt:1621864783,sidebar:"reference",previous:{title:"Mini Notation",permalink:"/docs/reference/mini_notation"},next:{title:"Synthesizers",permalink:"/docs/reference/synthesizers"}},s=[{value:"What is an oscillator?",id:"what-is-an-oscillator",children:[]},{value:"Using oscillators",id:"using-oscillators",children:[{value:"Periodic oscillators",id:"periodic-oscillators",children:[]},{value:"Non-periodic oscillators",id:"non-periodic-oscillators",children:[]}]},{value:"Scaling oscillators",id:"scaling-oscillators",children:[]},{value:"Speeding up/down oscillators",id:"speeding-updown-oscillators",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Oscillators are continuously varying patterns. Unless otherwise stated, oscillators give minimum values of ",Object(i.b)("inlineCode",{parentName:"p"},"0")," and maximum values of ",Object(i.b)("inlineCode",{parentName:"p"},"1"),", and repeat once per cycle."),Object(i.b)("h2",{id:"what-is-an-oscillator"},"What is an oscillator?"),Object(i.b)("p",null,"Oscillators are continuous patterns, which means they don't have any structure, and must be used with a pattern that does. For example ",Object(i.b)("inlineCode",{parentName:"p"},'d1 $ sound "bd*8" >| pan sine')," won't work well, because the ",Object(i.b)("inlineCode",{parentName:"p"},">|")," operator instructs ",Object(i.b)("strong",{parentName:"p"},"Tidal")," to take structure from the right, and ",Object(i.b)("inlineCode",{parentName:"p"},"sine")," doesn't have any structure, so ",Object(i.b)("strong",{parentName:"p"},"Tidal")," will simply trigger events at a fixed rate (depending on your configuration, this might be very fast). ",Object(i.b)("inlineCode",{parentName:"p"},'d1 $ sound "bd*8" |> pan sine')," is better, because ",Object(i.b)("inlineCode",{parentName:"p"},"|>")," takes structure from the left, so eight kick drums will play, with pan values sampled from the sine wave for each of the eight events. Where a pattern has the type ",Object(i.b)("inlineCode",{parentName:"p"},"Fractional a => Pattern a"),", that means that they can be used both as floating point numbers or (rational) time values. "),Object(i.b)("h2",{id:"using-oscillators"},"Using oscillators"),Object(i.b)("h3",{id:"periodic-oscillators"},"Periodic oscillators"),Object(i.b)("h4",{id:"sine"},"Sine"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"sine")," is a sinuso\xefdal wave. Playing this example, you should hear the sound slowly moving from your left to your right speaker:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*8" # pan sine\n')),Object(i.b)("h4",{id:"cosine"},"Cosine"),Object(i.b)("p",null,"A ",Object(i.b)("inlineCode",{parentName:"p"},"cosine")," wave, is a ",Object(i.b)("inlineCode",{parentName:"p"},"sine")," shifted in time by a quarter of a cycle. It sounds similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"sine")," above:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*8" # pan cosine # speed (sine + 0.5)\n')),Object(i.b)("h4",{id:"square"},"Square"),Object(i.b)("p",null,"A Square wave, starting at 0, then going up to 1 halfway through a cycle."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*8" # pan (cat [square, sine])\n')),Object(i.b)("h4",{id:"tri"},"Tri"),Object(i.b)("p",null,"A triangle wave, starting at 0, then linearly rising to 1 halfway through a cycle, then down again:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*16" # speed (slow 2 $ range 0.5 2 tri)\n')),Object(i.b)("h4",{id:"saw"},"Saw"),Object(i.b)("p",null,"A sawtooth wave starting at 0, then linearly rising to 1 over one cycle, then jumping back to 0:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*8" # pan (slow 2 saw)\n')),Object(i.b)("h4",{id:"isaw"},"Isaw"),Object(i.b)("p",null,"An inverted sawtooth, starting at 1, then linearly falling to 0 over one cycle, then jumping back to 1:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*8" # pan (slow 2 isaw)\n')),Object(i.b)("h3",{id:"non-periodic-oscillators"},"Non-periodic oscillators"),Object(i.b)("h4",{id:"rand"},"Rand"),Object(i.b)("p",null,"An infinitely detailed stream of (pseudo-)random numbers. See the ",Object(i.b)("inlineCode",{parentName:"p"},"rand")," reference page for more details."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "bd*8" # pan rand\n')),Object(i.b)("h4",{id:"irand"},"Irand"),Object(i.b)("p",null,"A function from an integer (giving the maximum) to a stream of (pseudo-)random integer numbers. For more details, head to the ",Object(i.b)("inlineCode",{parentName:"p"},"rand")," reference page:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $ sound "drum*8" # n (irand 8)\n')),Object(i.b)("h2",{id:"scaling-oscillators"},"Scaling oscillators"),Object(i.b)("p",null,"By default, the oscillators will output values scaled between ",Object(i.b)("inlineCode",{parentName:"p"},"0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"1"),". You might want to use bigger or smaller values. You might want, for instance, to modulate the frequency of a filter or select a random midi note between ",Object(i.b)("inlineCode",{parentName:"p"},"0")," and ",Object(i.b)("inlineCode",{parentName:"p"},"127"),". To do so, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"range")," function:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bass:5*8" # lpf (range 200 5000 $\xa0sine) \n')),Object(i.b)("h2",{id:"speeding-updown-oscillators"},"Speeding up/down oscillators"),Object(i.b)("p",null,"Oscillators are patterns! It means that you can speed them up or down using the same function as usual (",Object(i.b)("inlineCode",{parentName:"p"},"fast"),", ",Object(i.b)("inlineCode",{parentName:"p"},"slow"),", etc..): "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-c"},'d1 $\xa0s "bass:5*8" # lpf (slow 4 $ range 200 5000 $\xa0sine) \n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Notice that most of the time, the speed up/down will be in sync with your pattern. How convenient!"))))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(o,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);