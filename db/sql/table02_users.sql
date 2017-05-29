CREATE TABLE users (
    user_id text      NOT NULL UNIQUE PRIMARY KEY CHECK (40 <= LENGTH(room_id) AND LENGTH(room_id) <= 55),
    created timestamp NOT NULL WITH time zone DEFAULT now()
);
ALTER TABLE users OWNER TO superuser;
