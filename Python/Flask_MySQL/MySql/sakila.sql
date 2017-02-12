USE sakila;

SELECT customer.first_name, customer.last_name, customer.email, address.address
FROM customer
LEFT JOIN address ON customer.address_id = address.address_id
WHERE address.city_id = 312;

SELECT film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre
FROM category
LEFT JOIN film_category ON category.category_id = film_category.category_id
LEFT JOIN film ON film_category.film_id = film.film_id
WHERE category.name = 'Comedy';

SELECT film.title, film.description, film.release_year, film_actor.actor_id, film.film_id, actor.first_name, actor.last_name
FROM film
LEFT JOIN film_actor ON film.film_id = film_actor.film_id
LEFT JOIN actor ON film_actor.actor_id =actor.actor_id 
WHERE film_actor.actor_id = 5;

SELECT customer.first_name, customer.last_name, customer.email, address.address
FROM customer
LEFT JOIN address ON customer.address_id = address.address_id
WHERE customer.store_id = 1
AND address.city_id IN (1, 42, 312, 459);

SELECT film.title, film.description, film.release_year, film.rating, film.special_features
FROM film
LEFT JOIN film_actor ON film.film_id= film_actor.film_id
WHERE film.rating = "G" 
AND film.special_features 
LIKE "%Behind the scenes%" 
AND actor_id = 15;


SELECT CONCAT(actor.first_name," ",actor.last_name) AS Actor_name,actor.actor_id, film.title, film.film_id
FROM actor
LEFT JOIN film_actor ON actor.actor_id = film_actor.actor_id
LEFT JOIN film ON film_actor.film_id = film.film_id
WHERE film_actor.film_id = 369;

SELECT film.title, film.film_id,film.description, film.release_year, film.rating, film.special_features, film.rental_rate, category.name as genre
FROM category
LEFT JOIN film_category ON category.category_id = film_category.category_id
LEFT JOIN film ON film_category.film_id = film.film_id
WHERE rental_rate = 2.99
AND category.name = "Drama";

SELECT film.title, CONCAT(actor.first_name," ",actor.last_name) AS Actor_name, film.description, film.release_year, film.rating, film.special_features, category.name as genre
FROM actor 
LEFT JOIN film_actor ON actor.actor_id = film_actor.actor_id
LEFT JOIN film ON film.film_id = film_actor.film_id
LEFT JOIN film_category ON film.film_id = film_category.film_id
LEFT JOIN category ON film_category.category_id = category.category_id
WHERE actor.first_name = 'SANDRA'
AND actor.last_name = 'KILMER'
AND category.name = 'Action'