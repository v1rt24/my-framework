import Router from './Router';
import {IApplicationType} from '../types/Application.type';

export default class Application {
    public root: HTMLElement;
    public router: Router;

    constructor(args: IApplicationType) {
        this.root = args.el; // находится блок, в который будем помещать HTML
        this.router = new Router(); // создаём объект класса Router
    }

    // Обновление приложения при изменении URL
    update() {
        this.router.update(); // обновление приложения при изменении URL
        this.root.textContent = ''; // очищаем блок, в котором находится весь HTML
        this.root.append(this.router.page.fragment); // помещаем HTML
    }
}