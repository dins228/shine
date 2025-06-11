Установка и запуск проекта

1. Клонировать репозиторий, создать и войти в виртуальное окружение
2. `pip install -r requirements.txt` - установка зависимостей
3. Установка frontend:
    * `cd diploma-frontend && python setup.py sdist` - создание архива с библиотекой фронтенда
    * `pip install ./dist/diploma-frontend-0.6.tar.gz` - установка фронтенда
4. Создание бд и загрузка фикстур:
    * `cd ../megano && python manage.py make migrations` - создание миграций
    * `python manage.py migrate` - миграция 
    * `python manage.py loaddata ./fixtures/* ` - установка фикстур
5. `python manage.py runserver` - запуск сервера