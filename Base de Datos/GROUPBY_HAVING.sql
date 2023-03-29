SELECT genre_id, COUNT(*), AVG(length) FROM movies
group by genre_id;

SELECT name, COUNT(*), MAX(rating), AVG(length) FROM movies
INNER JOIN genres ON genre_id = genre_id
GROUP BY name
HAVING COUNT(*) >= 3;
