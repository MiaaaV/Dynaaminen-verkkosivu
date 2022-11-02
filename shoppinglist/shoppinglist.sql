create database shoppinglist;

use shoppinglist;

create table item (
  id int primary key auto_increment,
  description varchar(255) not null,
  amount smallint unsigned not null
);

insert into item (description, amount) values ('Test item',1);

-- lisätty itse
insert into item (description, amount) values ('Another test item',2);
insert into item (description, amount) values ('Yet another test item',5);
insert into item (description, amount) values ('Last test item',65);