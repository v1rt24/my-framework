import './libs/bootstrap.min.css';
import './libs/bootstrap.bundle.min';
import './css/index.css';

////////////////////////////

import Application from './modules/Application';
import Header from './components/Header';
import Container from './components/Container';
import Post from './components/Post';

const app = new Application({
    el: document.getElementById('app')!,
});

// Шапка сайта
const header = new Header();

// Блок main, в который помещаем контент страницы
const container = new Container();
// Добавляем контент в тег main
container.add(new Post({
    user: {
        name: 'Роман',
        family: 'Рублёв',
    },
    content: {
        img: 'img.jpg',
        title: 'Название карточки',
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        nameButton: 'Подробнее',
    },
    comments: [
        {name: 'Элемент 1'},
        {name: 'Элемент 2'},
        {name: 'Элемент 3'},
        {name: 'Элемент 4'},
        {name: 'Элемент 5'},
    ],
}));

// Ещё добавляем статью
// container.add(new Post());

// Добавляем путь и HTML вёрстку, которая должна выводиться по этому пути
app.router.add('/', [header, container]);

// Обновляем приложение при изменении URL
app.update();

console.log(app);