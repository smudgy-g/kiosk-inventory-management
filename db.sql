-- Seeing as we will be testing out this script alot we can destroy the db before creating everything again
DROP DATABASE IF EXISTS kiosk;

-- Create the db
CREATE DATABASE kiosk;

-- Move into the db
\c kiosk