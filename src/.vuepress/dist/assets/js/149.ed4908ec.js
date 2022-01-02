(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{554:function(a,s,t){"use strict";t.r(s);var e=t(45),n=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"vue-dynamic-styling"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vue-dynamic-styling"}},[a._v("#")]),a._v(" Vue Dynamic Styling")]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"special-syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#special-syntax"}},[a._v("#")]),a._v(" Special Syntax")]),a._v(" "),t("p",[t("code",[a._v(":style")]),a._v(" and "),t("code",[a._v(":class")]),a._v(" use a "),t("strong",[a._v("special syntax")]),a._v(" for binding: feed an Object.")]),a._v(" "),t("p",[a._v("Inside of this expression, this style object is all JavaScript. So we have to use camelCased unless we want to use ‘kebab-cased’ in quotes")]),a._v(" "),t("h4",{attrs:{id:"camelcase"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#camelcase"}},[a._v("#")]),a._v(" camelCase")]),a._v(" "),t("p",[t("em",[a._v("recommended")])]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"{ borderColor: 'red' }\"")]),a._v("\n")])])]),t("p",[a._v("Vue takes that information and converts it into the code:"),t("code",[a._v('style="{ borderColor: red }"')])]),a._v(" "),t("h4",{attrs:{id:"kebap-case"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kebap-case"}},[a._v("#")]),a._v(" kebap-case")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"{ 'border-color': 'red'}\"")]),a._v("\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"style-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#style-binding"}},[a._v("#")]),a._v(" Style-binding")]),a._v(" "),t("p",[a._v("Disadvantage of inline-styles: they overwrite all other style -> usually avoid "),t("code",[a._v("style")]),a._v(" and use "),t("code",[a._v("class")]),a._v(" instead")]),a._v(" "),t("h3",{attrs:{id:"ternary-expression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ternary-expression"}},[a._v("#")]),a._v(" Ternary expression")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"{ borderColor: conditionIsTrue ? 'red' : 'blue'}\"")]),a._v("\n")])])]),t("h3",{attrs:{id:"entire-style-object"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#entire-style-object"}},[a._v("#")]),a._v(" Entire Style-object")]),a._v(" "),t("p",[a._v("we can bind to an entire style object that lives within our data.")]),a._v(" "),t("p",[a._v("-> change inline-styling dynamically")]),a._v(" "),t("div",{staticClass:"language-vue extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(":style")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("styles"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n\n//// \ndata() { \n\treturn { \n\t\tstyles: { \n\t\tcolor: 'red', \n\t\tfontSize: '14px' }\n\t} \n}\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"class-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#class-binding"}},[a._v("#")]),a._v(" Class Binding")]),a._v(" "),t("h3",{attrs:{id:"change-classes-dynamically"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#change-classes-dynamically"}},[a._v("#")]),a._v(" change classes dynamically")]),a._v(" "),t("p",[a._v("-> class is conditionally added to existing classes if true")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\" conditionIsTrue ? 'active' :'' \"")]),a._v("\n")])])]),t("p",[a._v("nicer syntax")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"{ active: conditionIsTrue }"')]),a._v("\n")])])]),t("p",[a._v("the class 'active' is added, if the condition is true")]),a._v(" "),t("h5",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[a._v("#")]),a._v(" Examples")]),a._v(" "),t("div",{staticClass:"language-html extra-class"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("li")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("v-for")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("book in books"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(":class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{ fav: book.isFav }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("p",[a._v('-> adds the class "fav" if book.isFav is true')]),a._v(" "),t("div",{staticClass:"language-vue extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("span")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(":class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("'")]),a._v("text-green-600 font-bold"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("'")]),a._v(": entry.HasWon }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("..."),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("span")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v(" \n")])])]),t("h3",{attrs:{id:"ternary-operators"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ternary-operators"}},[a._v("#")]),a._v(" Ternary Operators")]),a._v(" "),t("p",[a._v("Use in-line ternary operators to add different classes based upon a condition:")]),a._v(" "),t("div",{staticClass:"language-vue extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(":class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("{ isActive ? activeClass : "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("'")]),a._v(" }"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("h3",{attrs:{id:"classes-and-computed-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#classes-and-computed-properties"}},[a._v("#")]),a._v(" Classes and computed properties")]),a._v(" "),t("p",[a._v("you can use computed properties (esp. for more complicated logic):")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[a._v("  computed"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("boxAClasses")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" active"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("conditionIsTrue "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),t("div",{staticClass:"language-vue extra-class"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v(":class")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("boxAClasses"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),t("h3",{attrs:{id:"dynamic-classes-array-syntax"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-classes-array-syntax"}},[a._v("#")]),a._v(" Dynamic Classes - Array Syntax")]),a._v(" "),t("p",[a._v("Alternative: pass an Array. esp for multiple classes")]),a._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("\"['demo', {active: boxSelected}]\"")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);