DROP TABLE IF EXISTS events;

CREATE TABLE events(
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title   text    NOT NULL,
    category    text,
    description     text,
    time    time    NOT NULL,
    price   numeric(10,2)   NOT NULL
)

