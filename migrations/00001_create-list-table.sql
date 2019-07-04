CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE todo_list (
  id uuid primary key default gen_random_uuid(),
  inserted_at timestamp not null,
  updated_at timestamp not null
);
