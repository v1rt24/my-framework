import Component from '../Component';
import htmlTemplate from './index.html?raw';
import {IPostType} from '../../types/Post.type';

type User = Pick<IPostType['user'], 'name' | 'family'>
type Content = Pick<IPostType['content'], 'img' | 'title' | 'desc' | 'nameButton'>

export default class Post extends Component {
    private user: User;
    private content: Content;

    // private comments: any;

    constructor(args?: IPostType) {
        super('post');

        // Создаём данные по умолчанию
        const data: IPostType = {
            user: {
                name: 'notName',
                family: 'notFamily',
            },
            content: {
                img: '',
                title: '',
                desc: '',
                nameButton: '',
            },
            comments: [],

            // Перезаписываем данные по умолчанию если данные пришли
            ...args,
        };

        // Формирование данных
        this.user = {
            name: data.user.name,
            family: data.user.family,
        };

        this.content = {
            img: data.content.img,
            title: data.content.title,
            desc: data.content.desc,
            nameButton: data.content.nameButton,
        };

        /*this.comments = data.comments.map(com => ({
            name: com.name,
        }));*/
    }

    getHtmlTemplate(): string {
        return htmlTemplate
            .replace(/{%post.img%}/g, this.content.img)
            .replace(/{%user.name%}/g, this.user.name)
            .replace(/{%user.family%}/g, this.user.family)
            .replace(/{%title%}/g, this.content.title)
            .replace(/{%desc%}/g, this.content.desc)
            .replace(/{%but.name%}/g, this.content.nameButton);
    }
}