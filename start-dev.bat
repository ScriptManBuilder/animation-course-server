@echo off
echo ===============================================
echo   Illustration eCourses Server Setup
echo ===============================================
echo.

echo 1. Creating database if not exists...
node scripts/create-database.js

echo.
echo 2. Generating Prisma client...
npx prisma generate

echo.
echo 3. Pushing database schema...
npx prisma db push

echo.
echo 4. Starting development server...
npm run start:dev

pause