

use locadora;

create table genres (
	id_genres int primary key,
	description varchar(255)
);


create table movies (
	id_movies int primary key,
	name varchar(255),
	id_genres int,
	foreign key (id_genres) references genres (id_genres)
);

insert into genres(id_genres, description)
values (2, 'Horror'), (3, 'Action'), (4, 'Drama'), (5,'Comedy');

select * from genres;


insert into movies (id_movies, name, id_genres)
values (1, 'Batman', 3), (2, 'The Battle of the Dark River', 3), (3, 'White Duck', 1), (4, 'Breaking Barriers', 4), (5,'The Two Hours', 2);

select * from genres;
select * from movies;

select id_genres, description from genres
where id_genres >= 3
order by id_genres desc;



-- 3 e 4:
insert into genres(id_genres, description)
values (6, 'Romance'), (7, 'Documentary');

insert into movies (id_movies, name, id_genres)
values (6, 'Flash', 3), (7, 'Matrix', 3), (8, 'Toy Story', 1), (9, 'Ghosted', 6), (10,'The Deepest Breath', 7);

select * from genres;
select * from movies;

-- 5 e 6:
select m.name, g.description, g.id_genres
from genres g
join movies m on m.id_genres = g.id_genres
where g.description = 'Horror';

select m.name, g.description, g.id_genres
from genres g
join movies m on m.id_genres = g.id_genres
where g.description = 'Horror'
or g.description = 'Drama';

-- 7 e 8:
select * from genres;
select * from movies;

-- 9 e 10:
select * from movies
where name like 'T%';


UPDATE movies
SET id_genres = 4
WHERE id_genres = 1;




-- 11 e 12
select m.name, g.description
from genres g
join movies m on m.id_genres = g.id_genres;

select * from movies;

delete from movies
where id_genres = 3;


