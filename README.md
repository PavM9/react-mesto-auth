# Место на "React" с авторизацией и регистрацией

## Описание проекта
Учебный проект от [Яндекс.Практикум](https://practicum.yandex.ru/web/). Веб-приложение Mesto, позволяющее пользователю регистрироваться и входить в свой профиль, куда можно загружать карточки с фотографиями и описанием.

## Особенности
* Авторизация и регистрация пользователей
* Редактирование аватара и профиля
* Добавление новых карточек с фотографиями и лайков
* Удаление добавленных карточек и лайков
* Открытие фотографий в полном размере


## Стек технологий
* HTML5:
  - Семантические теги
* CSS3:
  - Flexbox
  - Grid Layout
  - Позиционирование
  - Псевдоклассы
  - Трансформации
  - Медиа-запросы
* Вёрстка по макету в Figma
* БЭМ-методолгия именования классов и организации файловой структуры
* JavaScript:
  - ООП
  - Работа с DOM-деревом (метод querySelector)
  - Асинхронность
  - API (серверы https://mesto.nomoreparties.co, https://auth.nomoreparties.co)
* WebPack:
  - транспиляция через Babel
  - плагины HTMLWebPackPlugin, CssLoader, PostCSS, CssNano, AutoPrefixer
* React.js:
  - Create React App
  - JSX разметка
  - Хуки useEffect, useState, useHistory, UseLocation
  - Функциональные компоненты

## Требования к проектной работе
* [Макет](https://www.figma.com/file/5H3gsn5lIGPwzBPby9jAOo/Sprint-14-RU?node-id=0%3A1)
* [Чеклист](https://code.s3.yandex.net/web-developer/checklists-pdf/new-program/checklist-12.pdf)

## Установка и запуск проекта:
Установить [Node.js](https://nodejs.org/en/download/)

Установить [Git Bash для Windows](https://gitforwindows.org/)

Клонировать репозиторий:

    git clone https://github.com/PavM9/react-mesto-auth.git

Установить необходимые зависимости:

    npm install...

Собрать проект:

    npm run build

Запустить проект локально:

    npm run start

Для работы с gh-pages установить пакет gh-pages:

    npm install gh-pages --save-dev

Для деплоя проекта ввести команду:

    npm run deploy


## Ссылка на страницу
[Место на "React" с авторизацией и регистрацией](http://pavm9.github.io/react-mesto-auth/)

