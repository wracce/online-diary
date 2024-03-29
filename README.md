# Онлайн ежедневник
 Простой ежедневник с функцией ведения заметок.
<p align="center">
<img width="49%" src="assets/example.gif" />
</p>

## Возможности
⚡ Создание/Редактирование/Удаление заметок

⚡ Создание/Редактирование/Удаление записей в ежедневнике

⚡ Отметка выполненных задач

⚡ Приоритет задач в еждневнике

⚡ Выбор избранных заметок

⚡ Оформление текстовых заметок

⚡ Выбор цвета заметок

 ## Скриншоты
<p align="center">
    <img width="49%" src="assets/example1.png" />
    <img width="49%" src="assets/example2.png" />
    <img width="49%" src="assets/example3.png" />
    <img width="49%" src="assets/example4.png" />
</p>

 ## Попробовать
[JRE](https://github.com/wracce/online-diary/releases/tag/v0.0.1)

Для запуска (Поменяйте логин и пароль Postgres на свой):
```bash
java -jar onlinedairy-0.0.1.jar  --spring.datasource.username=postgres --spring.datasource.password=5432
```

## Стек технологий
Frontend:
 * TypeScript / SCSS
 * Angular
 * Bootstrap / Bootstrap Icons / AutoPrefixer
 * Ngx Editor / Masonry

 Backend: 
 * Java
 * Spring (Spr) / PostgreSQL
 * Spring Boot / Spring WEB

Методология: 
 * Prettier
 * BEM, SOLID

## Сборка / Запуск

1. Сборка проекта
```bash
mvn clean
mvn install
```

2. Запуск проекта:
```bash
java -jar target/onlinedairy-0.0.1-SNAPSHOT --spring.datasource.username=postgres --spring.datasource.password=5432
```

## Лицензия
MIT license!
