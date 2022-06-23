export default class Component {
    public type: string;

    constructor(type: string) {
        this.type = type;
    }

    getHtmlTemplate(): string {
        return '';
    }

    render(): Element | null {
        const divElement = document.createElement('div');
        divElement.innerHTML = this.getHtmlTemplate();
        return divElement.firstElementChild;
    }
}