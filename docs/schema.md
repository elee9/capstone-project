# Schema Information

## photos
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
description | text      | not null
photog_id   | integer   | not null, foreign key (references users), indexed
album_id    | integer   | not null, foreign key (references album), indexed
archived    | boolean   | not null, default: false

## albums
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
photog_id   | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## comments (polymorphism)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
text        | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
parent_id   | integer   | not null, foreign key (references users), indexed

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
photo_id    | integer   | not null, foreign key (references photos), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
