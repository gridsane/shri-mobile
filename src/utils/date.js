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

var toDate = function (string) {
    return zeroTime(new Date(string));
};

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

var isWeekend = function (date) {
    return -1 !== [0, 6].indexOf(date.getDay());
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

var parts = ['night', 'morning', 'day', 'evening'];

var getNowPart = function () {
    // 0 - 5: night
    // 6 - 11: morning
    // 12 - 17: day
    // 18 - 23: evening
    var nowHour = new Date().getHours();
    return parts[Math.floor(nowHour / 6)]
};

var isPartLessThen = function (part, compare) {
    return parts.indexOf(part) < parts.indexOf(compare);
};

var getPartTranslation = function (type) {
    return ['Ночью', 'Утром', 'Днем', 'Вечером'][parts.indexOf(type)];
};

var getShortWeekday = function (date) {
    return datef('D', date);
};

module.exports = {
    isToday: isToday,
    isTomorrow: isTomorrow,
    getToday: getToday,
    getTitle: getTitle,
    getNowPart: getNowPart,
    getPartTranslation: getPartTranslation,
    isPartLessThen: isPartLessThen,
    getShortWeekday: getShortWeekday,
    toDate: toDate,
    isWeekend: isWeekend
};
