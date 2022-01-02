(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{507:function(e,a,t){"use strict";t.r(a);var i=t(45),n=Object(i.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#variables"}},[e._v("#")]),e._v(" Variables")]),e._v(" "),t("p",[e._v("A variable is a container for a value. You can:")]),e._v(" "),t("ul",[t("li",[e._v("Create a variable with a descriptive name.")]),e._v(" "),t("li",[e._v("Store or update information stored in a variable.")]),e._v(" "),t("li",[e._v("Reference or “get” information stored in a variable.")])]),e._v(" "),t("table",[t("thead",[t("tr",[t("th"),e._v(" "),t("th")])]),e._v(" "),t("tbody",[t("tr",[t("td",[t("code",[e._v("let name")])]),e._v(" "),t("td",[e._v("declaration. Value: '"),t("code",[e._v("undefined")]),e._v("'. when using let, a variable with the same name can only be declared once (this is a good thing!)")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("name = 'Max'")])]),e._v(" "),t("td",[e._v("attribution")])]),e._v(" "),t("tr",[t("td",[t("code",[e._v("let name = 'Max'")])]),e._v(" "),t("td",[e._v("initializing")])])])]),e._v(" "),t("ul",[t("li",[t("code",[e._v("var")]),e._v(" - declares/initilizes the variable - pre-ES6")]),e._v(" "),t("li",[t("code",[e._v("let")]),e._v(" - is used in web development, an alternative to "),t("code",[e._v("var")]),e._v(", but stricter (prefered)")]),e._v(" "),t("li",[t("code",[e._v("const")]),e._v(" - is used for constants, the content can’t change (must be assigned a value when declared). A common practice when naming constants is to use all uppercase letters, with words separated by an underscore. "),t("code",[e._v('const FAV_PET = "Dogs";')])]),e._v(" "),t("li",[e._v("When JavaScript variables are declared, they have an "),t("strong",[e._v("initial value")]),e._v(" of "),t("strong",[e._v("undefined")]),e._v(". If you do a mathematical operation on an undefined variable your result will be "),t("strong",[e._v("NaN")]),e._v(' which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".')]),e._v(" "),t("li",[e._v("Create multiple Variables at once: "),t("code",[e._v("let a = 2, b = 3, c = 4;")])])]),e._v(" "),t("h2",{attrs:{id:"hoisting"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hoisting"}},[e._v("#")]),e._v(" Hoisting")]),e._v(" "),t("p",[e._v("Before any JavaScript code is executed, all variables declared with "),t("code",[e._v("var")]),e._v(' are "hoisted"')]),e._v(" "),t("h2",{attrs:{id:"let-and-const"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#let-and-const"}},[e._v("#")]),e._v(" let and const")]),e._v(" "),t("p",[e._v("Variables declared with "),t("code",[e._v("let")]),e._v(" and "),t("code",[e._v("const")]),e._v(" eliminate this specific issue of hoisting because they're scoped "),t("strong",[e._v("to the block")]),e._v(", not to the function.")]),e._v(" "),t("p",[t("code",[e._v("let")]),e._v(" and "),t("code",[e._v("const")]),e._v(" also have some other interesting properties.")]),e._v(" "),t("ul",[t("li",[e._v("Variables declared with "),t("code",[e._v("let")]),e._v(" can be reassigned, but can't be redeclared in the same scope.")]),e._v(" "),t("li",[e._v("Variables declared with "),t("code",[e._v("const")]),e._v(" must be assigned an initial value, but can't be redeclared in the same scope, and can't be reassigned.")])]),e._v(" "),t("h2",{attrs:{id:"scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scope"}},[e._v("#")]),e._v(" Scope")]),e._v(" "),t("ul",[t("li",[e._v("Scope determines the accessibility (visibility) of these variables.")]),e._v(" "),t("li",[e._v("JavaScript has 'function scope': Each function creates its own new scope.")]),e._v(" "),t("li",[e._v("there are two types of scope: Local & Global Scope")])]),e._v(" "),t("h3",{attrs:{id:"local-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#local-scope"}},[e._v("#")]),e._v(" Local Scope")]),e._v(" "),t("ul",[t("li",[e._v("Variables declared inside a function are not accessible (visible) from outside the function. They become local to the function.")]),e._v(" "),t("li",[e._v("Local variables have function scope: They can only be accessed from within the function.")]),e._v(" "),t("li",[e._v("Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.")]),e._v(" "),t("li",[e._v("Local variables are created when a function starts, and deleted when the function is completed.")]),e._v(" "),t("li",[e._v("block scope. When a variable is defined inside a block, it is only accessible to the code within the curly braces {}.")])]),e._v(" "),t("h3",{attrs:{id:"global-scope"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#global-scope"}},[e._v("#")]),e._v(" Global Scope")]),e._v(" "),t("ul",[t("li",[e._v("A variable declared outside a function becomes global.")]),e._v(" "),t("li",[e._v("A global variable has global scope: All scripts and functions on a web page can access it")]),e._v(" "),t("li",[e._v("it’s best practice to not define variables in the global scope -> having too many global variables can cause problems -> Scope pollution")]),e._v(" "),t("li",[e._v("Global namespace is the space in our code that contains globally scoped information.")])])])}),[],!1,null,null,null);a.default=n.exports}}]);