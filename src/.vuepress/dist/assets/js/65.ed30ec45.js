(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{453:function(a,e,t){"use strict";t.r(e);var s=t(45),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"sql-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql-databases"}},[a._v("#")]),a._v(" SQL Databases")]),a._v(" "),t("p",[t("strong",[a._v("SQL - Structured Query Language")])]),a._v(" "),t("p",[a._v("SQL operates through simple, declarative statements. This keeps data accurate and secure, and helps maintain the integrity of databases, regardless of size.")]),a._v(" "),t("p",[a._v("https://www.codecademy.com/articles/sql-commands")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mariadb.com/kb/en/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MariaDBKnowledgeBase"),t("OutboundLink")],1)]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"list-of-sql-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-of-sql-commands"}},[a._v("#")]),a._v(" List of SQL Commands")]),a._v(" "),t("ul",[t("li",[a._v("Easy Language")]),a._v(" "),t("li",[a._v("not case sensitive")])]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.codecademy.com/articles/sql-commands",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.codecademy.com/articles/sql-commands"),t("OutboundLink")],1)]),a._v(" "),t("h3",{attrs:{id:"formatting-convention"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#formatting-convention"}},[a._v("#")]),a._v(" Formatting convention")]),a._v(" "),t("ul",[t("li",[a._v("Capitalizing commands is  a convention that makes queries easier to read")]),a._v(" "),t("li",[a._v("columns are named in lower case, and use underscores instead of spaces.")]),a._v(" "),t("li",[a._v("The table name itself also uses underscores instead of spaces (it's annoying to deal with spaces in SQL - but it's posiible)")]),a._v(" "),t("li",[a._v("putting double quotes around a word or phrase will indicate that you are referring to that column name.")])]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"statements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#statements"}},[a._v("#")]),a._v(" Statements")]),a._v(" "),t("p",[a._v("A statement is text that the database recognizes as a valid command. Statements always end in a semicolon "),t("code",[a._v(";")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n   column_1 data_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n   column_2 data_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" \n   column_3 data_type\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("ol",[t("li",[t("code",[a._v("CREATE TABLE")]),a._v(" is a "),t("em",[a._v("clause")]),a._v(". Clauses perform specific tasks in SQL. By convention, clauses are written in capital letters.")]),a._v(" "),t("li",[t("code",[a._v("table_name")]),a._v(" refers to the name of the table that the command is applied to.")]),a._v(" "),t("li",[t("code",[a._v("(column_1 data_type, column_2 data_type, column_3 data_type)")]),a._v(" is a "),t("em",[a._v("parameter")]),a._v(". A parameter is a list of columns, data types, or values that are passed to a clause as an argument.")])]),a._v(" "),t("p",[a._v("A statement can be written all on one line, or split up across multiple lines if it makes it easier to read.")]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"basic-commands"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-commands"}},[a._v("#")]),a._v(" Basic Commands")]),a._v(" "),t("h3",{attrs:{id:"comment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#comment"}},[a._v("#")]),a._v(" Comment")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("# comment in SQL")])]),a._v(" "),t("li",[a._v("s multiple lines using "),t("code",[a._v("/*")]),a._v(" to begin the comment and "),t("code",[a._v("*/")]),a._v(" to close it")])]),a._v(" "),t("h3",{attrs:{id:"create-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-database"}},[a._v("#")]),a._v(" Create a Database")]),a._v(" "),t("p",[a._v("To create a new database, use this command:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CREATE DATABASE testDB;\n")])])]),t("p",[a._v("In general, the syntax is like this:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" CREATE DATABASE DatabaseName;\n")])])]),t("p",[a._v("You can write all SQL statements in lowercase as well. Convention: use uppercase, so that you see better which words are SQL keywords.")]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"show-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-databases"}},[a._v("#")]),a._v(" Show Databases")]),a._v(" "),t("p",[a._v("Show all databases:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SHOW DATABASES;\n")])])]),t("hr"),a._v(" "),t("h3",{attrs:{id:"select-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-a-database"}},[a._v("#")]),a._v(" Select a Database")]),a._v(" "),t("p",[a._v("Select a database to work with:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("USE test;\n")])])]),t("hr"),a._v(" "),t("h3",{attrs:{id:"show-selected-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-selected-database"}},[a._v("#")]),a._v(" Show Selected Database")]),a._v(" "),t("p",[a._v("Show which database is selected:")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SELECT database();\n")])])]),t("h3",{attrs:{id:"delete-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-database"}},[a._v("#")]),a._v(" Delete Database")]),a._v(" "),t("hr"),a._v(" "),t("p",[t("strong",[a._v("This cannot be reversed!")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("DROP DATABASE bufg;\n")])])]),t("hr")])}),[],!1,null,null,null);e.default=r.exports}}]);