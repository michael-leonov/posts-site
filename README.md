# posts-site

Тестовое задание для MitraSoft

## Описание задачи

Нужно создать сайт с постами, где будут присутствовать 3 страницы (роута):

1. Список постов (главная страница), где будут располагаться все посты.
2. Обо мне, где будет располагаться краткая информация о Вас.
3. Подробности о пользователе (куда необходимо вывести информацию о пользователе и список его постов)
   Получить данные необходимо через фейковое api [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

## Подробное описание

1. Список постов (главная страница)

   - Должна содержать список всех постов
   - Каждый пост состоит из заголовка, текста, аватара автора и списка комментариев
   - Заголовок и текст брать из api
   - Аватар должен быть одним изображением для всех пользователей, но при клике на него, должен происходить переход на страницу Подробности о пользователе.
   - Список комментариев изначально скрыт, доступна лишь кнопка Комментарии
   - При нажатии на кнопку Комментарии, должен грузиться из api и показываться список комментариев к данному посту. При повторном нажатии список должен скрываться
   - Комментарий состоит из заголовка(email) и текста
   - При загрузке данных с сервера нужно отобразить сперва лоадер, а только потом подгруженный контент (создайте дополнительно искусственную задержку в 0.5 секунд чтобы лоадер повисел подольше).
   - Должен присутствовать хэдер с «меню-бургером». При нажатии на него слева должно всплывать навигационное меню, где будет присутствовать 2 ссылки (Список постов и Обо мне), а также отображаться ваш аватар, имя и почтовый адрес.

2. Обо мне

   - Здесь всё просто, расскажите немного о себе. Сделайте эту страницу отдельным роутом, сохранив при этом хэдер и «меню-бургер».

3. Подробности о пользователе (переход при нажатии по аватару у поста)

   - Необходимо создать карточку, куда вывести краткую информацию о пользователе. Информация должна соответствовать автору поста.
   - Отобразить список постов принадлежащих только данному пользователю, структура самих постов полностью идентична с п.1.2.
   - Добавить лоадер по аналогии с п.1.8.
   - Сделать кнопку «Назад», при нажатии на которую произойдет переход на главную страницу.

P.S:

1. В качестве основы можно взять шаблон React App.
2. Вынесите логику работы с сервером в saga-эффекты.
3. Обязательно разбейте логически-независимые элементы страниц на компоненты.
4. На странице Подробности о пользователе данные должны подгружаться даже после обновления этой страницы.
5. Весь интерфейс реализуйте с помощью ui-библиотеки React-bootstrap (используйте компоненты, которые предоставляет эта библиотека).
6. Во время написания кода делайте коммиты почаще (по каждой существенной функции интерфейса).

### Ключевые технологии, которые необходимо использовать

1. React
2. React-bootstrap
3. React-router
4. Axios
5. Redux
6. Redux-saga
7. Git

## Запуск приложения

### Запуск в development mode

Склонируйте репозиторий

1. Установите зависимости:

```sh
npm i
```

2. Создайте в директории файл **.env** и настройте переменные окружения из файла **.env.example**

3. Запустите проект командой:

```sh
npm run start
```

Приложение доступно по: [http://localhost:3000](http://localhost:3000)

## Стек

1. [React](https://ru.reactjs.org/)
2. [React Bootstrap](https://react-bootstrap.github.io/)
3. [React Router DOM](https://reactrouter.com/en/main)
4. [Axios](https://axios-http.com/ru/docs/intro)
5. [Redux](https://redux.js.org/)
6. [Redux Saga](https://redux-saga.js.org/)
7. [React-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap)
8. [Redux DevTools Extension's helper](https://www.npmjs.com/package/@redux-devtools/extension)
