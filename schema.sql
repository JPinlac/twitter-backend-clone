/*
 Ubuntu instructions
 1. install using postgres apt
 2. move schema file to postgres user home /var/lib/postgresql/
 3. run file 'sudo -u postgres psql -f /var/lib/postgresql/schema.sql'
*/

drop database if exists twitterclone;
create database twitterclone;

\c twitterclone;

create table users (
  id SERIAL PRIMARY KEY,
  firstName text,
  lastName text
);
create table statuses (
  id SERIAL PRIMARY KEY,
  person integer references users,
  message text
);
create table likes (
  userId integer references users,
  statusId integer references statuses,
  PRIMARY KEY (userId, statusId)
);
insert into users (firstName, lastName) 
  values ('Benjamin', 'Bread');
insert into users (firstName, lastName) 
  values ('Spicy', 'Sausage');
insert into statuses (person, message)
  values (1, 'I got fed today!');
insert into likes (userId, statusId)
  values (1,1);
insert into likes (userId, statusId)
  values (2,1);
