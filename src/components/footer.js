var React = require('react');

var Footer = React.createClass({
    render: function () {
        return (
            <div className="footer">
                <span className="footer__copyright">
                    &copy; 2008-{new Date().getFullYear()}
                    &nbsp;&nbsp;ООО&nbsp;
                    &laquo;<a href="http://yandex.ru">Яндекс</a>&raquo;
                </span>
                <ul className="footer__menu">
                    <li className="footer__menu-item">
                        <a href="#">Обратная связь</a>
                    </li>
                    <li className="footer__menu-item">
                        <a href="#">Полная версия</a>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Footer;
