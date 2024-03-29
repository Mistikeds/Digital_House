/*/-----------     EJERCITACION OPCIONAL - BD    -----------/*/


/*-----------     1    -----------*/
SELECT * FROM movies;

/*-----------     2    -----------*/

SELECT first_name, last_name, rating FROM actors; 

/*-----------     3    -----------*/

SELECT title FROM series;

/*-----------     4    -----------*/

SELECT first_name, last_name FROM actors
WHERE rating > 7.5;

/*-----------     5    -----------*/

SELECT title, rating, awards FROM movies
WHERE rating > 7.5 AND awards > 2;

/*-----------     6    -----------*/

SELECT title, rating FROM movies
ORDER BY rating ASC;

/*-----------     7    -----------*/

SELECT title, rating FROM movies
WHERE title LIKE '%Toy Story%';

/*-----------     8    -----------*/

SELECT first_name, last_name FROM actors
WHERE first_name LIKE 'Sam%';

/*-----------     9    -----------*/

SELECT title, release_date FROM movies
WHERE release_date BETWEEN '2004-01-01' AND '2008-12-31';



