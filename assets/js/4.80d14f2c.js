(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,e,n){},176:function(t,e,n){"use strict";var o=n(173);n.n(o).a},184:function(t,e,n){"use strict";n.r(e);n(73);var o={data:function(){return{markdownText:"### Hello, Vue Showdown! :tada: \n\nInput your markdown here and get the HTML right now!\n\nSet the `emoji` option below to enable emoji parsing! :smile:",options:{omitExtraWLInCodeBlocks:!1,noHeaderId:!1,prefixHeaderId:!1,rawPrefixHeaderId:!1,ghCompatibleHeaderId:!1,rawHeaderId:!1,headerLevelStart:!1,parseImgDimensions:!1,simplifiedAutoLink:!1,excludeTrailingPunctuationFromURLs:!1,literalMidWordUnderscores:!1,literalMidWordAsterisks:!1,strikethrough:!1,tables:!1,tablesHeaderId:!1,ghCodeBlocks:!0,tasklists:!1,smoothLivePreview:!1,smartIndentationFix:!1,disableForced4SpacesIndentedSublists:!1,simpleLineBreaks:!1,requireSpaceBeforeHeadingText:!1,ghMentions:!1,ghMentionsLink:"https://github.com/{u}",encodeEmails:!0,openLinksInNewWindow:!1,backslashEscapesHTMLTags:!1,emoji:!1,underline:!1,completeHTMLDocument:!1,metadata:!1,splitAdjacentBlockquotes:!1}}},computed:{contentRows:function(){return this.markdownText.split("\n").length-1},rows:function(){return this.contentRows<3?5:this.contentRows+2}}},r=(n(176),n(0)),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.markdownText,expression:"markdownText"}],staticClass:"markdown-input",attrs:{placeholder:"Input your markdown here",rows:t.rows},domProps:{value:t.markdownText},on:{input:function(e){e.target.composing||(t.markdownText=e.target.value)}}}),t._v(" "),t._m(2),t._v(" "),n("section",{staticClass:"markdown-output"},[n("VueShowdown",{attrs:{markdown:t.markdownText,options:t.options}})],1),t._v(" "),t._m(3),t._v(" "),n("ul",{staticClass:"markdown-options"},t._l(Object.keys(t.options),function(e){return n("li",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.options[e],expression:"options[opt]"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.options[e])?t._i(t.options[e],null)>-1:t.options[e]},on:{change:function(n){var o=t.options[e],r=n.target,s=!!r.checked;if(Array.isArray(o)){var a=t._i(o,null);r.checked?a<0&&t.$set(t.options,e,o.concat([null])):a>-1&&t.$set(t.options,e,o.slice(0,a).concat(o.slice(a+1)))}else t.$set(t.options,e,s)}}}),t._v(" "),n("span",[t._v(t._s(e))])])}))])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"playground"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#playground","aria-hidden":"true"}},[this._v("#")]),this._v(" Playground 🏃")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"input-your-markdown-here"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#input-your-markdown-here","aria-hidden":"true"}},[this._v("#")]),this._v(" Input your markdown here")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"output-html-here"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#output-html-here","aria-hidden":"true"}},[this._v("#")]),this._v(" Output HTML here")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"set-showdown-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-showdown-options","aria-hidden":"true"}},[this._v("#")]),this._v(" Set showdown options")])}],!1,null,"7c3f0df6",null);e.default=s.exports}}]);