import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Получаем разрешенные origins из переменных окружения
  const allowedOrigins = process.env.ALLOWED_ORIGINS 
    ? process.env.ALLOWED_ORIGINS.split(',')
    : [ 
        'https://animation-course-server.onrender.com',
        'https://animation-learn.com',
        'https://www.animation-learn.com',
        'http://animation-learn.com',
        'http://www.animation-learn.com',
        'https://animation-learn-course.com',
        'https://www.animation-learn-course.com',
        'http://animation-learn-course.com',
        'http://www.animation-learn-course.com',
        'https://api.animation-learn-course.com',
        'http://localhost:3000',
        'http://localhost:3001',
        'http://localhost:3006',
        'https://animation-learn-course.vercel.app',
        'https://animation-learn-course.netlify.app',
        'https://animation-learn-course.onrender.com',
        'https://animation-learn.vercel.app',
        'https://animation-learn.netlify.app',
      ]; // fallback для разработки

  // Настройка CORS
  app.enableCors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type', 
      'Authorization', 
      'X-Requested-With',
      'Accept',
      'Origin'
    ],
    credentials: true,
  });
  
  const port = process.env.PORT || 3006;
  await app.listen(port);
  
  console.log(`🚀 Animation Learning eCourses Backend запущен на порту ${port}`);
  console.log(`🌐 CORS разрешен для: ${allowedOrigins.join(', ')}`);
  console.log(`📊 База данных: External PostgreSQL`);
}
bootstrap();
