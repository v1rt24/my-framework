import Component from '../Component';
import htmlTemplate from './index.html?raw';

export default class Container extends Component {
    private components: any[]; // для добавления контента в тег контейнера

    constructor() {
        super('container');
        this.components = [];
    }

    add(component: any) {
        this.components.push(component);
    }

    getHtmlTemplate(): string {
        return htmlTemplate;
    }

    // Переопределяем метод класса Component
    render(): Element | null {
        const element = super.render();

        element?.append(...this.components.map(x => x.render()));
        return element;
    }
}