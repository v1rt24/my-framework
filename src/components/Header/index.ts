import Component from '../Component';
import htmlTemplate from './index.html?raw';

export default class Header extends Component {
    constructor() {
        super('header');
    }

    getHtmlTemplate(): string {
        return htmlTemplate;
    }
}