CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS analytics_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  event_name VARCHAR(100) NOT NULL,
  event_value TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
