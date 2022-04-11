# Frontend test
Обычно в тестовых заданиях вас просят написать код, а потом его оценивают.
Мы поступим наоборот. В этом задании вам предоставлено короткое ТЗ и код, реализующий функционал.
К сожалению, часть кода не работает, часть работает криво, присутствуют стилистические и архитектурные ошибки.

## Цель задания
- Проанализировать код.
- Поправить его, чтобы работал.
- Прокомментировать всё, что не нравится в коде в формате:
    - Почему вы считаете этой ошибкой\пахнущим кодом\плохой практикой
    - Ваши мысли и предложения по исправлению, недопущению подобных проблем

## ТЗ-Легенда
Приложение представляет собой простейший список продуктов. Необходимо реализовать следующий функционал:
- Шапка сайта
  - Вывести стоимость всех продуктов в корзине на данный момент
- Список продуктов
    - Получение списка продуктов
    - Авто-обновление списка с периодичностью 2 секунды
    - Отрисовка списка в виде карточек
      - Название продукта
      - Фотография
      - Цена 
      - Цифровое поле ввода кол-ва товара
      - Кнопка добавить в корзину
    - Список должен быть адаптивным(Одна карточка до разрешения экрана в 420px, Две карточки в промежутке 420 - 840, 3 карточки - 840 и более px)
    
- Список продуктов находящихся в корзине
    - Реализовать в виде списка, упорядоченного в порядке, обратном добавлению. (Последний - вверху, первый - внизу)
    

# frontend_test
