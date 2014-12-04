var React = require('react/addons');
var WeatherIcon = require('./weather_icon');
var dateutils = require('../utils/date');
var temp2color = require('../utils/temp2color');

var WeatherBriefDay = React.createClass({
    getDefaultProps: function () {
        return {
            fact: null,
            forecast: {}
        };
    },

    render: function () {
        var titleClasses = React.addons.classSet({
            "weather-brief__title": true,
            "weather-brief__title-today": !!this.props.fact,
        });

        var nowPart = dateutils.getNowPart();
        var isNowPartDrawed = !!!this.props.fact;
        var parts = this.props.forecast.parts.map(function (part) {
            if (part.type === nowPart) {
                isNowPartDrawed = true;
            }

            if (!isNowPartDrawed || -1 === [
                    'night',
                    'morning',
                    'day',
                    'evening'
                ].indexOf(part.type)) {
                return null;
            }

            var temp = part.temp_min || part.temp;

            return (
                <li className="weather_brief__part" style={{"background-color": temp2color(temp)}}>
                    <div className="weather_brief-part__type">
                        {dateutils.getPartTranslation(part.type)}
                    </div>
                    <WeatherIcon className="weather_brief-part__icon" icon={part.weather_icon} />
                    <div className="weather-brief-part__temp-min">
                        {temp}
                    </div>
                    <div className="weather-brief-part__temp-max">
                        {part.temp_max || null}
                    </div>
                </li>
            );
        });

        return (
            <div className="weather-brief__day">
                <div className={titleClasses}>
                    {dateutils.getTitle(new Date(this.props.forecast.date))}
                </div>
                <ul className="weather-brief__parts">
                    {parts}
                </ul>
            </div>
        );
    }
});

var WeatherBrief = React.createClass({
    getDefaultProps: function () {
        return {
            info: {
            geoid: 213,
            name: "Москва",
            lat: 55.755768,
            lon: 37.617671,
            zoom: 10,
            nameprep: "в Москве"
            },
            fact: {
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 1,
            wind_direction: "w",
            humidity: 90,
            pressure: 751
            },
            yesterday: {
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 2,
            wind_direction: "w",
            humidity: 62,
            pressure: 755
            },
            forecast: [
            {
            date: "2014-12-04",
            sunrise: "08:38",
            sunset: "15:59",
            moon_code: "15",
            moon_text: "growing-moon",
            biomet: {
            geomag: 1,
            message: "Метеорологическая обстановка в целом благоприятна для метеочувствительных людей",
            message_code: "meteosens-favorable"
            },
            parts: [
            {
            type: "morning",
            temp: -7,
            temp_min: -7,
            temp_max: -6,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_d",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 7.9,
            wind_direction: "w",
            humidity: 74,
            pressure: 752
            },
            {
            type: "day",
            temp: -5,
            temp_min: -6,
            temp_max: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 7.6,
            wind_direction: "w",
            humidity: 84,
            pressure: 751
            },
            {
            type: "evening",
            temp: -4,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 6.5,
            wind_direction: "w",
            humidity: 86,
            pressure: 751
            },
            {
            type: "night",
            temp: -2,
            temp_min: -3,
            temp_max: -2,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 5.3,
            wind_direction: "w",
            humidity: 96,
            pressure: 753
            },
            {
            type: "day_short",
            temp: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 7.6,
            wind_direction: "w",
            humidity: 84,
            pressure: 751
            },
            {
            type: "night_short",
            temp: -7,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 5.3,
            wind_direction: "w",
            humidity: 96,
            pressure: 753
            }
            ],
            hours: [
            {
            hour: "0",
            temp: -4,
            weather_code: "partly-cloudy"
            },
            {
            hour: "1",
            temp: -4,
            weather_code: "cloudy"
            },
            {
            hour: "2",
            temp: -5,
            weather_code: "cloudy"
            },
            {
            hour: "3",
            temp: -7,
            weather_code: "cloudy"
            },
            {
            hour: "4",
            temp: -7,
            weather_code: "cloudy"
            },
            {
            hour: "5",
            temp: -7,
            weather_code: "cloudy"
            },
            {
            hour: "6",
            temp: -7,
            weather_code: "cloudy"
            },
            {
            hour: "7",
            temp: -7,
            weather_code: "cloudy"
            },
            {
            hour: "8",
            temp: -7,
            weather_code: "cloudy"
            },
            {
            hour: "9",
            temp: -7,
            weather_code: "cloudy"
            },
            {
            hour: "10",
            temp: -6,
            weather_code: "overcast"
            },
            {
            hour: "11",
            temp: -6,
            weather_code: "overcast"
            },
            {
            hour: "12",
            temp: -6,
            weather_code: "overcast"
            },
            {
            hour: "13",
            temp: -5,
            weather_code: "overcast"
            },
            {
            hour: "14",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "15",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "16",
            temp: -4,
            weather_code: "overcast-and-light-snow"
            },
            {
            hour: "17",
            temp: -4,
            weather_code: "overcast-and-light-snow"
            },
            {
            hour: "18",
            temp: -4,
            weather_code: "overcast-and-light-snow"
            },
            {
            hour: "19",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "20",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "21",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "22",
            temp: -3,
            weather_code: "cloudy"
            },
            {
            hour: "23",
            temp: -3,
            weather_code: "cloudy"
            }
            ]
            },
            {
            date: "2014-12-05",
            sunrise: "08:40",
            sunset: "15:59",
            moon_code: "0",
            moon_text: "full-moon",
            biomet: {
            geomag: 1,
            message: "Метеорологическая обстановка в целом благоприятна для метеочувствительных людей",
            message_code: "meteosens-favorable"
            },
            parts: [
            {
            type: "morning",
            temp: -1,
            temp_min: -2,
            temp_max: 1,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_d",
            wind: "Северо-западный",
            wind_abbr: "СЗ",
            wind_speed: 4.3,
            wind_direction: "nw",
            humidity: 94,
            pressure: 756
            },
            {
            type: "day",
            temp: 0,
            temp_min: -1,
            temp_max: 1,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_d",
            wind: "Северо-западный",
            wind_abbr: "СЗ",
            wind_speed: 3.5,
            wind_direction: "nw",
            humidity: 92,
            pressure: 758
            },
            {
            type: "evening",
            temp: -2,
            temp_min: -2,
            temp_max: -1,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 2.2,
            wind_direction: "w",
            humidity: 96,
            pressure: 760
            },
            {
            type: "night",
            temp: -3,
            temp_min: -4,
            temp_max: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.9,
            wind_direction: "sw",
            humidity: 95,
            pressure: 760
            },
            {
            type: "day_short",
            temp: 1,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_d",
            wind: "Северо-западный",
            wind_abbr: "СЗ",
            wind_speed: 3.5,
            wind_direction: "nw",
            humidity: 92,
            pressure: 758
            },
            {
            type: "night_short",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.9,
            wind_direction: "sw",
            humidity: 95,
            pressure: 760
            }
            ],
            hours: [
            {
            hour: "0",
            temp: -3,
            weather_code: "cloudy"
            },
            {
            hour: "1",
            temp: -2,
            weather_code: "cloudy"
            },
            {
            hour: "2",
            temp: -2,
            weather_code: "cloudy"
            },
            {
            hour: "3",
            temp: -2,
            weather_code: "cloudy"
            },
            {
            hour: "4",
            temp: -2,
            weather_code: "cloudy"
            },
            {
            hour: "5",
            temp: -2,
            weather_code: "cloudy"
            },
            {
            hour: "6",
            temp: -2,
            weather_code: "cloudy"
            },
            {
            hour: "7",
            temp: -1,
            weather_code: "cloudy"
            },
            {
            hour: "8",
            temp: -1,
            weather_code: "cloudy"
            },
            {
            hour: "9",
            temp: 0,
            weather_code: "cloudy"
            },
            {
            hour: "10",
            temp: 0,
            weather_code: "cloudy"
            },
            {
            hour: "11",
            temp: 1,
            weather_code: "cloudy"
            },
            {
            hour: "12",
            temp: 1,
            weather_code: "cloudy"
            },
            {
            hour: "13",
            temp: 1,
            weather_code: "cloudy"
            },
            {
            hour: "14",
            temp: 0,
            weather_code: "cloudy"
            },
            {
            hour: "15",
            temp: 0,
            weather_code: "cloudy"
            },
            {
            hour: "16",
            temp: -1,
            weather_code: "cloudy"
            },
            {
            hour: "17",
            temp: -1,
            weather_code: "cloudy"
            },
            {
            hour: "18",
            temp: -1,
            weather_code: "cloudy"
            },
            {
            hour: "19",
            temp: -1,
            weather_code: "overcast"
            },
            {
            hour: "20",
            temp: -2,
            weather_code: "overcast"
            },
            {
            hour: "21",
            temp: -2,
            weather_code: "overcast"
            },
            {
            hour: "22",
            temp: -2,
            weather_code: "overcast"
            },
            {
            hour: "23",
            temp: -2,
            weather_code: "overcast"
            }
            ]
            },
            {
            date: "2014-12-06",
            sunrise: "08:41",
            sunset: "15:58",
            moon_code: "0",
            moon_text: "full-moon",
            parts: [
            {
            type: "morning",
            temp: -4,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 3.6,
            wind_direction: "sw",
            humidity: 82,
            pressure: 760
            },
            {
            type: "day",
            temp: -2,
            temp_min: -3,
            temp_max: -2,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_d",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 4.9,
            wind_direction: "s",
            humidity: 76,
            pressure: 759
            },
            {
            type: "evening",
            temp: -3,
            temp_min: -4,
            temp_max: -2,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 5.4,
            wind_direction: "sw",
            humidity: 73,
            pressure: 757
            },
            {
            type: "night",
            temp: -5,
            temp_min: -5,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 4.9,
            wind_direction: "sw",
            humidity: 85,
            pressure: 757
            },
            {
            type: "day_short",
            temp: -2,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_d",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 4.9,
            wind_direction: "s",
            humidity: 76,
            pressure: 759
            },
            {
            type: "night_short",
            temp: -5,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 4.9,
            wind_direction: "sw",
            humidity: 85,
            pressure: 757
            }
            ],
            hours: [
            {
            hour: "0",
            temp: -2,
            weather_code: "overcast"
            },
            {
            hour: "1",
            temp: -3,
            weather_code: "overcast"
            },
            {
            hour: "2",
            temp: -3,
            weather_code: "overcast"
            },
            {
            hour: "3",
            temp: -3,
            weather_code: "overcast"
            },
            {
            hour: "4",
            temp: -3,
            weather_code: "overcast"
            },
            {
            hour: "5",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "6",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "7",
            temp: -4,
            weather_code: "overcast"
            },
            {
            hour: "8",
            temp: -3,
            weather_code: "overcast"
            }
            ]
            },
            {
            date: "2014-12-07",
            sunrise: "08:43",
            sunset: "15:58",
            moon_code: "0",
            moon_text: "full-moon",
            parts: [
            {
            type: "morning",
            temp: -4,
            temp_min: -5,
            temp_max: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 4.4,
            wind_direction: "sw",
            humidity: 71,
            pressure: 756
            },
            {
            type: "day",
            temp: -3,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 3,
            wind_direction: "s",
            humidity: 68,
            pressure: 756
            },
            {
            type: "evening",
            temp: -5,
            temp_min: -5,
            temp_max: -3,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.9,
            wind_direction: "s",
            humidity: 79,
            pressure: 755
            },
            {
            type: "night",
            temp: -8,
            temp_min: -8,
            temp_max: -5,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.8,
            wind_direction: "s",
            humidity: 95,
            pressure: 754
            },
            {
            type: "day_short",
            temp: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 3,
            wind_direction: "s",
            humidity: 68,
            pressure: 756
            },
            {
            type: "night_short",
            temp: -8,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.8,
            wind_direction: "s",
            humidity: 95,
            pressure: 754
            }
            ],
            hours: [ ]
            },
            {
            date: "2014-12-08",
            sunrise: "08:44",
            sunset: "15:57",
            moon_code: "1",
            moon_text: "decreasing-moon",
            parts: [
            {
            type: "morning",
            temp: -6,
            temp_min: -8,
            temp_max: -6,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 3.8,
            wind_direction: "s",
            humidity: 80,
            pressure: 754
            },
            {
            type: "day",
            temp: -4,
            temp_min: -6,
            temp_max: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 4.2,
            wind_direction: "s",
            humidity: 86,
            pressure: 751
            },
            {
            type: "evening",
            temp: -3,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно с прояснениями, небольшой снег",
            weather_code: "cloudy-and-light-snow",
            weather_icon: "bkn_-sn_n",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 3.6,
            wind_direction: "s",
            humidity: 87,
            pressure: 751
            },
            {
            type: "night",
            temp: -6,
            temp_min: -6,
            temp_max: -3,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.5,
            wind_direction: "sw",
            humidity: 97,
            pressure: 753
            },
            {
            type: "day_short",
            temp: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 4.2,
            wind_direction: "s",
            humidity: 86,
            pressure: 751
            },
            {
            type: "night_short",
            temp: -8,
            weather: "облачно с прояснениями",
            weather_code: "cloudy",
            weather_icon: "bkn_n",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.5,
            wind_direction: "sw",
            humidity: 97,
            pressure: 753
            }
            ],
            hours: [ ]
            },
            {
            date: "2014-12-09",
            sunrise: "08:45",
            sunset: "15:57",
            moon_code: "1",
            moon_text: "decreasing-moon",
            parts: [
            {
            type: "morning",
            temp: -3,
            temp_min: -6,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.6,
            wind_direction: "sw",
            humidity: 82,
            pressure: 755
            },
            {
            type: "day",
            temp: -2,
            temp_min: -3,
            temp_max: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 1.6,
            wind_direction: "s",
            humidity: 84,
            pressure: 757
            },
            {
            type: "evening",
            temp: -4,
            temp_min: -4,
            temp_max: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-восточный",
            wind_abbr: "ЮВ",
            wind_speed: 1.2,
            wind_direction: "se",
            humidity: 94,
            pressure: 759
            },
            {
            type: "night",
            temp: -3,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 1.7,
            wind_direction: "sw",
            humidity: 98,
            pressure: 753
            },
            {
            type: "day_short",
            temp: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 1.6,
            wind_direction: "s",
            humidity: 84,
            pressure: 757
            },
            {
            type: "night_short",
            temp: -6,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 1.7,
            wind_direction: "sw",
            humidity: 98,
            pressure: 753
            }
            ],
            hours: [ ]
            },
            {
            date: "2014-12-10",
            sunrise: "08:47",
            sunset: "15:56",
            moon_code: "2",
            moon_text: "decreasing-moon",
            parts: [
            {
            type: "morning",
            temp: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 1.8,
            wind_direction: "w",
            humidity: 92,
            pressure: 754
            },
            {
            type: "day",
            temp: -2,
            temp_min: -3,
            temp_max: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 1.8,
            wind_direction: "w",
            humidity: 93,
            pressure: 754
            },
            {
            type: "evening",
            temp: -3,
            temp_min: -3,
            temp_max: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Северо-восточный",
            wind_abbr: "СВ",
            wind_speed: 2.1,
            wind_direction: "ne",
            humidity: 95,
            pressure: 754
            },
            {
            type: "night",
            temp: -4,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Северо-восточный",
            wind_abbr: "СВ",
            wind_speed: 2.4,
            wind_direction: "ne",
            humidity: 100,
            pressure: 753
            },
            {
            type: "day_short",
            temp: -2,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Западный",
            wind_abbr: "З",
            wind_speed: 1.8,
            wind_direction: "w",
            humidity: 93,
            pressure: 754
            },
            {
            type: "night_short",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Северо-восточный",
            wind_abbr: "СВ",
            wind_speed: 2.4,
            wind_direction: "ne",
            humidity: 100,
            pressure: 753
            }
            ],
            hours: [ ]
            },
            {
            date: "2014-12-11",
            sunrise: "08:48",
            sunset: "15:56",
            moon_code: "3",
            moon_text: "decreasing-moon",
            parts: [
            {
            type: "morning",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Северо-восточный",
            wind_abbr: "СВ",
            wind_speed: 2.5,
            wind_direction: "ne",
            humidity: 92,
            pressure: 751
            },
            {
            type: "day",
            temp: -3,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Восточный",
            wind_abbr: "В",
            wind_speed: 2.4,
            wind_direction: "e",
            humidity: 100,
            pressure: 748
            },
            {
            type: "evening",
            temp: -4,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.6,
            wind_direction: "s",
            humidity: 97,
            pressure: 746
            },
            {
            type: "night",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.6,
            wind_direction: "sw",
            humidity: 94,
            pressure: 746
            },
            {
            type: "day_short",
            temp: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Восточный",
            wind_abbr: "В",
            wind_speed: 2.4,
            wind_direction: "e",
            humidity: 100,
            pressure: 748
            },
            {
            type: "night_short",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.6,
            wind_direction: "sw",
            humidity: 94,
            pressure: 746
            }
            ],
            hours: [ ]
            },
            {
            date: "2014-12-12",
            sunrise: "08:49",
            sunset: "15:56",
            moon_code: "3",
            moon_text: "decreasing-moon",
            parts: [
            {
            type: "morning",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.6,
            wind_direction: "sw",
            humidity: 89,
            pressure: 746
            },
            {
            type: "day",
            temp: -3,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.6,
            wind_direction: "sw",
            humidity: 100,
            pressure: 748
            },
            {
            type: "evening",
            temp: -4,
            temp_min: -4,
            temp_max: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.7,
            wind_direction: "s",
            humidity: 90,
            pressure: 749
            },
            {
            type: "night",
            temp: -6,
            temp_min: -6,
            temp_max: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.9,
            wind_direction: "s",
            humidity: 82,
            pressure: 751
            },
            {
            type: "day_short",
            temp: -3,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Юго-западный",
            wind_abbr: "ЮЗ",
            wind_speed: 2.6,
            wind_direction: "sw",
            humidity: 100,
            pressure: 748
            },
            {
            type: "night_short",
            temp: -6,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.9,
            wind_direction: "s",
            humidity: 82,
            pressure: 751
            }
            ],
            hours: [ ]
            },
            {
            date: "2014-12-13",
            sunrise: "08:50",
            sunset: "15:56",
            moon_code: "4",
            moon_text: "last-quarter",
            parts: [
            {
            type: "morning",
            temp: -5,
            temp_min: -6,
            temp_max: -5,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.8,
            wind_direction: "s",
            humidity: 83,
            pressure: 752
            },
            {
            type: "day",
            temp: -4,
            temp_min: -5,
            temp_max: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.8,
            wind_direction: "s",
            humidity: 97,
            pressure: 754
            },
            {
            type: "evening",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 3.1,
            wind_direction: "s",
            humidity: 86,
            pressure: 751
            },
            {
            type: "night",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.9,
            wind_direction: "s",
            humidity: 89,
            pressure: 750
            },
            {
            type: "day_short",
            temp: -4,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.8,
            wind_direction: "s",
            humidity: 97,
            pressure: 754
            },
            {
            type: "night_short",
            temp: -6,
            weather: "облачно",
            weather_code: "overcast",
            weather_icon: "ovc",
            wind: "Южный",
            wind_abbr: "Ю",
            wind_speed: 2.9,
            wind_direction: "s",
            humidity: 89,
            pressure: 750
            }
            ],
            hours: [ ]
            }
            ]
            };
    },

    render: function () {
        var days = this.props.forecast.map(function (forecast, i) {
            var date = new Date(forecast.date);
            var props = {forecast: forecast};

            if (date < dateutils.getToday()) {
                return null;
            }

            if (dateutils.isToday(new Date(forecast.date))) {
                props.fact = this.props.fact;
            }

            return (<WeatherBriefDay key={i} {...props} />);
        }.bind(this));

        return (
            <div className="weather-brief">
                {days}
            </div>
        );
    }
});

module.exports = WeatherBrief;
