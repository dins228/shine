Названия роутов и ожидаемую структуру ответа от API endpoints можно найти в `diploma-frontend/swagger/swagger.yaml`. 
1. Собрать пакет: в директории diploma-frontend выполнить команду python setup.py sdist
2. Установить полученный пакет в виртуальное окружение: `pip install dist/diploma_frontend-0.6.tar.gz`. 
3. В `settings.py` дипломного проекта подключить приложение:
```python
INSTALLED_APPS = [
        ...
        'frontend',
    ]
```
4. В `urls.py` добавить:
```python
urlpatterns = [
    path("", include("frontend.urls")),
    ...
]
```
Если запустить сервер разработки: `python manage.py runserver`