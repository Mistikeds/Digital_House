/*----- Ejercitacion Opcional III -----*/ 

/*-----   1   -----*/ 
/* ¿Cuántas películas hay? */
SELECT count(title) FROM movies;

/*-----   2   -----*/ 
/* ¿Cuántas películas tienen entre 3 y 7 premios? */
SELECT count(title) FROM movies
WHERE awards BETWEEN 3 AND 7;

/*-----   3   -----*/ 
/* ¿Cuántas películas tienen entre 3 y 7 premios y un rating mayor a 7? */
SELECT count(title) FROM movies
WHERE (awards BETWEEN 3 AND 7) AND (rating > 7);

/*-----   4   -----*/ 
/* Crear un listado a partir de la tabla de películas, mostrar un reporte de la
cantidad de películas por id. de género. */
SELECT genre_id, count(*) FROM movies
GROUP BY genre_id;

/*-----   5   -----*/ 
/* De la consulta anterior, listar sólo aquellos géneros que tengan como suma
de premios un número mayor a 5. */
SELECT genre_id, count(*) FROM movies
GROUP BY genre_id
HAVING SUM(awards) > 5



