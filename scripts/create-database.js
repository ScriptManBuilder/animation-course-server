const { Client } = require('pg');
require('dotenv').config();

async function createDatabaseIfNotExists() {
  // Парсим DATABASE_URL чтобы получить параметры подключения
  const dbUrl = process.env.DATABASE_URL;
  // Поддерживаем URL с паролем и без пароля
  let urlParts = dbUrl.match(/postgresql:\/\/(.+):(.+)@(.+):(\d+)\/(.+)(?:\?.*)?$/);
  let username, password, host, port, dbname;
  
  if (urlParts) {
    [, username, password, host, port, dbname] = urlParts;
  } else {
    // Пробуем формат без пароля
    urlParts = dbUrl.match(/postgresql:\/\/(.+)@(.+):(\d+)\/(.+)(?:\?.*)?$/);
    if (urlParts) {
      [, username, host, port, dbname] = urlParts;
      password = null;
    } else {
      console.error('Invalid DATABASE_URL format');
      console.error('Expected format: postgresql://username:password@host:port/database or postgresql://username@host:port/database');
      return;
    }
  }

  // Подключаемся к PostgreSQL без указания базы данных
  const adminClient = new Client({
    user: username,
    password: password,
    host: host,
    port: parseInt(port),
    database: 'postgres' // Подключаемся к системной БД
  });

  try {
    await adminClient.connect();
    console.log('Connected to PostgreSQL server');

    // Проверяем существует ли база данных
    const checkDb = await adminClient.query(
      'SELECT 1 FROM pg_database WHERE datname = $1',
      [dbname]
    );

    if (checkDb.rows.length === 0) {
      // Создаем базу данных если она не существует
      await adminClient.query(`CREATE DATABASE "${dbname}"`);
      console.log(`Database "${dbname}" created successfully!`);
    } else {
      console.log(`Database "${dbname}" already exists.`);
    }

  } catch (error) {
    console.error('Error creating database:', error.message);
    if (error.code === 'ECONNREFUSED') {
      console.error('Make sure PostgreSQL is running on your system.');
      console.error('You can start it with: pg_ctl start -D /usr/local/var/postgres');
    }
  } finally {
    await adminClient.end();
  }
}

createDatabaseIfNotExists().catch(console.error);