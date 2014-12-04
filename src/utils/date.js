var datef = require('datef');
require('datef/lang/ru');
datef.lang('ru');

var zeroTime = function (date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);

    return date;
}

var getToday = function () {
    return zeroTime(new Date());
};

var isToday = function (compare) {
    var date = zeroTime(new Date(compare.getTime()));

    return date.getTime() === getToday().getTime();
};

var isTomorrow = function (compare) {
    var tomorrow = new Date();
    tomorrow.setDate(new Date().getDate() + 1);

    var date = zeroTime(new Date(compare.getTime()));

    return zeroTime(tomorrow).getTime() === date.getTime();
};

var getTitle = function (date) {
    if (isToday(date)) {
        return 'Сегодня, ' + datef('d MMMM', date);
    }

    if (isTomorrow(date)) {
        return 'Завтра, ' + datef('d MMMM', date);
    }

    return datef('d MMMM, DD', date);
};

var getNowPart = function () {
    // 0 - 5: night
    // 6 - 11: morning
    // 12 - 17: day
    // 18 - 23: evening
    var nowHour = new Date().getHours();
    return ['night', 'morning', 'day', 'evening'][Math.floor(nowHour / 6)]
};

var getPartTranslation = function (type) {
    return {
        'night': 'Ночью',
        'morning': 'Утром',
        'day': 'Днем',
        'evening': 'Вечером'
    }[type];
}

module.exports = {
    isToday: isToday,
    isTomorrow: isTomorrow,
    getToday: getToday,
    getTitle: getTitle,
    getNowPart: getNowPart,
    getPartTranslation: getPartTranslation,
};
