import Page from './Page';
import {IRouterType} from '../types/Router.type';

export default class Router {
    public routes: IRouterType[];
    public route: IRouterType | null;
    public page: Page | null;

    constructor() {
        this.routes = []; // будут находиться все маршруты (url)
        this.route = null; // будет находиться текущий маршрут (url)
        this.page = null; // будет находиться контент страницы
    }

    // Добавление маршрутов
    add(path: string, container: any[]) {
        this.routes.push({
            path,
            container,
        });
    }

    // Обновление приложения при изменении URL
    update() {
        for (const route of this.routes) {
            if (route.path.match(location.pathname)) {
                this.route = route;
                this.page = new Page(route.container);
            }
        }
    }
}