INSERT INTO session
( owner_user_id, session_name)
VALUES
($1, $2)
RETURNING *; 