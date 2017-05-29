CREATE TABLE profiles (
    profile_id   serial  NOT NULL,
    user_id      text    NOT NULL REFERENCES users ON DELETE CASCADE,
    pursuance_id integer REFERENCES pursuances ON DELETE CASCADE,
    /* TODO: Add useful fields: username, skills, etc */
    created timestamp    NOT NULL WITH time zone DEFAULT now(),
    PRIMARY KEY (user_id, pursuance_id)
);
ALTER TABLE profiles OWNER TO superuser;
