DELETE FROM session 
WHERE owner_user_id = $1
AND session_id = $2;

SELECT * FROM session
WHERE owner_user_id = $1;

