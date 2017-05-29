CREATE TABLE memberships (
    user_id          text      NOT NULL REFERENCES users ON DELETE CASCADE,
    pursuance_id     integer   NOT NULL REFERENCES pursuance ON DELETE CASCADE,
    invited_by       integer   REFERENCES users ON DELETE CASCADE,
    joined           timestamp NOT NULL WITH time zone DEFAULT now(),
    PRIMARY KEY (user_id, pursuance_id)
);
ALTER TABLE memberships OWNER TO superuser;
