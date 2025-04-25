CREATE TABLE todos
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(30) NOT NULL,
    description VARCHAR(500),
    complete BIT,
    created_at TIMESTAMP DEFAULT NOW()
)