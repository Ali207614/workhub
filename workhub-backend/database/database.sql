     -- users
-- user_type  user admin yoki oddiy userligin bilish 0 oddiy user 1 admin

     -- contact
-- contacted   =>  raqam qoldirgan user bilan gaplashildi


    --  orders 
-- checked_project  => bizaga yoqdi hamma taraflama
-- is_active   => checked_project tugaganda yani hal bogandan keyin userga ko'rinish holati
-- project_status  => sayt holati (0 ko'rib chiqilvotti) , (1 kod yozilvotti ya'ni progress) , (2 project tayyor)

CREATE DATABASE workhub;

\c workhub

CREATE EXTENSION pgcrypto;

CREATE TABLE users(
    id serial primary key,
    username varchar(100) not null,
    tel_number varchar(12) UNIQUE not null,
    password varchar(200) not null,
    user_type int default 0,
    date timestamptz default current_timestamp
);

CREATE TABLE contact(
    id serial primary key,
    tel_number varchar(9),
    contacted boolean default false,
    is_delete boolean default false,
    time timestamptz default current_timestamp
);

CREATE TABLE orders(
    id serial primary key,
    user_id int not null references users(id),
    description_project varchar(365) not null,
    project_price varchar default '0',
    project_status int default 0,
    is_active boolean default true,
    is_delete boolean default false,
    time timestamptz default current_timestamp
);



