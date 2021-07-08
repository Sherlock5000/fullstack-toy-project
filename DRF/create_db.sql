CREATE DATABASE fullstackapp;
CREATE USER fullstackuser WITH ENCRYPTED PASSWORD 'fullstackuser';
GRANT ALL PRIVILEGES ON DATABASE fullstackapp TO fullstackuser;
