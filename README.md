### Install guide

1. Git clone the project from the repo

2. CD into frontend_server
3. Run "npm i"
4. CD into backend_server
5. Run "npm i"

6. While still in backend_server, create a .env file (touch .env) and add the following code with your added user and password
7.  DB_HOST=localhost
    DB_PORT=5432
    DB_USER=Your User
    DB_PASS=Your Password
    DB_NAME=furever_db

8. CD into db
9. Run psql
10. CREATE DATABASE furever_db;
11. \c furever_db
12. \i schema/01_schema.sql 
13. \i seeds/01_users.sql 
14. \i seeds/02_refuges.sql
15. \i seeds/03_animals.sql 
16. \i seeds/04_favorites.sql 

17. Make sure your tables where created (SELECT * FROM users; ---> then repeat with refuges, animals and favorites)
18. Open 2 more terminal tabs
19. Window 1 ---> CD into backend_server and npm start
20. Window 2 ---> CD into frontend_app and npm start
21. React should automatically open a window for "localhost: 3000"(there are four routes that you will find in the frontend_app/src/App.js --> /Login /Register /Home /Favorites)
22. The backend is running on localhost:5000