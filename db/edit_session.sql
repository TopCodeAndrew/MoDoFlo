UPDATE session 
SET session_name = $1
WHERE owner_user_id = $2
AND session_id = $3
RETURNING *