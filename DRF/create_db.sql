CREATE DATABASE library_rest_app;
CREATE USER djangorestuser WITH ENCRYPTED PASSWORD 'djangorestuser';
GRANT ALL PRIVILEGES ON DATABASE library_rest_app TO djangorestuser;
