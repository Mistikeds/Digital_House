/* UTILIZANDO LIMIT */
SELECT * FROM movies
WHERE awards > 1
LIMIT 10;

/* OFFSET SALTEANDO DATOS */
SELECT id, first_name, last_name FROM actors
LIMIT 10
OFFSET 10;

/* ALIAS RENOMBRAR */
SELECT title AS titulos FROM episodes;/*columnas*/
SELECT * FROM actor_episode AS actores;/*tablas*/

/*----------Ejercitacion Opcional II----------*/

/*------   1   ------*/

SELECT title AS titulos FROM series;

/*------   2   ------*/

SELECT title, release_date, rating, awards FROM movies
WHERE rating > 3 AND awards > 1 AND release_date BETWEEN '1988-01-01' AND '2009-12-31'
ORDER BY rating DESC;

/*------   3   ------*/

SELECT title, release_date, rating, awards FROM movies
WHERE rating > 3 AND awards > 1 AND release_date BETWEEN '1988-01-01' AND '2009-12-31'
ORDER BY rating DESC
LIMIT 3
OFFSET 10;

/*------   4   ------*/

SELECT title, release_date, rating, awards FROM movies
WHERE rating > 3 AND awards > 1 AND release_date BETWEEN '1988-01-01' AND '2009-12-31'
ORDER BY rating ASC
LIMIT 3;



/*------   5   ------*/



DELETE FROM favorite_movie_id;

