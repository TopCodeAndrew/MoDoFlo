INSERT INTO session
( owner_user_id, session_name)
VALUES
($1, $2);

SELECT * FROM session
WHERE owner_user_id = $1;