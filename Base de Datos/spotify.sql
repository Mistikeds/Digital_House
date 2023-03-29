select * from cancion
where titulo like "%z%";

select titulo from cancion
where titulo like "_a%s";

select idPlaylist AS "Id playlist" ,idusuario AS "Id usuarios", titulo AS Titulo, cantcanciones AS "Cant canciones", idestado AS "Id estado" from playlist
order by cantcanciones desc;

select * from usuario
order by fecha_nac desc
limit 5
offset 10;

select * from cancion
order by cantreproduccion desc
limit 5;

select * from album
order by titulo asc;


select * from album
where imagenportada 
order by titulo asc;