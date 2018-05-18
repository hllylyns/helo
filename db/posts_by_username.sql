Select helo_posts.title, helo_users.username
from helo_posts
inner join helo_users 
on helo_posts.helo_users_id_seq = helo_users.id;