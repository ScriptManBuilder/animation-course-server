# Animation Learning eCourses Backend Server

Backend API сервер для платформы обучения анимации.

## 🚀 Технологии

- **NestJS** - Node.js фреймворк
- **TypeScript** - Типизированный JavaScript
- **Prisma** - ORM для работы с базой данных
- **PostgreSQL** - Основная база данных
- **JWT** - Аутентификация
- **bcrypt** - Хеширование паролей

## 📋 Требования

- Node.js 18+
- npm или yarn
- PostgreSQL (для продакшна)

## 🛠 Установка и запуск

### 1. Клонирование репозитория
```bash
git clone https://github.com/ScriptManBuilder/animation-course-server.git
cd animation-course-server
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка переменных окружения
```bash
cp .env.example .env
```
Отредактируйте `.env` файл, указав ваши настройки базы данных и другие параметры.

### 4. Настройка базы данных
```bash
# Генерация Prisma клиента
npx prisma generate

# Применение миграций
npx prisma db push
```

### 5. Запуск в режиме разработки
```bash
npm run start:dev
```

### 6. Запуск в продакшне
```bash
npm run build
npm run start:prod
```

## 🌐 API Endpoints

- `GET /` - Статус сервера
- `POST /auth/login` - Аутентификация
- `POST /auth/signup` - Регистрация
- `GET /users/profile` - Профиль пользователя

## 🚀 Деплой

### Переменные окружения для деплоя:
```
DATABASE_URL=postgresql://username:password@host:port/database
JWT_SECRET=your_secure_jwt_secret
PORT=3006
NODE_ENV=production
```

### Команды для деплоя:
```bash
npm run build
npm run start:prod
```

## 📦 Скрипты

- `npm run start` - Запуск приложения
- `npm run start:dev` - Запуск в режиме разработки с hot reload
- `npm run start:debug` - Запуск в режиме отладки
- `npm run start:prod` - Запуск в продакшне
- `npm run build` - Сборка приложения
- `npm run lint` - Проверка кода линтером
- `npm run test` - Запуск тестов

## 🗂 Структура проекта

```
src/
├── auth/           # Модуль аутентификации
├── users/          # Модуль пользователей
├── common/         # Общие компоненты
├── prisma/         # Сервис Prisma
├── app.module.ts   # Основной модуль
└── main.ts         # Точка входа

prisma/
├── schema.prisma   # Схема базы данных
└── migrations/     # Миграции
```

## 📄 Лицензия

Private License - Animation Learning eCourses Team

## 🤝 Контакты

- **Автор**: Animation Learning eCourses Team
- **GitHub**: https://github.com/ScriptManBuilder/animation-course-server