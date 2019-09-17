#!/bin/bash

export PGPASSWORD='node_password'
echo "Configuring dragonstackdb"

dropdb -U node_user dragonstackdb
createdb -U node_user dragonstackdb

psql -U node_user dragonstackdb < ./bin/sql/generation.sql
psql -U node_user dragonstackdb < ./bin/sql/dragon.sql

echo "dragonstackdb configured"

# export PATH="/Applications/Postgres.app/Contents/Versions/latest/bin:$PATH"
# TENGJAST POSTGRES psql -U postgres
# TENGJAST DATABASE psql -U node_user dragonstackdb;
# LISTI AF DATABASE \d