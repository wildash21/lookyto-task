const lang = {
    ok: 'OK',

    power: 'Сила',
    agility: 'Ловкость',
    intelligence: 'Интеллект',
    charisma: 'Харизма',
    lifePower: 'Жизненная сила',
    dodge: 'Уклонение',
    energy: 'Энергичность',
    attack: 'Атака',
    stealth: 'Стелс',
    archery: 'Стрельба из лука',
    learning: 'Обучаемость',
    survivability: 'Выживание',
    medicine: 'Медицина',
    intimidation: 'Запугивание',
    insight: 'Проницательность',
    appearance: 'Внешний вид',
    manipulation: 'Манипулирование',

    characteristics: 'Характеристики',
    characteristicsShort: 'Хар-ки',
    params: 'Параметры',
    skills: 'Навыки',

    changeName: 'Изменить имя',
    strike: 'Ударить',
    export: 'Экспортировать',
    import: 'Импортировать',

    notTrained: 'Нетренированный',
    newbie: 'Новичок',
    learner: 'Ученик',
    adept: 'Адепт',
    expert: 'Эксперт',
    master: 'Мастер',

    enterNewName: 'Введите новое имя',
    decrementZeroSkillError: 'Нельзя уменьшить навык со значением, равным нулю!',
    nameIsEmptyError: 'Имя не может быть пустым!',
    done: 'Готово!',

    valueMoreThanBindValueError: (characteristic: string) =>
        `Данный навык не может быть выше привязанного базового параметра (${characteristic})!`,
}

export default lang
