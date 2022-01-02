(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{366:function(e,t,a){e.exports=a.p+"assets/img/design1.9a35304b.png"},367:function(e,t,a){e.exports=a.p+"assets/img/design2.0914fd0a.png"},368:function(e,t,a){e.exports=a.p+"assets/img/schema.e8412697.png"},454:function(e,t,a){"use strict";a.r(t);var n=a(45),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"designing-relational-databases"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#designing-relational-databases"}},[e._v("#")]),e._v(" Designing Relational Databases")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://medium.com/@kimtnguyen/relational-database-schema-design-overview-70e447ff66f9",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://medium.com/@kimtnguyen/relational-database-schema-design-overview-70e447ff66f9"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("What is essential to a good database design?")]),e._v(" "),n("ul",[n("li",[n("strong",[e._v("Reduces redundancy")]),e._v(": Duplicate data wastes space and can lead to inconsistency.")]),e._v(" "),n("li",[n("strong",[e._v("Provides access")]),e._v(" with information a user needs to join tables together. (Use good primary keys, while creating proper relationships between tables.)")]),e._v(" "),n("li",[e._v("Ensures "),n("strong",[e._v("data accuracy")]),e._v(" and "),n("strong",[e._v("integrity")]),e._v(".")])]),e._v(" "),n("h2",{attrs:{id:"design-process"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#design-process"}},[e._v("#")]),e._v(" Design Process")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://medium.com/quick-code/10-best-database-design-practices-1f10f3441730",target:"_blank",rel:"noopener noreferrer"}},[e._v("10 Best Database Design Practices"),n("OutboundLink")],1)]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Define the purpose of the database")])]),e._v(" "),n("li",[n("p",[e._v("Figure out the Primary Key for each table")]),e._v(" "),n("ul",[n("li",[e._v("A primary key can be multiple fields if necessary, in which this is known as a "),n("em",[e._v("composite key")]),e._v(", while a primary key using only one field is known as a "),n("em",[e._v("simple key")]),e._v(".")]),e._v(" "),n("li",[e._v("none of the columns can be NULL.")])])]),e._v(" "),n("li",[n("p",[e._v("Determine the relationships among the tables")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("There are many types of relationships between tables: one-to-one, one-to-many, many-to-many.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("One-to-one:")]),e._v(" In a one-to-one relationship, only one row of a table is linked to at most one row on the other table.")])]),e._v(" "),n("li",[n("p",[e._v("One-to-Many: In a one-to-many relationship, one row of one table can link to many rows in a table. A great example of a one-to-many relationship is an AuthorsList and BooksList.\nThe advantage of a one-to-many relationship is to store the frequently used information in the parent table (the table with “one”), while referencing this information many times in the child table (the table with “many”)\nIn the child table, there should be a "),n("strong",[e._v("foreign key")]),e._v(", which is the parent table’s primary key, that is used to reference back to the parent table.")])]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Many-to-Many")]),e._v(": In a many-to-many relationship, one or more rows of one table can link to 0, 1 or many rows in the other table. To implement this relationship, we must use a "),n("strong",[e._v("mapping")]),e._v(" or "),n("strong",[e._v("intermediary")]),e._v(" or "),n("strong",[e._v("junction")]),e._v(" table.")]),e._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(366),alt:"1*3ZOI8zSYPGs3d-kwAFDiTg"}})])]),e._v(" "),n("img",{staticStyle:{zoom:"67%"},attrs:{src:a(367),alt:"1*iIoWSlC0APU7UbGwJcR8Yw"}})]),e._v(" "),n("li",[n("p",[n("strong",[e._v("Refine the Design —")]),e._v(" Ask yourself these questions: do you have enough columns to represent your data? Could you derive a column from a combination of columns? Are you entering duplicate information? Do you have any empty fields in individual records? Can a large table be split into two?")])])]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"atomic-values"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#atomic-values"}},[e._v("#")]),e._v(" Atomic Values")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.calebcurry.com/atomic-values/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://www.calebcurry.com/atomic-values/"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Everything we store in a database should be atomic. An "),n("strong",[e._v("atomic")]),e._v(" value can not be broken down into smaller pieces. You may also hear “rule-of-one.”")]),e._v(" "),n("p",[e._v("Whenever you can break up attributes into multiple attributes, you know they are not atomic. Something is atomic when we can think of it and use it as a complete whole!  As long as a value can be thought of as “a single thing,” then it can be considered atomic.")]),e._v(" "),n("p",[e._v("We never want to store multiple values within a single column in a table.")]),e._v(" "),n("h4",{attrs:{id:"rule-of-one"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#rule-of-one"}},[e._v("#")]),e._v(" Rule of One")]),e._v(" "),n("p",[e._v("Each column should store only one indivisible (well…practically) fact. This also means that each table must only be for a single entity.")]),e._v(" "),n("p",[e._v("Not only must attributes store one thing, but these values must be all of one data type. You must specify a data type for each column and the rows can never break these columns rules.")]),e._v(" "),n("p",[e._v("-> column header-name sould be singular")]),e._v(" "),n("hr"),e._v(" "),n("h2",{attrs:{id:"database-schema"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#database-schema"}},[e._v("#")]),e._v(" DATABASE SCHEMA")]),e._v(" "),n("p",[e._v("A database schema gives an overview of the purpose of the database along with the data that makes up the database, how the data is organized into tables, how the tables are internally structured and how they relate to one another.")]),e._v(" "),n("img",{attrs:{src:a(368)}}),e._v(" "),n("ul",[n("li",[e._v("Define the purpose of your database")]),e._v(" "),n("li",[e._v("Find the information that make up the database")]),e._v(" "),n("li",[e._v("Organize your information into tables")]),e._v(" "),n("li",[e._v("Structure your tables into columns of information")]),e._v(" "),n("li",[e._v("Avoid redundant data that leads to inaccuracy and waste in space")]),e._v(" "),n("li",[e._v("Identify the relationships between your tables and implement them")])]),e._v(" "),n("p",[e._v("database design tools:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"http://dbdiagram.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DbDiagram.io"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://sqldbm.com/home",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQLDBM"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"http://dbdesigner.net/",target:"_blank",rel:"noopener noreferrer"}},[e._v("DB Designer"),n("OutboundLink")],1)])]),e._v(" "),n("p",[e._v("Your database schema should contain the following:")]),e._v(" "),n("ul",[n("li",[e._v("table names")]),e._v(" "),n("li",[e._v("column names per table")]),e._v(" "),n("li",[e._v("column types per table")]),e._v(" "),n("li",[e._v("constraints per table, if any")]),e._v(" "),n("li",[e._v("relationships between tables, if any")])])])}),[],!1,null,null,null);t.default=o.exports}}]);