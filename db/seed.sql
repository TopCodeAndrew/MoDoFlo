CREATE TABLE "users" (
  "user_id" SERIAL PRIMARY KEY,
  "email" VARCHAR(100),
  "hash" TEXT
);

CREATE TABLE "session" (
  "session_id" SERIAL PRIMARY KEY,
  "session_name" VARCHAR(100),
  "owner_user_id" INT
);

CREATE TABLE "block" (
  "block_id" SERIAL PRIMARY KEY,
  "session_id" SERIAL,
  "block_type_id" SERIAL
);

CREATE TABLE "block_type" (
  "type_id" SERIAL PRIMARY KEY,
  "type_name" TEXT
);

ALTER TABLE "block" ADD FOREIGN KEY ("block_type_id") REFERENCES "block_type" ("type_id");

ALTER TABLE "session" ADD FOREIGN KEY ("owner_user_id") REFERENCES "users" ("user_id");

ALTER TABLE "block" ADD FOREIGN KEY ("session_id") REFERENCES "session" ("session_id");
