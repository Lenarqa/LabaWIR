// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Знание сила!",
        "main":    "<p>Выберите один правильный ответ!</p>",
        "results": "",
        "level1":  "Отлично",
        "level2":  "Хорошо",
        "level3":  "Удовлетворительно",
    },
    "questions": [
        { // Question 1 - Multiple Choice, Single True Answer
            "q": "Что такое дата центр",
            "a": [
                {"option": "это в первую очередь безопасная среда, где компании могут размещать специальное оборудование, на котором хранится и обрабатывается информационный массив об их работе.",      "correct": true},
                {"option": "это место где храняться все даты, за всю историю человечества",     "correct": false},
                {"option": "это место где хряняться папки с документами предприятия",     "correct": false},
            ],
            "correct": "<p><span>Все верно!</span> Молодец!</p>",
            "incorrect": "<p><span>Ооо нет.</span> Эхх не угадал. Дата центры это в первую очередь безопасная среда, где компании могут размещать специальное оборудование, на котором хранится и обрабатывается информационный массив об их работе.</p>" // no comma here
        },
        { 
            "q": "Выберите одну из причин появления дата центров?",
            "a": [
                {"option": "Нежелание предприятий выделить под это дело кладовку.",     "correct": false},
                {"option": "Усложнение компьютерных систем.",      "correct": true},
                {"option": "Желание пообщаться с какими нибудь другими компаниями.",     "correct": false},
            ],
            "correct": "<p><span>Все верно!</span> Молодец!</p>",
            "incorrect": "<p><span>Ооо нет.</span> Эхх не угадал. Одной из причин появления дата центров является усложнение компьютерных систем.</p>" // no comma here
        },
        { 
            "q": "Какой стандарт фактически является мировым стандартом для классификации дата центров?",
            "a": [
                {"option": "ГОСТ-2020",     "correct": false},
                {"option": "TIA-942",      "correct": true},
                {"option": "TEA-1918",     "correct": false},
            ],
            "correct": "<p><span>Все верно!</span> Молодец!</p>",
            "incorrect": "<p><span>Ооо нет.</span> Эхх не угадал.  Правильный ответ TIA-942</p>" // no comma here
        },
        { 
            "q": "Сколько уровней подразумевает стандарт TIA-942",
            "a": [
                {"option": "2",     "correct": false},
                {"option": "7",     "correct": false},
                {"option": "4",      "correct": true},
            ],
            "correct": "<p><span>Все верно!</span> Молодец!</p>",
            "incorrect": "<p><span>Ооо нет.</span> Эхх не угадал.  Правильный ответ: 4</p>" // no comma here
        },
        { 
            "q": "Где находиться самый большой дата-центр в мире?",
            "a": [
                {"option": "Москве",     "correct": false},
                {"option": "Неваде",     "correct": true},
                {"option": "Удмуртия",      "correct": false},
                {"option": "Лас-Вегас",      "correct": false},
            ],
            "correct": "<p><span>Все верно!</span> Молодец!</p>",
            "incorrect": "<p><span>Ооо нет.</span> Эхх не угадал.  Правильный ответ: Невада</p>" // no comma here
        },

       
    ]
};
