/*----Proyecto Spotify II----*/

/*----    1    ----*/
SELECT titulo FROM cancion
WHERE titulo LIKE '%Z%';

/*----    2    ----*/

SELECT titulo FROM cancion
WHERE titulo LIKE '_a%s';

/*----    3    ----*/

SELECT idPlaylist AS 'id Playlist', cantcanciones AS 'cantidad canciones', idusuario AS 'id usuario' FROM playlist
ORDER BY cantcanciones DESC;
/*----    4    ----*/

SELECT * FROM usuario
ORDER BY fecha_nac ASC
LIMIT 10
OFFSET 5;

/*----    5    ----*/

SELECT * FROM cancion
ORDER BY cantreproduccion DESC
LIMIT 5;

/*----    6    ----*/

SELECT * FROM album
ORDER BY titulo ASC;

/*----    7    ----*/

SELECT * FROM album
WHERE imagenportada IS NULL
ORDER BY titulo ASC;

/*----    8    ----*/

/* CREATE, DROP, ALTER */


