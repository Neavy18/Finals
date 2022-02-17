DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS refuges CASCADE;
DROP TABLE IF EXISTS animals CASCADE;
DROP TABLE IF EXISTS favorites CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE refuges (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postal_code VARCHAR(255) NOT NULL
);

CREATE TABLE animals (
  id SERIAL PRIMARY KEY NOT NULL,
  refuge_id INTEGER REFERENCES refuges(id) ON DELETE CASCADE,
  specie VARCHAR(10) NOT NULL,
  name VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  sex VARCHAR(255) NOT NULL,
  breed VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(500)
);

CREATE TABLE favorites (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  animal_id INTEGER REFERENCES animals(id) ON DELETE CASCADE
);

GRANT SELECT ON users TO PUBLIC;
GRANT SELECT ON refuges TO PUBLIC;
GRANT SELECT ON animals TO PUBLIC;
GRANT SELECT ON favorites TO PUBLIC;

GRANT DELETE ON ALL TABLES IN SCHEMA public TO PUBLIC;