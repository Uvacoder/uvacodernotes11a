(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{467:function(a,e,t){"use strict";t.r(e);var s=t(45),r=Object(s.a)({},(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"manage-sql-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-sql-db"}},[a._v("#")]),a._v(" Manage SQL-DB")]),a._v(" "),t("h2",{attrs:{id:"terminal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#terminal"}},[a._v("#")]),a._v(" Terminal")]),a._v(" "),t("h3",{attrs:{id:"mariadb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mariadb"}},[a._v("#")]),a._v(" MariaDB")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mariadb.com/kb/en/",target:"_blank",rel:"noopener noreferrer"}},[a._v("MariaDBKnowledgeBase"),t("OutboundLink")],1)]),a._v(" "),t("p",[t("a",{attrs:{href:"https://mariadb.com/kb/en/installing-mariadb-on-macos-using-homebrew/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Install MariaDB"),t("OutboundLink")],1)]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[a._v("brew services "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("start")]),a._v(" mariadb\nbrew services stop mariadb\nbrew services restart mariadb\n")])])]),t("hr"),a._v(" "),t("p",[a._v("check, if running: acivity monitor")]),a._v(" "),t("p",[a._v("start mariaDB: "),t("code",[a._v("brew services start mariadb")])]),a._v(" "),t("p",[a._v("-› now mysql is alway running - uses little memory")]),a._v(" "),t("p",[t("code",[a._v("mysql -u root")]),a._v(" -> command line application")]),a._v(" "),t("p",[a._v("control-c -> quit")]),a._v(" "),t("p",[t("code",[a._v("mysql -u root -p")]),a._v(" -> passwort")]),a._v(" "),t("p",[t("code",[a._v("mysql -u [username]")]),a._v(" (sh)")]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" MySQL")]),a._v(" "),t("ul",[t("li",[a._v("install community-server, workbench")]),a._v(" "),t("li",[a._v("legacy encryption")]),a._v(" "),t("li",[a._v("root-user-pw:")])]),a._v(" "),t("hr"),a._v(" "),t("ul",[t("li",[a._v("localhost 3306")])]),a._v(" "),t("hr"),a._v(" "),t("h2",{attrs:{id:"create-user-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-user-example"}},[a._v("#")]),a._v(" Create User Example")]),a._v(" "),t("p",[a._v("admin 12345678")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CREATE USER 'admin'@'localhost' IDENTIFIED BY '12345678';\n\nGRANT ALL PRIVILEGES ON *.* TO 'admin'@'localhost' WITH GRANT OPTION;\n")])])]),t("hr"),a._v(" "),t("h3",{attrs:{id:"statements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#statements"}},[a._v("#")]),a._v(" Statements")]),a._v(" "),t("p",[a._v("Statements always end in a semicolon "),t("code",[a._v(";")]),a._v(".")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" table_name "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n   column_1 data_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   column_2 data_type"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n   column_3 data_type\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("p",[a._v("Let’s break down the components of a statement:")]),a._v(" "),t("ol",[t("li",[t("code",[a._v("CREATE TABLE")]),a._v(" is a "),t("em",[a._v("clause")]),a._v(".")]),a._v(" "),t("li",[t("code",[a._v("table_name")]),a._v(" refers to the name of the table")]),a._v(" "),t("li",[t("code",[a._v("(column_1 data_type, column_2 data_type, column_3 data_type)")]),a._v(" is a "),t("em",[a._v("parameter")]),a._v(". Here, the parameter is a list of column names and the associated data type.")])]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"create-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-database"}},[a._v("#")]),a._v(" Create a Database")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SQL> CREATE DATABASE testDB;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(" CREATE DATABASE DatabaseName;\n")])])]),t("h3",{attrs:{id:"create"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[a._v("#")]),a._v(" "),t("code",[a._v("CREATE")])]),a._v(" "),t("p",[a._v("To create a new table")]),a._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TABLE")]),a._v(" celebs "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n  id "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTEGER")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  name "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEXT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  age "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("INTEGER")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),t("blockquote",[t("p",[a._v("Eine db kann mehrere Tables enthalten:")]),a._v(" "),t("p",[a._v("[people]")]),a._v(" "),t("p",[a._v("id (PK) - name - city - age - role")]),a._v(" "),t("p",[a._v("[classes]")]),a._v(" "),t("p",[a._v("id (PK) - name - length - description")])]),a._v(" "),t("hr"),a._v(" "),t("h3",{attrs:{id:"show-databases"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-databases"}},[a._v("#")]),a._v(" Show Databases")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SQL> SHOW DATABASES;\n")])])]),t("h3",{attrs:{id:"select-a-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-a-database"}},[a._v("#")]),a._v(" Select a Database")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SQL> USE test;\nDatabase changed\n")])])]),t("h3",{attrs:{id:"show-selected-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-selected-database"}},[a._v("#")]),a._v(" Show Selected Database")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("SQL> SELECT database();\n")])])]),t("h2",{attrs:{id:"tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tables"}},[a._v("#")]),a._v(" Tables")]),a._v(" "),t("h3",{attrs:{id:"create-a-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-table"}},[a._v("#")]),a._v(" Create a Table")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("CREATE TABLE table_name(\n\tcolumn1 datatype,\n\tcolumn2 datatype,\n\tcolumn3 datatype,\n\t.....\n\tcolumnN datatype,\n\tPRIMARY KEY( one or more columns )\n);\n")])])]),t("hr"),a._v(" "),t("h2",{attrs:{id:"primary-key-pk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#primary-key-pk"}},[a._v("#")]),a._v(" Primary Key (PK)")]),a._v(" "),t("p",[a._v("Unique ID - für jeden Datensatz")]),a._v(" "),t("hr"),a._v(" "),t("h1",{attrs:{id:"sequel-ace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sequel-ace"}},[a._v("#")]),a._v(" Sequel Ace")]),a._v(" "),t("p",[a._v("(Sequel Pro is old version)")]),a._v(" "),t("p",[a._v("-> graphical Interface. Creates the sql-code. No Undo!")]),a._v(" "),t("ul",[t("li",[a._v("use 127.0.0.1 as Host in SequelAce")])]),a._v(" "),t("h3",{attrs:{id:"names-fields-databases-tables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#names-fields-databases-tables"}},[a._v("#")]),a._v(" Names (fields, databases, tables)")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("not case sensitive")])]),a._v(" "),t("li",[t("p",[a._v("-> convention: always lowercase, snake_case")])]),a._v(" "),t("li",[t("p",[a._v("space are possible, but not advised")])])]),a._v(" "),t("h3",{attrs:{id:"new-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#new-database"}},[a._v("#")]),a._v(" New database")]),a._v(" "),t("ul",[t("li",[a._v("database encoding -> utf8 (like html).Make sure, that Charset of HTML-Page gleich is the same as the Database")]),a._v(" "),t("li",[a._v("collation- ci (case insensitive)")]),a._v(" "),t("li",[a._v("-> default is ok")])]),a._v(" "),t("h3",{attrs:{id:"backup-database"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backup-database"}},[a._v("#")]),a._v(" backup database")]),a._v(" "),t("p",[a._v("sequel pro: export")]),a._v(" "),t("h3",{attrs:{id:"import"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#import"}},[a._v("#")]),a._v(" import")]),a._v(" "),t("p",[a._v('in sequel pro-> select "run all queries "')]),a._v(" "),t("p",[a._v("DropTable -> löscht alte und erzeugt eine neue table bein importieren?")]),a._v(" "),t("h3",{attrs:{id:"format-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#format-sql"}},[a._v("#")]),a._v(" format sql")]),a._v(" "),t("hr"),a._v(" "),t("h4",{attrs:{id:"varchar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#varchar"}},[a._v("#")]),a._v(" varchar")]),a._v(" "),t("p",[a._v("für bis zu 1000 zeichen oder so")]),a._v(" "),t("p",[a._v("(char - only oldschool)")]),a._v(" "),t("h4",{attrs:{id:"id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[a._v("#")]),a._v(" id")]),a._v(" "),t("p",[a._v("wird automatisch erzeugt")]),a._v(" "),t("p",[t("strong",[a._v("create Syntax")]),a._v(" in SequelPro -> zeigt den code an, um einen Clone zu erzeugen, nicht zwangsläufig das, was man im Terminal eingeben muss...")])])}),[],!1,null,null,null);e.default=r.exports}}]);