CREATE TABLE helo_posts (
    id serial primary key, 
    title text,
    img text,
    content text,
    helo_users_id_seq int references helo_posts(id)
);


