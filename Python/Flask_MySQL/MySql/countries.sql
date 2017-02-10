use world;
SELECT countries.name, languages.language, languages.percentage 
FROM countries
LEFT JOIN languages ON countries.id = languages.country_id
WHERE languages.language = 'Slovene'
ORDER BY languages.percentage DESC;

select count(distinct cities.id) as CityCount 
from cities, countries;

select name, country_id from cities;

SELECT count(cities.id) as CityCount, countries.name as CountryName 
FROM cities  
JOIN countries ON countries.id = cities.country_id 
group by countries.name 
order by count(cities.id) 
DESC;

SELECT cities.name, cities.population 
from cities
JOIN countries on countries.id = cities.country_id 
where countries.name = "Mexico" 
and cities.population > 500000 
order by cities.population DESC;

SELECT languages.language, countries.name, languages.percentage 
from languages join countries on countries.id = languages.country_id 
where languages.percentage > 89.0 
order by languages.percentage DESC;

SELECT countries.name, countries.surface_area, countries.population 
FROM countries
WHERE countries.surface_area < 501 
AND countries.population > 100000;

SELECT countries.name, countries.government_form, countries.life_expectancy, countries.capital
FROM countries
WHERE countries.government_form = "Constitutional Monarchy"
AND countries.capital > 200 
AND countries.life_expectancy > 75; 

SELECT countries.name, cities.name, cities.district, cities.population
FROM countries
LEFT JOIN cities ON countries.id = cities.country_id
WHERE countries.name = 'Argentina'
AND cities.district = 'Buenos Aires'
AND cities.population > 500000;

SELECT countries.region, count(countries.id) AS country
FROM countries
GROUP BY countries.region
ORDER BY country
DESC;



